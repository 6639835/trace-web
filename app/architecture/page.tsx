import type { Metadata } from 'next';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { PageHeader } from '@/components/shared/page-header';
import { FeatureCard } from '@/components/marketing/feature-card';
import {
  Smartphone,
  Server,
  LayoutGrid,
  Network,
  Radio,
  MessageSquare,
  Activity,
  Layers,
} from 'lucide-react';
import { NetworkFlowDiagram } from '@/components/marketing/network-flow-diagram';

export const metadata: Metadata = {
  title: 'Architecture - How Trace Works Under the Hood',
  description:
    'Deep dive into Trace architecture: NEPacketTunnelProvider implementation, proxy-only VPN mode, TLS MITM, App Groups IPC, and protocol support. Learn how the iOS network debugger works.',
  keywords: [
    'NEPacketTunnelProvider',
    'iOS Network Extension',
    'TLS MITM architecture',
    'iOS VPN architecture',
    'App Groups iOS',
    'network debugging architecture',
    'iOS proxy implementation',
  ],
  openGraph: {
    title: 'Trace Architecture - Technical Deep Dive',
    description:
      'Learn how Trace uses NEPacketTunnelProvider, proxy-only VPN mode, and TLS MITM for iOS network debugging.',
    url: '/architecture',
  },
  alternates: {
    canonical: '/architecture',
  },
};

export default function ArchitecturePage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        icon={Layers}
        title="Architecture"
        description="A deep look at how Trace works under the hood. Understanding the technical foundation and design decisions."
      />

      <Separator />

      {/* System Overview */}
      <section className="container py-section">
        <div className="mx-auto max-w-content">
          <h2 className="mb-4 text-xl font-bold tracking-tight sm:mb-6 sm:text-2xl">
            System overview
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-muted-foreground sm:mb-8 sm:text-base">
            Trace is built on iOS Network Extension framework, specifically implementing
            NEPacketTunnelProvider. The tunnel runs in proxy-only mode and configures system proxy
            settings to route HTTP/HTTPS through a local MITM proxy. Apps must honor the system
            proxy for their traffic to be captured. The system consists of three primary components
            that communicate via shared App Group container.
          </p>

          <div className="mb-8 grid gap-4 sm:mb-10 sm:grid-cols-2 sm:gap-5 md:mb-12 md:gap-6 lg:grid-cols-3">
            <FeatureCard
              icon={Smartphone}
              title="Main application"
              titleClassName="text-lg"
              description="SwiftUI-based interface for viewing captured traffic, managing filters, and configuring settings. Reads data from shared App Group container and provides real-time updates. Handles export, search, replay, modification tools, and built-in utilities."
            />
            <FeatureCard
              icon={Server}
              title="Network extension (TraceVPN)"
              titleClassName="text-lg"
              description="Separate process running NEPacketTunnelProvider in proxy-only mode. Configures system proxy settings and runs the local MITM proxy for HTTP/HTTPS. Handles TLS, HTTP/2, WebSocket, and SSE before writing captures to the App Group."
            />
            <FeatureCard
              icon={LayoutGrid}
              title="Widget extension"
              titleClassName="text-lg"
              description="WidgetKit bundle with standard widget, control widget, and Live Activity. Real-time network statistics and quick actions. Shares data through App Group container."
            />
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Network flow</h3>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              Trace uses a VPN-based proxy mode to capture HTTP/HTTPS traffic. All captured traffic
              stays on-device and flows through a local MITM proxy server.
            </p>
            <NetworkFlowDiagram />
          </div>
        </div>
      </section>

      <Separator />

      {/* Network Extension */}
      <section className="container py-section">
        <div className="mx-auto max-w-content">
          <h2 className="mb-4 text-xl font-bold tracking-tight sm:mb-6 sm:text-2xl">
            Network extension implementation
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="mb-3 text-lg font-semibold">NEPacketTunnelProvider</h3>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                Core component that configures proxy-only VPN network settings via NEProxySettings.
                Starts the local MITM proxy and applies system proxy rules without routing packets.
                Runs in a separate process with elevated network privileges.
              </p>
              <div className="rounded-lg border bg-muted/30 p-4 font-mono text-sm break-words">
                <div className="text-muted-foreground">
                  final class PacketTunnelProvider: NEPacketTunnelProvider
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-semibold">Proxy processing pipeline</h3>
              <div className="space-y-3">
                <div className="rounded-lg border p-4">
                  <h4 className="mb-2 text-sm font-semibold">1. Proxy configuration</h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Apply system proxy settings to route HTTP/HTTPS to the local MITM proxy. Start
                    the proxy server and expose it on 127.0.0.1:8888.
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <h4 className="mb-2 text-sm font-semibold">2. HTTP parsing</h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Handle HTTP/1.1 and HTTP/2 requests and CONNECT tunnels in the proxy. Track
                    WebSocket upgrades, SSE connections, and request-response pairs.
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <h4 className="mb-2 text-sm font-semibold">3. TLS interception</h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    When the local CA is trusted and MITM is enabled, dynamically generate leaf
                    certificates. Decrypt and re-encrypt HTTPS traffic in the proxy for inspection.
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <h4 className="mb-2 text-sm font-semibold">4. Storage and notifications</h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Persist captures to the App Group container and notify the main app. Widgets and
                    Live Activities update from the shared storage.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-semibold">Certificate management</h3>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                On-device certificate authority generates root CA on first launch. User installs
                root certificate via Settings → General → VPN & Device Management. Extension
                dynamically generates leaf certificates matching intercepted domains. Private keys
                never leave device.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Data Storage */}
      <section className="container py-section">
        <div className="mx-auto max-w-content">
          <h2 className="mb-4 text-xl font-bold tracking-tight sm:mb-6 sm:text-2xl">
            Data storage and IPC
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="mb-3 text-lg font-semibold">App Groups</h3>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                Shared container enables communication between main app and extension. Both
                processes can read and write to shared directory. Used for configuration, captured
                traffic data, and coordination.
              </p>
              <div className="rounded-lg border bg-muted/30 p-4">
                <code className="font-mono text-sm break-words text-muted-foreground">
                  group.com.trace.network-debugger
                </code>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-semibold">Persistent storage</h3>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                Structured storage for captured requests, responses, and configuration. Shared data
                accessible from app, extension, and widgets through App Group. Efficient querying
                and filtering with support for search and presets. Automatic cleanup with
                configurable retention policy.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-semibold">Real-time updates</h3>
              <p className="leading-relaxed text-muted-foreground">
                Extension writes new captures to shared storage. Main app observes data changes for
                UI updates. Widgets receive notifications for Live Activity updates. Minimal latency
                between capture and display across all components.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Protocol Support */}
      <section className="container py-section">
        <div className="mx-auto max-w-content">
          <h2 className="mb-4 text-xl font-bold tracking-tight sm:mb-6 sm:text-2xl">
            Protocol support
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6">
            <FeatureCard
              icon={Network}
              title="HTTP/HTTPS"
              titleClassName="text-lg"
              description="Full HTTP/1.1 and HTTP/2 support with complete parsing. HTTPS via TLS MITM with dynamic certificate generation. HTTP/2 stream info with HPACK table viewer."
            />
            <FeatureCard
              icon={Radio}
              title="WebSocket"
              titleClassName="text-lg"
              description="Detects WebSocket upgrade handshake. Captures and parses individual frames. Distinguishes text and binary frames. Tracks connection lifecycle."
            />
            <FeatureCard
              icon={MessageSquare}
              title="Server-Sent Events"
              titleClassName="text-lg"
              description="Recognizes SSE Content-Type header. Parses event stream format. Displays individual events with timing. Tracks connection duration."
            />
            <FeatureCard
              icon={Activity}
              title="Limitations"
              titleClassName="text-lg"
              description="Proxy-only mode captures HTTP/HTTPS for apps that honor system proxy settings. QUIC/HTTP/3 traffic is not captured in this mode. Apps that bypass proxy settings will not appear in captures."
            />
          </div>
        </div>
      </section>

      <Separator />

      {/* Performance */}
      <section className="container py-section">
        <div className="mx-auto max-w-content">
          <h2 className="mb-4 text-xl font-bold tracking-tight sm:mb-6 sm:text-2xl">
            Performance considerations
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="mb-3 text-lg font-semibold">Proxy processing efficiency</h3>
              <p className="leading-relaxed text-muted-foreground">
                Minimal per-connection overhead to maintain network performance. Efficient buffering
                reduces memory allocations under load. Parsing work is scheduled off the critical
                path where possible.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-semibold">Memory management</h3>
              <p className="leading-relaxed text-muted-foreground">
                Extension memory budget is limited by iOS. Aggressive cleanup of processed proxy
                data. Writes captures to App Group storage as JSON files. Configurable retention
                policy prevents unbounded growth.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-semibold">Battery impact</h3>
              <p className="leading-relaxed text-muted-foreground">
                Background processing optimized for power efficiency. Proxy handling path is
                lightweight. Heavy parsing done asynchronously off the critical path. Extension can
                be disabled when not actively debugging.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Security Model */}
      <section className="container py-section">
        <div className="mx-auto max-w-content">
          <h2 className="mb-4 text-xl font-bold tracking-tight sm:mb-6 sm:text-2xl">
            Security model
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="mb-3 text-lg font-semibold">On-device only</h3>
              <p className="leading-relaxed text-muted-foreground">
                All traffic capture and analysis happens locally. No data transmission to external
                servers. No telemetry or analytics collection.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-semibold">Root certificate trust</h3>
              <p className="leading-relaxed text-muted-foreground">
                TLS interception requires explicit user action to trust root CA. Certificate
                installation flow clearly explains implications. Users maintain full control over
                certificate trust.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-semibold">Data isolation</h3>
              <p className="leading-relaxed text-muted-foreground">
                Captured data stored in app sandbox. No access from other apps without explicit
                export. Optional encryption for sensitive captured data.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-lg font-semibold">Code transparency</h3>
              <p className="leading-relaxed text-muted-foreground">
                Entire codebase is open source and auditable. No obfuscation or hidden
                functionality. Build from source to verify binary integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Technical Stack */}
      <section className="container py-section">
        <div className="mx-auto max-w-readable text-center">
          <h2 className="mb-3 text-xl font-bold tracking-tight sm:mb-4 sm:text-2xl">Built with</h2>
          <p className="mb-6 text-sm text-muted-foreground sm:mb-8 sm:text-base">
            Modern iOS frameworks and APIs.
          </p>
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
            <Badge variant="secondary" className="text-xs">
              Swift 6.0
            </Badge>
            <Badge variant="secondary" className="text-xs">
              SwiftUI
            </Badge>
            <Badge variant="secondary" className="text-xs">
              Network Extension
            </Badge>
            <Badge variant="secondary" className="text-xs">
              NEPacketTunnelProvider
            </Badge>
            <Badge variant="secondary" className="text-xs">
              Network.framework
            </Badge>
            <Badge variant="secondary" className="text-xs">
              WidgetKit
            </Badge>
            <Badge variant="secondary" className="text-xs">
              Live Activities
            </Badge>
            <Badge variant="secondary" className="text-xs">
              App Groups
            </Badge>
            <Badge variant="secondary" className="text-xs">
              Keychain Services
            </Badge>
            <Badge variant="secondary" className="text-xs">
              Swift Package Manager
            </Badge>
          </div>
        </div>
      </section>
    </div>
  );
}
