import type { MDXComponents } from 'mdx/types';
import { Tabs, Tab } from '@/components/docs/mdx/tabs';
import { Tip, Info } from '@/components/docs/mdx/tip';
import { CardGroup, Card } from '@/components/docs/mdx/cards';
import { CodeBlock, InlineCode } from '@/components/docs/mdx/code-block';
import { LinkPreview } from '@/components/docs/mdx/link-preview';
import { GitHubUser, GitHubRepo, GitHubOrg } from '@/components/docs/mdx/github';
import { YouTubeEmbed } from '@/components/docs/mdx/youtube';
import { ToggleList, ToggleItem } from '@/components/docs/mdx/toggle-list';
import { CodeDiff } from '@/components/docs/mdx/code-diff';
import { FileTree, TreeFolder, TreeFile } from '@/components/docs/mdx/file-tree';
import { Mermaid } from '@/components/docs/mdx/mermaid';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Existing components
    Tabs,
    Tab,
    Tip,
    Info,
    CardGroup,
    Card,
    // New components
    LinkPreview,
    GitHubUser,
    GitHubRepo,
    GitHubOrg,
    YouTubeEmbed,
    ToggleList,
    ToggleItem,
    CodeDiff,
    FileTree,
    TreeFolder,
    TreeFile,
    Folder: TreeFolder, // Alias for convenience
    File: TreeFile, // Alias for convenience
    Mermaid,
    // Code handling
    pre: ({ children }) => children,
    code: ({ children, className }: { children?: string; className?: string }) => {
      // If className contains 'language-', it's a code block, otherwise it's inline code
      if (className?.startsWith('language-')) {
        return <CodeBlock className={className}>{children}</CodeBlock>;
      }
      return <InlineCode className={className}>{children}</InlineCode>;
    },
    ...components,
  };
}
