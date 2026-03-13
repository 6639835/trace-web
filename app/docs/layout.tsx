import type { Metadata } from 'next';
import { DocsTableOfContents } from '@/components/docs/docs-toc';
import { Breadcrumbs } from '@/components/docs/breadcrumbs';
import { DocsNavigationChrome } from '@/components/docs/docs-navigation-chrome';
import { getDocsSearch } from '@/lib/server/docs-search';

export const metadata: Metadata = {
  title: {
    default: 'Documentation - Trace iOS Network Debugger',
    template: '%s - Trace Docs',
  },
  description:
    'Complete documentation for Trace iOS network debugger: installation, TLS certificates, traffic capture, WebSocket debugging, filtering, modification tools, and architecture guides.',
  keywords: [
    'iOS network debugger documentation',
    'Trace docs',
    'iOS HTTPS inspection guide',
    'WebSocket debugging tutorial',
    'network extension guide',
    'iOS traffic capture tutorial',
  ],
  openGraph: {
    title: 'Trace Documentation',
    description:
      'Learn how to use Trace for iOS network debugging: installation, certificate setup, traffic capture, and advanced features.',
    url: '/docs',
  },
  alternates: {
    canonical: '/docs',
  },
};

export default async function DocsLayout({ children }: { children: React.ReactNode }) {
  const docsSearch = await getDocsSearch();

  return (
    <div className="container py-6 lg:py-8">
      <div className="grid gap-6 md:grid-cols-[16rem_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[16rem_minmax(0,1fr)_14rem]">
        <DocsNavigationChrome docsSearch={docsSearch} />

        <main className="min-w-0 flex-1">
          <Breadcrumbs />
          <article
            data-toc-root
            className="prose max-w-none prose-slate dark:prose-invert prose-headings:scroll-mt-24 prose-headings:break-words prose-p:break-words"
          >
            {children}
          </article>
        </main>

        <aside className="hidden xl:block">
          <div className="sticky top-20">
            <DocsTableOfContents />
          </div>
        </aside>
      </div>
    </div>
  );
}
