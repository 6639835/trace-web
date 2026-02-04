function decodeHtmlEntities(value: string) {
  return value
    .replaceAll('&amp;', '&')
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'")
    .replaceAll('&nbsp;', ' ')
    .replace(/&#(\d+);/g, (_, n: string) => {
      const codePoint = Number(n);
      if (!Number.isFinite(codePoint)) return _;
      try {
        return String.fromCodePoint(codePoint);
      } catch {
        return _;
      }
    });
}

function matchMeta(html: string, selectors: Array<{ attr: 'property' | 'name'; key: string }>) {
  for (const { attr, key } of selectors) {
    const pattern = new RegExp(
      `<meta[^>]*\\b${attr}\\s*=\\s*["']${key.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&')}["'][^>]*>`,
      'i',
    );
    const tagMatch = html.match(pattern);
    if (!tagMatch?.[0]) continue;
    const tag = tagMatch[0];
    const contentMatch = tag.match(/\bcontent\s*=\s*["']([^"']+)["']/i);
    if (!contentMatch?.[1]) continue;
    return decodeHtmlEntities(contentMatch[1].trim());
  }
  return undefined;
}

function matchTitle(html: string) {
  const match = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  if (!match?.[1]) return undefined;
  return decodeHtmlEntities(match[1].trim());
}

export type HtmlMetadata = {
  title?: string;
  description?: string;
  image?: string;
  siteName?: string;
};

export function extractHtmlMetadata(html: string): HtmlMetadata {
  const title =
    matchMeta(html, [
      { attr: 'property', key: 'og:title' },
      { attr: 'name', key: 'twitter:title' },
    ]) ?? matchTitle(html);

  const description = matchMeta(html, [
    { attr: 'property', key: 'og:description' },
    { attr: 'name', key: 'description' },
    { attr: 'name', key: 'twitter:description' },
  ]);

  const image = matchMeta(html, [
    { attr: 'property', key: 'og:image' },
    { attr: 'name', key: 'twitter:image' },
    { attr: 'name', key: 'twitter:image:src' },
  ]);

  const siteName = matchMeta(html, [{ attr: 'property', key: 'og:site_name' }]);

  return { title, description, image, siteName };
}
