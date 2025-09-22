import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*'
      }
    ],
    sitemap: 'https://www.ryne.dev/sitemap.xml'
  };
}
