import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

type PageHeaderVariant = 'centered' | 'split' | 'minimal';

interface PageHeaderProps {
  icon?: LucideIcon;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  className?: string;
  /** `centered` — icon above h1, center-aligned (default)
   *  `split`    — h1 left, `children` slot on the right
   *  `minimal`  — left-aligned, no icon, compact spacing */
  variant?: PageHeaderVariant;
  /** Right-side slot used only by the `split` variant */
  aside?: ReactNode;
}

export function PageHeader({
  icon: Icon,
  title,
  description,
  children,
  className,
  variant = 'centered',
  aside,
}: PageHeaderProps) {
  if (variant === 'minimal') {
    return (
      <section className={cn('container py-section', className)}>
        <div className="mx-auto max-w-content">
          <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="max-w-readable text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
              {description}
            </p>
          )}
          {children && <div className="mt-5 sm:mt-6">{children}</div>}
        </div>
      </section>
    );
  }

  if (variant === 'split') {
    return (
      <section className={cn('container py-section', className)}>
        <div className="mx-auto grid max-w-wide grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              {title}
            </h1>
            {description && (
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
                {description}
              </p>
            )}
            {children && <div>{children}</div>}
          </div>
          {aside && <div className="flex items-center justify-center lg:justify-end">{aside}</div>}
        </div>
      </section>
    );
  }

  // centered (default)
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
