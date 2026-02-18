'use client';

import { useState, useEffect, useRef } from 'react';
import { Copy, Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CodeBlockProps {
  children?: string;
  className?: string;
}

export function CodeBlock({ children, className }: CodeBlockProps) {
  const [copyState, setCopyState] = useState<'idle' | 'success' | 'error'>('idle');
  const [highlightedCode, setHighlightedCode] = useState<string>('');
  const resetTimerRef = useRef<number | null>(null);

  // Extract language from className (e.g., "language-typescript" -> "typescript")
  const match = /language-([\w-]+)/.exec(className || '');
  const language = match?.[1] ?? 'text';
  const code = children?.toString().trim() || '';

  useEffect(() => {
    let cancelled = false;
    const highlightCode = async () => {
      if (!code) {
        setHighlightedCode('');
        return;
      }

      try {
        const { codeToHtml } = await import('shiki');
        const html = await codeToHtml(code, {
          lang: language,
          themes: {
            light: 'github-light',
            dark: 'github-dark',
          },
          defaultColor: false, // Required for CSS-based theme switching
        });
        if (!cancelled) setHighlightedCode(html);
      } catch (error) {
        try {
          const { codeToHtml } = await import('shiki');
          const html = await codeToHtml(code, {
            lang: 'text',
            themes: {
              light: 'github-light',
              dark: 'github-dark',
            },
            defaultColor: false,
          });
          if (!cancelled) setHighlightedCode(html);
        } catch {
          console.error('Failed to highlight code block:', error);
          if (!cancelled) setHighlightedCode('');
        }
      }
    };

    highlightCode();
    return () => {
      cancelled = true;
    };
  }, [code, language]);

  useEffect(() => {
    return () => {
      if (resetTimerRef.current !== null) {
        window.clearTimeout(resetTimerRef.current);
      }
    };
  }, []);

  const handleCopy = async () => {
    if (!code) return;

    if (resetTimerRef.current !== null) {
      window.clearTimeout(resetTimerRef.current);
      resetTimerRef.current = null;
    }

    try {
      if (navigator.clipboard?.writeText && window.isSecureContext) {
        await navigator.clipboard.writeText(code);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = code;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'fixed';
        textarea.style.left = '-9999px';
        textarea.style.top = '0';
        document.body.appendChild(textarea);
        textarea.select();
        const ok = document.execCommand('copy');
        document.body.removeChild(textarea);
        if (!ok) throw new Error('document.execCommand("copy") failed');
      }

      setCopyState('success');
    } catch (error) {
      console.warn('Failed to copy code block:', error);
      setCopyState('error');
    } finally {
      resetTimerRef.current = window.setTimeout(() => setCopyState('idle'), 2000);
    }
  };

  return (
    <div className="not-prose group relative my-4 sm:my-6">
      {/* Header with language label and copy button */}
      <div className="flex items-center justify-between rounded-t-lg border border-b-0 border-border bg-muted/50 px-3 py-1.5 sm:px-4 sm:py-2 dark:bg-muted/30">
        <span className="text-[10px] font-medium tracking-wide text-muted-foreground uppercase sm:text-xs">
          {language}
        </span>
        <button
          onClick={handleCopy}
          className={cn(
            'flex items-center gap-1 rounded-md px-1.5 py-1 text-[10px] font-medium transition-all sm:gap-1.5 sm:px-2 sm:text-xs',
            'active:scale-95',
            copyState === 'success'
              ? 'text-primary'
              : copyState === 'error'
                ? 'text-destructive'
                : 'text-muted-foreground hover:text-foreground',
          )}
          aria-label="Copy code"
        >
          {copyState === 'success' ? (
            <>
              <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              <span className="hidden xs:inline sm:inline">Copied!</span>
            </>
          ) : copyState === 'error' ? (
            <>
              <X className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              <span className="hidden sm:inline">Failed</span>
            </>
          ) : (
            <>
              <Copy className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code content */}
      <div className="overflow-hidden rounded-b-lg border border-border bg-card">
        {highlightedCode ? (
          <div
            className={cn(
              'overflow-x-auto',
              // Shiki dual-theme support
              '[&_.shiki]:bg-transparent',
              '[&_.shiki_span]:!text-[var(--shiki-light)] dark:[&_.shiki_span]:!text-[var(--shiki-dark)]',
              // Pre and code styling
              '[&_pre]:my-0 [&_pre]:rounded-none [&_pre]:border-0 [&_pre]:bg-transparent',
              '[&_pre]:p-3 [&_pre]:sm:p-4 [&_pre]:md:p-5',
              '[&_code]:text-[12px] [&_code]:leading-relaxed [&_code]:sm:text-[13px] [&_code]:md:text-sm',
            )}
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          />
        ) : (
          <pre className="overflow-x-auto bg-muted/40 p-3 text-foreground sm:p-4 md:p-5">
            <code className="text-[12px] leading-relaxed sm:text-[13px] md:text-sm">{code}</code>
          </pre>
        )}
      </div>
    </div>
  );
}

// Inline code component
export function InlineCode({ children, className }: CodeBlockProps) {
  return (
    <code
      className={cn('rounded-sm bg-muted px-1.5 py-0.5 font-mono text-sm break-words', className)}
    >
      {children}
    </code>
  );
}
