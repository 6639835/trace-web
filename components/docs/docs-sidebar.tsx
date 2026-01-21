"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { BookOpen, Code, Wrench, Plug, Users, Compass } from "lucide-react";

interface NavItem {
  title: string;
  href: string;
}

interface NavSection {
  title: string;
  icon?: React.ComponentType<{ className?: string }>;
  items: NavItem[];
}

const navigation: NavSection[] = [
  {
    title: "Start Here",
    icon: Compass,
    items: [
      { title: "Overview", href: "/docs" },
      { title: "Installation", href: "/docs/installation" },
      { title: "Quick Start", href: "/docs/quick-start" },
    ],
  },
  {
    title: "Use Trace",
    icon: BookOpen,
    items: [
      { title: "Capture Modes", href: "/docs/proxy-modes" },
      { title: "Certificates", href: "/docs/certificates" },
      { title: "Inspect Requests", href: "/docs/request-inspection" },
      { title: "Filter Traffic", href: "/docs/filtering" },
      { title: "Export Sessions", href: "/docs/exporting" },
    ],
  },
  {
    title: "Advanced Usage",
    icon: Code,
    items: [
      { title: "Performance Tuning", href: "/docs/performance" },
      { title: "Certificate Pinning", href: "/docs/cert-pinning" },
      { title: "Custom Scripts", href: "/docs/scripts" },
    ],
  },
  {
    title: "Integrations",
    icon: Plug,
    items: [
      { title: "Charles Import", href: "/docs/charles-import" },
      { title: "Postman Export", href: "/docs/postman-export" },
      { title: "CI/CD Integration", href: "/docs/cicd" },
    ],
  },
  {
    title: "Developers",
    icon: Users,
    items: [
      { title: "Architecture", href: "/docs/architecture" },
      { title: "API Reference", href: "/docs/api" },
      { title: "Development Guide", href: "/docs/development" },
    ],
  },
  {
    title: "Contributing",
    icon: Wrench,
    items: [{ title: "Building from Source", href: "/docs/building" }],
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
          <h3 className="mb-2 flex items-center gap-2 px-3 text-sm font-medium text-muted-foreground">
            {section.icon ? <section.icon className="h-4 w-4" /> : null}
            {section.title}
          </h3>
          <div className="space-y-1">
            {section.items.map((item) => {
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
