'use client';

import { useDeferredValue, useMemo, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { docsNavigation } from '@/lib/config/docs-navigation';
import { searchDocs, type DocsSearchEngine } from '@/lib/docs-search';

interface DocsSidebarProps {
  searchEngine: DocsSearchEngine;
}

export function DocsSidebar({ searchEngine }: DocsSidebarProps) {
  const pathname = usePathname();
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query.trim());

  const isSearching = deferredQuery.length > 0;

  const searchResults = useMemo(
    () => searchDocs(searchEngine, deferredQuery),
    [deferredQuery, searchEngine],
  );

  return (
    <nav className="w-full">
      <div className="mb-4">
        <label htmlFor="docs-search-sidebar" className="sr-only">
          Search docs
        </label>
        <div className="relative">
          <Search className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            id="docs-search-sidebar"
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
            <p className="rounded-sm px-2 py-1.5 text-sm text-muted-foreground">
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
                  className={cn(
                    'block rounded-sm border-l-2 py-1.5 pr-2 pl-1.5 transition-colors',
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
        docsNavigation.map((section, index) => (
          <div key={section.title} className={cn('pb-4', index > 0 && 'pt-4')}>
            <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold text-foreground">
              {section.title}
            </h4>
            <div className="grid grid-flow-row auto-rows-max text-sm">
              {section.items.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={cn(
                      'group flex w-full items-center rounded-sm px-2 py-1.5 transition-colors',
                      isActive
                        ? 'bg-primary/10 font-medium text-primary'
                        : 'text-muted-foreground hover:text-foreground',
                    )}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </div>
          </div>
        ))
      )}
    </nav>
  );
}
