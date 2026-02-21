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
        'not-prose group my-4 flex flex-col overflow-hidden rounded-lg border border-border bg-card/70 transition-all hover:border-foreground hover:bg-card sm:my-6 sm:flex-row',
        className,
      )}
    >
      {displayImage && (
        <div className="w-full shrink-0 overflow-hidden border-b border-border sm:w-[220px] sm:border-r sm:border-b-0">
          {/* Use <img> to allow arbitrary OG image domains without Next.js remotePatterns config */}
          <img
            src={displayImage}
            alt={displayTitle}
            className="block h-auto w-full transition-transform duration-300 group-hover:scale-[1.02]"
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        </div>
      )}
      <div className="flex min-w-0 flex-1 items-start gap-3 p-3 sm:p-4">
        <div className="flex min-w-0 flex-1 flex-col justify-center gap-1 sm:gap-2">
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
        <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
      </div>
    </a>
  );
}
