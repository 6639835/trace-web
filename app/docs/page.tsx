import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BookOpen, Download, Settings, Code, Shield, Wrench } from "lucide-react";

export default function DocsPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Documentation
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Guides and reference documentation for Trace.
          </p>
        </div>
      </section>

      <Separator />

      {/* Getting Started */}
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold tracking-tight mb-12">Getting started</h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Download className="h-8 w-8 mb-2 text-muted-foreground" />
                <CardTitle className="text-lg">Installation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Download and install Trace on your iOS device.
                  System requirements and initial setup instructions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Settings className="h-8 w-8 mb-2 text-muted-foreground" />
                <CardTitle className="text-lg">Configuration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Configure Network Extension and enable traffic capture.
                  Set up filters and customize capture behavior.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 mb-2 text-muted-foreground" />
                <CardTitle className="text-lg">TLS certificate</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Install root certificate for HTTPS inspection.
                  Trust configuration and security implications.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* User Guide */}
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold tracking-tight mb-12">User guide</h2>
          
          <div className="space-y-8">
            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-3">Capturing traffic</h3>
              <p className="text-muted-foreground leading-relaxed">
                Start and stop capture sessions. Filter by app, domain, or protocol.
                View real-time traffic as it flows through your device.
              </p>
            </div>

            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-3">Inspecting requests</h3>
              <p className="text-muted-foreground leading-relaxed">
                Navigate captured requests and view detailed information.
                Headers, body, timing, and protocol metadata.
                Search and filter captured data.
              </p>
            </div>

            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-3">Modifying and replaying</h3>
              <p className="text-muted-foreground leading-relaxed">
                Edit request headers, body, and parameters.
                Replay modified requests to test different scenarios.
                Validate API behavior without changing code.
              </p>
            </div>

            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-3">Exporting data</h3>
              <p className="text-muted-foreground leading-relaxed">
                Export captured traffic in HAR format.
                Share specific requests with team members.
                Archive debugging sessions for later analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Developer Documentation */}
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold tracking-tight mb-12">Developer documentation</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <Code className="h-8 w-8 mb-2 text-muted-foreground" />
                <CardTitle className="text-lg">Building from source</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Clone repository and build in Xcode.
                  Configure signing and capabilities.
                  Deploy to physical device for testing.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Wrench className="h-8 w-8 mb-2 text-muted-foreground" />
                <CardTitle className="text-lg">Contributing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Development setup and workflow.
                  Coding standards and pull request process.
                  Testing and quality requirements.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BookOpen className="h-8 w-8 mb-2 text-muted-foreground" />
                <CardTitle className="text-lg">Architecture overview</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  System design and component interaction.
                  Network Extension implementation details.
                  Data flow and storage architecture.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Code className="h-8 w-8 mb-2 text-muted-foreground" />
                <CardTitle className="text-lg">API reference</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Core types and protocols.
                  Extension points and customization.
                  Internal APIs and implementation notes.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* Advanced Topics */}
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold tracking-tight mb-12">Advanced topics</h2>
          
          <div className="space-y-4">
            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-2">Certificate pinning bypass</h3>
              <p className="text-sm text-muted-foreground">
                Techniques for debugging apps with certificate pinning.
              </p>
            </div>

            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-2">Custom protocol handlers</h3>
              <p className="text-sm text-muted-foreground">
                Extending Trace to support custom or proprietary protocols.
              </p>
            </div>

            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-2">Performance optimization</h3>
              <p className="text-sm text-muted-foreground">
                Minimizing impact on device performance and battery life.
              </p>
            </div>

            <div className="rounded-lg border p-6">
              <h3 className="text-lg font-semibold mb-2">Troubleshooting</h3>
              <p className="text-sm text-muted-foreground">
                Common issues and solutions. Debugging capture problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Resources */}
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight mb-4">
            Additional resources
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Detailed documentation is maintained in the GitHub repository.
            README, wiki, and inline code documentation provide comprehensive coverage.
          </p>
          <div className="text-sm text-muted-foreground">
            <p>This documentation page provides an overview of available topics.</p>
            <p>Complete documentation content will be added as the project matures.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

