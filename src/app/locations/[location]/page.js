import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import LocationPageClient from '@/components/LocationPageClient';

// Hyper-Local SEO Optimized Sector Data in Faridabad (Unique content per location page)
const locationData = {
  'sector-14-15': {
    slug: 'sector-14-15',
    title: 'VIP Residential Sectors 14 & 15 Plots & Floors, Faridabad',
    subtitle: 'VIP & Established Residential Hub',
    description:
      'Explore premium residential listings in Sector 14 & 15, widely recognized as the most elite and premium VIP localities in Faridabad. These established sectors feature wide 18m wide layout avenues, beautifully landscaped local parks, top security checks, and top-ranking convent schools. Ideal location for buying luxury freehold plots and modern independent builder floors with clear titles.',
    heroImage: '/loc-sec14-15.png',
    seoTitle: 'Plots & Properties for Sale in Sector 14 & 15 Faridabad | Nakul Properties',
    seoDesc:
      'Buy verified freehold residential plots & luxury independent builder floors in Sector 14 & 15, Faridabad. Premier VIP zones with zero title disputes. Contact now.',
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
        badge: 'Sector 14 VIP',
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
        features: ['Corner 2-Side Open', 'Prime Sector 15', 'Freehold'],
      },
      {
        id: 3,
        image: '/deal1.png',
        title: '4 BHK Luxury Builder Floor',
        location: 'Sector 15, Faridabad',
        size: '300 Sq. Yds',
        dimensions: 'Stilt + 4 Floors',
        facing: 'East Facing',
        roadSize: '18 Meter Wide Road',
        price: '₹1.65 Cr',
        pricePerSqYd: 'All Inclusive Price',
        badge: 'Luxury Floor',
        verified: true,
        features: ['Private Lift', 'Modular Kitchen', 'Terrace Rights'],
      },
    ],
  },
  'sector-21-28': {
    slug: 'sector-21-28',
    title: 'Central Faridabad Properties (Sectors 21, 28 & 31)',
    subtitle: 'Highly Connected Central Hub',
    description:
      'Find prime residential houses, independent floors, and freehold plots in the highly sought-after Central Faridabad micro-markets, including Sector 21, 28, and 31. These sectors offer unbeatable proximity to Delhi-Mathura Highway metro stations, premium shopping complexes, commercial markets, and healthcare services. Highly recommended for families seeking immediate connectivity.',
    heroImage: '/loc-sec21-28.png',
    seoTitle: 'Plots & Floors for Sale in Sector 21 & 28 Faridabad | Nakul Properties',
    seoDesc:
      'Explore residential plots & premium independent builder floors in Sector 21, 28, and 31 Faridabad. Metro connected, fully registry ready properties.',
    properties: [
      {
        id: 1,
        image: '/plot3.png',
        title: 'HUDA Plot — Prime Sector 21',
        location: 'Sector 21C, Faridabad',
        size: '200 Sq. Yds (Gaj)',
        dimensions: '27 ft × 66 ft',
        facing: 'North Facing',
        roadSize: '9 Meter Wide Road',
        price: '₹1.35 Cr',
        pricePerSqYd: '₹67,500 / Sq. Yd',
        badge: 'Central Sector',
        verified: true,
        features: ['HUDA Approved', 'Registry Ready', 'Sector 21'],
      },
      {
        id: 2,
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
    ],
  },
  'sector-81-89': {
    slug: 'sector-81-89',
    title: 'Greater Faridabad Gated Township Plots (Sectors 81 to 89)',
    subtitle: 'Greater Faridabad Development Corridor',
    description:
      'Discover residential plot listings and modern township developments in Sectors 81, 82, 85, 88, and 89 (Greater Faridabad/Neharpar). These sectors are home to premium gated societies built by master developers like BPTP Parklands, Puri Amanvilas, Omaxe, and RPS. Features secure gated perimeters, landscaped thematic gardens, KGP expressway connectivity, and fast-growing capital returns.',
    heroImage: '/loc-sec81-89.png',
    seoTitle: 'Plots for Sale in Sector 81-89 Neharpar Faridabad | Nakul Properties',
    seoDesc:
      'Acquire premium gated residential plots in BPTP Parklands, Puri Amanvilas, Omaxe Greater Faridabad Sectors 81 to 89. Secure society lands for sale.',
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
    ],
  },
  'sector-mathura-road': {
    slug: 'sector-mathura-road',
    title: 'Commercial Properties on Mathura Road Highway & World Street',
    subtitle: 'Mathura Road & Omaxe World Street Commercial Markets',
    description:
      'Explore verified commercial retail shops, food court workspaces, and SCO (Shop-cum-Office) plots along Mathura Road (NH-48) and the high-traffic Omaxe World Street corridor. These prime commercial centers offer premium brand frontage, open layouts, spacious basement parkings, and multi-floor building approvals, ensuring constant footfall and high monthly rental yields.',
    heroImage: '/loc-mathura.png',
    seoTitle: 'Commercial Shops & SCO for Sale/Rent Mathura Road Faridabad | Nakul Properties',
    seoDesc:
      'Buy or rent commercial shops & SCO office spaces on prime Mathura Road and Omaxe World Street Faridabad. Premium high yield commercial assets.',
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
    ],
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
    alternates: {
      canonical: `/locations/${decodedLocation}`,
    },
  };
}

export default async function LocationPage({ params }) {
  const { location } = await params;
  const decodedLocation = decodeURIComponent(location || '').trim().toLowerCase();
  const data = locationData[decodedLocation];

  if (!data) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <LocationPageClient data={data} />
    </div>
  );
}
