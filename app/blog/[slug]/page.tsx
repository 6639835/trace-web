import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { getAllPosts, getPostBySlug } from '@/lib/blog';

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
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://trace.justinl.site/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Dynamically import the MDX content
  const MDXContent = await import(`../posts/${slug}.mdx`).then((mod) => mod.default);

  const categoryColors: Record<typeof post.category, 'default' | 'secondary' | 'outline'> = {
    Releases: 'default',
    Features: 'secondary',
    Tutorials: 'outline',
    Technical: 'outline',
    Community: 'secondary',
  };

  return (
    <div className="flex flex-col">
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
      <section className="container py-section">
        <article className="mx-auto prose max-w-readable prose-slate dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-code:rounded prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:font-mono prose-code:text-sm prose-code:before:content-none prose-code:after:content-none">
          <MDXContent />
        </article>
      </section>

      <Separator />

      {/* Footer */}
      <section className="container py-section">
        <div className="mx-auto max-w-readable text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all posts
          </Link>
        </div>
      </section>
    </div>
  );
}
