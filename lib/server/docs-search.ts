import { promises as fs } from 'fs';
import path from 'path';
import { cache } from 'react';
import { docsNavigation } from '@/lib/config/docs-navigation';
import {
  createDocsSearchEntriesFromMdx,
  createDocsSearchPayload,
  type DocsSearchPayload,
} from '@/lib/docs-search';

const docsDirectory = path.join(process.cwd(), 'app', 'docs');

function hrefToDocPath(href: string): string {
  if (href === '/docs') {
    return path.join(docsDirectory, 'page.mdx');
  }

  const slug = href.replace(/^\/docs\//, '');
  return path.join(docsDirectory, slug, 'page.mdx');
}

export const getDocsSearch = cache(async (): Promise<DocsSearchPayload> => {
  const navItems = docsNavigation.flatMap((section) =>
    section.items.map((item) => ({
      title: item.title,
      pageHref: item.href,
      section: section.title,
    })),
  );

  const entries = await Promise.all(
    navItems.map(async (item) => {
      const filePath = hrefToDocPath(item.pageHref);
      let content = '';

      try {
        content = await fs.readFile(filePath, 'utf8');
      } catch (error) {
        console.error(`[docs-search] Failed to read ${filePath}:`, error);
      }

      return createDocsSearchEntriesFromMdx(item, content);
    }),
  );

  return createDocsSearchPayload(entries.flat());
});
