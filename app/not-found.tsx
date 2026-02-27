import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 – Page Not Found',
  description: 'The page you are looking for does not exist.',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center py-section text-center">
      <p className="mb-2 text-sm font-semibold tracking-widest text-muted-foreground uppercase">
        404
      </p>
      <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        Page not found
      </h1>
      <p className="mb-8 max-w-readable text-sm leading-relaxed text-muted-foreground sm:text-base">
        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
        <Button asChild>
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Go home
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Browse the blog
          </Link>
        </Button>
      </div>
    </div>
  );
}
