import { NextResponse } from 'next/server';
import { hasPublicDnsResolution, parsePublicHttpUrl } from '@/lib/server/safe-url';

export const runtime = 'nodejs';

type GitHubKind = 'repo' | 'user' | 'org';

function parseGitHubPath(url: URL) {
  if (url.hostname.toLowerCase() !== 'github.com') return null;
  const [first, second] = url.pathname.split('/').filter(Boolean);
  if (first && !second) return { kind: 'account' as const, login: first };
  if (first && second) return { kind: 'repo' as const, owner: first, repo: second };
  return null;
}

function githubHeaders() {
  const token = process.env['GITHUB_TOKEN'];
  return {
    accept: 'application/vnd.github+json',
    'user-agent': 'trace-web/1.0 (+https://github.com/Trace-iOS/trace-web)',
    ...(token ? { authorization: `Bearer ${token}` } : {}),
  };
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const urlParam = searchParams.get('url');
  if (!urlParam) return NextResponse.json({ error: 'Missing url' }, { status: 400 });

  const target = parsePublicHttpUrl(urlParam);
  if (!target) return NextResponse.json({ error: 'Invalid or blocked url' }, { status: 400 });
  const hasPublicDns = await hasPublicDnsResolution(target.hostname);
  if (!hasPublicDns) {
    return NextResponse.json({ error: 'Invalid or blocked url' }, { status: 400 });
  }

  const parsed = parseGitHubPath(target);
  if (!parsed) return NextResponse.json({ error: 'Not a github.com url' }, { status: 400 });

  try {
    if (parsed.kind === 'repo') {
      const apiUrl = `https://api.github.com/repos/${encodeURIComponent(parsed.owner)}/${encodeURIComponent(parsed.repo)}`;
      const res = await fetch(apiUrl, { headers: githubHeaders() });
      if (!res.ok) return NextResponse.json({ error: 'GitHub API error' }, { status: 502 });
      const data = (await res.json()) as {
        html_url: string;
        name: string;
        description: string | null;
        stargazers_count: number;
        forks_count: number;
        language: string | null;
        owner: { login: string; avatar_url: string };
      };

      return NextResponse.json(
        {
          kind: 'repo' as GitHubKind,
          url: data.html_url,
          owner: data.owner.login,
          repo: data.name,
          description: data.description ?? undefined,
          stars: data.stargazers_count,
          forks: data.forks_count,
          language: data.language ?? undefined,
          avatar: data.owner.avatar_url,
        },
        {
          headers: {
            'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
          },
        },
      );
    }

    const apiUrl = `https://api.github.com/users/${encodeURIComponent(parsed.login)}`;
    const res = await fetch(apiUrl, { headers: githubHeaders() });
    if (!res.ok) return NextResponse.json({ error: 'GitHub API error' }, { status: 502 });
    const data = (await res.json()) as {
      html_url: string;
      login: string;
      name: string | null;
      bio: string | null;
      avatar_url: string;
      type: 'User' | 'Organization';
      description?: string | null;
    };

    const kind: GitHubKind = data.type === 'Organization' ? 'org' : 'user';
    const description =
      kind === 'org'
        ? ((typeof data.description === 'string' ? data.description : data.bio) ?? undefined)
        : undefined;

    return NextResponse.json(
      {
        kind,
        url: data.html_url,
        login: data.login,
        name: data.name ?? undefined,
        bio: kind === 'user' ? (data.bio ?? undefined) : undefined,
        description,
        avatar: data.avatar_url,
      },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        },
      },
    );
  } catch {
    return NextResponse.json({ error: 'Fetch failed' }, { status: 502 });
  }
}
