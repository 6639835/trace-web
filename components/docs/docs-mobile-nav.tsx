'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown } from 'lucide-react';
import { docsNavigation } from '@/lib/config/docs-navigation';

export function DocsMobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const pathname = usePathname();

  const getCurrentPageTitle = () => {
    for (const section of docsNavigation) {
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
        aria-expanded={isOpen}
        aria-controls="docs-navigation-mobile"
      >
        <span className="flex items-center gap-2">
          <Menu className="h-4 w-4" />
          {getCurrentPageTitle()}
        </span>
        {isOpen ? <X className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </button>

      {isOpen && (
        <div
          id="docs-navigation-mobile"
          className="mt-2 max-h-[70vh] overflow-y-auto rounded-lg border bg-card"
        >
          <nav className="p-2">
            {docsNavigation.map((section) => {
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
                            aria-current={isActive ? 'page' : undefined}
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
