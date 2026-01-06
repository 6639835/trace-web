"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Features", href: "/features" },
  { name: "Architecture", href: "/architecture" },
  { name: "Docs", href: "/docs" },
  { name: "Open Source", href: "/open-source" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-semibold tracking-tight">Trace</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-foreground/80",
                  pathname === item.href
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link
              href="https://github.com/trace-network-debugger"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}

