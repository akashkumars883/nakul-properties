import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import CategoryPageClient from '@/components/CategoryPageClient';

// Fully SEO Optimized & Unique Category Data for Google Ranking
const categoryData = {
  'huda-plots': {
    slug: 'huda-plots',
    title: 'HUDA & HSVP Sector Plots for Sale in Faridabad',
    subtitle: 'HSVP Authority Approved Plots',
    description:
      'Explore verified freehold HUDA & HSVP residential plots in Faridabad. Located in prime established sectors like Sector 14, 15, 21, 7, and 8, these plots come with 100% clear legal titles, gated boundaries, wide 12m to 24m layout roads, and direct access to municipal utilities. Perfect choice for immediate registry, construction, and high investment return.',
    heroImage: '/cat-huda.png',
    seoTitle: 'HUDA HSVP Sector Plots for Sale in Faridabad | Nakul Properties',
    seoDesc:
      'Buy verified freehold HUDA & HSVP sector plots in Sector 14, 15, and 21 Faridabad. Clear registry, bank loans available. Contact Faridabad top property consultants.',
    properties: [
      {
        id: 1,
        image: '/plot1.png',
        title: 'HUDA Approved Residential Plot',
        location: 'Sector 14, Faridabad',
        size: '250 Sq. Yds (Gaj)',
        dimensions: '30 ft × 75 ft',
        facing: 'North-East Facing',
        roadSize: '12 Meter Wide Road',
        price: '₹1.85 Cr',
        pricePerSqYd: '₹74,000 / Sq. Yd',
        badge: 'HUDA Approved',
        verified: true,
        features: ['HUDA Approved', 'Freehold Registry', 'Prime Sector 14'],
      },
      {
        id: 2,
        image: '/plot2.png',
        title: 'HSVP Corner Residential Plot',
        location: 'Sector 15, Faridabad',
        size: '300 Sq. Yds (Gaj)',
        dimensions: '30 ft × 90 ft',
        facing: 'East Facing | Corner',
        roadSize: '18 Meter Wide Road',
        price: '₹2.40 Cr',
        pricePerSqYd: '₹80,000 / Sq. Yd',
        badge: 'Corner Plot',
        verified: true,
        features: ['Corner 2-Side Open', 'Prime Location', 'Freehold'],
      },
      {
        id: 3,
        image: '/plot3.png',
        title: 'HUDA Plot — Prime Sector 21',
        location: 'Sector 21C, Faridabad',
        size: '200 Sq. Yds (Gaj)',
        dimensions: '27 ft × 66 ft',
        facing: 'North Facing',
        roadSize: '9 Meter Wide Road',
        price: '₹1.35 Cr',
        pricePerSqYd: '₹67,500 / Sq. Yd',
        badge: 'HUDA Approved',
        verified: true,
        features: ['HUDA Approved', 'Registry Ready', 'Sector 21'],
      },
      {
        id: 4,
        image: '/plot4.png',
        title: 'HSVP Plot Near Metro',
        location: 'Sector 7, Faridabad',
        size: '160 Sq. Yds (Gaj)',
        dimensions: '24 ft × 60 ft',
        facing: 'East Facing',
        roadSize: '12 Meter Road',
        price: '₹1.10 Cr',
        pricePerSqYd: '₹68,750 / Sq. Yd',
        badge: 'Near Metro',
        verified: true,
        features: ['Near Metro Station', 'Prime Sector', 'Freehold Title'],
      },
    ],
  },
  'gated-townships': {
    slug: 'gated-townships',
    title: 'Gated Townships & Individual Registry Plots in Faridabad',
    subtitle: 'Secured Townships & Registry Plots',
    description:
      'Buy premium residential plots in leading gated societies and townships across Greater Faridabad (Neharpar), or individual registry plots in popular local colonies. Featuring BPTP Parklands, Puri Amanvilas, Omaxe, RPS and private colony land options. Clear title deeds, security patrols, and landscaped parks for modern living.',
    heroImage: '/cat-gated.png',
    seoTitle: 'Gated Townships & Registry Plots in Faridabad | Nakul Properties',
    seoDesc:
      'Explore residential plots in premium gated societies like BPTP, Puri Amanvilas & local registry plots in Faridabad. Secured layouts, green parks, clear registry.',
    properties: [
      {
        id: 1,
        image: '/plot2.png',
        title: 'Premium Gated Township Plot',
        location: 'BPTP Parklands, Sector 85',
        size: '350 Sq. Yds (Gaj)',
        dimensions: '35 ft × 90 ft',
        facing: 'Park Facing & East',
        roadSize: '18 Meter Wide Road',
        price: '₹1.45 Cr',
        pricePerSqYd: '₹41,400 / Sq. Yd',
        badge: 'Gated Township',
        verified: true,
        features: ['24/7 Gated Security', 'Park Facing', 'Underground Wiring'],
      },
      {
        id: 2,
        image: '/plot4.png',
        title: 'Affordable Residential Plot',
        location: 'Puri Amanvilas, Sector 89',
        size: '180 Sq. Yds (Gaj)',
        dimensions: '27 ft × 60 ft',
        facing: 'North Facing',
        roadSize: '12 Meter Road',
        price: '₹65 Lacs',
        pricePerSqYd: '₹36,100 / Sq. Yd',
        badge: 'Best Investment',
        verified: true,
        features: ['Registry Ready', 'Bank Loan Available', 'Fast Development'],
      },
      {
        id: 3,
        image: '/plot1.png',
        title: 'RPS Savana Corner Plot',
        location: 'RPS Savana, Sector 88',
        size: '230 Sq. Yds (Gaj)',
        dimensions: '27 ft × 77 ft',
        facing: 'South-West Corner',
        roadSize: '15 Meter Wide Road',
        price: '₹82 Lacs',
        pricePerSqYd: '₹35,600 / Sq. Yd',
        badge: 'Corner Plot',
        verified: true,
        features: ['Gated Township', '2-Side Open', 'RPS Community'],
      },
      {
        id: 4,
        image: '/plot3.png',
        title: 'Omaxe City Township Plot',
        location: 'Omaxe City, Sector 93',
        size: '250 Sq. Yds (Gaj)',
        dimensions: '30 ft × 75 ft',
        facing: 'East Facing',
        roadSize: '18 Meter Road',
        price: '₹90 Lacs',
        pricePerSqYd: '₹36,000 / Sq. Yd',
        badge: 'Omaxe Township',
        verified: true,
        features: ['Clubhouse Access', 'Secured Entry', 'Near NH-48'],
      },
    ],
  },
  'commercial-rent-sale': {
    slug: 'commercial-rent-sale',
    title: 'Commercial SCO Plots, Shops & Office Spaces in Faridabad',
    subtitle: 'Premium Commercial Real Estate',
    description:
      'Acquire premium commercial SCO (Shop-cum-Office) plots, retail market shops, and corporate office spaces in Faridabad. Available for purchase and long-term leasing along the high-footfall Mathura Road highway corridor and Omaxe World Street. These layouts support multi-story corporate developments (B+G+3 permitted) with guaranteed high rental yields.',
    heroImage: '/cat-commercial.png',
    seoTitle: 'Commercial Shops & SCO Plots for Sale/Rent Faridabad | Nakul Properties',
    seoDesc:
      'Buy or lease commercial retail shops & SCO plots on Mathura Road and Omaxe World Street Faridabad. High footfall showrooms & corporate workspaces.',
    properties: [
      {
        id: 1,
        image: '/deal2.png',
        title: 'Ground Floor Retail Shop',
        location: 'Omaxe World Street, Sector 79',
        size: '600 Sq. Ft (Carpet)',
        dimensions: 'Ground Floor',
        facing: 'Main Road Facing',
        roadSize: '24 Meter Main Road',
        price: '₹45,000 / mo',
        pricePerSqYd: 'Rent | + Maintenance',
        badge: 'For Rent',
        verified: true,
        features: ['Ground Floor', 'High Footfall', 'Prominent Frontage'],
      },
      {
        id: 2,
        image: '/deal4.png',
        title: 'SCO Office Space — Furnished',
        location: 'Mathura Road, Sector 20A',
        size: '120 Sq. Yds (Built-Up)',
        dimensions: '3 Cabins | AC',
        facing: 'Road Facing',
        roadSize: '30 Meter Mathura Road',
        price: '₹60,000 / mo',
        pricePerSqYd: 'Negotiable Long Lease',
        badge: 'SCO Office',
        verified: true,
        features: ['Fully Furnished', 'Conference Room', 'Basement Parking'],
      },
      {
        id: 3,
        image: '/plot3.png',
        title: 'Commercial SCO Main Road Plot',
        location: 'Omaxe World Street, Sector 79',
        size: '120 Sq. Yds (Gaj)',
        dimensions: '20 ft × 54 ft',
        facing: 'Main 24m Road',
        roadSize: '24 Meter Main Road',
        price: '₹1.10 Cr',
        pricePerSqYd: '₹91,600 / Sq. Yd',
        badge: 'For Sale',
        verified: true,
        features: ['High Footfall', 'B+G+3 Approved', 'High Rental Yield'],
      },
      {
        id: 4,
        image: '/deal1.png',
        title: 'Retail Shop — Sector 14 Market',
        location: 'Main Market, Sector 14',
        size: '250 Sq. Ft (Carpet)',
        dimensions: 'Ground Floor',
        facing: 'Main Market Road',
        roadSize: 'Prime Market Location',
        price: '₹25,000 / mo',
        pricePerSqYd: 'Rent | Negotiable',
        badge: 'For Rent',
        verified: true,
        features: ['Busy Market', 'Ready Possession', 'Established Area'],
      },
    ],
  },
  'builder-floors': {
    slug: 'builder-floors',
    title: 'Independent Luxury Builder Floors for Sale in Faridabad',
    subtitle: 'Luxury Independent Floors',
    description:
      'Discover high-end 3 BHK & 4 BHK independent builder floors in the premium residential sectors of Faridabad. These modern floor layouts come with dedicated stilt car parking, automatic private lifts, luxury modular kitchens, high-grade Italian marble flooring, pre-installed split AC layouts, and private terrace/roof rights in Sectors 14, 15, 21, and 28.',
    heroImage: '/cat-builder.png',
    seoTitle: 'Independent Builder Floors for Sale in Faridabad | Nakul Properties',
    seoDesc:
      'Buy luxury 3 & 4 BHK builder floors in Sector 14, 15, 21 & 28 Faridabad. Private lift, stilt parking, modular kitchen, exclusive roof rights.',
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
        pricePerSqYd: 'All Inclusive Price',
        badge: 'Builder Floor',
        verified: true,
        features: ['Private Lift', 'Modular Kitchen', 'Terrace Rights'],
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
        pricePerSqYd: 'Including Registry',
        badge: 'Ground Floor',
        verified: true,
        features: ['Stilt Parking', 'Modular Kitchen', 'Prime Sector 14'],
      },
      {
        id: 3,
        image: '/plot1.png',
        title: '3 BHK Floor — Sector 21',
        location: 'Sector 21D, Faridabad',
        size: '200 Sq. Yds',
        dimensions: '1st Floor | Lift',
        facing: 'South Facing',
        roadSize: '9 Meter Road',
        price: '₹95 Lacs',
        pricePerSqYd: 'Fully Finished',
        badge: 'Builder Floor',
        verified: true,
        features: ['Private Lift', '3 BHK', 'Sector 21'],
      },
      {
        id: 4,
        image: '/plot2.png',
        title: '4 BHK Floor — Greater Faridabad',
        location: 'Sector 81, Greater Faridabad',
        size: '280 Sq. Yds',
        dimensions: 'Stilt + 3 Floors | Lift',
        facing: 'East Facing',
        roadSize: '18 Meter Road',
        price: '₹1.40 Cr',
        pricePerSqYd: 'Semi-Furnished',
        badge: 'Luxury Floor',
        verified: true,
        features: ['Terrace Rights', 'Lift Access', 'Greater Faridabad'],
      },
    ],
  },
};

import { client } from '@/sanity/lib/client';

const sanityCategoryMap = {
  'huda-plots': 'huda',
  'gated-townships': 'gated',
  'commercial-rent-sale': 'commercial',
  'builder-floors': 'floor',
};

export async function generateStaticParams() {
  return Object.keys(categoryData).map((category) => ({ category }));
}

export async function generateMetadata({ params }) {
  const { category } = await params;
  const decodedCategory = decodeURIComponent(category || '').trim().toLowerCase();
  const data = categoryData[decodedCategory];
  if (!data) return {};
  return {
    title: data.seoTitle,
    description: data.seoDesc,
    alternates: {
      canonical: `/properties/${decodedCategory}`,
    },
  };
}

export default async function CategoryPage({ params }) {
  const { category } = await params;
  const decodedCategory = decodeURIComponent(category || '').trim().toLowerCase();
  const data = categoryData[decodedCategory];

  if (!data) {
    notFound();
  }

  const sanityCategory = sanityCategoryMap[decodedCategory];
  let categoryProperties = [];
  if (sanityCategory) {
    if (sanityCategory === 'gated') {
      // Fetch both gated and budget (individual plots) properties
      categoryProperties = await client.fetch(
        `*[_type == "property" && (category == "gated" || category == "budget")] | order(_createdAt desc)`
      );
    } else {
      categoryProperties = await client.fetch(
        `*[_type == "property" && category == $sanityCategory] | order(_createdAt desc)`,
        { sanityCategory }
      );
    }
  }

  // Merge Sanity properties into static SEO data
  const pageData = {
    ...data,
    properties: categoryProperties,
  };

  // Generate ItemList JSON-LD Schema for Google SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': data.title,
    'description': data.description,
    'numberOfItems': categoryProperties.length,
    'itemListElement': categoryProperties.map((prop, idx) => ({
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
      
      <CategoryPageClient data={pageData} />
    </div>
  );
}
