import './globals.css';
import Script from 'next/script';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nakulproperties.com';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Nakul Properties - Top Real Estate Agent & Property Advisor in Faridabad',
    template: '%s',
  },
  description: 'Nakul Properties - Buy, Sell & Rent Premier Residential Plots, Builder Floors, Luxury Apartments & Commercial Properties in Faridabad & Greater Faridabad.',
  keywords: [
    'Nakul Properties Faridabad',
    'Real Estate Agent Faridabad',
    'Property Dealers in Faridabad',
    'Buy Property in Faridabad',
    'Flats for Sale in Faridabad',
    'Builder Floors in Faridabad',
    'Greater Faridabad Neharpar Properties',
    'Plots in Sector 14 15 21 Faridabad',
    'Commercial Property Mathura Road Faridabad',
    'BPTP Neharpar Faridabad',
    'Property Advisor Delhi NCR Faridabad',
  ],
  authors: [{ name: 'Nakul Properties Faridabad' }],
  creator: 'Nakul Properties',
  publisher: 'Nakul Properties',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Nakul Properties - Top Real Estate Advisor in Faridabad',
    description: 'Find top residential plots, builder floors, flats, and commercial properties in Faridabad & Greater Faridabad with Nakul Properties.',
    url: siteUrl,
    siteName: 'Nakul Properties Faridabad',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Nakul Properties Faridabad Real Estate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nakul Properties - Faridabad Real Estate Advisory',
    description: 'Find best residential plots, builder floors, and commercial property in Faridabad.',
    creator: '@nakulproperties',
    images: [`${siteUrl}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: 'w9xjwo612cHUq_Ig87Aotfuj-WjBMbY54rWc33dQHOs',
  },
};

import Footer from '@/components/Footer';
import StartupFormModal from '@/components/StartupFormModal';

export default function RootLayout({ children }) {
  // Schema.org RealEstateAgent Structured Data focused on Faridabad
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Nakul Properties',
    image: `${siteUrl}/logo.png`,
    '@id': `${siteUrl}/#organization`,
    url: siteUrl,
    telephone: '+919811548267',
    priceRange: '₹₹₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sector 65',
      addressLocality: 'Faridabad',
      addressRegion: 'Haryana',
      postalCode: '121004',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.4089,
      longitude: 77.3178,
    },
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        name: 'Faridabad',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Greater Faridabad (Neharpar)',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Sector 14, 15, 16, 21, 81-89 Faridabad',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Delhi NCR',
      },
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: '09:00',
      closes: '20:00',
    },
    sameAs: [
      'https://www.facebook.com/nakulpropertiesfaridabad',
      'https://www.instagram.com/nakulpropertiesfaridabad',
      'https://www.linkedin.com/company/nakulproperties',
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TBLG3HRF');
          `}
        </Script>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BCKEDWYRVX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BCKEDWYRVX');
          `}
        </Script>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        
        {/* JSON-LD Structured Data for Local SEO (Faridabad) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-[#1F2937] antialiased selection:bg-[#D4AF37] selection:text-white flex flex-col min-h-screen">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TBLG3HRF"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        <div className="flex-1">
          {children}
        </div>
        <Footer />
        <StartupFormModal />

        {/* Anavya AI Chatbot Widget */}
        <Script
          src="https://anavyainfotech.com/widget.js"
          data-site-id="nakul-properties"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
