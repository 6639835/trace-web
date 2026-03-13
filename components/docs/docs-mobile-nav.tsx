'use client';

import { useDeferredValue, useMemo, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { docsNavigation } from '@/lib/config/docs-navigation';
import { searchDocs, type DocsSearchEngine } from '@/lib/docs-search';

interface DocsMobileNavProps {
  searchEngine: DocsSearchEngine;
}

export function DocsMobileNav({ searchEngine }: DocsMobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const pathname = usePathname();
  const deferredQuery = useDeferredValue(query.trim());
  const isSearching = deferredQuery.length > 0;

  const searchResults = useMemo(
    () => searchDocs(searchEngine, deferredQuery),
    [deferredQuery, searchEngine],
  );

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

  const closeMenu = () => {
    setIsOpen(false);
    setQuery('');
  };

  return (
    <div className="w-full">
      <Button
        type="button"
        variant="outline"
        onClick={() => {
          if (isOpen) {
            closeMenu();
            return;
          }
          setIsOpen(true);
        }}
        className="h-auto w-full justify-between bg-card px-4 py-3 text-sm font-medium hover:bg-accent"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        aria-controls="docs-navigation-mobile"
      >
        <span className="flex items-center gap-2">
          <Menu className="h-4 w-4" />
          {getCurrentPageTitle()}
        </span>
        {isOpen ? <X className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </Button>

      {isOpen && (
        <div
          id="docs-navigation-mobile"
          className="mt-2 max-h-[70vh] overflow-y-auto rounded-lg border bg-card"
        >
          <nav className="p-2">
            <div className="mb-2">
              <label htmlFor="docs-search-mobile" className="sr-only">
                Search docs
              </label>
              <div className="relative">
                <Search className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  id="docs-search-mobile"
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search pages, sections, and content..."
                  className="h-9 w-full rounded-md border bg-background pr-3 pl-9 text-sm shadow-sm transition-colors outline-none placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring"
                />
              </div>
            </div>

            {isSearching ? (
              <div className="space-y-1">
                {searchResults.length === 0 ? (
                  <p className="rounded-md px-3 py-2 text-sm text-muted-foreground">
                    No results found.
                  </p>
                ) : (
                  searchResults.map((result) => {
                    const isActive = pathname === result.pageHref;
                    const metadata = result.context
                      ? `${result.section} • ${result.context}`
                      : result.section;

                    return (
                      <Link
                        key={result.href}
                        href={result.href}
                        aria-current={isActive ? 'page' : undefined}
                        onClick={closeMenu}
                        className={cn(
                          'block rounded-md border-l-2 py-2 pr-3 pl-2.5 transition-colors',
                          isActive
                            ? 'border-primary bg-primary/10 font-medium text-primary'
                            : 'border-transparent text-muted-foreground hover:border-primary/40 hover:bg-accent hover:text-foreground',
                        )}
                      >
                        <p className="text-sm">{result.title}</p>
                        <p className="text-xs opacity-75">{metadata}</p>
                        {result.snippet ? (
                          <p className="mt-0.5 text-xs opacity-60">{result.snippet}</p>
                        ) : null}
                      </Link>
                    );
                  })
                )}
              </div>
            ) : (
              docsNavigation.map((section) => {
                const isExpanded = expandedSections.has(section.title);
                const hasActiveItem = section.items.some((item) => item.href === pathname);

                return (
                  <div key={section.title} className="mb-1">
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => toggleSection(section.title)}
                      className="h-auto w-full justify-between rounded-md px-3 py-2 text-sm font-semibold text-foreground hover:bg-accent"
                    >
                      {section.title}
                      <ChevronDown
                        className={cn('h-4 w-4 transition-transform', isExpanded && 'rotate-180')}
                      />
                    </Button>

                    {(isExpanded || hasActiveItem) && (
                      <div className="ml-2 space-y-1 border-l pl-2">
                        {section.items.map((item) => {
                          const isActive = pathname === item.href;

                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              aria-current={isActive ? 'page' : undefined}
                              onClick={closeMenu}
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
              })
            )}
          </nav>
        </div>
      )}
    </div>
  );
}
