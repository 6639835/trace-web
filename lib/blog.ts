import { promises as fs } from 'fs';
import path from 'path';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: 'Releases' | 'Features' | 'Tutorials' | 'Technical' | 'Community';
  readTime: string;
  author: {
    name: string;
    role: string;
  };
}

const postsDirectory = path.join(process.cwd(), 'app/blog/posts');

function extractMetadataObjectLiteral(content: string): string | null {
  const exportIndex = content.search(/export const metadata\b/);
  if (exportIndex === -1) return null;

  const equalsIndex = content.indexOf('=', exportIndex);
  if (equalsIndex === -1) return null;

  let cursor = equalsIndex + 1;
  while (cursor < content.length && /\s/.test(content[cursor]!)) cursor++;
  if (content[cursor] === '(') cursor++;
  while (cursor < content.length && /\s/.test(content[cursor]!)) cursor++;
  if (content[cursor] !== '{') return null;

  const start = cursor;
  let depth = 0;
  let inSingle = false;
  let inDouble = false;
  let inTemplate = false;
  let inLineComment = false;
  let inBlockComment = false;
  let escaped = false;

  for (let i = start; i < content.length; i++) {
    const ch = content[i]!;
    const next = content[i + 1];

    if (inLineComment) {
      if (ch === '\n') inLineComment = false;
      continue;
    }

    if (inBlockComment) {
      if (ch === '*' && next === '/') {
        inBlockComment = false;
        i++;
      }
      continue;
    }

    if (inSingle || inDouble || inTemplate) {
      if (escaped) {
        escaped = false;
        continue;
      }
      if (ch === '\\') {
        escaped = true;
        continue;
      }
      if (inSingle && ch === "'") inSingle = false;
      if (inDouble && ch === '"') inDouble = false;
      if (inTemplate && ch === '`') inTemplate = false;
      continue;
    }

    if (ch === '/' && next === '/') {
      inLineComment = true;
      i++;
      continue;
    }
    if (ch === '/' && next === '*') {
      inBlockComment = true;
      i++;
      continue;
    }

    if (ch === "'") {
      inSingle = true;
      continue;
    }
    if (ch === '"') {
      inDouble = true;
      continue;
    }
    if (ch === '`') {
      inTemplate = true;
      continue;
    }

    if (ch === '{') depth++;
    if (ch === '}') {
      depth--;
      if (depth === 0) return content.slice(start, i + 1);
    }
  }

  return null;
}

function parseBlogPostMetadataFromMdx(content: string): Partial<BlogPost> | null {
  const objectLiteral = extractMetadataObjectLiteral(content);
  if (!objectLiteral) return null;

  try {
    return Function(`"use strict"; return (${objectLiteral});`)() as Partial<BlogPost>;
  } catch (error) {
    console.error('Error evaluating blog post metadata:', error);
    return null;
  }
}

function isValidBlogPostMetadata(metadata: Partial<BlogPost>): metadata is Omit<BlogPost, 'slug'> {
  return Boolean(
    metadata &&
    typeof metadata.title === 'string' &&
    typeof metadata.description === 'string' &&
    typeof metadata.date === 'string' &&
    typeof metadata.category === 'string' &&
    typeof metadata.readTime === 'string' &&
    metadata.author &&
    typeof metadata.author.name === 'string' &&
    typeof metadata.author.role === 'string',
  );
}

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const files = await fs.readdir(postsDirectory);
    const mdxFiles = files.filter((file) => file.endsWith('.mdx'));

    const posts: BlogPost[] = [];

    for (const file of mdxFiles) {
      const slug = file.replace(/\.mdx$/, '');
      const filePath = path.join(postsDirectory, file);
      const content = await fs.readFile(filePath, 'utf8');

      const metadata = parseBlogPostMetadataFromMdx(content);
      if (!metadata) continue;
      if (!isValidBlogPostMetadata(metadata)) {
        console.error(`Invalid blog metadata shape for ${file}`);
        continue;
      }

      posts.push({
        slug,
        ...metadata,
      });
    }

    // Sort by date (newest first)
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug) || null;
}

export async function getPostsByCategory(category: BlogPost['category']): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => post.category === category);
}
