'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ShieldCheck, Phone, ArrowLeft, ChevronRight, Home, Eye } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';

export default function SearchPageClient({ type, location, budget, propertiesDb }) {
  
  // Filter logic based on URL search queries
  const filteredProperties = useMemo(() => {
    return Object.values(propertiesDb).filter((item) => {
      // 1. Filter by Property Type
      if (type && type !== 'all') {
        const itemCategory = item.id.toLowerCase();
        if (type === 'builder-floors' && !itemCategory.includes('floor')) return false;
        if (type === 'residential-plots' && !itemCategory.includes('plot')) return false;
        if (type === 'commercial' && !itemCategory.includes('shop') && !itemCategory.includes('commercial')) return false;
      }

      // 2. Filter by Location
      if (location && location !== 'all') {
        const itemLoc = item.location.toLowerCase();
        if (location === 'sector-65' && !itemLoc.includes('65')) return false;
        if (location === 'sector-64' && !itemLoc.includes('64')) return false;
        if (location === 'sector-62' && !itemLoc.includes('62')) return false;
        if (location === 'sector-14' && !itemLoc.includes('sector 14')) return false;
        if (location === 'sector-15' && !itemLoc.includes('sector 15')) return false;
        if (location === 'sector-21' && !itemLoc.includes('21')) return false;
        if (location === 'neharpar' && !itemLoc.includes('85') && !itemLoc.includes('89') && !itemLoc.includes('neharpar') && !itemLoc.includes('bptp')) return false;
      }

      // 3. Filter by Budget
      if (budget && budget !== 'all') {
        // Price numbers parser helper
        const priceStr = item.price.toLowerCase();
        const isRent = priceStr.includes('mo');
        
        if (budget === '50l-1cr') {
          if (isRent) return false;
          if (priceStr.includes('cr') && parseFloat(priceStr.replace(/[^\d.]/g, '')) > 1.0) return false;
          if (priceStr.includes('lac') && parseFloat(priceStr.replace(/[^\d.]/g, '')) < 50) return false;
        }
        if (budget === '1cr-2.5cr') {
          if (isRent) return false;
          if (priceStr.includes('cr')) {
            const val = parseFloat(priceStr.replace(/[^\d.]/g, ''));
            if (val < 1.0 || val > 2.5) return false;
          } else {
            return false;
          }
        }
        if (budget === '2.5cr-5cr') {
          if (isRent) return false;
          if (priceStr.includes('cr')) {
            const val = parseFloat(priceStr.replace(/[^\d.]/g, ''));
            if (val < 2.5 || val > 5.0) return false;
          } else {
            return false;
          }
        }
        if (budget === '5cr-plus') {
          if (isRent) return false;
          if (priceStr.includes('cr')) {
            const val = parseFloat(priceStr.replace(/[^\d.]/g, ''));
            if (val <= 5.0) return false;
          } else {
            return false;
          }
        }
      }

      return true;
    });
  }, [type, location, budget, propertiesDb]);

  return (
    <main className="min-h-screen bg-white pb-20">
      {/* Hero Banner */}
      <section className="relative w-full overflow-hidden" style={{ paddingTop: '104px', minHeight: '360px' }}>
        <div className="absolute inset-0 bg-neutral-900">
          <img
            src="/hero-banner.png"
            alt="Search Properties"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
        </div>

        <div className="relative z-10 flex flex-col justify-end px-4 sm:px-6 pb-10 pt-8 max-w-7xl mx-auto min-h-[256px] sm:min-h-[280px]">
          <nav className="flex items-center gap-1.5 text-white/70 text-xs font-medium mb-3" aria-label="Breadcrumb">
            <Link href="/" className="flex items-center gap-1 hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3 h-3 text-white/50" />
            <span className="text-white">Search Results</span>
          </nav>

          <span className="text-xs font-semibold uppercase tracking-widest text-white/70 mb-1 block">
            Property Finder
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight max-w-3xl">
            Property Search Results
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-outfit">
        {/* Search Results Summary Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10 pb-6 border-b border-neutral-100">
          <div>
            <span className="text-neutral-400 text-xs font-semibold uppercase tracking-wider block mb-1">Active Filter Parameters</span>
            <p className="text-neutral-600 text-sm font-medium">
              Filters: {type !== 'all' ? `Type: ${type}` : 'All Types'} • {location !== 'all' ? `Location: ${location}` : 'All Locations'} • {budget !== 'all' ? `Budget: ${budget}` : 'Any Budget'}
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-black border border-neutral-200 hover:bg-neutral-50 px-4.5 py-2.5 rounded-xl transition-all shrink-0 self-start"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        {/* Results Info Bar */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm font-semibold text-neutral-600">
            We found <span className="text-black text-base font-bold">{filteredProperties.length}</span> matching properties
          </span>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-black" />
            <span className="text-xs font-semibold text-neutral-500">100% Verified Database Listings</span>
          </div>
        </div>

        {/* Grid List */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProperties.map((property) => (
              <article
                key={property.id}
                className="bg-white border border-neutral-200 rounded-xl p-4 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  {/* Property Image Link */}
                  <Link href={`/property/${property.id}`} className="relative w-full h-44 rounded-md overflow-hidden mb-4 bg-neutral-100 block">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="bg-black/80 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                        {property.badge}
                      </span>
                    </div>
                    {property.verified && (
                      <div className="absolute top-2.5 right-2.5">
                        <span className="bg-white/90 backdrop-blur-md text-black text-[11px] font-semibold px-2 py-0.5 rounded-md flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5" /> Verified
                        </span>
                      </div>
                    )}
                  </Link>

                  {/* Title Link */}
                  <Link href={`/property/${property.id}`}>
                    <h2 className="text-base font-bold text-black mb-1.5 leading-snug group-hover:text-neutral-700 transition-colors">
                      {property.title}
                    </h2>
                  </Link>

                  {/* Location */}
                  <div className="flex items-center gap-1 text-neutral-500 text-xs font-medium mb-3">
                    <MapPin className="w-3.5 h-3.5 text-black shrink-0" />
                    <span className="truncate">{property.location}</span>
                  </div>

                  {/* Specs */}
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
                </div>

                {/* Price & Action Buttons */}
                <div>
                  <div className="pt-2 pb-3 border-t border-neutral-100 flex items-baseline justify-between mb-3">
                    <div>
                      <div className="text-xl font-bold text-black tracking-tight">{property.price}</div>
                      <div className="text-[11px] text-neutral-500 font-medium">{property.pricePerSqYd || property.priceSub || 'registry inclusive'}</div>
                    </div>
                  </div>

                  {/* Actions buttons */}
                  <div className="flex flex-col gap-2">
                    <Link
                      href={`/property/${property.id}`}
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
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-neutral-50 rounded-2xl border border-neutral-200">
            <p className="text-neutral-500 mb-4 text-base">No properties matching your specific search parameters were found.</p>
            <p className="text-neutral-400 text-sm mb-6">Contact our direct hotline valuation support to search unlisted sector layout plots.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a
                href="tel:+919811548267"
                className="bg-black hover:bg-neutral-800 text-white font-bold py-3 px-6 rounded-xl transition-all"
              >
                Call: +91 98115 48267
              </a>
              <a
                href="https://wa.me/919811548267"
                target="_blank"
                rel="noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl transition-all"
              >
                Inquire on WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
