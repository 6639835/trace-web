"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";

export function HeroPhone() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [assetsReady, setAssetsReady] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Preload both theme screenshots to avoid swap delay on theme change.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const sources = ["/iphone-screenshot-dark.png", "/iphone-screenshot-light.png"];
    sources.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  const isDark = mounted && resolvedTheme === "dark";
  const handleLoaded = useCallback(() => {
    setLoadedCount((count) => {
      const next = count + 1;
      if (next >= 2) setAssetsReady(true);
      return next;
    });
  }, []);

  return (
    <div className="flex justify-center lg:justify-end items-start">
      <div
        className={`relative w-[280px] md:w-[320px] lg:w-[360px] transition-opacity duration-200 ${
          assetsReady ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Screenshot layer - positioned behind the frame */}
        <div className="absolute inset-[5%] top-[1.5%] bottom-[1.5%] rounded-[12%] overflow-hidden">
          <Image
            src="/iphone-screenshot-dark.png"
            alt={isDark ? "Trace iOS App Screenshot" : ""}
            fill
            className={`object-cover transition-opacity duration-200 ${isDark ? "opacity-100" : "opacity-0"}`}
            sizes="(min-width: 1024px) 360px, (min-width: 768px) 320px, 280px"
            priority
            quality={100}
            onLoadingComplete={handleLoaded}
          />
          <Image
            src="/iphone-screenshot-light.png"
            alt={!isDark ? "Trace iOS App Screenshot" : ""}
            fill
            className={`object-cover transition-opacity duration-200 ${isDark ? "opacity-0" : "opacity-100"}`}
            sizes="(min-width: 1024px) 360px, (min-width: 768px) 320px, 280px"
            priority
            quality={100}
            onLoadingComplete={handleLoaded}
          />
        </div>
        
        {/* iPhone frame overlay */}
        <Image
          src="/iphone-16-pro-frame.png"
          alt=""
          width={874}
          height={1778}
          className="relative w-full h-auto pointer-events-none select-none"
          priority
          quality={100}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
