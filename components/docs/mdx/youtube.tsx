'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Play } from 'lucide-react';
import { cn } from '@/lib/utils';

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  aspectRatio?: '16:9' | '4:3' | '1:1';
  className?: string;
}

export function YouTubeEmbed({
  videoId,
  title = 'YouTube video',
  aspectRatio = '16:9',
  className,
}: YouTubeEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const aspectRatioClasses = {
    '16:9': 'aspect-video',
    '4:3': 'aspect-[4/3]',
    '1:1': 'aspect-square',
  };

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const [thumbnailSrc, setThumbnailSrc] = useState(thumbnailUrl);

  useEffect(() => {
    setThumbnailSrc(thumbnailUrl);
  }, [thumbnailUrl]);

  return (
    <div className={cn('not-prose my-4 overflow-hidden rounded-lg sm:my-6', className)}>
      <div className={cn('relative w-full bg-muted', aspectRatioClasses[aspectRatio])}>
        {!isLoaded ? (
          <button
            onClick={() => setIsLoaded(true)}
            className="group absolute inset-0 flex cursor-pointer items-center justify-center"
            aria-label={`Play ${title}`}
          >
            <Image
              src={thumbnailSrc}
              alt={title}
              fill
              sizes="100vw"
              className="object-cover transition-transform group-hover:scale-105"
              onError={() => {
                // Fallback to hqdefault if maxresdefault is not available
                setThumbnailSrc(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`);
              }}
            />
            <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/30" />
            <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-red-600 transition-transform group-hover:scale-110 sm:h-16 sm:w-16">
              <Play className="h-6 w-6 fill-white text-white sm:h-7 sm:w-7" />
            </div>
          </button>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        )}
      </div>
      {title && title !== 'YouTube video' && (
        <div className="border border-t-0 border-border bg-card/70 px-3 py-2 sm:px-4">
          <p className="text-sm font-medium text-foreground">{title}</p>
        </div>
      )}
    </div>
  );
}
