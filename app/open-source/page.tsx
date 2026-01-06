import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Github, Code, Users, Shield, BookOpen } from "lucide-react";

export default function OpenSourcePage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="container py-12 sm:py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Github className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-4 sm:mb-6 text-muted-foreground" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3 sm:mb-4">
            Open source
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
            Free to use, free to modify, free to distribute.
            Built transparently for the iOS developer community.
          </p>
        </div>
      </section>

      <Separator />

      {/* Why Open Source */}
      <section className="container py-12 sm:py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-4 sm:mb-6 text-center">Why open source</h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-8 sm:mb-10 md:mb-12 text-center max-w-2xl mx-auto">
            Trace is open source by design. Network debugging tools require trust.
            Opening the codebase allows verification, contribution, and confidence in the tool.
          </p>

          <div className="grid gap-4 sm:gap-5 md:gap-6 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 mb-2 text-muted-foreground" />
                <CardTitle className="text-lg">Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Network debugging involves sensitive data.
                  Open source code enables security audits and verification that no data leaves your device.
                  Build from source to ensure binary integrity.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 mb-2 text-muted-foreground" />
                <CardTitle className="text-lg">Community driven</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Contributions from iOS developers improve the tool for everyone.
                  Feature requests, bug reports, and code contributions welcome.
                  Community feedback shapes the roadmap.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Code className="h-8 w-8 mb-2 text-muted-foreground" />
                <CardTitle className="text-lg">Learning resource</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Complete implementation of Network Extension and TLS interception.
                  Demonstrates advanced iOS networking concepts.
                  Reference for developers building similar tools.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BookOpen className="h-8 w-8 mb-2 text-muted-foreground" />
                <CardTitle className="text-lg">No vendor lock-in</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  No subscriptions, no feature paywalls, no SaaS dependencies.
                  Fork and modify for specific needs.
                  Always available regardless of company status.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* License */}
      <section className="container py-12 sm:py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-4 sm:mb-6">License</h2>
          
          <div className="rounded-lg border bg-muted/30 p-6 mb-6">
            <p className="text-lg font-semibold mb-2">MIT License</p>
            <p className="text-sm text-muted-foreground">
              Copyright (c) 2024 Trace Contributors
            </p>
          </div>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Trace is licensed under the MIT License, one of the most permissive open source licenses.
              This means you can use, copy, modify, merge, publish, distribute, sublicense, and sell copies of the software.
            </p>
            <p>
              The only requirement is that the license and copyright notice must be included in all copies or substantial portions of the software.
            </p>
            <p>
              No warranty is provided. The software is provided as is.
            </p>
          </div>

          <div className="mt-8">
            <Button variant="outline" asChild>
              <Link href="https://github.com/trace-network-debugger/trace/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">
                Read full license
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Separator />

      {/* Contributing */}
      <section className="container py-12 sm:py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-4 sm:mb-6">Contributing</h2>
          
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 sm:mb-8">
            Contributions are welcome from iOS developers of all experience levels.
            Whether you are fixing a bug, adding a feature, or improving documentation, your help makes Trace better.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Ways to contribute</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Report bugs</p>
                    <p className="text-sm text-muted-foreground">
                      Found an issue? Open a GitHub issue with reproduction steps and environment details.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Request features</p>
                    <p className="text-sm text-muted-foreground">
                      Have an idea? Start a discussion or open an issue describing the feature and use case.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Submit pull requests</p>
                    <p className="text-sm text-muted-foreground">
                      Code contributions via pull requests. Follow coding standards and include tests where applicable.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Improve documentation</p>
                    <p className="text-sm text-muted-foreground">
                      Documentation improvements are valuable. Fix typos, clarify explanations, or add examples.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Share knowledge</p>
                    <p className="text-sm text-muted-foreground">
                      Write blog posts, create tutorials, or help others in discussions and issues.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Development setup</h3>
              <div className="rounded-lg border bg-muted/30 p-4 text-sm font-mono space-y-2">
                <div className="text-muted-foreground"># Clone the repository</div>
                <div>git clone [repository-url]</div>
                <div className="text-muted-foreground mt-3"># Option 1: Open in Xcode with project file</div>
                <div>open Trace.xcodeproj</div>
                <div className="text-muted-foreground mt-3"># Option 2: Open with Swift Package Manager</div>
                <div>open Package.swift</div>
                <div className="text-muted-foreground mt-3"># Build and run on device (cmd + R)</div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Code of conduct</h3>
              <p className="text-muted-foreground leading-relaxed">
                Be respectful and professional. Constructive feedback is encouraged.
                Focus on technical merit and user value. No tolerance for harassment or discrimination.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button asChild className="w-full sm:w-auto">
              <Link href="https://github.com/trace-network-debugger/trace" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View repository
              </Link>
            </Button>
            <Button variant="outline" asChild className="w-full sm:w-auto">
              <Link href="https://github.com/trace-network-debugger/trace/issues" target="_blank" rel="noopener noreferrer">
                View issues
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Separator />

      {/* Build from Source */}
      <section className="container py-12 sm:py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-4 sm:mb-6">Build from source</h2>
          
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
            Building from source ensures you know exactly what code is running on your device.
            No pre-built binaries required.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-3">Requirements</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-foreground" />
                  <p className="text-muted-foreground">Xcode 16+ with Swift 6.0 support</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-foreground" />
                  <p className="text-muted-foreground">iOS 18+ (Control widget requires iOS 18+)</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-foreground" />
                  <p className="text-muted-foreground">Apple Developer Team with Network Extension entitlements</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-foreground" />
                  <p className="text-muted-foreground">Physical device (packet tunnel unavailable in Simulator)</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Build steps</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <div className="text-muted-foreground font-medium">1.</div>
                  <p className="text-muted-foreground">Clone repository and open Trace.xcodeproj (or Package.swift with SwiftPM)</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="text-muted-foreground font-medium">2.</div>
                  <p className="text-muted-foreground">Update signing for all targets (App, TraceVPN, TraceWidget) to your team</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="text-muted-foreground font-medium">3.</div>
                  <p className="text-muted-foreground">Set APP_GROUP_IDENTIFIER build setting to your App Group ID</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="text-muted-foreground font-medium">4.</div>
                  <p className="text-muted-foreground">Update bundle identifiers for App, TraceVPN, and TraceWidgetExtension</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="text-muted-foreground font-medium">5.</div>
                  <p className="text-muted-foreground">Update providerBundleIdentifier in VPNManager.swift if extension bundle ID changed</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="text-muted-foreground font-medium">6.</div>
                  <p className="text-muted-foreground">Build and run on device (root CA generated automatically on first launch)</p>
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
      </section>

      <Separator />

      {/* Support */}
      <section className="container py-12 sm:py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-3 sm:mb-4">
            Questions or feedback
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
            Open an issue on GitHub for bug reports, feature requests, or general questions.
            The community and maintainers monitor issues and discussions.
          </p>
          <Button asChild className="w-full sm:w-auto">
            <Link href="https://github.com/trace-network-debugger/trace/issues/new" target="_blank" rel="noopener noreferrer">
              Open an issue
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
