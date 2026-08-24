'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  MapPin, ShieldCheck, Phone, ChevronRight, Home,
  Ruler, Compass, Road, Info, Check, Eye, Map, BookOpen, Star,
  Zap, Car, ShieldAlert, Sparkles, Droplet, Landmark, Store, Train, ArrowUpDown, Trees,
  X, ChevronLeft, Maximize2, Building2, CheckCircle2, FileText, Layers, Award
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { urlFor } from '@/sanity/lib/image';
import RelatedBlogsForProperty from '@/components/RelatedBlogsForProperty';

export default function PropertyDetailsClient({ property }) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx] = useState(0);

  const getImageUrl = (image) => {
    if (!image) return '/placeholder.png';
    if (typeof image === 'string') return image;
    try {
      return urlFor(image).url();
    } catch (e) {
      return '/placeholder.png';
    }
  };

  // Fallback in case gallery is missing
  const images = (property.gallery && property.gallery.length > 0) ? property.gallery : [property.image];

  const openLightbox = (idx) => {
    setLightboxIdx(idx);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  // Keyboard navigation for Lightbox (Esc, Left Arrow, Right Arrow)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isLightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') setLightboxIdx((prev) => (prev > 0 ? prev - 1 : images.length - 1));
      if (e.key === 'ArrowRight') setLightboxIdx((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, images.length]);

  // Helper to map amenity strings to custom visual icons
  const getAmenityIcon = (feature) => {
    const text = feature.toLowerCase();
    if (text.includes('lift') || text.includes('elevator')) return <ArrowUpDown className="w-4 h-4 text-black" />;
    if (text.includes('kitchen') || text.includes('modular')) return <Sparkles className="w-4 h-4 text-black" />;
    if (text.includes('parking') || text.includes('car') || text.includes('stilt')) return <Car className="w-4 h-4 text-black" />;
    if (text.includes('security') || text.includes('cctv') || text.includes('gate') || text.includes('guard')) return <ShieldAlert className="w-4 h-4 text-black" />;
    if (text.includes('wiring') || text.includes('electricity') || text.includes('power') || text.includes('backup')) return <Zap className="w-4 h-4 text-black" />;
    if (text.includes('water') || text.includes('tap') || text.includes('supply') || text.includes('plumbing')) return <Droplet className="w-4 h-4 text-black" />;
    if (text.includes('bank') || text.includes('loan') || text.includes('finance')) return <Landmark className="w-4 h-4 text-black" />;
    if (text.includes('market') || text.includes('shop') || text.includes('street') || text.includes('retail')) return <Store className="w-4 h-4 text-black" />;
    if (text.includes('metro') || text.includes('station')) return <Train className="w-4 h-4 text-black" />;
    if (text.includes('road') || text.includes('highway') || text.includes('paved') || text.includes('meter') || text.includes('wide')) return <Road className="w-4 h-4 text-black" />;
    if (text.includes('neighborhood') || text.includes('quiet') || text.includes('park') || text.includes('green') || text.includes('garden')) return <Trees className="w-4 h-4 text-black" />;
    if (text.includes('sq. ft') || text.includes('sq.ft') || text.includes('sq. yd') || text.includes('gaj') || text.includes('area') || text.includes('size')) return <Ruler className="w-4 h-4 text-black" />;
    if (text.includes('balcony') || text.includes('balconies') || text.includes('terrace') || text.includes('facing')) return <Compass className="w-4 h-4 text-black" />;
    if (text.includes('marble') || text.includes('tile') || text.includes('flooring') || text.includes('luxury') || text.includes('finish') || text.includes('sanitary')) return <Award className="w-4 h-4 text-black" />;
    if (text.includes('freehold') || text.includes('registry') || text.includes('title') || text.includes('legal') || text.includes('approved')) return <ShieldCheck className="w-4 h-4 text-black" />;
    if (text.includes('room') || text.includes('bhk') || text.includes('bedroom') || text.includes('bath') || text.includes('lobby') || text.includes('dining')) return <Building2 className="w-4 h-4 text-black" />;
    return <CheckCircle2 className="w-4 h-4 text-black" />;
  };

  // Mock similar properties based on category
  const similarListings = [
    {
      id: 'huda-plot-sec14-250',
      title: 'Approved Sector 14 Residential Plot',
      location: 'Sector 14, Faridabad',
      size: '250 Sq. Yds',
      price: '₹1.85 Cr',
      image: '/plot1.png'
    },
    {
      id: 'huda-plot-sec15-300',
      title: 'Corner Residential Plot Sector 15',
      location: 'Sector 15, Faridabad',
      size: '300 Sq. Yds',
      price: '₹2.40 Cr',
      image: '/plot2.png'
    },
    {
      id: 'builder-floor-sec15-300',
      title: '4 BHK Luxury Independent Builder Floor',
      location: 'Sector 15, Faridabad',
      size: '300 Sq. Yds',
      price: '₹1.65 Cr',
      image: '/deal1.png'
    }
  ].filter(item => item.id !== property.id).slice(0, 2);

  return (
    <main className="min-h-screen bg-neutral-50/60 pb-20 font-outfit">
      {/* Full Screen Image Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Lightbox Top Header */}
          <div className="flex items-center justify-between z-10" onClick={(e) => e.stopPropagation()}>
            <div className="text-white">
              <h3 className="text-sm sm:text-base font-bold truncate max-w-xs sm:max-w-xl">{property.title}</h3>
              <p className="text-xs text-white/60">Image {lightboxIdx + 1} of {images.length}</p>
            </div>

            <button
              type="button"
              onClick={closeLightbox}
              className="bg-white/10 hover:bg-white/20 text-white rounded-full p-2.5 transition-all cursor-pointer border border-white/20"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Lightbox Center Image View */}
          <div
            className="relative flex-1 flex items-center justify-center my-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {images.length > 1 && (
              <button
                type="button"
                onClick={() => setLightboxIdx((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
                className="absolute left-2 sm:left-4 z-20 bg-black/60 hover:bg-black/90 text-white p-3 rounded-full transition-all border border-white/20 cursor-pointer"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            <img
              src={getImageUrl(images[lightboxIdx])}
              alt={`${property.title} full view`}
              className="max-h-[82vh] max-w-[92vw] object-contain rounded-xl shadow-2xl transition-all"
            />

            {images.length > 1 && (
              <button
                type="button"
                onClick={() => setLightboxIdx((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
                className="absolute right-2 sm:right-4 z-20 bg-black/60 hover:bg-black/90 text-white p-3 rounded-full transition-all border border-white/20 cursor-pointer"
                aria-label="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}
          </div>

          {/* Lightbox Bottom Footer Hint */}
          <div className="text-center text-xs text-white/60 pb-2 z-10" onClick={(e) => e.stopPropagation()}>
            Click anywhere outside or press <kbd className="bg-white/20 text-white px-1.5 py-0.5 rounded text-[10px]">ESC</kbd> to close full screen view
          </div>
        </div>
      )}

      {/* Premium Hero Banner */}
      <section className="relative w-full overflow-hidden" style={{ paddingTop: '104px', minHeight: '360px' }}>
        <div className="absolute inset-0">
          <img
            src={getImageUrl(property.image)}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/85" />
        </div>

        <div className="relative z-10 flex flex-col justify-end px-4 sm:px-6 pb-10 pt-8 max-w-7xl mx-auto min-h-[256px] sm:min-h-[280px]">
          <nav className="flex items-center gap-1.5 text-white/80 text-xs font-medium mb-3" aria-label="Breadcrumb">
            <Link href="/" className="flex items-center gap-1 hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3 h-3 text-white/50" />
            <Link href="/#properties" className="hover:text-white/80 transition-colors">Properties</Link>
            <ChevronRight className="w-3 h-3 text-white/50" />
            <span className="text-white truncate max-w-xs">{property.title}</span>
          </nav>

          <div className="flex flex-wrap gap-2 mb-2">
            <span className="bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-md uppercase tracking-wider">
              {property.badge || 'Verified Listing'}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight max-w-4xl">
            {property.title}
          </h1>
          <div className="flex items-center gap-1.5 text-white/80 text-xs sm:text-sm mt-2">
            <MapPin className="w-4 h-4 text-[#D4AF37]" />
            <span>{property.location}</span>
          </div>
        </div>
      </section>

      {/* Main Content Layout Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-outfit">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

          {/* Left Column (Main Details & Gallery) */}
          <div className="lg:col-span-8 space-y-8">

            {/* Gallery Showcase */}
            <div className="bg-white border border-neutral-200 rounded-3xl p-3 sm:p-4 space-y-3">
              {/* Active Image */}
              <div
                onClick={() => openLightbox(activeImageIdx)}
                className="relative w-full h-[300px] sm:h-[480px] rounded-2xl overflow-hidden bg-neutral-100 cursor-zoom-in group border border-neutral-200/80"
              >
                <img
                  src={getImageUrl(images[activeImageIdx])}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Lightbox Expand Hint */}
                <div className="absolute bottom-4 right-4 z-10">
                  <span className="bg-black/80 backdrop-blur-md text-white text-xs font-bold px-3.5 py-2 rounded-xl flex items-center gap-2 border border-white/20 group-hover:bg-black transition-all">
                    <Maximize2 className="w-4 h-4" /> Tap for Fullscreen View
                  </span>
                </div>
              </div>

              {/* Thumbnails Row */}
              {images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pt-1 pb-1">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setActiveImageIdx(idx);
                        openLightbox(idx);
                      }}
                      className={`relative w-24 h-20 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${activeImageIdx === idx ? 'border-black scale-95' : 'border-transparent opacity-75 hover:opacity-100 hover:border-neutral-300'
                        }`}
                    >
                      <img
                        src={getImageUrl(img)}
                        alt="Property view thumbnail"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Overview Metrics Cards */}
            <div className="bg-white border border-neutral-200 rounded-3xl p-6 space-y-4">
              <h2 className="text-lg font-bold text-black tracking-tight flex items-center gap-2">
                <Building2 className="w-5 h-5 text-black" /> Quick Property Snapshot
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-neutral-50 border border-neutral-200/80 rounded-2xl p-4 space-y-1">
                  <div className="text-neutral-500 text-xs font-semibold flex items-center gap-1.5">
                    <Ruler className="w-4 h-4 text-black" /> Area / Size
                  </div>
                  <div className="text-black font-extrabold text-base sm:text-lg">{property.size}</div>
                  <div className="text-[11px] text-neutral-500">Super Built-Up</div>
                </div>

                <div className="bg-neutral-50 border border-neutral-200/80 rounded-2xl p-4 space-y-1">
                  <div className="text-neutral-500 text-xs font-semibold flex items-center gap-1.5">
                    <Info className="w-4 h-4 text-black" /> Configuration
                  </div>
                  <div className="text-black font-extrabold text-base sm:text-lg truncate">{property.dimensions || 'Standard Unit'}</div>
                  <div className="text-[11px] text-neutral-500">Layout Specs</div>
                </div>

                <div className="bg-neutral-50 border border-neutral-200/80 rounded-2xl p-4 space-y-1">
                  <div className="text-neutral-500 text-xs font-semibold flex items-center gap-1.5">
                    <Compass className="w-4 h-4 text-black" /> Facing
                  </div>
                  <div className="text-black font-extrabold text-base sm:text-lg truncate">{property.facing || 'East / North-East'}</div>
                  <div className="text-[11px] text-neutral-500">Vastu Compliant</div>
                </div>

                <div className="bg-neutral-50 border border-neutral-200/80 rounded-2xl p-4 space-y-1">
                  <div className="text-neutral-500 text-xs font-semibold flex items-center gap-1.5">
                    <Road className="w-4 h-4 text-black" /> Road Width
                  </div>
                  <div className="text-black font-extrabold text-base sm:text-lg">{property.roadSize || '18-24 Meter'}</div>
                  <div className="text-[11px] text-neutral-500">Wide Access</div>
                </div>
              </div>
            </div>

            {/* Property Overview & Description */}
            <div className="bg-white border border-neutral-200 rounded-3xl p-6 sm:p-8 space-y-4">
              <h2 className="text-xl font-bold text-black tracking-tight flex items-center gap-2">
                <FileText className="w-5 h-5 text-black" /> Property Description &amp; Highlights
              </h2>
              <p className="text-neutral-700 text-base leading-relaxed font-normal">
                {property.longDescription || 'This prime freehold property is located in an established locality of Faridabad. Features 100% verified legal papers, clear single owner registry, wide front roads, and ready for immediate physical possession.'}
              </p>

              {/* Key Highlights Pill Badges */}
              <div className="pt-2 flex flex-wrap gap-2.5">
                <span className="bg-neutral-100 border border-neutral-200 text-neutral-800 text-xs font-semibold px-3.5 py-2 rounded-xl flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-black" /> 100% Freehold Land
                </span>
                <span className="bg-neutral-100 border border-neutral-200 text-neutral-800 text-xs font-semibold px-3.5 py-2 rounded-xl flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-black" /> Immediate Possession Ready
                </span>
                <span className="bg-neutral-100 border border-neutral-200 text-neutral-800 text-xs font-semibold px-3.5 py-2 rounded-xl flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-black" /> Bank Loan Assistance
                </span>
              </div>
            </div>

            {/* Structured Property Specifications Matrix Table */}
            <div className="bg-white border border-neutral-200 rounded-3xl p-6 sm:p-8 space-y-5">
              <h2 className="text-xl font-bold text-black tracking-tight flex items-center gap-2">
                <Layers className="w-5 h-5 text-black" /> Technical Specifications &amp; Features
              </h2>

              <div className="border border-neutral-200 rounded-2xl overflow-hidden divide-y divide-neutral-200 text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200 bg-neutral-50/60 p-3.5 font-medium">
                  <div className="flex justify-between sm:pr-4 py-1">
                    <span className="text-neutral-500">Property Location:</span>
                    <span className="text-black font-bold">{property.location}</span>
                  </div>
                  <div className="flex justify-between sm:pl-4 py-1">
                    <span className="text-neutral-500">Category:</span>
                    <span className="text-black font-bold uppercase">{property.category}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200 p-3.5 font-medium">
                  <div className="flex justify-between sm:pr-4 py-1">
                    <span className="text-neutral-500">Super Built-up Size:</span>
                    <span className="text-black font-bold">{property.size}</span>
                  </div>
                  <div className="flex justify-between sm:pl-4 py-1">
                    <span className="text-neutral-500">Price Rate:</span>
                    <span className="text-black font-bold">{property.pricePerSqYd || property.priceSub || '₹8,000 / Sq. Ft'}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200 bg-neutral-50/60 p-3.5 font-medium">
                  <div className="flex justify-between sm:pr-4 py-1">
                    <span className="text-neutral-500">Facing / Orientation:</span>
                    <span className="text-black font-bold">{property.facing || 'East / North-East'}</span>
                  </div>
                  <div className="flex justify-between sm:pl-4 py-1">
                    <span className="text-neutral-500">Front Road Width:</span>
                    <span className="text-black font-bold">{property.roadSize || '18-24 Meter'}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200 p-3.5 font-medium">
                  <div className="flex justify-between sm:pr-4 py-1">
                    <span className="text-neutral-500">Title &amp; Ownership:</span>
                    <span className="text-black font-bold">100% Freehold Registry</span>
                  </div>
                  <div className="flex justify-between sm:pl-4 py-1">
                    <span className="text-neutral-500">Legal Clearance:</span>
                    <span className="text-black font-bold text-emerald-700">7-Point Due Diligence Passed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Infrastructure & Amenities List */}
            {property.features && property.features.length > 0 && (
              <div className="bg-white border border-neutral-200 rounded-3xl p-6 sm:p-8 space-y-5">
                <h2 className="text-xl font-bold text-black tracking-tight flex items-center gap-2">
                  <Award className="w-5 h-5 text-black" /> Amenities &amp; Key Features
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {property.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-neutral-50 border border-neutral-200/80 p-3.5 rounded-2xl">
                      <div className="w-8 h-8 rounded-xl bg-black text-white flex items-center justify-center shrink-0">
                        {getAmenityIcon(feat)}
                      </div>
                      <span className="font-semibold text-neutral-900 text-sm">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Similar Listings Section */}
            {similarListings.length > 0 && (
              <div className="bg-white border border-neutral-200 rounded-3xl p-6 sm:p-8 space-y-6">
                <h3 className="text-xl font-bold text-black tracking-tight flex items-center gap-2">
                  <Star className="w-5 h-5 text-black" /> Similar Properties You May Like
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {similarListings.map((simItem) => (
                    <Link
                      key={simItem.id}
                      href={`/property/${simItem.id}`}
                      className="group border border-neutral-200 rounded-2xl p-3.5 flex gap-4 items-center hover:border-black transition-all duration-300"
                    >
                      <div className="relative w-28 h-22 rounded-xl overflow-hidden bg-neutral-100 shrink-0">
                        <Image
                          src={simItem.image}
                          alt={simItem.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="overflow-hidden space-y-1">
                        <h4 className="text-sm font-bold text-black group-hover:text-neutral-700 transition-colors truncate">{simItem.title}</h4>
                        <p className="text-xs text-neutral-500 truncate">{simItem.location} • {simItem.size}</p>
                        <p className="text-sm font-extrabold text-black">{simItem.price}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Related Blog Guides */}
            <RelatedBlogsForProperty property={property} title="Related Verification & Buyer Guides" />

          </div>

          {/* Right Column — Sticky Action Panel */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-28 space-y-6">

              {/* Contact Card */}
              <div className="bg-white border border-neutral-200 rounded-3xl p-6 space-y-6 font-outfit">
                <div>
                  <span className="text-neutral-500 text-xs font-bold uppercase tracking-wider block">Asking Price Guide</span>
                  <div className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight mt-1">{property.price}</div>
                  <div className="text-xs text-neutral-500 font-semibold mt-1">{property.pricePerSqYd || property.priceSub || 'Registry Inclusive'}</div>
                </div>

                <hr className="border-neutral-100" />

                {/* Inquiry Form */}
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-black uppercase tracking-wider flex items-center gap-2">
                    <Phone className="w-4 h-4 text-black" /> Schedule Site Visit / Inquiry
                  </h4>
                  <p className="text-xs text-neutral-500 leading-relaxed">Fill out details to receive exact site location map &amp; title document checklist.</p>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const form = e.target;
                      const name = form.name.value;
                      const phone = form.phone.value;
                      const msg = form.message.value;
                      const text = `Hi Nakul Properties, I am interested in ${property.title} (${property.location}, ${property.price}). My Name: ${name}, Phone: ${phone}. Note: ${msg}`;
                      window.open(`https://wa.me/919811548267?text=${encodeURIComponent(text)}`, '_blank');
                    }}
                    className="space-y-3"
                  >
                    <div>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your Full Name"
                        className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-xs text-black focus:outline-none focus:border-black transition-colors font-medium"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="Phone Number"
                        className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-xs text-black focus:outline-none focus:border-black transition-colors font-medium"
                      />
                    </div>
                    <div>
                      <textarea
                        name="message"
                        rows={2}
                        placeholder="Any specific requirement? (Optional)"
                        className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-xs text-black focus:outline-none focus:border-black transition-colors resize-none font-medium"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3.5 px-4 rounded-xl transition-all active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <FaWhatsapp className="w-4.5 h-4.5" />
                      <span>WhatsApp Agent Now</span>
                    </button>
                  </form>

                  <div>
                    <a
                      href="tel:+919811548267"
                      className="w-full flex items-center justify-center gap-2 bg-black hover:bg-neutral-800 text-white font-bold text-xs py-3.5 px-4 rounded-xl transition-all active:scale-98 cursor-pointer"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call Direct (+91 9811548267)</span>
                    </a>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="bg-neutral-50 border border-neutral-200/80 rounded-2xl p-4 text-xs text-neutral-700 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-black">
                    <ShieldCheck className="w-4 h-4 text-black shrink-0" />
                    <span>Nakul Properties Guarantee</span>
                  </div>
                  <p className="text-neutral-500 text-[11px] leading-relaxed">
                    100% verified single owner freehold registry titles with 0 litigation assurance.
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
