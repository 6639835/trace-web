import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { PageHeader } from '@/components/shared/page-header';
import { PageSection } from '@/components/shared/page-section';
import { FeatureCard } from '@/components/marketing/feature-card';
import { Github, Code, Users, Shield, BookOpen, CirclePlus } from 'lucide-react';

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
      <PageHeader
        icon={Code}
        title="Open source"
        description="Free to use, free to modify, free to distribute. Built transparently for the iOS developer community."
      />

      <Separator />

      {/* Why Open Source */}
      <PageSection>
        <div className="mx-auto max-w-content">
          <h2 className="mb-4 text-center text-xl font-bold tracking-tight sm:mb-6 sm:text-2xl">
            Why open source
          </h2>
          <p className="mx-auto mb-8 max-w-readable text-center text-sm leading-relaxed text-muted-foreground sm:mb-10 sm:text-base md:mb-12">
            Trace is open source by design. Network debugging tools require trust. Opening the
            codebase allows verification, contribution, and confidence in the tool.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6">
            <FeatureCard
              icon={Shield}
              title="Transparency"
              titleClassName="text-lg"
              description="Network debugging involves sensitive data. Open source code enables security audits and verification that no data leaves your device. Build from source to ensure binary integrity."
            />
            <FeatureCard
              icon={Users}
              title="Community driven"
              titleClassName="text-lg"
              description="Contributions from iOS developers improve the tool for everyone. Feature requests, bug reports, and code contributions welcome. Community feedback shapes the roadmap."
            />
            <FeatureCard
              icon={Code}
              title="Learning resource"
              titleClassName="text-lg"
              description="Complete implementation of Network Extension and TLS interception. Demonstrates advanced iOS networking concepts. Reference for developers building similar tools."
            />
            <FeatureCard
              icon={BookOpen}
              title="No vendor lock-in"
              titleClassName="text-lg"
              description="No subscriptions, no feature paywalls, no SaaS dependencies. Fork and modify for specific needs. Always available regardless of company status."
            />
          </div>
        </div>
      </PageSection>

      <Separator />

      {/* License */}
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

          <div className="mt-8">
            <Button variant="outline" asChild>
              <Link
                href="https://github.com/Trace-iOS/Trace/blob/main/LICENSE"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </PageSection>

      <Separator />

      {/* Contributing */}
      <PageSection>
        <div className="mx-auto max-w-content">
          <h2 className="mb-4 text-xl font-bold tracking-tight sm:mb-6 sm:text-2xl">
            Contributing
          </h2>

          <p className="mb-6 text-sm leading-relaxed text-muted-foreground sm:mb-8 sm:text-base">
            Contributions are welcome from iOS developers of all experience levels. Whether you are
            fixing a bug, adding a feature, or improving documentation, your help makes Trace
            better.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="mb-3 text-lg font-semibold">Ways to contribute</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                  <div>
                    <p className="mb-1 font-medium">Report bugs</p>
                    <p className="text-sm text-muted-foreground">
                      Found an issue? Open a GitHub issue with reproduction steps and environment
                      details.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                  <div>
                    <p className="mb-1 font-medium">Request features</p>
                    <p className="text-sm text-muted-foreground">
                      Have an idea? Start a discussion or open an issue describing the feature and
                      use case.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                  <div>
                    <p className="mb-1 font-medium">Submit pull requests</p>
                    <p className="text-sm text-muted-foreground">
                      Code contributions via pull requests. Follow coding standards and include
                      tests where applicable.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                  <div>
                    <p className="mb-1 font-medium">Improve documentation</p>
                    <p className="text-sm text-muted-foreground">
                      Documentation improvements are valuable. Fix typos, clarify explanations, or
                      add examples.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                  <div>
                    <p className="mb-1 font-medium">Share knowledge</p>
                    <p className="text-sm text-muted-foreground">
                      Write blog posts, create tutorials, or help others in discussions and issues.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
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
                <div className="mt-3 text-muted-foreground">
                  # Build and run on device (cmd + R)
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-semibold">Code of conduct</h3>
              <p className="leading-relaxed text-muted-foreground">
                Be respectful and professional. Constructive feedback is encouraged. Focus on
                technical merit and user value. No tolerance for harassment or discrimination.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
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

      {/* Build from Source */}
      <PageSection>
        <div className="mx-auto max-w-content">
          <h2 className="mb-4 text-xl font-bold tracking-tight sm:mb-6 sm:text-2xl">
            Build from source
          </h2>

          <p className="mb-4 text-sm leading-relaxed text-muted-foreground sm:mb-6 sm:text-base">
            Building from source ensures you know exactly what code is running on your device. No
            pre-built binaries required.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="mb-3 text-lg font-semibold">Requirements</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-foreground" />
                  <p className="text-muted-foreground">Xcode 26.2 with Swift 6.0 support</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-foreground" />
                  <p className="text-muted-foreground">iOS 18+ (Control widget requires iOS 18+)</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-foreground" />
                  <p className="text-muted-foreground">
                    Apple Developer Team with Network Extension entitlements
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-foreground" />
                  <p className="text-muted-foreground">
                    Physical device (packet tunnel unavailable in Simulator)
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-semibold">Build steps</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <div className="font-medium text-muted-foreground">1.</div>
                  <p className="text-muted-foreground">
                    Clone repository and open Trace.xcodeproj (or Package.swift with SwiftPM)
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="font-medium text-muted-foreground">2.</div>
                  <p className="text-muted-foreground">
                    Update signing for all targets (App, TraceVPN, TraceWidgetExtension) to your
                    team
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="font-medium text-muted-foreground">3.</div>
                  <p className="text-muted-foreground">
                    Set APP_GROUP_IDENTIFIER build setting to your App Group ID
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="font-medium text-muted-foreground">4.</div>
                  <p className="text-muted-foreground">
                    Update bundle identifiers for App, TraceVPN, and TraceWidgetExtension
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="font-medium text-muted-foreground">5.</div>
                  <p className="text-muted-foreground">
                    Update providerBundleIdentifier in VPNManager.swift if extension bundle ID
                    changed
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="font-medium text-muted-foreground">6.</div>
                  <p className="text-muted-foreground">
                    Build and run on device (root CA generated automatically on first launch)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Button variant="outline" asChild>
              <Link href="/docs" rel="noopener noreferrer">
                Detailed build instructions
              </Link>
            </Button>
          </div>
        </div>
      </PageSection>

      <Separator />

      {/* Support */}
      <PageSection>
        <div className="mx-auto max-w-readable text-center">
          <h2 className="mb-3 text-xl font-bold tracking-tight sm:mb-4 sm:text-2xl">
            Questions or feedback
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-muted-foreground sm:mb-8 sm:text-base">
            Open an issue on GitHub for bug reports, feature requests, or general questions. The
            community and maintainers monitor issues and discussions.
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
        </div>
      </PageSection>
    </div>
  );
}
