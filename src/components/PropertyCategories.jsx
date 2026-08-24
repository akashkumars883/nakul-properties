'use client';

import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function PropertyCategories() {
  const plotCategories = [
    {
      id: 'bptp-townships',
      title: 'BPTP Townships & Plots',
      location: 'Neharpar & Sectors 81-89',
      desc: 'Premium BPTP township plots, villas, and independent floors in secured gated communities.',
      seoKeyword: 'BPTP plots Faridabad, BPTP Parklands, BPTP town houses',
      image: '/cat-gated.png',
      link: '/properties/bptp-townships',
    },
    {
      id: 'residential-plots',
      title: 'Residential Sector Plots',
      location: 'Sectors 2, 62, 63, 64, 65 & VIP Sectors',
      desc: '100 Gaj to 500 Gaj freehold residential sector plots with 100% verified registry titles.',
      seoKeyword: 'Residential plots Faridabad, sector plots Faridabad',
      image: '/plot1.png',
      link: '/properties/residential-plots',
    },
    {
      id: 'flats-apartments',
      title: 'Flats & Apartments',
      location: 'Sector 69, 65, 64, 2 & Prime Zones',
      desc: 'Luxury 3 BHK & 4 BHK apartments, modern flats, and high-rise residences.',
      seoKeyword: 'Flats for sale Faridabad, 3 BHK flats Faridabad',
      image: '/plot4.png',
      link: '/properties/flats',
    },
    {
      id: 'builder-floors',
      title: 'Luxury Builder Floors',
      location: 'Sectors 14, 15, 69, 65 & 62',
      desc: 'Independent 3 BHK & 4 BHK builder floors with private lift, stilt parking & terrace rights.',
      seoKeyword: 'Builder floors Faridabad, independent floors',
      image: '/plot2.png',
      link: '/properties/flats',
    },
    {
      id: 'commercial-sco',
      title: 'Commercial Shops & SCO',
      location: 'Mathura Road, Sector 65, World Street',
      desc: 'Retail shops, SCO plots, corporate office spaces, and commercial showrooms.',
      seoKeyword: 'Commercial shops Faridabad, SCO plots Faridabad',
      image: '/cat-commercial.png',
      link: '/properties/commercial-rent-sale',
    },
    {
      id: 'industrial-plots',
      title: 'Industrial Units & Plots',
      location: 'Sector 63, 24, 25 & Industrial Zones',
      desc: 'Approved industrial plots, factory sheds, and warehousing spaces.',
      seoKeyword: 'Industrial plots Faridabad, factory space',
      image: '/plot3.png',
      link: '/properties/industrial-plots',
    },
  ];

  return (
    <section
      id="properties"
      className="scroll-mt-32 font-outfit"
      aria-labelledby="properties-heading"
    >
      {/* SEO Optimized Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-2 block">
          Faridabad Real Estate Listings
        </span>
        <h2
          id="properties-heading"
          className="text-3xl sm:text-4xl font-semibold text-black mb-3 tracking-tight"
        >
          Explore Property Categories in Faridabad
        </h2>
        <p className="text-neutral-600 text-base leading-relaxed">
          Find prime BPTP townships, residential plots, 3/4 BHK flats, luxury builder floors, commercial &amp; industrial properties across Sectors 2, 62, 63, 64, 65, 69 &amp; Greater Faridabad.
        </p>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plotCategories.map((cat) => (
          <Link
            key={cat.id}
            href={cat.link}
            className="group block"
            aria-label={`Browse ${cat.title} in ${cat.location}`}
          >
            <article
              id={cat.id}
              className="bg-white border border-neutral-200 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
            >
              {/* Category Image */}
              <div className="relative w-full h-44 overflow-hidden bg-neutral-100">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                {/* Location tag on image */}
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="text-white font-semibold text-[11px] tracking-wider uppercase flex items-center gap-1">
                    <MapPin className="w-3 h-3 shrink-0" />
                    <span className="truncate">{cat.location}</span>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  {/* Title */}
                  <h3
                    className="text-lg font-bold text-black mb-2 group-hover:text-neutral-600 transition-colors leading-snug"
                    itemProp="name"
                  >
                    {cat.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-500 text-sm leading-relaxed" itemProp="description">
                    {cat.desc}
                  </p>
                </div>

                {/* CTA */}
                <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-black mt-4 group-hover:gap-2.5 transition-all">
                  <span>View Properties</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
