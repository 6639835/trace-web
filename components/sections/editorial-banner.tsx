import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type EditorialVariant = 'muted' | 'inverted';

interface EditorialBannerProps {
  children: ReactNode;
  variant?: EditorialVariant;
  className?: string;
}

const VARIANT_CLASSES: Record<EditorialVariant, string> = {
  muted: 'bg-muted/40 border-y',
  inverted: 'bg-foreground text-background',
};

export function EditorialBanner({ children, variant = 'muted', className }: EditorialBannerProps) {
  return (
    <div className={cn(VARIANT_CLASSES[variant], className)}>
      <div className="container py-section">
        <div className="mx-auto max-w-readable text-center">{children}</div>
      </div>
    </div>
  );
}
