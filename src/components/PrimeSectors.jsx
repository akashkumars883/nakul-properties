'use client';

import React from 'react';
import { MapPin, ArrowRight, Building, Trees, Store, LandPlot } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function PrimeSectors() {
  const sectors = [
    {
      id: 'sector-65',
      name: 'Sector 65',
      type: 'Head Office & Prime Sector',
      icon: LandPlot,
      price: 'Starting ₹1.70 Cr*',
      plotsCount: '5+ Plots Available',
      highlights: '100 to 500 Gaj HUDA Approved Plots, 18m Wide Sector Roads',
      image: '/loc-sec14-15.png',
      link: '/locations/sector-65',
    },
    {
      id: 'sector-64',
      name: 'Sector 64',
      type: 'HUDA Approved Sector',
      icon: Building,
      price: 'Starting ₹1.60 Cr*',
      plotsCount: '5+ Plots Available',
      highlights: '100 to 500 Gaj Freehold Sector Plots, Clear Title Registry',
      image: '/loc-sec21-28.png',
      link: '/locations/sector-64',
    },
    {
      id: 'sector-62',
      name: 'Sector 62',
      type: 'Freehold Residential Sector',
      icon: Trees,
      price: 'Starting ₹1.55 Cr*',
      plotsCount: '5+ Plots Available',
      highlights: '100 to 500 Gaj Residential Plots, Immediate Possession',
      image: '/loc-sec81-89.png',
      link: '/locations/sector-62',
    },
    {
      id: 'sector-14-15',
      name: 'Sector 14 & 15',
      type: 'VIP Established Sectors',
      icon: Store,
      price: 'Starting ₹1.50 Cr*',
      plotsCount: '25+ Plots Available',
      highlights: 'VIP Sector Avenues, Builder Floors & HUDA Approved Plots',
      image: '/loc-mathura.png',
      link: '/locations/sector-14-15',
    },
  ];

  return (
    <section
      id="prime-sectors"
      className="scroll-mt-32"
      aria-labelledby="sectors-heading"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-2 block">
          Faridabad Prime Locations
        </span>
        <h2
          id="sectors-heading"
          className="text-3xl sm:text-4xl font-semibold text-black mb-3 tracking-tight"
          itemProp="name"
        >
          Top Locations &amp; Sectors for Plots in Faridabad
        </h2>
        <p className="text-neutral-600 text-base leading-relaxed">
          Explore plot listings and property options across Faridabad’s most sought-after sectors.
        </p>
      </div>

      {/* Sectors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sectors.map((sec) => {
          const IconComp = sec.icon;
          return (
            <Link
              key={sec.id}
              href={sec.link}
              className="group block"
              aria-label={`Explore properties in ${sec.name}`}
            >
              <article
                className="bg-white border border-neutral-200 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                {/* Sector Image */}
                <div className="relative w-full h-44 overflow-hidden bg-neutral-100">
                  <Image
                    src={sec.image}
                    alt={sec.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Icon & Count on top of image */}
                  <div className="absolute top-3 left-3 flex items-center justify-center w-8 h-8 rounded-lg bg-black/80 backdrop-blur-xs text-white">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-white/95 text-black text-[10px] font-bold px-2 py-0.5 rounded-md border border-neutral-200 shadow-sm">
                      {sec.plotsCount}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Subtitle */}
                    <span className="text-neutral-500 font-semibold text-[11px] tracking-wider uppercase mb-1 block">
                      {sec.type}
                    </span>

                    {/* Sector Name */}
                    <h3 className="text-lg font-bold text-black mb-2 group-hover:text-neutral-600 transition-colors leading-snug">
                      {sec.name}
                    </h3>

                    {/* Highlights */}
                    <p className="text-neutral-500 text-xs leading-relaxed mb-4">
                      {sec.highlights}
                    </p>
                  </div>

                  {/* Footer Price & CTA */}
                  <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-neutral-400 block font-medium uppercase tracking-wider">Price Guide</span>
                      <span className="text-xs font-bold text-black">{sec.price}</span>
                    </div>
                    <div className="inline-flex items-center gap-1 text-xs font-bold text-black group-hover:underline">
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
