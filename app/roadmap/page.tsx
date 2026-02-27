import type { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Timeline, TimelineItem } from '@/components/ui/timeline';
import { PageSection } from '@/components/shared/page-section';
import { MetricsStrip } from '@/components/sections/metrics-strip';
import { EditorialBanner } from '@/components/sections/editorial-banner';
import {
  CheckCircle2,
  Circle,
  Rocket,
  Zap,
  Shield,
  Users,
  Database,
  Lock,
  Code,
  GitBranch,
  MessageSquare,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Product Roadmap',
  description:
    'Explore the future of Trace. See what features are coming next and track our progress building the best iOS network debugging tool.',
  keywords: [
    'Trace roadmap',
    'iOS network debugger features',
    'Trace upcoming features',
    'network debugging roadmap',
  ],
  openGraph: {
    title: 'Product Roadmap | Trace',
    description:
      'Explore the future of Trace. See what features are coming next and track our progress building the best iOS network debugging tool.',
    url: '/roadmap',
  },
  alternates: {
    canonical: '/roadmap',
  },
};

type MilestoneStatus = 'completed' | 'in-progress' | 'planned';

interface Feature {
  name: string;
  description: string;
}

interface Milestone {
  quarter: string;
  year: string;
  title: string;
  description: string;
  status: MilestoneStatus;
  icon: React.ElementType;
  features: Feature[];
}

const milestones: Milestone[] = [
  {
    quarter: 'Q4',
    year: '2025',
    title: 'v1.0.0 - Initial Release',
    description:
      'Foundation release with core network capture and inspection capabilities for iOS developers.',
    status: 'completed',
    icon: Rocket,
    features: [
      {
        name: 'Device-wide HTTP(S) capture',
        description: 'Network Extension-based packet tunnel for system-level traffic visibility',
      },
      {
        name: 'TLS MITM inspection',
        description: 'On-device certificate authority with per-domain cert storage',
      },
      {
        name: 'WebSocket & SSE support',
        description: 'Real-time protocol debugging with streaming frame inspection',
      },
      {
        name: 'Traffic modification tools',
        description: 'Rewrite rules, request builder, and host overrides',
      },
      {
        name: 'PCAP export',
        description: 'Export captured traffic in PCAP format for Wireshark analysis',
      },
    ],
  },
  {
    quarter: 'Q1',
    year: '2026',
    title: 'v1.0.1–1.0.3 - Stability & Polish',
    description:
      'Production hardening with comprehensive fixes, test coverage, and developer experience improvements.',
    status: 'completed',
    icon: Shield,
    features: [
      {
        name: 'Advanced capture modes',
        description: 'Full-tunnel VPN capture with IPv6 support and SOCKS5 fallback',
      },
      {
        name: 'Compression hardening',
        description: 'Fixed Brotli/Deflate streaming decoders and chunked transfer encoding',
      },
      {
        name: 'Widget & intents',
        description: 'App shortcuts, Control Center widgets, and deep-link navigation',
      },
      {
        name: 'Enhanced UX',
        description: 'Accessibility improvements, consistent empty states, and refined animations',
      },
      {
        name: 'CI/CD & testing',
        description: 'GitHub Actions workflow, comprehensive unit tests, and Swift 6 concurrency',
      },
    ],
  },
  {
    quarter: 'Q1',
    year: '2026',
    title: 'Current Sprint - Advanced Filtering',
    description:
      'Enhanced filtering, search capabilities, and analysis tools for faster debugging workflows.',
    status: 'in-progress',
    icon: Zap,
    features: [
      {
        name: 'Advanced filter engine',
        description: 'Complex queries with regex, logical operators, and custom predicates',
      },
      {
        name: 'Saved filter presets',
        description: 'Save and share common filter configurations across sessions',
      },
      {
        name: 'Request comparison tool',
        description: 'Side-by-side diff view for comparing requests and responses',
      },
      {
        name: 'Enhanced search',
        description: 'Full-text search across headers, bodies, and metadata',
      },
      {
        name: 'Performance metrics',
        description: 'Detailed timing breakdowns and waterfall visualizations',
      },
    ],
  },
  {
    quarter: 'Q2',
    year: '2026',
    title: 'Performance & Scale',
    description: 'Optimizations for handling large capture sessions and improved performance.',
    status: 'planned',
    icon: Database,
    features: [
      {
        name: 'Memory optimization',
        description: 'Efficient storage for sessions with 10,000+ requests',
      },
      {
        name: 'Lazy loading',
        description: 'Virtual scrolling and on-demand content loading for better performance',
      },
      {
        name: 'Export enhancements',
        description: 'HAR, Postman collections, and custom export formats',
      },
      {
        name: 'Background capture',
        description: 'Continue capturing network traffic when app is backgrounded',
      },
    ],
  },
  {
    quarter: 'Q3',
    year: '2026',
    title: 'Collaboration Features',
    description: 'Tools for teams to collaborate on debugging sessions and share insights.',
    status: 'planned',
    icon: Users,
    features: [
      {
        name: 'Session sharing',
        description: 'Export and import complete sessions with annotations and filters',
      },
      {
        name: 'Cloud sync',
        description: 'Optional iCloud sync for sessions across devices',
      },
      {
        name: 'Annotations & notes',
        description: 'Add comments and highlights to requests for team collaboration',
      },
      {
        name: 'Shared configurations',
        description: 'Share rewrite rules, scripts, and settings with team members',
      },
    ],
  },
  {
    quarter: 'Q4',
    year: '2026',
    title: 'Enterprise & Security',
    description: 'Advanced security features and enterprise-grade capabilities.',
    status: 'planned',
    icon: Lock,
    features: [
      {
        name: 'Custom CA certificates',
        description: 'Import enterprise CA certificates for corporate environments',
      },
      {
        name: 'Advanced certificate management',
        description: 'Certificate pinning, custom trust stores, and cert validation',
      },
      {
        name: 'Audit logging',
        description: 'Comprehensive logging for security compliance and auditing',
      },
      {
        name: 'Privacy controls',
        description: 'Selective data masking and PII redaction capabilities',
      },
    ],
  },
  {
    quarter: 'Q1',
    year: '2027',
    title: 'Developer Platform',
    description: 'Extensibility features and APIs for custom integrations and automations.',
    status: 'planned',
    icon: Code,
    features: [
      {
        name: 'Plugin system',
        description: 'Build custom analyzers, exporters, and UI extensions',
      },
      {
        name: 'Enhanced scripting',
        description: 'Advanced JavaScript API with better debugging and timeout controls',
      },
      {
        name: 'REST API',
        description: 'Programmatic access to sessions, filters, and capture control',
      },
      {
        name: 'CI/CD integrations',
        description: 'GitHub Actions, GitLab CI, and Jenkins plugins for automated testing',
      },
    ],
  },
];

const statusConfig: Record<
  MilestoneStatus,
  { label: string; variant: 'default' | 'secondary' | 'outline'; icon: React.ElementType }
> = {
  completed: { label: 'Completed', variant: 'default', icon: CheckCircle2 },
  'in-progress': { label: 'In Progress', variant: 'secondary', icon: GitBranch },
  planned: { label: 'Planned', variant: 'outline', icon: Circle },
};

export default function RoadmapPage() {
  const completed = milestones.filter((m) => m.status === 'completed').length;
  const inProgress = milestones.filter((m) => m.status === 'in-progress').length;
  const planned = milestones.filter((m) => m.status === 'planned').length;

  return (
    <div className="flex w-full flex-col">
      {/* ── Left-aligned minimal hero ── */}
      <section className="container py-section">
        <div className="mx-auto max-w-content">
          <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Product Roadmap
          </h1>
          <p className="max-w-readable text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
            Our vision for the future of iOS network debugging. Track progress, see what&apos;s
            coming next, and help shape the development of Trace.
          </p>
        </div>
      </section>

      {/* ── Metrics strip: progress at a glance ── */}
      <MetricsStrip
        metrics={[
          { value: String(completed), label: 'Completed' },
          { value: String(inProgress), label: 'In progress' },
          { value: String(planned), label: 'Planned' },
          { value: '2027', label: 'Horizon' },
        ]}
      />

      {/* ── Timeline ── */}
      <PageSection spacing="lg">
        <div className="mx-auto max-w-readable">
          <Timeline>
            {milestones.map((milestone) => {
              const StatusIcon = statusConfig[milestone.status].icon;
              const MilestoneIcon = milestone.icon;

              return (
                <TimelineItem
                  key={`${milestone.year}-${milestone.quarter}-${milestone.title}`}
                  icon={
                    <StatusIcon
                      className={`h-5 w-5 sm:h-6 sm:w-6 ${
                        milestone.status === 'completed'
                          ? 'text-primary'
                          : milestone.status === 'in-progress'
                            ? 'text-muted-foreground'
                            : 'text-muted-foreground/50'
                      }`}
                    />
                  }
                >
                  <Card
                    className={
                      milestone.status === 'completed'
                        ? 'border-primary/20'
                        : milestone.status === 'in-progress'
                          ? 'border-primary/10'
                          : ''
                    }
                  >
                    <CardHeader>
                      <div className="mb-3 flex flex-wrap items-center gap-2 sm:mb-4">
                        <Badge variant={statusConfig[milestone.status].variant}>
                          {statusConfig[milestone.status].label}
                        </Badge>
                        <span className="text-xs font-medium text-muted-foreground sm:text-sm">
                          {milestone.quarter} {milestone.year}
                        </span>
                      </div>
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary sm:h-12 sm:w-12">
                          <MilestoneIcon className="h-5 w-5 text-secondary-foreground sm:h-6 sm:w-6" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <CardTitle className="mb-1.5 sm:mb-2">{milestone.title}</CardTitle>
                          <CardDescription>{milestone.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 sm:space-y-4">
                        {milestone.features.map((feature, i) => (
                          <li key={i} className="flex gap-3">
                            <div className="mt-0.5 shrink-0">
                              <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground sm:h-2 sm:w-2" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="text-xs font-medium sm:text-sm">{feature.name}</div>
                              <div className="mt-0.5 text-xs text-muted-foreground sm:text-sm">
                                {feature.description}
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </TimelineItem>
              );
            })}
          </Timeline>
        </div>
      </PageSection>

      {/* ── CTA: editorial banner ── */}
      <EditorialBanner variant="muted">
        <MessageSquare className="mx-auto mb-4 h-10 w-10 text-primary sm:h-12 sm:w-12" />
        <h2 className="mb-3 text-2xl font-bold tracking-tight sm:text-3xl">
          Open source and community-driven
        </h2>
        <p className="mb-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
          This roadmap reflects our vision, but your feedback shapes priorities. Trace is open
          source—we welcome contributions, feature requests, and discussions from the community.
        </p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
          <Button size="lg" asChild>
            <a
              href="https://github.com/Trace-iOS/Trace/discussions"
              target="_blank"
              rel="noopener noreferrer"
            >
              Share feedback
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a
              href="https://github.com/Trace-iOS/Trace/issues"
              target="_blank"
              rel="noopener noreferrer"
            >
              Report issues
            </a>
          </Button>
        </div>
      </EditorialBanner>
    </div>
  );
}
