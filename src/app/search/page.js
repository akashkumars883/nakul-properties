import Navbar from '@/components/Navbar';
import SearchPageClient from '@/components/SearchPageClient';

// Shared database source for search queries matching
const allPropertiesDb = {
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
    image: '/plot1.png'
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
    image: '/plot2.png'
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
    image: '/plot3.png'
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
    image: '/plot4.png'
  },
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
    image: '/deal1.png'
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
    image: '/deal3.png'
  },
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
    image: '/plot2.png'
  },
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
    image: '/deal2.png'
  }
};

export const metadata = {
  title: 'Search Properties | Nakul Properties',
  description: 'Find premium builder floors, residential plots, and commercial shops matching your filters in Faridabad.',
};

export default async function SearchPage({ searchParams }) {
  const { type = 'all', location = 'all', budget = 'all' } = await searchParams;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SearchPageClient 
        type={type} 
        location={location} 
        budget={budget} 
        propertiesDb={allPropertiesDb} 
      />
    </div>
  );
}
