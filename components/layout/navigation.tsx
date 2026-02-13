'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const navItems = [
  { name: 'Features', href: '/features' },
  { name: 'Architecture', href: '/architecture' },
  { name: 'Roadmap', href: '/roadmap' },
  { name: 'Docs', href: '/docs' },
  { name: 'Open Source', href: '/open-source' },
];

export function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        isHomePage && !isScrolled
          ? 'border-transparent bg-transparent'
          : 'border-b bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60',
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 lg:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logos/trace-logomark.svg"
              alt="Trace"
              width={32}
              height={32}
              className="h-8 w-8"
              priority
            />
          </Link>
          <div className="hidden items-center gap-4 md:flex lg:gap-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'relative text-sm font-medium transition-colors hover:text-foreground',
                    isActive
                      ? 'text-foreground after:absolute after:right-0 after:-bottom-[1.3rem] after:left-0 after:h-0.5 after:bg-primary after:content-[""]'
                      : 'text-foreground/60',
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="primary-navigation-mobile"
            type="button"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div id="primary-navigation-mobile" className="border-t bg-background md:hidden">
          <div className="container space-y-3 py-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'block rounded-md px-3 py-2 text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-primary/10 font-semibold text-foreground'
                      : 'text-foreground/60 hover:bg-accent/50 hover:text-foreground',
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
