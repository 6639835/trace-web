'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

interface NavItem {
  title: string;
  href: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const navigation: NavSection[] = [
  {
    title: 'Start Here',
    items: [
      { title: 'Overview', href: '/docs' },
      { title: 'Installation', href: '/docs/installation' },
      { title: 'Quick Start', href: '/docs/quick-start' },
    ],
  },
  {
    title: 'Use Trace',
    items: [
      { title: 'Capture Modes', href: '/docs/proxy-modes' },
      { title: 'Certificates', href: '/docs/certificates' },
      { title: 'Inspect Requests', href: '/docs/request-inspection' },
      { title: 'Filter Traffic', href: '/docs/filtering' },
      { title: 'Sessions', href: '/docs/sessions' },
      { title: 'Favorites', href: '/docs/favorites' },
      { title: 'Request Builder', href: '/docs/request-builder' },
      { title: 'Export Sessions', href: '/docs/exporting' },
    ],
  },
  {
    title: 'Traffic Control',
    items: [
      { title: 'Rewrite Rules', href: '/docs/rewrite-rules' },
      { title: 'Request Maps', href: '/docs/request-maps' },
      { title: 'Host Overrides', href: '/docs/hosts' },
      { title: 'Breakpoints', href: '/docs/breakpoints' },
      { title: 'Custom Scripts', href: '/docs/scripts' },
    ],
  },
  {
    title: 'Protocols',
    items: [
      { title: 'WebSocket Inspector', href: '/docs/websockets' },
      { title: 'SSE Inspector', href: '/docs/sse' },
      { title: 'DNS Inspector', href: '/docs/dns' },
      { title: 'UDP Flows', href: '/docs/udp' },
    ],
  },
  {
    title: 'Advanced Usage',
    items: [
      { title: 'Performance Tuning', href: '/docs/performance' },
      { title: 'Certificate Pinning', href: '/docs/cert-pinning' },
      { title: 'Network Throttling', href: '/docs/throttling' },
      { title: 'Diagnostics and Logs', href: '/docs/diagnostics' },
      { title: 'Utilities', href: '/docs/utilities' },
      { title: 'Widgets and Live Activity', href: '/docs/widgets' },
    ],
  },
  {
    title: 'Integrations',
    items: [
      { title: 'Charles Import', href: '/docs/charles-import' },
      { title: 'Postman Export', href: '/docs/postman-export' },
      { title: 'CI/CD Integration', href: '/docs/cicd' },
    ],
  },
  {
    title: 'Developers',
    items: [
      { title: 'Architecture', href: '/docs/architecture' },
      { title: 'API Reference', href: '/docs/api' },
      { title: 'Development Guide', href: '/docs/development' },
    ],
  },
  {
    title: 'Contributing',
    items: [{ title: 'Building from Source', href: '/docs/building' }],
  },
];

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <nav className="w-full">
      {navigation.map((section, index) => (
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
                  className={cn(
                    'group flex w-full items-center rounded-md border border-transparent px-2 py-1.5',
                    isActive
                      ? 'font-medium text-foreground'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </nav>
  );
}
