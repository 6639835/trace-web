'use client';

import { useEffect, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';

type TocItem = {
  id: string;
  text: string;
  level: number;
};

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

export function DocsTableOfContents() {
  const pathname = usePathname();
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const updateItems = () => {
      const article = document.querySelector('article');
      if (!article) {
        setItems([]);
        setActiveId('');
        return;
      }

      const headingElements = Array.from(article.querySelectorAll<HTMLHeadingElement>('h2, h3'));

      const seen = new Map<string, number>();
      const nextItems = headingElements
        .filter((heading) => !heading.closest('[data-toc="ignore"]'))
        .map((heading) => {
          const text = heading.textContent?.trim() ?? '';
          if (!text) {
            return null;
          }

          let id = heading.id;
          if (!id) {
            const base = slugify(text);
            const count = seen.get(base) ?? 0;
            const unique = count === 0 ? base : `${base}-${count}`;
            seen.set(base, count + 1);
            id = unique;
            heading.id = unique;
          }

          const level = heading.tagName === 'H2' ? 2 : 3;
          return { id, text, level };
        })
        .filter((item): item is TocItem => Boolean(item));

      setItems(nextItems);
      setActiveId(nextItems[0]?.id ?? '');
    };

    let frame = requestAnimationFrame(updateItems);
    const article = document.querySelector('article');
    if (!article) {
      return () => cancelAnimationFrame(frame);
    }

    const observer = new MutationObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateItems);
    });

    observer.observe(article, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [pathname]);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (headings.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: '0px 0px -70% 0px',
        threshold: [0.1, 0.5, 1],
      },
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, [items]);

  const renderedItems = useMemo(() => {
    return items.map((item) => {
      const isActive = item.id === activeId;
      return (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={[
            'block rounded px-2 py-1 text-sm transition',
            item.level === 3 ? 'ml-3 text-xs' : 'font-medium',
            isActive ? 'bg-muted text-foreground' : 'text-muted-foreground hover:text-foreground',
          ].join(' ')}
        >
          {item.text}
        </a>
      );
    });
  }, [activeId, items]);

  return (
    <div className="space-y-2">
      <p className="mb-4 text-sm font-medium">On This Page</p>
      {items.length === 0 ? (
        <p className="text-xs text-muted-foreground">No headings found for this page.</p>
      ) : (
        <nav className="space-y-1">{renderedItems}</nav>
      )}
    </div>
  );
}
