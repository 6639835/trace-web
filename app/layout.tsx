import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://trace.justinl.site'),
  title: {
    default: 'Trace - Professional iOS Network Debugger & Traffic Inspector',
    template: '%s | Trace',
  },
  description:
    'Professional network debugging tool for iOS developers. Device-wide HTTP(S), WebSocket, and SSE traffic capture with TLS MITM inspection. Built on Network Extension APIs for system-level visibility. Open source and free.',
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
    url: 'https://trace.justinl.site',
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
          <div className="flex min-h-screen flex-col">
            <Navigation />
            <main className="w-full flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
