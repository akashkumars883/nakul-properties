'use client';

import React, { useState } from 'react';
import { MapPin, ShieldCheck, Phone, Tag, Eye } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';

export default function ExclusiveDeals({ properties = [] }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const getImageUrl = (image) => {
    if (!image) return '/placeholder.png';
    try {
      return urlFor(image).url();
    } catch (e) {
      return '/placeholder.png';
    }
  };

  const getFilterCategory = (category) => {
    if (['huda', 'gated', 'budget', 'plot'].includes(category)) return 'plot';
    if (category === 'floor') return 'floor';
    if (category === 'commercial') return 'commercial';
    return category;
  };

  const filtered = (activeFilter === 'all' 
    ? properties 
    : properties.filter((d) => getFilterCategory(d.category) === activeFilter)
  ).slice(0, 8);

  return (
    <section
      id="exclusive-deals"
      className="scroll-mt-32"
      aria-labelledby="deals-heading"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-2 block">
          Latest Listings
        </span>
        <h2
          id="deals-heading"
          className="text-3xl sm:text-4xl font-semibold text-black mb-3 tracking-tight"
          itemProp="name"
        >
          Exclusive Sector Plot Deals in Faridabad
        </h2>
        <p className="text-neutral-600 text-base leading-relaxed">
          Verified freehold HUDA sector plots across Sector 65, 64 &amp; 62 — 100 Gaj to 500 Gaj available now.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {[
          { key: 'all', label: 'All Listings' },
          { key: 'plot', label: 'Plots' },
          { key: 'floor', label: 'Builder Floors' },
          { key: 'commercial', label: 'Commercial' },
        ].map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActiveFilter(tab.key)}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-md transition-all border ${
              activeFilter === tab.key
                ? 'bg-black text-white border-black'
                : 'bg-white text-black border-neutral-200 hover:bg-neutral-100'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Deals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((deal, index) => {
          const dealId = deal.slug?.current || deal._id;
          return (
          <article
            key={`${dealId}-${index}`}
            className="bg-white border border-neutral-200 rounded-xl p-4 transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between"
            itemScope
            itemType="https://schema.org/Product"
          >
            <div>
              {/* Image with link wrapper */}
              <Link href={`/property/${dealId}`} className="relative w-full h-44 rounded-md overflow-hidden mb-4 bg-neutral-100 block">
                <img
                  src={getImageUrl(deal.image)}
                  alt={deal.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Listing Type Badge */}
                <div className="absolute top-2.5 left-2.5">
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-md backdrop-blur-md ${deal.listingType === 'For Rent' ? 'bg-white/90 text-black' : 'bg-black/80 text-white'}`}>
                    {deal.listingType}
                  </span>
                </div>
                {deal.verified && (
                  <div className="absolute top-2.5 right-2.5">
                    <span className="bg-white/90 backdrop-blur-md text-black text-[11px] font-semibold px-2 py-0.5 rounded-md flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> Verified
                    </span>
                  </div>
                )}
              </Link>

              {/* Badge & Title */}
              <div className="flex items-center gap-2 mb-1.5">
                <span className="bg-neutral-100 text-black text-[11px] font-semibold px-2 py-0.5 rounded-md border border-neutral-200">
                  {deal.badge}
                </span>
              </div>
              
              <Link href={`/property/${dealId}`}>
                <h3 className="text-base font-bold text-black mb-1.5 leading-snug group-hover:text-neutral-700 transition-colors" itemProp="name">
                  {deal.title}
                </h3>
              </Link>

              {/* Location */}
              <div className="flex items-center gap-1 text-neutral-500 text-xs font-medium mb-3">
                <MapPin className="w-3.5 h-3.5 text-black shrink-0" />
                <span className="truncate">{deal.location}</span>
              </div>

              {/* Specs */}
              <div className="bg-neutral-50 border border-neutral-200/80 rounded-md p-2.5 mb-4 space-y-1">
                <div className="flex items-center gap-1.5 text-xs">
                  <Tag className="w-3 h-3 text-neutral-500 shrink-0" />
                  <span className="text-neutral-500">Size:</span>
                  <span className="text-black font-semibold truncate">{deal.size}</span>
                </div>
                <p className="text-[11px] text-neutral-500 leading-relaxed">
                  {deal.features ? deal.features.join(' | ') : deal.longDescription}
                </p>
              </div>
            </div>

            {/* Price & CTAs */}
            <div>
              <div className="pt-2 pb-3 border-t border-neutral-100 mb-3">
                <div className="text-xl font-bold text-black tracking-tight">{deal.price}</div>
                <div className="text-[11px] text-neutral-500 font-medium">{deal.priceSub || deal.pricePerSqYd}</div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-2">
                <Link
                  href={`/property/${dealId}`}
                  className="w-full flex items-center justify-center gap-1.5 bg-black hover:bg-neutral-800 text-white font-semibold text-xs py-2.5 rounded-md transition-all active:scale-95 shadow-xs"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Details</span>
                </Link>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`https://wa.me/919811548267?text=Hi%20Nakul%20Properties,%20I%20am%20interested%20in%20${encodeURIComponent(deal.title)}%20at%20${encodeURIComponent(deal.location)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-1 text-black border border-neutral-300 hover:bg-neutral-50 font-semibold text-[10px] sm:text-xs py-2 rounded-md transition-all active:scale-95"
                  >
                    <FaWhatsapp className="w-3.5 h-3.5 text-black shrink-0" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href="tel:+919811548267"
                    className="flex items-center justify-center gap-1 text-black border border-neutral-300 hover:bg-neutral-50 font-semibold text-[10px] sm:text-xs py-2 rounded-md transition-all active:scale-95"
                  >
                    <Phone className="w-3.5 h-3.5 text-black shrink-0" />
                    <span>Call Agent</span>
                  </a>
                </div>
              </div>
            </div>
          </article>
        )})}
      </div>
    </section>
  );
}
