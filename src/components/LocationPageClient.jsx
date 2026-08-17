'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ShieldCheck, Phone, ArrowLeft, ChevronRight, Home, Eye } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import InternalLinkHub from '@/components/InternalLinkHub';

export default function LocationPageClient({ data }) {
  // Helper to map properties array local items IDs to dynamic Db slugs
  const getSlugId = (propertyTitle) => {
    const title = propertyTitle.toLowerCase();
    if (title.includes('sec14') || title.includes('sector 14')) return 'huda-plot-sec14-250';
    if (title.includes('sec15') || title.includes('sector 15')) {
      if (title.includes('floor')) return 'builder-floor-sec15-300';
      return 'huda-plot-sec15-300';
    }
    if (title.includes('sec21') || title.includes('sector 21')) {
      if (title.includes('floor')) return 'builder-floor-sec14-250';
      return 'huda-plot-sec21-200';
    }
    if (title.includes('sec7') || title.includes('sector 7')) return 'huda-plot-sec7-160';
    if (title.includes('gated') || title.includes('bptp')) return 'gated-plot-sec85-350';
    if (title.includes('retail') || title.includes('shop') || title.includes('commercial') || title.includes('sco')) return 'commercial-shop-sec79-600';
    return 'huda-plot-sec14-250'; // Default fallback slug
  };

  return (
    <main>
      {/* Hero Banner — starts right below fixed navbar (topbar ~40px + mainnav ~64px = 104px) */}
      <section className="relative w-full overflow-hidden" style={{ paddingTop: '104px', minHeight: '360px' }}>
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={data.heroImage}
            alt={data.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/77 via-black/55 to-black/88" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col justify-end px-4 sm:px-6 pb-10 pt-8 max-w-7xl mx-auto min-h-[256px] sm:min-h-[280px]">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-white/70 text-xs font-medium mb-3" aria-label="Breadcrumb">
            <Link href="/" className="flex items-center gap-1 hover:text-white transition-colors">
              <Home className="w-3 h-3" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/#prime-sectors" className="hover:text-white transition-colors">Locations</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">{data.subtitle}</span>
          </nav>

          <span className="text-xs font-semibold uppercase tracking-widest text-white/70 mb-1 block">
            {data.subtitle}
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight max-w-3xl">
            {data.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 font-outfit">
        {/* Description + Back Link */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-10">
          <p className="text-neutral-600 text-base leading-relaxed max-w-2xl">
            {data.description}
          </p>
          <Link
            href="/#prime-sectors"
            className="inline-flex items-center gap-2 text-sm font-semibold text-black border border-neutral-200 hover:bg-neutral-50 px-4 py-2 rounded-lg transition-all shrink-0 self-start"
          >
            <ArrowLeft className="w-4 h-4" />
            All Locations
          </Link>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm font-semibold text-neutral-500">
            Showing <span className="text-black">{data.properties.length}</span> properties in this area
          </span>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-black" />
            <span className="text-xs font-semibold text-neutral-600">100% Verified Properties</span>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.properties.map((property) => {
            const dynamicId = property.slug?.current || property._id || property.id;
            return (
              <article
                key={property.id}
                className="bg-white border border-neutral-200 rounded-xl p-4 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  {/* Property Image */}
                  <Link href={`/property/${dynamicId}`} className="relative w-full h-44 rounded-md overflow-hidden mb-4 bg-neutral-100 block">
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="bg-black/80 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                        {property.badge}
                      </span>
                    </div>
                    {property.verified && (
                      <div className="absolute top-2.5 right-2.5">
                        <span className="bg-white/90 backdrop-blur-md text-black text-[11px] font-semibold px-2 py-0.5 rounded-md flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5 text-black" /> Verified
                        </span>
                      </div>
                    )}
                  </Link>

                  {/* Title */}
                  <Link href={`/property/${dynamicId}`}>
                    <h2
                      className="text-base font-bold text-black mb-1.5 leading-snug group-hover:text-neutral-700 transition-colors"
                    >
                      {property.title}
                    </h2>
                  </Link>

                  {/* Location */}
                  <div className="flex items-center gap-1 text-neutral-500 text-xs font-medium mb-3">
                    <MapPin className="w-3.5 h-3.5 text-black shrink-0" />
                    <span className="truncate">{property.location}</span>
                  </div>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 gap-2 text-xs bg-neutral-50 p-2.5 rounded-md border border-neutral-200/80 mb-4">
                    <div className="space-y-0.5">
                      <p className="text-neutral-500 text-[11px]">Size</p>
                      <p className="text-black font-semibold truncate">{property.size}</p>
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-neutral-500 text-[11px]">Facing</p>
                      <p className="text-black font-semibold truncate">{property.facing}</p>
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-neutral-500 text-[11px]">Dimensions</p>
                      <p className="text-black font-semibold truncate">{property.dimensions}</p>
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-neutral-500 text-[11px]">Road Size</p>
                      <p className="text-black font-semibold truncate">{property.roadSize}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {property.features.map((f) => (
                      <span
                        key={f}
                        className="bg-neutral-100 text-neutral-700 text-[10px] font-semibold px-2 py-0.5 rounded-md border border-neutral-200"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price & CTAs */}
                <div>
                  <div className="pt-2 pb-3 border-t border-neutral-100 flex items-baseline justify-between mb-3">
                    <div>
                      <div className="text-xl font-bold text-black tracking-tight">{property.price}</div>
                      <div className="text-[11px] text-neutral-500 font-medium">{property.pricePerSqYd}</div>
                    </div>
                  </div>

                  {/* Actions buttons */}
                  <div className="flex flex-col gap-2">
                    <Link
                      href={`/property/${dynamicId}`}
                      className="w-full flex items-center justify-center gap-1.5 bg-black hover:bg-neutral-800 text-white font-semibold text-xs py-2 rounded-md transition-all active:scale-95 shadow-xs"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Details</span>
                    </Link>
                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href={`https://wa.me/919811548267?text=Hi%20Nakul%20Properties,%20I%20am%20interested%20in%20${encodeURIComponent(property.title)}%20at%20${encodeURIComponent(property.location)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-1 text-black border border-neutral-300 hover:bg-neutral-50 font-semibold text-[10px] sm:text-xs py-1.5 rounded-md transition-all active:scale-95"
                      >
                        <FaWhatsapp className="w-3.5 h-3.5 text-black shrink-0" />
                        <span>WhatsApp</span>
                      </a>
                      <a
                        href="tel:+919811548267"
                        className="flex items-center justify-center gap-1 text-black border border-neutral-300 hover:bg-neutral-50 font-semibold text-[10px] sm:text-xs py-1.5 rounded-md transition-all active:scale-95"
                      >
                        <Phone className="w-3.5 h-3.5 text-black shrink-0" />
                        <span>Call Agent</span>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Internal Link Network Hub */}
        <InternalLinkHub title="Explore Other Sectors &amp; Buyer Guides" />

        {/* Bottom CTA Strip */}
        <div className="mt-14 bg-black rounded-2xl p-8 sm:p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
            Didn&apos;t find what you were looking for?
          </h2>
          <p className="text-neutral-400 text-base mb-6 max-w-xl mx-auto">
            We have many more unlisted properties in this location. Call or WhatsApp us for a free consultation and customized property search.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/919811548267?text=Hi%20Nakul%20Properties,%20I%20need%20help%20finding%20a%20property%20in%20Faridabad"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-100 text-black font-semibold text-sm py-3 px-6 rounded-xl transition-all"
            >
              <FaWhatsapp className="w-4 h-4" />
              Chat on WhatsApp
            </a>
            <a
              href="tel:+919811548267"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/50 text-white font-semibold text-sm py-3 px-6 rounded-xl transition-all"
            >
              <Phone className="w-4 h-4" />
              Call: +91 98115 48267
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
