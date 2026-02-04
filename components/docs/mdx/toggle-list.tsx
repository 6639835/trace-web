'use client';

import * as React from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ToggleListProps {
  children: React.ReactNode;
  className?: string;
}

interface ToggleItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export function ToggleList({ children, className }: ToggleListProps) {
  return (
    <div
      className={cn('not-prose my-4 divide-y divide-border rounded-lg border sm:my-6', className)}
    >
      {children}
    </div>
  );
}

export function ToggleItem({ title, children, defaultOpen = false, className }: ToggleItemProps) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = React.useState(0);

  React.useLayoutEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const update = () => {
      setContentHeight(isOpen ? el.scrollHeight : 0);
    };

    update();

    if (!isOpen) return;

    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(el);
    return () => resizeObserver.disconnect();
  }, [children, isOpen]);

  return (
    <div className={cn('first:rounded-t-lg last:rounded-b-lg', className)}>
      <button
        onClick={() => setIsOpen((open) => !open)}
        className="flex w-full cursor-pointer items-center justify-between gap-3 px-3 py-3 text-left transition-colors hover:bg-muted/50 sm:px-4 sm:py-4"
        aria-expanded={isOpen}
      >
        <span className="text-sm font-medium text-foreground sm:text-base">{title}</span>
        <ChevronRight
          className={cn(
            'h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200',
            isOpen && 'rotate-90',
          )}
        />
      </button>
      <div
        ref={contentRef}
        className={cn(
          'overflow-hidden transition-all duration-200',
          isOpen ? 'opacity-100' : 'opacity-0',
        )}
        style={{
          maxHeight: contentHeight,
        }}
      >
        <div className="border-t border-border bg-muted/30 px-3 py-3 text-sm text-muted-foreground sm:px-4 sm:py-4">
          {children}
        </div>
      </div>
    </div>
  );
}
