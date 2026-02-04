export interface DocsNavItem {
  title: string;
  href: string;
}

export interface DocsNavSection {
  title: string;
  items: DocsNavItem[];
}

export const docsNavigation: DocsNavSection[] = [
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
