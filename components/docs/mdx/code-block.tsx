'use client';

import { useState, useEffect } from 'react';
import { Copy, Check, X } from 'lucide-react';
import { codeToHtml } from 'shiki';
import { cn } from '@/lib/utils';

interface CodeBlockProps {
  children?: string;
  className?: string;
}

export function CodeBlock({ children, className }: CodeBlockProps) {
  const [copyState, setCopyState] = useState<'idle' | 'success' | 'error'>('idle');
  const [highlightedCode, setHighlightedCode] = useState<string>('');

  // Extract language from className (e.g., "language-typescript" -> "typescript")
  const match = /language-(\w+)/.exec(className || '');
  const language = match ? match[1] : 'text';
  const code = children?.toString().trim() || '';

  useEffect(() => {
    let cancelled = false;
    const highlightCode = async () => {
      try {
        const html = await codeToHtml(code, {
          lang: language,
          themes: {
            light: 'github-light',
            dark: 'github-dark',
          },
        });
        if (!cancelled) setHighlightedCode(html);
      } catch (error) {
        try {
          const html = await codeToHtml(code, {
            lang: 'text',
            themes: {
              light: 'github-light',
              dark: 'github-dark',
            },
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

  const handleCopy = async () => {
    if (!code) return;

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
      setTimeout(() => setCopyState('idle'), 2000);
    }
  };

  return (
    <div className="not-prose group relative my-6">
      {/* Header with language label and copy button */}
      <div className="flex items-center justify-between rounded-t-lg border border-b-0 bg-muted px-4 py-2">
        <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          {language}
        </span>
        <button
          onClick={handleCopy}
          className={cn(
            'flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium transition-all',
            'hover:bg-background/50 active:scale-95',
            copyState === 'success'
              ? 'text-emerald-600 dark:text-emerald-400'
              : copyState === 'error'
                ? 'text-red-600 dark:text-red-400'
                : 'text-muted-foreground hover:text-foreground',
          )}
          aria-label="Copy code"
        >
          {copyState === 'success' ? (
            <>
              <Check className="h-3.5 w-3.5" />
              <span>Copied!</span>
            </>
          ) : copyState === 'error' ? (
            <>
              <X className="h-3.5 w-3.5" />
              <span>Copy failed</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span className="opacity-0 transition-opacity group-hover:opacity-100">Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code content */}
      <div className="overflow-hidden rounded-b-lg border">
        {highlightedCode ? (
          <div
            className={cn(
              'overflow-x-auto',
              '[&_pre]:my-0 [&_pre]:rounded-none [&_pre]:border-0',
              '[&_pre]:p-4 [&_pre]:sm:p-5 [&_pre]:md:p-6',
              '[&_code]:text-[13px] [&_code]:leading-relaxed [&_code]:sm:text-sm',
            )}
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          />
        ) : (
          <pre className="overflow-x-auto rounded-b-lg bg-slate-900 p-4 text-slate-50 sm:p-5 md:p-6 dark:bg-slate-950 dark:text-slate-100">
            <code className="text-[13px] leading-relaxed sm:text-sm">{code}</code>
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
