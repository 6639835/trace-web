'use client';

import { useEffect, useRef, useState, useId } from 'react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import { Copy, Check, X, ZoomIn, ZoomOut } from 'lucide-react';

interface MermaidProps {
  children?: string;
  chart?: string;
  className?: string;
}

export function Mermaid({ children, chart, className }: MermaidProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [copyState, setCopyState] = useState<'idle' | 'success' | 'error'>('idle');
  const [zoom, setZoom] = useState(1);
  const { resolvedTheme } = useTheme();
  const uniqueId = useId();

  const code = (children || chart || '').toString().trim();

  useEffect(() => {
    if (!code || !containerRef.current) return;

    let cancelled = false;

    const renderDiagram = async () => {
      try {
        const mermaid = (await import('mermaid')).default;

        // Configure mermaid based on theme
        mermaid.initialize({
          startOnLoad: false,
          theme: resolvedTheme === 'dark' ? 'dark' : 'default',
          securityLevel: 'loose',
          fontFamily: 'ui-sans-serif, system-ui, sans-serif',
          flowchart: {
            useMaxWidth: true,
            htmlLabels: true,
            curve: 'basis',
          },
          sequence: {
            useMaxWidth: true,
          },
          gantt: {
            useMaxWidth: true,
          },
        });

        // Create a unique ID for the diagram
        const id = `mermaid-${uniqueId.replace(/:/g, '-')}`;

        // Render the diagram
        const { svg } = await mermaid.render(id, code);

        if (!cancelled && containerRef.current) {
          containerRef.current.innerHTML = svg;
          setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          console.error('Mermaid rendering error:', err);
          setError(err instanceof Error ? err.message : 'Failed to render diagram');
        }
      }
    };

    renderDiagram();

    return () => {
      cancelled = true;
    };
  }, [code, resolvedTheme, uniqueId]);

  const handleCopy = async () => {
    if (!code) return;

    try {
      await navigator.clipboard.writeText(code);
      setCopyState('success');
    } catch {
      setCopyState('error');
    } finally {
      setTimeout(() => setCopyState('idle'), 2000);
    }
  };

  const handleZoomIn = () => setZoom((z) => Math.min(z + 0.25, 2));
  const handleZoomOut = () => setZoom((z) => Math.max(z - 0.25, 0.5));
  const handleResetZoom = () => setZoom(1);

  if (error) {
    return (
      <div className={cn('not-prose my-4 sm:my-6', className)}>
        <div className="rounded-lg border border-destructive/20 bg-destructive/10 p-4">
          <p className="text-sm font-medium text-destructive">Failed to render diagram</p>
          <p className="mt-1 text-xs text-destructive/80">{error}</p>
          <pre className="mt-2 overflow-x-auto rounded bg-destructive/10 p-2 text-xs text-destructive">
            {code}
          </pre>
        </div>
      </div>
    );
  }

  return (
    <div className={cn('not-prose my-4 sm:my-6', className)}>
      {/* Header */}
      <div className="flex items-center justify-between rounded-t-lg border border-b-0 border-border bg-muted/50 px-3 py-1.5 sm:px-4 sm:py-2 dark:bg-muted/30">
        <span className="text-[10px] font-medium tracking-wide text-muted-foreground uppercase sm:text-xs">
          Diagram
        </span>
        <div className="flex items-center gap-1">
          {/* Zoom controls */}
          <button
            onClick={handleZoomOut}
            className="rounded p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Zoom out"
          >
            <ZoomOut className="h-3.5 w-3.5" />
          </button>
          <button
            onClick={handleResetZoom}
            className="rounded px-1.5 py-1 text-[10px] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:text-xs"
            aria-label="Reset zoom"
          >
            {Math.round(zoom * 100)}%
          </button>
          <button
            onClick={handleZoomIn}
            className="rounded p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Zoom in"
          >
            <ZoomIn className="h-3.5 w-3.5" />
          </button>

          <div className="mx-1 h-4 w-px bg-border" />

          {/* Copy button */}
          <button
            onClick={handleCopy}
            className={cn(
              'flex items-center gap-1 rounded p-1 text-[10px] font-medium transition-colors sm:text-xs',
              copyState === 'success'
                ? 'text-primary'
                : copyState === 'error'
                  ? 'text-destructive'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground',
            )}
            aria-label="Copy diagram code"
          >
            {copyState === 'success' ? (
              <Check className="h-3.5 w-3.5" />
            ) : copyState === 'error' ? (
              <X className="h-3.5 w-3.5" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
          </button>
        </div>
      </div>

      {/* Diagram container */}
      <div className="overflow-hidden rounded-b-lg border border-border bg-card">
        <div className="overflow-auto p-4 sm:p-6">
          <div
            ref={containerRef}
            style={{ transform: `scale(${zoom})`, transformOrigin: 'top left' }}
            className={cn(
              'flex items-center justify-center transition-transform duration-200',
              // Mermaid SVG styling
              '[&_svg]:max-w-full',
              '[&_.nodeLabel]:text-foreground',
              '[&_.label]:text-foreground',
            )}
          />
        </div>
      </div>
    </div>
  );
}
