import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { PageHeader } from '@/components/shared/page-header';
import { BulletList, BulletItem } from '@/components/shared/bullet-list';
import { Check, X, Scale } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Comparison',
  description:
    'Compare Trace with Charles Proxy and Proxyman. Feature-by-feature comparison of iOS network debugging tools: platform support, TLS MITM, pricing, and capabilities.',
  keywords: [
    'Trace vs Charles',
    'Trace vs Proxyman',
    'iOS network debugger comparison',
    'network debugging tools',
  ],
  openGraph: {
    title: 'Comparison - Trace iOS Network Debugger',
    description:
      'Compare Trace with Charles and Proxyman. Feature comparison for iOS network debugging.',
    url: '/comparison',
  },
  alternates: {
    canonical: '/comparison',
  },
};

export default function ComparisonPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        icon={Scale}
        title="Comparison"
        description="How Trace compares to other network debugging tools. An honest look at features, trade-offs, and when each tool makes sense."
      />

      <Separator />

      {/* Comparison Table */}
      <section className="container py-section">
        <div className="mx-auto max-w-content">
          <h2 className="mb-8 text-xl font-bold tracking-tight sm:mb-10 sm:text-2xl">
            Feature comparison
          </h2>
          <div className="overflow-hidden rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px] sm:w-[250px]">Feature</TableHead>
                  <TableHead className="text-center">Trace</TableHead>
                  <TableHead className="text-center">Charles</TableHead>
                  <TableHead className="text-center">Proxyman</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Platform</TableCell>
                  <TableCell className="text-center">iOS/iPadOS</TableCell>
                  <TableCell className="text-center">macOS/Windows/Linux</TableCell>
                  <TableCell className="text-center">macOS/iOS</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">On-device capture</TableCell>
                  <TableCell className="text-center">
                    <Check className="mx-auto h-5 w-5 text-primary" />
                  </TableCell>
                  <TableCell className="text-center">
                    <X className="mx-auto h-5 w-5 text-muted-foreground" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="mx-auto h-5 w-5 text-primary" />
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">Requires desktop app</TableCell>
                  <TableCell className="text-center">
                    <X className="mx-auto h-5 w-5 text-muted-foreground" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="mx-auto h-5 w-5 text-primary" />
                  </TableCell>
                  <TableCell className="text-center text-sm text-muted-foreground">
                    Optional
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">TLS MITM</TableCell>
                  <TableCell className="text-center">
                    <Check className="mx-auto h-5 w-5 text-primary" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="mx-auto h-5 w-5 text-primary" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="mx-auto h-5 w-5 text-primary" />
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">WebSocket support</TableCell>
                  <TableCell className="text-center">
                    <Check className="mx-auto h-5 w-5 text-primary" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="mx-auto h-5 w-5 text-primary" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="mx-auto h-5 w-5 text-primary" />
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">Request modification</TableCell>
                  <TableCell className="text-center">
                    <Check className="mx-auto h-5 w-5 text-primary" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="mx-auto h-5 w-5 text-primary" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="mx-auto h-5 w-5 text-primary" />
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">HAR export</TableCell>
                  <TableCell className="text-center">
                    <Check className="mx-auto h-5 w-5 text-primary" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="mx-auto h-5 w-5 text-primary" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="mx-auto h-5 w-5 text-primary" />
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">PCAP export</TableCell>
                  <TableCell className="text-center">
                    <Check className="mx-auto h-5 w-5 text-primary" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="mx-auto h-5 w-5 text-primary" />
                  </TableCell>
                  <TableCell className="text-center">
                    <X className="mx-auto h-5 w-5 text-muted-foreground" />
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">Scripting</TableCell>
                  <TableCell className="text-center text-sm text-muted-foreground">
                    JavaScript
                  </TableCell>
                  <TableCell className="text-center text-sm text-muted-foreground">Java</TableCell>
                  <TableCell className="text-center text-sm text-muted-foreground">
                    Python/JS
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">Privacy</TableCell>
                  <TableCell className="text-center text-sm text-muted-foreground">
                    On-device
                  </TableCell>
                  <TableCell className="text-center text-sm text-muted-foreground">Local</TableCell>
                  <TableCell className="text-center text-sm text-muted-foreground">
                    Local/Cloud
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">Open source</TableCell>
                  <TableCell className="text-center">
                    <Check className="mx-auto h-5 w-5 text-primary" />
                  </TableCell>
                  <TableCell className="text-center">
                    <X className="mx-auto h-5 w-5 text-muted-foreground" />
                  </TableCell>
                  <TableCell className="text-center">
                    <X className="mx-auto h-5 w-5 text-muted-foreground" />
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">Pricing</TableCell>
                  <TableCell className="text-center text-sm text-muted-foreground">Free</TableCell>
                  <TableCell className="text-center text-sm text-muted-foreground">$50</TableCell>
                  <TableCell className="text-center text-sm text-muted-foreground">
                    Free/$99
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">macOS features</TableCell>
                  <TableCell className="text-center">
                    <X className="mx-auto h-5 w-5 text-muted-foreground" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="mx-auto h-5 w-5 text-primary" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="mx-auto h-5 w-5 text-primary" />
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">Works with VPNs</TableCell>
                  <TableCell className="text-center">
                    <Check className="mx-auto h-5 w-5 text-primary" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="mx-auto h-5 w-5 text-primary" />
                  </TableCell>
                  <TableCell className="text-center text-sm text-muted-foreground">
                    Varies
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <p className="mt-4 text-xs text-muted-foreground sm:text-sm">
            * Feature details and pricing accurate as of January 2026. Check official websites for
            latest information.
          </p>
        </div>
      </section>

      <Separator />

      {/* Feature Deep-Dives */}
      <section className="container py-section">
        <div className="mx-auto max-w-content">
          <h2 className="mb-8 text-xl font-bold tracking-tight sm:mb-10 sm:text-2xl">
            Key differences
          </h2>
          <div className="grid gap-6 sm:gap-7 md:gap-8">
            <Card>
              <CardHeader>
                <CardTitle>On-device vs desktop tools</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <CardDescription className="leading-relaxed">
                  <strong className="text-foreground">Trace:</strong> Runs entirely on your iOS
                  device. No desktop app required. Perfect for debugging on-the-go or when you
                  don&apos;t have access to a computer.
                </CardDescription>
                <CardDescription className="leading-relaxed">
                  <strong className="text-foreground">Charles/Proxyman:</strong> Desktop-first with
                  powerful features like advanced filtering, batch operations, and integration with
                  development workflows. Proxyman also offers an iOS app.
                </CardDescription>
                <CardDescription className="leading-relaxed">
                  <strong className="text-foreground">When to choose:</strong> Use Trace for
                  mobile-only debugging. Use Charles/Proxyman when you need desktop features or
                  cross-platform support.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Open source vs proprietary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <CardDescription className="leading-relaxed">
                  <strong className="text-foreground">Trace:</strong> Fully open source (MIT
                  license). Audit the code, verify security claims, contribute features, or fork for
                  custom needs.
                </CardDescription>
                <CardDescription className="leading-relaxed">
                  <strong className="text-foreground">Charles/Proxyman:</strong> Proprietary
                  software with commercial support, regular updates, and mature feature sets built
                  over many years.
                </CardDescription>
                <CardDescription className="leading-relaxed">
                  <strong className="text-foreground">When to choose:</strong> Use Trace if
                  transparency and customization matter. Use Charles/Proxyman for established
                  enterprise support.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Privacy architecture</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <CardDescription className="leading-relaxed">
                  <strong className="text-foreground">Trace:</strong> All processing happens
                  on-device. Zero telemetry, no cloud services, no analytics. Data never leaves your
                  device.
                </CardDescription>
                <CardDescription className="leading-relaxed">
                  <strong className="text-foreground">Charles:</strong> Local-only processing. No
                  cloud features means complete data control.
                </CardDescription>
                <CardDescription className="leading-relaxed">
                  <strong className="text-foreground">Proxyman:</strong> Offers both local and
                  optional cloud features for team collaboration. Cloud features are opt-in.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Feature maturity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <CardDescription className="leading-relaxed">
                  <strong className="text-foreground">Trace:</strong> Newer tool (launched 2024)
                  with core features stable but still building advanced capabilities. Active
                  development and community contributions.
                </CardDescription>
                <CardDescription className="leading-relaxed">
                  <strong className="text-foreground">Charles:</strong> Mature tool (launched 2002)
                  with extensive features, plugins, and documentation. Industry standard for many
                  teams.
                </CardDescription>
                <CardDescription className="leading-relaxed">
                  <strong className="text-foreground">Proxyman:</strong> Modern tool (launched 2018)
                  with polished UI and active development. Good balance of maturity and modern
                  design.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* When to use each */}
      <section className="container py-section">
        <div className="mx-auto max-w-readable">
          <h2 className="mb-6 text-2xl font-bold tracking-tight sm:mb-8 sm:text-3xl">
            When to use each tool
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="mb-3 text-lg font-semibold">Choose Trace when:</h3>
              <BulletList>
                <BulletItem>You need mobile-only debugging without a desktop</BulletItem>
                <BulletItem>Privacy is a critical requirement</BulletItem>
                <BulletItem>You want to audit or customize the tool</BulletItem>
                <BulletItem>Budget is constrained (Trace is free)</BulletItem>
              </BulletList>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-semibold">Choose Charles when:</h3>
              <BulletList>
                <BulletItem>You need cross-platform support (Windows/Linux)</BulletItem>
                <BulletItem>You require mature enterprise features</BulletItem>
                <BulletItem>Your team already uses Charles</BulletItem>
              </BulletList>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-semibold">Choose Proxyman when:</h3>
              <BulletList>
                <BulletItem>You want a modern, polished macOS app</BulletItem>
                <BulletItem>You need both desktop and mobile options</BulletItem>
                <BulletItem>Team collaboration features are valuable</BulletItem>
              </BulletList>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Fair closing */}
      <section className="container py-section">
        <div className="mx-auto max-w-readable text-center">
          <h2 className="mb-3 text-2xl font-bold tracking-tight sm:mb-4 sm:text-3xl">
            The right tool for the job
          </h2>
          <p className="mb-6 text-sm text-muted-foreground sm:mb-8 sm:text-base">
            All three tools are excellent choices for network debugging. Your best option depends on
            your workflow, platform requirements, and priorities. Many developers use multiple tools
            for different scenarios.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <Button size="lg" asChild className="w-full sm:w-auto">
              <a
                href="https://testflight.apple.com/join/fmYFd8ud"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try Trace
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
              <Link href="/features">View all features</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
