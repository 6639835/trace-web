'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
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

const FALLBACK_SCROLL_OFFSET_PX = 96;

const getTocRoot = () =>
  document.querySelector<HTMLElement>('[data-toc-root]') ??
  document.querySelector<HTMLElement>('article');

const getScrollOffset = (heading: HTMLElement | undefined) => {
  if (!heading) {
    return FALLBACK_SCROLL_OFFSET_PX;
  }

  const scrollMarginTop = Number.parseFloat(getComputedStyle(heading).scrollMarginTop);
  if (Number.isFinite(scrollMarginTop) && scrollMarginTop > 0) {
    return scrollMarginTop;
  }

  return FALLBACK_SCROLL_OFFSET_PX;
};

export function DocsTableOfContents() {
  const pathname = usePathname();
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  const scrollToHeading = useCallback((id: string) => {
    const heading = document.getElementById(id);
    if (!heading) return;

    heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  useEffect(() => {
    const updateItems = () => {
      const article = getTocRoot();
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
    const article = getTocRoot();
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

    let frame = 0;

    const updateActiveId = () => {
      const threshold = window.scrollY + getScrollOffset(headings[0]) + 1;
      const firstHeading = headings[0];
      if (!firstHeading) return;
      let currentId = firstHeading.id;

      for (const heading of headings) {
        if (heading.offsetTop <= threshold) {
          currentId = heading.id;
        } else {
          break;
        }
      }

      setActiveId((previous) => (previous === currentId ? previous : currentId));
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActiveId);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [items]);

  const renderedItems = useMemo(() => {
    return items.map((item) => {
      const isActive = item.id === activeId;
      return (
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={(event) => {
            event.preventDefault();
            setActiveId(item.id);
            scrollToHeading(item.id);

            if (window.location.hash !== `#${item.id}`) {
              window.history.replaceState(null, '', `#${item.id}`);
            }
          }}
          className={[
            'block rounded-sm px-2 py-1 text-sm transition',
            item.level === 3 ? 'ml-3 text-xs' : 'font-medium',
            isActive ? 'bg-muted text-foreground' : 'text-muted-foreground hover:text-foreground',
          ].join(' ')}
        >
          {item.text}
        </a>
      );
    });
  }, [activeId, items, scrollToHeading]);

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
