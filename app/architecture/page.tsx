import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export default function ArchitecturePage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="container py-12 sm:py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3 sm:mb-4">
            Architecture
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
            A deep look at how Trace works under the hood.
            Understanding the technical foundation and design decisions.
          </p>
        </div>
      </section>

      <Separator />

      {/* System Overview */}
      <section className="container py-12 sm:py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-4 sm:mb-6">System overview</h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
            Trace is built on iOS Network Extension framework, specifically implementing NEPacketTunnelProvider.
            This architecture enables system-level network visibility without requiring apps to route traffic through a local proxy.
            The system consists of three primary components that communicate via shared App Group container.
          </p>

          <div className="grid gap-4 sm:gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8 sm:mb-10 md:mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Main application</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  SwiftUI-based interface for viewing captured traffic, managing filters, and configuring settings.
                  Reads data from shared App Group container and provides real-time updates.
                  Handles export, search, replay, modification tools, and built-in utilities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Network extension (TraceVPN)</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Separate process running NEPacketTunnelProvider that captures IP packets.
                  Implements MITM proxy with TLS handling and HTTP/2/WebSocket parsing.
                  Writes captured data to shared App Group container.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Widget extension</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  WidgetKit bundle with standard widget, control widget, and Live Activity.
                  Real-time network statistics and quick actions.
                  Shares data through App Group container.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="rounded-lg border bg-muted/30 p-6">
            <h3 className="font-semibold mb-4">Data flow</h3>
            <div className="space-y-3 text-sm text-muted-foreground font-mono">
              <div>Device network → Network Extension (packet tunnel)</div>
              <div className="pl-4">↓ Packet capture at IP layer</div>
              <div className="pl-4">↓ TCP stream reconstruction</div>
              <div className="pl-4">↓ HTTP/HTTP2/HTTP3/WebSocket parsing</div>
              <div className="pl-4">↓ TLS interception (if enabled)</div>
              <div className="pl-4">↓ Apply rewrite rules, request maps, breakpoints</div>
              <div className="pl-4">↓ Write to shared container (App Group)</div>
              <div>Main app reads and displays</div>
              <div>Widget extension shows real-time stats</div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Network Extension */}
      <section className="container py-12 sm:py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-4 sm:mb-6">Network extension implementation</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">NEPacketTunnelProvider</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Core component that implements virtual network interface.
                Receives all IP packets destined for network, allowing inspection before forwarding.
                Runs in separate process with elevated network privileges.
              </p>
              <div className="rounded-lg border bg-muted/30 p-4 text-sm font-mono">
                <div className="text-muted-foreground">class TracePacketTunnel: NEPacketTunnelProvider</div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Packet processing pipeline</h3>
              <div className="space-y-3">
                <div className="rounded-lg border p-4">
                  <h4 className="font-semibold text-sm mb-2">1. Packet capture</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Intercept IP packets via packetFlow.readPackets().
                    Parse IP headers to identify protocol and endpoints.
                    Forward packets to maintain connectivity while copying for analysis.
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <h4 className="font-semibold text-sm mb-2">2. TCP reconstruction</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Track TCP connections by five-tuple (src IP, src port, dst IP, dst port, protocol).
                    Reassemble TCP segments in correct sequence order.
                    Handle retransmissions, out-of-order delivery, and connection state.
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <h4 className="font-semibold text-sm mb-2">3. HTTP parsing</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Parse HTTP/1.1, HTTP/2, and HTTP/3 transactions from TCP stream.
                    Extract method, path, headers, and body with protocol-specific features.
                    Track WebSocket upgrades, SSE connections, and request-response pairs.
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <h4 className="font-semibold text-sm mb-2">4. TLS interception</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Intercept TLS handshakes on port 443.
                    Present dynamically generated certificate to client.
                    Establish separate TLS connection to actual server.
                    Decrypt, inspect, and re-encrypt traffic transparently.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Certificate management</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                On-device certificate authority generates root CA on first launch.
                User installs root certificate via Settings → General → VPN & Device Management.
                Extension dynamically generates leaf certificates matching intercepted domains.
                Private keys never leave device.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Data Storage */}
      <section className="container py-12 sm:py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-4 sm:mb-6">Data storage and IPC</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">App Groups</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Shared container enables communication between main app and extension.
                Both processes can read and write to shared directory.
                Used for configuration, captured traffic data, and coordination.
              </p>
              <div className="rounded-lg border bg-muted/30 p-4">
                <code className="text-sm font-mono text-muted-foreground">
                  group.com.trace.network-debugger
                </code>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Persistent storage</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Structured storage for captured requests, responses, and configuration.
                Shared data accessible from app, extension, and widgets through App Group.
                Efficient querying and filtering with support for search and presets.
                Automatic cleanup with configurable retention policy.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Real-time updates</h3>
              <p className="text-muted-foreground leading-relaxed">
                Extension writes new captures to shared storage.
                Main app observes data changes for UI updates.
                Widgets receive notifications for Live Activity updates.
                Minimal latency between capture and display across all components.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Protocol Support */}
      <section className="container py-12 sm:py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-4 sm:mb-6">Protocol support</h2>
          
          <div className="grid gap-4 sm:gap-5 md:gap-6 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">HTTP/HTTPS</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Full HTTP/1.1, HTTP/2, and HTTP/3 support with complete parsing.
                  HTTPS via TLS MITM with dynamic certificate generation.
                  HTTP/2 stream info with HPACK table viewer and HTTP/3 protocol markers.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">WebSocket</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Detects WebSocket upgrade handshake.
                  Captures and parses individual frames.
                  Distinguishes text and binary frames.
                  Tracks connection lifecycle.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Server-Sent Events</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Recognizes SSE Content-Type header.
                  Parses event stream format.
                  Displays individual events with timing.
                  Tracks connection duration.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">TCP</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Low-level TCP flow monitoring.
                  Connection state tracking.
                  Raw data inspection for non-HTTP protocols.
                  Useful for debugging custom protocols.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* Performance */}
      <section className="container py-12 sm:py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-4 sm:mb-6">Performance considerations</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Packet processing efficiency</h3>
              <p className="text-muted-foreground leading-relaxed">
                Minimal per-packet overhead to maintain network performance.
                Efficient buffer management reduces memory allocations.
                Parallel processing where possible without compromising order.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Memory management</h3>
              <p className="text-muted-foreground leading-relaxed">
                Extension memory budget is limited by iOS.
                Aggressive cleanup of processed packets.
                Streaming write to Core Data instead of buffering in memory.
                Configurable retention policy prevents unbounded growth.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Battery impact</h3>
              <p className="text-muted-foreground leading-relaxed">
                Background processing optimized for power efficiency.
                Packet forwarding path is lightweight.
                Heavy parsing done asynchronously off critical path.
                Extension can be disabled when not actively debugging.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Security Model */}
      <section className="container py-12 sm:py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-4 sm:mb-6">Security model</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">On-device only</h3>
              <p className="text-muted-foreground leading-relaxed">
                All traffic capture and analysis happens locally.
                No data transmission to external servers.
                No telemetry or analytics collection.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Root certificate trust</h3>
              <p className="text-muted-foreground leading-relaxed">
                TLS interception requires explicit user action to trust root CA.
                Certificate installation flow clearly explains implications.
                Users maintain full control over certificate trust.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Data isolation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Captured data stored in app sandbox.
                No access from other apps without explicit export.
                Optional encryption for sensitive captured data.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Code transparency</h3>
              <p className="text-muted-foreground leading-relaxed">
                Entire codebase is open source and auditable.
                No obfuscation or hidden functionality.
                Build from source to verify binary integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Technical Stack */}
      <section className="container py-12 sm:py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-3 sm:mb-4">
            Built with
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
            Modern iOS frameworks and APIs.
          </p>
          <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center">
            <Badge variant="secondary" className="text-xs">Swift 6.0</Badge>
            <Badge variant="secondary" className="text-xs">SwiftUI</Badge>
            <Badge variant="secondary" className="text-xs">Network Extension</Badge>
            <Badge variant="secondary" className="text-xs">NEPacketTunnelProvider</Badge>
            <Badge variant="secondary" className="text-xs">Network.framework</Badge>
            <Badge variant="secondary" className="text-xs">WidgetKit</Badge>
            <Badge variant="secondary" className="text-xs">Live Activities</Badge>
            <Badge variant="secondary" className="text-xs">App Groups</Badge>
            <Badge variant="secondary" className="text-xs">Keychain Services</Badge>
            <Badge variant="secondary" className="text-xs">Swift Package Manager</Badge>
          </div>
        </div>
      </section>
    </div>
  );
}

