import { DocsSidebar } from '@/components/docs/docs-sidebar';
import { DocsTableOfContents } from '@/components/docs/docs-toc';
import { DocsMobileNav } from '@/components/docs/docs-mobile-nav';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container px-4 py-6 sm:px-6 lg:py-8">
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
