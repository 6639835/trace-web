import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/layout/navigation';
import { Footer } from '@/components/layout/footer';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { siteUrl } from '@/lib/config/site';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Trace - Professional iOS Network Debugger & Traffic Inspector',
    template: '%s | Trace',
  },
  description:
    'An iOS network debugger for capturing and inspecting HTTP(S), WebSocket, and SSE traffic at L3 IP layer.',
  keywords: [
    'iOS network debugger',
    'iOS traffic inspector',
    'iOS HTTPS proxy',
    'iOS network monitor',
    'iOS packet capture',
    'TLS MITM iOS',
    'WebSocket debugger iOS',
    'iOS network analysis',
    'iOS developer tools',
    'Network Extension iOS',
    'HTTP debugging iOS',
    'iOS proxy tool',
    'mobile network debugging',
    'iOS network testing',
    'open source iOS debugger',
  ],
  authors: [{ name: 'Justin' }],
  creator: 'Justin',
  publisher: 'Justin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Trace',
    title: 'Trace - Professional iOS Network Debugger',
    description:
      'Professional network debugging tool for iOS. Device-wide traffic capture, TLS inspection, and real-time analysis. Open source and free.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Trace - iOS Network Debugger',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trace - Professional iOS Network Debugger',
    description:
      'Professional network debugging tool for iOS. Device-wide traffic capture, TLS inspection, and real-time analysis.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/logos/trace-logomark.svg', type: 'image/svg+xml' },
      { url: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      {
        url: '/icons/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Skip to content link for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none"
          >
            Skip to content
          </a>

          <div className="flex min-h-screen flex-col">
            <Navigation />
            <main id="main-content" className="w-full flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
