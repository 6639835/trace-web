import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PageSection } from '@/components/shared/page-section';
import { MetricsStrip } from '@/components/sections/metrics-strip';
import { EditorialBanner } from '@/components/sections/editorial-banner';
import { BentoGrid, BentoItem } from '@/components/sections/bento-grid';
import {
  Github,
  Network,
  Fingerprint,
  Radio,
  Repeat,
  Activity,
  Layers,
  Smartphone,
  ArrowRight,
} from 'lucide-react';
import { HeroPhone } from '@/components/marketing/hero-phone';
import { absoluteUrl } from '@/lib/config/site';

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Trace',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'iOS',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description:
      'An iOS network debugger for capturing and inspecting HTTP(S), WebSocket, and SSE traffic at L3 IP layer.',
    softwareVersion: '1.0',
    applicationSubCategory: 'Network Debugging Tool',
    featureList: [
      'Device-wide traffic capture',
      'TLS MITM inspection',
      'WebSocket & SSE support',
      'Traffic modification',
      'PCAP export',
      'Deep packet inspection',
    ],
    downloadUrl: 'https://testflight.apple.com/join/fmYFd8ud',
    screenshot: absoluteUrl('/trace-web.png'),
    author: {
      '@type': 'Person',
      name: 'Justin',
    },
    codeRepository: 'https://github.com/Trace-iOS/Trace',
    license: 'https://github.com/Trace-iOS/Trace/blob/main/LICENSE',
    keywords:
      'iOS, network debugger, traffic inspector, HTTPS proxy, packet capture, TLS MITM, WebSocket, developer tools',
  };

  return (
    <div className="flex w-full flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ── Hero: split layout (left copy, right phone) ── */}
      <section className="relative flex min-h-[calc(100vh-4rem)] items-start overflow-hidden py-section">
        <div className="container">
          <div className="mx-auto grid w-full max-w-wide items-start gap-8 pt-8 sm:gap-10 sm:pt-12 lg:grid-cols-2 lg:gap-12 lg:pt-16">
            {/* Left Column */}
            <div className="flex max-w-full flex-col space-y-4 sm:space-y-6 lg:space-y-8">
              <div className="max-w-full">
                <h1 className="mb-3 text-2xl leading-tight font-bold tracking-tight break-words hyphens-auto xs:text-3xl sm:mb-4 sm:text-4xl md:text-5xl lg:mb-6 lg:text-6xl">
                  Redefining iOS network debugging.
                </h1>
                <p className="mb-3 text-sm leading-relaxed break-words text-muted-foreground sm:mb-4 sm:text-base lg:text-lg">
                  An iOS network debugger for capturing and inspecting HTTP(S), WebSocket, and SSE
                  traffic at L3 IP layer.
                </p>
                <p className="max-w-full text-xs break-words text-muted-foreground sm:text-sm">
                  Perfect for iOS developers debugging API calls, security researchers analyzing app
                  behavior, or anyone who needs deep insight into mobile network traffic.
                </p>
              </div>
              <div className="flex max-w-full flex-col gap-3 sm:flex-row sm:gap-4">
                <Button size="lg" asChild className="w-full sm:w-auto">
                  <Link
                    href="https://testflight.apple.com/join/fmYFd8ud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Smartphone className="mr-2 h-5 w-5" />
                    Get on TestFlight
                  </Link>
                </Button>
                <Button size="lg" variant="secondary" asChild className="w-full sm:w-auto">
                  <Link
                    href="https://github.com/Trace-iOS/Trace"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-5 w-5" />
                    View on GitHub
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Column */}
            <HeroPhone />
          </div>
        </div>
      </section>

      {/* ── Metrics strip ── */}
      <MetricsStrip
        metrics={[
          { value: 'MIT', label: 'License' },
          { value: 'iOS 18+', label: 'Minimum OS' },
          { value: 'L3', label: 'Capture layer' },
          { value: 'On-device', label: 'Privacy model' },
        ]}
      />

      {/* ── Capabilities: bento grid ── */}
      <PageSection spacing="lg">
        <div className="mx-auto max-w-content">
          <div className="mb-10 sm:mb-12 md:mb-14">
            <h2 className="mb-3 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              Built for production debugging
            </h2>
            <p className="max-w-readable text-sm text-muted-foreground sm:text-base">
              Comprehensive network visibility with the tools you need to diagnose and resolve
              issues fast.
            </p>
          </div>

          <BentoGrid>
            {/* Large card spans 2 cols */}
            <BentoItem size="md" className="flex flex-col gap-3">
              <Network className="h-8 w-8 text-primary" />
              <h3 className="text-lg font-semibold">Device-wide capture</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Network Extension-based packet tunnel configures a system proxy to capture HTTP(S)
                for apps that honor it. No per-app setup, no desktop companion required.
              </p>
            </BentoItem>

            {/* Small card */}
            <BentoItem size="sm">
              <Fingerprint className="mb-3 h-7 w-7 text-primary" />
              <h3 className="mb-2 font-semibold">TLS inspection</h3>
              <p className="text-sm text-muted-foreground">
                On-device MITM with dynamic certificate generation. Full request/response body
                visibility for encrypted traffic.
              </p>
            </BentoItem>

            {/* Small card */}
            <BentoItem size="sm">
              <Radio className="mb-3 h-7 w-7 text-primary" />
              <h3 className="mb-2 font-semibold">WebSocket & SSE</h3>
              <p className="text-sm text-muted-foreground">
                Real-time frame-by-frame capture of WebSocket and Server-Sent Events with full
                timing context.
              </p>
            </BentoItem>

            {/* Small card */}
            <BentoItem size="sm">
              <Repeat className="mb-3 h-7 w-7 text-primary" />
              <h3 className="mb-2 font-semibold">Traffic modification</h3>
              <p className="text-sm text-muted-foreground">
                Rewrite rules, breakpoints, JS scripts, host overrides, request maps, and network
                throttling profiles.
              </p>
            </BentoItem>

            {/* Large card spans 2 cols */}
            <BentoItem size="md" className="flex flex-col gap-3">
              <div className="flex gap-3">
                <Activity className="h-7 w-7 text-primary" />
                <Layers className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Deep inspection + PCAP export</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Headers, JSON/XML/image body viewers, timing breakdowns, TLS certificate chains,
                HTTP/2 HPACK table, request comparison, and saved filter presets—plus optional PCAP
                export for offline analysis.
              </p>
              <div className="mt-auto">
                <Link
                  href="/features"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  See all features <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </BentoItem>
          </BentoGrid>
        </div>
      </PageSection>

      {/* ── Engineering depth: 2-col list + tech badges ── */}
      <PageSection spacing="lg" className="border-y bg-muted/30">
        <div className="mx-auto max-w-content">
          <div className="mb-10 sm:mb-12">
            <h2 className="mb-3 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              Engineering depth
            </h2>
            <p className="max-w-readable text-sm text-muted-foreground sm:text-base">
              Built on iOS system frameworks for reliable, low-level network access.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 sm:gap-7 md:gap-10">
            <div className="space-y-5">
              {[
                {
                  label: 'Network Extension',
                  body: 'Implements NEPacketTunnelProvider to configure system proxy settings. Runs in a separate process with elevated privileges.',
                },
                {
                  label: 'TLS MITM',
                  body: 'On-device certificate authority and dynamic certificate generation. Intercepts TLS handshakes locally with no external dependencies.',
                },
                {
                  label: 'App Groups',
                  body: 'Shared container for IPC between main app and extension. Enables real-time traffic streaming and coordinated state management.',
                },
              ].map(({ label, body }) => (
                <div key={label} className="flex gap-4">
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <div>
                    <h3 className="mb-1 text-sm font-semibold">{label}</h3>
                    <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-5">
              {[
                {
                  label: 'Packet Tunnel',
                  body: 'Proxy-only tunnel injects NEProxySettings without routing raw packets. HTTP/HTTPS flows through the local proxy for inspection.',
                },
                {
                  label: 'Widgets & Live Activities',
                  body: 'WidgetKit integration for at-a-glance network statistics. Live Activities show real-time request counts and transfer rates.',
                },
                {
                  label: 'Background Processing',
                  body: 'Efficient proxy processing with minimal battery impact. Optimized memory usage for extended capture sessions.',
                },
              ].map(({ label, body }) => (
                <div key={label} className="flex gap-4">
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <div>
                    <h3 className="mb-1 text-sm font-semibold">{label}</h3>
                    <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {[
              'Swift 6.0',
              'SwiftUI',
              'Network Extension',
              'NEPacketTunnelProvider',
              'WidgetKit',
              'Live Activities',
              'App Groups',
              'Swift Package Manager',
            ].map((tag) => (
              <Badge key={tag} variant="secondary" className="whitespace-nowrap">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </PageSection>

      {/* ── Open source CTA: editorial banner ── */}
      <EditorialBanner variant="muted">
        <Github className="mx-auto mb-5 h-10 w-10 text-muted-foreground sm:h-12 sm:w-12" />
        <h2 className="mb-3 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
          Open source and transparent
        </h2>
        <p className="mb-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Free under the MIT license. No pricing tiers, no feature gates, no telemetry. Inspect,
          modify, and contribute to every line of code.
        </p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
          <Button size="lg" asChild className="w-full sm:w-auto">
            <Link
              href="https://github.com/Trace-iOS/Trace"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5" />
              View repository
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
            <Link href="/open-source">Read more about the project</Link>
          </Button>
        </div>
      </EditorialBanner>
    </div>
  );
}
