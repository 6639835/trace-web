import * as React from 'react';
import { cn } from '@/lib/utils';

interface TimelineProps {
  children: React.ReactNode;
  className?: string;
}

export function Timeline({ children, className }: TimelineProps) {
  return (
    <div className={cn('relative', className)}>
      {/* Vertical line */}
      <div className="absolute top-0 left-[19px] h-full w-0.5 bg-border sm:left-[23px]" />
      {/* Timeline items */}
      <div className="space-y-8 sm:space-y-10 md:space-y-12">{children}</div>
    </div>
  );
}

interface TimelineItemProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export function TimelineItem({ children, icon, className }: TimelineItemProps) {
  return (
    <div className={cn('relative pl-12 sm:pl-16', className)}>
      {/* Timeline dot */}
      {icon && (
        <div className="absolute top-0 left-0">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-border bg-background sm:h-12 sm:w-12">
            {icon}
          </div>
        </div>
      )}
      {/* Content */}
      <div>{children}</div>
    </div>
  );
}

interface TimelineDotProps {
  children?: React.ReactNode;
  className?: string;
}

export function TimelineDot({ children, className }: TimelineDotProps) {
  return (
    <div className="absolute top-0 left-0">
      <div
        className={cn(
          'flex h-10 w-10 items-center justify-center rounded-full border-2 border-border bg-background sm:h-12 sm:w-12',
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}

interface TimelineContentProps {
  children: React.ReactNode;
  className?: string;
}

export function TimelineContent({ children, className }: TimelineContentProps) {
  return <div className={cn('', className)}>{children}</div>;
}
