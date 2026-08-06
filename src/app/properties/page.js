import Navbar from '@/components/Navbar';
import AllPropertiesClient from '@/components/AllPropertiesClient';
import { client } from '@/sanity/lib/client';

export const metadata = {
  title: 'All Properties | Nakul Properties Faridabad',
  description: 'Browse all verified residential plots, HUDA plots, gated townships, commercial shops, and independent builder floors listed in Faridabad.',
  alternates: {
    canonical: '/properties',
  },
};

export const dynamic = 'force-dynamic';

export default async function AllPropertiesPage() {
  // Fetch all properties from Sanity
  const properties = await client.fetch(`*[_type == "property"] | order(_createdAt desc)`);

  // Generate ItemList JSON-LD Schema for Google SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'All Listed Properties - Nakul Properties',
    'description': 'Browse all verified residential plots, HUDA plots, gated townships, commercial shops, and independent builder floors listed in Faridabad.',
    'numberOfItems': properties.length,
    'itemListElement': properties.map((prop, idx) => ({
      '@type': 'ListItem',
      'position': idx + 1,
      'name': prop.title,
      'url': `https://nakulproperties.com/property/${prop.slug?.current || prop._id}`,
    })),
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Insert JSON-LD script for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <AllPropertiesClient initialProperties={properties} />
    </div>
  );
}
