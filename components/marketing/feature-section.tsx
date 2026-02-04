import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureSectionProps {
  icon: LucideIcon;
  title: string;
  description: ReactNode;
  children?: ReactNode;
  className?: string;
}

export function FeatureSection({
  icon: Icon,
  title,
  description,
  children,
  className,
}: FeatureSectionProps) {
  return (
    <div className={cn('grid gap-4 sm:gap-6 md:grid-cols-[auto,1fr] md:gap-8', className)}>
      <div className="flex items-start">
        <div className="rounded-lg border bg-muted/50 p-2.5 sm:p-3">
          <Icon className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
        </div>
      </div>
      <div>
        <h3 className="mb-2 text-lg font-semibold sm:mb-3 sm:text-xl">{title}</h3>
        <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:mb-4 sm:text-base">
          {description}
        </p>
        {children}
      </div>
    </div>
  );
}
