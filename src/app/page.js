import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PropertyCategories from '@/components/PropertyCategories';
import FeaturedProperties from '@/components/FeaturedProperties';
import ExclusiveDeals from '@/components/ExclusiveDeals';
import PrimeSectors from '@/components/PrimeSectors';
import AboutUs from '@/components/AboutUs';
import ContactForm from '@/components/ContactForm';
import Testimonials from '@/components/Testimonials';
import Faq from '@/components/Faq';
import { client } from '@/sanity/lib/client';

export const metadata = {
  title: 'Nakul Properties - Real Estate Dealer & Property Consultant in Faridabad',
  description: 'Nakul Properties - Buy, sell, and rent top luxury flats, builder floors, residential plots, and commercial properties in Faridabad & Greater Faridabad.',
};

export const dynamic = 'force-dynamic';

export default async function Home() {
  // Fetch properties from Sanity
  const properties = await client.fetch(`*[_type == "property"] | order(_createdAt desc)`);

  // Generate LocalBusiness / RealEstateAgent Schema for Local SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    'name': 'Nakul Properties',
    'description': 'Buy, sell, and rent top luxury flats, builder floors, residential plots, and commercial properties in Faridabad & Greater Faridabad.',
    'url': 'https://nakulproperties.com',
    'telephone': '+919811548267',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Sector 65',
      'addressLocality': 'Faridabad',
      'addressRegion': 'Haryana',
      'postalCode': '121004',
      'addressCountry': 'IN',
    },
  };

  // Fetch dynamic keywords from Sanity for Popular Searches
  let sanityKeywords = [];
  try {
    sanityKeywords = await client.fetch(`*[_type == "keywordPage" && defined(slug.current)]`);
  } catch (error) {
    console.error('Failed to fetch keywords for homepage:', error);
  }

  const staticDeals = [
    { title: 'Best Property Dealer Faridabad', href: '/deals/best-property-dealer-faridabad' },
    { title: 'HUDA Plots for Sale Faridabad', href: '/deals/huda-plots-for-sale-faridabad' },
    { title: 'Luxury Builder Floors Faridabad', href: '/deals/luxury-builder-floors-faridabad' },
    { title: 'Plots Greater Faridabad (Neharpar)', href: '/deals/plots-for-sale-greater-faridabad' },
    { title: 'Commercial Shops & SCO Faridabad', href: '/deals/commercial-sco-plots-faridabad' }
  ];

  const dynamicDeals = sanityKeywords.map((kp) => ({
    title: kp.keywordTitle,
    href: `/deals/${kp.slug.current}`
  }));

  const allDeals = [...staticDeals, ...dynamicDeals];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Insert JSON-LD script for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Transparent Fixed Header Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Main Content Sections */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 font-outfit space-y-12 sm:space-y-16">
        {/* Plot & Property Categories */}
        <PropertyCategories />

        {/* Featured Plot Listings */}
        <FeaturedProperties properties={properties} />

        {/* Exclusive Deals — Floors, Shops & Corner Plots */}
        <ExclusiveDeals properties={properties} />

        {/* Prime Sectors & Locations in Faridabad */}
        <PrimeSectors />

        {/* Why Choose Nakul Properties */}
        <AboutUs />

        {/* Book Site Visit / Contact Inquiry Form */}
        <ContactForm />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Faqs Section */}
        <Faq />

        {/* SEO Targeted Keyword Links (Popular Searches) — placed below FAQ */}
        <section className="text-center font-outfit py-4">
          <span className="text-xs font-semibold text-neutral-500 uppercase tracking-widest block mb-3">Popular Searches in Faridabad</span>
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2.5 text-xs sm:text-sm font-semibold">
            {allDeals.map((deal, idx) => (
              <React.Fragment key={deal.href}>
                <a href={deal.href} className="text-black hover:text-neutral-600 transition-colors">
                  {deal.title}
                </a>
                {idx < allDeals.length - 1 && (
                  <span className="text-neutral-300 hidden sm:inline">•</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}

