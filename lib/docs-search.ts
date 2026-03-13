import Fuse, { type FuseIndexRecords, type IFuseOptions } from 'fuse.js';

export interface DocsSearchEntry {
  title: string;
  href: string;
  pageHref: string;
  section: string;
  headings: string[];
  content: string;
}

export interface DocsSearchPayload {
  entries: DocsSearchEntry[];
  index: {
    keys: ReadonlyArray<string>;
    records: FuseIndexRecords;
  };
}

export interface DocsSearchEngine {
  entries: DocsSearchEntry[];
  fuse: Fuse<DocsSearchEntry>;
}

export interface DocsSearchResult {
  title: string;
  href: string;
  pageHref: string;
  section: string;
  context?: string;
  snippet: string;
  score: number;
}

interface ParsedDocSection {
  href: string;
  headings: string[];
  content: string;
}

const NON_ALPHANUMERIC = /[^a-z0-9\s]/g;
const MULTIPLE_SPACES = /\s+/g;

const DOCS_SEARCH_OPTIONS: IFuseOptions<DocsSearchEntry> = {
  keys: [
    { name: 'title', weight: 5 },
    { name: 'headings', weight: 4 },
    { name: 'section', weight: 2 },
    { name: 'content', weight: 1 },
  ],
  threshold: 0.32,
  ignoreLocation: true,
  ignoreDiacritics: true,
  findAllMatches: true,
  includeMatches: true,
  includeScore: true,
  minMatchCharLength: 2,
  shouldSort: true,
};

export function normalizeForSearch(value: string): string {
  return value.toLowerCase().replace(NON_ALPHANUMERIC, ' ').replace(MULTIPLE_SPACES, ' ').trim();
}

function splitSearchTokens(value: string): string[] {
  return normalizeForSearch(value).split(' ').filter(Boolean);
}

function stripInlineMdx(value: string): string {
  return value
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, ' $1 ')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, ' $1 ')
    .replace(/`([^`]*)`/g, ' $1 ')
    .replace(/<[^>]*>/g, ' ')
    .replace(/\{[^}]*\}/g, ' ')
    .replace(/[>*_~|]/g, ' ')
    .replace(MULTIPLE_SPACES, ' ')
    .trim();
}

export function extractSearchableTextFromMdx(content: string): string {
  return content
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/~~~[\s\S]*?~~~/g, ' ')
    .replace(/^\s*(import|export)\s.+$/gm, ' ')
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, ' $1 ')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, ' $1 ')
    .replace(/`([^`]*)`/g, ' $1 ')
    .replace(/<[^>]*>/g, ' ')
    .replace(/\{[^}]*\}/g, ' ')
    .replace(/[>#*_~|-]/g, ' ')
    .replace(MULTIPLE_SPACES, ' ')
    .trim();
}

function createHeadingSlug(text: string, seenSlugs: Map<string, number>): string {
  const baseSlug = text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(MULTIPLE_SPACES, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  const slug = baseSlug || 'section';
  const count = seenSlugs.get(slug) ?? 0;
  seenSlugs.set(slug, count + 1);
  return count === 0 ? slug : `${slug}-${count}`;
}

function finalizeSection(section: ParsedDocSection | null): ParsedDocSection | null {
  if (!section) return null;

  return {
    ...section,
    content: extractSearchableTextFromMdx(section.content),
  };
}

export function createDocsSearchEntriesFromMdx(
  item: Pick<DocsSearchEntry, 'title' | 'pageHref' | 'section'>,
  rawContent: string,
): DocsSearchEntry[] {
  const overviewLines: string[] = [];
  const sections: ParsedDocSection[] = [];
  const headingTrail: Array<{ level: number; title: string }> = [];
  const seenSlugs = new Map<string, number>();
  let currentSection: ParsedDocSection | null = null;
  let inCodeFence = false;

  const pushCurrentSection = () => {
    const finalized = finalizeSection(currentSection);
    if (finalized) {
      sections.push(finalized);
    }
    currentSection = null;
  };

  for (const line of rawContent.split('\n')) {
    const trimmedLine = line.trim();

    if (/^(```|~~~)/.test(trimmedLine)) {
      inCodeFence = !inCodeFence;
      if (currentSection) {
        currentSection.content += `${line}\n`;
      } else {
        overviewLines.push(line);
      }
      continue;
    }

    if (inCodeFence) {
      if (currentSection) {
        currentSection.content += `${line}\n`;
      } else {
        overviewLines.push(line);
      }
      continue;
    }

    const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
    if (!headingMatch) {
      if (currentSection) {
        currentSection.content += `${line}\n`;
      } else {
        overviewLines.push(line);
      }
      continue;
    }

    const [, headingHashes = '', rawHeading = ''] = headingMatch;
    const level = headingHashes.length;
    const headingText = stripInlineMdx(rawHeading);
    if (!headingText) continue;

    if (level === 1) {
      pushCurrentSection();
      headingTrail.length = 0;
      continue;
    }

    pushCurrentSection();

    while (
      headingTrail.length > 0 &&
      (headingTrail[headingTrail.length - 1]?.level ?? 0) >= level
    ) {
      headingTrail.pop();
    }

    headingTrail.push({ level, title: headingText });

    currentSection = {
      href: `${item.pageHref}#${createHeadingSlug(headingText, seenSlugs)}`,
      headings: headingTrail.map((heading) => heading.title),
      content: '',
    };
  }

  pushCurrentSection();

  const overviewContent = extractSearchableTextFromMdx(overviewLines.join('\n'));
  const fallbackContent =
    overviewContent ||
    sections
      .map((section) => section.content)
      .filter(Boolean)
      .join(' ');

  const entries: DocsSearchEntry[] = [
    {
      title: item.title,
      href: item.pageHref,
      pageHref: item.pageHref,
      section: item.section,
      headings: [],
      content: fallbackContent,
    },
  ];

  for (const sectionEntry of sections) {
    entries.push({
      title: item.title,
      href: sectionEntry.href,
      pageHref: item.pageHref,
      section: item.section,
      headings: sectionEntry.headings,
      content: sectionEntry.content,
    });
  }

  return entries;
}

export function createDocsSearchPayload(entries: DocsSearchEntry[]): DocsSearchPayload {
  const keys = DOCS_SEARCH_OPTIONS.keys ?? [];
  const index = Fuse.createIndex(keys, entries).toJSON();

  return {
    entries,
    index,
  };
}

export function createDocsSearchEngine(payload: DocsSearchPayload): DocsSearchEngine {
  return {
    entries: payload.entries,
    fuse: new Fuse(
      payload.entries,
      DOCS_SEARCH_OPTIONS,
      Fuse.parseIndex<DocsSearchEntry>(payload.index),
    ),
  };
}

function countMatchedTokens(entry: DocsSearchEntry, queryTokens: string[]): number {
  if (queryTokens.length === 0) return 0;

  const searchableText = normalizeForSearch(
    [entry.title, entry.section, ...entry.headings, entry.content].join(' '),
  );

  return queryTokens.reduce(
    (count, token) => (searchableText.includes(token) ? count + 1 : count),
    0,
  );
}

interface TokenMatchCounts {
  exact: number;
  prefix: number;
}

interface StrictTokenMatchSignals {
  exactTitleTokens: number;
  exactHeadingTokens: number;
  exactSectionTokens: number;
  exactContentTokens: number;
  prefixTitleTokens: number;
  prefixHeadingTokens: number;
  prefixSectionTokens: number;
  prefixContentTokens: number;
}

interface RankedSearchResult extends DocsSearchResult {
  matchedTokens: number;
  strictMatchRank: number;
}

function countExactAndPrefixTokenMatches(source: string, queryTokens: string[]): TokenMatchCounts {
  const sourceTokens = splitSearchTokens(source);
  if (sourceTokens.length === 0 || queryTokens.length === 0) {
    return { exact: 0, prefix: 0 };
  }

  const uniqueTokens = new Set(sourceTokens);

  return queryTokens.reduce<TokenMatchCounts>(
    (counts, token) => {
      if (uniqueTokens.has(token)) {
        counts.exact += 1;
        return counts;
      }

      if (sourceTokens.some((sourceToken) => sourceToken.startsWith(token))) {
        counts.prefix += 1;
      }

      return counts;
    },
    { exact: 0, prefix: 0 },
  );
}

function getStrictTokenMatchSignals(
  entry: DocsSearchEntry,
  queryTokens: string[],
): StrictTokenMatchSignals {
  const titleMatches = countExactAndPrefixTokenMatches(entry.title, queryTokens);
  const headingMatches = countExactAndPrefixTokenMatches(entry.headings.join(' '), queryTokens);
  const sectionMatches = countExactAndPrefixTokenMatches(entry.section, queryTokens);
  const contentMatches = countExactAndPrefixTokenMatches(entry.content, queryTokens);

  return {
    exactTitleTokens: titleMatches.exact,
    exactHeadingTokens: headingMatches.exact,
    exactSectionTokens: sectionMatches.exact,
    exactContentTokens: contentMatches.exact,
    prefixTitleTokens: titleMatches.prefix,
    prefixHeadingTokens: headingMatches.prefix,
    prefixSectionTokens: sectionMatches.prefix,
    prefixContentTokens: contentMatches.prefix,
  };
}

function getStrictShortQueryRank(signals: StrictTokenMatchSignals): number {
  return (
    signals.exactTitleTokens * 64 +
    signals.exactHeadingTokens * 48 +
    signals.exactSectionTokens * 32 +
    signals.exactContentTokens * 16 +
    signals.prefixTitleTokens * 8 +
    signals.prefixHeadingTokens * 6 +
    signals.prefixSectionTokens * 4 +
    signals.prefixContentTokens * 2
  );
}

function isStrictShortQuery(queryTokens: string[]): boolean {
  return queryTokens.length === 1 && (queryTokens[0]?.length ?? 0) <= 5;
}

function createSearchSnippet(
  content: string,
  queryTokens: string[],
  matchedIndices?: ReadonlyArray<readonly [number, number]>,
  maxLength = 170,
): string {
  if (!content) return '';

  const firstMatch = matchedIndices?.[0]?.[0];
  let snippetStart = 0;

  if (typeof firstMatch === 'number') {
    snippetStart = Math.max(0, firstMatch - Math.floor(maxLength / 2));
  } else {
    const normalizedContent = normalizeForSearch(content);
    const fallbackIndex = queryTokens
      .map((token) => normalizedContent.indexOf(token))
      .filter((index) => index >= 0)
      .sort((a, b) => a - b)[0];

    if (fallbackIndex !== undefined) {
      snippetStart = Math.max(0, fallbackIndex - Math.floor(maxLength / 2));
    }
  }

  const snippetEnd = Math.min(content.length, snippetStart + maxLength);
  const rawSnippet = content.slice(snippetStart, snippetEnd).trim();

  const prefix = snippetStart > 0 ? '...' : '';
  const suffix = snippetEnd < content.length ? '...' : '';

  return `${prefix}${rawSnippet}${suffix}`;
}

export function searchDocs(
  searchEngine: DocsSearchEngine,
  query: string,
  limit = 12,
): DocsSearchResult[] {
  const trimmedQuery = query.trim();
  if (!trimmedQuery) return [];

  const queryTokens = splitSearchTokens(trimmedQuery);
  const strictShortQuery = isStrictShortQuery(queryTokens);
  const rawResults = searchEngine.fuse.search(trimmedQuery, { limit: limit * 5 });
  const rankedResults = new Map<string, RankedSearchResult>();

  const upsertResult = (
    entry: DocsSearchEntry,
    score: number,
    matchedIndices?: ReadonlyArray<readonly [number, number]>,
  ) => {
    const strictMatchRank = getStrictShortQueryRank(getStrictTokenMatchSignals(entry, queryTokens));
    const nextResult: RankedSearchResult = {
      title: entry.title,
      href: entry.href,
      pageHref: entry.pageHref,
      section: entry.section,
      context: entry.headings.length > 0 ? entry.headings.join(' / ') : undefined,
      snippet: createSearchSnippet(entry.content, queryTokens, matchedIndices),
      score,
      matchedTokens: countMatchedTokens(entry, queryTokens),
      strictMatchRank,
    };
    const existingResult = rankedResults.get(entry.href);

    if (!existingResult) {
      rankedResults.set(entry.href, nextResult);
      return;
    }

    rankedResults.set(entry.href, {
      ...nextResult,
      snippet:
        existingResult.snippet.length >= nextResult.snippet.length
          ? existingResult.snippet
          : nextResult.snippet,
      score: Math.min(existingResult.score, nextResult.score),
      matchedTokens: Math.max(existingResult.matchedTokens, nextResult.matchedTokens),
      strictMatchRank: Math.max(existingResult.strictMatchRank, nextResult.strictMatchRank),
    });
  };

  if (strictShortQuery) {
    for (const entry of searchEngine.entries) {
      const strictMatchRank = getStrictShortQueryRank(
        getStrictTokenMatchSignals(entry, queryTokens),
      );
      if (strictMatchRank > 0) {
        upsertResult(entry, 1);
      }
    }
  }

  for (const result of rawResults) {
    const contentMatch = result.matches?.find(
      (match) => match.key === 'content' && match.indices.length > 0,
    );

    upsertResult(result.item, result.score ?? 1, contentMatch?.indices);
  }

  return Array.from(rankedResults.values())
    .sort(
      (a, b) =>
        (strictShortQuery ? b.strictMatchRank - a.strictMatchRank : 0) ||
        b.matchedTokens - a.matchedTokens ||
        a.score - b.score ||
        Number(Boolean(b.context)) - Number(Boolean(a.context)) ||
        a.title.localeCompare(b.title),
    )
    .slice(0, limit)
    .map((result) => ({
      title: result.title,
      href: result.href,
      pageHref: result.pageHref,
      section: result.section,
      context: result.context,
      snippet: result.snippet,
      score: result.score,
    }));
}
