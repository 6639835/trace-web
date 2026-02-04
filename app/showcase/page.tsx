import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { PageHeader } from '@/components/shared/page-header';
import { FeatureCard } from '@/components/marketing/feature-card';
import { BulletList, BulletItem } from '@/components/shared/bullet-list';
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

export default function ShowcasePage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        icon={Sparkles}
        title="Showcase"
        description="Real-world use cases and examples of how developers use Trace for debugging, testing, and analysis. From API development to security auditing."
      />

      <Separator />

      {/* Use Cases */}
      <section className="container py-section">
        <div className="mx-auto max-w-content">
          <h2 className="mb-8 text-xl font-bold tracking-tight sm:mb-10 sm:text-2xl md:mb-12">
            Use cases
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6 lg:grid-cols-3">
            <FeatureCard
              icon={Code}
              title="API development & testing"
              description="Debug API integrations in real-time. Inspect request/response payloads, validate headers, and test against staging environments."
            >
              <BulletList className="mt-4">
                <BulletItem>Validate API response structure</BulletItem>
                <BulletItem>Test authentication flows</BulletItem>
                <BulletItem>Debug error responses</BulletItem>
              </BulletList>
            </FeatureCard>

            <FeatureCard
              icon={Radio}
              title="WebSocket debugging"
              description="Capture and analyze real-time communication. Frame-by-frame inspection with timestamps and full payload visibility."
            >
              <BulletList className="mt-4">
                <BulletItem>Debug chat applications</BulletItem>
                <BulletItem>Analyze live data streams</BulletItem>
                <BulletItem>Validate message ordering</BulletItem>
              </BulletList>
            </FeatureCard>

            <FeatureCard
              icon={Gauge}
              title="Performance analysis"
              description="Identify slow requests, optimize payload sizes, and analyze timing breakdowns for DNS, TLS, and data transfer."
            >
              <BulletList className="mt-4">
                <BulletItem>Find performance bottlenecks</BulletItem>
                <BulletItem>Optimize request timing</BulletItem>
                <BulletItem>Reduce payload sizes</BulletItem>
              </BulletList>
            </FeatureCard>

            <FeatureCard
              icon={ShieldCheck}
              title="Security auditing"
              description="Verify TLS configurations, check for sensitive data leaks, and validate certificate pinning implementations."
            >
              <BulletList className="mt-4">
                <BulletItem>Audit TLS security</BulletItem>
                <BulletItem>Detect data leaks</BulletItem>
                <BulletItem>Verify certificate pinning</BulletItem>
              </BulletList>
            </FeatureCard>

            <FeatureCard
              icon={GitBranch}
              title="CI/CD integration"
              description="Automate network testing in CI pipelines. Export HAR files for regression testing and validate API contracts."
            >
              <BulletList className="mt-4">
                <BulletItem>Automated API testing</BulletItem>
                <BulletItem>Regression testing</BulletItem>
                <BulletItem>Contract validation</BulletItem>
              </BulletList>
            </FeatureCard>

            <FeatureCard
              icon={Edit3}
              title="Request modification"
              description="Mock API responses, test error conditions, and redirect traffic to staging servers without modifying app code."
            >
              <BulletList className="mt-4">
                <BulletItem>Mock API responses</BulletItem>
                <BulletItem>Test error handling</BulletItem>
                <BulletItem>Environment switching</BulletItem>
              </BulletList>
            </FeatureCard>
          </div>
        </div>
      </section>

      <Separator />

      {/* Configuration Examples */}
      <section className="container py-section">
        <div className="mx-auto max-w-content">
          <h2 className="mb-8 text-xl font-bold tracking-tight sm:mb-10 sm:text-2xl md:mb-12">
            Configuration examples
          </h2>

          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {/* Example 1 */}
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Badge>Rewrite Rule</Badge>
                <h3 className="text-lg font-semibold">Add custom headers to all API requests</h3>
              </div>
              <p className="mb-4 text-sm text-muted-foreground">
                Automatically inject authorization headers or feature flags into requests matching a
                pattern.
              </p>
              <div className="rounded-lg border bg-muted/30 p-4">
                <pre className="overflow-x-auto text-xs sm:text-sm">
                  <code>{`{
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
}`}</code>
                </pre>
              </div>
            </div>

            {/* Example 2 */}
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Badge>Request Map</Badge>
                <h3 className="text-lg font-semibold">Mock API response for offline testing</h3>
              </div>
              <p className="mb-4 text-sm text-muted-foreground">
                Return a static JSON response without hitting the real API—perfect for testing error
                states.
              </p>
              <div className="rounded-lg border bg-muted/30 p-4">
                <pre className="overflow-x-auto text-xs sm:text-sm">
                  <code>{`{
  "name": "Mock User Profile",
  "enabled": true,
  "pattern": "api.example.com/user/profile",
  "response": {
    "status": 200,
    "headers": {
      "Content-Type": "application/json"
    },
    "body": {
      "id": "12345",
      "name": "Test User",
      "email": "test@example.com"
    }
  }
}`}</code>
                </pre>
              </div>
            </div>

            {/* Example 3 */}
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Badge>Host Override</Badge>
                <h3 className="text-lg font-semibold">Redirect production API to staging</h3>
              </div>
              <p className="mb-4 text-sm text-muted-foreground">
                Test against staging servers without modifying your app&apos;s configuration.
              </p>
              <div className="rounded-lg border bg-muted/30 p-4">
                <pre className="overflow-x-auto text-xs sm:text-sm">
                  <code>{`{
  "hosts": {
    "api.example.com": "staging-api.example.com",
    "cdn.example.com": "staging-cdn.example.com"
  }
}`}</code>
                </pre>
              </div>
            </div>

            {/* Example 4 */}
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Badge>Filter Preset</Badge>
                <h3 className="text-lg font-semibold">Show only failed API requests</h3>
              </div>
              <p className="mb-4 text-sm text-muted-foreground">
                Quickly filter for errors and warnings to focus on what needs fixing.
              </p>
              <div className="rounded-lg border bg-muted/30 p-4">
                <pre className="overflow-x-auto text-xs sm:text-sm">
                  <code>{`{
  "name": "Errors Only",
  "filters": [
    {
      "field": "status_code",
      "operator": ">=",
      "value": 400
    },
    {
      "field": "domain",
      "operator": "contains",
      "value": "api.example.com"
    }
  ]
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Community Showcase */}
      <section className="container py-section">
        <div className="mx-auto max-w-content">
          <div className="text-center">
            <Share2 className="mx-auto mb-4 h-10 w-10 text-primary sm:mb-6 sm:h-12 sm:w-12" />
            <h2 className="mb-3 text-2xl font-bold tracking-tight sm:mb-4 sm:text-3xl">
              Share your use case
            </h2>
            <p className="mb-6 text-sm text-muted-foreground sm:mb-8 sm:text-base">
              Found a creative way to use Trace? Share it with the community in GitHub Discussions.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <a
                  href="https://github.com/Trace-iOS/Trace/discussions/categories/show-and-tell"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Share your workflow
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
                <Link href="/docs">Browse documentation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
