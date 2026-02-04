'use client';

import { useEffect, useMemo, useState } from 'react';
import { cn } from '@/lib/utils';

interface CodeDiffProps {
  children?: string;
  language?: string;
  filename?: string;
  className?: string;
}

interface DiffLine {
  type: 'addition' | 'deletion' | 'context';
  content: string;
  lineNumber: { old?: number; new?: number };
}

function parseDiff(code: string): DiffLine[] {
  const lines = code.split('\n');
  const result: DiffLine[] = [];
  let oldLine = 1;
  let newLine = 1;

  for (const line of lines) {
    if (line.startsWith('+')) {
      result.push({
        type: 'addition',
        content: line.slice(1),
        lineNumber: { new: newLine++ },
      });
    } else if (line.startsWith('-')) {
      result.push({
        type: 'deletion',
        content: line.slice(1),
        lineNumber: { old: oldLine++ },
      });
    } else {
      // Remove leading space if present (context line)
      const content = line.startsWith(' ') ? line.slice(1) : line;
      result.push({
        type: 'context',
        content,
        lineNumber: { old: oldLine++, new: newLine++ },
      });
    }
  }

  return result;
}

export function CodeDiff({ children, language = 'diff', filename, className }: CodeDiffProps) {
  const [highlightedLines, setHighlightedLines] = useState<Map<number, string>>(new Map());
  const code = children?.toString().trim() || '';
  const diffLines = useMemo(() => parseDiff(code), [code]);

  useEffect(() => {
    let cancelled = false;

    const highlightCode = async () => {
      try {
        const { codeToHtml } = await import('shiki');

        const newHighlighted = new Map<number, string>();

        // Highlight each line individually for proper syntax highlighting
        for (let i = 0; i < diffLines.length; i++) {
          const line = diffLines[i];
          if (line.content) {
            try {
              const html = await codeToHtml(line.content, {
                lang: language === 'diff' ? 'typescript' : language,
                themes: {
                  light: 'github-light',
                  dark: 'github-dark',
                },
                defaultColor: false,
              });
              // Extract just the code content
              const match = /<code[^>]*>([\s\S]*?)<\/code>/i.exec(html);
              if (match && !cancelled) {
                newHighlighted.set(i, match[1]);
              }
            } catch {
              // Use plain text if highlighting fails
              if (!cancelled) {
                newHighlighted.set(i, line.content);
              }
            }
          }
        }

        if (!cancelled) {
          setHighlightedLines(newHighlighted);
        }
      } catch (error) {
        console.error('Failed to highlight diff:', error);
      }
    };

    highlightCode();

    return () => {
      cancelled = true;
    };
  }, [diffLines, language]);

  return (
    <div className={cn('not-prose group relative my-4 sm:my-6', className)}>
      {/* Header */}
      <div className="flex items-center justify-between rounded-t-lg border border-b-0 border-border bg-muted/50 px-3 py-1.5 sm:px-4 sm:py-2 dark:bg-muted/30">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-medium tracking-wide text-muted-foreground uppercase sm:text-xs">
            {filename || 'diff'}
          </span>
        </div>
        <div className="flex items-center gap-2 text-[10px] sm:text-xs">
          <span className="text-emerald-600 dark:text-emerald-400">
            +{diffLines.filter((l) => l.type === 'addition').length}
          </span>
          <span className="text-red-600 dark:text-red-400">
            -{diffLines.filter((l) => l.type === 'deletion').length}
          </span>
        </div>
      </div>

      {/* Diff content */}
      <div className="overflow-x-auto rounded-b-lg border border-border bg-white dark:bg-zinc-950">
        <table className="w-full border-collapse text-[12px] leading-relaxed sm:text-[13px] md:text-sm">
          <tbody>
            {diffLines.map((line, index) => (
              <tr
                key={index}
                className={cn(
                  line.type === 'addition' && 'bg-emerald-500/10 dark:bg-emerald-500/15',
                  line.type === 'deletion' && 'bg-red-500/10 dark:bg-red-500/15',
                )}
              >
                {/* Line numbers */}
                <td className="border-r border-border px-2 py-0 text-right align-top font-mono text-muted-foreground/60 select-none">
                  {line.lineNumber.old ?? ''}
                </td>
                <td className="border-r border-border px-2 py-0 text-right align-top font-mono text-muted-foreground/60 select-none">
                  {line.lineNumber.new ?? ''}
                </td>

                {/* Diff indicator */}
                <td
                  className={cn(
                    'px-2 py-0 text-center font-mono select-none',
                    line.type === 'addition' && 'text-emerald-600 dark:text-emerald-400',
                    line.type === 'deletion' && 'text-red-600 dark:text-red-400',
                  )}
                >
                  {line.type === 'addition' ? '+' : line.type === 'deletion' ? '-' : ' '}
                </td>

                {/* Code content */}
                <td className="w-full py-0 pr-4 font-mono whitespace-pre">
                  {highlightedLines.has(index) ? (
                    <span
                      className={cn(
                        '[&_.shiki]:bg-transparent',
                        '[&_.shiki_span]:!text-[var(--shiki-light)] dark:[&_.shiki_span]:!text-[var(--shiki-dark)]',
                      )}
                      dangerouslySetInnerHTML={{ __html: highlightedLines.get(index)! }}
                    />
                  ) : (
                    line.content
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
