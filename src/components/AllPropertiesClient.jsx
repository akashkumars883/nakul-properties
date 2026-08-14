'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import Link from 'next/link';
import { MapPin, ShieldCheck, Tag, Search, SlidersHorizontal, Home, ChevronRight, Eye, Phone, ChevronDown, Check, Building, ArrowUpDown, Filter } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { urlFor } from '@/sanity/lib/image';

const ITEMS_PER_PAGE = 8;

// Sleek Custom Dropdown Component
function CustomDropdown({ value, onChange, options, icon: Icon, label, className = '' }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => opt.value === value) || options[0];

  return (
    <div className={`relative font-outfit ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white border border-neutral-200 hover:border-black text-black text-xs sm:text-sm font-semibold px-3.5 py-2.5 rounded-xl shadow-xs flex items-center justify-between gap-2 transition-all cursor-pointer"
      >
        <span className="flex items-center gap-2 truncate">
          {Icon && <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black shrink-0" />}
          <span className="truncate">{selectedOption.label}</span>
        </span>
        <ChevronDown className={`w-4 h-4 text-neutral-400 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-black' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 mt-1.5 bg-white border border-neutral-200 rounded-xl shadow-xl z-50 py-1.5 overflow-hidden animate-in fade-in zoom-in-95 duration-100">
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => {
                onChange(opt.value);
                setIsOpen(false);
              }}
              className={`w-full text-left px-3.5 py-2.5 text-xs sm:text-sm font-medium flex items-center justify-between transition-colors ${
                value === opt.value
                  ? 'bg-black text-white font-semibold'
                  : 'text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              <span className="truncate">{opt.label}</span>
              {value === opt.value && <Check className="w-3.5 h-3.5 text-white shrink-0 ml-1" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function AllPropertiesClient({ initialProperties = [] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [priceSort, setPriceSort] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);

  const getImageUrl = (image) => {
    if (!image) return '/placeholder.png';
    if (typeof image === 'string') return image;
    try {
      return urlFor(image).url();
    } catch (e) {
      return '/placeholder.png';
    }
  };

  // Categories helper mapping
  const categoriesList = [
    { value: 'all', label: 'All Categories' },
    { value: 'huda', label: 'HUDA Sectors' },
    { value: 'gated', label: 'Gated Townships' },
    { value: 'budget', label: 'Budget & Plots' },
    { value: 'floor', label: 'Builder Floors' },
    { value: 'commercial', label: 'Commercial' },
  ];

  const typesList = [
    { value: 'all', label: 'All Types' },
    { value: 'For Sale', label: 'For Sale' },
    { value: 'For Rent', label: 'For Rent' },
  ];

  const priceSortList = [
    { value: 'default', label: 'Sort by Price' },
    { value: 'low-high', label: 'Price: Low to High' },
    { value: 'high-low', label: 'Price: High to Low' },
  ];

  // Helper to parse price string for sorting (e.g. "₹1.85 Cr" -> 18500000, "₹45,000 / mo" -> 45000)
  const parsePrice = (priceStr) => {
    if (!priceStr) return 0;
    let clean = priceStr.replace(/[^\d.]/g, '');
    let num = parseFloat(clean) || 0;
    if (priceStr.includes('Cr')) return num * 10000000;
    if (priceStr.includes('Lacs') || priceStr.includes('Lac')) return num * 100000;
    return num;
  };

  // Filter and Sort Logic
  const filteredAndSorted = useMemo(() => {
    let result = [...initialProperties];

    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title?.toLowerCase().includes(q) ||
          p.location?.toLowerCase().includes(q)
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Listing Type filter
    if (selectedType !== 'all') {
      const isRent = selectedType === 'For Rent';
      result = result.filter((p) => {
        if (isRent) {
          return p.listingType === 'For Rent' || p.price?.toLowerCase().includes('/ mo') || p.price?.toLowerCase().includes('rent');
        } else {
          return p.listingType === 'For Sale' || (!p.price?.toLowerCase().includes('/ mo') && !p.price?.toLowerCase().includes('rent'));
        }
      });
    }

    // Sorting
    if (priceSort === 'low-high') {
      result.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    } else if (priceSort === 'high-low') {
      result.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    }

    return result;
  }, [initialProperties, searchQuery, selectedCategory, selectedType, priceSort]);

  // Reset pagination when filter changes
  useMemo(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, selectedType, priceSort]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredAndSorted.length / ITEMS_PER_PAGE) || 1;
  const paginatedProperties = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredAndSorted.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredAndSorted, currentPage]);

  return (
    <main className="min-h-screen bg-neutral-50 pb-16 font-outfit">
      {/* Hero Banner — starts right below fixed navbar */}
      <section className="relative w-full overflow-hidden" style={{ paddingTop: '104px', minHeight: '360px' }}>
        {/* Background Image fills entire section */}
        <div className="absolute inset-0 bg-neutral-900">
          <img
            src="/cat-huda.png"
            alt="All Properties"
            className="w-full h-full object-cover"
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
            <ChevronRight className="w-3 h-3 text-white/50" />
            <span className="text-white">Properties</span>
          </nav>

          <div className="flex flex-wrap items-center gap-3 mb-2">
            <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Total Listed: {initialProperties.length} Properties
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight max-w-3xl">
            All Verified Properties in Faridabad
          </h1>
        </div>
      </section>

      {/* Filter and Content Controls Panel (Flat toolbar layout) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="mb-2">

          {/* Total Count Header */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-100">
            <div className="flex items-center gap-2">
              <Building className="w-5 h-5 text-black" />
              <span className="text-sm font-bold text-black">
                Showing {filteredAndSorted.length} of {initialProperties.length} Properties
              </span>
            </div>
            <span className="text-xs font-medium text-neutral-500 hidden sm:inline-block">
              Sector 65, 64, 62 &amp; Faridabad Listings
            </span>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3.5 top-3 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search location, sector, title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:border-black text-sm bg-neutral-50 focus:bg-white transition-colors"
              />
            </div>

            {/* Custom Animated Filters Row — Fully Mobile Responsive */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 sm:gap-3 w-full lg:w-auto">
              <CustomDropdown
                value={selectedCategory}
                onChange={setSelectedCategory}
                options={categoriesList}
                icon={Filter}
                label="Category"
                className="col-span-1 min-w-0 sm:min-w-[160px]"
              />

              <CustomDropdown
                value={selectedType}
                onChange={setSelectedType}
                options={typesList}
                icon={Building}
                label="Type"
                className="col-span-1 min-w-0 sm:min-w-[140px]"
              />

              <CustomDropdown
                value={priceSort}
                onChange={setPriceSort}
                options={priceSortList}
                icon={ArrowUpDown}
                label="Sort"
                className="col-span-2 sm:col-span-1 min-w-0 sm:min-w-[160px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Grid Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {filteredAndSorted.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-neutral-200">
            <SlidersHorizontal className="w-12 h-12 text-neutral-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-black mb-1">No Properties Found</h3>
            <p className="text-neutral-500 text-sm max-w-xs mx-auto">
              We couldn&apos;t find any properties matching your current filter options. Try adjusting your filters.
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {paginatedProperties.map((property) => {
                const propertyId = property.slug?.current || property._id;
                return (
                  <article
                    key={propertyId}
                    className="bg-white border border-neutral-200 rounded-xl p-4 transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between"
                  >
                    <div>
                      {/* Image container */}
                      <Link href={`/property/${propertyId}`} className="relative w-full h-44 rounded-md overflow-hidden mb-4 bg-neutral-100 block">
                        <img
                          src={getImageUrl(property.image)}
                          alt={property.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-2.5 left-2.5">
                          <span className="bg-black/80 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                            {property.badge || 'Property'}
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
                      <Link href={`/property/${propertyId}`}>
                        <h3 className="text-base font-bold text-black mb-1.5 leading-snug group-hover:text-neutral-700 transition-colors">
                          {property.title}
                        </h3>
                      </Link>

                      {/* Location */}
                      <div className="flex items-center gap-1 text-neutral-500 text-xs font-medium mb-3">
                        <MapPin className="w-3.5 h-3.5 text-black shrink-0" />
                        <span className="truncate">{property.location}</span>
                      </div>

                      {/* Details specs */}
                      <div className="grid grid-cols-2 gap-2 text-xs bg-neutral-50 p-2.5 rounded-md border border-neutral-200/80 mb-4">
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

                      {/* Features */}
                      {property.features && property.features.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-4">
                          {property.features.slice(0, 3).map((f) => (
                            <span
                              key={f}
                              className="bg-neutral-100 text-neutral-700 text-[10px] font-semibold px-2 py-0.5 rounded-md border border-neutral-200"
                            >
                              {f}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Price and CTAs */}
                    <div>
                      <div className="pt-2 pb-3 border-t border-neutral-100 flex items-baseline justify-between mb-3">
                        <div>
                          <div className="text-xl font-bold text-black tracking-tight">{property.price}</div>
                          <div className="text-[11px] text-neutral-500 font-medium">{property.priceSub || property.pricePerSqYd}</div>
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="flex flex-col gap-2">
                        <Link
                          href={`/property/${propertyId}`}
                          className="w-full flex items-center justify-center gap-1.5 bg-black hover:bg-neutral-800 text-white font-semibold text-xs py-2.5 rounded-md transition-all active:scale-95 shadow-xs"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>View Details</span>
                        </Link>
                        <div className="grid grid-cols-2 gap-2">
                          <a
                            href={`https://wa.me/919811548267?text=Hi%20Nakul%20Properties,%20I%20am%20interested%20in%20${encodeURIComponent(property.title)}%20(${encodeURIComponent(property.location)})`}
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
                );
              })}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-12">
                <button
                  type="button"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  className="px-4 py-2 border border-neutral-200 text-xs sm:text-sm font-semibold rounded-lg bg-white text-black hover:bg-neutral-50 disabled:opacity-50 disabled:pointer-events-none transition-all"
                >
                  Previous
                </button>
                <span className="text-xs sm:text-sm text-neutral-500 font-medium">
                  Page <span className="text-black font-bold">{currentPage}</span> of <span className="text-black font-bold">{totalPages}</span>
                </span>
                <button
                  type="button"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  className="px-4 py-2 border border-neutral-200 text-xs sm:text-sm font-semibold rounded-lg bg-white text-black hover:bg-neutral-50 disabled:opacity-50 disabled:pointer-events-none transition-all"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}
