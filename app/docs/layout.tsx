import { DocsSidebar } from "@/components/docs/docs-sidebar";
import { DocsTableOfContents } from "@/components/docs/docs-toc";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container py-6 lg:py-8">
      <div className="flex gap-6 lg:gap-10">
        {/* Sidebar Navigation */}
        <aside className="hidden md:block w-64 shrink-0">
          <div className="sticky top-20">
            <DocsSidebar />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <article className="prose prose-slate dark:prose-invert max-w-none">
            {children}
          </article>
        </main>

        {/* Table of Contents */}
        <aside className="hidden xl:block w-56 shrink-0">
          <div className="sticky top-20">
            <DocsTableOfContents />
          </div>
        </aside>
      </div>
    </div>
  );
}
