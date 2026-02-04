import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { PageHeader } from '@/components/shared/page-header';
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
    <div className="flex flex-col">
      <PageHeader
        icon={Activity}
        title="Status"
        description="Current status of Trace services and infrastructure."
      />

      <Separator />

      {/* Overall Status */}
      <section className="container py-section">
        <div className="mx-auto max-w-content">
          <Card
            className={
              allOperational
                ? 'border-primary/20 bg-primary/5'
                : 'border-destructive/20 bg-destructive/5'
            }
          >
            <CardHeader>
              <div className="flex items-center gap-3">
                {allOperational ? (
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                ) : (
                  <AlertCircle className="h-8 w-8 text-destructive" />
                )}
                <div>
                  <CardTitle>
                    {allOperational ? 'All Systems Operational' : 'Service Degradation'}
                  </CardTitle>
                  <CardDescription>
                    {allOperational
                      ? 'All services are running normally'
                      : 'One or more services are experiencing issues'}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Service Components */}
      <section className="container py-section">
        <div className="mx-auto max-w-content">
          <h2 className="mb-8 text-xl font-bold tracking-tight sm:mb-10 sm:text-2xl">
            Service components
          </h2>
          <div className="grid gap-4 sm:gap-5 md:gap-6">
            {services.map((service) => (
              <Card key={service.name}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{service.name}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </div>
                    <Badge variant={service.status === 'operational' ? 'default' : 'destructive'}>
                      {service.status === 'operational' ? 'Operational' : 'Degraded'}
                    </Badge>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Important Note */}
      <section className="container py-section">
        <div className="mx-auto max-w-content">
          <Card>
            <CardHeader>
              <CardTitle>About Trace status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
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
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
