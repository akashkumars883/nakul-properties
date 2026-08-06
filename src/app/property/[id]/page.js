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
    `*[_type == "property" && slug.current == $id][0]`,
    { id: decodedId }
  );

  if (!property) {
    property = allPropertiesDb[decodedId];
  }

  if (!property) return {};
  const desc = `Buy or lease this premium verified property: ${property.title} in ${property.location}. Size: ${property.size || 'N/A'}. Contact Nakul Properties today.`;
  return {
    title: `${property.title} | Nakul Properties`,
    description: desc,
    alternates: {
      canonical: `/property/${decodedId}`,
    },
    openGraph: {
      title: `${property.title} | Nakul Properties`,
      description: desc,
      url: `https://nakulproperties.com/property/${decodedId}`,
      type: 'website',
    },
  };
}

export default async function PropertyPage({ params }) {
  const { id } = await params;
  const decodedId = decodeURIComponent(id || '').trim().toLowerCase();
  
  // Try fetching from Sanity first
  let property = await client.fetch(
    `*[_type == "property" && slug.current == $id][0]`,
    { id: decodedId }
  );

  if (!property) {
    property = allPropertiesDb[decodedId];
  }

  if (!property) {
    notFound();
  }

  // Generate structured JSON-LD data for Google SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SingleFamilyResidence',
    'name': property.title,
    'description': property.longDescription || 'Verified luxury property for sale/rent in Faridabad.',
    'image': property.image ? (typeof property.image === 'string' ? property.image : '') : '',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': property.location,
      'addressRegion': 'Haryana',
      'addressCountry': 'IN',
    },
    'offers': {
      '@type': 'Offer',
      'price': property.price,
      'priceCurrency': 'INR',
      'availability': 'https://schema.org/InStock',
      'validFrom': '2026-01-01',
    },
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
