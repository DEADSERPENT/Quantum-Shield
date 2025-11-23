import { MetadataRoute } from 'next';
import { SITEMAP_ROUTES, COMPANY_INFO } from '@/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  return SITEMAP_ROUTES.map((route) => ({
    url: `${COMPANY_INFO.baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: route === '/' ? 1.0 : 0.8,
  }));
}
