'use client';

import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function PropertyCategories() {
  const plotCategories = [
    {
      id: 'sector-65-plots',
      title: 'Sector 65 Prime Plots',
      location: 'Sector 65, Faridabad (Head Office)',
      desc: '100 Gaj to 500 Gaj freehold HUDA approved sector plots in Sector 65 with 18m wide roads.',
      seoKeyword: 'Sector 65 plots in Faridabad, HUDA plot Sector 65',
      image: '/plot1.png',
      link: '/locations/sector-65',
    },
    {
      id: 'sector-64-plots',
      title: 'Sector 64 Sector Plots',
      location: 'Sector 64, Faridabad',
      desc: '100 Gaj to 500 Gaj residential sector plots in Sector 64 with 100% clear legal titles.',
      seoKeyword: 'Sector 64 plots for sale, HUDA plot Sector 64',
      image: '/plot2.png',
      link: '/locations/sector-64',
    },
    {
      id: 'sector-62-plots',
      title: 'Sector 62 Freehold Plots',
      location: 'Sector 62, Faridabad',
      desc: '100 Gaj to 500 Gaj residential plots in Sector 62 with immediate registry & possession.',
      seoKeyword: 'Sector 62 plots Faridabad, freehold plots Sector 62',
      image: '/plot3.png',
      link: '/locations/sector-62',
    },
    {
      id: 'huda-plots',
      title: 'HUDA / HSVP Sector Plots',
      location: 'Sector 65, 64, 62 & Prime Sectors',
      desc: 'Freehold HSVP sector plots in prime established sectors of Faridabad with 100% clear legal titles.',
      seoKeyword: 'HUDA plots in Faridabad, HSVP plot for sale',
      image: '/cat-huda.png',
      link: '/properties/huda-plots',
    },
  ];

  return (
    <section
      id="properties"
      className="scroll-mt-32"
      aria-labelledby="properties-heading"
    >
      {/* SEO Optimized Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-2 block">
          Faridabad Real Estate Listings
        </span>
        <h2
          id="properties-heading"
          className="text-3xl sm:text-4xl font-semibold text-black mb-4 tracking-tight"
        >
          Explore Plot Categories &amp; Property Types in Faridabad
        </h2>
        <p className="text-neutral-600 text-base leading-relaxed">
          Find prime residential plots, HUDA sector plots, gated township plots &amp; commercial properties across Faridabad &amp; Greater Faridabad.
        </p>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
