import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { PageHeader } from '@/components/shared/page-header';
import { PageSection } from '@/components/shared/page-section';
import {
  ScrollText,
  Plus,
  Wrench,
  Bug,
  ArrowRight,
  Tag,
  GitCommit,
  Code,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Changelog',
  description:
    'See what\u2019s new in Trace. A detailed history of every release, feature addition, bug fix, and improvement to the iOS network debugger.',
  keywords: [
    'Trace changelog',
    'Trace release notes',
    'Trace updates',
    'iOS network debugger updates',
    'Trace version history',
  ],
  openGraph: {
    title: 'Changelog | Trace',
    description:
      'A detailed history of every release, feature addition, bug fix, and improvement to Trace.',
    url: '/changelog',
  },
  alternates: {
    canonical: '/changelog',
  },
};

type ChangeCategory = 'added' | 'improved' | 'fixed';

interface Change {
  category: ChangeCategory;
  description: string;
}

interface Release {
  version: string;
  date: string;
  title: string;
  summary: string;
  badge: 'Major' | 'Patch' | 'Unreleased';
  changes: Change[];
}

const categoryConfig: Record<
  ChangeCategory,
  { label: string; icon: React.ElementType; className: string }
> = {
  added: {
    label: 'Added',
    icon: Plus,
    className: 'text-emerald-600 dark:text-emerald-400',
  },
  improved: {
    label: 'Improved',
    icon: Wrench,
    className: 'text-blue-600 dark:text-blue-400',
  },
  fixed: {
    label: 'Fixed',
    icon: Bug,
    className: 'text-amber-600 dark:text-amber-400',
  },
};

const releases: Release[] = [
  {
    version: 'Next',
    date: '',
    title: 'cURL Import & SwiftNIO Migration',
    summary:
      'Full cURL command import with an in-process runtime, and a ground-up rewrite of the networking stack on SwiftNIO and AsyncHTTPClient.',
    badge: 'Unreleased',
    changes: [
      {
        category: 'added',
        description: 'cURL command import with analyzer-driven execution and multi-transfer planning',
      },
      {
        category: 'added',
        description: 'In-process curl runtime with mbedTLS-backed TLS and HTTP/2 via nghttp2',
      },
      {
        category: 'added',
        description: 'Permission-aware import outcomes with local-network retry heuristics',
      },
      {
        category: 'added',
        description: 'UDP PCAP analysis and hardened flow capture lifecycle',
      },
      {
        category: 'added',
        description: 'Duplicate detection and editor diagnostics in the UI',
      },
      {
        category: 'added',
        description: 'Capture cleanup actions and resilient auto-load fallback',
      },
      {
        category: 'improved',
        description: 'Migrated certificate handling to swift-certificates and compression to libzstd',
      },
      {
        category: 'improved',
        description: 'Request executor and networking rewritten on AsyncHTTPClient',
      },
      {
        category: 'improved',
        description: 'SOCKS5 and UDP forwarding migrated to NIO Transport Services',
      },
      {
        category: 'improved',
        description: 'MITM proxy internals rebuilt on NIO channel pipelines',
      },
      {
        category: 'improved',
        description: 'Removed legacy protocol parsers and curl runtime',
      },
      {
        category: 'fixed',
        description: 'cURL parser handling of line continuations after quoted arguments',
      },
      {
        category: 'fixed',
        description: 'Failed transfers no longer block cURL import completion',
      },
      {
        category: 'fixed',
        description: 'Request duration now renders above size in list rows',
      },
      {
        category: 'fixed',
        description: 'Input-specific keyboard types applied across all UI forms',
      },
      {
        category: 'fixed',
        description: 'Zstd single-chunk streaming decode now flushes completed frames',
      },
      {
        category: 'fixed',
        description: 'Captured bytes retained for truncated response bodies',
      },
      {
        category: 'fixed',
        description: 'SOCKS5 UDP setup hardened with normalized full-tunnel config',
      },
      {
        category: 'fixed',
        description: 'MITM CONNECT and streaming proxy pipeline stabilized',
      },
      {
        category: 'fixed',
        description: 'PCAP writes batched to avoid duplicate full-tunnel capture',
      },
      {
        category: 'fixed',
        description: 'Tunnel shutdown paths synchronized with tighter redirect handling',
      },
    ],
  },
  {
    version: '1.0.4',
    date: 'February 7, 2026',
    title: 'SOCKS5 Fallback & Widgets',
    summary:
      'Embedded local SOCKS5 fallback for environments without VPN tunneling, privacy-safe widget labels, and UX refinements across share sheets and toasts.',
    badge: 'Patch',
    changes: [
      {
        category: 'added',
        description: 'Local SOCKS5 fallback embedded for environments where VPN tunneling is unavailable',
      },
      {
        category: 'added',
        description: 'Privacy-safe widget labels with deep-link tab navigation',
      },
      {
        category: 'added',
        description: 'Clear-all confirmation alerts across network and rule list views',
      },
      {
        category: 'added',
        description: 'Notification permission prompt moved from onboarding to settings',
      },
      {
        category: 'improved',
        description: 'Body inspector extracted with cleaner action and view-model structure',
      },
      {
        category: 'fixed',
        description: 'Share sheet presented directly to avoid blank host canvas',
      },
      {
        category: 'fixed',
        description: 'Active session durations now tick correctly with clamped negative times',
      },
      {
        category: 'fixed',
        description: 'Chunked and compressed SSE streams decoded with live snapshot persistence',
      },
      {
        category: 'fixed',
        description: 'Stray menu dividers removed from rule list views',
      },
      {
        category: 'fixed',
        description: 'Toast sized to content with centered text',
      },
    ],
  },
  {
    version: '1.0.3',
    date: 'February 4, 2026',
    title: 'IPv6, Widgets & Stability',
    summary:
      'IPv6 VPN capture, App Shortcuts and Control Center integration, settings reorganization, and a major stability pass across compression, PCAP, and concurrency.',
    badge: 'Patch',
    changes: [
      {
        category: 'added',
        description: 'IPv6 support for VPN capture and VPN log export',
      },
      {
        category: 'added',
        description: 'App Shortcuts and Siri intents for widget and Control Center integration',
      },
      {
        category: 'added',
        description: 'Standardized empty states with primary actions across all list views',
      },
      {
        category: 'added',
        description: 'DNS change notifications with optimized message handling',
      },
      {
        category: 'added',
        description: 'Script execution timeouts and improved debugging output',
      },
      {
        category: 'added',
        description: 'PCAP packet processing with granular error handling',
      },
      {
        category: 'improved',
        description: 'Settings reorganized into dedicated capture, rules, and security pages',
      },
      {
        category: 'improved',
        description: 'Accessibility and design consistency refined across all views',
      },
      {
        category: 'improved',
        description: 'Chunked body decoding and SSE handler state management rewritten',
      },
      {
        category: 'improved',
        description: 'Decompression errors unified with consolidated decoding paths',
      },
      {
        category: 'improved',
        description: 'Script execution counts and rewrite rule stats batched for performance',
      },
      {
        category: 'fixed',
        description: 'Breakpoint resume race condition with hardened cURL import/export',
      },
      {
        category: 'fixed',
        description: 'Validation and pattern matching edge cases tightened',
      },
      {
        category: 'fixed',
        description: 'VPN tunnel lifecycle serialized to prevent duplicate concurrent starts',
      },
      {
        category: 'fixed',
        description: 'Per-domain certificate storage and ClientHello parsing hardened',
      },
      {
        category: 'fixed',
        description: 'Compression stream finalization with no-progress loop prevention',
      },
      {
        category: 'fixed',
        description: 'Redirect loop prevention with bounded PCAP capture',
      },
      {
        category: 'fixed',
        description: 'Big-endian PCAP support with overlapping TCP segment draining',
      },
      {
        category: 'fixed',
        description: 'Filtered items now sort by timestamp',
      },
      {
        category: 'fixed',
        description: 'Brotli and Deflate stream end validation',
      },
      {
        category: 'fixed',
        description: 'Swift 6 strict concurrency compile errors resolved',
      },
    ],
  },
  {
    version: '1.0.1',
    date: 'January 24, 2026',
    title: 'Capture Controls',
    summary:
      'Advanced capture controls with persistent settings and a fix for unintended capture toggles during settings restore.',
    badge: 'Patch',
    changes: [
      {
        category: 'added',
        description: 'Advanced capture controls with persistent settings',
      },
      {
        category: 'fixed',
        description: 'Settings restore no longer triggers unintended capture toggles',
      },
    ],
  },
  {
    version: '1.0.0',
    date: 'January 23, 2026',
    title: 'Initial Release',
    summary:
      'The first public release of Trace. Device-wide HTTP(S) capture, TLS MITM inspection, real-time protocol debugging, and traffic modification\u2014all on-device, all open source.',
    badge: 'Major',
    changes: [
      {
        category: 'added',
        description: 'Device-wide HTTP(S) capture via Network Extension packet tunnel',
      },
      {
        category: 'added',
        description: 'TLS MITM inspection with on-device certificate authority and per-domain cert storage',
      },
      {
        category: 'added',
        description: 'WebSocket frame inspection with real-time streaming view',
      },
      {
        category: 'added',
        description: 'Server-Sent Events (SSE) debugging with event stream visualization',
      },
      {
        category: 'added',
        description: 'Traffic rewrite rules with pattern matching for headers, URLs, and bodies',
      },
      {
        category: 'added',
        description: 'Request builder for crafting and sending custom HTTP requests',
      },
      {
        category: 'added',
        description: 'Host override mapping for redirecting traffic between environments',
      },
      {
        category: 'added',
        description: 'PCAP export for Wireshark-compatible traffic analysis',
      },
      {
        category: 'added',
        description: 'JavaScript scripting engine for custom request/response transformations',
      },
      {
        category: 'added',
        description: 'Privacy-first architecture with zero telemetry and fully on-device processing',
      },
    ],
  },
];

function groupByCategory(changes: Change[]): Record<ChangeCategory, Change[]> {
  const groups: Record<ChangeCategory, Change[]> = {
    added: [],
    improved: [],
    fixed: [],
  };
  for (const change of changes) {
    groups[change.category].push(change);
  }
  return groups;
}

export default function ChangelogPage() {
  return (
    <div className="flex w-full flex-col">
      <PageHeader
        icon={ScrollText}
        title="Changelog"
        description="A complete history of Trace releases. Every feature, improvement, and bug fix documented for full transparency."
      />

      <Separator />

      {/* Releases */}
      <PageSection spacing="lg">
        <div className="mx-auto max-w-readable">
          <div className="relative space-y-10 sm:space-y-12">
            {/* Vertical line connecting releases */}
            <div className="absolute top-0 bottom-0 left-[19px] hidden w-px bg-border sm:left-[23px] sm:block" />

            {releases.map((release, index) => {
              const grouped = groupByCategory(release.changes);

              return (
                <div key={release.version} className="relative sm:pl-14">
                  {/* Timeline dot */}
                  <div className="absolute top-5 left-[13px] z-10 hidden h-3.5 w-3.5 rounded-full border-2 border-primary bg-background sm:left-[17px] sm:block" />

                  <Card
                    className={
                      index === 0 ? 'border-primary/20' : ''
                    }
                  >
                    <CardHeader>
                      <div className="mb-3 flex flex-wrap items-center gap-2 sm:mb-4">
                        <div className="flex items-center gap-1.5">
                          <Tag className="h-3.5 w-3.5 text-primary sm:h-4 sm:w-4" />
                          <span className="text-sm font-bold text-primary sm:text-base">
                            v{release.version}
                          </span>
                        </div>
                        <Badge
                          variant={
                            release.badge === 'Major'
                              ? 'default'
                              : release.badge === 'Unreleased'
                                ? 'outline'
                                : 'secondary'
                          }
                        >
                          {release.badge}
                        </Badge>
                        {release.date && (
                          <span className="text-xs text-muted-foreground sm:text-sm">
                            {release.date}
                          </span>
                        )}
                      </div>
                      <CardTitle className="mb-1.5 sm:mb-2">{release.title}</CardTitle>
                      <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                        {release.summary}
                      </p>
                    </CardHeader>

                    <CardContent>
                      <div className="space-y-5 sm:space-y-6">
                        {(Object.keys(categoryConfig) as ChangeCategory[]).map((category) => {
                          const items = grouped[category];
                          if (items.length === 0) return null;
                          const config = categoryConfig[category];
                          const CategoryIcon = config.icon;

                          return (
                            <div key={category}>
                              <div className={`mb-2.5 flex items-center gap-1.5 sm:mb-3 ${config.className}`}>
                                <CategoryIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                                <span className="text-xs font-semibold uppercase tracking-wide sm:text-sm">
                                  {config.label}
                                </span>
                              </div>
                              <ul className="space-y-2 sm:space-y-2.5">
                                {items.map((change, changeIndex) => (
                                  <li key={changeIndex} className="flex gap-3">
                                    <div className="mt-1.5 shrink-0 sm:mt-2">
                                      <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground/50 sm:h-2 sm:w-2" />
                                    </div>
                                    <span className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                                      {change.description}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </PageSection>

      <Separator />

      {/* CTA Section */}
      <PageSection spacing="lg">
        <div className="mx-auto max-w-readable text-center">
          <GitCommit className="mx-auto mb-4 h-10 w-10 text-primary sm:mb-6 sm:h-12 sm:w-12" />
          <h2 className="mb-3 text-2xl font-bold tracking-tight sm:mb-4 sm:text-3xl md:text-4xl">
            Follow development
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-muted-foreground sm:mb-8 sm:text-base">
            Trace is developed in the open. Browse the source, track issues, and see every commit on
            GitHub.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <Button size="lg" asChild className="w-full sm:w-auto">
              <a
                href="https://github.com/Trace-iOS/Trace/releases"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Code className="mr-2 h-5 w-5" />
                View on GitHub
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
              <Link href="/roadmap">
                <ArrowRight className="mr-2 h-5 w-5" />
                See roadmap
              </Link>
            </Button>
          </div>
        </div>
      </PageSection>
    </div>
  );
}
