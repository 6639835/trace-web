import type { Metadata } from 'next';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { PageHeader } from '@/components/shared/page-header';
import { FeatureCard } from '@/components/marketing/feature-card';
import { BulletList, BulletItem } from '@/components/shared/bullet-list';
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
      <PageHeader
        icon={LifeBuoy}
        title="Support"
        description="Get help with Trace. Find answers in the documentation, report bugs on GitHub, or ask questions in the community."
      />

      <Separator />

      {/* Common Issues */}
      <section className="container py-section">
        <div className="mx-auto max-w-content">
          <h2 className="mb-8 text-xl font-bold tracking-tight sm:mb-10 sm:text-2xl md:mb-12">
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
      </section>

      <Separator />

      {/* Support Channels */}
      <section className="container py-section">
        <div className="mx-auto max-w-content">
          <h2 className="mb-8 text-xl font-bold tracking-tight sm:mb-10 sm:text-2xl md:mb-12">
            Get help
          </h2>
          <div className="grid gap-6 sm:gap-7 md:grid-cols-2 md:gap-8">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg border bg-muted/50 p-2">
                  <Book className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">Documentation</h3>
              </div>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                Comprehensive guides for installation, configuration, features, and advanced usage.
                Start here for detailed explanations and step-by-step tutorials.
              </p>
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                Browse documentation →
              </Link>
            </div>

            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg border bg-muted/50 p-2">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">GitHub Discussions</h3>
              </div>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                Ask questions, share tips, and connect with the Trace community. Great for general
                questions, feature ideas, and debugging help.
              </p>
              <a
                href="https://github.com/Trace-iOS/Trace/discussions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                Join discussions →
              </a>
            </div>

            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg border bg-muted/50 p-2">
                  <Github className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">GitHub Issues</h3>
              </div>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                Report bugs, request features, or track ongoing work. Include steps to reproduce,
                device details, and screenshots for bug reports.
              </p>
              <a
                href="https://github.com/Trace-iOS/Trace/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                Open an issue →
              </a>
            </div>

            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg border bg-muted/50 p-2">
                  <Users className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">Community</h3>
              </div>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                Connect with other Trace users, share debugging workflows, and learn from real-world
                use cases. Contributions and feedback are always welcome.
              </p>
              <Link
                href="/contributing"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                Ways to contribute →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Documentation Links */}
      <section className="container py-section">
        <div className="mx-auto max-w-content">
          <h2 className="mb-8 text-xl font-bold tracking-tight sm:mb-10 sm:text-2xl md:mb-12">
            Popular documentation
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            <Link
              href="/docs/installation"
              className="group rounded-lg border p-4 transition-colors hover:border-primary/50"
            >
              <h3 className="mb-2 font-semibold group-hover:text-primary">Installation</h3>
              <p className="text-sm text-muted-foreground">
                Download from TestFlight and set up Trace on your device
              </p>
            </Link>

            <Link
              href="/docs/quick-start"
              className="group rounded-lg border p-4 transition-colors hover:border-primary/50"
            >
              <h3 className="mb-2 font-semibold group-hover:text-primary">Quick start</h3>
              <p className="text-sm text-muted-foreground">
                Capture your first requests in 2 minutes
              </p>
            </Link>

            <Link
              href="/docs/certificates"
              className="group rounded-lg border p-4 transition-colors hover:border-primary/50"
            >
              <h3 className="mb-2 font-semibold group-hover:text-primary">Certificate setup</h3>
              <p className="text-sm text-muted-foreground">
                Install and trust the root CA for HTTPS inspection
              </p>
            </Link>

            <Link
              href="/docs/filtering"
              className="group rounded-lg border p-4 transition-colors hover:border-primary/50"
            >
              <h3 className="mb-2 font-semibold group-hover:text-primary">Filtering</h3>
              <p className="text-sm text-muted-foreground">
                Filter traffic by domain, method, status code, and more
              </p>
            </Link>

            <Link
              href="/docs/rewrite-rules"
              className="group rounded-lg border p-4 transition-colors hover:border-primary/50"
            >
              <h3 className="mb-2 font-semibold group-hover:text-primary">Rewrite rules</h3>
              <p className="text-sm text-muted-foreground">
                Modify requests and responses automatically
              </p>
            </Link>

            <Link
              href="/docs/websockets"
              className="group rounded-lg border p-4 transition-colors hover:border-primary/50"
            >
              <h3 className="mb-2 font-semibold group-hover:text-primary">WebSocket debugging</h3>
              <p className="text-sm text-muted-foreground">Capture and inspect WebSocket frames</p>
            </Link>

            <Link
              href="/docs/exporting"
              className="group rounded-lg border p-4 transition-colors hover:border-primary/50"
            >
              <h3 className="mb-2 font-semibold group-hover:text-primary">Exporting</h3>
              <p className="text-sm text-muted-foreground">
                Export as HAR, PCAP, or cURL for analysis
              </p>
            </Link>

            <Link
              href="/docs/architecture"
              className="group rounded-lg border p-4 transition-colors hover:border-primary/50"
            >
              <h3 className="mb-2 font-semibold group-hover:text-primary">Architecture</h3>
              <p className="text-sm text-muted-foreground">How Trace works under the hood</p>
            </Link>

            <Link
              href="/docs/building"
              className="group rounded-lg border p-4 transition-colors hover:border-primary/50"
            >
              <h3 className="mb-2 font-semibold group-hover:text-primary">Building from source</h3>
              <p className="text-sm text-muted-foreground">Clone, build, and run Trace locally</p>
            </Link>
          </div>
        </div>
      </section>

      <Separator />

      {/* FAQ & Contact */}
      <section className="container py-section">
        <div className="mx-auto max-w-content">
          <div className="grid gap-6 sm:gap-7 md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="mb-4 text-lg font-semibold">Frequently asked questions</h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                Quick answers to common questions about installation, usage, troubleshooting, and
                privacy.
              </p>
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                View all FAQs →
              </Link>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-semibold">Direct contact</h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                For sensitive issues, security concerns, or press inquiries, reach out directly via
                email or GitHub.
              </p>
              <div className="flex flex-col gap-2">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
