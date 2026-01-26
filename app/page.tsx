import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Github, Network, Fingerprint, Radio, Repeat, Activity, Layers, Smartphone } from 'lucide-react';
import { HeroPhone } from '@/components/marketing/hero-phone';

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      {/* Hero Section with Phone Mockup */}
      <section className="container flex min-h-[calc(100vh-4rem)] items-start py-section">
        <div className="mx-auto grid w-full max-w-wide items-start gap-8 pt-8 sm:gap-10 sm:pt-12 lg:grid-cols-2 lg:gap-12 lg:pt-16">
          {/* Left Column - Hero Text */}
          <div className="flex max-w-full flex-col space-y-4 sm:space-y-6 lg:space-y-8">
            <div className="max-w-full">
              <h1 className="mb-3 hyphens-auto break-words text-2xl font-bold leading-tight tracking-tight xs:text-3xl sm:mb-4 sm:text-4xl md:text-5xl lg:mb-6 lg:text-6xl">
                Redefining iOS network debugging.
              </h1>
              <p className="mb-3 break-words text-sm leading-relaxed text-muted-foreground sm:mb-4 sm:text-base lg:text-lg">
                Professional network debugging tool for iOS developers. Captures HTTP(S), WebSocket,
                and SSE traffic through a proxy-only packet tunnel with on-device TLS MITM. Built on
                Network Extension APIs for system-level visibility when apps honor the system proxy.
              </p>
              <p className="max-w-full break-words text-xs text-muted-foreground sm:text-sm">
                Real-time network inspection at the system level. See requests from apps that honor
                the system proxy settings.
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
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
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

          {/* Right Column - Phone Mockup with Screenshot */}
          <HeroPhone />
        </div>
      </section>

      <Separator />

      {/* Core Capabilities Section */}
      <section className="container py-section-lg">
        <div className="mx-auto max-w-content">
          <div className="mb-10 text-center sm:mb-12 md:mb-16">
            <h2 className="mb-3 text-2xl font-bold tracking-tight sm:mb-4 sm:text-3xl md:text-4xl">
              Built for production debugging
            </h2>
            <p className="mx-auto max-w-readable text-sm text-muted-foreground sm:text-base">
              Comprehensive network visibility with the tools you need to diagnose and resolve
              issues quickly.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Network className="mb-2 h-8 w-8 text-muted-foreground" />
                <CardTitle className="text-lg">Device-wide capture</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Network Extension-based packet tunnel configures a system proxy to capture HTTP(S)
                  for apps that honor it. No per-app setup required.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Fingerprint className="mb-2 h-8 w-8 text-muted-foreground" />
                <CardTitle className="text-lg">TLS inspection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  On-device TLS MITM enables full request and response body inspection for encrypted
                  traffic. Certificate pinning detection included.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Radio className="mb-2 h-8 w-8 text-muted-foreground" />
                <CardTitle className="text-lg">WebSocket & SSE</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Real-time protocol support for WebSocket connections and Server-Sent Events. View
                  frame-by-frame communication as it happens.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Repeat className="mb-2 h-8 w-8 text-muted-foreground" />
                <CardTitle className="text-lg">Traffic modification</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Comprehensive modification tools: rewrite rules, request maps, host overrides,
                  breakpoints, JavaScript scripts, and network condition profiles. Replay requests
                  with the built-in request builder or import cURL commands.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Activity className="mb-2 h-8 w-8 text-muted-foreground" />
                <CardTitle className="text-lg">PCAP export</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Optional PCAP export of captured HTTP frames for offline analysis, plus event
                  logging for diagnostics and troubleshooting.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Layers className="mb-2 h-8 w-8 text-muted-foreground" />
                <CardTitle className="text-lg">Deep inspection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Comprehensive analysis with headers, body viewers (JSON, XML, images, SVG,
                  multipart), timing breakdowns, TLS certificate chains, HTTP/2 stream info with
                  HPACK table, request comparison, and saved filter presets.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* Technical Credibility Section */}
      <section className="container py-section-lg">
        <div className="mx-auto max-w-content">
          <div className="mb-10 text-center sm:mb-12 md:mb-16">
            <h2 className="mb-3 text-2xl font-bold tracking-tight sm:mb-4 sm:text-3xl md:text-4xl">
              Engineering depth
            </h2>
            <p className="mx-auto max-w-readable text-sm text-muted-foreground sm:text-base">
              Built on iOS system frameworks for reliable, low-level network access.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 sm:gap-7 md:gap-8">
            <div className="space-y-4 sm:space-y-5">
              <div>
                <h3 className="mb-2 text-sm font-semibold sm:text-base">Network Extension</h3>
                <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  Implements NEPacketTunnelProvider to configure system proxy settings for capture.
                  Runs in a separate process with elevated privileges to manage the local MITM
                  proxy.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-sm font-semibold sm:text-base">TLS MITM</h3>
                <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  On-device certificate authority and dynamic certificate generation. Intercepts TLS
                  handshakes to enable encrypted traffic inspection.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-sm font-semibold sm:text-base">App Groups</h3>
                <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  Shared container for IPC between main app and extension. Enables real-time traffic
                  streaming and coordinated state management.
                </p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-5">
              <div>
                <h3 className="mb-2 text-sm font-semibold sm:text-base">Packet Tunnel</h3>
                <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  Proxy-only tunnel injects NEProxySettings without routing packets. HTTP/HTTPS
                  traffic flows through the local proxy for inspection and tooling.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-sm font-semibold sm:text-base">
                  Widgets & Live Activities
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  WidgetKit integration for at-a-glance network statistics. Live Activities show
                  real-time request counts and data transfer rates.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-sm font-semibold sm:text-base">Background Processing</h3>
                <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  Efficient proxy processing with minimal battery impact. Optimized memory usage for
                  long-running capture sessions.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-1.5 sm:mt-10 sm:gap-2 md:mt-12">
            <Badge variant="secondary" className="whitespace-nowrap">
              Swift 6.0
            </Badge>
            <Badge variant="secondary" className="whitespace-nowrap">
              SwiftUI
            </Badge>
            <Badge variant="secondary" className="whitespace-nowrap">
              Network Extension
            </Badge>
            <Badge variant="secondary" className="whitespace-nowrap">
              NEPacketTunnelProvider
            </Badge>
            <Badge variant="secondary" className="whitespace-nowrap">
              WidgetKit
            </Badge>
            <Badge variant="secondary" className="whitespace-nowrap">
              Live Activities
            </Badge>
            <Badge variant="secondary" className="whitespace-nowrap">
              App Groups
            </Badge>
            <Badge variant="secondary" className="whitespace-nowrap">
              Swift Package Manager
            </Badge>
          </div>
        </div>
      </section>

      <Separator />

      {/* Open Source Section */}
      <section className="container py-section-lg">
        <div className="mx-auto max-w-readable text-center">
          <Github className="mx-auto mb-4 h-10 w-10 text-muted-foreground sm:mb-6 sm:h-12 sm:w-12" />
          <h2 className="mb-3 text-2xl font-bold tracking-tight sm:mb-4 sm:text-3xl md:text-4xl">
            Open source and transparent
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-muted-foreground sm:mb-8 sm:text-base">
            Trace is free and open source under the MIT license. No pricing tiers, no feature gates,
            no telemetry. The entire codebase is available for inspection, modification, and
            contribution.
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
        </div>
      </section>
    </div>
  );
}
