import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import CategoryPageClient from '@/components/CategoryPageClient';

// Fully SEO Optimized & Unique Category Data for Google Ranking
const categoryData = {
  'bptp-townships': {
    slug: 'bptp-townships',
    title: 'BPTP Townships & Gated Plots in Faridabad',
    subtitle: 'Secured BPTP Townships & Parklands',
    description:
      'Explore verified BPTP township plots, independent floors, and villas in Greater Faridabad (Neharpar). Featuring BPTP Parklands, BPTP Discovery Park, BPTP District, and prime gated communities. 100% clear legal titles, gated security, clubhouses, wide 18m roads, and fast appreciation potential.',
    heroImage: '/cat-gated.png',
    seoTitle: 'BPTP Townships & Plots for Sale in Faridabad | Nakul Properties',
    seoDesc:
      'Buy verified plots, builder floors & villas in BPTP Parklands and BPTP townships across Faridabad. Clear registry, bank loan approval. Contact top consultants.',
    properties: [],
    faqs: [
      { q: 'Are all BPTP plots 100% registry ready with clear titles?', a: 'Yes, all listed BPTP township plots in Parklands and District undergo strict due diligence verifying allotment letters, conveyance deeds, zero pending dues, and clear title history.' },
      { q: 'What amenities are available in BPTP gated townships?', a: 'BPTP gated societies feature 24/7 security checkpoints, paved wide sector roads, underground utilities, landscaped green parks, and clubhouse access.' },
      { q: 'Can I get a bank loan on BPTP plots?', a: 'Yes, leading nationalized and private banks (ICICI, HDFC, SBI) provide up to 75-80% loan on verified BPTP plots.' }
    ],
  },
  'residential-plots': {
    slug: 'residential-plots',
    title: 'Freehold Residential Plots for Sale in Faridabad',
    subtitle: 'Freehold Sector & Locality Plots',
    description:
      'Explore verified freehold residential plots across prime Faridabad sectors including Sector 2, Sector 62, Sector 63, Sector 64, and Sector 65. Available from 100 Sq. Yds to 500 Sq. Yds with 100% clear legal titles, wide layout roads, and immediate physical possession ready for registry.',
    heroImage: '/cat-huda.png',
    seoTitle: 'Freehold Residential Plots for Sale in Faridabad | Nakul Properties',
    seoDesc:
      'Buy verified freehold residential plots in Sector 2, 62, 63, 64 & 65 Faridabad. Clear registry, bank loans available. Contact Nakul Properties.',
    properties: [],
    faqs: [
      { q: 'Are these residential plots freehold with clear title registry?', a: 'Yes, 100% of our listed residential plots across Sector 2, 62, 63, 64 & 65 are freehold with clear single-owner titles.' },
      { q: 'Which sectors offer maximum price appreciation?', a: 'Sector 65, 64, 62 & Sector 2 offer highest capital appreciation due to 18m wide planned roads, express connectivity, and metro link proximity.' },
      { q: 'How can I schedule a physical site visit?', a: 'Call or WhatsApp +91 9811548267 for an immediate guided site visit with our senior real estate consultants.' }
    ],
  },
  'flats': {
    slug: 'flats',
    title: 'Residential Flats & Luxury Apartments for Sale in Faridabad',
    subtitle: 'Flats & High-Rise Apartments',
    description:
      'Discover 2 BHK, 3 BHK, and 4 BHK luxury flats and apartments for sale across Faridabad. Located in prime residential sectors with modern amenities, power backup, security, and dedicated parking.',
    heroImage: '/cat-builder.png',
    seoTitle: 'Flats & Apartments for Sale in Faridabad | Nakul Properties',
    seoDesc:
      'Buy verified 2, 3 & 4 BHK residential flats and luxury apartments in Faridabad. Clear registry, bank loan approved.',
    properties: [],
    faqs: [
      { q: 'What configurations of residential flats are available?', a: 'We deal in 2 BHK, 3 BHK, and 4 BHK luxury residential flats and high-rise apartments across prime Faridabad sectors.' },
      { q: 'Are these flats eligible for bank home loans?', a: 'Yes, 100% of listed apartment complexes are approved by leading national banks for home loans.' }
    ],
  },
  'villas': {
    slug: 'villas',
    title: 'Luxury Independent Villas for Sale in Faridabad',
    subtitle: 'Exclusive Independent Villas',
    description:
      'Acquire premium luxury villas and bungalow homes in gated communities and prime established sectors of Faridabad. Featuring private gardens, multi-car parking, and high-end finishes.',
    heroImage: '/cat-builder.png',
    seoTitle: 'Luxury Villas for Sale in Faridabad | Nakul Properties',
    seoDesc:
      'Explore exclusive independent villas and luxury bungalows for sale in prime Faridabad sectors.',
    properties: [],
    faqs: [
      { q: 'Do independent luxury villas feature private gardens?', a: 'Yes, our luxury bungalow villas feature private lawn gardens, multi-car stilt parking, elevators, and triplex layouts.' }
    ],
  },
  'industrial': {
    slug: 'industrial',
    title: 'Industrial Plots & Factory Spaces for Sale in Faridabad',
    subtitle: 'Industrial Plots & Warehouses',
    description:
      'Buy or lease industrial plots, manufacturing plants, and warehousing facilities across Faridabad industrial sectors. Excellent highway access, wide heavy-duty roads, and power infrastructure.',
    heroImage: '/cat-commercial.png',
    seoTitle: 'Industrial Plots for Sale in Faridabad | Nakul Properties',
    seoDesc:
      'Verified industrial plots and factory space for sale/lease in Faridabad. High connectivity & clear titles.',
    properties: [],
    faqs: [
      { q: 'Are industrial plots approved for heavy manufacturing?', a: 'Yes, Sector 63 and industrial hubs feature heavy power connections, wide 24m roads, and cargo container access.' }
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
    properties: [],
    faqs: [
      { q: 'What gated townships are available in Greater Faridabad?', a: 'We feature plots in BPTP Parklands, Puri Amanvilas, RPS Savana, Omaxe City, and prime gated communities.' }
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
    properties: [],
    faqs: [
      { q: 'What commercial properties do you deal in?', a: 'We specialize in ground floor retail shops in Omaxe World Street, high-footfall main market shops, and SCO (Shop-cum-Office) plots along Mathura Road.' },
      { q: 'Are commercial properties available for both purchase and leasing?', a: 'Yes, we have prime options available for outright purchase as well as long-term commercial lease agreements.' }
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
    properties: [],
  },
};

import { client } from '@/sanity/lib/client';

const sanityCategoryMap = {
  'bptp-townships': 'bptp',
  'residential-plots': 'plots',
  'flats': 'flats',
  'villas': 'villas',
  'gated-townships': 'gated',
  'commercial-rent-sale': 'commercial',
  'builder-floors': 'floor',
  'industrial': 'industrial',
  'huda-plots': 'plots',
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
    keywords: [
      data.title,
      `${decodedCategory} in Faridabad`,
      'BPTP plots in Faridabad',
      'Sector 65 plots Faridabad',
      'Sector 64 plots Faridabad',
      'Sector 63 plots Faridabad',
      'Sector 62 plots Faridabad',
      'Sector 2 plots Faridabad',
      'plots for sale in Faridabad',
      'Nakul Properties Faridabad',
    ],
    alternates: {
      canonical: `/properties/${decodedCategory}`,
    },
    openGraph: {
      title: data.seoTitle,
      description: data.seoDesc,
      url: `https://www.nakulproperties.com/properties/${decodedCategory}`,
      siteName: 'Nakul Properties Faridabad',
      type: 'website',
      images: [{ url: `https://www.nakulproperties.com${data.heroImage}`, alt: data.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: data.seoTitle,
      description: data.seoDesc,
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

  let categoryProperties = [];
  if (decodedCategory === 'bptp-townships' || decodedCategory === 'gated-townships') {
    categoryProperties = await client.fetch(
      `*[_type == "property" && (category == "bptp" || category == "gated" || title match "*BPTP*")] | order(_createdAt desc)`
    );
  } else if (decodedCategory === 'residential-plots' || decodedCategory === 'huda-plots') {
    categoryProperties = await client.fetch(
      `*[_type == "property" && (category == "plots" || category == "huda" || category == "budget" || title match "*Plot*")] | order(_createdAt desc)`
    );
  } else if (decodedCategory === 'builder-floors') {
    categoryProperties = await client.fetch(
      `*[_type == "property" && (category == "floor" || title match "*Floor*")] | order(_createdAt desc)`
    );
  } else if (decodedCategory === 'commercial-rent-sale') {
    categoryProperties = await client.fetch(
      `*[_type == "property" && (category == "commercial" || title match "*Shop*" || title match "*SCO*")] | order(_createdAt desc)`
    );
  } else if (decodedCategory === 'flats') {
    categoryProperties = await client.fetch(
      `*[_type == "property" && (category == "flats" || title match "*Flat*" || title match "*Apartment*")] | order(_createdAt desc)`
    );
  } else if (decodedCategory === 'villas') {
    categoryProperties = await client.fetch(
      `*[_type == "property" && (category == "villas" || title match "*Villa*")] | order(_createdAt desc)`
    );
  } else if (decodedCategory === 'industrial') {
    categoryProperties = await client.fetch(
      `*[_type == "property" && (category == "industrial" || title match "*Industrial*")] | order(_createdAt desc)`
    );
  } else {
    categoryProperties = await client.fetch(
      `*[_type == "property"] | order(_createdAt desc)`
    );
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
      'url': `https://www.nakulproperties.com/property/${prop.slug?.current || prop._id}`,
    })),
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://www.nakulproperties.com/'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Categories',
        'item': 'https://www.nakulproperties.com/#property-types'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': data.title,
        'item': `https://www.nakulproperties.com/properties/${decodedCategory}`
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Insert JSON-LD script for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLd, breadcrumbLd]) }}
      />
      
      <CategoryPageClient data={pageData} />
    </div>
  );
}
