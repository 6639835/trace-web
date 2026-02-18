import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Timeline, TimelineItem } from '@/components/ui/timeline';
import { PageHeader } from '@/components/shared/page-header';
import { PageSection } from '@/components/shared/page-section';
import { FeatureCard } from '@/components/marketing/feature-card';
import {
  Target,
  Code,
  Shield,
  Users,
  Zap,
  Heart,
  CheckCircle2,
  Rocket,
  GitBranch,
  Package,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Trace: our mission to build the best iOS network debugger, the principles that guide development, and the story behind the project. Built by developers, for developers.',
  keywords: [
    'about Trace',
    'Trace story',
    'iOS network debugger',
    'Trace mission',
    'developer tools',
  ],
  openGraph: {
    title: 'About - Trace iOS Network Debugger',
    description:
      'Learn about Trace: our mission, principles, and the story behind the best iOS network debugger.',
    url: '/about',
  },
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        icon={Target}
        title="About Trace"
        description="Building the best iOS network debugger. On-device, privacy-first, and designed for developers who need precise visibility into their apps' network behavior."
      />

      <Separator />

      {/* Mission */}
      <PageSection>
        <div className="mx-auto max-w-readable">
          <h2 className="mb-6 text-2xl font-bold tracking-tight sm:mb-8 sm:text-3xl">
            Our mission
          </h2>
          <p className="mb-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            iOS network debugging shouldn&apos;t require desktop tools, manual configuration, or
            compromising on privacy. Trace brings professional-grade network inspection directly to
            your iPhone or iPad.
          </p>
          <p className="mb-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            We believe debugging tools should be transparent, privacy-respecting, and powerful
            enough for professional use while remaining accessible to developers at all levels.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Every architectural decision, every feature, and every line of code reflects these
            principles. Trace is open source because transparency builds trust, and trust is
            essential for a tool that handles sensitive network data.
          </p>
        </div>
      </PageSection>

      <Separator />

      {/* Story */}
      <PageSection>
        <div className="mx-auto max-w-readable">
          <h2 className="mb-6 text-2xl font-bold tracking-tight sm:mb-8 sm:text-3xl">
            The story behind Trace
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Trace started as a personal project to solve a specific problem: debugging network
              issues on iOS without reaching for a desktop tool or configuring proxy settings across
              multiple apps.
            </p>
            <p>
              Existing solutions worked but felt cumbersome—switching between devices, trusting
              certificates from third-party tools, or accepting that some traffic just wouldn&apos;t
              be captured. The more I debugged iOS apps, the more I wanted something different.
            </p>
            <p>
              What if network debugging happened entirely on-device? What if it integrated
              seamlessly with iOS instead of fighting against sandbox restrictions? What if privacy
              wasn&apos;t an afterthought but a core design principle?
            </p>
            <p>
              After months of experimentation with Network Extension APIs, TLS certificate
              generation, and storage architecture, Trace emerged. It&apos;s not just another
              network proxy—it&apos;s a rethinking of what iOS network debugging can be.
            </p>
            <p>
              Trace became open source from day one because tools that handle sensitive data deserve
              scrutiny. The community has shaped its development through bug reports, feature
              requests, and contributions. This is a tool built by developers, for developers.
            </p>
          </div>
        </div>
      </PageSection>

      <Separator />

      {/* Principles */}
      <PageSection>
        <div className="mx-auto max-w-content">
          <h2 className="mb-8 text-2xl font-bold tracking-tight sm:mb-10 sm:text-3xl md:mb-12">
            Our principles
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6">
            <FeatureCard
              icon={Shield}
              title="Privacy first"
              description="All traffic capture and analysis happens on-device. No telemetry, no analytics, no external servers. Your data never leaves your device. The architecture is designed to make privacy violations impossible, not just unlikely."
            />
            <FeatureCard
              icon={Code}
              title="Open source"
              description="Complete source code is available under the MIT license. Audit the implementation, verify security claims, or fork it for your needs. Transparency builds trust, and trust is essential for debugging tools."
            />
            <FeatureCard
              icon={Zap}
              title="Performance matters"
              description={
                <>
                  Network debugging is time-sensitive work. Trace is optimized for minimal latency,
                  efficient memory usage, and fast UI responsiveness. Even a debugging tool needs to
                  be fast enough that it doesn&apos;t slow down your workflow.
                </>
              }
            />
            <FeatureCard
              icon={Users}
              title="Community driven"
              description="Feature priorities and roadmap decisions are shaped by user feedback. Contributions are welcome—code, documentation, bug reports, and feature requests all move the project forward. This is built with the community, not just for it."
            />
          </div>
        </div>
      </PageSection>

      <Separator />

      {/* Milestones */}
      <PageSection>
        <div className="mx-auto max-w-readable">
          <h2 className="mb-8 text-2xl font-bold tracking-tight sm:mb-10 sm:text-3xl md:mb-12">
            Milestones
          </h2>
          <Timeline>
            <TimelineItem icon={<CheckCircle2 className="h-5 w-5 text-primary sm:h-6 sm:w-6" />}>
              <Card>
                <CardHeader>
                  <div className="mb-2 text-xs font-medium text-muted-foreground sm:text-sm">
                    January 24, 2026
                  </div>
                  <CardTitle>Project launched & open sourced</CardTitle>
                  <CardDescription>
                    Initial Trace codebase published on GitHub under MIT license. Project started
                    with v1.0.0-testflight featuring device-wide capture, TLS MITM inspection,
                    WebSocket/SSE support, PCAP export, and traffic modification tools.
                  </CardDescription>
                </CardHeader>
              </Card>
            </TimelineItem>

            <TimelineItem icon={<CheckCircle2 className="h-5 w-5 text-primary sm:h-6 sm:w-6" />}>
              <Card>
                <CardHeader>
                  <div className="mb-2 text-xs font-medium text-muted-foreground sm:text-sm">
                    January 2026
                  </div>
                  <CardTitle>v1.0.1 - Enhanced capture & widgets</CardTitle>
                  <CardDescription>
                    Full-tunnel VPN capture with IPv6 support, PCAP enhancements, widget/control
                    intents, and comprehensive test coverage. First major stability release.
                  </CardDescription>
                </CardHeader>
              </Card>
            </TimelineItem>

            <TimelineItem icon={<CheckCircle2 className="h-5 w-5 text-primary sm:h-6 sm:w-6" />}>
              <Card>
                <CardHeader>
                  <div className="mb-2 text-xs font-medium text-muted-foreground sm:text-sm">
                    February 2026
                  </div>
                  <CardTitle>v1.0.2 - Core refactoring</CardTitle>
                  <CardDescription>
                    Fixed compression streaming (Brotli/Deflate), hardened PCAP/TCP parsing,
                    improved VPN lifecycle, and enhanced settings UI. Added GitHub Actions CI/CD
                    pipeline.
                  </CardDescription>
                </CardHeader>
              </Card>
            </TimelineItem>

            <TimelineItem icon={<CheckCircle2 className="h-5 w-5 text-primary sm:h-6 sm:w-6" />}>
              <Card>
                <CardHeader>
                  <div className="mb-2 text-xs font-medium text-muted-foreground sm:text-sm">
                    February 2026
                  </div>
                  <CardTitle>v1.0.3 - Polish & accessibility</CardTitle>
                  <CardDescription>
                    SOCKS5 fallback, SSE stream persistence, widget deep-linking, accessibility
                    improvements, Swift 6 concurrency, and UI polish across network/rule views.
                  </CardDescription>
                </CardHeader>
              </Card>
            </TimelineItem>

            <TimelineItem
              icon={<GitBranch className="h-5 w-5 text-muted-foreground sm:h-6 sm:w-6" />}
            >
              <Card>
                <CardHeader>
                  <div className="mb-2 text-xs font-medium text-muted-foreground sm:text-sm">
                    Q1 2026 (In Progress)
                  </div>
                  <CardTitle>Advanced filtering & analysis</CardTitle>
                  <CardDescription>
                    In development: Advanced filter engine with regex support, saved filter presets,
                    request comparison tool, full-text search, and performance metrics
                    visualization.
                  </CardDescription>
                </CardHeader>
              </Card>
            </TimelineItem>

            <TimelineItem
              icon={<Package className="h-5 w-5 text-muted-foreground sm:h-6 sm:w-6" />}
            >
              <Card>
                <CardHeader>
                  <div className="mb-2 text-xs font-medium text-muted-foreground sm:text-sm">
                    Q3 2026
                  </div>
                  <CardTitle>App Store release</CardTitle>
                  <CardDescription>
                    Target: Submit to the App Store after implementing advanced filtering,
                    performance optimizations, and gathering extensive feedback from TestFlight
                    users.
                  </CardDescription>
                </CardHeader>
              </Card>
            </TimelineItem>
          </Timeline>
        </div>
      </PageSection>

      <Separator />

      {/* Team */}
      <PageSection>
        <div className="mx-auto max-w-readable">
          <h2 className="mb-6 text-2xl font-bold tracking-tight sm:mb-8 sm:text-3xl">Team</h2>
          <Card>
            <CardHeader>
              <CardTitle>Justin Lu</CardTitle>
              <CardDescription>Creator &amp; Maintainer</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="leading-relaxed text-muted-foreground">
                iOS developer passionate about building tools that make debugging easier. Created
                Trace to solve real network debugging pain points on iOS.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/lujuncheng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  GitHub
                </a>
                <a
                  href="https://twitter.com/justinlu_site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Twitter
                </a>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6">
            <h3 className="mb-4 text-lg font-semibold">Contributors</h3>
            <p className="leading-relaxed text-muted-foreground">
              Trace is shaped by contributions from developers around the world. Thank you to
              everyone who has submitted code, reported bugs, improved documentation, or provided
              feedback. See the{' '}
              <a
                href="https://github.com/Trace-iOS/Trace/graphs/contributors"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                full list of contributors
              </a>{' '}
              on GitHub.
            </p>
          </div>
        </div>
      </PageSection>

      <Separator />

      {/* CTA */}
      <PageSection>
        <div className="mx-auto max-w-readable text-center">
          <Heart className="mx-auto mb-4 h-10 w-10 text-primary sm:mb-6 sm:h-12 sm:w-12" />
          <h2 className="mb-3 text-2xl font-bold tracking-tight sm:mb-4 sm:text-3xl">
            Join the journey
          </h2>
          <p className="mb-6 text-sm text-muted-foreground sm:mb-8 sm:text-base">
            Trace is built in the open with the community. Contribute code, report bugs, suggest
            features, or simply star the project to show your support.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <Button size="lg" asChild>
              <a
                href="https://github.com/Trace-iOS/Trace"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Code className="mr-2 h-5 w-5" />
                View on GitHub
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contributing">
                <Rocket className="mr-2 h-5 w-5" />
                Start contributing
              </Link>
            </Button>
          </div>
        </div>
      </PageSection>
    </div>
  );
}
