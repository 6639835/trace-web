'use client';

import { useMemo } from 'react';
import { DocsMobileNav } from '@/components/docs/docs-mobile-nav';
import { DocsSidebar } from '@/components/docs/docs-sidebar';
import { createDocsSearchEngine, type DocsSearchPayload } from '@/lib/docs-search';

interface DocsNavigationChromeProps {
  docsSearch: DocsSearchPayload;
}

export function DocsNavigationChrome({ docsSearch }: DocsNavigationChromeProps) {
  const searchEngine = useMemo(() => createDocsSearchEngine(docsSearch), [docsSearch]);

  return (
    <>
      <div className="md:hidden">
        <DocsMobileNav searchEngine={searchEngine} />
      </div>

      <aside className="hidden md:block">
        <div className="sticky top-20">
          <DocsSidebar searchEngine={searchEngine} />
        </div>
      </aside>
    </>
  );
}
