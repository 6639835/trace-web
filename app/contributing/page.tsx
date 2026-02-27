import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { PageSection } from '@/components/shared/page-section';
import { PageHeader } from '@/components/shared/page-header';
import { BentoGrid, BentoItem } from '@/components/sections/bento-grid';
import { EditorialBanner } from '@/components/sections/editorial-banner';
import { CodeBlock, InlineCode } from '@/components/docs/mdx/code-block';
import {
  Code,
  FileText,
  Bug,
  Lightbulb,
  Globe,
  MessageCircle,
  GitFork,
  CheckCircle,
  Github,
  ArrowRight,
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
    url: '/contributing',
  },
  alternates: {
    canonical: '/contributing',
  },
};

export default function ContributingPage() {
  return (
    <div className="flex flex-col">
      {/* ── Split hero: headline left, quick links right ── */}
      <PageHeader
        variant="split"
        title="Help build the best iOS network debugger."
        description="Trace is open source and community-driven. Contributions are welcome in many forms—code, documentation, bug reports, feature requests, and more."
        aside={
          <div className="w-full max-w-sm space-y-3 lg:max-w-none">
            {[
              {
                href: 'https://github.com/Trace-iOS/Trace/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22',
                label: 'Good first issues',
                icon: CheckCircle,
              },
              {
                href: 'https://github.com/Trace-iOS/Trace/discussions/new?category=ideas',
                label: 'Suggest a feature',
                icon: Lightbulb,
              },
              {
                href: 'https://github.com/Trace-iOS/Trace/issues/new',
                label: 'Report a bug',
                icon: Bug,
              },
              {
                href: 'https://github.com/Trace-iOS/Trace/discussions',
                label: 'Join discussions',
                icon: MessageCircle,
              },
            ].map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border bg-card px-4 py-3 text-sm font-medium transition-colors hover:border-primary/50 hover:bg-muted/50"
              >
                <span className="flex items-center gap-2.5">
                  <Icon className="h-4 w-4 text-primary" />
                  {label}
                </span>
                <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
              </a>
            ))}
          </div>
        }
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <Button asChild>
            <a href="https://github.com/Trace-iOS/Trace" target="_blank" rel="noopener noreferrer">
              <GitFork className="mr-2 h-4 w-4" />
              Fork on GitHub
            </a>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/docs/building">Build from source</Link>
          </Button>
        </div>
      </PageHeader>

      <Separator />

      {/* ── Ways to contribute: bento grid ── */}
      <PageSection>
        <div className="mx-auto max-w-content">
          <h2 className="mb-8 text-xl font-bold tracking-tight sm:mb-10 sm:text-2xl md:text-3xl">
            Ways to contribute
          </h2>

          <BentoGrid>
            {/* Code — large */}
            <BentoItem size="md" className="flex flex-col gap-3">
              <Code className="h-7 w-7 text-primary" />
              <h3 className="text-lg font-semibold">Code</h3>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                Fix bugs, implement features, or optimize performance. Browse issues labeled
                &quot;good first issue&quot; to get started with a manageable first contribution.
              </p>
              <a
                href="https://github.com/Trace-iOS/Trace/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary hover:underline"
              >
                View good first issues →
              </a>
            </BentoItem>

            {/* Documentation — small */}
            <BentoItem size="sm">
              <FileText className="mb-3 h-6 w-6 text-primary" />
              <h3 className="mb-2 font-semibold">Documentation</h3>
              <p className="mb-3 text-sm text-muted-foreground">
                Improve guides, fix typos, add examples, or clarify confusing sections.
              </p>
              <Link href="/docs" className="text-sm font-medium text-primary hover:underline">
                Browse docs →
              </Link>
            </BentoItem>

            {/* Translations — small */}
            <BentoItem size="sm">
              <Globe className="mb-3 h-6 w-6 text-primary" />
              <h3 className="mb-2 font-semibold">Translations</h3>
              <p className="mb-3 text-sm text-muted-foreground">
                Help make Trace accessible to non-English speakers.
              </p>
              <a
                href="https://github.com/Trace-iOS/Trace/tree/main/Localization"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary hover:underline"
              >
                View translations →
              </a>
            </BentoItem>

            {/* Community — small */}
            <BentoItem size="sm">
              <MessageCircle className="mb-3 h-6 w-6 text-primary" />
              <h3 className="mb-2 font-semibold">Community</h3>
              <p className="mb-3 text-sm text-muted-foreground">
                Help others in discussions, share debugging workflows, or write tutorials.
              </p>
              <a
                href="https://github.com/Trace-iOS/Trace/discussions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary hover:underline"
              >
                Join discussions →
              </a>
            </BentoItem>

            {/* Bug reports + Feature requests — large */}
            <BentoItem size="md" className="flex flex-col gap-3">
              <div className="flex gap-3">
                <Bug className="h-7 w-7 text-primary" />
                <Lightbulb className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Bug reports & feature requests</h3>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                Found a bug? Report it with steps to reproduce and device details. Have an idea?
                Open a discussion describing the use case. We prioritize features based on user
                feedback.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Trace-iOS/Trace/issues/new"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Report a bug →
                </a>
                <a
                  href="https://github.com/Trace-iOS/Trace/discussions/new?category=ideas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Suggest a feature →
                </a>
              </div>
            </BentoItem>
          </BentoGrid>
        </div>
      </PageSection>

      <Separator />

      {/* ── Code contribution workflow: numbered steps ── */}
      <PageSection className="border-y bg-muted/30">
        <div className="mx-auto max-w-readable">
          <h2 className="mb-8 text-xl font-bold tracking-tight sm:mb-10 sm:text-2xl md:text-3xl">
            Code contribution workflow
          </h2>
          <div className="space-y-6">
            {[
              {
                n: '1',
                title: 'Find or create an issue',
                body: (
                  <>
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
                  </>
                ),
              },
              {
                n: '2',
                title: 'Fork and clone',
                body: (
                  <>
                    Fork the repository on GitHub, then clone your fork:
                    <CodeBlock className="language-bash">
                      {`git clone https://github.com/Trace-iOS/Trace`}
                    </CodeBlock>
                  </>
                ),
              },
              {
                n: '3',
                title: 'Create a feature branch',
                body: (
                  <>
                    Create a new branch from <InlineCode>main</InlineCode>:
                    <CodeBlock className="language-bash">
                      {`git checkout -b feature/your-feature-name`}
                    </CodeBlock>
                  </>
                ),
              },
              {
                n: '4',
                title: 'Write and test your changes',
                body: (
                  <>
                    Follow the project&apos;s coding style. Write tests for new features. Run
                    existing tests to ensure nothing breaks. See the{' '}
                    <Link href="/docs/building" className="text-primary hover:underline">
                      building guide
                    </Link>{' '}
                    for development setup.
                  </>
                ),
              },
              {
                n: '5',
                title: 'Submit a pull request',
                body: 'Push your branch and open a pull request on GitHub. Include a clear description of what changed and why. Reference any related issues. Participate in code review.',
              },
            ].map(({ n, title, body }) => (
              <div key={n} className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {n}
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">{title}</h3>
                  <div className="text-sm leading-relaxed text-muted-foreground">{body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      <Separator />

      {/* ── Guidelines: 2-col ── */}
      <PageSection>
        <div className="mx-auto max-w-content">
          <h2 className="mb-8 text-xl font-bold tracking-tight sm:mb-10 sm:text-2xl md:text-3xl">
            Guidelines
          </h2>
          <div className="grid gap-6 text-sm sm:grid-cols-2 sm:gap-8">
            {[
              {
                title: 'Code style',
                body: "Follow Swift conventions and Apple's API Design Guidelines. Use SwiftLint configuration from the repository. Keep functions focused and well-named. Add comments for non-obvious logic.",
              },
              {
                title: 'Commit messages',
                body: 'Write clear commit messages in present tense: "Add WebSocket frame filtering" not "Added...". Reference issue numbers when relevant.',
              },
              {
                title: 'Testing',
                body: "Add tests for new features. Ensure existing tests pass. Manual testing on physical devices is important—simulators don't support Network Extension.",
              },
              {
                title: 'Documentation',
                body: 'Update relevant documentation when adding features. Include code examples where helpful. Keep the README and guides in sync with actual behavior.',
              },
              {
                title: 'Breaking changes',
                body: 'Avoid breaking changes when possible. If necessary, discuss in an issue first. Provide migration guides and deprecation warnings.',
              },
            ].map(({ title, body }) => (
              <div key={title} className="rounded-xl border p-4">
                <h3 className="mb-2 font-semibold">{title}</h3>
                <p className="leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      <Separator />

      {/* ── Resources ── */}
      <PageSection>
        <div className="mx-auto max-w-content">
          <h2 className="mb-8 text-xl font-bold tracking-tight sm:mb-10 sm:text-2xl">Resources</h2>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6">
            {[
              {
                href: '/docs/architecture',
                label: 'Architecture guide',
                desc: 'Understand how Trace is built and structured',
                internal: true,
              },
              {
                href: '/docs/building',
                label: 'Building from source',
                desc: 'Set up your development environment',
                internal: true,
              },
              {
                href: 'https://github.com/Trace-iOS/Trace/blob/main/CONTRIBUTING.md',
                label: 'Contributing guide',
                desc: 'Detailed contribution guidelines on GitHub',
                internal: false,
              },
              {
                href: 'https://github.com/Trace-iOS/Trace/blob/main/CODE_OF_CONDUCT.md',
                label: 'Code of conduct',
                desc: 'Community guidelines and expectations',
                internal: false,
              },
            ].map(({ href, label, desc, internal }) => {
              const Tag = internal ? Link : 'a';
              return (
                <Tag
                  key={href}
                  href={href}
                  {...(internal ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                  className="group rounded-xl border p-4 transition-colors hover:border-primary/50"
                >
                  <h3 className="mb-2 font-semibold group-hover:text-primary">{label}</h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </Tag>
              );
            })}
          </div>
        </div>
      </PageSection>

      {/* ── CTA: editorial banner ── */}
      <EditorialBanner variant="muted">
        <Github className="mx-auto mb-4 h-10 w-10 text-primary sm:h-12 sm:w-12" />
        <h2 className="mb-3 text-2xl font-bold tracking-tight sm:text-3xl">Ready to contribute?</h2>
        <p className="mb-8 text-sm text-muted-foreground sm:text-base">
          Whether you&apos;re fixing a typo or implementing a major feature, your contribution helps
          make Trace better for everyone.
        </p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
          <Button size="lg" asChild>
            <a href="https://github.com/Trace-iOS/Trace" target="_blank" rel="noopener noreferrer">
              <GitFork className="mr-2 h-4 w-4" />
              Fork on GitHub
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a
              href="https://github.com/Trace-iOS/Trace/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CheckCircle className="mr-2 h-4 w-4" />
              Good first issues
            </a>
          </Button>
        </div>
      </EditorialBanner>
    </div>
  );
}
