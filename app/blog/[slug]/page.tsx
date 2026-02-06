import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Suspense } from 'react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { PageSection } from '@/components/shared/page-section';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { absoluteUrl, siteUrl } from '@/lib/config/site';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
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

function ArticleContentSkeleton() {
  return (
    <article className="mx-auto max-w-readable">
      <div className="space-y-4">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-5/6" />
        <Skeleton className="mt-6 h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
        <Skeleton className="mt-6 h-6 w-2/3" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </article>
  );
}

interface ArticleContentProps {
  slug: string;
}

async function ArticleContent({ slug }: ArticleContentProps) {
  // Dynamically import the MDX content
  const MDXContent = await import(`../posts/${slug}.mdx`).then((mod) => mod.default);

  return (
    <article className="mx-auto prose max-w-readable prose-slate dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-code:rounded prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:font-mono prose-code:text-sm prose-code:before:content-none prose-code:after:content-none">
      <MDXContent />
    </article>
  );
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const categoryColors: Record<typeof post.category, 'default' | 'secondary' | 'outline'> = {
    Releases: 'default',
    Features: 'secondary',
    Tutorials: 'outline',
    Technical: 'outline',
    Community: 'secondary',
  };

  // Article structured data for better SEO
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
      {/* Back to Blog */}
      <section className="container py-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>
      </section>

      {/* Header */}
      <section className="container pb-8">
        <div className="mx-auto max-w-readable">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant={categoryColors[post.category]}>{post.category}</Badge>
            <div className="flex items-center gap-3 text-xs text-muted-foreground sm:text-sm">
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                {post.readTime}
              </span>
            </div>
          </div>
          <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {post.title}
          </h1>
          <p className="mb-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {post.description}
          </p>
          <div className="text-sm text-muted-foreground">
            By <span className="font-medium text-foreground">{post.author.name}</span> •{' '}
            {post.author.role}
          </div>
        </div>
      </section>

      <Separator />

      {/* Content */}
      <PageSection>
        <Suspense fallback={<ArticleContentSkeleton />}>
          <ArticleContent slug={slug} />
        </Suspense>
      </PageSection>

      <Separator />

      {/* Footer */}
      <PageSection>
        <div className="mx-auto max-w-readable text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all posts
          </Link>
        </div>
      </PageSection>
    </div>
  );
}
