import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { PageSection } from '@/components/shared/page-section';
import { EditorialBanner } from '@/components/sections/editorial-banner';
import { Github, Code, Users, Shield, BookOpen, CirclePlus, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Open Source - Free MIT Licensed iOS Network Debugger',
  description:
    'Trace is free and open source under MIT license. No subscriptions, no feature gates, no telemetry. Build from source, contribute, and verify binary integrity. Transparent iOS network debugging.',
  keywords: [
    'open source iOS debugger',
    'MIT license iOS',
    'free network debugger',
    'iOS open source tools',
    'build from source iOS',
    'transparent network debugging',
  ],
  openGraph: {
    title: 'Trace - Open Source iOS Network Debugger',
    description:
      'Free and open source under MIT license. Build from source, contribute, and verify what runs on your device.',
    url: '/open-source',
  },
  alternates: {
    canonical: '/open-source',
  },
};

export default function OpenSourcePage() {
  return (
    <div className="flex flex-col">
      {/* ── Centered hero with immediate CTAs + badge row ── */}
      <section className="container py-section">
        <div className="mx-auto max-w-readable text-center">
          <Github className="mx-auto mb-5 h-12 w-12 text-primary" />
          <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            MIT Licensed. Zero lock-in. Community built.
          </h1>
          <p className="mb-8 text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
            Free to use, free to modify, free to distribute. Every line of code is open for
            inspection, contribution, and trust.
          </p>

          {/* Immediate primary CTAs */}
          <div className="mb-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <Button size="lg" asChild>
              <Link
                href="https://github.com/Trace-iOS/Trace"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#contributing">
                How to contribute <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Badge row */}
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary">Free forever</Badge>
            <Badge variant="secondary">MIT License</Badge>
            <Badge variant="secondary">On-device only</Badge>
            <Badge variant="secondary">No telemetry</Badge>
            <Badge variant="secondary">No feature gates</Badge>
          </div>
        </div>
      </section>

      <Separator />

      {/* ── Why open source: horizontal icon list ── */}
      <PageSection>
        <div className="mx-auto max-w-content">
          <h2 className="mb-8 text-xl font-bold tracking-tight sm:mb-10 sm:text-2xl md:text-3xl">
            Why open source
          </h2>
          <p className="mb-10 max-w-readable text-sm leading-relaxed text-muted-foreground sm:text-base">
            Trace is open source by design. Network debugging tools require trust. Opening the
            codebase allows verification, contribution, and confidence in the tool.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 md:gap-8">
            {[
              {
                icon: Shield,
                title: 'Transparency',
                body: 'Network debugging involves sensitive data. Open source code enables security audits and verification that no data leaves your device. Build from source to ensure binary integrity.',
              },
              {
                icon: Users,
                title: 'Community driven',
                body: 'Contributions from iOS developers improve the tool for everyone. Feature requests, bug reports, and code contributions welcome. Community feedback shapes the roadmap.',
              },
              {
                icon: Code,
                title: 'Learning resource',
                body: 'Complete implementation of Network Extension and TLS interception. Demonstrates advanced iOS networking concepts. Reference for developers building similar tools.',
              },
              {
                icon: BookOpen,
                title: 'No vendor lock-in',
                body: 'No subscriptions, no feature paywalls, no SaaS dependencies. Fork and modify for specific needs. Always available regardless of company status.',
              },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex gap-4">
                <div className="mt-0.5 h-fit shrink-0 rounded-lg border bg-muted/50 p-2">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="mb-1.5 font-semibold">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      <Separator />

      {/* ── License ── */}
      <PageSection>
        <div className="mx-auto max-w-content">
          <h2 className="mb-4 text-xl font-bold tracking-tight sm:mb-6 sm:text-2xl">License</h2>

          <div className="mb-6 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Trace is licensed under the MIT License, one of the most permissive open source
              licenses. This means you can use, copy, modify, merge, publish, distribute,
              sublicense, and sell copies of the software.
            </p>
            <p>
              The only requirement is that the license and copyright notice must be included in all
              copies or substantial portions of the software.
            </p>
          </div>

          <div className="mb-6 rounded-lg border bg-muted/30 p-6">
            <pre className="font-mono text-xs leading-relaxed whitespace-pre-wrap text-muted-foreground sm:text-sm">
              {`MIT License

Copyright (c) 2026 Justin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`}
            </pre>
          </div>

          <Button variant="secondary" asChild>
            <Link
              href="https://github.com/Trace-iOS/Trace/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </Link>
          </Button>
        </div>
      </PageSection>

      <Separator />

      {/* ── Contributing ── */}
      <PageSection>
        <div id="contributing" className="mx-auto max-w-content scroll-mt-20">
          <h2 className="mb-4 text-xl font-bold tracking-tight sm:mb-6 sm:text-2xl">
            Contributing
          </h2>

          <p className="mb-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Contributions are welcome from iOS developers of all experience levels. Whether you are
            fixing a bug, adding a feature, or improving documentation, your help makes Trace
            better.
          </p>

          <div className="mb-8 grid gap-4 sm:grid-cols-2 sm:gap-5">
            {[
              {
                title: 'Report bugs',
                body: 'Found an issue? Open a GitHub issue with reproduction steps and environment details.',
              },
              {
                title: 'Request features',
                body: 'Have an idea? Start a discussion or open an issue describing the feature and use case.',
              },
              {
                title: 'Submit pull requests',
                body: 'Code contributions via pull requests. Follow coding standards and include tests where applicable.',
              },
              {
                title: 'Improve documentation',
                body: 'Fix typos, clarify explanations, or add examples. Documentation improvements are always valuable.',
              },
              {
                title: 'Share knowledge',
                body: 'Write blog posts, create tutorials, or help others in discussions and issues.',
              },
            ].map(({ title, body }) => (
              <div key={title} className="rounded-lg border p-4">
                <p className="mb-1 text-sm font-semibold">{title}</p>
                <p className="text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>

          <div className="mb-8">
            <h3 className="mb-3 text-lg font-semibold">Development setup</h3>
            <div className="space-y-2 rounded-lg border bg-muted/30 p-4 font-mono text-sm">
              <div className="text-muted-foreground"># Clone the repository</div>
              <div>git clone [repository-url]</div>
              <div className="mt-3 text-muted-foreground">
                # Option 1: Open in Xcode with project file
              </div>
              <div>open Trace.xcodeproj</div>
              <div className="mt-3 text-muted-foreground">
                # Option 2: Open with Swift Package Manager
              </div>
              <div>open Package.swift</div>
              <div className="mt-3 text-muted-foreground"># Build and run on device (cmd + R)</div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="mb-3 text-lg font-semibold">Code of conduct</h3>
            <p className="leading-relaxed text-muted-foreground">
              Be respectful and professional. Constructive feedback is encouraged. Focus on
              technical merit and user value. No tolerance for harassment or discrimination.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild className="w-full sm:w-auto">
              <Link
                href="https://github.com/Trace-iOS/Trace"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                View repository
              </Link>
            </Button>
            <Button variant="outline" asChild className="w-full sm:w-auto">
              <Link
                href="https://github.com/Trace-iOS/Trace/issues"
                target="_blank"
                rel="noopener noreferrer"
              >
                View issues
              </Link>
            </Button>
          </div>
        </div>
      </PageSection>

      <Separator />

      {/* ── Build from source ── */}
      <PageSection>
        <div className="mx-auto max-w-content">
          <h2 className="mb-4 text-xl font-bold tracking-tight sm:mb-6 sm:text-2xl">
            Build from source
          </h2>

          <p className="mb-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Building from source ensures you know exactly what code is running on your device. No
            pre-built binaries required.
          </p>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="mb-3 text-base font-semibold">Requirements</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                  Xcode 26.2 with Swift 6.0 support
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                  iOS 18+ (Control widget requires iOS 18+)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                  Apple Developer Team with Network Extension entitlements
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                  Physical device (packet tunnel unavailable in Simulator)
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-base font-semibold">Build steps</h3>
              <ol className="space-y-2 text-sm text-muted-foreground">
                {[
                  'Clone repository and open Trace.xcodeproj (or Package.swift with SwiftPM)',
                  'Update signing for all targets (App, TraceVPN, TraceWidgetExtension) to your team',
                  'Set APP_GROUP_IDENTIFIER build setting to your App Group ID',
                  'Update bundle identifiers for App, TraceVPN, and TraceWidgetExtension',
                  'Update providerBundleIdentifier in VPNManager.swift if extension bundle ID changed',
                  'Build and run on device (root CA generated automatically on first launch)',
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="shrink-0 font-medium text-muted-foreground">{i + 1}.</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="mt-8">
            <Button variant="secondary" asChild>
              <Link href="/docs">Detailed build instructions</Link>
            </Button>
          </div>
        </div>
      </PageSection>

      {/* ── Questions CTA: editorial banner ── */}
      <EditorialBanner variant="muted">
        <CirclePlus className="mx-auto mb-4 h-10 w-10 text-primary" />
        <h2 className="mb-3 text-xl font-bold tracking-tight sm:text-2xl">
          Questions or feedback?
        </h2>
        <p className="mb-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Open an issue on GitHub for bug reports, feature requests, or general questions. The
          community and maintainers monitor issues and discussions actively.
        </p>
        <Button asChild className="w-full sm:w-auto">
          <Link
            href="https://github.com/Trace-iOS/Trace/issues/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CirclePlus className="mr-2 h-5 w-5" />
            Open an issue
          </Link>
        </Button>
      </EditorialBanner>
    </div>
  );
}
