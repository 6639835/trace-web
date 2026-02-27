import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PageSection } from '@/components/shared/page-section';
import { EditorialBanner } from '@/components/sections/editorial-banner';
import { CodeBlock } from '@/components/docs/mdx/code-block';
import { Sparkles, Code, Radio, Gauge, ShieldCheck, GitBranch, Edit3, Share2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Showcase',
  description:
    'Real-world use cases and examples for Trace iOS network debugger: API testing, WebSocket debugging, performance analysis, security auditing, CI/CD integration, and traffic modification.',
  keywords: [
    'Trace use cases',
    'iOS debugging examples',
    'network debugging workflows',
    'API testing iOS',
    'WebSocket debugging examples',
  ],
  openGraph: {
    title: 'Showcase - Trace iOS Network Debugger',
    description: 'Real-world examples and use cases for iOS network debugging with Trace.',
    url: '/showcase',
  },
  alternates: {
    canonical: '/showcase',
  },
};

const useCases = [
  {
    icon: Code,
    title: 'API development & testing',
    description:
      'Debug API integrations in real-time. Inspect request/response payloads, validate headers, and test against staging environments.',
    bullets: [
      'Validate API response structure',
      'Test authentication flows',
      'Debug error responses',
    ],
  },
  {
    icon: Radio,
    title: 'WebSocket debugging',
    description:
      'Capture and analyze real-time communication. Frame-by-frame inspection with timestamps and full payload visibility.',
    bullets: ['Debug chat applications', 'Analyze live data streams', 'Validate message ordering'],
  },
  {
    icon: Gauge,
    title: 'Performance analysis',
    description:
      'Identify slow requests, optimize payload sizes, and analyze timing breakdowns for DNS, TLS, and data transfer.',
    bullets: ['Find performance bottlenecks', 'Optimize request timing', 'Reduce payload sizes'],
  },
  {
    icon: ShieldCheck,
    title: 'Security auditing',
    description:
      'Verify TLS configurations, check for sensitive data leaks, and validate certificate pinning implementations.',
    bullets: ['Audit TLS security', 'Detect data leaks', 'Verify certificate pinning'],
  },
  {
    icon: GitBranch,
    title: 'CI/CD integration',
    description:
      'Automate network testing in CI pipelines. Export HAR files for regression testing and validate API contracts.',
    bullets: ['Automated API testing', 'Regression testing', 'Contract validation'],
  },
  {
    icon: Edit3,
    title: 'Request modification',
    description:
      'Mock API responses, test error conditions, and redirect traffic to staging servers without modifying app code.',
    bullets: ['Mock API responses', 'Test error handling', 'Environment switching'],
  },
];

const configExamples = [
  {
    badge: 'Rewrite Rule',
    title: 'Add custom headers to all API requests',
    description:
      'Automatically inject authorization headers or feature flags into requests matching a pattern.',
    language: 'language-json',
    code: `{
  "name": "Add Auth Header",
  "enabled": true,
  "pattern": "api.example.com/*",
  "action": "modify-request",
  "modifications": {
    "headers": {
      "Authorization": "Bearer YOUR_TOKEN_HERE",
      "X-Feature-Flag": "new-ui-enabled"
    }
  }
}`,
  },
  {
    badge: 'Request Map',
    title: 'Mock API response for offline testing',
    description:
      'Return a static JSON response without hitting the real API, perfect for testing error states.',
    language: 'language-json',
    code: `{
  "name": "Mock User Profile",
  "enabled": true,
  "pattern": "api.example.com/user/profile",
  "response": {
    "status": 200,
    "headers": { "Content-Type": "application/json" },
    "body": {
      "id": "12345",
      "name": "Test User",
      "email": "test@example.com"
    }
  }
}`,
  },
  {
    badge: 'Host Override',
    title: 'Redirect production API to staging',
    description: "Test against staging servers without modifying your app's configuration.",
    language: 'language-json',
    code: `{
  "hosts": {
    "api.example.com": "staging-api.example.com",
    "cdn.example.com": "staging-cdn.example.com"
  }
}`,
  },
  {
    badge: 'Filter Preset',
    title: 'Show only failed API requests',
    description: 'Quickly filter for errors and warnings to focus on what needs fixing.',
    language: 'language-json',
    code: `{
  "name": "Errors Only",
  "filters": [
    { "field": "status_code", "operator": ">=", "value": 400 },
    { "field": "domain", "operator": "contains", "value": "api.example.com" }
  ]
}`,
  },
];

export default function ShowcasePage() {
  return (
    <div className="flex flex-col">
      {/* ── Minimal left-aligned hero ── */}
      <section className="container py-section">
        <div className="mx-auto max-w-content">
          <div className="mb-3 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium tracking-widest text-primary uppercase">
              Showcase
            </span>
          </div>
          <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Real workflows. Real debugging.
          </h1>
          <p className="mb-6 max-w-readable text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
            From API development to security auditing—see how developers use Trace for debugging,
            testing, and analysis.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button asChild>
              <Link href="/docs/quick-start">Get started</Link>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://github.com/Trace-iOS/Trace/discussions/categories/show-and-tell"
                target="_blank"
                rel="noopener noreferrer"
              >
                Share your workflow
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Use cases: alternating 2-col layout ── */}
      <div className="border-y bg-muted/30">
        <div className="container py-section">
          <div className="mx-auto max-w-content">
            <h2 className="mb-8 text-xl font-bold tracking-tight sm:mb-10 sm:text-2xl md:text-3xl">
              Use cases
            </h2>
            <div className="space-y-8 sm:space-y-10">
              {useCases.map((uc, i) => {
                const Icon = uc.icon;
                return (
                  <div
                    key={uc.title}
                    className={`flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8 ${i % 2 === 1 ? 'sm:flex-row-reverse' : ''}`}
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-lg font-semibold">{uc.title}</h3>
                      <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                        {uc.description}
                      </p>
                      <ul className="flex flex-wrap gap-x-4 gap-y-1">
                        {uc.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-center gap-1.5 text-xs text-muted-foreground"
                          >
                            <div className="h-1 w-1 rounded-full bg-primary" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ── Configuration examples ── */}
      <PageSection spacing="lg">
        <div className="mx-auto max-w-content">
          <h2 className="mb-8 text-xl font-bold tracking-tight sm:mb-10 sm:text-2xl md:text-3xl">
            Configuration examples
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 sm:gap-10">
            {configExamples.map((ex) => (
              <div key={ex.title}>
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <Badge>{ex.badge}</Badge>
                  <h3 className="font-semibold">{ex.title}</h3>
                </div>
                <p className="mb-3 text-sm text-muted-foreground">{ex.description}</p>
                <CodeBlock className={ex.language}>{ex.code}</CodeBlock>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* ── Community CTA ── */}
      <EditorialBanner variant="muted">
        <Share2 className="mx-auto mb-4 h-10 w-10 text-primary sm:h-12 sm:w-12" />
        <h2 className="mb-3 text-2xl font-bold tracking-tight sm:text-3xl">Share your use case</h2>
        <p className="mb-8 text-sm text-muted-foreground sm:text-base">
          Found a creative way to use Trace? Share it with the community in GitHub Discussions.
        </p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
          <Button size="lg" asChild>
            <a
              href="https://github.com/Trace-iOS/Trace/discussions/categories/show-and-tell"
              target="_blank"
              rel="noopener noreferrer"
            >
              Share your workflow
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/docs">Browse documentation</Link>
          </Button>
        </div>
      </EditorialBanner>
    </div>
  );
}
