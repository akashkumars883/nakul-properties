'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, BookOpen, Building2, ChevronRight, Compass } from 'lucide-react';

const sectorLinks = [
  { label: 'Sector 65 HUDA Plots', href: '/locations/sector-65', badge: 'Head Office' },
  { label: 'Sector 64 Freehold Plots', href: '/locations/sector-64', badge: 'Popular' },
  { label: 'Sector 62 HUDA Plots', href: '/locations/sector-62', badge: 'Hot Deal' },
  { label: 'Sector 14 & 15 VIP Plots', href: '/locations/sector-14-15', badge: 'Prime' },
  { label: 'Central Faridabad (21 & 28)', href: '/locations/sector-21-28', badge: 'Metro Link' },
];

const guideLinks = [
  { label: '7-Point HUDA Plot Verification Checklist', href: '/blog/huda-plots-in-faridabad-property-verification', badge: 'Must Read' },
  { label: 'HUDA Plot Registry & Possession Process', href: '/blog/faridabad-huda-plot-registry-process-guide', badge: 'Guide' },
  { label: 'Top Sectors to Buy Freehold HUDA Plots', href: '/blog/top-5-sectors-to-invest-huda-plots-faridabad', badge: 'Investment' },
  { label: 'Why Sector 65 is #1 Location for Plots', href: '/blog/why-invest-in-sector-65-faridabad-plots', badge: 'Insight' },
];

const inventoryLinks = [
  { label: 'HUDA & HSVP Plots Inventory', href: '/properties/huda-plots', count: 'Live Inventory' },
  { label: 'Luxury Builder Floors', href: '/properties/builder-floors', count: 'Premium' },
  { label: 'Gated Townships & Societies', href: '/properties/gated-townships', count: 'Gated' },
  { label: 'Commercial Shops & SCO Plots', href: '/properties/commercial-rent-sale', count: 'Commercial' },
  { label: 'Browse All Verified Properties', href: '/properties', count: 'View All' },
];

export default function InternalLinkHub({ currentPath = '', title = "Explore Faridabad Real Estate Network", className = "" }) {
  return (
    <section className={`mt-16 pt-12 border-t border-neutral-200/80 font-outfit ${className}`}>
      {/* Section Title */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-1 block flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-black" /> Navigation &amp; Insights Network
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-black tracking-tight">
            {title}
          </h3>
        </div>
      </div>

      {/* 3 Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Column 1: Sectors */}
        <div className="bg-neutral-50 border border-neutral-200/80 rounded-2xl p-5 space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-neutral-200">
            <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-black">Prime HUDA Sectors</h4>
              <p className="text-[11px] text-neutral-500">Top locations in Faridabad</p>
            </div>
          </div>
          <ul className="space-y-2.5">
            {sectorLinks.map((item) => {
              const isActive = currentPath === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`group flex items-center justify-between p-2 rounded-lg text-xs font-semibold transition-all ${
                      isActive 
                        ? 'bg-black text-white' 
                        : 'text-neutral-700 hover:bg-white hover:shadow-xs hover:text-black border border-transparent hover:border-neutral-200'
                    }`}
                  >
                    <span className="truncate pr-2">{item.label}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full shrink-0 font-medium ${
                      isActive ? 'bg-neutral-800 text-white' : 'bg-neutral-200/70 text-neutral-600 group-hover:bg-neutral-900 group-hover:text-white'
                    }`}>
                      {item.badge}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Column 2: Buyer Guides */}
        <div className="bg-neutral-50 border border-neutral-200/80 rounded-2xl p-5 space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-neutral-200">
            <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-black">Buying &amp; Legal Guides</h4>
              <p className="text-[11px] text-neutral-500">Verification &amp; Market Insights</p>
            </div>
          </div>
          <ul className="space-y-2.5">
            {guideLinks.map((item) => {
              const isActive = currentPath === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`group flex items-center justify-between p-2 rounded-lg text-xs font-semibold transition-all ${
                      isActive 
                        ? 'bg-black text-white' 
                        : 'text-neutral-700 hover:bg-white hover:shadow-xs hover:text-black border border-transparent hover:border-neutral-200'
                    }`}
                  >
                    <span className="truncate pr-2">{item.label}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full shrink-0 font-medium ${
                      isActive ? 'bg-neutral-800 text-white' : 'bg-neutral-200/70 text-neutral-600 group-hover:bg-neutral-900 group-hover:text-white'
                    }`}>
                      {item.badge}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Column 3: Property Inventory */}
        <div className="bg-neutral-50 border border-neutral-200/80 rounded-2xl p-5 space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-neutral-200">
            <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center">
              <Building2 className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-black">Property Inventory</h4>
              <p className="text-[11px] text-neutral-500">Explore active listings</p>
            </div>
          </div>
          <ul className="space-y-2.5">
            {inventoryLinks.map((item) => {
              const isActive = currentPath === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`group flex items-center justify-between p-2 rounded-lg text-xs font-semibold transition-all ${
                      isActive 
                        ? 'bg-black text-white' 
                        : 'text-neutral-700 hover:bg-white hover:shadow-xs hover:text-black border border-transparent hover:border-neutral-200'
                    }`}
                  >
                    <span className="truncate pr-2">{item.label}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full shrink-0 font-medium ${
                      isActive ? 'bg-neutral-800 text-white' : 'bg-neutral-200/70 text-neutral-600 group-hover:bg-neutral-900 group-hover:text-white'
                    }`}>
                      {item.count}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

      </div>
    </section>
  );
}
