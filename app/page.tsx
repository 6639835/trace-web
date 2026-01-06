import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Github, Network, Fingerprint, Radio, Repeat, Activity, Layers } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6">
            Redefining iOS network debugging.
          </h1>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Professional network debugging tool for iOS developers. 
            Captures device-wide HTTP(S), TCP, WebSocket, and SSE traffic through a packet tunnel with on-device TLS MITM.
            Built on Network Extension APIs for complete system-level visibility and traffic modification.
          </p>
          <div className="flex justify-center">
            <Button size="lg" asChild>
              <Link href="https://github.com/trace-network-debugger" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Separator />

      {/* Product Showcase Section */}
      <section className="container py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-sm">
              {/* iPhone Mockup Container */}
              <div className="relative mx-auto" style={{ aspectRatio: "390/844" }}>
                {/* Device Frame */}
                <div className="absolute inset-0 rounded-[3rem] border-8 border-zinc-900 bg-zinc-900 shadow-2xl">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-6 bg-zinc-900 rounded-b-3xl z-10"></div>
                  
                  {/* Screen Content */}
                  <div className="absolute inset-2 rounded-[2.5rem] bg-white overflow-hidden">
                    {/* App Screenshot Placeholder */}
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
                          <div className="text-[10px] text-zinc-400 mt-1">12.4 KB • 142ms</div>
                        </div>
                        
                        <div className="bg-white rounded-lg p-3 shadow-sm border border-zinc-200">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                            <div className="text-xs font-mono text-zinc-600">POST</div>
                            <div className="text-xs text-zinc-400">201</div>
                          </div>
                          <div className="text-xs font-mono text-zinc-900 truncate">api.example.com/events</div>
                          <div className="text-[10px] text-zinc-400 mt-1">2.1 KB • 89ms</div>
                        </div>
                        
                        <div className="bg-white rounded-lg p-3 shadow-sm border border-zinc-200">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                            <div className="text-xs font-mono text-zinc-600">WS</div>
                            <div className="text-xs text-zinc-400">OPEN</div>
                          </div>
                          <div className="text-xs font-mono text-zinc-900 truncate">ws.example.com/live</div>
                          <div className="text-[10px] text-zinc-400 mt-1">Real-time connection</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 text-center max-w-2xl">
              <p className="text-sm text-muted-foreground">
                Real-time network inspection at the system level.
                See every request from every app on your device.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Core Capabilities Section */}
      <section className="container py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Built for production debugging
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive network visibility with the tools you need to diagnose and resolve issues quickly.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
      <section className="container py-24 md:py-32">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Engineering depth
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built on iOS system frameworks for reliable, low-level network access.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Network Extension</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Implements NEPacketTunnelProvider for system-wide network capture. 
                  Runs in a separate process with elevated privileges for complete traffic visibility.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">TLS MITM</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  On-device certificate authority and dynamic certificate generation.
                  Intercepts TLS handshakes to enable encrypted traffic inspection.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">App Groups</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Shared container for IPC between main app and extension.
                  Enables real-time traffic streaming and coordinated state management.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Packet Tunnel</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Virtual network interface captures IP packets before encryption.
                  Processes TCP streams and reconstructs HTTP transactions from raw packets.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Widgets & Live Activities</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  WidgetKit integration for at-a-glance network statistics.
                  Live Activities show real-time request counts and data transfer rates.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Background Processing</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Efficient packet processing with minimal battery impact.
                  Optimized memory usage for long-running capture sessions.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-2 justify-center">
            <Badge variant="secondary">Swift 6.0</Badge>
            <Badge variant="secondary">SwiftUI</Badge>
            <Badge variant="secondary">Network Extension</Badge>
            <Badge variant="secondary">NEPacketTunnelProvider</Badge>
            <Badge variant="secondary">WidgetKit</Badge>
            <Badge variant="secondary">Live Activities</Badge>
            <Badge variant="secondary">App Groups</Badge>
            <Badge variant="secondary">Swift Package Manager</Badge>
          </div>
        </div>
      </section>

      <Separator />

      {/* Open Source Section */}
      <section className="container py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <Github className="h-12 w-12 mx-auto mb-6 text-muted-foreground" />
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Open source and transparent
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Trace is free and open source under the MIT license.
            No pricing tiers, no feature gates, no telemetry.
            The entire codebase is available for inspection, modification, and contribution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="https://github.com/trace-network-debugger" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View repository
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
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

