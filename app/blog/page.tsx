import type { Metadata } from 'next';
import { createElement } from 'react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Calendar, Clock, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { getAllPosts, type BlogPost } from '@/lib/blog';

/** Resolve a Lucide icon by name string. Falls back to BookOpen. */
function resolveIcon(name?: string): LucideIcon {
  if (name) {
    const candidate = (LucideIcons as Record<string, unknown>)[name];
    // Lucide icons are React.forwardRef objects, not plain functions
    if (candidate != null && typeof candidate === 'object') return candidate as LucideIcon;
  }
  return BookOpen;
}

/** Module-level component — avoids "component created during render" lint error. */
function DynamicIcon({ name, className }: { name?: string; className?: string }) {
  return createElement(resolveIcon(name), { className });
}

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Updates, tutorials, and technical deep-dives about Trace iOS network debugger. Learn about new features, debugging techniques, and development insights.',
  keywords: [
    'Trace blog',
    'iOS network debugging tutorials',
    'network debugging tips',
    'Trace updates',
    'iOS development blog',
  ],
  openGraph: {
    title: 'Blog - Trace iOS Network Debugger',
    description:
      'Updates, tutorials, and technical insights about iOS network debugging with Trace.',
    url: '/blog',
  },
  alternates: {
    canonical: '/blog',
  },
};

const ALL_CATEGORIES = [
  'Releases',
  'Features',
  'Tutorials',
  'Technical',
  'Community',
] as const satisfies BlogPost['category'][];

const categoryVariant: Record<BlogPost['category'], 'default' | 'secondary' | 'outline'> = {
  Releases: 'default',
  Features: 'secondary',
  Tutorials: 'outline',
  Technical: 'outline',
  Community: 'secondary',
};

function FeaturedCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="grid gap-6 overflow-hidden rounded-2xl border bg-card p-7 transition-all hover:border-primary/40 hover:shadow-md sm:grid-cols-5">
        {/* Text side */}
        <div className="flex flex-col sm:col-span-3">
          <div className="mb-4 flex items-center gap-3">
            <Badge variant={categoryVariant[post.category]}>{post.category}</Badge>
            <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
              Featured
            </span>
          </div>
          <h2 className="mb-3 text-2xl leading-snug font-bold tracking-tight group-hover:text-primary sm:text-3xl">
            {post.title}
          </h2>
          <p className="mb-5 flex-1 leading-relaxed text-muted-foreground">{post.description}</p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime}
            </span>
            <span>
              {post.author.name} · {post.author.role}
            </span>
          </div>
          <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-primary">
            Read article
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </div>
        </div>

        {/* Visual placeholder — replace with <Image> when posts have cover images */}
        <div className="hidden items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent sm:col-span-2 sm:flex">
          <DynamicIcon name={post.icon} className="h-20 w-20 text-primary/20" />
        </div>
      </div>
    </Link>
  );
}

function GridCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <article className="flex h-full flex-col rounded-xl border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-sm">
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
          <DynamicIcon name={post.icon} className="h-5 w-5 text-muted-foreground" />
        </div>

        <Badge variant={categoryVariant[post.category]} className="mb-3 self-start text-xs">
          {post.category}
        </Badge>
        <h3 className="mb-2 leading-snug font-semibold tracking-tight group-hover:text-primary">
          {post.title}
        </h3>
        <p className="mb-4 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {post.description}
        </p>

        <div className="flex items-center gap-3 border-t pt-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {new Date(post.date).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {post.readTime}
          </span>
        </div>
      </article>
    </Link>
  );
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const allPosts = await getAllPosts();

  // Resolve active category — ignore invalid values
  const activeCategory: BlogPost['category'] | null = (
    ALL_CATEGORIES as readonly string[]
  ).includes(category ?? '')
    ? (category as BlogPost['category'])
    : null;

  // Count posts per category (always from full list)
  const counts = Object.fromEntries(
    ALL_CATEGORIES.map((cat) => [cat, allPosts.filter((p) => p.category === cat).length]),
  ) as Record<BlogPost['category'], number>;

  // Apply filter
  const posts = activeCategory ? allPosts.filter((p) => p.category === activeCategory) : allPosts;
  const [featured, ...rest] = posts;

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="container py-section">
        <div className="mx-auto max-w-content">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-1 text-sm font-medium tracking-widest text-primary uppercase">
                Trace Blog
              </p>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                {activeCategory ? `${activeCategory}` : 'Latest articles'}
              </h1>
              <p className="mt-2 text-muted-foreground">
                {activeCategory
                  ? `${posts.length} article${posts.length === 1 ? '' : 's'}`
                  : 'Updates, tutorials, and technical deep-dives from the team.'}
              </p>
            </div>

            {/* Category filter pills */}
            <div className="flex flex-wrap gap-1.5">
              <Link href="/blog">
                <Badge
                  variant={!activeCategory ? 'default' : 'outline'}
                  className="cursor-pointer text-xs transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  All
                  <span className="ml-1.5 tabular-nums opacity-60">{allPosts.length}</span>
                </Badge>
              </Link>
              {ALL_CATEGORIES.map((cat) => (
                <Link key={cat} href={activeCategory === cat ? '/blog' : `/blog?category=${cat}`}>
                  <Badge
                    variant={activeCategory === cat ? 'default' : 'outline'}
                    className="cursor-pointer text-xs transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    {cat}
                    {counts[cat] > 0 && (
                      <span className="ml-1.5 tabular-nums opacity-60">{counts[cat]}</span>
                    )}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Posts */}
      <section className="container py-section">
        <div className="mx-auto max-w-content">
          {posts.length === 0 ? (
            <div className="flex min-h-[400px] items-center justify-center">
              <div className="text-center">
                <BookOpen className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
                <p className="text-muted-foreground">No posts in this category yet.</p>
                <Link
                  href="/blog"
                  className="mt-3 inline-block text-sm font-medium text-primary hover:underline"
                >
                  View all articles
                </Link>
              </div>
            </div>
          ) : activeCategory ? (
            /* Filtered view — flat grid, no hero */
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <GridCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            /* All posts — hero card + grid */
            <div className="space-y-8">
              {featured && <FeaturedCard post={featured} />}
              {rest.length > 0 && (
                <div>
                  <p className="mb-5 text-sm font-semibold tracking-widest text-muted-foreground uppercase">
                    More articles
                  </p>
                  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {rest.map((post) => (
                      <GridCard key={post.slug} post={post} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
