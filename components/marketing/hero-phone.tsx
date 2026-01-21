'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useCallback, useEffect, useRef, useState } from 'react';

export function HeroPhone() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [assetsReady, setAssetsReady] = useState(false);
  const loadedCountRef = useRef(0);

  // Avoid hydration mismatch
  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  // Preload both theme screenshots to avoid swap delay on theme change.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const sources = ['/iphone-screenshot-dark.png', '/iphone-screenshot-light.png'];
    sources.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  const isDark = mounted && resolvedTheme === 'dark';
  const handleLoaded = useCallback(() => {
    loadedCountRef.current += 1;
    if (loadedCountRef.current >= 2) {
      setAssetsReady(true);
    }
  }, []);

  return (
    <div className="flex items-start justify-center lg:justify-end">
      <div
        className={`relative w-[280px] transition-opacity duration-200 md:w-[320px] lg:w-[360px] ${
          assetsReady ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Screenshot layer - positioned behind the frame */}
        <div className="absolute inset-[5%] bottom-[1.5%] top-[1.5%] overflow-hidden rounded-[12%]">
          <Image
            src="/iphone-screenshot-dark.png"
            alt={isDark ? 'Trace iOS App Screenshot' : ''}
            fill
            className={`object-cover transition-opacity duration-200 ${isDark ? 'opacity-100' : 'opacity-0'}`}
            sizes="(min-width: 1024px) 360px, (min-width: 768px) 320px, 280px"
            priority
            quality={100}
            unoptimized
            onLoad={handleLoaded}
          />
          <Image
            src="/iphone-screenshot-light.png"
            alt={!isDark ? 'Trace iOS App Screenshot' : ''}
            fill
            className={`object-cover transition-opacity duration-200 ${isDark ? 'opacity-0' : 'opacity-100'}`}
            sizes="(min-width: 1024px) 360px, (min-width: 768px) 320px, 280px"
            priority
            quality={100}
            unoptimized
            onLoad={handleLoaded}
          />
        </div>

        {/* iPhone frame overlay */}
        <Image
          src="/iphone-16-pro-frame.png"
          alt=""
          width={874}
          height={1778}
          className="pointer-events-none relative h-auto w-full select-none"
          priority
          quality={100}
          unoptimized
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
