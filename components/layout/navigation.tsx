'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ThemeSwitcher } from '@/components/theme-switcher';
import { Button } from '@/components/ui/button';
import { Menu, X, Layers, FileText, Code, Rocket, Heart, ScrollText } from 'lucide-react';
import { useState, useEffect } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const projectItems = [
  {
    title: 'About',
    href: '/about',
    description: 'Mission, principles, and the story behind the project',
    icon: Layers,
  },
  {
    title: 'Architecture',
    href: '/architecture',
    description: 'How capture, proxying, and inspection work on-device',
    icon: Code,
  },
];

const communityItems = [
  {
    title: 'Docs',
    href: '/docs',
    description: 'Install, configure, and use Trace for daily debugging',
    icon: FileText,
  },
  {
    title: 'Contributing',
    href: '/contributing',
    description: 'Contribute code, docs, and ideas to move the project forward',
    icon: Heart,
  },
  {
    title: 'Roadmap',
    href: '/roadmap',
    description: "What's planned next and which improvements are in progress",
    icon: Rocket,
  },
  {
    title: 'Changelog',
    href: '/changelog',
    description: 'Release history with every feature, fix, and improvement',
    icon: ScrollText,
  },
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

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Project</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-3 md:w-[500px] md:grid-cols-2">
                    {projectItems.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                        icon={item.icon}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Community</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-3 md:w-[500px] md:grid-cols-2">
                    {communityItems.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                        icon={item.icon}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
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
          <div className="container space-y-4 py-4">
            <div>
              <div className="mb-2 px-3 text-xs font-semibold text-muted-foreground uppercase">
                Project
              </div>
              <div className="space-y-1">
                {projectItems.map((item) => {
                  const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        'block rounded-md px-3 py-2 text-sm font-medium transition-colors',
                        isActive
                          ? 'bg-primary/10 font-semibold text-foreground'
                          : 'text-foreground/60 hover:bg-accent/50 hover:text-foreground',
                      )}
                    >
                      <div className="flex items-center gap-2">
                        <item.icon className="h-4 w-4" />
                        {item.title}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div>
              <div className="mb-2 px-3 text-xs font-semibold text-muted-foreground uppercase">
                Community
              </div>
              <div className="space-y-1">
                {communityItems.map((item) => {
                  const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        'block rounded-md px-3 py-2 text-sm font-medium transition-colors',
                        isActive
                          ? 'bg-primary/10 font-semibold text-foreground'
                          : 'text-foreground/60 hover:bg-accent/50 hover:text-foreground',
                      )}
                    >
                      <div className="flex items-center gap-2">
                        <item.icon className="h-4 w-4" />
                        {item.title}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

const ListItem = ({
  className,
  title,
  children,
  href,
  icon: Icon,
  ...props
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
  icon: React.ElementType;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            'group relative block rounded-md p-3 leading-none no-underline transition-none outline-none select-none',
            'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
            className,
          )}
          {...props}
        >
          <div className="flex items-center gap-3">
            {/* Icon container with two versions for swap effect */}
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-md border border-border bg-background">
              {/* Default icon */}
              <div
                className={cn(
                  'absolute inset-0 flex items-center justify-center text-muted-foreground opacity-100 transition-opacity duration-[90ms] ease-out',
                  'group-hover:opacity-0 group-focus-visible:opacity-0',
                )}
              >
                <Icon className="h-4 w-4" />
              </div>
              {/* Hover icon (inverted colors) */}
              <div
                className={cn(
                  'absolute inset-0 flex items-center justify-center bg-foreground text-background opacity-0 transition-opacity duration-[90ms] ease-out',
                  'group-hover:opacity-100 group-focus-visible:opacity-100',
                )}
              >
                <Icon className="h-4 w-4" />
              </div>
            </div>

            {/* Text content */}
            <div className="flex-1 space-y-1">
              <div
                className={cn(
                  'text-sm leading-none font-medium text-muted-foreground transition-colors duration-[90ms] ease-out',
                  'group-hover:text-foreground group-focus-visible:text-foreground',
                )}
              >
                {title}
              </div>
              <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">{children}</p>
            </div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};
