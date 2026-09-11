import Navbar from '@/components/Navbar';
import SearchPageClient from '@/components/SearchPageClient';

import { client } from '@/sanity/lib/client';

export const metadata = {
  title: 'Search Properties | Nakul Properties',
  description: 'Find premium builder floors, residential plots, and commercial shops matching your filters in Faridabad.',
};

export default async function SearchPage({ searchParams }) {
  const { type = 'all', location = 'all', budget = 'all' } = await searchParams;

  const allProperties = await client.fetch(`*[_type == "property"] | order(_createdAt desc)`);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SearchPageClient 
        type={type} 
        location={location} 
        budget={budget} 
        propertiesDb={allProperties} 
      />
    </div>
  );
}
