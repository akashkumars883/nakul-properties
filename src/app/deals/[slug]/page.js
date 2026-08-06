import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import SeoLandingClient from '@/components/SeoLandingClient';

// SEO Targeted Keyword Data (5 High-Search Intent Local Keywords)
const seoDealsData = {
  'best-property-dealer-faridabad': {
    slug: 'best-property-dealer-faridabad',
    keywordTitle: 'Best Property Dealer & Real Estate Consultant in Faridabad',
    seoTitle: 'Best Property Dealer in Faridabad | Nakul Properties',
    seoDesc: 'Looking for the best property dealer in Faridabad? Nakul Properties provides 100% verified residential plots, luxury floors, and commercial SCOs.',
    heroImage: '/hero-banner.png',
    longDescription: 'Welcome to Nakul Properties, your premium real estate consultant in Faridabad. With over a decade of trust, we specialize in delivering the most profitable freehold HUDA sector plots, gated townships (BPTP, Puri), and commercial SCOs. We assure transparent registry process and zero-brokerage benefits on select developer properties.',
    benefits: [
      '100% Verified Legal Documents',
      'No Hidden Brokerage Fees',
      'Expert Registry Assistance',
      'Flexible Payment Plans Available'
    ],
    properties: [
      {
        id: 1,
        image: '/plot1.png',
        title: 'HUDA Approved Residential Plot',
        location: 'Sector 14, Faridabad',
        size: '250 Sq. Yds',
        dimensions: '30 ft × 75 ft',
        facing: 'North-East',
        roadSize: '12 Meter Road',
        price: '₹1.85 Cr',
        priceSub: '₹74,000 / Sq. Yd',
        badge: 'Top Pick',
        verified: true,
      },
      {
        id: 2,
        image: '/deal1.png',
        title: '4 BHK Luxury Builder Floor',
        location: 'Sector 15, Faridabad',
        size: '300 Sq. Yds',
        dimensions: 'Stilt + 4 Floors',
        facing: 'East Facing',
        roadSize: '18 Meter Road',
        price: '₹1.65 Cr',
        priceSub: 'All Inclusive',
        badge: 'Luxury Deal',
        verified: true,
      }
    ]
  },
  'huda-plots-for-sale-faridabad': {
    slug: 'huda-plots-for-sale-faridabad',
    keywordTitle: 'HUDA & HSVP Approved Sector Plots for Sale in Faridabad',
    seoTitle: 'HUDA Plots for Sale in Faridabad | HSVP Approved Sectors',
    seoDesc: 'Explore premium freehold HUDA & HSVP sector plots for sale in Faridabad with clear titles. Verified plots in Sector 14, 15, 21, and prime sectors.',
    heroImage: '/cat-huda.png',
    longDescription: 'HUDA / HSVP approved sectors are highly preferred due to high quality civic infrastructure, wide roads, municipal water supply, and high-class neighborhood amenities. We present selected clear-title sector plots for sale in Faridabad with hassle-free freehold registry approvals.',
    benefits: [
      'HSVP Authority Approved Lands',
      'Immediate Registry & Possession',
      'Wide Planned Sector Roads (12m to 24m)',
      '100% Secure & Clear Legal Titles'
    ],
    properties: [
      {
        id: 1,
        image: '/plot1.png',
        title: 'HUDA Approved Residential Plot',
        location: 'Sector 14, Faridabad',
        size: '250 Sq. Yds',
        dimensions: '30 ft × 75 ft',
        facing: 'North-East Facing',
        roadSize: '12 Meter Road',
        price: '₹1.85 Cr',
        priceSub: '₹74,000 / Sq. Yd',
        badge: 'HUDA Sector 14',
        verified: true,
      },
      {
        id: 2,
        image: '/plot3.png',
        title: 'HUDA Plot — Prime Sector 21',
        location: 'Sector 21C, Faridabad',
        size: '200 Sq. Yds',
        dimensions: '27 ft × 66 ft',
        facing: 'North Facing',
        roadSize: '9 Meter Road',
        price: '₹1.35 Cr',
        priceSub: '₹67,500 / Sq. Yd',
        badge: 'HUDA Sector 21',
        verified: true,
      }
    ]
  },
  'luxury-builder-floors-faridabad': {
    slug: 'luxury-builder-floors-faridabad',
    keywordTitle: 'Luxury Independent Builder Floors for Sale in Faridabad',
    seoTitle: 'Luxury Builder Floors in Faridabad | 3 & 4 BHK Independent Floors',
    seoDesc: 'Buy ready-to-move luxury builder floors for sale in Sector 14, 15, 21, 28 Faridabad. Premium independent builder floors with lift, stilt parking, and terrace rights.',
    heroImage: '/cat-builder.png',
    longDescription: 'Upgrade to a high-end lifestyle with independent builder floors in premium sectors of Faridabad. These modern 3 BHK and 4 BHK floors feature secure stilt car park, private high-speed lift, state-of-the-art modular kitchen fittings, premium Italian marble floorings, and exclusive private roof/terrace rights.',
    benefits: [
      'Zero Brokerage on Selected Floor Projects',
      'Stilt Car Parking with CCTV & Lift',
      'Modular Kitchen & Italian Marble Fittings',
      'Exclusive Roof Rights & Top Ventilation'
    ],
    properties: [
      {
        id: 1,
        image: '/deal1.png',
        title: '4 BHK Luxury Builder Floor',
        location: 'Sector 15, Faridabad',
        size: '300 Sq. Yds',
        dimensions: 'Stilt + 4 Floors',
        facing: 'East Facing',
        roadSize: '18 Meter Wide Road',
        price: '₹1.65 Cr',
        priceSub: 'All Inclusive Price',
        badge: 'Top Luxury',
        verified: true,
      },
      {
        id: 2,
        image: '/deal3.png',
        title: '3 BHK Premium Builder Floor',
        location: 'Sector 14, Faridabad',
        size: '250 Sq. Yds',
        dimensions: 'Ground Floor | Stilt',
        facing: 'North-East Facing',
        roadSize: '12 Meter Road',
        price: '₹1.20 Cr',
        priceSub: 'Including Registry',
        badge: 'Prime Location',
        verified: true,
      }
    ]
  },
  'plots-for-sale-greater-faridabad': {
    slug: 'plots-for-sale-greater-faridabad',
    keywordTitle: 'Premium Gated Residential Plots for Sale in Greater Faridabad (Neharpar)',
    seoTitle: 'Plots for Sale in Greater Faridabad Neharpar | Nakul Properties',
    seoDesc: 'Buy premium gated residential plots for sale in Greater Faridabad (Neharpar). High-growth locations in BPTP, Puri Amanvilas, and Omaxe.',
    heroImage: '/cat-gated.png',
    longDescription: 'Greater Faridabad (Neharpar) has emerged as the fastest-growing residential hub in Delhi NCR. We bring you premium residential plots in secure gated townships featuring 24/7 security, lush green parks, underground wiring, and high-class amenities. Great investment potential with high value appreciation.',
    benefits: [
      'Modern Gated Community Security',
      'Underground Electrical Cabling',
      'Close to Upcoming KGP Expressway',
      'Lush Green Theme Parks'
    ],
    properties: [
      {
        id: 1,
        image: '/plot2.png',
        title: 'Premium Gated Township Plot',
        location: 'BPTP Parklands, Sector 85',
        size: '350 Sq. Yds',
        dimensions: '35 ft × 90 ft',
        facing: 'Park Facing',
        roadSize: '18 Meter Road',
        price: '₹1.45 Cr',
        priceSub: '₹41,400 / Sq. Yd',
        badge: 'Gated Township',
        verified: true,
      },
      {
        id: 2,
        image: '/plot4.png',
        title: 'Affordable Residential Plot',
        location: 'Puri Amanvilas, Sector 89',
        size: '180 Sq. Yds',
        dimensions: '27 ft × 60 ft',
        facing: 'North Facing',
        roadSize: '12 Meter Road',
        price: '₹65 Lacs',
        priceSub: '₹36,100 / Sq. Yd',
        badge: 'Best Budget Buy',
        verified: true,
      }
    ]
  },
  'commercial-sco-plots-faridabad': {
    slug: 'commercial-sco-plots-faridabad',
    keywordTitle: 'Commercial Shops & SCO Plots for Sale / Rent on Mathura Road & World Street',
    seoTitle: 'Commercial Shops & SCO for Sale/Rent Faridabad | Nakul Properties',
    seoDesc: 'Explore commercial shops, offices, and SCO plots for sale and lease on Mathura Road & Omaxe World Street Faridabad. High footfall & corporate yields.',
    heroImage: '/cat-commercial.png',
    longDescription: 'Invest in high-performance commercial spaces located at prime business corridors of Faridabad. Offering high visibility, excellent footfall density, dedicated car parking basements, and multi-floor layouts (B+G+3 permitted) suitable for showrooms, corporate headquarters, and premium restaurants.',
    benefits: [
      'High Asset Valuation & Dynamic appreciation',
      'Heavy Consumer Footfall Corridor',
      'B+G+3 Approved Development Layouts',
      'High Assured Rental Yield Properties'
    ],
    properties: [
      {
        id: 1,
        image: '/deal2.png',
        title: 'Ground Floor Retail Shop',
        location: 'Omaxe World Street, Sector 79',
        size: '600 Sq. Ft (Carpet)',
        dimensions: 'Ground Floor',
        facing: 'Main Road',
        roadSize: '24 Meter Main Road',
        price: '₹45,000 / mo',
        priceSub: 'Rent | + Maintenance',
        badge: 'Ready Shop',
        verified: true,
      },
      {
        id: 2,
        image: '/deal4.png',
        title: 'SCO Office Space — Furnished',
        location: 'Mathura Road, Sector 20A',
        size: '120 Sq. Yds',
        dimensions: '3 Cabins | AC',
        facing: 'Road Facing',
        roadSize: '30 Meter Mathura Road',
        price: '₹60,000 / mo',
        priceSub: 'Leasing Available',
        badge: 'Furnished Office',
        verified: true,
      }
    ]
  }
};

import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

const keywordSanityFilterMap = {
  'best-property-dealer-faridabad': `*[_type == "property"] | order(_createdAt desc)`,
  'huda-plots-for-sale-faridabad': `*[_type == "property" && category == "huda"] | order(_createdAt desc)`,
  'luxury-builder-floors-faridabad': `*[_type == "property" && category == "floor"] | order(_createdAt desc)`,
  'plots-for-sale-greater-faridabad': `*[_type == "property" && (category == "gated" || category == "budget")] | order(_createdAt desc)`,
  'commercial-sco-plots-faridabad': `*[_type == "property" && category == "commercial"] | order(_createdAt desc)`,
};

export async function generateStaticParams() {
  const staticSlugs = Object.keys(seoDealsData).map((slug) => ({ slug }));
  try {
    const sanityKeywords = await client.fetch(`*[_type == "keywordPage" && defined(slug.current)]`);
    const dynamicSlugs = sanityKeywords.map((kp) => ({ slug: kp.slug.current }));
    return [...staticSlugs, ...dynamicSlugs];
  } catch (error) {
    console.error('Failed to fetch static params for keywords:', error);
    return staticSlugs;
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug || '').trim().toLowerCase();

  // Try fetching from Sanity first
  try {
    const sanityKeyword = await client.fetch(
      `*[_type == "keywordPage" && slug.current == $slug][0]`,
      { slug: decodedSlug }
    );
    if (sanityKeyword) {
      return {
        title: sanityKeyword.seoTitle,
        description: sanityKeyword.seoDesc,
        alternates: {
          canonical: `/deals/${decodedSlug}`,
        },
      };
    }
  } catch (error) {
    console.error('Failed to fetch metadata from Sanity:', error);
  }

  const data = seoDealsData[decodedSlug];
  if (!data) return {};
  return {
    title: data.seoTitle,
    description: data.seoDesc,
    alternates: {
      canonical: `/deals/${decodedSlug}`,
    },
  };
}

export default async function DealPage({ params }) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug || '').trim().toLowerCase();

  // 1. Fetch from Sanity
  let sanityKeyword = null;
  try {
    sanityKeyword = await client.fetch(
      `*[_type == "keywordPage" && slug.current == $slug][0]`,
      { slug: decodedSlug }
    );
  } catch (error) {
    console.error('Failed to fetch keyword page from Sanity:', error);
  }

  let pageData = null;

  if (sanityKeyword) {
    const cat = sanityKeyword.propertyCategory || 'all';
    const propertiesQuery = cat === 'all'
      ? `*[_type == "property"] | order(_createdAt desc)`
      : `*[_type == "property" && category == $cat] | order(_createdAt desc)`;

    let sanityProperties = [];
    try {
      sanityProperties = await client.fetch(propertiesQuery, { cat });
    } catch (error) {
      console.error('Failed to fetch properties for dynamic keyword page:', error);
    }

    const getHeroImage = (image) => {
      if (!image) return '/hero-banner.png';
      try {
        return urlFor(image).url();
      } catch (e) {
        return '/hero-banner.png';
      }
    };

    pageData = {
      slug: decodedSlug,
      keywordTitle: sanityKeyword.keywordTitle,
      seoTitle: sanityKeyword.seoTitle,
      seoDesc: sanityKeyword.seoDesc,
      heroImage: getHeroImage(sanityKeyword.heroImage),
      longDescription: sanityKeyword.longDescription,
      benefits: sanityKeyword.benefits || [],
      properties: sanityProperties
    };
  } else {
    // 2. Fall back to static config
    const data = seoDealsData[decodedSlug];
    if (!data) {
      notFound();
    }

    const sanityFilter = keywordSanityFilterMap[decodedSlug] || `*[_type == "property"] | order(_createdAt desc)`;
    let sanityProperties = [];
    try {
      sanityProperties = await client.fetch(sanityFilter);
    } catch (error) {
      console.error('Failed to fetch properties for static fallback:', error);
    }

    pageData = {
      ...data,
      properties: sanityProperties.length > 0 ? sanityProperties : data.properties,
    };
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SeoLandingClient data={pageData} />
    </div>
  );
}
