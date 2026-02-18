import type { Metadata } from 'next';
import { DocsSidebar } from '@/components/docs/docs-sidebar';
import { DocsTableOfContents } from '@/components/docs/docs-toc';
import { DocsMobileNav } from '@/components/docs/docs-mobile-nav';
import { Breadcrumbs } from '@/components/docs/breadcrumbs';

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

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container py-6 lg:py-8">
      {/* Mobile Navigation */}
      <div className="mb-6 md:hidden">
        <DocsMobileNav />
      </div>

      <div className="flex gap-6 lg:gap-10">
        {/* Sidebar Navigation */}
        <aside className="hidden w-64 shrink-0 md:block">
          <div className="sticky top-20">
            <DocsSidebar />
          </div>
        </aside>

        {/* Main Content */}
        <main className="min-w-0 flex-1">
          <Breadcrumbs />
          <article className="prose max-w-none prose-slate dark:prose-invert prose-headings:break-words prose-p:break-words">
            {children}
          </article>
        </main>

        {/* Table of Contents */}
        <aside className="hidden w-56 shrink-0 xl:block">
          <div className="sticky top-20">
            <DocsTableOfContents />
          </div>
        </aside>
      </div>
    </div>
  );
}
