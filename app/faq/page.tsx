import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { PageHeader } from '@/components/shared/page-header';
import { PageSection } from '@/components/shared/page-section';
import { HelpCircle, Github, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Common questions about Trace iOS network debugger: installation, certificate setup, traffic capture, troubleshooting, privacy, and open source contributions.',
  keywords: [
    'Trace FAQ',
    'iOS network debugger help',
    'TLS certificate setup',
    'network capture troubleshooting',
    'Trace questions',
  ],
  openGraph: {
    title: 'FAQ - Trace iOS Network Debugger',
    description: 'Find answers to common questions about using Trace for iOS network debugging.',
    url: '/faq',
  },
  alternates: {
    canonical: '/faq',
  },
};

// FAQ structured data for rich snippets in search results
const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I install Trace?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Trace is currently available via TestFlight. Join the beta at testflight.apple.com/join/fmYFd8ud. You'll need iOS 16.0 or later and a physical device (Network Extension doesn't work in the simulator).",
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to install a certificate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Only if you want to inspect HTTPS traffic. For HTTP-only debugging, no certificate is needed. To inspect HTTPS, generate the root CA in Trace, install the profile, and enable full trust in Settings.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Trace capture WebSocket traffic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Trace has first-class WebSocket support. It captures the initial HTTP upgrade handshake and all subsequent WebSocket frames (text, binary, ping, pong, close).',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Trace capture traffic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Trace uses a Network Extension packet tunnel provider to configure system-level proxy settings. When capture is active, iOS routes HTTP/HTTPS traffic through Trace's local proxy server.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is TLS MITM and is it safe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TLS Man-in-the-Middle (MITM) is a technique for inspecting encrypted HTTPS traffic. Trace generates a root CA on your device that never leaves it, making it safe for debugging purposes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is my captured data secure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Captured data is stored in your device's App Group container with standard iOS sandbox protections. Trace doesn't send any data off your device.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is Trace really open source?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Trace is licensed under MIT, one of the most permissive open source licenses. The complete source code is on GitHub.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use Trace on the simulator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No. Network Extension packet tunnels require entitlements that only work on physical devices. Apple doesn't allow Network Extensions in the iOS simulator.",
      },
    },
  ],
};

export default function FAQPage() {
  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <PageHeader
        icon={HelpCircle}
        title="Frequently Asked Questions"
        description={
          <>
            Quick answers to common questions about Trace. Can&apos;t find what you&apos;re looking
            for? Check the{' '}
            <Link href="/docs" className="text-primary hover:underline">
              documentation
            </Link>{' '}
            or{' '}
            <Link href="/support" className="text-primary hover:underline">
              get support
            </Link>
            .
          </>
        }
      />

      <Separator />

      {/* Getting Started */}
      <PageSection>
        <div className="mx-auto max-w-readable">
          <h2 className="mb-6 text-xl font-bold tracking-tight sm:mb-8 sm:text-2xl">
            Getting started
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I install Trace?</AccordionTrigger>
              <AccordionContent>
                Trace is currently available via TestFlight. Join the beta at{' '}
                <a
                  href="https://testflight.apple.com/join/fmYFd8ud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  testflight.apple.com/join/fmYFd8ud
                </a>
                . You&apos;ll need iOS 16.0 or later and a physical device (Network Extension
                doesn&apos;t work in the simulator). Once installed, open Trace and follow the
                onboarding flow to enable the VPN permission.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Do I need to install a certificate?</AccordionTrigger>
              <AccordionContent>
                Only if you want to inspect HTTPS traffic. For HTTP-only debugging, no certificate
                is needed. To inspect HTTPS: 1) Generate the root CA in Trace, 2) Install the
                profile in Settings &gt; VPN &amp; Device Management, 3) Enable full trust in
                Settings &gt; General &gt; About &gt; Certificate Trust Settings. See the{' '}
                <Link href="/docs/certificates" className="text-primary hover:underline">
                  certificate guide
                </Link>{' '}
                for detailed instructions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Why isn&apos;t Trace capturing any traffic?</AccordionTrigger>
              <AccordionContent>
                Check these common issues: 1) Is capture started? Tap the start button in the
                Network tab. 2) Is the VPN permission enabled? iOS will prompt on first use. 3) Does
                the app honor system proxy settings? Some apps bypass proxy configuration. 4) Is the
                app generating network traffic? Try opening Safari or another app. If traffic still
                isn&apos;t captured, see the{' '}
                <Link href="/support" className="text-primary hover:underline">
                  support page
                </Link>{' '}
                for troubleshooting steps.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Can I use Trace on the simulator?</AccordionTrigger>
              <AccordionContent>
                No. Network Extension packet tunnels require entitlements that only work on physical
                devices. Apple doesn&apos;t allow Network Extensions in the iOS simulator. You must
                use a physical iPhone or iPad running iOS 16.0 or later.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Do I need a desktop app or companion software?</AccordionTrigger>
              <AccordionContent>
                No. Trace runs entirely on your iOS device. There&apos;s no desktop app, no
                companion software, and no cloud service. Everything happens on-device. You can
                export captures as HAR or PCAP files if you want to analyze them on a computer, but
                it&apos;s not required.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </PageSection>

      <Separator />

      {/* Features */}
      <PageSection>
        <div className="mx-auto max-w-readable">
          <h2 className="mb-6 text-xl font-bold tracking-tight sm:mb-8 sm:text-2xl">Features</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Can Trace capture WebSocket traffic?</AccordionTrigger>
              <AccordionContent>
                Yes. Trace has first-class WebSocket support. It captures the initial HTTP upgrade
                handshake and all subsequent WebSocket frames (text, binary, ping, pong, close).
                Frames are displayed in chronological order with timestamps, direction, and full
                payload content. See the{' '}
                <Link href="/docs/websockets" className="text-primary hover:underline">
                  WebSocket documentation
                </Link>
                .
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                How do I modify requests before they&apos;re sent?
              </AccordionTrigger>
              <AccordionContent>
                Use rewrite rules, request maps, or JavaScript scripts. Rewrite rules let you modify
                headers, URLs, or body content based on patterns. Request maps redirect requests to
                mock responses or different endpoints. Scripts provide programmatic control for
                complex modifications. Configure these in Settings &gt; Modification Tools. See the{' '}
                <Link href="/docs/rewrite-rules" className="text-primary hover:underline">
                  rewrite rules
                </Link>{' '}
                and{' '}
                <Link href="/docs/request-maps" className="text-primary hover:underline">
                  request maps
                </Link>{' '}
                documentation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Can I export captures to analyze on my computer?</AccordionTrigger>
              <AccordionContent>
                Yes. Trace supports HAR export (industry standard format compatible with Chrome
                DevTools, Charles, and other tools) and optional PCAP export for low-level protocol
                analysis. You can also export individual requests as cURL commands. Export options
                are in the session menu or long-press on individual requests.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Does Trace support HTTP/2 and HTTP/3?</AccordionTrigger>
              <AccordionContent>
                HTTP/2 is fully supported including stream information and HPACK header compression
                details. HTTP/3 (QUIC) is not currently supported because it runs over UDP rather
                than TCP. Most apps fall back to HTTP/2 or HTTP/1.1 when HTTP/3 isn&apos;t
                available, so you&apos;ll still capture traffic—just not over HTTP/3.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Can I use Trace for native app debugging?</AccordionTrigger>
              <AccordionContent>
                Yes. Trace captures traffic from any iOS app that honors system proxy settings,
                including your own apps during development, third-party apps, Safari, and system
                services. It&apos;s particularly useful for debugging API integrations, testing
                against staging servers, and validating network behavior in real-world conditions.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </PageSection>

      <Separator />

      {/* Technical */}
      <PageSection>
        <div className="mx-auto max-w-readable">
          <h2 className="mb-6 text-xl font-bold tracking-tight sm:mb-8 sm:text-2xl">Technical</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How does Trace capture traffic?</AccordionTrigger>
              <AccordionContent>
                Trace uses a Network Extension packet tunnel provider to configure system-level
                proxy settings. When capture is active, iOS routes HTTP/HTTPS traffic through
                Trace&apos;s local proxy server. The proxy intercepts requests, logs them, applies
                any modifications, and forwards them to the destination. This approach works for
                apps that honor system proxy settings. See the{' '}
                <Link href="/docs/architecture" className="text-primary hover:underline">
                  architecture documentation
                </Link>{' '}
                for technical details.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>What is TLS MITM and is it safe?</AccordionTrigger>
              <AccordionContent>
                TLS Man-in-the-Middle (MITM) is a technique for inspecting encrypted HTTPS traffic.
                Trace generates a root certificate authority (CA) on your device. When you trust
                this CA, Trace can dynamically generate certificates for intercepted domains,
                allowing it to decrypt and inspect traffic. This is safe for debugging because: 1)
                The CA never leaves your device, 2) You control when it&apos;s trusted, 3) You can
                remove it anytime. Never install CAs from untrusted sources. See{' '}
                <Link href="/blog/how-tls-mitm-works" className="text-primary hover:underline">
                  how TLS MITM works
                </Link>
                .
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Why do some HTTPS requests show as encrypted?</AccordionTrigger>
              <AccordionContent>
                This usually means certificate pinning is preventing MITM inspection. Apps using
                certificate pinning reject Trace&apos;s dynamically generated certificates even when
                your device trusts them. Trace will still capture metadata (URL, headers, timing)
                but can&apos;t decrypt the body. You&apos;ll see a warning icon on these requests.
                See the{' '}
                <Link href="/docs/cert-pinning" className="text-primary hover:underline">
                  certificate pinning documentation
                </Link>
                .
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Does Trace work with VPNs?</AccordionTrigger>
              <AccordionContent>
                Yes. Trace uses proxy configuration rather than routing all IP traffic, so it
                coexists with VPNs. You can have both a VPN and Trace active simultaneously. The VPN
                handles IP routing while Trace handles HTTP/HTTPS proxying at a higher layer. This
                is one reason we chose proxy mode over a traditional VPN implementation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>What data does Trace collect?</AccordionTrigger>
              <AccordionContent>
                Trace collects no telemetry, analytics, or usage data. Everything captured stays on
                your device. Trace doesn&apos;t communicate with any external servers except when
                forwarding your app&apos;s traffic to its intended destinations. There&apos;s no
                crash reporting, no analytics, and no tracking. The source code is open for
                verification.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </PageSection>

      <Separator />

      {/* Privacy & Security */}
      <PageSection>
        <div className="mx-auto max-w-readable">
          <h2 className="mb-6 text-xl font-bold tracking-tight sm:mb-8 sm:text-2xl">
            Privacy &amp; Security
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is my captured data secure?</AccordionTrigger>
              <AccordionContent>
                Captured data is stored in your device&apos;s App Group container with standard iOS
                sandbox protections. Other apps cannot access it. The root CA private key is stored
                with the same protections. Trace doesn&apos;t send any data off your device. You can
                optionally enable encryption for stored captures (coming in a future update).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                Should I remove the certificate when done debugging?
              </AccordionTrigger>
              <AccordionContent>
                It&apos;s a good security practice. When the certificate is installed and trusted,
                Trace can inspect all HTTPS traffic. Remove it in Settings &gt; General &gt; VPN
                &amp; Device Management when you&apos;re finished debugging. You can reinstall it
                anytime from within Trace. Capture will still work without the certificate—you just
                won&apos;t see HTTPS request/response bodies.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Can other people intercept my traffic with Trace?</AccordionTrigger>
              <AccordionContent>
                No. Trace&apos;s root CA is generated on your device and never leaves it. Only your
                device trusts this CA. Someone else would need physical access to your device, your
                passcode, and your explicit action to install and trust a certificate. Trace cannot
                intercept traffic on other devices or over the network.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Does Trace comply with privacy regulations?</AccordionTrigger>
              <AccordionContent>
                Trace collects no personal data and has no servers, so there&apos;s nothing to
                comply with regarding data collection. The tool itself is neutral—it&apos;s a
                debugging utility. If you&apos;re using Trace to debug apps that handle user data,
                ensure your development and debugging practices comply with relevant regulations
                (GDPR, CCPA, etc.).
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </PageSection>

      <Separator />

      {/* Troubleshooting */}
      <PageSection>
        <div className="mx-auto max-w-readable">
          <h2 className="mb-6 text-xl font-bold tracking-tight sm:mb-8 sm:text-2xl">
            Troubleshooting
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>The app crashes when I start capture</AccordionTrigger>
              <AccordionContent>
                Try these steps: 1) Force quit Trace and reopen, 2) Restart your device, 3) Delete
                and reinstall the TestFlight build, 4) Check if you&apos;re on the latest version.
                If the crash persists, please{' '}
                <a
                  href="https://github.com/Trace-iOS/Trace/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  file a bug report
                </a>{' '}
                with your iOS version and device model.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                I installed the certificate but HTTPS traffic is still encrypted
              </AccordionTrigger>
              <AccordionContent>
                After installing the profile, you must also enable full trust: Settings &gt; General
                &gt; About &gt; Certificate Trust Settings, then toggle on the Trace certificate.
                This second step is required for MITM to work. If it&apos;s already enabled, the app
                may be using certificate pinning. See the{' '}
                <Link href="/docs/cert-pinning" className="text-primary hover:underline">
                  certificate pinning documentation
                </Link>
                .
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Capture works but I see no requests</AccordionTrigger>
              <AccordionContent>
                The app you&apos;re testing may not honor system proxy settings. Some apps use
                custom networking stacks that bypass the proxy. Try Safari or a different app to
                verify Trace is working. If Safari traffic appears but your app doesn&apos;t, the
                app is bypassing the proxy. Full-tunnel mode (coming in a future update) will
                capture more traffic.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Performance is slow when capture is active</AccordionTrigger>
              <AccordionContent>
                Proxying adds latency, typically 10-50ms per request. If performance is worse: 1)
                Close other apps to free memory, 2) Clear old capture sessions, 3) Disable
                modification features you&apos;re not using (scripts, rewrite rules), 4) Use
                filtering to capture only relevant traffic. If slowness persists, please report it
                with device details.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>How do I report a bug?</AccordionTrigger>
              <AccordionContent>
                Open an issue on{' '}
                <a
                  href="https://github.com/Trace-iOS/Trace/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  GitHub
                </a>{' '}
                with: 1) Steps to reproduce, 2) Expected vs actual behavior, 3) iOS version and
                device model, 4) Trace version (in Settings &gt; About), 5) Screenshots if
                applicable. Good bug reports help us fix issues faster. See the{' '}
                <Link href="/support" className="text-primary hover:underline">
                  support page
                </Link>{' '}
                for other ways to get help.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </PageSection>

      <Separator />

      {/* Open Source */}
      <PageSection>
        <div className="mx-auto max-w-readable">
          <h2 className="mb-6 text-xl font-bold tracking-tight sm:mb-8 sm:text-2xl">Open source</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is Trace really open source?</AccordionTrigger>
              <AccordionContent>
                Yes. Trace is licensed under MIT, one of the most permissive open source licenses.
                The complete source code is on{' '}
                <a
                  href="https://github.com/Trace-iOS/Trace"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  GitHub
                </a>
                . You can read it, audit it, fork it, or contribute to it. Open source is core to
                the project&apos;s mission of building trust through transparency.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Can I contribute to Trace?</AccordionTrigger>
              <AccordionContent>
                Absolutely. Contributions are welcome in many forms: code, documentation, bug
                reports, feature requests, translations, and design feedback. See the{' '}
                <Link href="/contributing" className="text-primary hover:underline">
                  contributing guide
                </Link>{' '}
                for how to get started. First-time contributors are encouraged—we label issues as
                &quot;good first issue&quot; specifically for newcomers.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>How is Trace funded?</AccordionTrigger>
              <AccordionContent>
                Currently, Trace is a passion project funded by its creator. We&apos;re exploring
                sustainable funding models including GitHub Sponsors, optional paid features for
                enterprises, and community donations. The core debugging functionality will always
                remain free and open source. See the{' '}
                <Link href="/sponsors" className="text-primary hover:underline">
                  sponsors page
                </Link>{' '}
                for ways to support development.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Can I fork Trace for commercial use?</AccordionTrigger>
              <AccordionContent>
                Yes. The MIT license permits commercial use. You can fork Trace, modify it, and use
                it commercially without paying royalties. We ask that you: 1) Keep the MIT license
                notice, 2) Consider contributing improvements back to the main project, 3)
                Don&apos;t use the Trace name or logo in a way that implies official endorsement.
                See the LICENSE file in the repository for full terms.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </PageSection>

      <Separator />

      {/* CTA */}
      <PageSection>
        <div className="mx-auto max-w-readable text-center">
          <h2 className="mb-3 text-2xl font-bold tracking-tight sm:mb-4 sm:text-3xl">
            Still have questions?
          </h2>
          <p className="mb-6 text-sm text-muted-foreground sm:mb-8 sm:text-base">
            Check the documentation, get support, or reach out to the community.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <Button size="lg" asChild className="w-full sm:w-auto">
              <Link href="/docs">Read the docs</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full gap-2 sm:w-auto">
              <Link href="/support">
                <MessageCircle className="h-4 w-4" />
                Get support
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full gap-2 sm:w-auto">
              <a
                href="https://github.com/Trace-iOS/Trace/discussions"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                GitHub Discussions
              </a>
            </Button>
          </div>
        </div>
      </PageSection>
    </div>
  );
}
