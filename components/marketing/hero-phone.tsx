"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IPhoneMockup } from "@/components/marketing/iphone-mockup";

export function HeroPhone() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Show placeholder during SSR and initial mount
  if (!mounted) {
    return (
      <div className="flex justify-center lg:justify-end items-start">
        <div className="max-w-full">
          <IPhoneMockup>
            <Image
              src="/iphone-screenshot-light.png"
              alt="Trace iOS App Screenshot"
              width={1206}
              height={2622}
              className="w-full h-full object-cover"
              priority
            />
          </IPhoneMockup>
        </div>
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div className="flex justify-center lg:justify-end items-start">
      <div className="max-w-full">
        <IPhoneMockup>
          <Image
            src={isDark ? "/iphone-screenshot-dark.png" : "/iphone-screenshot-light.png"}
            alt="Trace iOS App Screenshot"
            width={1206}
            height={2622}
            className="w-full h-full object-cover"
            priority
          />
        </IPhoneMockup>
      </div>
    </div>
  );
}

