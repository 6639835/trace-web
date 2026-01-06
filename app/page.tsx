import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Github, Network, Fingerprint, Radio, Repeat, Activity, Layers } from "lucide-react";
import { IPhoneMockup } from "@/components/marketing/iphone-mockup";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section with Phone Mockup */}
      <section className="container min-h-[calc(100vh-4rem)] flex items-center py-section">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center w-full max-w-wide mx-auto">
          {/* Left Column - Hero Text */}
          <div className="flex flex-col justify-center space-y-4 sm:space-y-6 lg:space-y-8 max-w-full">
            <div className="max-w-full">
              <h1 className="text-2xl xs:text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl mb-3 sm:mb-4 lg:mb-6 leading-tight break-words hyphens-auto">
                Redefining iOS network debugging.
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed break-words">
                Professional network debugging tool for iOS developers. 
                Captures device-wide HTTP(S), TCP, WebSocket, and SSE traffic through a packet tunnel with on-device TLS MITM.
                Built on Network Extension APIs for complete system-level visibility and traffic modification.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-full">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <Link href="https://github.com/trace-network-debugger" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  View on GitHub
                </Link>
              </Button>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground break-words max-w-full">
              Real-time network inspection at the system level.
              See every request from every app on your device.
            </p>
          </div>

          {/* Right Column - Phone Mockup */}
          <div className="flex justify-center lg:justify-end items-center mt-4 lg:mt-0">
            <div className="max-w-full">
              <IPhoneMockup>
                {/* App Screenshot Content */}
                <div className="w-full h-full bg-gradient-to-b from-zinc-50 to-zinc-100 p-4">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center mb-4 text-xs text-zinc-900">
                    <span className="font-semibold">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-3 border border-zinc-900 rounded-sm"></div>
                    </div>
                  </div>
                  
                  {/* App Content */}
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-3 shadow-sm border border-zinc-200">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <div className="text-xs font-mono text-zinc-600">GET</div>
                        <div className="text-xs text-zinc-400">200</div>
                      </div>
                      <div className="text-xs font-mono text-zinc-900 truncate">api.example.com/users</div>
                      <div className="text-2xs text-zinc-400 mt-1">12.4 KB • 142ms</div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-3 shadow-sm border border-zinc-200">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <div className="text-xs font-mono text-zinc-600">POST</div>
                        <div className="text-xs text-zinc-400">201</div>
                      </div>
                      <div className="text-xs font-mono text-zinc-900 truncate">api.example.com/events</div>
                      <div className="text-2xs text-zinc-400 mt-1">2.1 KB • 89ms</div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-3 shadow-sm border border-zinc-200">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                        <div className="text-xs font-mono text-zinc-600">WS</div>
                        <div className="text-xs text-zinc-400">OPEN</div>
                      </div>
                      <div className="text-xs font-mono text-zinc-900 truncate">ws.example.com/live</div>
                      <div className="text-2xs text-zinc-400 mt-1">Real-time connection</div>
                    </div>
                  </div>
                </div>
              </IPhoneMockup>
            </div>
          </div>
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
                  Network Extension-based packet tunnel captures all HTTP(S) traffic across every app on the device. No proxy configuration required.
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
                <CardTitle className="text-lg">TCP flow tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Low-level TCP connection monitoring with per-flow statistics, optional raw stream capture, and CSV/JSON export. Track connection state, timing, and data flow for non-HTTP protocols.
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
                  Comprehensive analysis with headers, body viewers (JSON, XML, images, SVG, multipart), timing breakdowns, TLS certificate chains, HTTP/2 stream info with HPACK table, HTTP/3 protocol markers, request comparison, and saved filter presets.
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
                  Implements NEPacketTunnelProvider for system-wide network capture. 
                  Runs in a separate process with elevated privileges for complete traffic visibility.
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
                  Virtual network interface captures IP packets before encryption.
                  Processes TCP streams and reconstructs HTTP transactions from raw packets.
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
                  Efficient packet processing with minimal battery impact.
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
              <Link href="https://github.com/trace-network-debugger" target="_blank" rel="noopener noreferrer">
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
