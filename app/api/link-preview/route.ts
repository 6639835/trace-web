import { NextResponse } from 'next/server';
import { hasPublicDnsResolution, parsePublicHttpUrl } from '@/lib/server/safe-url';
import { extractHtmlMetadata } from '@/lib/server/html-metadata';

export const runtime = 'nodejs';

function withTimeout(signal: AbortSignal, ms: number) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), ms);
  const onAbort = () => controller.abort();
  signal.addEventListener('abort', onAbort);

  return {
    signal: controller.signal,
    cleanup() {
      clearTimeout(id);
      signal.removeEventListener('abort', onAbort);
    },
  };
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const urlParam = searchParams.get('url');
  if (!urlParam) {
    return NextResponse.json({ error: 'Missing url' }, { status: 400 });
  }

  const target = parsePublicHttpUrl(urlParam);
  if (!target) {
    return NextResponse.json({ error: 'Invalid or blocked url' }, { status: 400 });
  }
  const hasPublicDns = await hasPublicDnsResolution(target.hostname);
  if (!hasPublicDns) {
    return NextResponse.json({ error: 'Invalid or blocked url' }, { status: 400 });
  }

  const abort = withTimeout(request.signal, 8000);
  try {
    const res = await fetch(target.toString(), {
      redirect: 'follow',
      signal: abort.signal,
      headers: {
        'user-agent': 'trace-web/1.0 link-preview (+https://github.com/Trace-iOS/trace-web)',
        accept: 'text/html,application/xhtml+xml',
      },
    });

    const finalUrl = res.url || target.toString();
    const contentType = res.headers.get('content-type') ?? '';
    if (!res.ok || !contentType.toLowerCase().includes('text/html')) {
      return NextResponse.json(
        { url: finalUrl, title: undefined, description: undefined, image: undefined },
        {
          status: 200,
          headers: {
            'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
          },
        },
      );
    }

    const html = await res.text();
    const meta = extractHtmlMetadata(html);

    const image = meta.image ? new URL(meta.image, finalUrl).toString() : undefined;

    return NextResponse.json(
      {
        url: finalUrl,
        title: meta.title,
        description: meta.description,
        image,
        siteName: meta.siteName,
      },
      {
        status: 200,
        headers: {
          'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=604800',
        },
      },
    );
  } catch {
    return NextResponse.json(
      { url: target.toString(), title: undefined, description: undefined, image: undefined },
      { status: 200 },
    );
  } finally {
    abort.cleanup();
  }
}
