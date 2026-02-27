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
import { Separator } from '@/components/ui/separator';
import { PageSection } from '@/components/shared/page-section';
import { BulletList, BulletItem } from '@/components/shared/bullet-list';
import { MetricsStrip } from '@/components/sections/metrics-strip';
import { Check, X, Smartphone } from 'lucide-react';

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

function CheckIcon() {
  return <Check className="mx-auto h-5 w-5 text-primary" />;
}
function CrossIcon() {
  return <X className="mx-auto h-5 w-5 text-muted-foreground" />;
}

export default function ComparisonPage() {
  return (
    <div className="flex flex-col">
      {/* ── Minimal left-aligned hero ── */}
      <section className="container py-section">
        <div className="mx-auto max-w-content">
          <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            How does Trace compare?
          </h1>
          <p className="max-w-readable text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
            An honest look at Trace alongside Charles Proxy and Proxyman—features, trade-offs, and
            when each tool makes sense.
          </p>
        </div>
      </section>

      {/* ── At-a-glance metrics ── */}
      <MetricsStrip
        metrics={[
          { value: 'Free', label: 'Trace price' },
          { value: 'MIT', label: 'License' },
          { value: '$50', label: 'Charles price' },
          { value: 'Free/$99', label: 'Proxyman price' },
        ]}
      />

      {/* ── Comparison table ── */}
      <PageSection spacing="lg">
        <div className="mx-auto max-w-content">
          <h2 className="mb-8 text-xl font-bold tracking-tight sm:mb-10 sm:text-2xl md:text-3xl">
            Feature comparison
          </h2>
          <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
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
                    <CheckIcon />
                  </TableCell>
                  <TableCell className="text-center">
                    <CrossIcon />
                  </TableCell>
                  <TableCell className="text-center">
                    <CheckIcon />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Requires desktop app</TableCell>
                  <TableCell className="text-center">
                    <CrossIcon />
                  </TableCell>
                  <TableCell className="text-center">
                    <CheckIcon />
                  </TableCell>
                  <TableCell className="text-center text-sm text-muted-foreground">
                    Optional
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">TLS MITM</TableCell>
                  <TableCell className="text-center">
                    <CheckIcon />
                  </TableCell>
                  <TableCell className="text-center">
                    <CheckIcon />
                  </TableCell>
                  <TableCell className="text-center">
                    <CheckIcon />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">WebSocket support</TableCell>
                  <TableCell className="text-center">
                    <CheckIcon />
                  </TableCell>
                  <TableCell className="text-center">
                    <CheckIcon />
                  </TableCell>
                  <TableCell className="text-center">
                    <CheckIcon />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Request modification</TableCell>
                  <TableCell className="text-center">
                    <CheckIcon />
                  </TableCell>
                  <TableCell className="text-center">
                    <CheckIcon />
                  </TableCell>
                  <TableCell className="text-center">
                    <CheckIcon />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">HAR export</TableCell>
                  <TableCell className="text-center">
                    <CheckIcon />
                  </TableCell>
                  <TableCell className="text-center">
                    <CheckIcon />
                  </TableCell>
                  <TableCell className="text-center">
                    <CheckIcon />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">PCAP export</TableCell>
                  <TableCell className="text-center">
                    <CheckIcon />
                  </TableCell>
                  <TableCell className="text-center">
                    <CheckIcon />
                  </TableCell>
                  <TableCell className="text-center">
                    <CrossIcon />
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
                    <CheckIcon />
                  </TableCell>
                  <TableCell className="text-center">
                    <CrossIcon />
                  </TableCell>
                  <TableCell className="text-center">
                    <CrossIcon />
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
                    <CrossIcon />
                  </TableCell>
                  <TableCell className="text-center">
                    <CheckIcon />
                  </TableCell>
                  <TableCell className="text-center">
                    <CheckIcon />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Works with VPNs</TableCell>
                  <TableCell className="text-center">
                    <CheckIcon />
                  </TableCell>
                  <TableCell className="text-center">
                    <CheckIcon />
                  </TableCell>
                  <TableCell className="text-center text-sm text-muted-foreground">
                    Varies
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          </div>
          <p className="mt-4 text-xs text-muted-foreground sm:text-sm">
            * Feature details and pricing accurate as of January 2026. Check official websites for
            latest information.
          </p>
        </div>
      </PageSection>

      <Separator />

      {/* ── Key differences: alternating layout ── */}
      <PageSection>
        <div className="mx-auto max-w-content">
          <h2 className="mb-10 text-xl font-bold tracking-tight sm:mb-12 sm:text-2xl md:text-3xl">
            Key differences
          </h2>

          <div className="space-y-10 sm:space-y-12 md:space-y-16">
            {[
              {
                title: 'On-device vs desktop tools',
                trace:
                  "Runs entirely on your iOS device. No desktop app required. Perfect for debugging on-the-go or when you don't have access to a computer.",
                others:
                  'Charles and Proxyman are desktop-first with powerful features like advanced filtering, batch operations, and integration with development workflows. Proxyman also offers an iOS app.',
                when: 'Use Trace for mobile-only debugging. Use Charles/Proxyman when you need desktop features or cross-platform support.',
              },
              {
                title: 'Open source vs proprietary',
                trace:
                  'Fully open source (MIT license). Audit the code, verify security claims, contribute features, or fork for custom needs.',
                others:
                  'Charles and Proxyman are proprietary software with commercial support, regular updates, and mature feature sets built over many years.',
                when: 'Use Trace if transparency and customization matter. Use Charles/Proxyman for established enterprise support.',
              },
              {
                title: 'Privacy architecture',
                trace:
                  'All processing happens on-device. Zero telemetry, no cloud services, no analytics. Data never leaves your device.',
                others:
                  'Charles uses local-only processing. Proxyman offers both local and optional cloud features for team collaboration.',
                when: 'All three keep data local by default. Trace makes privacy violations architecturally impossible.',
              },
              {
                title: 'Feature maturity',
                trace:
                  'Newer tool (launched 2026) with core features stable but still building advanced capabilities. Active development and community contributions.',
                others:
                  'Charles (2002) is an industry standard with extensive features and plugins. Proxyman (2018) offers a modern UI and active development with a good balance of maturity.',
                when: 'Use Trace for a nimble, open-source-first workflow. Use Charles/Proxyman for enterprise-grade maturity.',
              },
            ].map(({ title, trace, others, when }, i) => (
              <div
                key={title}
                className={`grid gap-6 md:grid-cols-2 md:gap-10 ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}
              >
                <div>
                  <h3 className="mb-4 text-lg font-semibold">{title}</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="mb-1 text-sm font-medium">Trace</p>
                      <p className="text-sm leading-relaxed text-muted-foreground">{trace}</p>
                    </div>
                    <div>
                      <p className="mb-1 text-sm font-medium">Charles / Proxyman</p>
                      <p className="text-sm leading-relaxed text-muted-foreground">{others}</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border bg-muted/30 p-5 md:flex md:flex-col md:justify-center">
                  <p className="mb-1 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                    When to choose
                  </p>
                  <p className="text-sm leading-relaxed">{when}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      <Separator />

      {/* ── When to use each: 3-col cards ── */}
      <PageSection>
        <div className="mx-auto max-w-content">
          <h2 className="mb-8 text-xl font-bold tracking-tight sm:mb-10 sm:text-2xl md:text-3xl">
            When to use each tool
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6 lg:grid-cols-3">
            <div className="rounded-xl border p-5">
              <h3 className="mb-3 font-semibold">Choose Trace when</h3>
              <BulletList>
                <BulletItem>Mobile-only debugging without a desktop</BulletItem>
                <BulletItem>Privacy is a critical requirement</BulletItem>
                <BulletItem>You want to audit or customize the tool</BulletItem>
                <BulletItem>Budget is constrained (Trace is free)</BulletItem>
              </BulletList>
            </div>

            <div className="rounded-xl border p-5">
              <h3 className="mb-3 font-semibold">Choose Charles when</h3>
              <BulletList>
                <BulletItem>Cross-platform support (Windows/Linux)</BulletItem>
                <BulletItem>Mature enterprise features required</BulletItem>
                <BulletItem>Your team already uses Charles</BulletItem>
              </BulletList>
            </div>

            <div className="rounded-xl border p-5">
              <h3 className="mb-3 font-semibold">Choose Proxyman when</h3>
              <BulletList>
                <BulletItem>Modern, polished macOS app preferred</BulletItem>
                <BulletItem>Need both desktop and mobile options</BulletItem>
                <BulletItem>Team collaboration features matter</BulletItem>
              </BulletList>
            </div>
          </div>

          {/* Inline contextual CTA */}
          <div className="mt-10 flex flex-col items-start gap-4 rounded-xl border bg-muted/30 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold">Ready to try Trace?</p>
              <p className="text-sm text-muted-foreground">
                Free, open source, and on your device in minutes.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button asChild>
                <a
                  href="https://testflight.apple.com/join/fmYFd8ud"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Smartphone className="mr-2 h-4 w-4" />
                  Try on TestFlight
                </a>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/features">View all features</Link>
              </Button>
            </div>
          </div>
        </div>
      </PageSection>
    </div>
  );
}
