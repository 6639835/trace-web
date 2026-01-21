"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { BookOpen, Rocket, Code, Wrench, Plug, Users } from "lucide-react";

interface NavItem {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const navigation: NavSection[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs", icon: BookOpen },
      { title: "Installation", href: "/docs/installation", icon: Rocket },
      { title: "Quick Start", href: "/docs/quick-start" },
    ],
  },
  {
    title: "Guides",
    items: [
      { title: "Request Inspection", href: "/docs/request-inspection" },
      { title: "Proxy Modes", href: "/docs/proxy-modes" },
      { title: "Certificate Management", href: "/docs/certificates" },
      { title: "Filtering Traffic", href: "/docs/filtering" },
      { title: "Exporting Sessions", href: "/docs/exporting" },
    ],
  },
  {
    title: "Advanced",
    items: [
      { title: "Architecture Overview", href: "/docs/architecture", icon: Code },
      { title: "Performance Tuning", href: "/docs/performance" },
      { title: "Certificate Pinning", href: "/docs/cert-pinning" },
      { title: "Custom Scripts", href: "/docs/scripts" },
    ],
  },
  {
    title: "Integrations",
    items: [
      { title: "Charles Proxy Import", href: "/docs/charles-import", icon: Plug },
      { title: "Postman Export", href: "/docs/postman-export" },
      { title: "CI/CD Integration", href: "/docs/cicd" },
    ],
  },
  {
    title: "Contributing",
    items: [
      { title: "Building from Source", href: "/docs/building", icon: Users },
      { title: "Development Guide", href: "/docs/development" },
      { title: "API Reference", href: "/docs/api" },
    ],
  },
];

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <nav className="space-y-6">
      <div>
        <h2 className="mb-2 px-3 text-lg font-semibold tracking-tight">
          Documentation
        </h2>
      </div>

      {navigation.map((section) => (
        <div key={section.title}>
          <h3 className="mb-2 px-3 text-sm font-medium text-muted-foreground">
            {section.title}
          </h3>
          <div className="space-y-1">
            {section.items.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                    isActive
                      ? "bg-accent text-accent-foreground font-medium"
                      : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                  )}
                >
                  {Icon && <Icon className="h-4 w-4 shrink-0" />}
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </nav>
  );
}
