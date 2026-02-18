'use client';

import { ExternalLink, Star, GitFork, Users, Building2, User } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

function parseGitHubUrl(urlString: string) {
  try {
    const url = new URL(urlString);
    if (url.hostname.toLowerCase() !== 'github.com') return null;
    const parts = url.pathname.split('/').filter(Boolean);
    if (parts.length === 1) return { kind: 'account' as const, login: parts[0] };
    if (parts.length >= 2) return { kind: 'repo' as const, owner: parts[0], repo: parts[1] };
    return null;
  } catch {
    return null;
  }
}

// GitHub User Card
type GitHubUserProps =
  | {
      url: string;
      name?: string;
      bio?: string;
      avatar?: string;
      className?: string;
    }
  | {
      username: string;
      name?: string;
      bio?: string;
      avatar?: string;
      className?: string;
    };

export function GitHubUser(props: GitHubUserProps) {
  const [fetched, setFetched] = useState<{ name?: string; bio?: string; avatar?: string } | null>(
    null,
  );

  const profileUrl = 'url' in props ? props.url : `https://github.com/${props.username}`;
  const parsed = parseGitHubUrl(profileUrl);
  const username =
    'username' in props ? props.username : parsed?.kind === 'account' ? parsed.login : '';
  const isValid = Boolean(username);
  const safeUsername = username || 'github-user';

  const displayName = props.name ?? fetched?.name ?? safeUsername;
  const displayBio = props.bio ?? fetched?.bio;
  const avatarUrl = props.avatar ?? fetched?.avatar ?? `https://github.com/${safeUsername}.png`;

  useEffect(() => {
    if (!isValid) return;
    const needsFetch = !props.name || !props.bio || !props.avatar;
    if (!needsFetch) return;

    const controller = new AbortController();
    const run = async () => {
      try {
        const res = await fetch(`/api/github?url=${encodeURIComponent(profileUrl)}`, {
          signal: controller.signal,
        });
        if (!res.ok) return;
        const json = (await res.json()) as {
          kind: 'user' | 'org';
          name?: string;
          bio?: string;
          avatar?: string;
        };
        if (json.kind !== 'user') return;
        setFetched({ name: json.name, bio: json.bio, avatar: json.avatar });
      } catch {
        // Ignore
      }
    };
    run();
    return () => controller.abort();
  }, [isValid, profileUrl, props.name, props.bio, props.avatar]);

  if (!isValid) return null;

  return (
    <a
      href={profileUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'not-prose group my-4 flex items-center gap-3 rounded-lg border border-border bg-card/70 p-3 transition-all hover:border-foreground hover:bg-card sm:my-6 sm:gap-4 sm:p-4',
        props.className,
      )}
    >
      <Image
        src={avatarUrl}
        alt={displayName}
        width={56}
        height={56}
        sizes="(min-width: 640px) 56px, 48px"
        unoptimized
        className="h-12 w-12 shrink-0 rounded-full sm:h-14 sm:w-14"
      />
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <User className="h-3 w-3 shrink-0 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">GitHub User</span>
        </div>
        <h4 className="truncate text-sm font-semibold text-foreground sm:text-base">
          {displayName}
        </h4>
        <p className="truncate text-xs text-muted-foreground sm:text-sm">@{safeUsername}</p>
        {displayBio && (
          <p className="mt-1 line-clamp-2 text-xs text-muted-foreground sm:text-sm">{displayBio}</p>
        )}
      </div>
      <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
    </a>
  );
}

// GitHub Repository Card
type GitHubRepoProps =
  | {
      url: string;
      description?: string;
      stars?: number;
      forks?: number;
      language?: string;
      languageColor?: string;
      className?: string;
    }
  | {
      owner: string;
      repo: string;
      description?: string;
      stars?: number;
      forks?: number;
      language?: string;
      languageColor?: string;
      className?: string;
    };

export function GitHubRepo(props: GitHubRepoProps) {
  const [fetched, setFetched] = useState<{
    description?: string;
    stars?: number;
    forks?: number;
    language?: string;
    avatar?: string;
    url?: string;
  } | null>(null);

  const repoUrl = 'url' in props ? props.url : `https://github.com/${props.owner}/${props.repo}`;
  const parsed = parseGitHubUrl(repoUrl);
  const isValid = Boolean(parsed && parsed.kind === 'repo');

  const owner = parsed && parsed.kind === 'repo' ? parsed.owner : '';
  const repo = parsed && parsed.kind === 'repo' ? parsed.repo : '';
  const ownerLabel = owner || 'github';
  const repoLabel = owner && repo ? `${owner}/${repo}` : 'github/repository';
  const avatarUrl = fetched?.avatar ?? `https://github.com/${ownerLabel}.png`;

  const displayDescription = props.description ?? fetched?.description;
  const displayStars = props.stars ?? fetched?.stars;
  const displayForks = props.forks ?? fetched?.forks;
  const displayLanguage = props.language ?? fetched?.language;
  const languageColor = props.languageColor ?? 'hsl(var(--primary))';

  useEffect(() => {
    if (!isValid) return;
    const needsFetch =
      !props.description ||
      typeof props.stars !== 'number' ||
      typeof props.forks !== 'number' ||
      !props.language;
    if (!needsFetch) return;

    const controller = new AbortController();
    const run = async () => {
      try {
        const res = await fetch(`/api/github?url=${encodeURIComponent(repoUrl)}`, {
          signal: controller.signal,
        });
        if (!res.ok) return;
        const json = (await res.json()) as {
          kind: 'repo';
          url: string;
          description?: string;
          stars?: number;
          forks?: number;
          language?: string;
          avatar?: string;
        };
        if (json.kind !== 'repo') return;
        setFetched({
          url: json.url,
          description: json.description,
          stars: json.stars,
          forks: json.forks,
          language: json.language,
          avatar: json.avatar,
        });
      } catch {
        // Ignore
      }
    };
    run();
    return () => controller.abort();
  }, [isValid, repoUrl, props.description, props.stars, props.forks, props.language]);

  if (!isValid) return null;

  return (
    <a
      href={fetched?.url ?? repoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'not-prose group my-4 flex flex-col gap-3 rounded-lg border border-border bg-card/70 p-3 transition-all hover:border-foreground hover:bg-card sm:my-6 sm:p-4',
        props.className,
      )}
    >
      <div className="flex items-start gap-3">
        <Image
          src={avatarUrl}
          alt={ownerLabel}
          width={40}
          height={40}
          sizes="(min-width: 640px) 40px, 32px"
          unoptimized
          className="h-8 w-8 shrink-0 rounded-full sm:h-10 sm:w-10"
        />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <svg
              className="h-3.5 w-3.5 shrink-0 text-muted-foreground"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z" />
            </svg>
            <span className="truncate text-sm font-semibold text-foreground sm:text-base">
              {repoLabel}
            </span>
          </div>
          {displayDescription && (
            <p className="mt-1 line-clamp-2 text-xs text-muted-foreground sm:text-sm">
              {displayDescription}
            </p>
          )}
        </div>
        <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
      </div>

      <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground sm:gap-4 sm:text-sm">
        {displayLanguage && (
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: languageColor }} />
            <span>{displayLanguage}</span>
          </div>
        )}
        {typeof displayStars === 'number' && (
          <div className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5" />
            <span>{displayStars.toLocaleString()}</span>
          </div>
        )}
        {typeof displayForks === 'number' && (
          <div className="flex items-center gap-1">
            <GitFork className="h-3.5 w-3.5" />
            <span>{displayForks.toLocaleString()}</span>
          </div>
        )}
      </div>
    </a>
  );
}

// GitHub Organization Card
type GitHubOrgProps =
  | {
      url: string;
      name?: string;
      description?: string;
      avatar?: string;
      members?: number;
      className?: string;
    }
  | {
      org: string;
      name?: string;
      description?: string;
      avatar?: string;
      members?: number;
      className?: string;
    };

export function GitHubOrg(props: GitHubOrgProps) {
  const [fetched, setFetched] = useState<{
    name?: string;
    description?: string;
    avatar?: string;
  } | null>(null);

  const orgUrl = 'url' in props ? props.url : `https://github.com/${props.org}`;
  const parsed = parseGitHubUrl(orgUrl);
  const org = 'org' in props ? props.org : parsed?.kind === 'account' ? parsed.login : '';
  const isValid = Boolean(org);
  const orgLabel = org || 'github-org';

  const displayName = props.name ?? fetched?.name ?? orgLabel;
  const displayDescription = props.description ?? fetched?.description;
  const avatarUrl = props.avatar ?? fetched?.avatar ?? `https://github.com/${orgLabel}.png`;

  useEffect(() => {
    if (!isValid) return;
    const needsFetch = !props.name || !props.description || !props.avatar;
    if (!needsFetch) return;

    const controller = new AbortController();
    const run = async () => {
      try {
        const res = await fetch(`/api/github?url=${encodeURIComponent(orgUrl)}`, {
          signal: controller.signal,
        });
        if (!res.ok) return;
        const json = (await res.json()) as {
          kind: 'org' | 'user';
          name?: string;
          description?: string;
          avatar?: string;
        };
        if (json.kind !== 'org') return;
        setFetched({ name: json.name, description: json.description, avatar: json.avatar });
      } catch {
        // Ignore
      }
    };
    run();
    return () => controller.abort();
  }, [isValid, orgUrl, props.name, props.description, props.avatar]);

  if (!isValid) return null;

  return (
    <a
      href={orgUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'not-prose group my-4 flex items-center gap-3 rounded-lg border border-border bg-card/70 p-3 transition-all hover:border-foreground hover:bg-card sm:my-6 sm:gap-4 sm:p-4',
        props.className,
      )}
    >
      <Image
        src={avatarUrl}
        alt={displayName}
        width={56}
        height={56}
        sizes="(min-width: 640px) 56px, 48px"
        unoptimized
        className="h-12 w-12 shrink-0 rounded-lg sm:h-14 sm:w-14"
      />
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <Building2 className="h-3 w-3 shrink-0 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">GitHub Organization</span>
        </div>
        <h4 className="truncate text-sm font-semibold text-foreground sm:text-base">
          {displayName}
        </h4>
        <p className="truncate text-xs text-muted-foreground sm:text-sm">@{orgLabel}</p>
        {displayDescription && (
          <p className="mt-1 line-clamp-2 text-xs text-muted-foreground sm:text-sm">
            {displayDescription}
          </p>
        )}
        {typeof props.members === 'number' && (
          <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
            <Users className="h-3 w-3" />
            <span>{props.members.toLocaleString()} members</span>
          </div>
        )}
      </div>
      <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
    </a>
  );
}
