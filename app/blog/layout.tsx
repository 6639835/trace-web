import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Blog - Trace iOS Network Debugger',
    template: '%s - Trace Blog',
  },
  description:
    'Updates, tutorials, and technical deep-dives about Trace iOS network debugger. Learn about new features, debugging techniques, and development insights.',
  keywords: [
    'Trace blog',
    'iOS network debugging',
    'network debugging tutorials',
    'iOS development',
    'HTTPS inspection',
    'WebSocket debugging',
  ],
  openGraph: {
    title: 'Trace Blog',
    description:
      'Updates, tutorials, and technical insights about iOS network debugging with Trace.',
    url: '/blog',
  },
  alternates: {
    canonical: '/blog',
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col">{children}</div>;
}
