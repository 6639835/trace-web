'use client';

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

export interface SectionNavItem {
  href: string;
  label: string;
}

interface SectionNavProps {
  items: SectionNavItem[];
  ariaLabel?: string;
  className?: string;
}

export function SectionNav({ items, ariaLabel = 'Page sections', className }: SectionNavProps) {
  const [active, setActive] = useState<string>(items[0]?.href.slice(1) ?? '');
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, visible: false });
  const itemRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());

  // Measure active pill position whenever active section changes
  useEffect(() => {
    const el = itemRefs.current.get(active);
    if (!el) return;
    setPillStyle({ left: el.offsetLeft, width: el.offsetWidth, visible: true });
  }, [active]);

  // Re-measure on window resize so the pill stays aligned
  useEffect(() => {
    const onResize = () => {
      const el = itemRefs.current.get(active);
      if (!el) return;
      setPillStyle({ left: el.offsetLeft, width: el.offsetWidth, visible: true });
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [active]);

  // Track which section is in the viewport
  useEffect(() => {
    const sectionIds = items.map(({ href }) => href.slice(1));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;
        // When multiple sections overlap the root margin, prefer the topmost
        const topmost = visible.reduce((prev, curr) =>
          prev.boundingClientRect.top <= curr.boundingClientRect.top ? prev : curr,
        );
        setActive(topmost.target.id);
      },
      { rootMargin: '-15% 0px -65% 0px', threshold: 0 },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  return (
    <div
      className={cn(
        'sticky top-16 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80',
        className,
      )}
    >
      <div className="container">
        <nav aria-label={ariaLabel} className="mx-auto max-w-content overflow-x-auto py-2 pb-3">
          {/* Inner row — position:relative so the pill is scoped to scrollable content */}
          <div className="relative flex gap-1 sm:gap-2" style={{ minWidth: 'max-content' }}>
            {/* Sliding pill — hidden until first measurement to avoid positional flash */}
            <span
              aria-hidden
              className={cn(
                'absolute inset-y-0 rounded-md bg-primary/10 transition-[left,width] duration-150 ease-in-out',
                pillStyle.visible ? 'opacity-100' : 'opacity-0',
              )}
              style={{ left: pillStyle.left, width: pillStyle.width }}
            />

            {items.map(({ href, label }) => {
              const id = href.slice(1);
              return (
                <a
                  key={href}
                  href={href}
                  ref={(el) => {
                    if (el) itemRefs.current.set(id, el);
                    else itemRefs.current.delete(id);
                  }}
                  className={cn(
                    'relative shrink-0 rounded-md px-3 py-1.5 text-sm font-medium transition-colors duration-200',
                    active === id ? 'text-primary' : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {label}
                </a>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
}
