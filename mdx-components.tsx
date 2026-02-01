import type { MDXComponents } from 'mdx/types';
import { Tabs, Tab } from '@/components/docs/mdx/tabs';
import { Tip, Info } from '@/components/docs/mdx/tip';
import { CardGroup, Card } from '@/components/docs/mdx/cards';
import { CodeBlock, InlineCode } from '@/components/docs/mdx/code-block';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Tabs,
    Tab,
    Tip,
    Info,
    CardGroup,
    Card,
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
