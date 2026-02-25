import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Suspense } from 'react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { Calendar, Clock, ChevronRight, ArrowRight } from 'lucide-react';
import { getAllPosts, getPostBySlug, type BlogPost } from '@/lib/blog';
import { absoluteUrl, siteUrl } from '@/lib/config/site';
import { DocsTableOfContents } from '@/components/docs/docs-toc';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author.name }],
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [post.author.name],
      tags: [post.category],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

const categoryVariant: Record<BlogPost['category'], 'default' | 'secondary' | 'outline'> = {
  Releases: 'default',
  Features: 'secondary',
  Tutorials: 'outline',
  Technical: 'outline',
  Community: 'secondary',
};

async function ArticleContent({ slug }: { slug: string }) {
  const MDXContent = await import(`../posts/${slug}.mdx`).then((mod) => mod.default);

  return (
    <article
      data-toc-root
      className="prose max-w-none dark:prose-invert prose-headings:scroll-mt-24 prose-headings:font-bold prose-headings:tracking-tight prose-code:rounded prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:font-mono prose-code:text-sm prose-code:before:content-none prose-code:after:content-none"
    >
      <MDXContent />
    </article>
  );
}

function RelatedPosts({
  posts,
  currentSlug,
  category,
}: {
  posts: BlogPost[];
  currentSlug: string;
  category: BlogPost['category'];
}) {
  const sameCat = posts.filter((p) => p.slug !== currentSlug && p.category === category);
  const related =
    sameCat.length >= 2
      ? sameCat.slice(0, 3)
      : posts.filter((p) => p.slug !== currentSlug).slice(0, 3);

  if (related.length === 0) return null;

  const initials = (name: string) =>
    name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .slice(0, 2);

  return (
    <section className="container py-section">
      <div className="mx-auto max-w-content">
        <h2 className="mb-6 text-lg font-bold tracking-tight">You might also like</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-xl border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-sm"
            >
              <Badge variant={categoryVariant[post.category]} className="mb-3 self-start text-xs">
                {post.category}
              </Badge>
              <h3 className="mb-2 flex-1 font-semibold leading-snug tracking-tight group-hover:text-primary">
                {post.title}
              </h3>
              <p className="mb-4 text-sm text-muted-foreground line-clamp-2">{post.description}</p>
              <div className="flex items-center justify-between border-t pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold text-primary">
                    {initials(post.author.name)}
                  </div>
                  <span className="text-xs text-muted-foreground">{post.author.name}</span>
                </div>
                <span className="flex items-center gap-1 text-xs font-medium text-primary">
                  Read{' '}
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const [post, allPosts] = await Promise.all([getPostBySlug(slug), getAllPosts()]);

  if (!post) notFound();

  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author.name,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Trace',
      url: siteUrl,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': absoluteUrl(`/blog/${post.slug}`),
    },
  };

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />

      {/* ── Breadcrumb ────────────────────────────────── */}
      <div className="container pt-6">
        <nav
          className="flex items-center gap-1.5 text-sm text-muted-foreground"
          aria-label="Breadcrumb"
        >
          <Link href="/blog" className="hover:text-foreground">
            Blog
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href="/blog" className="hover:text-foreground">
            {post.category}
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="max-w-[200px] truncate text-foreground sm:max-w-xs">{post.title}</span>
        </nav>
      </div>

      {/* ── Compact inline header ─────────────────────── */}
      <section className="container pb-8 pt-6">
        <div className="mx-auto max-w-content">
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <Badge variant={categoryVariant[post.category]}>{post.category}</Badge>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Calendar className="h-3.5 w-3.5" />
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime}
            </span>
          </div>
          <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">{post.title}</h1>
          <p className="mb-4 max-w-readable text-base leading-relaxed text-muted-foreground sm:text-lg">
            {post.description}
          </p>
          <p className="text-sm text-muted-foreground">
            By <span className="font-medium text-foreground">{post.author.name}</span> ·{' '}
            {post.author.role}
          </p>
        </div>
      </section>

      <Separator />

      {/* ── Content: LEFT TOC + wide article ──────────── */}
      <section className="container py-section">
        <div className="mx-auto max-w-content">
          <div className="flex gap-10 xl:gap-14">
            {/* LEFT sticky TOC */}
            <aside className="hidden w-52 shrink-0 xl:block">
              <div className="sticky top-20">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Contents
                </p>
                <DocsTableOfContents />

                {/* Mini reading meta below TOC */}
                <div className="mt-6 space-y-2 border-t pt-5 text-xs text-muted-foreground">
                  <p className="flex items-center gap-1.5">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </p>
                  <p className="flex items-center gap-1.5">
                    <Calendar className="h-3 w-3" />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'short',
                      year: 'numeric',
                    })}
                  </p>
                </div>
              </div>
            </aside>

            {/* Article — fills all remaining space */}
            <div className="min-w-0 flex-1">
              <Suspense
                fallback={
                  <div className="space-y-3">
                    {[...Array(8)].map((_, i) => (
                      <Skeleton key={i} className="h-5 w-full last:w-4/5" />
                    ))}
                  </div>
                }
              >
                <ArticleContent slug={slug} />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* ── Related posts ─────────────────────────────── */}
      <RelatedPosts posts={allPosts} currentSlug={slug} category={post.category} />
    </div>
  );
}
