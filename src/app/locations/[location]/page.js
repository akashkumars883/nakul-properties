import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import LocationPageClient from '@/components/LocationPageClient';
import { client } from '@/sanity/lib/client';

// Hyper-Local SEO Optimized Sector Data in Faridabad (Unique content per location page)
const locationData = {
  'sector-65': {
    slug: 'sector-65',
    title: 'Freehold Residential Plots & Properties for Sale in Sector 65, Faridabad',
    subtitle: 'Head Office Location & Prime Sector Hub',
    description:
      'Sector 65 is one of Faridabad’s most sought-after prime sectors, featuring wide 18-meter planned sector roads, 100% legal freehold registry titles, and top capital appreciation potential. Situated right at Nakul Properties head office locality, offering direct physical site visits, instant legal due diligence, and verified 100 Gaj to 500 Gaj plot and floor options.',
    heroImage: '/plot1.png',
    seoTitle: 'Sector 65 Plots & Properties for Sale in Faridabad | 100-500 Gaj Freehold',
    seoDesc:
      'Buy 100% verified freehold residential plots (100 Gaj to 500 Gaj) & builder floors in Sector 65 Faridabad. 18m wide roads, clear title, instant registry ready. Call/WhatsApp: +91 9811548267!',
    highlights: [
      { title: 'Plot & Floor Options Available', desc: '100 Gaj, 160 Gaj, 250 Gaj, 350 Gaj & 500 Gaj' },
      { title: 'Planned Sector Roads', desc: '18 Meter & 12 Meter Wide Paved Roads' },
      { title: 'Ownership & Legal Status', desc: 'Single Owner Freehold Registry Deed' },
      { title: 'Location Connectivity', desc: 'Direct Link to Bypass Road, Delhi Highway & Metro' },
    ],
    detailedContent: [
      'Sector 65 is widely recognized as one of Faridabad’s most strategic and rapidly developing residential and commercial micro-markets. Featuring wide 18-meter and 12-meter sector roads, modern underground drainage, and seamless connection to the Delhi-Mumbai Expressway bypass corridor, Sector 65 provides a high-quality living environment alongside excellent capital growth prospects. Residents enjoy instant access to major commercial hubs, renowned hospitals like Amrita Hospital, and premier educational institutions.',
      'The real estate landscape in Sector 65 offers a comprehensive selection of residential plot sizes ranging from 100 Sq. Yds (Gaj), 160 Gaj, 250 Gaj, 350 Gaj up to 500 Sq. Yds, as well as luxury independent builder floors constructed under approved stilt + 4 floor building norms. All listed properties possess 100% clear freehold registry titles with single-owner documentation, ensuring complete eligibility for home and plot loans across leading public and private sector banks.',
      'Serving as the head office location for Nakul Properties, Sector 65 provides homebuyers and real estate investors an unmatched localized advantage. Our physically located office guarantees immediate site visits, instant document verification, and access to exclusive verified inventory. Property values in Sector 65 continue to experience healthy appreciation due to ongoing urban infrastructure enhancements and consistent end-user demand across Delhi NCR.'
    ],
    faqs: [
      {
        q: 'Why is Sector 65 Faridabad considered a prime location for property investment?',
        a: 'Sector 65 offers planned 18-meter sector roads, excellent connectivity to the Delhi-Mumbai Expressway bypass, top schools, local commercial hubs, and Nakul Properties head office guidance.'
      },
      {
        q: 'What plot sizes are available in Sector 65 Faridabad?',
        a: 'Common plot sizes in Sector 65 include 100 Sq. Yds (Gaj), 160 Sq. Yds, 250 Sq. Yds, 350 Sq. Yds, and 500 Sq. Yds.'
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
    title: 'Freehold Residential Plots for Sale in Sector 64, Faridabad',
    subtitle: 'High Demand Sector Locality',
    description:
      'Discover prime 100 Gaj, 160 Gaj, 250 Gaj, 350 Gaj & 500 Gaj residential plots for sale in Sector 64, Faridabad. Clean single owner freehold registry, 12m to 18m wide sector roads, zero legal disputes, and immediate physical possession.',
    heroImage: '/plot2.png',
    seoTitle: 'Sector 64 Plots for Sale Faridabad | 100-500 Gaj Freehold',
    seoDesc:
      'Explore 100% verified 100 Gaj to 500 Gaj sector plots for sale in Sector 64 Faridabad with clear titles, 18m wide roads & instant registry. Call/WhatsApp: +91 9811548267!',
    highlights: [
      { title: 'Available Plot Sizes', desc: '100 Gaj, 160 Gaj, 250 Gaj, 350 Gaj & 500 Gaj' },
      { title: 'Wide Sector Roads', desc: '18 Meter & 12 Meter Wide Paved Roads' },
      { title: 'Approval Status', desc: '100% Approved Freehold Title Deed' },
      { title: 'High Demand Pocket', desc: 'Rapid Capital Appreciation & Top Infrastructure' },
    ],
    detailedContent: [
      'Situated right adjacent to the Sector 65 commercial belt, Sector 64 stands out as one of Faridabad’s most desirable residential sector pockets. The locality is characterized by well-planned 18-meter and 12-meter sector avenues, green parks, and robust municipal services. Its strategic positioning provides swift transit access to the Delhi-Mumbai Expressway bypass, Mathura Road (NH-44), and nearby Violet Line metro stations.',
      'Sector 64 offers verified residential plots ranging from 100 Gaj to 500 Gaj along with newly constructed luxury builder floors featuring modern stilt parking and private elevators. The neighborhood is fully inhabited and peaceful, with thriving local shopping markets and top schools within walking distance. Every plot listing features single-owner conveyance deeds, guaranteeing transparent transactions free from encumbrances.',
      'Real estate in Sector 64 enjoys high liquidity and robust rental demand from professionals working across industrial and corporate centers in Faridabad, Delhi, and Noida. Nakul Properties brings extensive hyper-local insight to Sector 64, supporting buyers with site visits, legal title verification, and hassle-free registration. Contact our team today to secure verified plot options in Sector 64.'
    ],
    faqs: [
      {
        q: 'Why should I buy a plot in Sector 64 Faridabad?',
        a: 'Sector 64 is a high-demand sector offering 18m wide sector roads, underground utilities, close proximity to Sector 65 markets, and high appreciation rates.'
      },
      {
        q: 'What is the price trend per Gaj for plots in Sector 64?',
        a: 'Sector 64 plot prices vary based on location (corner, wide road, facing park). Contact Nakul Properties for current verified market rates per Gaj.'
      },
      {
        q: 'Can I build 4 floors on a residential plot in Sector 64?',
        a: 'Yes, as per building norms, residential plot owners can construct stilt + 4 floors after necessary sanction plan approvals.'
      }
    ],
    properties: []
  },
  'sector-63': {
    slug: 'sector-63',
    title: 'Freehold Plots & Commercial Properties in Sector 63, Faridabad',
    subtitle: 'Residential & Commercial Sector Pocket',
    description:
      'Explore verified residential plots, builder floors, commercial SCOs, and industrial spaces in Sector 63, Faridabad. Excellent road connectivity, clear titles, and high investment return potential.',
    heroImage: '/plot4.png',
    seoTitle: 'Plots & Properties for Sale in Sector 63 Faridabad | Nakul Properties',
    seoDesc:
      'Buy verified freehold plots, floors, and commercial properties in Sector 63 Faridabad. Clear registry, bank loans available. Call: +91 9811548267!',
    highlights: [
      { title: 'Property Types', desc: 'Residential Plots, Floors, Commercial & Industrial' },
      { title: 'Sector Layout', desc: 'Wide Planned Roads & Green Belts' },
      { title: 'Clear Title Deeds', desc: '100% Verified Single Owner Registry' },
      { title: 'Connectivity', desc: 'Direct link to Bypass Road & Main Arterial Roads' },
    ],
    detailedContent: [
      'Sector 63, Faridabad is a versatile micro-market that combines residential plot development, independent builder floors, commercial SCO markets, and light industrial units. Strategically positioned near major arterial sector roads and the Faridabad Bypass Expressway, Sector 63 has established itself as an attractive location for investors seeking diverse income-generating assets.',
      'Residential plots in Sector 63 are available in standard plot sizes of 100 Gaj, 160 Gaj, 250 Gaj, and 350 Gaj. These plots offer full construction flexibility under HSVP building bylaws, enabling property owners to build modern stilt + 4 independent floors. The sector features wide paved roads, reliable utility connections, and convenient proximity to retail markets and healthcare facilities.',
      'All transactions in Sector 63 facilitated by Nakul Properties undergo thorough legal due diligence to ensure 100% clear freehold registry titles. Whether you wish to build a multi-story home or invest in commercial SCO units with long-term rental income, Sector 63 delivers competitive pricing per Gaj. Get in touch with Nakul Properties for authentic site details and verified listings in Sector 63.'
    ],
    faqs: [
      {
        q: 'What type of properties are available in Sector 63 Faridabad?',
        a: 'Sector 63 features residential plots, independent builder floors, commercial retail spaces, and industrial plot options.'
      }
    ],
    properties: []
  },
  'sector-62': {
    slug: 'sector-62',
    title: 'Freehold Residential Plots for Sale in Sector 62, Faridabad',
    subtitle: 'Peaceful & Established Residential Pocket',
    description:
      'Buy clear title freehold residential plots in Sector 62, Faridabad ranging from 100 Gaj to 500 Gaj. Featuring excellent sector layout, close proximity to main markets, top schools, and direct metro station links.',
    heroImage: '/plot3.png',
    seoTitle: 'Freehold Plots for Sale in Sector 62 Faridabad | Nakul Properties',
    seoDesc:
      'Verified 100 Gaj to 500 Gaj residential plots for sale in Sector 62 Faridabad with single-owner freehold registry & bank loan approval. Call: +91 9811548267!',
    highlights: [
      { title: 'Plot Options', desc: '100 Gaj, 160 Gaj, 250 Gaj, 350 Gaj & 500 Gaj' },
      { title: 'Peaceful Sector Layout', desc: 'Surrounded by Parks & Green Belts' },
      { title: 'Clear Title Deeds', desc: '100% Verified Ownership & Zero Dues' },
      { title: 'Convenient Connectivity', desc: 'Close to Mathura Road & Local Markets' },
    ],
    detailedContent: [
      'Sector 62, Faridabad is a mature, green residential sector designed for comfortable family living. Renowned for its peaceful atmosphere, wide inner sector roads, and landscaped neighborhood parks, Sector 62 balances quiet suburban living with direct access to urban conveniences. It sits within a quick drive to Mathura Road metro stations and local HUDA shopping centers.',
      'Residential inventory in Sector 62 primarily includes freehold plots from 100 Gaj to 500 Gaj and move-in ready independent builder floors. The sector is fully inhabited with fully functional water supply, electricity grids, and municipal sewerage systems. Listings provided by Nakul Properties feature verified single-owner registry deeds, enabling seamless bank loan approvals.',
      'Owing to its established infrastructure and vibrant community life, Sector 62 maintains steady property valuation growth and consistent buyer interest. Nakul Properties offers hyper-local expertise in Sector 62, helping clients identify park-facing, corner, and wide-road plot options at realistic market values. Contact us today to arrange a physical walkthrough of available properties in Sector 62.'
    ],
    faqs: [
      {
        q: 'Is Sector 62 Faridabad a fully developed sector?',
        a: 'Yes, Sector 62 is a fully inhabited and developed sector with complete electricity, water supply, sewage systems, and paved sector roads.'
      },
      {
        q: 'Are plots in Sector 62 eligible for home loans?',
        a: 'Yes, all our listed plots in Sector 62 feature clear freehold registry titles and are 100% eligible for home/plot loans from leading national banks.'
      }
    ],
    properties: []
  },
  'sector-2': {
    slug: 'sector-2',
    title: 'Freehold Residential Plots & Builder Floors in Sector 2, Faridabad',
    subtitle: 'Prime Central Connectivity Sector',
    description:
      'Explore premium residential plots, builder floors, and flats for sale in Sector 2, Faridabad. Situated close to Mathura Road highway and metro station, offering top connectivity and high rental yields.',
    heroImage: '/plot2.png',
    seoTitle: 'Plots & Builder Floors for Sale in Sector 2 Faridabad | Nakul Properties',
    seoDesc:
      'Verified residential plots & builder floors for sale in Sector 2 Faridabad. Metro connected, 100% registry ready. Call/WhatsApp: +91 9811548267!',
    highlights: [
      { title: 'Location Advantage', desc: 'Prime Proximity to Delhi Highway & Metro' },
      { title: 'Property Options', desc: 'Freehold Plots, Builder Floors & Flats' },
      { title: 'Registry Status', desc: 'Instant Registry & Single Owner Documents' },
      { title: 'Amenities', desc: 'Inhabited Locality, Markets & Top Schools' },
    ],
    detailedContent: [
      'Sector 2, Faridabad is a highly accessible, centrally located residential sector situated near the Delhi-Mathura Highway (NH-44) and major Violet Line metro stations. Its location makes it a preferred residential choice for individuals commuting daily between Faridabad, South Delhi, and Noida. The sector is backed by established civic amenities, wide roads, and active market zones.',
      'Properties in Sector 2 feature residential plots from 100 Gaj to 500 Gaj, classic independent bungalows, and contemporary 3BHK & 4BHK builder floors. The neighborhood includes reputable schools, healthcare clinics, banking institutions, and grocery stores within easy walking distance. Clear freehold title documentation allows buyers to complete registry quickly and secure favorable home loan interest rates.',
      'Driven by its central connectivity and strong neighborhood character, Sector 2 experiences continuous rental demand and high resale liquidity. Nakul Properties provides transparent real estate advice in Sector 2, matching buyer requirements with legal, dispute-free freehold properties. Contact our real estate advisors to review available plots and floors in Sector 2 Faridabad.'
    ],
    faqs: [
      {
        q: 'Why invest in Sector 2 Faridabad properties?',
        a: 'Sector 2 offers established infrastructure, rapid access to Mathura Road, metro connectivity, and strong resale value.'
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
    seoTitle: 'VIP Plots & Luxury Builder Floors in Sector 14 & 15 Faridabad',
    seoDesc:
      'Buy verified freehold residential plots & luxury independent builder floors in VIP Sectors 14 & 15, Faridabad. Zero title disputes. Call: +91 9811548267!',
    highlights: [
      { title: 'Elite Locality', desc: 'Premier VIP Residential Address of Faridabad' },
      { title: 'Wide Avenues', desc: '18m Planned Sector Roads & Lush Green Parks' },
      { title: 'Top Amenities', desc: 'Walk to Top Convent Schools & Local HUDA Markets' },
      { title: 'Freehold Title', desc: 'Single Owner Registered Conveyance Deeds' },
    ],
    detailedContent: [
      'Sectors 14 and 15 are widely recognized as the premier VIP residential addresses in Faridabad. Planned with grand 18-meter wide avenues, gated access points, lush green sector parks, and an elite resident demographic, these sectors offer an unmatched standard of luxury living. Located close to the city core, Sectors 14 and 15 provide immediate access to top convent schools, fine dining, and major commercial centers.',
      'Real estate options in Sectors 14 & 15 include large freehold plots ranging from 250 Gaj to over 1000 Gaj, as well as ultra-luxury independent builder floors crafted with premium specifications, elevator access, and private stilt parking. Properties in these sectors command high market valuations, serving as resilient wealth-preserving real estate assets with consistent long-term capital growth.',
      'Acquiring real estate in Sectors 14 & 15 requires detailed legal oversight and strong local relationships. Nakul Properties maintains a discreet network of property owners across these VIP sectors, guaranteeing 100% verified single-owner registry titles and transparent deal execution. Connect with Nakul Properties for private site visits and confidential consultation in Sectors 14 & 15.'
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
    seoTitle: 'Plots & Luxury Floors in Sector 21 & 28 Faridabad | Metro Linked',
    seoDesc:
      'Explore residential plots & premium independent builder floors in Sector 21, 28 & 31 Faridabad. Metro connected, 100% registry ready. Call: +91 9811548267!',
    highlights: [
      { title: 'Metro Proximity', desc: 'Walk to Violet Line Metro Stations' },
      { title: 'Prime Location', desc: 'Heart of Central Commercial & Residential Faridabad' },
    ],
    detailedContent: [
      'The Central Faridabad micro-market, comprising Sectors 21, 28, and 31, serves as the vibrant commercial and residential heart of the city. Situated along the Delhi-Mathura Highway and Violet Line Metro line (Bata Chowk and Neelam Chowk Ajronda stations), this micro-market offers exceptional transit ease for commuters travelling across Faridabad, Delhi, and Gurgaon.',
      'This core area features a diverse array of residential choices including independent plots, builder floors, multi-story apartments, and high-street commercial retail units. Surrounding amenities include leading healthcare institutions such as Fortis Escorts and Asian Institute of Medical Sciences, major shopping malls, multiplexes, and established educational centers.',
      'Properties in Sectors 21, 28, and 31 enjoy consistent tenant demand and strong resale liquidity due to their central positioning. Nakul Properties delivers comprehensive market advisory across Central Faridabad, managing buying, selling, and leasing with verified documentation. Contact our specialist team for authentic property options in Central Faridabad.'
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
    seoTitle: 'Plots for Sale in Sector 81-89 Neharpar Faridabad | Gated Societies',
    seoDesc:
      'Acquire premium gated residential plots in BPTP Parklands, Puri Amanvilas & Omaxe Greater Faridabad Sectors 81 to 89. Call/WhatsApp: +91 9811548267!',
    highlights: [
      { title: 'Gated Security', desc: '24/7 Gated Security & Clubhouse Amenities' },
      { title: 'Modern Townships', desc: 'BPTP Parklands, Puri Amanvilas & Omaxe' },
    ],
    detailedContent: [
      'Sectors 81 through 89 form the core residential extension of Greater Faridabad (Neharpar), a modern master-planned urban corridor. Connected via the 6-lane Master Road and bridges over the Agra Canal, this sector belt is home to premier gated townships built by top real estate developers including BPTP Parklands, Puri Amanvilas, Omaxe, and RPS Group.',
      'Property choices in Sectors 81-89 encompass gated residential plots from 100 Gaj to 500 Gaj, modern independent floors, and high-rise apartment communities. Residents benefit from round-the-clock gated security, underground electrical wiring, clubhouse amenities, landscaped parks, and wide internal sector roads. The sector also hosts Asia’s largest medical facility, Amrita Hospital (2400+ beds), along with top international schools.',
      'Greater Faridabad Sectors 81 to 89 represent one of the fastest appreciating real estate corridors in Delhi NCR, spurred by upcoming infrastructure projects such as the FNG Expressway link. Nakul Properties specializes in plot resales and builder floor transactions across Sectors 81-89. Contact us for verified inventory and transparent pricing in Greater Faridabad.'
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
      'Buy or lease high-footfall commercial shops & SCO office spaces on Mathura Road & Omaxe World Street Faridabad. High returns! Call: +91 9811548267!',
    highlights: [
      { title: 'High Footfall', desc: 'Highway Visibility & High Traffic Commercial Zones' },
      { title: 'SCO & Retail', desc: 'Freehold Commercial Shops & SCO Plots' },
    ],
    detailedContent: [
      'The Mathura Road (NH-44) highway belt and Omaxe World Street commercial hub represent the primary commercial engines of Faridabad. Known for high vehicle traffic, prominent highway frontage, and massive daily footfall, this corridor attracts major national retail brands, corporate offices, financial hubs, and entertainment destinations.',
      'Commercial offerings along Mathura Road and World Street comprise freehold Shop-Cum-Office (SCO) plots, lockable retail shop units, food court spaces, and corporate office spaces. These commercial properties feature modern architecture, dedicated parking facilities, high ceiling clearances, and power backup systems designed for optimal business operations.',
      'Investing in commercial assets along Mathura Road and World Street provides stable inflation-hedged rental returns and strong long-term asset value growth. Nakul Properties delivers professional commercial real estate brokerage, assisting investors with tenant evaluation, lease structuring, and projected yield analysis. Contact Nakul Properties today for verified commercial opportunities in Faridabad.'
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
      canonical: `https://nakulproperties.com/locations/${decodedLocation}`,
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

  const faqSchema = pageData.faqs && pageData.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': pageData.faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.q,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.a
      }
    }))
  } : null;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://nakulproperties.com/'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Locations',
        'item': 'https://nakulproperties.com/#prime-sectors'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': pageData.title,
        'item': `https://nakulproperties.com/locations/${decodedLocation}`
      }
    ]
  };

  const realEstateAgentSchema = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    'name': 'Nakul Properties',
    'image': 'https://nakulproperties.com/logo.png',
    '@id': 'https://nakulproperties.com/#organization',
    'url': 'https://nakulproperties.com',
    'telephone': '+91-9811548267',
    'priceRange': '₹₹₹',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Sector 65',
      'addressLocality': 'Faridabad',
      'addressRegion': 'Haryana',
      'postalCode': '121004',
      'addressCountry': 'IN'
    },
    'areaServed': 'Faridabad'
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateAgentSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <Navbar />
      <LocationPageClient data={pageData} />
    </div>
  );
}
