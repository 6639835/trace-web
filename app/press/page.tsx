import type { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import { PageSection } from '@/components/shared/page-section';
import { MetricsStrip } from '@/components/sections/metrics-strip';
import { EditorialBanner } from '@/components/sections/editorial-banner';
import { Newspaper, Mail } from 'lucide-react';
import { EmailLink } from '@/components/shared/email-link';

export const metadata: Metadata = {
  title: 'Press Kit',
  description:
    'Trace press kit. Brand assets, logos, screenshots, and media resources for writing about the iOS network debugger.',
  keywords: ['Trace press kit', 'brand assets', 'media kit', 'logos', 'screenshots'],
  openGraph: {
    title: 'Press Kit - Trace',
    description: 'Brand assets and media resources for Trace iOS network debugger.',
    url: '/press',
  },
  alternates: {
    canonical: '/press',
  },
};

export default function PressPage() {
  return (
    <div className="flex flex-col">
      {/* ── Minimal left-aligned hero ── */}
      <section className="container py-section">
        <div className="mx-auto max-w-content">
          <div className="mb-3 flex items-center gap-2">
            <Newspaper className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium tracking-widest text-primary uppercase">
              Press Kit
            </span>
          </div>
          <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Media resources for Trace.
          </h1>
          <p className="max-w-readable text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
            Brand assets, copy, and contact information for journalists, bloggers, and content
            creators writing about Trace.
          </p>
        </div>
      </section>

      {/* ── Quick facts strip ── */}
      <MetricsStrip
        metrics={[
          { value: 'Free', label: 'Pricing' },
          { value: 'MIT', label: 'License' },
          { value: 'iOS 16+', label: 'Platform' },
          { value: 'Dec 2024', label: 'Launched' },
        ]}
      />

      {/* ── About Trace: 2-col — blurbs left, full bio right ── */}
      <PageSection spacing="lg">
        <div className="mx-auto max-w-content">
          <h2 className="mb-8 text-xl font-bold tracking-tight sm:mb-10 sm:text-2xl md:text-3xl">
            About Trace
          </h2>

          <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
            {/* Left: short + medium */}
            <div className="space-y-8">
              <div>
                <p className="mb-2 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                  Short (1–2 sentences)
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Trace is a free, open-source iOS network debugger that captures and inspects
                  HTTP(S), WebSocket, and SSE traffic entirely on-device. Built for developers who
                  need precise network visibility without compromising privacy.
                </p>
              </div>

              <div>
                <p className="mb-2 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                  Medium (1 paragraph)
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Trace brings professional-grade network debugging directly to iPhone and iPad.
                  Using Network Extension APIs, it captures device-wide HTTP(S) traffic, provides
                  TLS man-in-the-middle inspection with an on-device certificate authority, and
                  offers first-class support for real-time protocols like WebSocket and Server-Sent
                  Events. All processing happens locally—no data leaves your device. It&apos;s open
                  source, privacy-first, and designed for developers who need powerful debugging
                  tools on mobile.
                </p>
              </div>
            </div>

            {/* Right: long bio */}
            <div>
              <p className="mb-2 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                Long (2–3 paragraphs)
              </p>
              <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  Trace is an open-source iOS network debugger that captures and inspects network
                  traffic entirely on your device. Unlike traditional desktop tools, Trace runs
                  natively on iPhone and iPad, providing system-level network visibility without
                  requiring a computer or manual proxy configuration.
                </p>
                <p>
                  Built with Network Extension APIs, Trace implements device-wide HTTP(S) capture,
                  TLS man-in-the-middle inspection using an on-device certificate authority, and
                  dedicated support for WebSocket and Server-Sent Events protocols. It offers
                  traffic modification tools including rewrite rules, request maps, host overrides,
                  and JavaScript scripting for advanced debugging scenarios.
                </p>
                <p>
                  Trace is MIT-licensed and prioritizes privacy—all traffic capture and analysis
                  happens on-device with zero telemetry or external dependencies. The project is
                  community-driven, with active development guided by user feedback and open source
                  contributions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* ── Key features badge strip ── */}
      <div className="border-y bg-muted/30">
        <div className="container py-8 sm:py-10">
          <div className="mx-auto max-w-content">
            <p className="mb-4 text-xs font-semibold tracking-widest text-muted-foreground uppercase sm:mb-5">
              Key features
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                'Device-wide capture',
                'TLS MITM inspection',
                'WebSocket support',
                'Traffic modification',
                'Request builder',
                'HAR export',
                'PCAP export',
                'On-device processing',
                'Privacy-first',
                'Open source',
              ].map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Brand assets: 2-col grid ── */}
      <PageSection spacing="lg">
        <div className="mx-auto max-w-content">
          <h2 className="mb-8 text-xl font-bold tracking-tight sm:mb-10 sm:text-2xl md:text-3xl">
            Brand assets
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:gap-12">
            {/* Logos */}
            <div>
              <h3 className="mb-3 font-semibold">Logos</h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                SVG, PNG, and other formats for both light and dark backgrounds, available in the{' '}
                <a
                  href="https://github.com/Trace-iOS/Trace/tree/main/Assets"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  GitHub repository
                </a>
                .
              </p>
            </div>

            {/* Screenshots */}
            <div>
              <h3 className="mb-3 font-semibold">Screenshots</h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                High-resolution screenshots available on request. Contact for specific marketing
                materials or press inquiries.
              </p>
            </div>

            {/* Colors */}
            <div className="sm:col-span-2">
              <h3 className="mb-4 font-semibold">Brand colors</h3>
              <div className="flex flex-wrap gap-6">
                {[
                  { name: 'Primary Blue', hex: '#0073FF', bg: 'bg-[#0073FF]', border: '' },
                  {
                    name: 'Black',
                    hex: '#000000',
                    bg: 'bg-[#000000]',
                    border: 'dark:border dark:border-muted',
                  },
                  {
                    name: 'White',
                    hex: '#FFFFFF',
                    bg: 'bg-[#FFFFFF]',
                    border: 'border border-muted',
                  },
                ].map(({ name, hex, bg, border }) => (
                  <div key={hex} className="flex items-center gap-3">
                    <div className={`h-12 w-12 rounded-lg ${bg} ${border}`} />
                    <div>
                      <div className="text-sm font-medium">{name}</div>
                      <div className="font-mono text-xs text-muted-foreground">{hex}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* ── Usage guidelines ── */}
      <div className="border-y bg-muted/30">
        <div className="container py-section">
          <div className="mx-auto max-w-readable">
            <h2 className="mb-6 text-xl font-bold tracking-tight sm:text-2xl">Usage guidelines</h2>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="rounded-xl border bg-card p-4">
                <p className="mb-1 text-xs font-semibold tracking-wide text-emerald-600 uppercase dark:text-emerald-400">
                  Do
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Use the Trace name and logo when writing about the project, sharing tutorials, or
                  linking to the website.
                </p>
              </div>
              <div className="rounded-xl border bg-card p-4">
                <p className="mb-1 text-xs font-semibold tracking-wide text-emerald-600 uppercase dark:text-emerald-400">
                  Do
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Modify logo colors to fit your design as long as the mark remains recognizable.
                </p>
              </div>
              <div className="rounded-xl border bg-card p-4">
                <p className="mb-1 text-xs font-semibold tracking-wide text-amber-600 uppercase dark:text-amber-400">
                  Don&apos;t
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Use the Trace name or logo in a way that implies official endorsement without
                  permission.
                </p>
              </div>
              <div className="rounded-xl border bg-card p-4">
                <p className="mb-1 text-xs font-semibold tracking-wide text-amber-600 uppercase dark:text-amber-400">
                  Don&apos;t
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Modify the logo&apos;s proportions or add effects that distort the design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Media contact: editorial banner ── */}
      <EditorialBanner variant="muted">
        <Mail className="mx-auto mb-4 h-10 w-10 text-primary sm:h-12 sm:w-12" />
        <h2 className="mb-3 text-2xl font-bold tracking-tight sm:text-3xl">Media contact</h2>
        <p className="mb-6 text-sm text-muted-foreground sm:text-base">
          For press inquiries, interviews, or additional materials, reach out via email.
        </p>
        <EmailLink email="epa6643@gmail.com" />
      </EditorialBanner>
    </div>
  );
}
