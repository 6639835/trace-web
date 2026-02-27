import type { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import { PageSection } from '@/components/shared/page-section';
import { Activity, CheckCircle2, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Status',
  description:
    'Trace service status. Check the current status of TestFlight, GitHub repository, documentation, and website.',
  keywords: ['Trace status', 'service status', 'uptime', 'system status'],
  openGraph: {
    title: 'Status - Trace',
    description: 'Check the current status of Trace services.',
    url: '/status',
  },
  alternates: {
    canonical: '/status',
  },
};

export default function StatusPage() {
  const services = [
    {
      name: 'TestFlight',
      status: 'operational' as const,
      description: 'Beta distribution and updates',
    },
    {
      name: 'GitHub Repository',
      status: 'operational' as const,
      description: 'Source code and issue tracking',
    },
    {
      name: 'Documentation',
      status: 'operational' as const,
      description: 'Guides and API documentation',
    },
    {
      name: 'Website',
      status: 'operational' as const,
      description: 'Main website and landing pages',
    },
  ];

  const allOperational = services.every((s) => s.status === 'operational');

  return (
    <div className="flex w-full flex-col">
      {/* ── Large status indicator strip ── */}
      <div
        className={`border-b ${allOperational ? 'bg-emerald-50 dark:bg-emerald-950/20' : 'bg-destructive/5'}`}
      >
        <div className="container py-section">
          <div className="mx-auto max-w-content">
            <div className="flex items-center gap-4">
              {allOperational ? (
                <CheckCircle2 className="h-10 w-10 shrink-0 text-emerald-600 sm:h-12 sm:w-12 dark:text-emerald-400" />
              ) : (
                <AlertCircle className="h-10 w-10 shrink-0 text-destructive sm:h-12 sm:w-12" />
              )}
              <div>
                <div className="mb-1 flex items-center gap-2">
                  <Activity className="h-4 w-4 text-muted-foreground" />
                  <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
                    System Status
                  </span>
                </div>
                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                  {allOperational ? 'All Systems Operational' : 'Service Degradation'}
                </h1>
                <p className="mt-1 text-sm text-muted-foreground sm:text-base">
                  {allOperational
                    ? 'All services are running normally.'
                    : 'One or more services are experiencing issues.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Service components ── */}
      <PageSection>
        <div className="mx-auto max-w-content">
          <h2 className="mb-6 text-xl font-bold tracking-tight sm:mb-8 sm:text-2xl">
            Service components
          </h2>
          <div className="divide-y rounded-xl border">
            {services.map((service) => (
              <div
                key={service.name}
                className="flex items-center justify-between px-5 py-4 sm:px-6 sm:py-5"
              >
                <div>
                  <div className="font-semibold">{service.name}</div>
                  <div className="text-sm text-muted-foreground">{service.description}</div>
                </div>
                <Badge
                  variant={service.status === 'operational' ? 'default' : 'destructive'}
                  className="shrink-0"
                >
                  {service.status === 'operational' ? 'Operational' : 'Degraded'}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* ── About this page ── */}
      <div className="border-y bg-muted/30">
        <div className="container py-section">
          <div className="mx-auto max-w-readable">
            <h2 className="mb-4 text-lg font-bold tracking-tight sm:text-xl">About Trace status</h2>
            <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
              <p>
                Trace operates entirely on-device and doesn&apos;t depend on external services for
                core functionality. This status page tracks supporting services like TestFlight
                distribution, GitHub repository, and documentation website.
              </p>
              <p>
                Even if external services are down, Trace will continue to work normally on your
                device for traffic capture and inspection.
              </p>
              <p>
                For real-time incident updates, follow{' '}
                <a
                  href="https://github.com/Trace-iOS/Trace/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  GitHub Issues
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
