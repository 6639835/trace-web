import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BulletListProps {
  children: ReactNode;
  className?: string;
}

export function BulletList({ children, className }: BulletListProps) {
  return <div className={cn('space-y-2 text-sm', className)}>{children}</div>;
}

interface BulletItemProps {
  children: ReactNode;
  className?: string;
}

export function BulletItem({ children, className }: BulletItemProps) {
  return (
    <div className={cn('flex items-start gap-2', className)}>
      <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
      <span className="text-muted-foreground">{children}</span>
    </div>
  );
}
