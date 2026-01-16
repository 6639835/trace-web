"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function HeroPhone() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <div className="flex justify-center lg:justify-end items-start">
      <div className="relative w-[280px] md:w-[320px] lg:w-[360px]">
        {/* Screenshot layer - positioned behind the frame */}
        <div className="absolute inset-[5%] top-[1.5%] bottom-[1.5%] rounded-[12%] overflow-hidden">
          <Image
            src={isDark ? "/iphone-screenshot-dark.png" : "/iphone-screenshot-light.png"}
            alt="Trace iOS App Screenshot"
            fill
            className="object-cover"
            priority
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
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
