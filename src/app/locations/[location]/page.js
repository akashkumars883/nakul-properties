import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import LocationPageClient from '@/components/LocationPageClient';
import { client } from '@/sanity/lib/client';

// Hyper-Local SEO Optimized Sector Data in Faridabad (Unique content per location page)
const locationData = {
  'sector-65': {
    slug: 'sector-65',
    title: 'HUDA Approved Freehold Residential Plots for Sale in Sector 65, Faridabad',
    subtitle: 'Head Office Location & Prime HUDA Sector Hub',
    description:
      'Sector 65 is one of Faridabad’s most sought-after prime HUDA sectors, featuring wide 18-meter planned sector roads, 100% legal freehold registry titles, and top capital appreciation potential. Situated right at Nakul Properties head office locality, offering direct physical site visits, instant legal due diligence, and verified 100 Gaj to 500 Gaj plot options.',
    heroImage: '/plot1.png',
    seoTitle: 'Sector 65 HUDA Plots for Sale in Faridabad | Nakul Properties Head Office',
    seoDesc:
      'Buy 100% verified freehold HUDA residential plots (100 Gaj to 500 Gaj) in Sector 65 Faridabad. 18m wide roads, clear title, instant registry ready. Contact Nakul Properties Head Office.',
    highlights: [
      { title: 'Plot Sizes Available', desc: '100 Gaj, 160 Gaj, 250 Gaj, 350 Gaj & 500 Gaj' },
      { title: 'Planned Sector Roads', desc: '18 Meter & 12 Meter Wide Paved Roads' },
      { title: 'Ownership & Legal Status', desc: 'Single Owner Freehold HUDA Registry Deed' },
      { title: 'Location Connectivity', desc: 'Direct Link to Bypass Road, Delhi Highway & Metro' },
    ],
    faqs: [
      {
        q: 'Why is Sector 65 Faridabad considered a prime location for HUDA plots?',
        a: 'Sector 65 offers planned 18-meter sector roads, excellent connectivity to the Delhi-Mumbai Expressway bypass, top schools, local HUDA markets, and Nakul Properties head office guidance.'
      },
      {
        q: 'What plot sizes are available in Sector 65 Faridabad?',
        a: 'Common plot sizes in Sector 65 HUDA include 100 Sq. Yds (Gaj), 160 Sq. Yds, 250 Sq. Yds, 350 Sq. Yds, and 500 Sq. Yds.'
      },
      {
        q: 'Are registry and physical possession available for Sector 65 plots?',
        a: 'Yes, all our listed plots in Sector 65 feature 100% verified legal papers, clear title deeds, and immediate physical possession ready for registry.'
      }
    ],
    properties: []
  },
  'sector-64': {
    slug: 'sector-64',
    title: 'HUDA Approved Residential Plots for Sale in Sector 64, Faridabad',
    subtitle: 'High Demand HUDA Sector Locality',
    description:
      'Discover prime 100 Gaj, 160 Gaj, 250 Gaj, 350 Gaj & 500 Gaj residential plots in Sector 64, Faridabad. Clean single owner freehold registry, 12m to 18m wide sector roads, and immediate possession.',
    heroImage: '/plot2.png',
    seoTitle: 'Plots for Sale in Sector 64 Faridabad | Nakul Properties',
    seoDesc:
      'Explore 100 Gaj to 500 Gaj HUDA sector plots for sale in Sector 64 Faridabad with clear titles & instant registry. Nakul Properties.',
    properties: []
  },
  'sector-62': {
    slug: 'sector-62',
    title: 'Freehold Residential Plots for Sale in Sector 62, Faridabad',
    subtitle: 'Peaceful Residential Sector Pocket',
    description:
      'Buy clear title freehold residential plots in Sector 62, Faridabad ranging from 100 Gaj to 500 Gaj. Excellent sector layout, close to main markets, schools, and metro station links.',
    heroImage: '/plot3.png',
    seoTitle: 'Plots for Sale in Sector 62 Faridabad | Nakul Properties',
    seoDesc:
      'Find 100 Gaj, 160 Gaj, 250 Gaj, 350 Gaj & 500 Gaj residential plots for sale in Sector 62 Faridabad with freehold registry.',
    properties: []
  },
  'sector-14-15': {
    slug: 'sector-14-15',
    title: 'VIP Residential Sectors 14 & 15 Plots & Floors, Faridabad',
    subtitle: 'VIP & Established Residential Hub',
    description:
      'Explore premium residential listings in Sector 14 & 15, widely recognized as the most elite and premium VIP localities in Faridabad. These established sectors feature wide 18m wide layout avenues, beautifully landscaped local parks, top security checks, and top-ranking convent schools.',
    heroImage: '/loc-sec14-15.png',
    seoTitle: 'Plots & Properties for Sale in Sector 14 & 15 Faridabad | Nakul Properties',
    seoDesc:
      'Buy verified freehold residential plots & luxury independent builder floors in Sector 14 & 15, Faridabad. Premier VIP zones with zero title disputes.',
    properties: []
  },
  'sector-21-28': {
    slug: 'sector-21-28',
    title: 'Central Faridabad Properties (Sectors 21, 28 & 31)',
    subtitle: 'Highly Connected Central Hub',
    description:
      'Find prime residential houses, independent floors, and freehold plots in Central Faridabad micro-markets, including Sector 21, 28, and 31. Immediate proximity to Delhi-Mathura Highway metro stations.',
    heroImage: '/loc-sec21-28.png',
    seoTitle: 'Plots & Floors for Sale in Sector 21 & 28 Faridabad | Nakul Properties',
    seoDesc:
      'Explore residential plots & premium independent builder floors in Sector 21, 28, and 31 Faridabad. Metro connected, fully registry ready properties.',
    properties: []
  },
  'sector-81-89': {
    slug: 'sector-81-89',
    title: 'Greater Faridabad Gated Township Plots (Sectors 81 to 89)',
    subtitle: 'Greater Faridabad Development Corridor',
    description:
      'Discover residential plot listings and modern township developments in Sectors 81 to 89 (Greater Faridabad/Neharpar). Gated societies by BPTP Parklands, Puri Amanvilas, Omaxe, and RPS.',
    heroImage: '/loc-sec81-89.png',
    seoTitle: 'Plots for Sale in Sector 81-89 Neharpar Faridabad | Nakul Properties',
    seoDesc:
      'Acquire premium gated residential plots in BPTP Parklands, Puri Amanvilas, Omaxe Greater Faridabad Sectors 81 to 89.',
    properties: []
  },
  'sector-mathura-road': {
    slug: 'sector-mathura-road',
    title: 'Commercial Properties on Mathura Road Highway & World Street',
    subtitle: 'Mathura Road & Omaxe World Street Commercial Markets',
    description:
      'Explore verified commercial retail shops, food court workspaces, and SCO plots along Mathura Road (NH-48) and the high-traffic Omaxe World Street corridor.',
    heroImage: '/loc-mathura.png',
    seoTitle: 'Commercial Shops & SCO for Sale/Rent Mathura Road Faridabad | Nakul Properties',
    seoDesc:
      'Buy or rent commercial shops & SCO office spaces on prime Mathura Road and Omaxe World Street Faridabad.',
    properties: []
  },
};

export async function generateStaticParams() {
  return Object.keys(locationData).map((location) => ({ location }));
}

export async function generateMetadata({ params }) {
  const { location } = await params;
  const decodedLocation = decodeURIComponent(location || '').trim().toLowerCase();
  const data = locationData[decodedLocation];
  if (!data) return {};
  return {
    title: data.seoTitle,
    description: data.seoDesc,
    keywords: [
      data.title,
      `plots in ${data.subtitle}`,
      `HUDA plots ${data.subtitle}`,
      'Sector 65 plots Faridabad',
      'Sector 64 plots Faridabad',
      'Sector 62 plots Faridabad',
      'Nakul Properties Faridabad',
    ],
    alternates: {
      canonical: `/locations/${decodedLocation}`,
    },
    openGraph: {
      title: data.seoTitle,
      description: data.seoDesc,
      url: `https://nakulproperties.com/locations/${decodedLocation}`,
      siteName: 'Nakul Properties Faridabad',
      type: 'website',
      images: [{ url: `https://nakulproperties.com${data.heroImage}`, alt: data.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: data.seoTitle,
      description: data.seoDesc,
    },
  };
}

export default async function LocationPage({ params }) {
  const { location } = await params;
  const decodedLocation = decodeURIComponent(location || '').trim().toLowerCase();
  const baseData = locationData[decodedLocation];

  if (!baseData) {
    notFound();
  }

  // Extract sector number query (e.g., 'sector-65' -> '65')
  const secNum = decodedLocation.replace('sector-', '').split('-')[0];
  let sanityProperties = [];

  try {
    sanityProperties = await client.fetch(
      `*[_type == "property" && location match $query] | order(_createdAt desc)`,
      { query: `*${secNum}*` }
    );
  } catch (err) {
    console.error('Failed to fetch properties for location page:', err);
  }

  const pageData = {
    ...baseData,
    properties: sanityProperties.length > 0 ? sanityProperties : baseData.properties,
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <LocationPageClient data={pageData} />
    </div>
  );
}
