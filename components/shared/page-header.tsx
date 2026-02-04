import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PageHeaderProps {
  icon?: LucideIcon;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export function PageHeader({
  icon: Icon,
  title,
  description,
  children,
  className,
}: PageHeaderProps) {
  return (
    <section className={cn('container py-section', className)}>
      <div className="mx-auto max-w-readable text-center">
        {Icon && <Icon className="mx-auto mb-4 h-10 w-10 text-primary sm:mb-6 sm:h-12 sm:w-12" />}
        <h1 className="mb-3 text-3xl font-bold tracking-tight sm:mb-4 sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
            {description}
          </p>
        )}
        {children && <div className="mt-4">{children}</div>}
      </div>
    </section>
  );
}
