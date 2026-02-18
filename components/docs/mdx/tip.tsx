import { Lightbulb, Info as InfoIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

type CalloutVariant = 'tip' | 'info';

const variantStyles: Record<CalloutVariant, { wrapper: string; title: string }> = {
  tip: {
    wrapper: 'border-primary/20 bg-primary/10 text-foreground',
    title: 'text-foreground',
  },
  info: {
    wrapper: 'border-border bg-muted/50 text-foreground',
    title: 'text-foreground',
  },
};

type CalloutProps = {
  title?: string;
  children: React.ReactNode;
  variant?: CalloutVariant;
};

export function Tip({ title = 'Tip', children, variant = 'tip' }: CalloutProps) {
  const styles = variantStyles[variant];
  const Icon = variant === 'tip' ? Lightbulb : InfoIcon;

  return (
    <div
      className={cn('not-prose my-6 rounded-lg border px-4 py-3 sm:px-5 sm:py-4', styles.wrapper)}
    >
      <div className="flex items-start gap-3">
        <Icon className="mt-0.5 h-4 w-4 shrink-0" />
        <div className="min-w-0 flex-1 space-y-1">
          <p className={cn('text-sm font-semibold break-words', styles.title)}>{title}</p>
          <div className="text-sm leading-relaxed break-words text-muted-foreground">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export function InfoCallout({ title = 'Note', children }: Omit<CalloutProps, 'variant'>) {
  return (
    <Tip title={title} variant="info">
      {children}
    </Tip>
  );
}

export const Info = InfoCallout;
