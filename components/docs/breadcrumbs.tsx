'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import { docsNavigation } from '@/lib/config/docs-navigation';

const acronymMap: Record<string, string> = {
  api: 'API',
  cicd: 'CI/CD',
  dns: 'DNS',
  faq: 'FAQ',
  http: 'HTTP',
  https: 'HTTPS',
  ios: 'iOS',
  ipados: 'iPadOS',
  pcap: 'PCAP',
  sse: 'SSE',
  tls: 'TLS',
  udp: 'UDP',
  url: 'URL',
};

export function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  // Don't show breadcrumbs on homepage
  if (segments.length === 0) return null;

  const docsTitleByHref = new Map<string, string>();
  for (const section of docsNavigation) {
    for (const item of section.items) {
      docsTitleByHref.set(item.href, item.title);
    }
  }

  // Build breadcrumb items
  const breadcrumbs = segments.map((segment, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/');
    const isLast = index === segments.length - 1;

    const docsTitle = docsTitleByHref.get(href);

    const name =
      index === 0 && segment === 'docs'
        ? 'Docs'
        : (docsTitle ??
          segment
            .split('-')
            .map((word) => acronymMap[word.toLowerCase()] ?? word)
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' '));

    return {
      name,
      href,
      isLast,
    };
  });

  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex items-center gap-2 text-sm text-muted-foreground">
        <li>
          <Link href="/" className="transition-colors hover:text-foreground">
            Home
          </Link>
        </li>
        {breadcrumbs.map((breadcrumb) => (
          <li key={breadcrumb.href} className="flex items-center gap-2">
            <ChevronRight className="h-4 w-4" />
            {breadcrumb.isLast ? (
              <span className="font-medium text-foreground">{breadcrumb.name}</span>
            ) : (
              <Link href={breadcrumb.href} className="transition-colors hover:text-foreground">
                {breadcrumb.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
