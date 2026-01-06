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
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Features
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A complete toolkit for network debugging and analysis.
            Built for iOS developers who need precise, low-level visibility.
          </p>
        </div>
      </section>

      <Separator />

      {/* Core Features */}
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold tracking-tight mb-12">Core capabilities</h2>
          
          <div className="space-y-16">
            {/* Device-wide Capture */}
            <div className="grid gap-8 md:grid-cols-[auto,1fr]">
              <div className="flex items-start">
                <div className="rounded-lg border p-3 bg-muted/50">
                  <Network className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Device-wide traffic capture</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
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
            <div className="grid gap-8 md:grid-cols-[auto,1fr]">
              <div className="flex items-start">
                <div className="rounded-lg border p-3 bg-muted/50">
                  <Fingerprint className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">TLS inspection and MITM</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
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
            <div className="grid gap-8 md:grid-cols-[auto,1fr]">
              <div className="flex items-start">
                <div className="rounded-lg border p-3 bg-muted/50">
                  <Radio className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">WebSocket and SSE support</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
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
            <div className="grid gap-8 md:grid-cols-[auto,1fr]">
              <div className="flex items-start">
                <div className="rounded-lg border p-3 bg-muted/50">
                  <Layers className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Comprehensive request analysis</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Complete visibility into every aspect of HTTP transactions.
                  Headers, body, timing breakdown, size analysis, and protocol metadata all accessible in a structured format.
                  Supports multiple body formats with syntax highlighting.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-foreground mt-2" />
                    <p className="text-muted-foreground">JSON, XML, HTML, and binary body inspection</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-foreground mt-2" />
                    <p className="text-muted-foreground">Detailed timing breakdown from DNS to response completion</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1 h-1 rounded-full bg-foreground mt-2" />
                    <p className="text-muted-foreground">Cookie inspection and Set-Cookie analysis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Advanced Features */}
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold tracking-tight mb-12">Advanced tools</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <Repeat className="h-8 w-8 mb-2 text-muted-foreground" />
                <CardTitle>Request replay and modification</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Replay any captured request with optional modifications.
                  Edit headers, body, and method to test different scenarios.
                  Useful for reproducing issues and testing edge cases.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Filter className="h-8 w-8 mb-2 text-muted-foreground" />
                <CardTitle>Advanced filtering</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Filter traffic by domain, method, status code, content type, or custom patterns.
                  Save filter presets for common debugging scenarios.
                  Focus on relevant requests during active development.
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
                <CardTitle>Export and sharing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Export captured traffic in HAR format for analysis in other tools.
                  Share specific requests with team members.
                  Archive debugging sessions for later review.
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
                  Track low-level TCP connections and data flow.
                  Monitor connection state changes and timing.
                  Debug non-HTTP protocols and connection issues.
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

      {/* Performance & Privacy */}
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold tracking-tight mb-12">Performance and privacy</h2>
          
          <div className="grid gap-8 md:grid-cols-2">
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
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold tracking-tight mb-4">
            Built with modern iOS technologies
          </h2>
          <p className="text-muted-foreground mb-8">
            Leverages Apple's latest frameworks and APIs for reliability and performance.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Badge variant="secondary">Swift 5.9</Badge>
            <Badge variant="secondary">SwiftUI</Badge>
            <Badge variant="secondary">Network Extension</Badge>
            <Badge variant="secondary">NEPacketTunnelProvider</Badge>
            <Badge variant="secondary">WidgetKit</Badge>
            <Badge variant="secondary">Live Activities</Badge>
            <Badge variant="secondary">App Groups</Badge>
            <Badge variant="secondary">Core Data</Badge>
            <Badge variant="secondary">Combine</Badge>
            <Badge variant="secondary">URLSession</Badge>
          </div>
        </div>
      </section>
    </div>
  );
}

