const PRIVATE_HOSTNAMES = new Set(['localhost', '127.0.0.1', '0.0.0.0']);

function isPrivateIpv4(hostname: string) {
  const match = hostname.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);
  if (!match) return false;
  const parts = match.slice(1).map((p) => Number(p));
  if (parts.some((n) => Number.isNaN(n) || n < 0 || n > 255)) return false;
  const [a, b] = parts;

  if (a === 10) return true;
  if (a === 127) return true;
  if (a === 0) return true;
  if (a === 192 && b === 168) return true;
  if (a === 172 && b >= 16 && b <= 31) return true;
  return false;
}

export function parsePublicHttpUrl(urlString: string) {
  let url: URL;
  try {
    url = new URL(urlString);
  } catch {
    return null;
  }

  if (url.protocol !== 'http:' && url.protocol !== 'https:') return null;

  const hostname = url.hostname.toLowerCase();
  if (PRIVATE_HOSTNAMES.has(hostname)) return null;
  if (hostname.endsWith('.local')) return null;
  if (isPrivateIpv4(hostname)) return null;

  return url;
}
