import { MetadataRoute } from 'next';
import { CITIES, SERVICES } from '@/lib/siteConfig';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://thefloridarestorationpros.com';
  const now = new Date();

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/contact/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    ...CITIES.map((c) => ({
      url: `${base}/water-damage-restoration/${c.slug}/`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),
    ...SERVICES.map((s) => ({
      url: `${base}/services/${s.slug}/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
