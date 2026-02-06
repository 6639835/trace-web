import { promises as dns } from 'node:dns';
import { BlockList, isIP } from 'node:net';

const PRIVATE_HOSTNAMES = new Set(['localhost', '127.0.0.1', '0.0.0.0', '::1']);

const BLOCKED_ADDRESS_RANGES = new BlockList();

const BLOCKED_IPV4_RANGES: ReadonlyArray<{ base: string; prefix: number }> = [
  { base: '0.0.0.0', prefix: 8 },
  { base: '10.0.0.0', prefix: 8 },
  { base: '100.64.0.0', prefix: 10 },
  { base: '127.0.0.0', prefix: 8 },
  { base: '169.254.0.0', prefix: 16 },
  { base: '172.16.0.0', prefix: 12 },
  { base: '192.0.0.0', prefix: 24 },
  { base: '192.0.2.0', prefix: 24 },
  { base: '192.168.0.0', prefix: 16 },
  { base: '198.18.0.0', prefix: 15 },
  { base: '198.51.100.0', prefix: 24 },
  { base: '203.0.113.0', prefix: 24 },
  { base: '224.0.0.0', prefix: 4 },
  { base: '240.0.0.0', prefix: 4 },
];

const BLOCKED_IPV6_RANGES: ReadonlyArray<{ base: string; prefix: number }> = [
  { base: '::', prefix: 128 },
  { base: '::1', prefix: 128 },
  { base: 'fc00::', prefix: 7 },
  { base: 'fe80::', prefix: 10 },
  { base: 'ff00::', prefix: 8 },
  { base: '2001:db8::', prefix: 32 },
];

for (const { base, prefix } of BLOCKED_IPV4_RANGES) {
  BLOCKED_ADDRESS_RANGES.addSubnet(base, prefix, 'ipv4');
}

for (const { base, prefix } of BLOCKED_IPV6_RANGES) {
  BLOCKED_ADDRESS_RANGES.addSubnet(base, prefix, 'ipv6');
}

function isBlockedAddress(address: string, family: 4 | 6) {
  if (BLOCKED_ADDRESS_RANGES.check(address, family === 4 ? 'ipv4' : 'ipv6')) {
    return true;
  }

  // Handle IPv4-mapped IPv6 addresses such as ::ffff:127.0.0.1.
  if (family === 6 && address.startsWith('::ffff:')) {
    const mapped = address.slice('::ffff:'.length);
    if (isIP(mapped) === 4 && BLOCKED_ADDRESS_RANGES.check(mapped, 'ipv4')) {
      return true;
    }
  }

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
  if (url.username || url.password) return null;

  const hostname = url.hostname.toLowerCase();
  if (PRIVATE_HOSTNAMES.has(hostname)) return null;
  if (hostname.endsWith('.local')) return null;

  const family = isIP(hostname);
  if (family === 4 || family === 6) {
    if (isBlockedAddress(hostname, family)) return null;
  }

  return url;
}

export async function hasPublicDnsResolution(hostname: string): Promise<boolean> {
  const normalizedHostname = hostname.toLowerCase();
  const family = isIP(normalizedHostname);

  if (family === 4 || family === 6) {
    return !isBlockedAddress(normalizedHostname, family);
  }

  try {
    const records = await dns.lookup(normalizedHostname, { all: true, verbatim: true });
    if (records.length === 0) return false;

    return records.every((record) => {
      const family = record.family === 6 ? 6 : 4;
      return !isBlockedAddress(record.address, family);
    });
  } catch {
    return false;
  }
}
