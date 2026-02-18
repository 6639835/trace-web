'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { docsNavigation } from '@/lib/config/docs-navigation';

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <nav className="w-full">
      {docsNavigation.map((section, index) => (
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
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'group flex w-full items-center rounded-sm px-2 py-1.5 transition-colors',
                    isActive
                      ? 'bg-primary/10 font-medium text-primary'
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
