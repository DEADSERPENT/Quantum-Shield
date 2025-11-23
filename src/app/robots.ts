import { MetadataRoute } from 'next';
import { COMPANY_INFO } from '@/constants';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // disallow: ['/admin', '/api/private'] // (add later if needed)
    },
    sitemap: `${COMPANY_INFO.baseUrl}/sitemap.xml`,
    host: COMPANY_INFO.baseUrl,
  };
}
