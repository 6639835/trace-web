import type { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { PageHeader } from '@/components/shared/page-header';
import { PageSection } from '@/components/shared/page-section';
import { Calendar, Clock, BookOpen } from 'lucide-react';
import { getAllPosts, type BlogPost } from '@/lib/blog';

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

const categoryColors: Record<BlogPost['category'], 'default' | 'secondary' | 'outline'> = {
  Releases: 'default',
  Features: 'secondary',
  Tutorials: 'outline',
  Technical: 'outline',
  Community: 'secondary',
};

function BlogPostsSkeleton() {
  return (
    <div className="grid gap-4 sm:gap-5 md:gap-6">
      {[...Array(3)].map((_, i) => (
        <Card key={i}>
          <CardHeader>
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <Skeleton className="h-5 w-20" />
              <Skeleton className="h-4 w-32" />
            </div>
            <Skeleton className="mb-2 h-8 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-4 w-48" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

async function BlogPosts() {
  const posts = await getAllPosts();

  if (posts.length === 0) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="text-center">
          <BookOpen className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
          <p className="text-muted-foreground">No blog posts yet. Check back soon!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:gap-5 md:gap-6">
      {posts.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
          <Card className="transition-colors hover:border-primary/50">
            <CardHeader>
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <Badge variant={categoryColors[post.category]}>{post.category}</Badge>
                <div className="flex items-center gap-3 text-xs text-muted-foreground sm:text-sm">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'short',
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
              <CardTitle className="text-xl decoration-primary/50 underline-offset-4 group-hover:underline sm:text-2xl">
                {post.title}
              </CardTitle>
              <CardDescription className="leading-relaxed">{post.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground sm:text-sm">
                By {post.author.name} • {post.author.role}
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Blog"
        description="Updates, tutorials, and technical deep-dives from the Trace team. Learn about new features, debugging techniques, and development insights."
      />

      <Separator />

      {/* Blog Posts Grid */}
      <PageSection>
        <div className="mx-auto max-w-content">
          <Suspense fallback={<BlogPostsSkeleton />}>
            <BlogPosts />
          </Suspense>
        </div>
      </PageSection>
    </div>
  );
}
