import { client } from '@/sanity/lib/client';

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nakulproperties.com';

  // Dynamic category slugs
  const categories = [
    'huda-plots',
    'gated-townships',
    'commercial-rent-sale',
    'builder-floors'
  ];

  // Dynamic location slugs
  const locations = [
    'sector-14-15',
    'sector-21-28',
    'sector-81-89',
    'sector-mathura-road'
  ];

  // Dynamic high-intent SEO keyword slugs
  const deals = [
    'best-property-dealer-faridabad',
    'huda-plots-for-sale-faridabad',
    'luxury-builder-floors-faridabad',
    'plots-for-sale-greater-faridabad',
    'commercial-sco-plots-faridabad'
  ];

  // Base pages sitemap
  const routes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    }
  ];

  // Add categories to sitemap
  categories.forEach((cat) => {
    routes.push({
      url: `${baseUrl}/properties/${cat}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    });
  });

  // Add locations to sitemap
  locations.forEach((loc) => {
    routes.push({
      url: `${baseUrl}/locations/${loc}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    });
  });

  // Add SEO Deals pages to sitemap
  deals.forEach((deal) => {
    routes.push({
      url: `${baseUrl}/deals/${deal}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    });
  });

  // Fetch all dynamic keyword pages from Sanity and add to sitemap
  try {
    const sanityKeywords = await client.fetch(`*[_type == "keywordPage" && defined(slug.current)]`);
    sanityKeywords.forEach((kp) => {
      routes.push({
        url: `${baseUrl}/deals/${kp.slug.current}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      });
    });
  } catch (error) {
    console.error('Failed to fetch dynamic keyword pages for sitemap:', error);
  }

  // Fetch all dynamic blogs from Sanity and add to sitemap
  try {
    const posts = await client.fetch(`*[_type == "post" && defined(slug.current)]`);
    posts.forEach((post) => {
      routes.push({
        url: `${baseUrl}/blog/${post.slug.current}`,
        lastModified: new Date(post.publishedAt || new Date()),
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    });
  } catch (error) {
    console.error('Failed to fetch posts for sitemap:', error);
  }

  return routes;
}
