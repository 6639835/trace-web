import type { Metadata } from 'next';
import Link from 'next/link';
import { PageSection } from '@/components/shared/page-section';
import { PageHeader } from '@/components/shared/page-header';
import { FeatureCard } from '@/components/marketing/feature-card';
import { BulletList, BulletItem } from '@/components/shared/bullet-list';
import { EditorialBanner } from '@/components/sections/editorial-banner';
import {
  LifeBuoy,
  Book,
  MessageCircle,
  Github,
  Mail,
  AlertCircle,
  Settings,
  Shield,
  Zap,
  Users,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Support',
  description:
    'Get help with Trace iOS network debugger. Find troubleshooting guides, report bugs, ask questions in GitHub Discussions, and access documentation resources.',
  keywords: [
    'Trace support',
    'iOS network debugger help',
    'Trace troubleshooting',
    'report bug',
    'get help',
  ],
  openGraph: {
    title: 'Support - Trace iOS Network Debugger',
    description:
      'Get help with Trace. Troubleshooting guides, documentation, community support, and ways to report issues.',
    url: '/support',
  },
  alternates: {
    canonical: '/support',
  },
};

export default function SupportPage() {
  return (
    <div className="flex flex-col">
      {/* ── Split hero: h1 left, 4 quick-link cards right ── */}
      <PageHeader
        variant="split"
        title="Get help with Trace."
        description="Find answers in the documentation, report bugs on GitHub, or ask questions in the community."
        aside={
          <div className="w-full max-w-sm space-y-3 lg:max-w-none">
            {[
              { href: '/docs', label: 'Browse documentation', icon: Book },
              {
                href: 'https://github.com/Trace-iOS/Trace/discussions',
                label: 'GitHub Discussions',
                icon: MessageCircle,
                external: true,
              },
              {
                href: 'https://github.com/Trace-iOS/Trace/issues',
                label: 'Report a bug',
                icon: Github,
                external: true,
              },
              { href: '/faq', label: 'Frequently asked questions', icon: CheckCircle },
            ].map(({ href, label, icon: Icon, external }) => (
              <a
                key={href}
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="flex items-center justify-between rounded-xl border bg-card px-4 py-3 text-sm font-medium transition-colors hover:border-primary/50 hover:bg-muted/50"
              >
                <span className="flex items-center gap-2.5">
                  <Icon className="h-4 w-4 text-primary" />
                  {label}
                </span>
                <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
              </a>
            ))}
          </div>
        }
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <Link
            href="/docs/quick-start"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            Quick start guide →
          </Link>
          <Link
            href="/docs/certificates"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            Certificate setup →
          </Link>
        </div>
      </PageHeader>

      {/* ── Common issues ── */}
      <PageSection className="border-y bg-muted/30">
        <div className="mx-auto max-w-content">
          <h2 className="mb-8 text-xl font-bold tracking-tight sm:mb-10 sm:text-2xl md:text-3xl">
            Common issues
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6">
            <FeatureCard
              icon={AlertCircle}
              title="Traffic not being captured"
              description={<>If Trace isn&apos;t capturing traffic, check these items:</>}
            >
              <BulletList className="mt-3">
                <BulletItem>Ensure capture is started (Network tab, start button)</BulletItem>
                <BulletItem>Verify VPN permission is enabled in iOS Settings</BulletItem>
                <BulletItem>Test with Safari to confirm Trace is working</BulletItem>
                <BulletItem>
                  Some apps bypass system proxy settings and won&apos;t be captured
                </BulletItem>
              </BulletList>
              <Link
                href="/docs/quick-start"
                className="mt-4 inline-block text-sm text-primary hover:underline"
              >
                View quick start guide →
              </Link>
            </FeatureCard>

            <FeatureCard
              icon={Shield}
              title="HTTPS traffic shows as encrypted"
              description="To inspect HTTPS traffic, you need to install and trust the root certificate:"
            >
              <BulletList className="mt-3">
                <BulletItem>Generate and install the certificate profile in Trace</BulletItem>
                <BulletItem>
                  Enable full trust in Settings &gt; Certificate Trust Settings
                </BulletItem>
                <BulletItem>Certificate pinning may prevent inspection for some apps</BulletItem>
              </BulletList>
              <Link
                href="/docs/certificates"
                className="mt-4 inline-block text-sm text-primary hover:underline"
              >
                Certificate setup guide →
              </Link>
            </FeatureCard>

            <FeatureCard
              icon={Settings}
              title="App crashes on launch or capture"
              description="If Trace is crashing, try these troubleshooting steps:"
            >
              <BulletList className="mt-3">
                <BulletItem>Force quit Trace and reopen the app</BulletItem>
                <BulletItem>Restart your device to clear any stuck state</BulletItem>
                <BulletItem>Delete and reinstall from TestFlight</BulletItem>
                <BulletItem>Check if you&apos;re on the latest TestFlight build</BulletItem>
              </BulletList>
              <a
                href="https://github.com/Trace-iOS/Trace/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm text-primary hover:underline"
              >
                Report persistent crashes →
              </a>
            </FeatureCard>

            <FeatureCard
              icon={Zap}
              title="Performance or battery impact"
              description="Minimize performance impact while capturing traffic:"
            >
              <BulletList className="mt-3">
                <BulletItem>Use filtering to capture only relevant traffic</BulletItem>
                <BulletItem>Clear old capture sessions to free memory</BulletItem>
                <BulletItem>Disable modification features you&apos;re not using</BulletItem>
                <BulletItem>Stop capture when not actively debugging</BulletItem>
              </BulletList>
              <Link
                href="/docs/performance"
                className="mt-4 inline-block text-sm text-primary hover:underline"
              >
                Performance tips →
              </Link>
            </FeatureCard>
          </div>
        </div>
      </PageSection>

      {/* ── Support channels ── */}
      <PageSection>
        <div className="mx-auto max-w-content">
          <h2 className="mb-8 text-xl font-bold tracking-tight sm:mb-10 sm:text-2xl md:text-3xl">
            Get help
          </h2>
          <div className="grid gap-6 sm:gap-7 md:grid-cols-2 md:gap-8">
            {[
              {
                icon: Book,
                title: 'Documentation',
                body: 'Comprehensive guides for installation, configuration, features, and advanced usage. Start here for detailed explanations and step-by-step tutorials.',
                link: { href: '/docs', label: 'Browse documentation →', external: false },
              },
              {
                icon: MessageCircle,
                title: 'GitHub Discussions',
                body: 'Ask questions, share tips, and connect with the Trace community. Great for general questions, feature ideas, and debugging help.',
                link: {
                  href: 'https://github.com/Trace-iOS/Trace/discussions',
                  label: 'Join discussions →',
                  external: true,
                },
              },
              {
                icon: Github,
                title: 'GitHub Issues',
                body: 'Report bugs, request features, or track ongoing work. Include steps to reproduce, device details, and screenshots for bug reports.',
                link: {
                  href: 'https://github.com/Trace-iOS/Trace/issues',
                  label: 'Open an issue →',
                  external: true,
                },
              },
              {
                icon: Users,
                title: 'Community',
                body: 'Connect with other Trace users, share debugging workflows, and learn from real-world use cases. Contributions and feedback are always welcome.',
                link: { href: '/contributing', label: 'Ways to contribute →', external: false },
              },
            ].map(({ icon: Icon, title, body, link }) => (
              <div key={title}>
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg border bg-muted/50 p-2">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                </div>
                <p className="mb-4 leading-relaxed text-muted-foreground">{body}</p>
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* ── Popular docs ── */}
      <div className="border-y bg-muted/30">
        <div className="container py-section">
          <div className="mx-auto max-w-content">
            <h2 className="mb-6 text-xl font-bold tracking-tight sm:mb-8 sm:text-2xl">
              Popular documentation
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
              {[
                {
                  href: '/docs/installation',
                  title: 'Installation',
                  desc: 'Download from TestFlight and set up Trace on your device',
                },
                {
                  href: '/docs/quick-start',
                  title: 'Quick start',
                  desc: 'Capture your first requests in 2 minutes',
                },
                {
                  href: '/docs/certificates',
                  title: 'Certificate setup',
                  desc: 'Install and trust the root CA for HTTPS inspection',
                },
                {
                  href: '/docs/filtering',
                  title: 'Filtering',
                  desc: 'Filter traffic by domain, method, status code, and more',
                },
                {
                  href: '/docs/rewrite-rules',
                  title: 'Rewrite rules',
                  desc: 'Modify requests and responses automatically',
                },
                {
                  href: '/docs/websockets',
                  title: 'WebSocket debugging',
                  desc: 'Capture and inspect WebSocket frames',
                },
                {
                  href: '/docs/exporting',
                  title: 'Exporting',
                  desc: 'Export as HAR, PCAP, or cURL for analysis',
                },
                {
                  href: '/docs/architecture',
                  title: 'Architecture',
                  desc: 'How Trace works under the hood',
                },
                {
                  href: '/docs/building',
                  title: 'Building from source',
                  desc: 'Clone, build, and run Trace locally',
                },
              ].map(({ href, title, desc }) => (
                <Link
                  key={href}
                  href={href}
                  className="group rounded-lg border bg-card p-4 transition-colors hover:border-primary/50"
                >
                  <h3 className="mb-2 font-semibold group-hover:text-primary">{title}</h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <EditorialBanner variant="muted">
        <LifeBuoy className="mx-auto mb-4 h-10 w-10 text-primary sm:h-12 sm:w-12" />
        <h2 className="mb-3 text-2xl font-bold tracking-tight sm:text-3xl">Still need help?</h2>
        <p className="mb-8 text-sm text-muted-foreground sm:text-base">
          For sensitive issues, security concerns, or press inquiries, reach out directly.
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
          <a
            href="mailto:epa6643@gmail.com"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
            epa6643@gmail.com
          </a>
          <a
            href="https://github.com/Trace-iOS/Trace"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <Github className="h-4 w-4" />
            GitHub repository
          </a>
        </div>
      </EditorialBanner>
    </div>
  );
}
