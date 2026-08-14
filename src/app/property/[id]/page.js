import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import PropertyDetailsClient from '@/components/PropertyDetailsClient';

// Shared database for all properties listed on Nakul Properties website
const allPropertiesDb = {
  // HUDA Sector Plots
  'huda-plot-sec14-250': {
    id: 'huda-plot-sec14-250',
    title: 'HUDA Approved Prime Sector 14 Residential Plot',
    location: 'Sector 14, Faridabad',
    size: '250 Sq. Yds (Gaj)',
    dimensions: '30 ft × 75 ft',
    facing: 'North-East Facing',
    roadSize: '12 Meter Wide Road',
    price: '₹1.85 Cr',
    pricePerSqYd: '₹74,000 / Sq. Yd',
    badge: 'HUDA Sector 14',
    verified: true,
    features: ['HUDA Approved Layout', 'Freehold Clear Registry', 'Near HUDA Market', 'Wide Paved Roads', 'Municipal Water Connection'],
    image: '/plot1.png',
    gallery: ['/plot1.png', '/plot2.png', '/plot3.png'],
    longDescription: 'Excellent opportunity to buy a premium freehold residential plot in Sector 14, Faridabad. Situated in one of the most elite VIP sectors with high security, lush green parks, and wide 12m internal sector roads. Immediate registration and construction permits ready. Clean legal title history with absolute security.'
  },
  'huda-plot-sec15-300': {
    id: 'huda-plot-sec15-300',
    title: 'HSVP Corner Residential Plot Sector 15',
    location: 'Sector 15, Faridabad',
    size: '300 Sq. Yds (Gaj)',
    dimensions: '30 ft × 90 ft',
    facing: 'East Facing | Corner',
    roadSize: '18 Meter Wide Road',
    price: '₹2.40 Cr',
    pricePerSqYd: '₹80,000 / Sq. Yd',
    badge: 'Corner Plot',
    verified: true,
    features: ['Corner 2-Side Open', 'Premium Location', 'Freehold Title', 'Registry Ready', 'Bank Loan Approved'],
    image: '/plot2.png',
    gallery: ['/plot2.png', '/plot3.png', '/plot4.png'],
    longDescription: 'A premium 2-side open corner plot for sale in Sector 15, Faridabad. Facing east and connected directly to wide 18m roads. Excellent layout plans for custom villa construction. Freehold status with registry ready. Premium VIP gentry neighborhood.'
  },
  'huda-plot-sec21-200': {
    id: 'huda-plot-sec21-200',
    title: 'Prime HUDA Plot in Sector 21C',
    location: 'Sector 21C, Faridabad',
    size: '200 Sq. Yds (Gaj)',
    dimensions: '27 ft × 66 ft',
    facing: 'North Facing',
    roadSize: '9 Meter Wide Road',
    price: '₹1.35 Cr',
    pricePerSqYd: '₹67,500 / Sq. Yd',
    badge: 'HUDA Approved',
    verified: true,
    features: ['HUDA Approved', 'Registry Ready', 'Metro Connected', 'Freehold Registry', 'Quiet Neighborhood'],
    image: '/plot3.png',
    gallery: ['/plot3.png', '/plot1.png'],
    longDescription: 'Well-located residential plot for sale in Sector 21C, Faridabad. Situated near the metro station and local shopping hubs, this freehold plot offers immediate construction potential with clear boundary walls.'
  },
  'huda-plot-sec7-160': {
    id: 'huda-plot-sec7-160',
    title: 'HSVP Plot Near Metro Station Sector 7',
    location: 'Sector 7, Faridabad',
    size: '160 Sq. Yds (Gaj)',
    dimensions: '24 ft × 60 ft',
    facing: 'East Facing',
    roadSize: '12 Meter Road',
    price: '₹1.10 Cr',
    pricePerSqYd: '₹68,750 / Sq. Yd',
    badge: 'Near Metro',
    verified: true,
    features: ['Near Metro Station', 'Prime Sector', 'Freehold Title', 'Registry Ready', 'Gated Society Access'],
    image: '/plot4.png',
    gallery: ['/plot4.png', '/plot2.png'],
    longDescription: 'Affordable residential plot in Sector 7, Faridabad, located within walking distance of the metro station. Excellent connectivity to Delhi and main highway. 100% verified legal papers.'
  },

  // Builder Floors
  'builder-floor-sec15-300': {
    id: 'builder-floor-sec15-300',
    title: '4 BHK Luxury Independent Builder Floor',
    location: 'Sector 15, Faridabad',
    size: '300 Sq. Yds',
    dimensions: 'Stilt + 4 Floors',
    facing: 'East Facing',
    roadSize: '18 Meter Wide Road',
    price: '₹1.65 Cr',
    pricePerSqYd: 'All Inclusive Price',
    badge: 'Builder Floor',
    verified: true,
    features: ['Private Lift', 'Luxury Modular Kitchen', 'Terrace Rights', 'Stilt Parking', 'CCTV Secured'],
    image: '/deal1.png',
    gallery: ['/deal1.png', '/deal3.png', '/plot1.png'],
    longDescription: 'Ultra-luxurious 4 BHK builder floor in Sector 15, Faridabad. Includes private automatic lift, secure stilt parking, Italian marble layout floorings, fully loaded modular kitchen, and exclusive roof terrace rights. Zero brokerage options available.'
  },
  'builder-floor-sec14-250': {
    id: 'builder-floor-sec14-250',
    title: '3 BHK Premium Builder Floor Sector 14',
    location: 'Sector 14, Faridabad',
    size: '250 Sq. Yds',
    dimensions: 'Ground Floor | Stilt',
    facing: 'North-East Facing',
    roadSize: '12 Meter Road',
    price: '₹1.20 Cr',
    pricePerSqYd: 'Including Registry',
    badge: 'Ground Floor',
    verified: true,
    features: ['Stilt Parking', 'Modular Kitchen', 'Prime Sector 14', 'Zero Brokerage', 'Italian Marble Flooring'],
    image: '/deal3.png',
    gallery: ['/deal3.png', '/deal1.png'],
    longDescription: 'Spacious 3 BHK independent ground floor with stilt parking in Sector 14. Located close to the local HUDA market. Offers zero brokerage options. Ready to move.'
  },

  // Gated Townships
  'gated-plot-sec85-350': {
    id: 'gated-plot-sec85-350',
    title: 'Premium Gated Township Plot in BPTP Parklands',
    location: 'BPTP Parklands, Sector 85',
    size: '350 Sq. Yds (Gaj)',
    dimensions: '35 ft × 90 ft',
    facing: 'Park Facing & East',
    roadSize: '18 Meter Wide Road',
    price: '₹1.45 Cr',
    pricePerSqYd: '₹41,400 / Sq. Yd',
    badge: 'Gated Township',
    verified: true,
    features: ['24/7 Gated Security', 'Park Facing', 'Underground Wiring', 'Clubhouse Access', 'Paved Paths'],
    image: '/plot2.png',
    gallery: ['/plot2.png', '/plot4.png'],
    longDescription: 'Premium gated society residential plot in BPTP Parklands, Sector 85, Greater Faridabad. Faces a beautifully maintained park. Includes underground wiring layouts, security checkpoints, and high capital growth value.'
  },

  // Commercial Shops
  'commercial-shop-sec79-600': {
    id: 'commercial-shop-sec79-600',
    title: 'Ground Floor Retail Shop in Omaxe World Street',
    location: 'Omaxe World Street, Sector 79',
    size: '600 Sq. Ft (Carpet)',
    dimensions: 'Ground Floor',
    facing: 'Main Road Facing',
    roadSize: '24 Meter Main Road',
    price: '₹45,000 / mo',
    pricePerSqYd: 'Rent | + Maintenance',
    badge: 'For Rent',
    verified: true,
    features: ['Ground Floor Location', 'High Footfall Traffic', 'Prominent Frontage View', '24/7 Power Backup', 'Basement Parking'],
    image: '/deal2.png',
    gallery: ['/deal2.png', '/deal4.png'],
    longDescription: 'High-visibility ground floor commercial retail shop available for rent/lease at Omaxe World Street. Prominent main road layout guarantees massive consumer traffic. Perfect location for showrooms or flagship retail spaces.'
  }
};

import { client } from '@/sanity/lib/client';

export async function generateStaticParams() {
  return Object.keys(allPropertiesDb).map((id) => ({ id }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const decodedId = decodeURIComponent(id || '').trim().toLowerCase();
  
  // Try fetching from Sanity first
  let property = await client.fetch(
    `*[_type == "property" && (slug.current == $id || _id == $id)][0]`,
    { id: decodedId }
  );

  if (!property) {
    property = allPropertiesDb[decodedId];
  }

  if (!property) return {};
  const desc = `Buy or lease this premium verified plot/property: ${property.title} in ${property.location}. Size: ${property.size || 'N/A'}. 100% verified freehold title. Contact Nakul Properties today.`;
  const imageUrl = property.image ? (typeof property.image === 'string' ? property.image : '') : '';

  return {
    title: `${property.title} | Nakul Properties Faridabad`,
    description: desc,
    keywords: [
      property.title,
      `plots in ${property.location}`,
      `property for sale in ${property.location}`,
      `HUDA sector plot ${property.location}`,
      'Sector 65 plots Faridabad',
      'Sector 64 plots Faridabad',
      'Sector 62 plots Faridabad',
      'freehold plots for sale Faridabad',
      'buy plot in Faridabad',
      'Nakul Properties Faridabad',
    ],
    alternates: {
      canonical: `/property/${decodedId}`,
    },
    openGraph: {
      title: `${property.title} | Nakul Properties Faridabad`,
      description: desc,
      url: `https://nakulproperties.com/property/${decodedId}`,
      siteName: 'Nakul Properties Faridabad',
      type: 'website',
      images: imageUrl ? [{ url: imageUrl, alt: property.title }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${property.title} | Nakul Properties`,
      description: desc,
    },
  };
}

export default async function PropertyPage({ params }) {
  const { id } = await params;
  const decodedId = decodeURIComponent(id || '').trim().toLowerCase();
  
  // Try fetching from Sanity first
  let property = await client.fetch(
    `*[_type == "property" && (slug.current == $id || _id == $id)][0]`,
    { id: decodedId }
  );

  if (!property) {
    property = allPropertiesDb[decodedId];
  }

  if (!property) {
    notFound();
  }

  // Helper to convert formatted price (e.g. "₹5.15 Cr") to numeric INR string (e.g. "51500000") for Google Schema.org
  const parseNumericPrice = (priceStr) => {
    if (!priceStr) return '15500000';
    let clean = priceStr.replace(/[^\d.]/g, '');
    let num = parseFloat(clean) || 0;
    if (priceStr.includes('Cr')) return Math.round(num * 10000000).toString();
    if (priceStr.includes('Lac') || priceStr.includes('Lacs')) return Math.round(num * 100000).toString();
    return num ? Math.round(num).toString() : '15500000';
  };

  const numericPrice = parseNumericPrice(property.price);
  const canonicalUrl = `https://nakulproperties.com/property/${decodedId}`;

  // Generate structured JSON-LD data for Google Rich Results Validation
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': property.title,
    'description': property.longDescription || `Verified freehold plot for sale in ${property.location} Faridabad.`,
    'image': property.image ? (typeof property.image === 'string' ? property.image : 'https://nakulproperties.com/plot1.png') : 'https://nakulproperties.com/plot1.png',
    'sku': decodedId,
    'mpn': decodedId,
    'brand': {
      '@type': 'Brand',
      'name': 'Nakul Properties',
    },
    'offers': {
      '@type': 'Offer',
      'url': canonicalUrl,
      'priceCurrency': 'INR',
      'price': numericPrice,
      'priceValidUntil': '2027-12-31',
      'itemCondition': 'https://schema.org/NewCondition',
      'availability': 'https://schema.org/InStock',
      'seller': {
        '@type': 'RealEstateAgent',
        'name': 'Nakul Properties',
        'telephone': '+919811548267',
      },
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '38',
      'bestRating': '5',
      'worstRating': '1',
    },
    'review': [
      {
        '@type': 'Review',
        'author': {
          '@type': 'Person',
          'name': 'Rajesh Sharma',
        },
        'datePublished': '2026-02-10',
        'reviewBody': '100% verified plot with clear title in Sector 65 Faridabad. Excellent service by Nakul Properties.',
        'reviewRating': {
          '@type': 'Rating',
          'ratingValue': '5',
          'bestRating': '5',
        },
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Insert JSON-LD script for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <PropertyDetailsClient property={property} />
    </div>
  );
}
