'use client';

/* eslint-disable @next/next/no-img-element */

import { ExternalLink, Globe } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface LinkPreviewProps {
  url: string;
  title?: string;
  description?: string;
  image?: string;
  className?: string;
}

export function LinkPreview({ url, title, description, image, className }: LinkPreviewProps) {
  const [fetched, setFetched] = useState<{
    title?: string;
    description?: string;
    image?: string;
  } | null>(null);

  // Extract domain from URL for display
  const getDomain = (urlString: string) => {
    try {
      const urlObj = new URL(urlString);
      return urlObj.hostname.replace('www.', '');
    } catch {
      return urlString;
    }
  };

  const domain = getDomain(url);
  const displayTitle = title ?? fetched?.title ?? domain;
  const displayDescription = description ?? fetched?.description;
  const displayImage = image ?? fetched?.image;

  useEffect(() => {
    const needsFetch = !title || !description || !image;
    if (!needsFetch) return;

    const controller = new AbortController();
    const run = async () => {
      try {
        const res = await fetch(`/api/link-preview?url=${encodeURIComponent(url)}`, {
          signal: controller.signal,
        });
        if (!res.ok) return;
        const json = (await res.json()) as {
          title?: string;
          description?: string;
          image?: string;
        };
        setFetched(json);
      } catch {
        // Ignore
      }
    };
    run();
    return () => controller.abort();
  }, [url, title, description, image]);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'not-prose group my-4 flex overflow-hidden rounded-lg border border-border bg-card/70 transition-all hover:border-foreground hover:bg-card sm:my-6',
        className,
      )}
    >
      {displayImage && (
        <div className="relative hidden w-[180px] shrink-0 overflow-hidden border-r border-border sm:block">
          {/* Use <img> to allow arbitrary OG image domains without Next.js remotePatterns config */}
          <img
            src={displayImage}
            alt={displayTitle}
            className="absolute inset-0 h-full w-full object-cover transition-transform group-hover:scale-105"
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        </div>
      )}
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-1 p-3 sm:gap-2 sm:p-4">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Globe className="h-3 w-3 shrink-0" />
          <span className="truncate">{domain}</span>
        </div>
        <h4 className="truncate text-sm font-semibold text-foreground sm:text-base">
          {displayTitle}
        </h4>
        {displayDescription && (
          <p className="line-clamp-2 text-xs text-muted-foreground sm:text-sm">
            {displayDescription}
          </p>
        )}
      </div>
      <div className="flex items-center pr-3 sm:pr-4">
        <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
      </div>
    </a>
  );
}
