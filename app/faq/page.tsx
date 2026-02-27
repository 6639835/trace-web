import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { EditorialBanner } from '@/components/sections/editorial-banner';
import { Github, MessageCircle, BookOpen } from 'lucide-react';

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

const sections = [
  {
    id: 'getting-started',
    label: 'Getting started',
    items: [
      {
        q: 'How do I install Trace?',
        a: (
          <>
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
          </>
        ),
      },
      {
        q: 'Do I need to install a certificate?',
        a: (
          <>
            Only if you want to inspect HTTPS traffic. For HTTP-only debugging, no certificate is
            needed. To inspect HTTPS: 1) Generate the root CA in Trace, 2) Install the profile in
            Settings &gt; VPN &amp; Device Management, 3) Enable full trust in Settings &gt; General
            &gt; About &gt; Certificate Trust Settings. See the{' '}
            <Link href="/docs/certificates" className="text-primary hover:underline">
              certificate guide
            </Link>{' '}
            for detailed instructions.
          </>
        ),
      },
      {
        q: "Why isn't Trace capturing any traffic?",
        a: (
          <>
            Check these common issues: 1) Is capture started? Tap the start button in the Network
            tab. 2) Is the VPN permission enabled? iOS will prompt on first use. 3) Does the app
            honor system proxy settings? Some apps bypass proxy configuration. 4) Is the app
            generating network traffic? Try opening Safari or another app. If traffic still
            isn&apos;t captured, see the{' '}
            <Link href="/support" className="text-primary hover:underline">
              support page
            </Link>{' '}
            for troubleshooting steps.
          </>
        ),
      },
      {
        q: 'Can I use Trace on the simulator?',
        a: "No. Network Extension packet tunnels require entitlements that only work on physical devices. Apple doesn't allow Network Extensions in the iOS simulator. You must use a physical iPhone or iPad running iOS 16.0 or later.",
      },
      {
        q: 'Do I need a desktop app or companion software?',
        a: "No. Trace runs entirely on your iOS device. There's no desktop app, no companion software, and no cloud service. Everything happens on-device. You can export captures as HAR or PCAP files if you want to analyze them on a computer, but it's not required.",
      },
    ],
  },
  {
    id: 'features',
    label: 'Features',
    items: [
      {
        q: 'Can Trace capture WebSocket traffic?',
        a: (
          <>
            Yes. Trace has first-class WebSocket support. It captures the initial HTTP upgrade
            handshake and all subsequent WebSocket frames (text, binary, ping, pong, close). Frames
            are displayed in chronological order with timestamps, direction, and full payload
            content. See the{' '}
            <Link href="/docs/websockets" className="text-primary hover:underline">
              WebSocket documentation
            </Link>
            .
          </>
        ),
      },
      {
        q: "How do I modify requests before they're sent?",
        a: (
          <>
            Use rewrite rules, request maps, or JavaScript scripts. Rewrite rules let you modify
            headers, URLs, or body content based on patterns. Request maps redirect requests to mock
            responses or different endpoints. Scripts provide programmatic control for complex
            modifications. Configure these in Settings &gt; Modification Tools. See the{' '}
            <Link href="/docs/rewrite-rules" className="text-primary hover:underline">
              rewrite rules
            </Link>{' '}
            and{' '}
            <Link href="/docs/request-maps" className="text-primary hover:underline">
              request maps
            </Link>{' '}
            documentation.
          </>
        ),
      },
      {
        q: 'Can I export captures to analyze on my computer?',
        a: 'Yes. Trace supports HAR export (industry standard format compatible with Chrome DevTools, Charles, and other tools) and optional PCAP export for low-level protocol analysis. You can also export individual requests as cURL commands. Export options are in the session menu or long-press on individual requests.',
      },
      {
        q: 'Does Trace support HTTP/2 and HTTP/3?',
        a: "HTTP/2 is fully supported including stream information and HPACK header compression details. HTTP/3 (QUIC) is not currently supported because it runs over UDP rather than TCP. Most apps fall back to HTTP/2 or HTTP/1.1 when HTTP/3 isn't available, so you'll still capture traffic—just not over HTTP/3.",
      },
      {
        q: 'Can I use Trace for native app debugging?',
        a: "Yes. Trace captures traffic from any iOS app that honors system proxy settings, including your own apps during development, third-party apps, Safari, and system services. It's particularly useful for debugging API integrations, testing against staging servers, and validating network behavior in real-world conditions.",
      },
    ],
  },
  {
    id: 'technical',
    label: 'Technical',
    items: [
      {
        q: 'How does Trace capture traffic?',
        a: (
          <>
            Trace uses a Network Extension packet tunnel provider to configure system-level proxy
            settings. When capture is active, iOS routes HTTP/HTTPS traffic through Trace&apos;s
            local proxy server. The proxy intercepts requests, logs them, applies any modifications,
            and forwards them to the destination. See the{' '}
            <Link href="/docs/architecture" className="text-primary hover:underline">
              architecture documentation
            </Link>{' '}
            for technical details.
          </>
        ),
      },
      {
        q: 'What is TLS MITM and is it safe?',
        a: (
          <>
            TLS Man-in-the-Middle (MITM) is a technique for inspecting encrypted HTTPS traffic.
            Trace generates a root certificate authority (CA) on your device. When you trust this
            CA, Trace can dynamically generate certificates for intercepted domains, allowing it to
            decrypt and inspect traffic. This is safe for debugging because: 1) The CA never leaves
            your device, 2) You control when it&apos;s trusted, 3) You can remove it anytime. Never
            install CAs from untrusted sources. See{' '}
            <Link href="/blog/how-tls-mitm-works" className="text-primary hover:underline">
              how TLS MITM works
            </Link>
            .
          </>
        ),
      },
      {
        q: 'Why do some HTTPS requests show as encrypted?',
        a: (
          <>
            This usually means certificate pinning is preventing MITM inspection. Apps using
            certificate pinning reject Trace&apos;s dynamically generated certificates even when
            your device trusts them. Trace will still capture metadata (URL, headers, timing) but
            can&apos;t decrypt the body. You&apos;ll see a warning icon on these requests. See the{' '}
            <Link href="/docs/cert-pinning" className="text-primary hover:underline">
              certificate pinning documentation
            </Link>
            .
          </>
        ),
      },
      {
        q: 'Does Trace work with VPNs?',
        a: 'Yes. Trace uses proxy configuration rather than routing all IP traffic, so it coexists with VPNs. You can have both a VPN and Trace active simultaneously. The VPN handles IP routing while Trace handles HTTP/HTTPS proxying at a higher layer.',
      },
      {
        q: 'What data does Trace collect?',
        a: "Trace collects no telemetry, analytics, or usage data. Everything captured stays on your device. Trace doesn't communicate with any external servers except when forwarding your app's traffic to its intended destinations. There's no crash reporting, no analytics, and no tracking. The source code is open for verification.",
      },
    ],
  },
  {
    id: 'privacy',
    label: 'Privacy & Security',
    items: [
      {
        q: 'Is my captured data secure?',
        a: "Captured data is stored in your device's App Group container with standard iOS sandbox protections. Other apps cannot access it. The root CA private key is stored with the same protections. Trace doesn't send any data off your device. You can optionally enable encryption for stored captures (coming in a future update).",
      },
      {
        q: 'Should I remove the certificate when done debugging?',
        a: "It's a good security practice. When the certificate is installed and trusted, Trace can inspect all HTTPS traffic. Remove it in Settings > General > VPN & Device Management when you're finished debugging. You can reinstall it anytime from within Trace. Capture will still work without the certificate—you just won't see HTTPS request/response bodies.",
      },
      {
        q: 'Can other people intercept my traffic with Trace?',
        a: "No. Trace's root CA is generated on your device and never leaves it. Only your device trusts this CA. Someone else would need physical access to your device, your passcode, and your explicit action to install and trust a certificate.",
      },
      {
        q: 'Does Trace comply with privacy regulations?',
        a: "Trace collects no personal data and has no servers, so there's nothing to comply with regarding data collection. The tool itself is neutral—it's a debugging utility. If you're using Trace to debug apps that handle user data, ensure your development and debugging practices comply with relevant regulations (GDPR, CCPA, etc.).",
      },
    ],
  },
  {
    id: 'troubleshooting',
    label: 'Troubleshooting',
    items: [
      {
        q: 'The app crashes when I start capture',
        a: (
          <>
            Try these steps: 1) Force quit Trace and reopen, 2) Restart your device, 3) Delete and
            reinstall the TestFlight build, 4) Check if you&apos;re on the latest version. If the
            crash persists, please{' '}
            <a
              href="https://github.com/Trace-iOS/Trace/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              file a bug report
            </a>{' '}
            with your iOS version and device model.
          </>
        ),
      },
      {
        q: 'I installed the certificate but HTTPS traffic is still encrypted',
        a: (
          <>
            After installing the profile, you must also enable full trust: Settings &gt; General
            &gt; About &gt; Certificate Trust Settings, then toggle on the Trace certificate. This
            second step is required for MITM to work. If it&apos;s already enabled, the app may be
            using certificate pinning. See the{' '}
            <Link href="/docs/cert-pinning" className="text-primary hover:underline">
              certificate pinning documentation
            </Link>
            .
          </>
        ),
      },
      {
        q: 'Capture works but I see no requests',
        a: "The app you're testing may not honor system proxy settings. Some apps use custom networking stacks that bypass the proxy. Try Safari or a different app to verify Trace is working. If Safari traffic appears but your app doesn't, the app is bypassing the proxy.",
      },
      {
        q: 'Performance is slow when capture is active',
        a: "Proxying adds latency, typically 10-50ms per request. If performance is worse: 1) Close other apps to free memory, 2) Clear old capture sessions, 3) Disable modification features you're not using (scripts, rewrite rules), 4) Use filtering to capture only relevant traffic.",
      },
      {
        q: 'How do I report a bug?',
        a: (
          <>
            Open an issue on{' '}
            <a
              href="https://github.com/Trace-iOS/Trace/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              GitHub
            </a>{' '}
            with: 1) Steps to reproduce, 2) Expected vs actual behavior, 3) iOS version and device
            model, 4) Trace version (in Settings &gt; About), 5) Screenshots if applicable.
          </>
        ),
      },
    ],
  },
  {
    id: 'open-source',
    label: 'Open source',
    items: [
      {
        q: 'Is Trace really open source?',
        a: (
          <>
            Yes. Trace is licensed under MIT, one of the most permissive open source licenses. The
            complete source code is on{' '}
            <a
              href="https://github.com/Trace-iOS/Trace"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              GitHub
            </a>
            . Open source is core to the project&apos;s mission of building trust through
            transparency.
          </>
        ),
      },
      {
        q: 'Can I contribute to Trace?',
        a: (
          <>
            Absolutely. Contributions are welcome in many forms: code, documentation, bug reports,
            feature requests, and design feedback. See the{' '}
            <Link href="/contributing" className="text-primary hover:underline">
              contributing guide
            </Link>{' '}
            for how to get started.
          </>
        ),
      },
      {
        q: 'How is Trace funded?',
        a: (
          <>
            Currently, Trace is a passion project funded by its creator. We&apos;re exploring
            sustainable funding models including GitHub Sponsors and community donations. The core
            debugging functionality will always remain free and open source. See the{' '}
            <Link href="/sponsors" className="text-primary hover:underline">
              sponsors page
            </Link>{' '}
            for ways to support development.
          </>
        ),
      },
      {
        q: 'Can I fork Trace for commercial use?',
        a: "Yes. The MIT license permits commercial use. You can fork Trace, modify it, and use it commercially without paying royalties. We ask that you keep the MIT license notice, consider contributing improvements back to the main project, and don't use the Trace name or logo in a way that implies official endorsement.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      {/* ── 2-col layout: sticky section nav left, content right ── */}
      <div className="container py-section">
        <div className="mx-auto max-w-content">
          <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-16">
            {/* Left: sticky section nav (desktop only) */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <p className="mb-3 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                  Sections
                </p>
                <nav className="flex flex-col gap-1">
                  {sections.map(({ id, label }) => (
                    <a
                      key={id}
                      href={`#${id}`}
                      className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                      {label}
                    </a>
                  ))}
                </nav>
                <div className="mt-8 border-t pt-6">
                  <p className="mb-3 text-xs text-muted-foreground">Still stuck?</p>
                  <div className="flex flex-col gap-2">
                    <Link
                      href="/docs"
                      className="flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      <BookOpen className="h-3.5 w-3.5" />
                      Read the docs
                    </Link>
                    <Link
                      href="/support"
                      className="flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      Get support
                    </Link>
                  </div>
                </div>
              </div>
            </aside>

            {/* Right: FAQ content */}
            <div>
              {/* Mobile header */}
              <div className="mb-8 lg:hidden">
                <h1 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">
                  Frequently Asked Questions
                </h1>
                <p className="text-sm text-muted-foreground sm:text-base">
                  Quick answers to common questions. Can&apos;t find what you&apos;re looking for?{' '}
                  <Link href="/docs" className="text-primary hover:underline">
                    Check the docs
                  </Link>{' '}
                  or{' '}
                  <Link href="/support" className="text-primary hover:underline">
                    get support
                  </Link>
                  .
                </p>
              </div>

              {/* Desktop header */}
              <div className="mb-10 hidden lg:block">
                <h1 className="mb-2 text-4xl font-bold tracking-tight md:text-5xl">
                  Frequently Asked Questions
                </h1>
                <p className="max-w-readable text-muted-foreground">
                  Quick answers to common questions. Can&apos;t find what you&apos;re looking for?{' '}
                  <Link href="/docs" className="text-primary hover:underline">
                    Check the docs
                  </Link>{' '}
                  or{' '}
                  <Link href="/support" className="text-primary hover:underline">
                    get support
                  </Link>
                  .
                </p>
              </div>

              {/* Mobile section pills */}
              <div className="mb-6 flex flex-wrap gap-1.5 lg:hidden">
                {sections.map(({ id, label }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground hover:border-primary/50 hover:text-foreground"
                  >
                    {label}
                  </a>
                ))}
              </div>

              <div className="space-y-12">
                {sections.map(({ id, label, items }) => (
                  <div key={id} id={id} className="scroll-mt-20">
                    <h2 className="mb-4 text-lg font-bold tracking-tight sm:text-xl">{label}</h2>
                    <Accordion type="single" collapsible className="w-full">
                      {items.map((item, i) => (
                        <AccordionItem key={i} value={`${id}-${i}`}>
                          <AccordionTrigger>{item.q}</AccordionTrigger>
                          <AccordionContent>{item.a}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Still stuck? editorial banner ── */}
      <EditorialBanner variant="muted">
        <h2 className="mb-3 text-2xl font-bold tracking-tight sm:text-3xl">
          Still have questions?
        </h2>
        <p className="mb-8 text-sm text-muted-foreground sm:text-base">
          Check the documentation, get support, or reach out to the community.
        </p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
          <Button size="lg" asChild>
            <Link href="/docs">
              <BookOpen className="mr-2 h-5 w-5" />
              Read the docs
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/support">
              <MessageCircle className="mr-2 h-4 w-4" />
              Get support
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a
              href="https://github.com/Trace-iOS/Trace/discussions"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub Discussions
            </a>
          </Button>
        </div>
      </EditorialBanner>
    </div>
  );
}
