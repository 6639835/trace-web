import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type BentoItemSize = 'sm' | 'md' | 'lg';

interface BentoItemProps {
  children: ReactNode;
  size?: BentoItemSize;
  className?: string;
}

const SIZE_CLASSES: Record<BentoItemSize, string> = {
  sm: 'col-span-1',
  md: 'col-span-1 sm:col-span-2',
  lg: 'col-span-1 sm:col-span-2 lg:col-span-3',
};

export function BentoItem({ children, size = 'sm', className }: BentoItemProps) {
  return (
    <div className={cn(SIZE_CLASSES[size], 'rounded-xl border bg-card p-6', className)}>
      {children}
    </div>
  );
}

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div className={cn('grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3', className)}>
      {children}
    </div>
  );
}
