import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
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
    url: 'https://trace.justinl.site/showcase',
  },
};

export default function ShowcasePage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="container py-section">
        <div className="mx-auto max-w-readable text-center">
          <Sparkles className="mx-auto mb-4 h-10 w-10 text-muted-foreground sm:mb-6 sm:h-12 sm:w-12" />
          <h1 className="mb-3 text-3xl font-bold tracking-tight sm:mb-4 sm:text-4xl md:text-5xl">
            Showcase
          </h1>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
            Real-world use cases and examples of how developers use Trace for debugging, testing,
            and analysis. From API development to security auditing.
          </p>
        </div>
      </section>

      <Separator />

      {/* Use Cases */}
      <section className="container py-section">
        <div className="mx-auto max-w-content">
          <h2 className="mb-8 text-xl font-bold tracking-tight sm:mb-10 sm:text-2xl md:mb-12">
            Use cases
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Code className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>API development &amp; testing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 leading-relaxed">
                  Debug API integrations in real-time. Inspect request/response payloads, validate
                  headers, and test against staging environments.
                </CardDescription>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                    <span className="text-muted-foreground">Validate API response structure</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                    <span className="text-muted-foreground">Test authentication flows</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                    <span className="text-muted-foreground">Debug error responses</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Radio className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>WebSocket debugging</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 leading-relaxed">
                  Capture and analyze real-time communication. Frame-by-frame inspection with
                  timestamps and full payload visibility.
                </CardDescription>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                    <span className="text-muted-foreground">Debug chat applications</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                    <span className="text-muted-foreground">Analyze live data streams</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                    <span className="text-muted-foreground">Validate message ordering</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Gauge className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Performance analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 leading-relaxed">
                  Identify slow requests, optimize payload sizes, and analyze timing breakdowns for
                  DNS, TLS, and data transfer.
                </CardDescription>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                    <span className="text-muted-foreground">Find performance bottlenecks</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                    <span className="text-muted-foreground">Optimize request timing</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                    <span className="text-muted-foreground">Reduce payload sizes</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <ShieldCheck className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Security auditing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 leading-relaxed">
                  Verify TLS configurations, check for sensitive data leaks, and validate
                  certificate pinning implementations.
                </CardDescription>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                    <span className="text-muted-foreground">Audit TLS security</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                    <span className="text-muted-foreground">Detect data leaks</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                    <span className="text-muted-foreground">Verify certificate pinning</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <GitBranch className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>CI/CD integration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 leading-relaxed">
                  Automate network testing in CI pipelines. Export HAR files for regression testing
                  and validate API contracts.
                </CardDescription>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                    <span className="text-muted-foreground">Automated API testing</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                    <span className="text-muted-foreground">Regression testing</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                    <span className="text-muted-foreground">Contract validation</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Edit3 className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Request modification</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 leading-relaxed">
                  Mock API responses, test error conditions, and redirect traffic to staging servers
                  without modifying app code.
                </CardDescription>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                    <span className="text-muted-foreground">Mock API responses</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                    <span className="text-muted-foreground">Test error handling</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                    <span className="text-muted-foreground">Environment switching</span>
                  </div>
                </div>
              </CardContent>
            </Card>
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
            <Share2 className="mx-auto mb-4 h-10 w-10 text-muted-foreground sm:mb-6 sm:h-12 sm:w-12" />
            <h2 className="mb-3 text-2xl font-bold tracking-tight sm:mb-4 sm:text-3xl">
              Share your use case
            </h2>
            <p className="mb-6 text-sm text-muted-foreground sm:mb-8 sm:text-base">
              Found a creative way to use Trace? Share it with the community in GitHub Discussions.
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <a
                href="https://github.com/Trace-iOS/Trace/discussions/categories/show-and-tell"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90 sm:h-11 sm:px-8"
              >
                Share your workflow
              </a>
              <Link
                href="/docs"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium hover:bg-accent hover:text-accent-foreground sm:h-11 sm:px-8"
              >
                Browse documentation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
