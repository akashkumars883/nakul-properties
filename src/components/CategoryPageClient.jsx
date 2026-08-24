'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ShieldCheck, Phone, ArrowLeft, ChevronRight, Home, Eye } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { urlFor } from '@/sanity/lib/image';
import RelatedBlogsForProperty from '@/components/RelatedBlogsForProperty';

export default function CategoryPageClient({ data }) {
  const getImageUrl = (image) => {
    if (!image) return '/placeholder.png';
    if (typeof image === 'string') return image;
    try {
      return urlFor(image).url();
    } catch (e) {
      return '/placeholder.png';
    }
  };

  return (
    <main>
      {/* Hero Banner — starts right below fixed navbar (topbar ~40px + mainnav ~64px = 104px) */}
      <section className="relative w-full overflow-hidden" style={{ paddingTop: '104px', minHeight: '360px' }}>
        {/* Background Image fills entire section */}
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>

        {/* Hero Content — sits on top of image */}
        <div className="relative z-10 flex flex-col justify-end px-4 sm:px-6 pb-10 pt-8 max-w-7xl mx-auto min-h-[256px] sm:min-h-[280px]">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-white/70 text-xs font-medium mb-3" aria-label="Breadcrumb">
            <Link href="/" className="flex items-center gap-1 hover:text-white transition-colors">
              <Home className="w-3 h-3" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/#properties" className="hover:text-white transition-colors">Properties</Link>
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
            href="/#properties"
            className="inline-flex items-center gap-2 text-sm font-semibold text-black border border-neutral-200 hover:bg-neutral-50 px-4 py-2 rounded-lg transition-all shrink-0 self-start"
          >
            <ArrowLeft className="w-4 h-4" />
            All Categories
          </Link>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm font-semibold text-neutral-500">
            Showing <span className="text-black">{data.properties.length}</span> properties
          </span>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-black" />
            <span className="text-xs font-semibold text-neutral-600">100% Verified Listings</span>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.properties.map((property) => {
            const dynamicId = property.slug?.current || property._id;
            return (
              <article
                key={dynamicId}
                className="bg-white border border-neutral-200 rounded-xl overflow-hidden transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  {/* Top Image — Full Bleed Header */}
                  <Link href={`/property/${dynamicId}`} className="relative w-full h-44 overflow-hidden bg-neutral-100 block">
                    <img
                      src={getImageUrl(property.image)}
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    <div className="absolute top-3 left-3">
                      <span className="bg-black/80 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                        {property.badge || 'Verified'}
                      </span>
                    </div>
                    {property.verified && (
                      <div className="absolute top-3 right-3">
                        <span className="bg-white/95 text-black text-[10px] font-bold px-2 py-0.5 rounded-md border border-neutral-200 shadow-xs flex items-center gap-1">
                          <ShieldCheck className="w-3 h-3 text-black" /> Verified
                        </span>
                      </div>
                    )}
                  </Link>

                  {/* Card Content Body */}
                  <div className="p-4">
                    <div className="flex items-center gap-1 text-neutral-500 font-semibold text-[11px] tracking-wider uppercase mb-1">
                      <MapPin className="w-3 h-3 text-black shrink-0" />
                      <span className="truncate">{property.location}</span>
                    </div>

                    <Link href={`/property/${dynamicId}`}>
                      <h3 className="text-base font-bold text-black mb-3 group-hover:text-neutral-600 transition-colors leading-snug line-clamp-1">
                        {property.title}
                      </h3>
                    </Link>

                    {/* Specs Grid */}
                    <div className="grid grid-cols-2 gap-2 text-xs bg-neutral-50 p-2.5 rounded-md border border-neutral-200/80 mb-2">
                      <div className="space-y-0.5">
                        <p className="text-neutral-500 text-[11px]">Size</p>
                        <p className="text-black font-semibold truncate">{property.size || 'N/A'}</p>
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-neutral-500 text-[11px]">Facing</p>
                        <p className="text-black font-semibold truncate">{property.facing || 'N/A'}</p>
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-neutral-500 text-[11px]">Dimensions</p>
                        <p className="text-black font-semibold truncate">{property.dimensions || 'N/A'}</p>
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-neutral-500 text-[11px]">Road Size</p>
                        <p className="text-black font-semibold truncate">{property.roadSize || 'N/A'}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer Price & Action Bar */}
                <div className="p-4 pt-0">
                  <div className="pt-3 border-t border-neutral-100 flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <span className="text-[10px] text-neutral-400 block font-medium uppercase tracking-wider">Price Guide</span>
                      <span className="text-sm font-bold text-black truncate block">{property.price}</span>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <Link
                        href={`/property/${dynamicId}`}
                        className="flex items-center gap-1 bg-black hover:bg-neutral-800 text-white font-semibold text-xs px-3 py-2 rounded-lg transition-all active:scale-95 shadow-xs"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Details</span>
                      </Link>
                      <a
                        href={`https://wa.me/919811548267?text=Hi%20Nakul%20Properties,%20I%20am%20interested%20in%20${encodeURIComponent(property.title)}%20at%20${encodeURIComponent(property.location)}`}
                        target="_blank"
                        rel="noreferrer"
                        title="WhatsApp Agent"
                        className="w-8 h-8 flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-lg transition-all active:scale-95"
                      >
                        <FaWhatsapp className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Frequently Asked Questions */}
        {data.faqs && data.faqs.length > 0 && (
          <div className="mt-14 pt-10 border-t border-neutral-200/80 space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 block">Clear Answers for Buyers</span>
              <h3 className="text-xl sm:text-2xl font-bold text-black tracking-tight">
                Frequently Asked Questions ({data.subtitle})
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.faqs.map((faq, idx) => (
                <div key={idx} className="bg-neutral-50 border border-neutral-200/80 rounded-xl p-5 space-y-2">
                  <h4 className="text-sm font-bold text-black leading-snug">{faq.q}</h4>
                  <p className="text-xs text-neutral-600 leading-relaxed font-light">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Buyer Guides */}
        <RelatedBlogsForProperty property={{ title: data.title, location: data.subtitle, longDescription: data.description }} title="Related Category & Buyer Guides" />

        {/* Bottom CTA Strip */}
        <div className="mt-14 bg-black rounded-2xl p-8 sm:p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
            Didn&apos;t find what you were looking for?
          </h2>
          <p className="text-neutral-400 text-base mb-6 max-w-xl mx-auto">
            We have many more unlisted properties. Call or WhatsApp us for a free consultation and customized property search.
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
