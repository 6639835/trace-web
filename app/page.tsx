import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Github, Network, Fingerprint, Radio, Repeat, Activity, Layers } from "lucide-react";
import { HeroPhone } from "@/components/marketing/hero-phone";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section with Phone Mockup */}
      <section className="container min-h-[calc(100vh-4rem)] flex items-start py-section">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start w-full max-w-wide mx-auto pt-8 sm:pt-12 lg:pt-16">
          {/* Left Column - Hero Text */}
          <div className="flex flex-col space-y-4 sm:space-y-6 lg:space-y-8 max-w-full">
            <div className="max-w-full">
              <h1 className="text-2xl xs:text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl mb-3 sm:mb-4 lg:mb-6 leading-tight break-words hyphens-auto">
                Redefining iOS network debugging.
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed break-words mb-3 sm:mb-4">
                Professional network debugging tool for iOS developers. 
                Captures HTTP(S), WebSocket, and SSE traffic through a proxy-only packet tunnel with on-device TLS MITM.
                Built on Network Extension APIs for system-level visibility when apps honor the system proxy.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground break-words max-w-full">
                Real-time network inspection at the system level.
                See requests from apps that honor the system proxy settings.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-full">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <Link href="https://github.com/6639835/Trace" target="_blank" rel="noopener noreferrer">
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
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
              Built for production debugging
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-readable mx-auto">
              Comprehensive network visibility with the tools you need to diagnose and resolve issues quickly.
            </p>
          </div>
          
          <div className="grid gap-4 sm:gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Network className="h-8 w-8 mb-2 text-muted-foreground" />
                <CardTitle className="text-lg">Device-wide capture</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Network Extension-based packet tunnel configures a system proxy to capture HTTP(S) for apps that honor it. No per-app setup required.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Fingerprint className="h-8 w-8 mb-2 text-muted-foreground" />
                <CardTitle className="text-lg">TLS inspection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  On-device TLS MITM enables full request and response body inspection for encrypted traffic. Certificate pinning detection included.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Radio className="h-8 w-8 mb-2 text-muted-foreground" />
                <CardTitle className="text-lg">WebSocket & SSE</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Real-time protocol support for WebSocket connections and Server-Sent Events. View frame-by-frame communication as it happens.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Repeat className="h-8 w-8 mb-2 text-muted-foreground" />
                <CardTitle className="text-lg">Traffic modification</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Comprehensive modification tools: rewrite rules, request maps, host overrides, breakpoints, JavaScript scripts, and network condition profiles. Replay requests with the built-in request builder or import cURL commands.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Activity className="h-8 w-8 mb-2 text-muted-foreground" />
                <CardTitle className="text-lg">PCAP export</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Optional PCAP export of captured HTTP frames for offline analysis, plus event logging for diagnostics and troubleshooting.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Layers className="h-8 w-8 mb-2 text-muted-foreground" />
                <CardTitle className="text-lg">Deep inspection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Comprehensive analysis with headers, body viewers (JSON, XML, images, SVG, multipart), timing breakdowns, TLS certificate chains, HTTP/2 stream info with HPACK table, request comparison, and saved filter presets.
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
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
              Engineering depth
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-readable mx-auto">
              Built on iOS system frameworks for reliable, low-level network access.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-7 md:gap-8 sm:grid-cols-2">
            <div className="space-y-4 sm:space-y-5">
              <div>
                <h3 className="font-semibold mb-2 text-sm sm:text-base">Network Extension</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Implements NEPacketTunnelProvider to configure system proxy settings for capture.
                  Runs in a separate process with elevated privileges to manage the local MITM proxy.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-sm sm:text-base">TLS MITM</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  On-device certificate authority and dynamic certificate generation.
                  Intercepts TLS handshakes to enable encrypted traffic inspection.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-sm sm:text-base">App Groups</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Shared container for IPC between main app and extension.
                  Enables real-time traffic streaming and coordinated state management.
                </p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-5">
              <div>
                <h3 className="font-semibold mb-2 text-sm sm:text-base">Packet Tunnel</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Proxy-only tunnel injects NEProxySettings without routing packets.
                  HTTP/HTTPS traffic flows through the local proxy for inspection and tooling.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-sm sm:text-base">Widgets & Live Activities</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  WidgetKit integration for at-a-glance network statistics.
                  Live Activities show real-time request counts and data transfer rates.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-sm sm:text-base">Background Processing</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Efficient proxy processing with minimal battery impact.
                  Optimized memory usage for long-running capture sessions.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 sm:mt-10 md:mt-12 flex flex-wrap gap-1.5 sm:gap-2 justify-center">
            <Badge variant="secondary" className="whitespace-nowrap">Swift 6.0</Badge>
            <Badge variant="secondary" className="whitespace-nowrap">SwiftUI</Badge>
            <Badge variant="secondary" className="whitespace-nowrap">Network Extension</Badge>
            <Badge variant="secondary" className="whitespace-nowrap">NEPacketTunnelProvider</Badge>
            <Badge variant="secondary" className="whitespace-nowrap">WidgetKit</Badge>
            <Badge variant="secondary" className="whitespace-nowrap">Live Activities</Badge>
            <Badge variant="secondary" className="whitespace-nowrap">App Groups</Badge>
            <Badge variant="secondary" className="whitespace-nowrap">Swift Package Manager</Badge>
          </div>
        </div>
      </section>

      <Separator />

      {/* Open Source Section */}
      <section className="container py-section-lg">
        <div className="mx-auto max-w-readable text-center">
          <Github className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-4 sm:mb-6 text-muted-foreground" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
            Open source and transparent
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
            Trace is free and open source under the MIT license.
            No pricing tiers, no feature gates, no telemetry.
            The entire codebase is available for inspection, modification, and contribution.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button size="lg" asChild className="w-full sm:w-auto">
              <Link href="https://github.com/6639835/Trace" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View repository
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
              <Link href="/open-source">
                Read more about the project
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
