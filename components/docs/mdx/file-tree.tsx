'use client';

import * as React from 'react';
import { ChevronRight, File, Folder, FolderOpen } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FileTreeProps {
  children: React.ReactNode;
  className?: string;
}

interface FolderProps {
  name: string;
  children?: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

interface FileProps {
  name: string;
  highlight?: boolean;
  className?: string;
}

export function FileTree({ children, className }: FileTreeProps) {
  return (
    <div
      className={cn(
        'not-prose my-4 overflow-hidden rounded-lg border border-border bg-card/70 sm:my-6',
        className,
      )}
    >
      <div className="border-b border-border bg-muted/50 px-3 py-1.5 sm:px-4 sm:py-2 dark:bg-muted/30">
        <span className="text-[10px] font-medium tracking-wide text-muted-foreground uppercase sm:text-xs">
          File Structure
        </span>
      </div>
      <div className="p-2 font-mono text-[12px] sm:p-3 sm:text-[13px] md:text-sm">{children}</div>
    </div>
  );
}

export function TreeFolder({ name, children, defaultOpen = true, className }: FolderProps) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  return (
    <div className={className}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex w-full cursor-pointer items-center gap-1.5 rounded px-1.5 py-1 text-left transition-colors hover:bg-muted/70"
      >
        <ChevronRight
          className={cn(
            'h-3 w-3 shrink-0 text-muted-foreground transition-transform duration-150',
            isOpen && 'rotate-90',
          )}
        />
        {isOpen ? (
          <FolderOpen className="h-4 w-4 shrink-0 text-primary" />
        ) : (
          <Folder className="h-4 w-4 shrink-0 text-primary" />
        )}
        <span className="text-foreground">{name}</span>
      </button>
      {isOpen && children && <div className="ml-3 border-l border-border pl-2">{children}</div>}
    </div>
  );
}

export function TreeFile({ name, highlight, className }: FileProps) {
  // Determine file icon color based on extension
  const getFileColor = (filename: string) => {
    const ext = filename.split('.').pop()?.toLowerCase();
    switch (ext) {
      case 'ts':
      case 'tsx':
        return 'text-blue-500';
      case 'js':
      case 'jsx':
        return 'text-yellow-500';
      case 'json':
        return 'text-yellow-600';
      case 'css':
      case 'scss':
        return 'text-pink-500';
      case 'html':
        return 'text-orange-500';
      case 'md':
      case 'mdx':
        return 'text-gray-500';
      case 'svg':
      case 'png':
      case 'jpg':
      case 'gif':
        return 'text-purple-500';
      case 'yml':
      case 'yaml':
        return 'text-red-400';
      default:
        return 'text-muted-foreground';
    }
  };

  return (
    <div
      className={cn(
        'flex items-center gap-1.5 rounded px-1.5 py-1',
        highlight && 'bg-primary/10',
        className,
      )}
    >
      <span className="w-3" /> {/* Spacer to align with folders */}
      <File className={cn('h-4 w-4 shrink-0', getFileColor(name))} />
      <span className={cn('text-foreground', highlight && 'font-medium text-primary')}>{name}</span>
    </div>
  );
}
