import type { Metadata } from 'next';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { PageHeader } from '@/components/shared/page-header';
import { FeatureCard } from '@/components/marketing/feature-card';
import { FeatureSection } from '@/components/marketing/feature-section';
import { BulletList, BulletItem } from '@/components/shared/bullet-list';
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
  Lock,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Features',
  description:
    'Explore Trace iOS network debugger features: device-wide traffic capture, TLS MITM inspection, WebSocket & SSE support, traffic modification, PCAP export, and advanced filtering.',
  keywords: [
    'iOS network debugger features',
    'TLS MITM inspection',
    'WebSocket debugging iOS',
    'traffic capture iOS',
    'HTTP proxy iOS',
    'network modification tools',
  ],
  openGraph: {
    title: 'Features - Trace iOS Network Debugger',
    description:
      'Complete toolkit for iOS network debugging: traffic capture, TLS inspection, WebSocket support, and advanced modification tools.',
    url: '/features',
  },
  alternates: {
    canonical: '/features',
  },
};

export default function FeaturesPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        icon={Zap}
        title="Features"
        description="A complete toolkit for network debugging and analysis. Built for iOS developers who need precise, low-level visibility."
      />

      <Separator />

      {/* Core Features */}
      <section className="container py-section">
        <div className="mx-auto max-w-content">
          <h2 className="mb-8 text-xl font-bold tracking-tight sm:mb-10 sm:text-2xl md:mb-12">
            Core capabilities
          </h2>

          <div className="space-y-10 sm:space-y-12 md:space-y-16">
            <FeatureSection
              icon={Network}
              title="Device-wide traffic capture"
              description="Network Extension-based implementation provides system-level network access. Uses a proxy-only packet tunnel to configure system proxy settings and capture HTTP/HTTPS traffic. Apps must honor the system proxy for their traffic to be captured."
            >
              <BulletList>
                <BulletItem>Automatic capture for apps that respect the system proxy</BulletItem>
                <BulletItem>No per-app proxy configuration required</BulletItem>
                <BulletItem>Apps that ignore proxy settings will not be captured</BulletItem>
              </BulletList>
            </FeatureSection>

            <FeatureSection
              icon={Fingerprint}
              title="TLS inspection and MITM"
              description="On-device certificate authority enables transparent TLS interception. Dynamically generates certificates for intercepted domains to decrypt and inspect HTTPS traffic. All cryptographic operations happen locally with no external dependencies."
            >
              <BulletList>
                <BulletItem>Full request and response body visibility for HTTPS</BulletItem>
                <BulletItem>Certificate pinning detection indicators</BulletItem>
                <BulletItem>Root certificate management and trust configuration</BulletItem>
              </BulletList>
            </FeatureSection>

            <FeatureSection
              icon={Radio}
              title="WebSocket and SSE support"
              description="First-class support for real-time protocols. WebSocket frames and Server-Sent Events are captured, parsed, and displayed with full context. Frame-level inspection shows exact timing and content of bidirectional communication."
            >
              <BulletList>
                <BulletItem>WebSocket handshake and frame-by-frame analysis</BulletItem>
                <BulletItem>SSE event stream parsing and visualization</BulletItem>
                <BulletItem>Real-time connection status and message flow</BulletItem>
              </BulletList>
            </FeatureSection>

            <FeatureSection
              icon={Layers}
              title="Comprehensive request analysis"
              description="Complete visibility into every aspect of HTTP transactions. Headers, body, timing breakdown, size analysis, and protocol metadata all accessible in a structured format. Supports multiple body formats with syntax highlighting and advanced protocol features."
            >
              <BulletList>
                <BulletItem>JSON, XML, images, SVG, and multipart body inspection</BulletItem>
                <BulletItem>HTTP/2 stream info with HPACK table viewer</BulletItem>
                <BulletItem>TLS certificate chain details and MITM status</BulletItem>
                <BulletItem>Request comparison and timeline visualization</BulletItem>
              </BulletList>
            </FeatureSection>
          </div>
        </div>
      </section>

      <Separator />

      {/* Advanced Features */}
      <section className="container py-section">
        <div className="mx-auto max-w-content">
          <h2 className="mb-8 text-xl font-bold tracking-tight sm:mb-10 sm:text-2xl md:mb-12">
            Advanced tools
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6">
            <FeatureCard
              icon={Repeat}
              title="Request Builder and cURL"
              description="Built-in request builder to craft and send custom requests. Import cURL commands directly or export requests as cURL. Replay captured requests with full modification capabilities."
            />
            <FeatureCard
              icon={Filter}
              title="Advanced filtering and grouping"
              description="Filter traffic by domain, method, status code, content type, or custom patterns. Save filter presets for common debugging scenarios. Group requests by domain or session for better organization."
            />
            <FeatureCard
              icon={Search}
              title="Full-text search"
              description="Search across all captured request and response content. Find specific API endpoints, header values, or body content. Supports regex patterns for advanced queries."
            />
            <FeatureCard
              icon={Download}
              title="Import and export"
              description="HAR import and export for comprehensive traffic analysis. Optional PCAP export of captured HTTP frames for offline analysis. Import/export configuration including rewrite rules, request maps, scripts, and hosts."
            />
            <FeatureCard
              icon={Activity}
              title="PCAP capture"
              description="Capture HTTP request/response frames in PCAP format. Useful for offline protocol inspection and debugging. Configurable capture limits to keep files manageable."
            />
            <FeatureCard
              icon={Eye}
              title="Live activity indicators"
              description="WidgetKit integration shows real-time network statistics. Live Activities display active request counts and data transfer. At-a-glance visibility without opening the app."
            />
          </div>
        </div>
      </section>

      <Separator />

      {/* Traffic Modification Tools */}
      <section className="container py-section">
        <div className="mx-auto max-w-content">
          <h2 className="mb-8 text-xl font-bold tracking-tight sm:mb-10 sm:text-2xl md:mb-12">
            Traffic modification and manipulation
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6">
            <FeatureCard
              title="Rewrite rules"
              description="Create rules to automatically modify requests and responses. Change headers, URLs, or body content based on patterns. Test different scenarios without modifying application code."
            />
            <FeatureCard
              title="Request maps"
              description="Map requests to custom responses or redirect to different endpoints. Mock API responses for offline development. Test edge cases and error handling."
            />
            <FeatureCard
              title="Host overrides"
              description="Override DNS resolution to redirect traffic to different servers. Test against staging or development environments. Custom hosts file directly in the app."
            />
            <FeatureCard
              title="Breakpoints"
              description="Pause requests before they are sent or responses before they are delivered. Inspect and modify traffic in real-time. Interactive debugging for network issues."
            />
            <FeatureCard
              title="JavaScript scripts"
              description="Write custom JavaScript to programmatically modify traffic. Advanced automation for complex modification scenarios. Full access to request and response objects."
            />
            <FeatureCard
              title="Network throttling"
              description="Simulate different network conditions with custom profiles. Test application behavior under poor connectivity. Configure bandwidth limits, latency, and packet loss."
            />
          </div>
        </div>
      </section>

      <Separator />

      {/* Built-in Utilities */}
      <section className="container py-section">
        <div className="mx-auto max-w-content">
          <h2 className="mb-8 text-xl font-bold tracking-tight sm:mb-10 sm:text-2xl md:mb-12">
            Built-in utilities
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6 lg:grid-cols-3">
            <FeatureCard
              title="Base64 encoder/decoder"
              titleClassName="text-lg"
              description="Encode and decode Base64 strings directly in the app."
            />
            <FeatureCard
              title="URL encoder/decoder"
              titleClassName="text-lg"
              description="URL encode and decode for query parameters and paths."
            />
            <FeatureCard
              title="JSON formatter"
              titleClassName="text-lg"
              description="Format and validate JSON with syntax highlighting."
            />
            <FeatureCard
              title="Hash generator"
              titleClassName="text-lg"
              description="Generate MD5, SHA-1, SHA-256 hashes for strings."
            />
            <FeatureCard
              title="Timestamp converter"
              titleClassName="text-lg"
              description="Convert between Unix timestamps and human-readable dates."
            />
            <FeatureCard
              title="Certificate guide"
              titleClassName="text-lg"
              description="Step-by-step guide for CA installation and trust setup."
            />
          </div>
        </div>
      </section>

      <Separator />

      {/* Performance & Privacy */}
      <section className="container py-section">
        <div className="mx-auto max-w-content">
          <h2 className="mb-8 text-xl font-bold tracking-tight sm:mb-10 sm:text-2xl md:mb-12">
            Performance and privacy
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 sm:gap-7 md:gap-8">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg border bg-muted/50 p-2">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Optimized for efficiency</h3>
              </div>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                Designed to minimize battery and performance impact during capture sessions.
                Efficient packet processing and memory management allow for extended debugging
                sessions.
              </p>
              <BulletList>
                <BulletItem>Minimal CPU overhead during active capture</BulletItem>
                <BulletItem>Efficient memory usage with automatic cleanup</BulletItem>
                <BulletItem>Background processing optimized for battery life</BulletItem>
              </BulletList>
            </div>

            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg border bg-muted/50 p-2">
                  <Lock className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Privacy-first architecture</h3>
              </div>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                All traffic capture and analysis happens entirely on-device. No data leaves your
                device. No telemetry. No analytics. Complete control over your debugging data.
              </p>
              <BulletList>
                <BulletItem>Zero network communication from the tool itself</BulletItem>
                <BulletItem>Local storage with optional encryption</BulletItem>
                <BulletItem>No third-party dependencies or tracking</BulletItem>
              </BulletList>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Technical Stack */}
      <section className="container py-section">
        <div className="mx-auto max-w-readable text-center">
          <h2 className="mb-3 text-xl font-bold tracking-tight sm:mb-4 sm:text-2xl">
            Built with modern iOS technologies
          </h2>
          <p className="mb-6 text-sm text-muted-foreground sm:mb-8 sm:text-base">
            Leverages Apple&apos;s latest frameworks and APIs for reliability and performance.
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
              WidgetKit
            </Badge>
            <Badge variant="secondary" className="text-xs">
              Live Activities
            </Badge>
            <Badge variant="secondary" className="text-xs">
              App Groups
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
