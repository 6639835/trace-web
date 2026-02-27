import type { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { PageSection } from '@/components/shared/page-section';
import { FeatureCard } from '@/components/marketing/feature-card';
import { EditorialBanner } from '@/components/sections/editorial-banner';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Smartphone,
  Server,
  LayoutGrid,
  Network,
  Radio,
  MessageSquare,
  Activity,
  BookOpen,
} from 'lucide-react';
import { CodeBlock } from '@/components/docs/mdx/code-block';
import { NetworkFlowDiagram } from '@/components/marketing/network-flow-diagram';
import { SectionNav } from '@/components/shared/section-nav';

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
      {/* ── Minimal left-aligned hero ── */}
      <section className="container py-section">
        <div className="mx-auto max-w-content">
          <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            How Trace works under the hood.
          </h1>
          <p className="mb-6 max-w-readable text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
            A deep look at the technical foundation and design decisions that power on-device iOS
            network debugging.
          </p>
          <div className="flex flex-wrap gap-2">
            {['NEPacketTunnelProvider', 'TLS MITM', 'App Groups', 'WidgetKit', 'Swift 6'].map(
              (tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ),
            )}
          </div>
        </div>
      </section>

      <SectionNav
        ariaLabel="Architecture sections"
        items={[
          { href: '#overview', label: 'Overview' },
          { href: '#packet-tunnel', label: 'Packet Tunnel' },
          { href: '#storage', label: 'Storage & IPC' },
          { href: '#protocols', label: 'Protocols' },
          { href: '#performance', label: 'Performance' },
          { href: '#security', label: 'Security' },
        ]}
      />

      {/* ── System Overview ── */}
      <PageSection spacing="lg">
        <div id="overview" className="mx-auto max-w-content scroll-mt-32">
          <h2 className="mb-4 text-xl font-bold tracking-tight sm:mb-6 sm:text-2xl md:text-3xl">
            System overview
          </h2>
          <p className="mb-8 max-w-readable text-sm leading-relaxed text-muted-foreground sm:text-base">
            Trace implements NEPacketTunnelProvider in proxy-only mode, configuring system proxy
            settings to route HTTP/HTTPS through a local MITM proxy. Three components communicate
            via a shared App Group container.
          </p>

          <div className="mb-10 grid gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6 lg:grid-cols-3">
            <FeatureCard
              icon={Smartphone}
              title="Main application"
              titleClassName="text-lg"
              description="SwiftUI interface for viewing captured traffic, managing filters, and configuring settings. Reads from the shared App Group and provides real-time updates. Handles export, search, replay, modification tools, and utilities."
            />
            <FeatureCard
              icon={Server}
              title="Network extension (TraceVPN)"
              titleClassName="text-lg"
              description="Separate process running NEPacketTunnelProvider in proxy-only mode. Configures system proxy settings and runs the local MITM proxy. Handles TLS, HTTP/2, WebSocket, and SSE before writing captures to the App Group."
            />
            <FeatureCard
              icon={LayoutGrid}
              title="Widget extension"
              titleClassName="text-lg"
              description="WidgetKit bundle with standard widget, control widget, and Live Activity. Real-time network statistics and quick actions. Shares data through the App Group container."
            />
          </div>

          <div>
            <h3 className="mb-3 font-semibold">Network flow</h3>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              All captured traffic stays on-device and flows through a local MITM proxy server.
            </p>
            <NetworkFlowDiagram />
          </div>
        </div>
      </PageSection>

      <Separator />

      {/* ── Network Extension / Packet Tunnel ── */}
      <PageSection>
        <div id="packet-tunnel" className="mx-auto max-w-content scroll-mt-32">
          <h2 className="mb-6 text-xl font-bold tracking-tight sm:text-2xl md:text-3xl">
            Network extension implementation
          </h2>

          <div className="grid gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left: NEPacketTunnelProvider + cert management */}
            <div className="space-y-8">
              <div>
                <h3 className="mb-3 text-lg font-semibold">NEPacketTunnelProvider</h3>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  Core component that configures proxy-only VPN network settings via
                  NEProxySettings. Starts the local MITM proxy and applies system proxy rules
                  without routing packets. Runs in a separate process with elevated network
                  privileges.
                </p>
                <CodeBlock className="language-swift">
                  {`final class PacketTunnelProvider: NEPacketTunnelProvider`}
                </CodeBlock>
              </div>

              <div>
                <h3 className="mb-3 text-lg font-semibold">Certificate management</h3>
                <p className="leading-relaxed text-muted-foreground">
                  On-device certificate authority generates a root CA on first launch. The user
                  installs the root cert via Settings → General → VPN &amp; Device Management. The
                  extension dynamically generates leaf certificates matching intercepted domains.
                  Private keys never leave the device.
                </p>
              </div>
            </div>

            {/* Right: Pipeline steps */}
            <div>
              <h3 className="mb-4 text-lg font-semibold">Proxy processing pipeline</h3>
              <div className="space-y-3">
                {[
                  {
                    step: '1',
                    title: 'Proxy configuration',
                    body: 'Apply system proxy settings to route HTTP/HTTPS to the local MITM proxy. Start the proxy server and expose it on 127.0.0.1:8888.',
                  },
                  {
                    step: '2',
                    title: 'HTTP parsing',
                    body: 'Handle HTTP/1.1 and HTTP/2 requests and CONNECT tunnels. Track WebSocket upgrades, SSE connections, and request-response pairs.',
                  },
                  {
                    step: '3',
                    title: 'TLS interception',
                    body: 'When the local CA is trusted and MITM is enabled, dynamically generate leaf certificates. Decrypt and re-encrypt HTTPS traffic in the proxy for inspection.',
                  },
                  {
                    step: '4',
                    title: 'Storage and notifications',
                    body: 'Persist captures to the App Group container and notify the main app. Widgets and Live Activities update from shared storage.',
                  },
                ].map(({ step, title, body }) => (
                  <div key={step} className="flex gap-4 rounded-lg border p-4">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      {step}
                    </div>
                    <div>
                      <h4 className="mb-1 text-sm font-semibold">{title}</h4>
                      <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      <Separator />

      {/* ── Data Storage & IPC ── */}
      <PageSection className="border-y bg-muted/30">
        <div id="storage" className="mx-auto max-w-content scroll-mt-32">
          <h2 className="mb-6 text-xl font-bold tracking-tight sm:text-2xl md:text-3xl">
            Data storage and IPC
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="mb-3 font-semibold">App Groups</h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                Shared container enables communication between main app and extension. Both
                processes can read and write to the shared directory. Used for configuration,
                captured traffic data, and coordination.
              </p>
              <CodeBlock className="language-text">
                {`group.com.trace.network-debugger`}
              </CodeBlock>
            </div>

            <div>
              <h3 className="mb-3 font-semibold">Persistent storage</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Structured storage for captured requests, responses, and configuration. Shared data
                accessible from app, extension, and widgets. Efficient querying with support for
                search and presets. Automatic cleanup with configurable retention policy.
              </p>
            </div>

            <div>
              <h3 className="mb-3 font-semibold">Real-time updates</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Extension writes new captures to shared storage. Main app observes data changes for
                live UI updates. Widgets receive notifications for Live Activity updates. Minimal
                latency between capture and display across all components.
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      <Separator />

      {/* ── Protocol Support ── */}
      <PageSection>
        <div id="protocols" className="mx-auto max-w-content scroll-mt-32">
          <h2 className="mb-6 text-xl font-bold tracking-tight sm:text-2xl md:text-3xl">
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
              description="Proxy-only mode captures HTTP/HTTPS for apps that honor system proxy settings. QUIC/HTTP/3 traffic is not captured. Apps that bypass proxy settings will not appear in captures."
            />
          </div>
        </div>
      </PageSection>

      <Separator />

      {/* ── Performance + Security: side by side ── */}
      <PageSection>
        <div className="mx-auto max-w-content">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div id="performance" className="scroll-mt-32">
              <h2 className="mb-6 text-xl font-bold tracking-tight sm:text-2xl">
                Performance considerations
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Proxy processing efficiency',
                    body: 'Minimal per-connection overhead to maintain network performance. Efficient buffering reduces memory allocations under load. Parsing work is scheduled off the critical path where possible.',
                  },
                  {
                    title: 'Memory management',
                    body: 'Extension memory budget is limited by iOS. Aggressive cleanup of processed proxy data. Writes captures to App Group storage as JSON files. Configurable retention policy prevents unbounded growth.',
                  },
                  {
                    title: 'Battery impact',
                    body: 'Background processing optimized for power efficiency. Proxy handling path is lightweight. Heavy parsing done asynchronously. Extension can be disabled when not actively debugging.',
                  },
                ].map(({ title, body }) => (
                  <div key={title} className="flex gap-4">
                    <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <div>
                      <h3 className="mb-1 text-sm font-semibold">{title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div id="security" className="scroll-mt-32">
              <h2 className="mb-6 text-xl font-bold tracking-tight sm:text-2xl">Security model</h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'On-device only',
                    body: 'All traffic capture and analysis happens locally. No data transmission to external servers. No telemetry or analytics collection.',
                  },
                  {
                    title: 'Root certificate trust',
                    body: 'TLS interception requires explicit user action to trust root CA. Certificate installation flow clearly explains implications. Users maintain full control over certificate trust.',
                  },
                  {
                    title: 'Data isolation',
                    body: 'Captured data stored in app sandbox. No access from other apps without explicit export. Optional encryption for sensitive captured data.',
                  },
                  {
                    title: 'Code transparency',
                    body: 'Entire codebase is open source and auditable. No obfuscation or hidden functionality. Build from source to verify binary integrity.',
                  },
                ].map(({ title, body }) => (
                  <div key={title} className="flex gap-4">
                    <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <div>
                      <h3 className="mb-1 text-sm font-semibold">{title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* ── Tech stack + docs CTA ── */}
      <EditorialBanner variant="muted">
        <h2 className="mb-2 text-xl font-bold tracking-tight sm:text-2xl">Built with</h2>
        <p className="mb-6 text-sm text-muted-foreground">Modern iOS frameworks and APIs.</p>
        <div className="mb-8 flex flex-wrap justify-center gap-1.5 sm:gap-2">
          {[
            'Swift 6.0',
            'SwiftUI',
            'Network Extension',
            'NEPacketTunnelProvider',
            'Network.framework',
            'WidgetKit',
            'Live Activities',
            'App Groups',
            'Keychain Services',
            'Swift Package Manager',
          ].map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <Button asChild variant="secondary">
          <Link href="/docs/architecture">
            <BookOpen className="mr-2 h-4 w-4" />
            Read the docs
          </Link>
        </Button>
      </EditorialBanner>
    </div>
  );
}
