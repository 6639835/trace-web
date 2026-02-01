import Link from 'next/link';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12 md:py-16 lg:py-20">
        {/* Top Section: Logo & Brand */}
        <div className="mb-12 flex flex-col items-center text-center">
          <Link href="/" className="mb-4 inline-block">
            <Image
              src="/logos/trace-logo.svg"
              alt="Trace"
              width={200}
              height={62}
              className="h-14 w-auto sm:h-16"
            />
          </Link>
          <p className="max-w-sm text-sm text-muted-foreground sm:text-base">
            Professional network debugging for iOS
          </p>
        </div>

        {/* Middle Section: Navigation Links */}
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
          <div className="flex flex-col items-center space-y-3 md:items-start">
            <h3 className="text-sm font-semibold">Product</h3>
            <ul className="space-y-2 text-center text-sm text-muted-foreground md:text-left">
              <li>
                <Link href="/features" className="transition-colors hover:text-foreground">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/architecture" className="transition-colors hover:text-foreground">
                  Architecture
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="transition-colors hover:text-foreground">
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center space-y-3 md:items-start">
            <h3 className="text-sm font-semibold">Resources</h3>
            <ul className="space-y-2 text-center text-sm text-muted-foreground md:text-left">
              <li>
                <Link href="/docs" className="transition-colors hover:text-foreground">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/blog" className="transition-colors hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="transition-colors hover:text-foreground">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/support" className="transition-colors hover:text-foreground">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/showcase" className="transition-colors hover:text-foreground">
                  Showcase
                </Link>
              </li>
              <li>
                <Link href="/comparison" className="transition-colors hover:text-foreground">
                  Comparison
                </Link>
              </li>
              <li>
                <Link href="/open-source" className="transition-colors hover:text-foreground">
                  Open Source
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center space-y-3 md:items-start">
            <h3 className="text-sm font-semibold">Community</h3>
            <ul className="space-y-2 text-center text-sm text-muted-foreground md:text-left">
              <li>
                <Link
                  href="https://github.com/Trace-iOS/Trace"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contributing" className="transition-colors hover:text-foreground">
                  Contributing
                </Link>
              </li>
              <li>
                <Link href="/sponsors" className="transition-colors hover:text-foreground">
                  Sponsors
                </Link>
              </li>
              <li>
                <Link href="/press" className="transition-colors hover:text-foreground">
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center space-y-3 md:items-start">
            <h3 className="text-sm font-semibold">Legal</h3>
            <ul className="space-y-2 text-center text-sm text-muted-foreground md:text-left">
              <li>
                <Link href="/privacy" className="transition-colors hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="transition-colors hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/status" className="transition-colors hover:text-foreground">
                  Status
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-12" />

        {/* Bottom Section: Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Trace. All rights reserved.</p>
          <p>Built for iOS developers.</p>
        </div>
      </div>
    </footer>
  );
}
