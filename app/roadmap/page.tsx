import type { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { PageSection } from '@/components/shared/page-section';
import {
  CheckCircle2,
  Circle,
  Rocket,
  Zap,
  Shield,
  Users,
  Database,
  Globe,
  Code,
  GitBranch,
  Lock,
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
    title: 'Initial Release',
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
        description: 'On-device certificate authority for encrypted traffic analysis',
      },
      {
        name: 'WebSocket & SSE support',
        description: 'Real-time protocol debugging with frame-by-frame inspection',
      },
      {
        name: 'Traffic modification tools',
        description: 'Rewrite rules, request maps, and host overrides',
      },
    ],
  },
  {
    quarter: 'Q1',
    year: '2026',
    title: 'Advanced Filtering & Analysis',
    description:
      'Enhanced filtering capabilities and analysis tools for faster debugging workflows.',
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
        description: 'HAR, cURL, Postman collections, and custom export formats',
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
    icon: Shield,
    features: [
      {
        name: 'Custom CA certificates',
        description: 'Import enterprise CA certificates for corporate environments',
      },
      {
        name: 'SSO integration',
        description: 'Single sign-on support for enterprise authentication',
      },
      {
        name: 'Audit logging',
        description: 'Comprehensive logging for security compliance and auditing',
      },
      {
        name: 'Advanced security policies',
        description: 'Granular controls for data retention, export, and access',
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
        name: 'Scripting API',
        description: 'Advanced JavaScript API for automated traffic manipulation',
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
  completed: {
    label: 'Completed',
    variant: 'default',
    icon: CheckCircle2,
  },
  'in-progress': {
    label: 'In Progress',
    variant: 'secondary',
    icon: GitBranch,
  },
  planned: {
    label: 'Planned',
    variant: 'outline',
    icon: Circle,
  },
};

export default function RoadmapPage() {
  return (
    <div className="flex w-full flex-col">
      {/* Hero Section */}
      <PageSection>
        <div className="mx-auto max-w-content text-center">
          <Globe className="mx-auto mb-4 h-10 w-10 text-primary sm:mb-6 sm:h-12 sm:w-12" />
          <h1 className="mb-3 text-2xl font-bold tracking-tight sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl">
            Product Roadmap
          </h1>
          <p className="mx-auto max-w-readable text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
            Our vision for the future of iOS network debugging. Track progress, see what&apos;s
            coming next, and help shape the development of Trace.
          </p>
        </div>
      </PageSection>

      <Separator />

      {/* Timeline Section */}
      <PageSection spacing="lg">
        <div className="mx-auto max-w-readable">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute top-0 left-[19px] h-full w-0.5 bg-border sm:left-[23px]" />

            {/* Milestones */}
            <div className="space-y-8 sm:space-y-10 md:space-y-12">
              {milestones.map((milestone, index) => {
                const StatusIcon = statusConfig[milestone.status].icon;
                const MilestoneIcon = milestone.icon;

                return (
                  <div key={index} className="relative pl-12 sm:pl-16">
                    {/* Timeline dot */}
                    <div className="absolute top-0 left-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-border bg-background sm:h-12 sm:w-12">
                        <StatusIcon
                          className={`h-5 w-5 sm:h-6 sm:w-6 ${
                            milestone.status === 'completed'
                              ? 'text-primary'
                              : milestone.status === 'in-progress'
                                ? 'text-muted-foreground'
                                : 'text-muted-foreground/50'
                          }`}
                        />
                      </div>
                    </div>

                    {/* Milestone Card */}
                    <Card
                      className={`${
                        milestone.status === 'completed'
                          ? 'border-primary/20'
                          : milestone.status === 'in-progress'
                            ? 'border-primary/10'
                            : ''
                      }`}
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
                          {milestone.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex gap-3">
                              <div className="mt-0.5 shrink-0">
                                <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground sm:h-2 sm:w-2" />
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="text-xs font-medium sm:text-sm">{feature.name}</div>
                                <div className="mt-0.5 text-2xs text-muted-foreground sm:text-xs">
                                  {feature.description}
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </PageSection>

      <Separator />

      {/* CTA Section */}
      <PageSection spacing="lg">
        <div className="mx-auto max-w-readable text-center">
          <Lock className="mx-auto mb-4 h-10 w-10 text-primary sm:mb-6 sm:h-12 sm:w-12" />
          <h2 className="mb-3 text-2xl font-bold tracking-tight sm:mb-4 sm:text-3xl md:text-4xl">
            Open source and community-driven
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-muted-foreground sm:mb-8 sm:text-base">
            This roadmap reflects our vision, but your feedback shapes our priorities. Trace is open
            source, and we welcome contributions, feature requests, and discussions from the
            community.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <Button size="lg" asChild className="w-full sm:w-auto">
              <a
                href="https://github.com/Trace-iOS/Trace/discussions"
                target="_blank"
                rel="noopener noreferrer"
              >
                Share Feedback
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
              <a
                href="https://github.com/Trace-iOS/Trace/issues"
                target="_blank"
                rel="noopener noreferrer"
              >
                Report Issues
              </a>
            </Button>
          </div>
        </div>
      </PageSection>
    </div>
  );
}
