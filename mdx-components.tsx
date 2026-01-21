import type { MDXComponents } from 'mdx/types';
import { Tabs, Tab } from '@/components/docs/mdx/tabs';
import { Tip, Info } from '@/components/docs/mdx/tip';
import { CardGroup, Card } from '@/components/docs/mdx/cards';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Tabs,
    Tab,
    Tip,
    Info,
    CardGroup,
    Card,
    ...components,
  };
}
