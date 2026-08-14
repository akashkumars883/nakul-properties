export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nakulproperties.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      // Explicitly allow AI Search Engines & LLM Crawlers for GEO (Generative Engine Optimization)
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'Google-Extended',
          'Anthropic-ai',
          'Claude-Web',
          'PerplexityBot',
          'cohere-ai',
          'Bytespider',
        ],
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
