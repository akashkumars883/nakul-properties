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
    title: 'HUDA Approved Freehold Residential Plots for Sale in Sector 64, Faridabad',
    subtitle: 'High Demand HUDA Sector Locality',
    description:
      'Discover prime 100 Gaj, 160 Gaj, 250 Gaj, 350 Gaj & 500 Gaj residential plots for sale in Sector 64, Faridabad. Clean single owner freehold registry, 12m to 18m wide sector roads, zero legal disputes, and immediate physical possession.',
    heroImage: '/plot2.png',
    seoTitle: 'HUDA Plots for Sale in Sector 64 Faridabad | Freehold Registry Plots',
    seoDesc:
      'Explore verified 100 Gaj to 500 Gaj HUDA sector plots for sale in Sector 64 Faridabad with clear titles, 18m wide roads & instant registry. Contact Nakul Properties.',
    highlights: [
      { title: 'Available Plot Sizes', desc: '100 Gaj, 160 Gaj, 250 Gaj, 350 Gaj & 500 Gaj' },
      { title: 'Wide Sector Roads', desc: '18 Meter & 12 Meter Wide Paved Roads' },
      { title: 'HUDA Approval', desc: '100% HSVP Approved Freehold Title Deed' },
      { title: 'High Demand Pocket', desc: 'Rapid Capital Appreciation & Top Infrastructure' },
    ],
    faqs: [
      {
        q: 'Why should I buy a HUDA plot in Sector 64 Faridabad?',
        a: 'Sector 64 is a high-demand HUDA sector offering 18m wide sector roads, underground utilities, close proximity to Sector 65 markets, and high appreciation rates.'
      },
      {
        q: 'What is the price trend per Gaj for plots in Sector 64?',
        a: 'Sector 64 plot prices vary based on location (corner, wide road, facing park). Contact Nakul Properties for current verified market rates per Gaj.'
      },
      {
        q: 'Can I build 4 floors on a HUDA plot in Sector 64?',
        a: 'Yes, as per Haryana HSVP building norms, residential plot owners can construct stilt + 4 floors after necessary sanction plan approvals.'
      }
    ],
    properties: []
  },
  'sector-62': {
    slug: 'sector-62',
    title: 'Freehold HUDA Residential Plots for Sale in Sector 62, Faridabad',
    subtitle: 'Peaceful & Established Residential Pocket',
    description:
      'Buy clear title freehold residential plots in Sector 62, Faridabad ranging from 100 Gaj to 500 Gaj. Featuring excellent sector layout, close proximity to main markets, top schools, and direct metro station links.',
    heroImage: '/plot3.png',
    seoTitle: 'Freehold Plots for Sale in Sector 62 Faridabad | HSVP Approved',
    seoDesc:
      'Find 100 Gaj, 160 Gaj, 250 Gaj, 350 Gaj & 500 Gaj residential plots for sale in Sector 62 Faridabad with clear single-owner freehold registry.',
    highlights: [
      { title: 'Plot Options', desc: '100 Gaj, 160 Gaj, 250 Gaj, 350 Gaj & 500 Gaj' },
      { title: 'Peaceful Sector Layout', desc: 'Surrounded by Parks & Green Belts' },
      { title: 'Clear Title Deeds', desc: '100% Verified Ownership & Zero Dues' },
      { title: 'Convenient Connectivity', desc: 'Close to Mathura Road & Local HUDA Markets' },
    ],
    faqs: [
      {
        q: 'Is Sector 62 Faridabad a fully developed HUDA sector?',
        a: 'Yes, Sector 62 is a fully inhabited and developed HUDA sector with complete electricity, water supply, sewage systems, and paved sector roads.'
      },
      {
        q: 'Are plots in Sector 62 eligible for home loans?',
        a: 'Yes, all our listed plots in Sector 62 feature clear freehold registry titles and are 100% eligible for home/plot loans from leading national banks.'
      }
    ],
    properties: []
  },
  'sector-14-15': {
    slug: 'sector-14-15',
    title: 'VIP Residential Sectors 14 & 15 Plots & Luxury Floors, Faridabad',
    subtitle: 'VIP & Established Residential Hub',
    description:
      'Explore premium residential listings in Sector 14 & 15, widely recognized as the most elite and premium VIP localities in Faridabad. These established sectors feature wide 18m wide layout avenues, beautifully landscaped local parks, top security checks, and top-ranking convent schools.',
    heroImage: '/loc-sec14-15.png',
    seoTitle: 'VIP Plots & Luxury Floors in Sector 14 & 15 Faridabad | Nakul Properties',
    seoDesc:
      'Buy verified freehold residential plots & luxury independent builder floors in Sector 14 & 15, Faridabad. Premier VIP zones with zero title disputes.',
    highlights: [
      { title: 'Elite Locality', desc: 'Premier VIP Residential Address of Faridabad' },
      { title: 'Wide Avenues', desc: '18m Planned Sector Roads & Lush Green Parks' },
      { title: 'Top Amenities', desc: 'Walk to Top Convent Schools & Local HUDA Markets' },
      { title: 'Freehold Title', desc: 'Single Owner Registered Conveyance Deeds' },
    ],
    faqs: [
      {
        q: 'Why are Sectors 14 and 15 considered VIP sectors in Faridabad?',
        a: 'Sectors 14 & 15 feature elite gentry, top-tier infrastructure, wide roads, close proximity to Mathura Road highway, and established luxury builder floors.'
      }
    ],
    properties: []
  },
  'sector-21-28': {
    slug: 'sector-21-28',
    title: 'Central Faridabad Properties (Sectors 21, 28 & 31)',
    subtitle: 'Highly Connected Central Hub',
    description:
      'Find prime residential houses, independent floors, and freehold plots in Central Faridabad micro-markets, including Sector 21, 28, and 31. Immediate proximity to Delhi-Mathura Highway metro stations.',
    heroImage: '/loc-sec21-28.png',
    seoTitle: 'Plots & Floors for Sale in Sector 21 & 28 Faridabad | Metro Linked',
    seoDesc:
      'Explore residential plots & premium independent builder floors in Sector 21, 28, and 31 Faridabad. Metro connected, fully registry ready properties.',
    highlights: [
      { title: 'Metro Proximity', desc: 'Walk to Violet Line Metro Stations' },
      { title: 'Prime Location', desc: 'Heart of Central Commercial & Residential Faridabad' },
    ],
    properties: []
  },
  'sector-81-89': {
    slug: 'sector-81-89',
    title: 'Greater Faridabad Gated Township Plots (Sectors 81 to 89)',
    subtitle: 'Greater Faridabad Development Corridor',
    description:
      'Discover residential plot listings and modern township developments in Sectors 81 to 89 (Greater Faridabad/Neharpar). Gated societies by BPTP Parklands, Puri Amanvilas, Omaxe, and RPS.',
    heroImage: '/loc-sec81-89.png',
    seoTitle: 'Plots for Sale in Sector 81-89 Neharpar Faridabad | Gated Townships',
    seoDesc:
      'Acquire premium gated residential plots in BPTP Parklands, Puri Amanvilas, Omaxe Greater Faridabad Sectors 81 to 89.',
    highlights: [
      { title: 'Gated Security', desc: '24/7 Gated Security & Clubhouse Amenities' },
      { title: 'Modern Townships', desc: 'BPTP Parklands, Puri Amanvilas & Omaxe' },
    ],
    properties: []
  },
  'sector-mathura-road': {
    slug: 'sector-mathura-road',
    title: 'Commercial Properties on Mathura Road Highway & World Street',
    subtitle: 'Mathura Road & Omaxe World Street Commercial Markets',
    description:
      'Explore verified commercial retail shops, food court workspaces, and SCO plots along Mathura Road (NH-48) and the high-traffic Omaxe World Street corridor.',
    heroImage: '/loc-mathura.png',
    seoTitle: 'Commercial Shops & SCO for Sale/Rent Mathura Road Faridabad',
    seoDesc:
      'Buy or rent commercial shops & SCO office spaces on prime Mathura Road and Omaxe World Street Faridabad.',
    highlights: [
      { title: 'High Footfall', desc: 'Highway Visibility & High Traffic Commercial Zones' },
      { title: 'SCO & Retail', desc: 'Freehold Commercial Shops & SCO Plots' },
    ],
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
