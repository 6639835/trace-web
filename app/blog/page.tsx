import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
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
    url: 'https://trace.justinl.site/blog',
  },
};

const categoryColors: Record<BlogPost['category'], 'default' | 'secondary' | 'outline'> = {
  Releases: 'default',
  Features: 'secondary',
  Tutorials: 'outline',
  Technical: 'outline',
  Community: 'secondary',
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="container py-section">
        <div className="mx-auto max-w-readable text-center">
          <h1 className="mb-3 text-3xl font-bold tracking-tight sm:mb-4 sm:text-4xl md:text-5xl">
            Blog
          </h1>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
            Updates, tutorials, and technical deep-dives from the Trace team. Learn about new
            features, debugging techniques, and development insights.
          </p>
        </div>
      </section>

      <Separator />

      {/* Blog Posts Grid */}
      <section className="container py-section">
        <div className="mx-auto max-w-content">
          {posts.length === 0 ? (
            <div className="flex min-h-[400px] items-center justify-center">
              <div className="text-center">
                <BookOpen className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
                <p className="text-muted-foreground">No blog posts yet. Check back soon!</p>
              </div>
            </div>
          ) : (
            <div className="grid gap-4 sm:gap-5 md:gap-6">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
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
                      <CardTitle className="text-xl sm:text-2xl">{post.title}</CardTitle>
                      <CardDescription className="leading-relaxed">
                        {post.description}
                      </CardDescription>
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
          )}
        </div>
      </section>
    </div>
  );
}
