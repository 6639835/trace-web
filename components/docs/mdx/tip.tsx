import { Lightbulb, Info as InfoIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

type CalloutVariant = 'tip' | 'info';

const variantStyles: Record<CalloutVariant, { wrapper: string; title: string }> = {
  tip: {
    wrapper: 'border-emerald-500/20 bg-emerald-500/10 text-emerald-950 dark:text-emerald-50',
    title: 'text-emerald-950 dark:text-emerald-50',
  },
  info: {
    wrapper: 'border-blue-500/20 bg-blue-500/10 text-blue-950 dark:text-blue-50',
    title: 'text-blue-950 dark:text-blue-50',
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
    <div className={cn('not-prose my-6 rounded-lg border px-5 py-4', styles.wrapper)}>
      <div className="flex items-start gap-3">
        <Icon className="mt-0.5 h-4 w-4" />
        <div className="space-y-1">
          <p className={cn('text-sm font-semibold', styles.title)}>{title}</p>
          <div className="text-sm leading-relaxed text-muted-foreground">{children}</div>
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
