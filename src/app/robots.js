export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nakulproperties.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      // Block AI Scrapers / LLM Crawlers
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'Google-Extended', 'Anthropic-ai', 'Claude-Web', 'cohere-ai'],
        disallow: '/',
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
