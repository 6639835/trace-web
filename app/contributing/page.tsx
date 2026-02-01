import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Heart,
  Code,
  FileText,
  Bug,
  Lightbulb,
  Globe,
  MessageCircle,
  Star,
  GitFork,
  CheckCircle,
  Github,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contributing',
  description:
    'Contribute to Trace: submit code, report bugs, improve documentation, suggest features, or translate to other languages. Open source contributions welcome.',
  keywords: [
    'contribute to Trace',
    'Trace open source',
    'iOS development contributing',
    'open source iOS',
  ],
  openGraph: {
    title: 'Contributing - Trace iOS Network Debugger',
    description:
      'Help build the best iOS network debugger. Contributions welcome in code, docs, translations, and more.',
    url: 'https://trace.justinl.site/contributing',
  },
};

export default function ContributingPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="container py-section">
        <div className="mx-auto max-w-readable text-center">
          <Heart className="mx-auto mb-4 h-10 w-10 text-primary sm:mb-6 sm:h-12 sm:w-12" />
          <h1 className="mb-3 text-3xl font-bold tracking-tight sm:mb-4 sm:text-4xl md:text-5xl">
            Contributing
          </h1>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
            Trace is open source and community-driven. Contributions are welcome in many forms—code,
            documentation, bug reports, feature requests, and more.
          </p>
        </div>
      </section>

      <Separator />

      {/* Ways to Contribute */}
      <section className="container py-section">
        <div className="mx-auto max-w-content">
          <h2 className="mb-8 text-xl font-bold tracking-tight sm:mb-10 sm:text-2xl md:mb-12">
            Ways to contribute
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Code className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Code</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 leading-relaxed">
                  Fix bugs, implement features, or optimize performance. Browse issues labeled
                  &quot;good first issue&quot; to get started.
                </CardDescription>
                <a
                  href="https://github.com/Trace-iOS/Trace/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  View good first issues →
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 leading-relaxed">
                  Improve guides, fix typos, add examples, or clarify confusing sections.
                  Documentation is just as important as code.
                </CardDescription>
                <Link href="/docs" className="text-sm text-primary hover:underline">
                  Browse documentation →
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Bug className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Bug reports</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 leading-relaxed">
                  Found a bug? Report it with steps to reproduce, device details, and expected
                  behavior. Good bug reports help us fix issues faster.
                </CardDescription>
                <a
                  href="https://github.com/Trace-iOS/Trace/issues/new"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Report a bug →
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Lightbulb className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Feature requests</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 leading-relaxed">
                  Have an idea? Open a discussion describing the use case and expected behavior. We
                  prioritize features based on user feedback.
                </CardDescription>
                <a
                  href="https://github.com/Trace-iOS/Trace/discussions/new?category=ideas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Suggest a feature →
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Globe className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Translations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 leading-relaxed">
                  Help make Trace accessible to non-English speakers. Translate the app or
                  documentation to your language.
                </CardDescription>
                <a
                  href="https://github.com/Trace-iOS/Trace/tree/main/Localization"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  View translations →
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MessageCircle className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 leading-relaxed">
                  Help others in discussions, share your debugging workflows, or write tutorials.
                  Community support is valuable.
                </CardDescription>
                <a
                  href="https://github.com/Trace-iOS/Trace/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Join discussions →
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator />

      {/* Code Contribution Workflow */}
      <section className="container py-section">
        <div className="mx-auto max-w-readable">
          <h2 className="mb-8 text-xl font-bold tracking-tight sm:mb-10 sm:text-2xl">
            Code contribution workflow
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                1
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Find or create an issue</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Browse{' '}
                  <a
                    href="https://github.com/Trace-iOS/Trace/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    open issues
                  </a>{' '}
                  or create a new one to discuss your proposed changes. For significant features,
                  open a discussion first to validate the approach before writing code.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                2
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Fork and clone</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Fork the repository on GitHub, then clone your fork locally:
                </p>
                <div className="mt-2 rounded-lg border bg-muted/30 p-3">
                  <code className="text-xs">
                    git clone https://github.com/YOUR_USERNAME/Trace.git
                  </code>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                3
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Create a feature branch</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Create a new branch from <code className="rounded bg-muted px-1">main</code>:
                </p>
                <div className="mt-2 rounded-lg border bg-muted/30 p-3">
                  <code className="text-xs">git checkout -b feature/your-feature-name</code>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                4
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Write and test your changes</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Follow the project&apos;s coding style. Write tests for new features. Run existing
                  tests to ensure nothing breaks. See the{' '}
                  <Link href="/docs/building" className="text-primary hover:underline">
                    building guide
                  </Link>{' '}
                  for development setup.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                5
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Submit a pull request</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Push your branch and open a pull request on GitHub. Include a clear description of
                  what changed and why. Reference any related issues. Participate in code review.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Guidelines */}
      <section className="container py-section">
        <div className="mx-auto max-w-readable">
          <h2 className="mb-6 text-xl font-bold tracking-tight sm:mb-8 sm:text-2xl">Guidelines</h2>
          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
            <div>
              <h3 className="mb-2 font-semibold text-foreground">Code style</h3>
              <p>
                Follow Swift conventions and Apple&apos;s API Design Guidelines. Use SwiftLint
                configuration from the repository. Keep functions focused and well-named. Add
                comments for non-obvious logic.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-foreground">Commit messages</h3>
              <p>
                Write clear commit messages in present tense: &quot;Add WebSocket frame
                filtering&quot; not &quot;Added WebSocket frame filtering&quot;. Reference issue
                numbers when relevant.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-foreground">Testing</h3>
              <p>
                Add tests for new features. Ensure existing tests pass. Manual testing on physical
                devices is important—simulators don&apos;t support Network Extension.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-foreground">Documentation</h3>
              <p>
                Update relevant documentation when adding features. Include code examples where
                helpful. Keep the README and guides in sync with actual behavior.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-foreground">Breaking changes</h3>
              <p>
                Avoid breaking changes when possible. If necessary, discuss in an issue first.
                Provide migration guides and deprecation warnings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Recognition */}
      <section className="container py-section">
        <div className="mx-auto max-w-readable">
          <Star className="mx-auto mb-4 h-10 w-10 text-primary sm:mb-6 sm:h-12 sm:w-12" />
          <h2 className="mb-4 text-center text-2xl font-bold tracking-tight sm:text-3xl">
            Recognition
          </h2>
          <p className="mb-6 text-center text-sm leading-relaxed text-muted-foreground sm:text-base">
            Contributors are recognized in the project README, release notes, and on the website.
            Significant contributions may be highlighted in blog posts or on social media.
          </p>
          <div className="text-center">
            <a
              href="https://github.com/Trace-iOS/Trace/graphs/contributors"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              View all contributors →
            </a>
          </div>
        </div>
      </section>

      <Separator />

      {/* Resources */}
      <section className="container py-section">
        <div className="mx-auto max-w-content">
          <h2 className="mb-8 text-xl font-bold tracking-tight sm:mb-10 sm:text-2xl">Resources</h2>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6">
            <Link
              href="/docs/architecture"
              className="group rounded-lg border p-4 transition-colors hover:border-primary/50"
            >
              <h3 className="mb-2 font-semibold group-hover:text-primary">Architecture guide</h3>
              <p className="text-sm text-muted-foreground">
                Understand how Trace is built and structured
              </p>
            </Link>

            <Link
              href="/docs/building"
              className="group rounded-lg border p-4 transition-colors hover:border-primary/50"
            >
              <h3 className="mb-2 font-semibold group-hover:text-primary">Building from source</h3>
              <p className="text-sm text-muted-foreground">Set up your development environment</p>
            </Link>

            <a
              href="https://github.com/Trace-iOS/Trace/blob/main/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border p-4 transition-colors hover:border-primary/50"
            >
              <h3 className="mb-2 font-semibold group-hover:text-primary">Contributing guide</h3>
              <p className="text-sm text-muted-foreground">
                Detailed contribution guidelines on GitHub
              </p>
            </a>

            <a
              href="https://github.com/Trace-iOS/Trace/blob/main/CODE_OF_CONDUCT.md"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border p-4 transition-colors hover:border-primary/50"
            >
              <h3 className="mb-2 font-semibold group-hover:text-primary">Code of conduct</h3>
              <p className="text-sm text-muted-foreground">Community guidelines and expectations</p>
            </a>
          </div>
        </div>
      </section>

      <Separator />

      {/* CTA */}
      <section className="container py-section">
        <div className="mx-auto max-w-readable text-center">
          <Github className="mx-auto mb-4 h-10 w-10 text-muted-foreground sm:mb-6 sm:h-12 sm:w-12" />
          <h2 className="mb-3 text-2xl font-bold tracking-tight sm:mb-4 sm:text-3xl">
            Ready to contribute?
          </h2>
          <p className="mb-6 text-sm text-muted-foreground sm:mb-8 sm:text-base">
            Whether you&apos;re fixing a typo or implementing a major feature, your contribution
            helps make Trace better for everyone.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="https://github.com/Trace-iOS/Trace"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90 sm:h-11 sm:px-8"
            >
              <GitFork className="h-4 w-4" />
              Fork on GitHub
            </a>
            <a
              href="https://github.com/Trace-iOS/Trace/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-input bg-background px-6 text-sm font-medium hover:bg-accent hover:text-accent-foreground sm:h-11 sm:px-8"
            >
              <CheckCircle className="h-4 w-4" />
              Good first issues
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
