import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PageSection } from '@/components/shared/page-section';
import { EditorialBanner } from '@/components/sections/editorial-banner';
import { Heart, Coffee, Zap, Award, Github, Code, Star, Share2, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sponsors',
  description:
    'Support Trace development through sponsorship. Learn how sponsorship funds are used and ways to contribute to the iOS network debugger project.',
  keywords: ['Trace sponsors', 'support Trace', 'sponsor development', 'open source funding'],
  openGraph: {
    title: 'Sponsors - Trace',
    description: 'Support Trace development through GitHub Sponsors.',
    url: '/sponsors',
  },
  alternates: {
    canonical: '/sponsors',
  },
};

export default function SponsorsPage() {
  return (
    <div className="flex flex-col">
      {/* ── Centered hero with Heart icon ── */}
      <section className="container py-section">
        <div className="mx-auto max-w-readable text-center">
          <Heart className="mx-auto mb-5 h-12 w-12 text-primary sm:h-14 sm:w-14" />
          <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Support open source.
          </h1>
          <p className="mb-6 text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
            Trace is free and open source. Sponsorships help sustain development and keep the
            project thriving for the community.
          </p>
          {/* Community-supported callout */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
            <Heart className="h-4 w-4" />
            Community-supported — exploring sustainable funding models
          </div>
        </div>
      </section>

      {/* ── How funds are used: horizontal icon list ── */}
      <div className="border-y bg-muted/30">
        <div className="container py-section">
          <div className="mx-auto max-w-content">
            <h2 className="mb-8 text-xl font-bold tracking-tight sm:mb-10 sm:text-2xl md:text-3xl">
              How funds are used
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Coffee,
                  title: 'Development time',
                  body: 'Sponsorships allow dedicating more time to building features, fixing bugs, and improving performance.',
                },
                {
                  icon: Zap,
                  title: 'Infrastructure',
                  body: 'Hosting, CI/CD pipelines, and Apple Developer Program membership for TestFlight distribution.',
                },
                {
                  icon: Award,
                  title: 'Testing devices',
                  body: 'iOS devices for testing compatibility across different models and iOS versions.',
                },
                {
                  icon: Heart,
                  title: 'Community',
                  body: 'Supporting contributors, recognizing valuable contributions, and building a sustainable community.',
                },
              ].map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">{title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Other ways to support + Transparency: 2-col ── */}
      <PageSection>
        <div className="mx-auto max-w-content">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="mb-5 text-xl font-bold tracking-tight sm:text-2xl">
                Other ways to support
              </h2>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                Not ready to sponsor financially? There are many ways to support Trace development:
              </p>
              <ul className="space-y-3">
                {[
                  { icon: Code, text: 'Contribute code, documentation, or translations' },
                  { icon: FileText, text: 'Report bugs and suggest features' },
                  { icon: Star, text: 'Star the project on GitHub' },
                  { icon: Share2, text: 'Share Trace with colleagues who might find it useful' },
                  { icon: FileText, text: 'Write blog posts or tutorials about your workflows' },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-5 text-xl font-bold tracking-tight sm:text-2xl">
                Transparency commitment
              </h2>
              <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  When sponsorship is enabled, we&apos;ll publish regular updates on how funds are
                  used—full transparency about development costs, infrastructure expenses, and
                  community investments.
                </p>
                <p>
                  The core functionality of Trace will always remain free and open source.
                  Sponsorships sustain development but don&apos;t gate features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* ── CTA: editorial banner ── */}
      <EditorialBanner variant="muted">
        <h2 className="mb-3 text-2xl font-bold tracking-tight sm:text-3xl">Coming soon</h2>
        <p className="mb-8 text-sm text-muted-foreground sm:text-base">
          GitHub Sponsors will be available soon. Follow the project to be notified when sponsorship
          opens.
        </p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
          <Button size="lg" asChild>
            <a href="https://github.com/Trace-iOS/Trace" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              Star on GitHub
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contributing">
              <Heart className="mr-2 h-5 w-5" />
              Contribute
            </Link>
          </Button>
        </div>
      </EditorialBanner>
    </div>
  );
}
