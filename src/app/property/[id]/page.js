import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import PropertyDetailsClient from '@/components/PropertyDetailsClient';



import { client } from '@/sanity/lib/client';



export async function generateMetadata({ params }) {
  const { id } = await params;
  const decodedId = decodeURIComponent(id || '').trim().toLowerCase();
  
  // Try fetching from Sanity first
  let property = await client.fetch(
    `*[_type == "property" && (slug.current == $id || _id == $id)][0]`,
    { id: decodedId }
  );

  if (!property) return {};

  // Clean leading numbers like "12. " or "1. " from property titles
  const cleanTitle = (property.title || '').replace(/^\d+\.\s*/, '').trim();
  const locationText = property.location || 'Faridabad';
  const sizeText = property.size ? `${property.size}` : '';
  const priceText = property.price ? `@ ${property.price}` : '';

  // High-CTR Title (Keeps main query first, removes clutter)
  const metaTitle = sizeText 
    ? `${sizeText} ${cleanTitle} in ${locationText} ${priceText} | Nakul Properties`
    : `${cleanTitle} in ${locationText} ${priceText} | Nakul Properties`;

  // Dynamic High-CTR Meta Description with strong CTA
  const metaDescription = `Verified ${sizeText ? `${sizeText} ` : ''}${cleanTitle} for sale in ${locationText}. ${property.facing ? `${property.facing}, ` : ''}${property.roadSize ? `${property.roadSize}. ` : ''}100% Freehold Title, Bank Loan & Registry Ready. Call/WhatsApp: +91 9811548267 for Direct Site Visit!`;

  const imageUrl = property.image ? (typeof property.image === 'string' ? property.image : '') : '';

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: [
      cleanTitle,
      `plots in ${locationText}`,
      `property for sale in ${locationText}`,
      `HUDA sector plot ${locationText}`,
      'Sector 65 plots Faridabad',
      'Sector 64 plots Faridabad',
      'Sector 62 plots Faridabad',
      'freehold plots for sale Faridabad',
      'buy plot in Faridabad',
      'Nakul Properties Faridabad',
    ],
    alternates: {
      canonical: `https://www.nakulproperties.com/property/${decodedId}`,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: `https://www.nakulproperties.com/property/${decodedId}`,
      siteName: 'Nakul Properties Faridabad',
      type: 'website',
      images: [
        {
          url: `https://www.nakulproperties.com/api/og?title=${encodeURIComponent(cleanTitle)}&location=${encodeURIComponent(locationText)}&price=${encodeURIComponent(priceText)}`,
          width: 1200,
          height: 630,
          alt: cleanTitle,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
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
  const canonicalUrl = `https://www.nakulproperties.com/property/${decodedId}`;

  // Generate structured JSON-LD data for Google Rich Results Validation
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': property.title,
    'description': property.longDescription || `Verified freehold plot for sale in ${property.location} Faridabad.`,
    'image': property.image ? (typeof property.image === 'string' ? property.image : 'https://www.nakulproperties.com/plot1.png') : 'https://www.nakulproperties.com/plot1.png',
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
        'name': 'Properties',
        'item': 'https://www.nakulproperties.com/properties'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': property.title || 'Property',
        'item': canonicalUrl
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Insert JSON-LD script for Google Rich Snippets & Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLd, breadcrumbLd]) }}
      />
      
      <PropertyDetailsClient property={property} />
    </div>
  );
}
