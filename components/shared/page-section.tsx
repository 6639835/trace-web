import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type SectionWidth = 'content' | 'readable' | 'wide' | 'full';
type SectionSpacing = 'default' | 'lg';
type SectionHeadingAlign = 'left' | 'center';

const SECTION_WIDTH_CLASS: Record<SectionWidth, string> = {
  content: 'max-w-content',
  readable: 'max-w-readable',
  wide: 'max-w-wide',
  full: 'max-w-none',
};

const SECTION_SPACING_CLASS: Record<SectionSpacing, string> = {
  default: 'py-section',
  lg: 'py-section-lg',
};

interface PageSectionProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  width?: SectionWidth;
  spacing?: SectionSpacing;
}

export function PageSection({
  children,
  className,
  innerClassName,
  width = 'content',
  spacing = 'default',
}: PageSectionProps) {
  return (
    <section className={cn('container', SECTION_SPACING_CLASS[spacing], className)}>
      <div className={cn('mx-auto', SECTION_WIDTH_CLASS[width], innerClassName)}>{children}</div>
    </section>
  );
}

interface SectionHeadingProps {
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  align?: SectionHeadingAlign;
}

export function SectionHeading({
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
  align = 'left',
}: SectionHeadingProps) {
  const isCentered = align === 'center';

  return (
    <div className={cn(isCentered && 'text-center', className)}>
      <h2
        className={cn(
          'mb-8 text-xl font-bold tracking-tight sm:mb-10 sm:text-2xl md:mb-12',
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'text-sm leading-relaxed text-muted-foreground sm:text-base',
            isCentered && 'mx-auto max-w-readable',
            descriptionClassName,
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
