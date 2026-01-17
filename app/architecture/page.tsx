import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Server, LayoutGrid, Network, Radio, MessageSquare, Activity } from "lucide-react";
import { NetworkFlowDiagram } from "@/components/network-flow-diagram";

export default function ArchitecturePage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="container py-section">
        <div className="mx-auto max-w-readable text-center">
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
      <section className="container py-section">
        <div className="mx-auto max-w-content">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-4 sm:mb-6">System overview</h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
            Trace is built on iOS Network Extension framework, specifically implementing NEPacketTunnelProvider.
            The tunnel runs in proxy-only mode and configures system proxy settings to route HTTP/HTTPS through a local MITM proxy.
            Apps must honor the system proxy for their traffic to be captured.
            The system consists of three primary components that communicate via shared App Group container.
          </p>

          <div className="grid gap-4 sm:gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8 sm:mb-10 md:mb-12">
            <Card>
              <CardHeader>
                <Smartphone className="h-8 w-8 mb-2 text-muted-foreground" />
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
                <Server className="h-8 w-8 mb-2 text-muted-foreground" />
              <CardTitle className="text-lg">Network extension (TraceVPN)</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="leading-relaxed">
                  Separate process running NEPacketTunnelProvider in proxy-only mode.
                  Configures system proxy settings and runs the local MITM proxy for HTTP/HTTPS.
                  Handles TLS, HTTP/2, WebSocket, and SSE before writing captures to the App Group.
              </CardDescription>
            </CardContent>
          </Card>

            <Card>
              <CardHeader>
                <LayoutGrid className="h-8 w-8 mb-2 text-muted-foreground" />
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

          <div>
            <h3 className="font-semibold mb-4">Network flow</h3>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Trace uses a VPN-based proxy mode to capture HTTP/HTTPS traffic. 
              All captured traffic stays on-device and flows through a local MITM proxy server.
            </p>
            <NetworkFlowDiagram />
          </div>
        </div>
      </section>

      <Separator />

      {/* Network Extension */}
      <section className="container py-section">
        <div className="mx-auto max-w-content">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-4 sm:mb-6">Network extension implementation</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">NEPacketTunnelProvider</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Core component that configures proxy-only VPN network settings via NEProxySettings.
                Starts the local MITM proxy and applies system proxy rules without routing packets.
                Runs in a separate process with elevated network privileges.
              </p>
              <div className="rounded-lg border bg-muted/30 p-4 text-sm font-mono break-words">
                <div className="text-muted-foreground">final class PacketTunnelProvider: NEPacketTunnelProvider</div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Proxy processing pipeline</h3>
              <div className="space-y-3">
                <div className="rounded-lg border p-4">
                  <h4 className="font-semibold text-sm mb-2">1. Proxy configuration</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Apply system proxy settings to route HTTP/HTTPS to the local MITM proxy.
                    Start the proxy server and expose it on 127.0.0.1:8888.
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <h4 className="font-semibold text-sm mb-2">2. HTTP parsing</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Handle HTTP/1.1 and HTTP/2 requests and CONNECT tunnels in the proxy.
                    Track WebSocket upgrades, SSE connections, and request-response pairs.
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <h4 className="font-semibold text-sm mb-2">3. TLS interception</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    When the local CA is trusted and MITM is enabled, dynamically generate leaf certificates.
                    Decrypt and re-encrypt HTTPS traffic in the proxy for inspection.
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <h4 className="font-semibold text-sm mb-2">4. Storage and notifications</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Persist captures to the App Group container and notify the main app.
                    Widgets and Live Activities update from the shared storage.
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
      <section className="container py-section">
        <div className="mx-auto max-w-content">
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
                <code className="text-sm font-mono text-muted-foreground break-words">
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
      <section className="container py-section">
        <div className="mx-auto max-w-content">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-4 sm:mb-6">Protocol support</h2>
          
          <div className="grid gap-4 sm:gap-5 md:gap-6 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <Network className="h-8 w-8 mb-2 text-muted-foreground" />
                <CardTitle className="text-lg">HTTP/HTTPS</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Full HTTP/1.1 and HTTP/2 support with complete parsing.
                  HTTPS via TLS MITM with dynamic certificate generation.
                  HTTP/2 stream info with HPACK table viewer.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Radio className="h-8 w-8 mb-2 text-muted-foreground" />
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
                <MessageSquare className="h-8 w-8 mb-2 text-muted-foreground" />
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
                <Activity className="h-8 w-8 mb-2 text-muted-foreground" />
                <CardTitle className="text-lg">Limitations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Proxy-only mode captures HTTP/HTTPS for apps that honor system proxy settings.
                  QUIC/HTTP/3 traffic is not captured in this mode.
                  Apps that bypass proxy settings will not appear in captures.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* Performance */}
      <section className="container py-section">
        <div className="mx-auto max-w-content">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-4 sm:mb-6">Performance considerations</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Proxy processing efficiency</h3>
              <p className="text-muted-foreground leading-relaxed">
                Minimal per-connection overhead to maintain network performance.
                Efficient buffering reduces memory allocations under load.
                Parsing work is scheduled off the critical path where possible.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Memory management</h3>
              <p className="text-muted-foreground leading-relaxed">
                Extension memory budget is limited by iOS.
                Aggressive cleanup of processed proxy data.
                Writes captures to App Group storage as JSON files.
                Configurable retention policy prevents unbounded growth.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Battery impact</h3>
              <p className="text-muted-foreground leading-relaxed">
                Background processing optimized for power efficiency.
                Proxy handling path is lightweight.
                Heavy parsing done asynchronously off the critical path.
                Extension can be disabled when not actively debugging.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Security Model */}
      <section className="container py-section">
        <div className="mx-auto max-w-content">
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
      <section className="container py-section">
        <div className="mx-auto max-w-readable text-center">
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
