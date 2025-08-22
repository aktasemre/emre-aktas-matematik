import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      // AI arama motorları için özel kurallar
      {
        userAgent: 'bingbot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
        crawlDelay: 1,
      },
      {
        userAgent: 'claude-web',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: 'anthropic-ai',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: 'chatgpt',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: 'gemini',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: 'https://emreaktas-matematik.com/sitemap.xml',
    // AI arama motorları için ek bilgiler
    host: 'https://emreaktas-matematik.com',
  }
}
