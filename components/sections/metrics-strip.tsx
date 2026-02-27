import { cn } from '@/lib/utils';

interface Metric {
  value: string;
  label: string;
}

interface MetricsStripProps {
  metrics: Metric[];
  className?: string;
}

export function MetricsStrip({ metrics, className }: MetricsStripProps) {
  return (
    <div className={cn('border-y bg-muted/30', className)}>
      {/* Marquee — mobile / small tablet (below md) */}
      <div className="overflow-hidden md:hidden">
        <dl className="flex w-max animate-marquee divide-x divide-border hover:[animation-play-state:paused]">
          {[...metrics, ...metrics].map((m, i) => (
            <div
              key={i}
              aria-hidden={i >= metrics.length || undefined}
              className="flex w-36 flex-col items-center justify-center px-6 py-6 text-center sm:w-44 sm:py-8"
            >
              <dt className="order-2 mt-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                {m.label}
              </dt>
              <dd className="order-1 text-2xl font-bold tracking-tight tabular-nums sm:text-3xl">
                {m.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Static grid — md and up */}
      <div className="container hidden md:block">
        <dl className="mx-auto flex max-w-wide divide-x divide-border">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="flex flex-1 flex-col items-center justify-center px-6 py-8 text-center lg:px-8"
            >
              <dt className="order-2 mt-1 text-xs font-medium tracking-wide text-muted-foreground uppercase sm:text-sm">
                {m.label}
              </dt>
              <dd className="order-1 text-2xl font-bold tracking-tight tabular-nums sm:text-3xl md:text-4xl">
                {m.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
