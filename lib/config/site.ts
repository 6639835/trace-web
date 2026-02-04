export const siteUrl = 'https://trace.justinl.site';
export const siteName = 'Trace';

export function absoluteUrl(pathname: string): string {
  return new URL(pathname, siteUrl).toString();
}
