import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  Network, 
  Fingerprint, 
  Radio, 
  Repeat, 
  Activity, 
  Layers,
  Filter,
  Search,
  Download,
  Eye,
  Zap,
  Lock
} from "lucide-react";

export default function FeaturesPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="container py-12 sm:py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3 sm:mb-4">
            Features
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
            A complete toolkit for network debugging and analysis.
            Built for iOS developers who need precise, low-level visibility.
          </p>
        </div>
      </section>

      <Separator />

      {/* Core Features */}
      <section className="container py-12 sm:py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-8 sm:mb-10 md:mb-12">Core capabilities</h2>
          
          <div className="space-y-10 sm:space-y-12 md:space-y-16">
            {/* Device-wide Capture */}
            <div className="grid gap-4 sm:gap-6 md:gap-8 md:grid-cols-[auto,1fr]">
              <div className="flex items-start">
                <div className="rounded-lg border p-2.5 sm:p-3 bg-muted/50">
                  <Network className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Device-wide traffic capture</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                  Network Extension-based implementation provides system-level network access.
                  Captures all HTTP and HTTPS traffic from every app on the device without requiring proxy configuration.
                  The packet tunnel interface operates at the IP layer for complete visibility.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-foreground mt-2" />
                    <p className="text-muted-foreground">Automatic capture of system and third-party app traffic</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-foreground mt-2" />
                    <p className="text-muted-foreground">No VPN or proxy configuration required by apps</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-foreground mt-2" />
                    <p className="text-muted-foreground">Works with apps that have strict network requirements</p>
                  </div>
                </div>
              </div>
            </div>

            {/* TLS Inspection */}
            <div className="grid gap-4 sm:gap-6 md:gap-8 md:grid-cols-[auto,1fr]">
              <div className="flex items-start">
                <div className="rounded-lg border p-2.5 sm:p-3 bg-muted/50">
                  <Fingerprint className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">TLS inspection and MITM</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                  On-device certificate authority enables transparent TLS interception.
                  Dynamically generates certificates for intercepted domains to decrypt and inspect HTTPS traffic.
                  All cryptographic operations happen locally with no external dependencies.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-foreground mt-2" />
                    <p className="text-muted-foreground">Full request and response body visibility for HTTPS</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-foreground mt-2" />
                    <p className="text-muted-foreground">Certificate pinning detection and bypass options</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-foreground mt-2" />
                    <p className="text-muted-foreground">Root certificate management and trust configuration</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Real-time Protocols */}
            <div className="grid gap-4 sm:gap-6 md:gap-8 md:grid-cols-[auto,1fr]">
              <div className="flex items-start">
                <div className="rounded-lg border p-2.5 sm:p-3 bg-muted/50">
                  <Radio className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">WebSocket and SSE support</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                  First-class support for real-time protocols.
                  WebSocket frames and Server-Sent Events are captured, parsed, and displayed with full context.
                  Frame-level inspection shows exact timing and content of bidirectional communication.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-foreground mt-2" />
                    <p className="text-muted-foreground">WebSocket handshake and frame-by-frame analysis</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-foreground mt-2" />
                    <p className="text-muted-foreground">SSE event stream parsing and visualization</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-foreground mt-2" />
                    <p className="text-muted-foreground">Real-time connection status and message flow</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Deep Inspection */}
            <div className="grid gap-4 sm:gap-6 md:gap-8 md:grid-cols-[auto,1fr]">
              <div className="flex items-start">
                <div className="rounded-lg border p-2.5 sm:p-3 bg-muted/50">
                  <Layers className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Comprehensive request analysis</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                  Complete visibility into every aspect of HTTP transactions.
                  Headers, body, timing breakdown, size analysis, and protocol metadata all accessible in a structured format.
                  Supports multiple body formats with syntax highlighting and advanced protocol features.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-foreground mt-2" />
                    <p className="text-muted-foreground">JSON, XML, images, SVG, and multipart body inspection</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-foreground mt-2" />
                    <p className="text-muted-foreground">HTTP/2 stream info with HPACK table viewer</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-foreground mt-2" />
                    <p className="text-muted-foreground">HTTP/3 protocol markers and TLS certificate chain details</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-foreground mt-2" />
                    <p className="text-muted-foreground">Request comparison and timeline visualization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Advanced Features */}
      <section className="container py-12 sm:py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-8 sm:mb-10 md:mb-12">Advanced tools</h2>
          
          <div className="grid gap-4 sm:gap-5 md:gap-6 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <Repeat className="h-8 w-8 mb-2 text-muted-foreground" />
                <CardTitle>Request Builder and cURL</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Built-in request builder to craft and send custom requests.
                  Import cURL commands directly or export requests as cURL.
                  Replay captured requests with full modification capabilities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Filter className="h-8 w-8 mb-2 text-muted-foreground" />
                <CardTitle>Advanced filtering and grouping</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Filter traffic by domain, method, status code, content type, or custom patterns.
                  Save filter presets for common debugging scenarios.
                  Group requests by domain or session for better organization.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Search className="h-8 w-8 mb-2 text-muted-foreground" />
                <CardTitle>Full-text search</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Search across all captured request and response content.
                  Find specific API endpoints, header values, or body content.
                  Supports regex patterns for advanced queries.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Download className="h-8 w-8 mb-2 text-muted-foreground" />
                <CardTitle>Import and export</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  HAR import and export for comprehensive traffic analysis.
                  Export TCP flows as CSV or JSON.
                  Import/export configuration including rewrite rules, request maps, scripts, and hosts.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Activity className="h-8 w-8 mb-2 text-muted-foreground" />
                <CardTitle>TCP flow monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Track low-level TCP connections with per-flow statistics.
                  Optional raw stream capture for deep packet analysis.
                  Export flow data as CSV or JSON for external analysis.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Eye className="h-8 w-8 mb-2 text-muted-foreground" />
                <CardTitle>Live activity indicators</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  WidgetKit integration shows real-time network statistics.
                  Live Activities display active request counts and data transfer.
                  At-a-glance visibility without opening the app.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* Traffic Modification Tools */}
      <section className="container py-12 sm:py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-8 sm:mb-10 md:mb-12">Traffic modification and manipulation</h2>
          
          <div className="grid gap-4 sm:gap-5 md:gap-6 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Rewrite rules</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Create rules to automatically modify requests and responses.
                  Change headers, URLs, or body content based on patterns.
                  Test different scenarios without modifying application code.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Request maps</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Map requests to custom responses or redirect to different endpoints.
                  Mock API responses for offline development.
                  Test edge cases and error handling.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Host overrides</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Override DNS resolution to redirect traffic to different servers.
                  Test against staging or development environments.
                  Custom hosts file directly in the app.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Breakpoints</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Pause requests before they are sent or responses before they are delivered.
                  Inspect and modify traffic in real-time.
                  Interactive debugging for network issues.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>JavaScript scripts</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Write custom JavaScript to programmatically modify traffic.
                  Advanced automation for complex modification scenarios.
                  Full access to request and response objects.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Network throttling</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Simulate different network conditions with custom profiles.
                  Test application behavior under poor connectivity.
                  Configure bandwidth limits, latency, and packet loss.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* Built-in Utilities */}
      <section className="container py-12 sm:py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-8 sm:mb-10 md:mb-12">Built-in utilities</h2>
          
          <div className="grid gap-4 sm:gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Base64 encoder/decoder</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Encode and decode Base64 strings directly in the app.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">URL encoder/decoder</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  URL encode and decode for query parameters and paths.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">JSON formatter</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Format and validate JSON with syntax highlighting.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Hash generator</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Generate MD5, SHA-1, SHA-256 hashes for strings.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Timestamp converter</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Convert between Unix timestamps and human-readable dates.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Certificate guide</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Step-by-step guide for CA installation and trust setup.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* Performance & Privacy */}
      <section className="container py-12 sm:py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-8 sm:mb-10 md:mb-12">Performance and privacy</h2>
          
          <div className="grid gap-6 sm:gap-7 md:gap-8 sm:grid-cols-2">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-lg border p-2 bg-muted/50">
                  <Zap className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">Optimized for efficiency</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Designed to minimize battery and performance impact during capture sessions.
                Efficient packet processing and memory management allow for extended debugging sessions.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-foreground mt-2" />
                  <p className="text-muted-foreground">Minimal CPU overhead during active capture</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-foreground mt-2" />
                  <p className="text-muted-foreground">Efficient memory usage with automatic cleanup</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-foreground mt-2" />
                  <p className="text-muted-foreground">Background processing optimized for battery life</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-lg border p-2 bg-muted/50">
                  <Lock className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">Privacy-first architecture</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All traffic capture and analysis happens entirely on-device.
                No data leaves your device. No telemetry. No analytics.
                Complete control over your debugging data.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-foreground mt-2" />
                  <p className="text-muted-foreground">Zero network communication from the tool itself</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-foreground mt-2" />
                  <p className="text-muted-foreground">Local storage with optional encryption</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-foreground mt-2" />
                  <p className="text-muted-foreground">No third-party dependencies or tracking</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Technical Stack */}
      <section className="container py-12 sm:py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-3 sm:mb-4">
            Built with modern iOS technologies
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
            Leverages Apple's latest frameworks and APIs for reliability and performance.
          </p>
          <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center">
            <Badge variant="secondary" className="text-xs">Swift 6.0</Badge>
            <Badge variant="secondary" className="text-xs">SwiftUI</Badge>
            <Badge variant="secondary" className="text-xs">Network Extension</Badge>
            <Badge variant="secondary" className="text-xs">NEPacketTunnelProvider</Badge>
            <Badge variant="secondary" className="text-xs">WidgetKit</Badge>
            <Badge variant="secondary" className="text-xs">Live Activities</Badge>
            <Badge variant="secondary" className="text-xs">App Groups</Badge>
            <Badge variant="secondary" className="text-xs">Swift Package Manager</Badge>
          </div>
        </div>
      </section>
    </div>
  );
}

