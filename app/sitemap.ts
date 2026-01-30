import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://trace.justinl.site';
  const currentDate = new Date();

  // Main pages
  const routes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/features`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/architecture`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/open-source`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];

  // Documentation pages
  const docPages = [
    'quick-start',
    'installation',
    'architecture',
    'websockets',
    'sse',
    'udp',
    'certificates',
    'cert-pinning',
    'request-inspection',
    'filtering',
    'favorites',
    'throttling',
    'scripts',
    'breakpoints',
    'request-maps',
    'hosts',
    'dns',
    'request-builder',
    'charles-import',
    'postman-export',
    'exporting',
    'sessions',
    'utilities',
    'diagnostics',
    'performance',
    'cicd',
    'development',
    'proxy-modes',
    'api',
  ];

  const docRoutes = docPages.map((page) => ({
    url: `${baseUrl}/docs/${page}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  // Main docs page
  const docsIndex = {
    url: `${baseUrl}/docs`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  };

  return [docsIndex, ...routes, ...docRoutes];
}
