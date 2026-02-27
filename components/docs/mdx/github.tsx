'use client';

import { Star, GitFork, Users, ArrowUpRight } from 'lucide-react';
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

/** Minimal GitHub mark (Octocat silhouette path) */
function GitHubMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden className={className}>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

/* ─────────────────────── Shared card shell ─────────────────────── */

interface CardShellProps {
  href: string;
  label: string;
  className?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

function CardShell({ href, label, className, children, footer }: CardShellProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'not-prose group my-4 block overflow-hidden rounded-xl border border-border bg-card/60 transition-all hover:border-foreground/40 hover:bg-card hover:shadow-sm sm:my-6',
        className,
      )}
    >
      {/* Header strip */}
      <div className="flex items-center gap-2 border-b border-border/60 px-4 py-2.5">
        <GitHubMark className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
        <span className="text-2xs font-medium uppercase tracking-wide text-muted-foreground">
          {label}
        </span>
        <ArrowUpRight className="ml-auto h-3.5 w-3.5 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
      </div>

      {/* Body */}
      <div className="p-4">{children}</div>

      {/* Optional footer strip */}
      {footer && (
        <div className="border-t border-border/60 px-4 py-2.5">{footer}</div>
      )}
    </a>
  );
}

/* ─────────────────────── GitHub User Card ─────────────────────── */

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
  const [fetched, setFetched] = useState<{
    login?: string;
    name?: string;
    bio?: string;
    avatar?: string;
  } | null>(null);

  const profileUrl = 'url' in props ? props.url : `https://github.com/${props.username}`;
  const parsed = parseGitHubUrl(profileUrl);
  const urlLogin =
    'username' in props ? props.username : parsed?.kind === 'account' ? parsed.login : '';
  const isValid = Boolean(urlLogin);

  // Prefer login from API response (canonical casing), fall back to URL-parsed login
  const displayLogin = fetched?.login ?? urlLogin ?? 'github-user';
  const displayName = props.name ?? fetched?.name;
  const displayBio = props.bio ?? fetched?.bio;
  const avatarUrl = props.avatar ?? fetched?.avatar ?? `https://github.com/${displayLogin}.png`;

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
          login?: string;
          name?: string;
          bio?: string;
          avatar?: string;
        };
        if (json.kind !== 'user') return;
        setFetched({ login: json.login, name: json.name, bio: json.bio, avatar: json.avatar });
      } catch {
        // Ignore
      }
    };
    run();
    return () => controller.abort();
  }, [isValid, profileUrl, props.name, props.bio, props.avatar]);

  if (!isValid) return null;

  return (
    <CardShell href={profileUrl} label="GitHub Profile" className={props.className}>
      <div className="flex items-center gap-3.5">
        <Image
          src={avatarUrl}
          alt={displayLogin}
          width={48}
          height={48}
          unoptimized
          className="h-11 w-11 shrink-0 rounded-full ring-1 ring-border"
        />
        <div className="min-w-0 flex-1">
          {displayName && (
            <p className="truncate text-sm font-semibold text-foreground">{displayName}</p>
          )}
          <p className={cn('text-xs text-muted-foreground', !displayName && 'font-semibold text-sm text-foreground')}>
            @{displayLogin}
          </p>
          {displayBio && (
            <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
              {displayBio}
            </p>
          )}
        </div>
      </div>
    </CardShell>
  );
}

/* ─────────────────────── GitHub Repo Card ─────────────────────── */

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

  const hasStats = displayLanguage || typeof displayStars === 'number' || typeof displayForks === 'number';

  const statsFooter = hasStats ? (
    <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
      {displayLanguage && (
        <span className="flex items-center gap-1.5">
          <span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: languageColor }}
          />
          {displayLanguage}
        </span>
      )}
      {typeof displayStars === 'number' && (
        <span className="flex items-center gap-1">
          <Star className="h-3.5 w-3.5" />
          {displayStars.toLocaleString()}
        </span>
      )}
      {typeof displayForks === 'number' && (
        <span className="flex items-center gap-1">
          <GitFork className="h-3.5 w-3.5" />
          {displayForks.toLocaleString()}
        </span>
      )}
    </div>
  ) : undefined;

  return (
    <CardShell
      href={fetched?.url ?? repoUrl}
      label="GitHub Repository"
      className={props.className}
      footer={statsFooter}
    >
      <div className="flex items-start gap-3">
        <Image
          src={avatarUrl}
          alt={ownerLabel}
          width={36}
          height={36}
          unoptimized
          className="h-9 w-9 shrink-0 rounded-full ring-1 ring-border"
        />
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold leading-snug text-foreground">
            <span className="font-normal text-muted-foreground">{ownerLabel}/</span>
            {repo}
          </p>
          {displayDescription && (
            <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
              {displayDescription}
            </p>
          )}
        </div>
      </div>
    </CardShell>
  );
}

/* ─────────────────────── GitHub Org Card ─────────────────────── */

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
    login?: string;
    name?: string;
    description?: string;
    avatar?: string;
  } | null>(null);

  const orgUrl = 'url' in props ? props.url : `https://github.com/${props.org}`;
  const parsed = parseGitHubUrl(orgUrl);
  const urlOrg = 'org' in props ? props.org : parsed?.kind === 'account' ? parsed.login : '';
  const isValid = Boolean(urlOrg);

  // Prefer login from API response (canonical casing), fall back to URL-parsed org
  const displayLogin = fetched?.login ?? urlOrg ?? 'github-org';
  const displayName = props.name ?? fetched?.name;
  const displayDescription = props.description ?? fetched?.description;
  const avatarUrl = props.avatar ?? fetched?.avatar ?? `https://github.com/${displayLogin}.png`;

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
          login?: string;
          name?: string;
          description?: string;
          avatar?: string;
        };
        if (json.kind !== 'org') return;
        setFetched({ login: json.login, name: json.name, description: json.description, avatar: json.avatar });
      } catch {
        // Ignore
      }
    };
    run();
    return () => controller.abort();
  }, [isValid, orgUrl, props.name, props.description, props.avatar]);

  if (!isValid) return null;

  const membersFooter =
    typeof props.members === 'number' ? (
      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <Users className="h-3.5 w-3.5" />
        <span>{props.members.toLocaleString()} members</span>
      </div>
    ) : undefined;

  return (
    <CardShell
      href={orgUrl}
      label="GitHub Organization"
      className={props.className}
      footer={membersFooter}
    >
      <div className="flex items-center gap-3.5">
        <Image
          src={avatarUrl}
          alt={displayLogin}
          width={48}
          height={48}
          unoptimized
          className="h-11 w-11 shrink-0 rounded-lg ring-1 ring-border"
        />
        <div className="min-w-0 flex-1">
          {displayName && (
            <p className="truncate text-sm font-semibold text-foreground">{displayName}</p>
          )}
          <p className={cn('text-xs text-muted-foreground', !displayName && 'font-semibold text-sm text-foreground')}>
            @{displayLogin}
          </p>
          {displayDescription && (
            <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
              {displayDescription}
            </p>
          )}
        </div>
      </div>
    </CardShell>
  );
}
