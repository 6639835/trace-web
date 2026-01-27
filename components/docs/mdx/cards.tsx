import Link from 'next/link';
import {
  BookOpen,
  Rocket,
  Wrench,
  Laptop,
  Shield,
  Settings,
  Sparkles,
  CodeXml,
  Cloud,
  Terminal,
  Lock,
  GraduationCap,
  FileText,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const iconMap = {
  'book-open': BookOpen,
  rocket: Rocket,
  wrench: Wrench,
  laptop: Laptop,
  shield: Shield,
  settings: Settings,
  sparkles: Sparkles,
  'code-branch': CodeXml,
  cloud: Cloud,
  terminal: Terminal,
  lock: Lock,
  'graduation-cap': GraduationCap,
  'file-text': FileText,
  gear: Settings,
  code: Terminal,
};

type CardProps = {
  title: string;
  href?: string;
  icon?: keyof typeof iconMap;
  children: React.ReactNode;
};

export function CardGroup({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      data-toc="ignore"
      className={cn('not-prose my-6 grid gap-3 sm:grid-cols-2 sm:gap-4', className)}
    >
      {children}
    </div>
  );
}

export function Card({ title, href, icon, children }: CardProps) {
  const Icon = icon ? iconMap[icon] : null;
  const isExternal = href?.startsWith('http');

  const content = (
    <>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1 space-y-1">
          <h3 className="text-base font-semibold break-words text-foreground">{title}</h3>
          <div className="text-sm break-words text-muted-foreground [&_p]:m-0 [&_p]:text-sm">
            {children}
          </div>
        </div>
        {Icon ? <Icon className="h-4 w-4 shrink-0 text-muted-foreground" /> : null}
      </div>
      <span className="text-xs font-medium text-primary">Learn more →</span>
    </>
  );

  if (!href) {
    return (
      <div
        data-toc="ignore"
        className="flex flex-col justify-between gap-4 rounded-lg border bg-card/70 p-4"
      >
        {content}
      </div>
    );
  }

  return (
    <Link
      href={href}
      data-toc="ignore"
      className="docs-card flex flex-col justify-between gap-4 rounded-lg border bg-card/70 p-4 no-underline transition-colors hover:border-foreground hover:bg-card hover:no-underline"
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
    >
      {content}
    </Link>
  );
}

export const Cardgroup = CardGroup;
