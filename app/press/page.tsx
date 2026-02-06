import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { PageHeader } from '@/components/shared/page-header';
import { PageSection } from '@/components/shared/page-section';
import { Newspaper, Mail, Palette } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Press Kit',
  description:
    'Trace press kit. Brand assets, logos, screenshots, and media resources for writing about the iOS network debugger.',
  keywords: ['Trace press kit', 'brand assets', 'media kit', 'logos', 'screenshots'],
  openGraph: {
    title: 'Press Kit - Trace',
    description: 'Brand assets and media resources for Trace iOS network debugger.',
    url: '/press',
  },
  alternates: {
    canonical: '/press',
  },
};

export default function PressPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        icon={Newspaper}
        title="Press Kit"
        description="Brand assets, logos, and media resources for writing about Trace."
      />

      <Separator />

      {/* Quick Facts */}
      <PageSection>
        <div className="mx-auto max-w-content">
          <h2 className="mb-8 text-xl font-bold tracking-tight sm:mb-10 sm:text-2xl">
            Quick facts
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Name</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Trace iOS Network Debugger</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Category</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Developer Tools • Network Debugging • iOS Utilities
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">iOS 16.0+ • iPadOS 16.0+</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">License</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">MIT License • Open Source</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Launch Date</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">December 2024</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Free</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </PageSection>

      <Separator />

      {/* About Trace */}
      <PageSection>
        <div className="mx-auto max-w-readable">
          <h2 className="mb-6 text-2xl font-bold tracking-tight sm:mb-8 sm:text-3xl">
            About Trace
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-sm font-semibold">Short (1-2 sentences)</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Trace is a free, open-source iOS network debugger that captures and inspects
                HTTP(S), WebSocket, and SSE traffic entirely on-device. Built for developers who
                need precise network visibility without compromising privacy.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-sm font-semibold">Medium (1 paragraph)</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Trace brings professional-grade network debugging directly to iPhone and iPad. Using
                Network Extension APIs, it captures device-wide HTTP(S) traffic, provides TLS
                man-in-the-middle inspection with an on-device certificate authority, and offers
                first-class support for real-time protocols like WebSocket and Server-Sent Events.
                All processing happens locally—no data leaves your device. It&apos;s open source,
                privacy-first, and designed for developers who need powerful debugging tools on
                mobile.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-sm font-semibold">Long (2-3 paragraphs)</h3>
              <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                <p>
                  Trace is an open-source iOS network debugger that captures and inspects network
                  traffic entirely on your device. Unlike traditional desktop tools, Trace runs
                  natively on iPhone and iPad, providing system-level network visibility without
                  requiring a computer or manual proxy configuration.
                </p>
                <p>
                  Built with Network Extension APIs, Trace implements device-wide HTTP(S) capture,
                  TLS man-in-the-middle inspection using an on-device certificate authority, and
                  dedicated support for WebSocket and Server-Sent Events protocols. It offers
                  traffic modification tools including rewrite rules, request maps, host overrides,
                  and JavaScript scripting for advanced debugging scenarios.
                </p>
                <p>
                  Trace is MIT-licensed and prioritizes privacy—all traffic capture and analysis
                  happens on-device with zero telemetry or external dependencies. The project is
                  community-driven, with active development guided by user feedback and open source
                  contributions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      <Separator />

      {/* Key Features */}
      <PageSection>
        <div className="mx-auto max-w-content">
          <h2 className="mb-6 text-2xl font-bold tracking-tight sm:mb-8 sm:text-3xl">
            Key features
          </h2>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Device-wide capture</Badge>
            <Badge variant="secondary">TLS MITM inspection</Badge>
            <Badge variant="secondary">WebSocket support</Badge>
            <Badge variant="secondary">Traffic modification</Badge>
            <Badge variant="secondary">Request builder</Badge>
            <Badge variant="secondary">HAR export</Badge>
            <Badge variant="secondary">PCAP export</Badge>
            <Badge variant="secondary">On-device processing</Badge>
            <Badge variant="secondary">Privacy-first</Badge>
            <Badge variant="secondary">Open source</Badge>
          </div>
        </div>
      </PageSection>

      <Separator />

      {/* Brand Assets */}
      <PageSection>
        <div className="mx-auto max-w-content">
          <Palette className="mx-auto mb-4 h-10 w-10 text-muted-foreground sm:mb-6" />
          <h2 className="mb-6 text-center text-2xl font-bold tracking-tight sm:mb-8 sm:text-3xl">
            Brand assets
          </h2>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Logos</CardTitle>
                <CardDescription>Trace logo and logomark in various formats</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Logo files are available in the{' '}
                  <a
                    href="https://github.com/Trace-iOS/Trace/tree/main/Assets"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    GitHub repository
                  </a>
                  . Includes SVG, PNG, and other formats for both light and dark backgrounds.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Colors</CardTitle>
                <CardDescription>Primary brand colors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded border bg-[#0073FF]" />
                    <div>
                      <div className="font-medium">Primary Blue</div>
                      <div className="text-xs text-muted-foreground">#0073FF</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded border bg-[#000000]" />
                    <div>
                      <div className="font-medium">Black</div>
                      <div className="text-xs text-muted-foreground">#000000</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded border border-muted bg-[#FFFFFF]" />
                    <div>
                      <div className="font-medium">White</div>
                      <div className="text-xs text-muted-foreground">#FFFFFF</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Screenshots</CardTitle>
                <CardDescription>App screenshots and UI examples</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  High-resolution screenshots available on request. Contact for specific marketing
                  materials or press inquiries.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </PageSection>

      <Separator />

      {/* Usage Guidelines */}
      <PageSection>
        <div className="mx-auto max-w-readable">
          <h2 className="mb-6 text-2xl font-bold tracking-tight sm:mb-8 sm:text-3xl">
            Usage guidelines
          </h2>
          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              <strong className="text-foreground">Do:</strong> Use the Trace name and logo when
              writing about the project, sharing tutorials, or linking to the website.
            </p>
            <p>
              <strong className="text-foreground">Do:</strong> Modify logo colors to fit your design
              as long as the mark remains recognizable.
            </p>
            <p>
              <strong className="text-foreground">Don&apos;t:</strong> Use the Trace name or logo in
              a way that implies official endorsement without permission.
            </p>
            <p>
              <strong className="text-foreground">Don&apos;t:</strong> Modify the logo&apos;s
              proportions or add effects that distort the design.
            </p>
          </div>
        </div>
      </PageSection>

      <Separator />

      {/* Media Contact */}
      <PageSection>
        <div className="mx-auto max-w-readable text-center">
          <Mail className="mx-auto mb-4 h-10 w-10 text-muted-foreground sm:mb-6" />
          <h2 className="mb-3 text-2xl font-bold tracking-tight sm:mb-4 sm:text-3xl">
            Media contact
          </h2>
          <p className="mb-6 text-sm text-muted-foreground sm:text-base">
            For press inquiries, interviews, or additional materials, contact us via email or
            GitHub.
          </p>
          <div className="flex flex-col items-center gap-2">
            <a
              href="mailto:epa6643@gmail.com"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              epa6643@gmail.com
            </a>
            <a
              href="https://github.com/Trace-iOS/Trace"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              GitHub Repository
            </a>
          </div>
        </div>
      </PageSection>
    </div>
  );
}
