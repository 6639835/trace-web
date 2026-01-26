'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavItem {
  title: string;
  href: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const navigation: NavSection[] = [
  {
    title: 'Start Here',
    items: [
      { title: 'Overview', href: '/docs' },
      { title: 'Installation', href: '/docs/installation' },
      { title: 'Quick Start', href: '/docs/quick-start' },
    ],
  },
  {
    title: 'Use Trace',
    items: [
      { title: 'Capture Modes', href: '/docs/proxy-modes' },
      { title: 'Certificates', href: '/docs/certificates' },
      { title: 'Inspect Requests', href: '/docs/request-inspection' },
      { title: 'Filter Traffic', href: '/docs/filtering' },
      { title: 'Sessions', href: '/docs/sessions' },
      { title: 'Favorites', href: '/docs/favorites' },
      { title: 'Request Builder', href: '/docs/request-builder' },
      { title: 'Export Sessions', href: '/docs/exporting' },
    ],
  },
  {
    title: 'Traffic Control',
    items: [
      { title: 'Rewrite Rules', href: '/docs/rewrite-rules' },
      { title: 'Request Maps', href: '/docs/request-maps' },
      { title: 'Host Overrides', href: '/docs/hosts' },
      { title: 'Breakpoints', href: '/docs/breakpoints' },
      { title: 'Custom Scripts', href: '/docs/scripts' },
    ],
  },
  {
    title: 'Protocols',
    items: [
      { title: 'WebSocket Inspector', href: '/docs/websockets' },
      { title: 'SSE Inspector', href: '/docs/sse' },
      { title: 'DNS Inspector', href: '/docs/dns' },
      { title: 'UDP Flows', href: '/docs/udp' },
    ],
  },
  {
    title: 'Advanced Usage',
    items: [
      { title: 'Performance Tuning', href: '/docs/performance' },
      { title: 'Certificate Pinning', href: '/docs/cert-pinning' },
      { title: 'Network Throttling', href: '/docs/throttling' },
      { title: 'Diagnostics and Logs', href: '/docs/diagnostics' },
      { title: 'Utilities', href: '/docs/utilities' },
      { title: 'Widgets and Live Activity', href: '/docs/widgets' },
    ],
  },
  {
    title: 'Integrations',
    items: [
      { title: 'Charles Import', href: '/docs/charles-import' },
      { title: 'Postman Export', href: '/docs/postman-export' },
      { title: 'CI/CD Integration', href: '/docs/cicd' },
    ],
  },
  {
    title: 'Developers',
    items: [
      { title: 'Architecture', href: '/docs/architecture' },
      { title: 'API Reference', href: '/docs/api' },
      { title: 'Development Guide', href: '/docs/development' },
    ],
  },
  {
    title: 'Contributing',
    items: [{ title: 'Building from Source', href: '/docs/building' }],
  },
];

export function DocsMobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const pathname = usePathname();

  const getCurrentPageTitle = () => {
    for (const section of navigation) {
      const item = section.items.find((item) => item.href === pathname);
      if (item) return item.title;
    }
    return 'Documentation';
  };

  const toggleSection = (sectionTitle: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(sectionTitle)) {
        next.delete(sectionTitle);
      } else {
        next.add(sectionTitle);
      }
      return next;
    });
  };

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-lg border bg-card px-4 py-3 text-sm font-medium transition-colors hover:bg-accent"
        aria-label="Toggle navigation menu"
      >
        <span className="flex items-center gap-2">
          <Menu className="h-4 w-4" />
          {getCurrentPageTitle()}
        </span>
        {isOpen ? <X className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </button>

      {isOpen && (
        <div className="mt-2 max-h-[70vh] overflow-y-auto rounded-lg border bg-card">
          <nav className="p-2">
            {navigation.map((section) => {
              const isExpanded = expandedSections.has(section.title);
              const hasActiveItem = section.items.some((item) => item.href === pathname);

              return (
                <div key={section.title} className="mb-1">
                  <button
                    onClick={() => toggleSection(section.title)}
                    className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-semibold text-foreground hover:bg-accent"
                  >
                    {section.title}
                    <ChevronDown
                      className={cn('h-4 w-4 transition-transform', isExpanded && 'rotate-180')}
                    />
                  </button>

                  {(isExpanded || hasActiveItem) && (
                    <div className="ml-2 space-y-1 border-l pl-2">
                      {section.items.map((item) => {
                        const isActive = pathname === item.href;

                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                              'block rounded-md px-3 py-2 text-sm transition-colors',
                              isActive
                                ? 'bg-primary/10 font-medium text-primary'
                                : 'text-muted-foreground hover:bg-accent hover:text-foreground',
                            )}
                          >
                            {item.title}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      )}
    </div>
  );
}
