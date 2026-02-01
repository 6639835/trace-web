import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Heart, Coffee, Zap, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sponsors',
  description:
    'Support Trace development through sponsorship. Learn how sponsorship funds are used and ways to contribute to the iOS network debugger project.',
  keywords: ['Trace sponsors', 'support Trace', 'sponsor development', 'open source funding'],
  openGraph: {
    title: 'Sponsors - Trace',
    description: 'Support Trace development through GitHub Sponsors.',
    url: 'https://trace.justinl.site/sponsors',
  },
};

export default function SponsorsPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="container py-section">
        <div className="mx-auto max-w-readable text-center">
          <Heart className="mx-auto mb-4 h-10 w-10 text-primary sm:mb-6 sm:h-12 sm:w-12" />
          <h1 className="mb-3 text-3xl font-bold tracking-tight sm:mb-4 sm:text-4xl md:text-5xl">
            Sponsors
          </h1>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
            Trace is free and open source. Sponsorships help sustain development and keep the
            project thriving.
          </p>
        </div>
      </section>

      <Separator />

      {/* Current Status */}
      <section className="container py-section">
        <div className="mx-auto max-w-content">
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle>Community-supported</CardTitle>
              <CardDescription>
                Trace is currently funded by its creator and maintained as a passion project.
                We&apos;re exploring sustainable funding models to dedicate more time to
                development.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* How Funds Are Used */}
      <section className="container py-section">
        <div className="mx-auto max-w-content">
          <h2 className="mb-8 text-xl font-bold tracking-tight sm:mb-10 sm:text-2xl">
            How funds are used
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6">
            <Card>
              <CardHeader>
                <Coffee className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Development time</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Sponsorships allow dedicating more time to building features, fixing bugs, and
                  improving performance. Every dollar supports active development.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Hosting for the website, documentation, and CI/CD pipelines. Apple Developer
                  Program membership for TestFlight distribution.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Testing devices</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  iOS devices for testing compatibility across different models and iOS versions.
                  Ensuring Trace works reliably on all supported hardware.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Heart className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">
                  Supporting contributors, organizing community events, and recognizing valuable
                  contributions. Building a sustainable open source community.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* Alternative Support */}
      <section className="container py-section">
        <div className="mx-auto max-w-readable">
          <h2 className="mb-6 text-2xl font-bold tracking-tight sm:mb-8 sm:text-3xl">
            Other ways to support
          </h2>
          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              Not ready to sponsor financially? There are many ways to support Trace development:
            </p>
            <ul className="space-y-2">
              <li className="flex gap-2">
                <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                <span>Contribute code, documentation, or translations</span>
              </li>
              <li className="flex gap-2">
                <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                <span>Report bugs and suggest features</span>
              </li>
              <li className="flex gap-2">
                <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                <span>Star the project on GitHub</span>
              </li>
              <li className="flex gap-2">
                <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                <span>Share Trace with colleagues who might find it useful</span>
              </li>
              <li className="flex gap-2">
                <div className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground" />
                <span>Write blog posts or tutorials about your workflows</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Separator />

      {/* Transparency */}
      <section className="container py-section">
        <div className="mx-auto max-w-readable">
          <h2 className="mb-6 text-2xl font-bold tracking-tight sm:mb-8 sm:text-3xl">
            Transparency commitment
          </h2>
          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              When sponsorship is enabled, we&apos;ll publish regular updates on how funds are used.
              Full transparency about development costs, infrastructure expenses, and community
              investments.
            </p>
            <p>
              The core functionality of Trace will always remain free and open source. Sponsorships
              sustain development but don&apos;t gate features.
            </p>
          </div>
        </div>
      </section>

      <Separator />

      {/* CTA */}
      <section className="container py-section">
        <div className="mx-auto max-w-readable text-center">
          <h2 className="mb-3 text-2xl font-bold tracking-tight sm:mb-4 sm:text-3xl">
            Coming soon
          </h2>
          <p className="mb-6 text-sm text-muted-foreground sm:mb-8 sm:text-base">
            GitHub Sponsors will be available soon. Follow the project to be notified when
            sponsorship opens.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="https://github.com/Trace-iOS/Trace"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90 sm:h-11 sm:px-8"
            >
              Star on GitHub
            </a>
            <a
              href="/contributing"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium hover:bg-accent hover:text-accent-foreground sm:h-11 sm:px-8"
            >
              Contribute
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
