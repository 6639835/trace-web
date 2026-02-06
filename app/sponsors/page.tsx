import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { PageHeader } from '@/components/shared/page-header';
import { PageSection } from '@/components/shared/page-section';
import { FeatureCard } from '@/components/marketing/feature-card';
import { BulletList, BulletItem } from '@/components/shared/bullet-list';
import { Heart, Coffee, Zap, Award, Github } from 'lucide-react';

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
      <PageHeader
        icon={Heart}
        title="Sponsors"
        description="Trace is free and open source. Sponsorships help sustain development and keep the project thriving."
      />

      <Separator />

      {/* Current Status */}
      <PageSection>
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
      </PageSection>

      {/* How Funds Are Used */}
      <PageSection>
        <div className="mx-auto max-w-content">
          <h2 className="mb-8 text-xl font-bold tracking-tight sm:mb-10 sm:text-2xl">
            How funds are used
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6">
            <FeatureCard
              icon={Coffee}
              title="Development time"
              description="Sponsorships allow dedicating more time to building features, fixing bugs, and improving performance. Every dollar supports active development."
            />
            <FeatureCard
              icon={Zap}
              title="Infrastructure"
              description="Hosting for the website, documentation, and CI/CD pipelines. Apple Developer Program membership for TestFlight distribution."
            />
            <FeatureCard
              icon={Award}
              title="Testing devices"
              description="iOS devices for testing compatibility across different models and iOS versions. Ensuring Trace works reliably on all supported hardware."
            />
            <FeatureCard
              icon={Heart}
              title="Community"
              description="Supporting contributors, organizing community events, and recognizing valuable contributions. Building a sustainable open source community."
            />
          </div>
        </div>
      </PageSection>

      <Separator />

      {/* Alternative Support */}
      <PageSection>
        <div className="mx-auto max-w-readable">
          <h2 className="mb-6 text-2xl font-bold tracking-tight sm:mb-8 sm:text-3xl">
            Other ways to support
          </h2>
          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              Not ready to sponsor financially? There are many ways to support Trace development:
            </p>
            <BulletList>
              <BulletItem>Contribute code, documentation, or translations</BulletItem>
              <BulletItem>Report bugs and suggest features</BulletItem>
              <BulletItem>Star the project on GitHub</BulletItem>
              <BulletItem>Share Trace with colleagues who might find it useful</BulletItem>
              <BulletItem>Write blog posts or tutorials about your workflows</BulletItem>
            </BulletList>
          </div>
        </div>
      </PageSection>

      <Separator />

      {/* Transparency */}
      <PageSection>
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
      </PageSection>

      <Separator />

      {/* CTA */}
      <PageSection>
        <div className="mx-auto max-w-readable text-center">
          <h2 className="mb-3 text-2xl font-bold tracking-tight sm:mb-4 sm:text-3xl">
            Coming soon
          </h2>
          <p className="mb-6 text-sm text-muted-foreground sm:mb-8 sm:text-base">
            GitHub Sponsors will be available soon. Follow the project to be notified when
            sponsorship opens.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <Button size="lg" asChild>
              <a
                href="https://github.com/Trace-iOS/Trace"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                Star on GitHub
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/contributing">
                <Heart className="mr-2 h-5 w-5" />
                Contribute
              </a>
            </Button>
          </div>
        </div>
      </PageSection>
    </div>
  );
}
