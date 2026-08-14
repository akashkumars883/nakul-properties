'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  MapPin, ShieldCheck, Phone, ChevronRight, Home,
  Ruler, Compass, Road, Info, Check, Eye, Map, BookOpen, Star,
  Zap, Car, ShieldAlert, Sparkles, Droplet, Landmark, Store, Train, ArrowUpDown, Trees
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { urlFor } from '@/sanity/lib/image';

export default function PropertyDetailsClient({ property }) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const getImageUrl = (image) => {
    if (!image) return '/placeholder.png';
    if (typeof image === 'string') return image;
    try {
      return urlFor(image).url();
    } catch (e) {
      return '/placeholder.png';
    }
  };

  // Helper to map amenity strings to custom visual icons
  const getAmenityIcon = (feature) => {
    const text = feature.toLowerCase();
    if (text.includes('lift') || text.includes('elevator')) return <ArrowUpDown className="w-3.5 h-3.5" />;
    if (text.includes('kitchen')) return <Sparkles className="w-3.5 h-3.5" />;
    if (text.includes('parking') || text.includes('car')) return <Car className="w-3.5 h-3.5" />;
    if (text.includes('security') || text.includes('cctv') || text.includes('gate')) return <ShieldAlert className="w-3.5 h-3.5" />;
    if (text.includes('wiring') || text.includes('electricity') || text.includes('power') || text.includes('backup')) return <Zap className="w-3.5 h-3.5" />;
    if (text.includes('water') || text.includes('tap') || text.includes('supply') || text.includes('plumbing')) return <Droplet className="w-3.5 h-3.5" />;
    if (text.includes('bank') || text.includes('loan')) return <Landmark className="w-3.5 h-3.5" />;
    if (text.includes('market') || text.includes('shop') || text.includes('street') || text.includes('retail')) return <Store className="w-3.5 h-3.5" />;
    if (text.includes('metro')) return <Train className="w-3.5 h-3.5" />;
    if (text.includes('road') || text.includes('highway') || text.includes('paved')) return <Road className="w-3.5 h-3.5" />;
    if (text.includes('neighborhood') || text.includes('quiet') || text.includes('park') || text.includes('green')) return <Trees className="w-3.5 h-3.5" />;
    return <Check className="w-3.5 h-3.5" />;
  };

  // Fallback in case gallery is missing
  const images = (property.gallery && property.gallery.length > 0) ? property.gallery : [property.image];

  // Mock similar properties based on category
  const similarListings = [
    {
      id: 'huda-plot-sec14-250',
      title: 'HUDA Approved Sector 14 Residential Plot',
      location: 'Sector 14, Faridabad',
      size: '250 Sq. Yds',
      price: '₹1.85 Cr',
      image: '/plot1.png'
    },
    {
      id: 'huda-plot-sec15-300',
      title: 'HSVP Corner Residential Plot Sector 15',
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
  ].filter(item => item.id !== property.id).slice(0, 2); // Exclude current property

  return (
    <main className="min-h-screen bg-white pb-16">
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
          <nav className="flex items-center gap-1.5 text-white/70 text-xs font-medium mb-3" aria-label="Breadcrumb">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 font-outfit">
        {/* Detail Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left Area (Images and description) */}
          <div className="lg:col-span-8 space-y-8">

            {/* Image Gallery Container */}
            <div className="space-y-3">
              {/* Active Image Box */}
              <div className="relative w-full h-[260px] sm:h-[420px] rounded-md overflow-hidden bg-neutral-100">
                <img
                  src={getImageUrl(images[activeImageIdx])}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3.5 left-3.5">
                  <span className="bg-black text-white text-xs font-semibold px-3 py-1.5 rounded-md uppercase tracking-wider">
                    {property.badge}
                  </span>
                </div>
                {property.verified && (
                  <div className="absolute top-3.5 right-3.5">
                    <span className="bg-white/95 text-black text-xs font-semibold px-3 py-1 rounded-md flex items-center gap-1 shadow-sm border border-neutral-200">
                      <ShieldCheck className="w-4 h-4 text-black" /> Verified Listing
                    </span>
                  </div>
                )}
              </div>

              {/* Thumbnails Row */}
              {images.length > 1 && (
                <div className="flex gap-2.5 overflow-x-auto pb-1">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImageIdx(idx)}
                      className={`relative w-20 h-16 rounded-md overflow-hidden shrink-0 border-2 transition-all ${activeImageIdx === idx ? 'border-black scale-95' : 'border-transparent hover:border-neutral-300'
                        }`}
                    >
                      <img
                        src={getImageUrl(img)}
                        alt="Property view"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Description & Overview */}
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl sm:text-4xl font-bold text-black tracking-tight mb-2.5 leading-tight">
                  {property.title}
                </h1>
                <div className="flex items-center gap-1.5 text-neutral-600 text-sm">
                  <MapPin className="w-4 h-4 text-black shrink-0" />
                  <span>{property.location}</span>
                </div>
              </div>

              {/* Highlight Badges */}
              <div className="flex flex-wrap gap-2 text-xs font-semibold">
                <span className="bg-neutral-100 border border-neutral-200 text-neutral-800 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-black" /> HUDA / HSVP Approved
                </span>
                <span className="bg-neutral-100 border border-neutral-200 text-neutral-800 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-black" /> Freehold Registry Title
                </span>
                <span className="bg-neutral-100 border border-neutral-200 text-neutral-800 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-black" /> 100% Verified Legal Documents
                </span>
                <span className="bg-neutral-100 border border-neutral-200 text-neutral-800 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-black" /> Immediate Possession Ready
                </span>
              </div>

              <hr className="border-neutral-100" />

              {/* Detailed specs quick indicators — 4-Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-neutral-50 border border-neutral-200/80 rounded-xl p-3.5 space-y-1">
                  <div className="text-neutral-500 text-xs font-semibold flex items-center gap-1.5">
                    <Ruler className="w-3.5 h-3.5 text-black" /> Plot Area
                  </div>
                  <div className="text-black font-bold text-base sm:text-lg">{property.size}</div>
                  <div className="text-[11px] text-neutral-500">Freehold Plot</div>
                </div>

                <div className="bg-neutral-50 border border-neutral-200/80 rounded-xl p-3.5 space-y-1">
                  <div className="text-neutral-500 text-xs font-semibold flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5 text-black" /> Dimensions
                  </div>
                  <div className="text-black font-bold text-base sm:text-lg truncate">{property.dimensions || 'Standard Plot'}</div>
                  <div className="text-[11px] text-neutral-500">Length × Width</div>
                </div>

                <div className="bg-neutral-50 border border-neutral-200/80 rounded-xl p-3.5 space-y-1">
                  <div className="text-neutral-500 text-xs font-semibold flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-black" /> Facing / Orientation
                  </div>
                  <div className="text-black font-bold text-base sm:text-lg">{property.facing || 'East / North-East'}</div>
                  <div className="text-[11px] text-neutral-500">Vastu Compliant</div>
                </div>

                <div className="bg-neutral-50 border border-neutral-200/80 rounded-xl p-3.5 space-y-1">
                  <div className="text-neutral-500 text-xs font-semibold flex items-center gap-1.5">
                    <Road className="w-3.5 h-3.5 text-black" /> Front Road Width
                  </div>
                  <div className="text-black font-bold text-base sm:text-lg">{property.roadSize || '12-18 Meter'}</div>
                  <div className="text-[11px] text-neutral-500">Wide Sector Road</div>
                </div>
              </div>

              {/* Long description text */}
              <div className="space-y-3.5 pt-2">
                <h2 className="text-xl font-bold text-black">Property Overview &amp; Description</h2>
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-light">
                  {property.longDescription || 'This prime freehold residential sector plot is located in an established locality of Faridabad. Features 100% verified legal papers, clear single owner registry, wide front roads, and ready for immediate registry and physical possession.'}
                </p>
              </div>

              {/* Legal Checklist & Approvals */}
              <div className="space-y-3.5 pt-2">
                <h3 className="text-xl font-bold text-black flex items-center gap-2">
                  <ShieldCheck className="w-5.5 h-5.5 text-black" /> Legal Approvals &amp; Compliance Verification
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-neutral-700">
                  <div className="flex items-center gap-2 bg-neutral-50 border border-neutral-200/80 p-3 rounded-lg">
                    <Check className="w-4 h-4 text-black shrink-0" />
                    <span>HSVP / HUDA Approved Sector Layout</span>
                  </div>
                  <div className="flex items-center gap-2 bg-neutral-50 border border-neutral-200/80 p-3 rounded-lg">
                    <Check className="w-4 h-4 text-black shrink-0" />
                    <span>Freehold Registry Title (Single Owner)</span>
                  </div>
                  <div className="flex items-center gap-2 bg-neutral-50 border border-neutral-200/80 p-3 rounded-lg">
                    <Check className="w-4 h-4 text-black shrink-0" />
                    <span>100% Legal Title Clearance &amp; Zero Dispute</span>
                  </div>
                  <div className="flex items-center gap-2 bg-neutral-50 border border-neutral-200/80 p-3 rounded-lg">
                    <Check className="w-4 h-4 text-black shrink-0" />
                    <span>Immediate Physical Possession Ready</span>
                  </div>
                  <div className="flex items-center gap-2 bg-neutral-50 border border-neutral-200/80 p-3 rounded-lg">
                    <Check className="w-4 h-4 text-black shrink-0" />
                    <span>Full Stamp Duty &amp; Registry Assistance</span>
                  </div>
                  <div className="flex items-center gap-2 bg-neutral-50 border border-neutral-200/80 p-3 rounded-lg">
                    <Check className="w-4 h-4 text-black shrink-0" />
                    <span>Direct Site Visit Available</span>
                  </div>
                </div>
              </div>

              {/* Nearby Landmarks & Distances */}
              <div className="space-y-3.5 pt-2">
                <h3 className="text-xl font-bold text-black flex items-center gap-2">
                  <Map className="w-5.5 h-5.5 text-black" /> Location Advantages &amp; Proximity
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-neutral-700">
                  <div className="flex items-center gap-2.5 bg-neutral-50 border border-neutral-200/80 p-3 rounded-lg">
                    <Train className="w-4 h-4 text-black shrink-0" />
                    <span>Nearest Metro Station: 5 mins drive</span>
                  </div>
                  <div className="flex items-center gap-2.5 bg-neutral-50 border border-neutral-200/80 p-3 rounded-lg">
                    <Road className="w-4 h-4 text-black shrink-0" />
                    <span>Delhi-Mathura Highway Link: 8 mins drive</span>
                  </div>
                  <div className="flex items-center gap-2.5 bg-neutral-50 border border-neutral-200/80 p-3 rounded-lg">
                    <Store className="w-4 h-4 text-black shrink-0" />
                    <span>Local Sector HUDA Market: Walk-in Distance</span>
                  </div>
                  <div className="flex items-center gap-2.5 bg-neutral-50 border border-neutral-200/80 p-3 rounded-lg">
                    <Landmark className="w-4 h-4 text-black shrink-0" />
                    <span>Convent School &amp; Hospital: 10 mins Proximity</span>
                  </div>
                </div>
              </div>

              {/* Features checklist */}
              {property.features && property.features.length > 0 && (
                <div className="space-y-4 pt-2">
                  <h3 className="text-xl font-bold text-black">Infrastructure &amp; Amenities</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-sm text-neutral-700">
                    {property.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2.5">
                        <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center shrink-0 shadow-sm">
                          {getAmenityIcon(feat)}
                        </div>
                        <span className="font-medium text-neutral-800 text-sm sm:text-base">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Similar Listings Section */}
            {similarListings.length > 0 && (
              <div className="pt-8 border-t border-neutral-100 space-y-6">
                <h3 className="text-xl font-bold text-black flex items-center gap-2">
                  <Star className="w-5.5 h-5.5 text-black" /> Similar Properties
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {similarListings.map((simItem) => (
                    <Link
                      key={simItem.id}
                      href={`/property/${simItem.id}`}
                      className="group border border-neutral-200 rounded-md p-3 flex gap-4 items-center transition-all duration-300"
                    >
                      <div className="relative w-24 h-20 rounded-md overflow-hidden bg-neutral-100 shrink-0">
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
                        <p className="text-sm font-bold text-black">{simItem.price}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Popular Searches Keyword Links Section */}
            <div className="pt-8 border-t border-neutral-100 space-y-4">
              <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-widest flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-neutral-500" /> Popular Searches in Faridabad
              </h4>
              <div className="flex flex-wrap gap-x-3.5 gap-y-2 text-xs font-semibold text-neutral-700">
                <Link href="/deals/best-property-dealer-faridabad" className="hover:text-black transition-colors underline underline-offset-2">Best Property Dealer Faridabad</Link>
                <span className="text-neutral-300">•</span>
                <Link href="/deals/huda-plots-for-sale-faridabad" className="hover:text-black transition-colors underline underline-offset-2">HUDA Plots for Sale Faridabad</Link>
                <span className="text-neutral-300">•</span>
                <Link href="/deals/luxury-builder-floors-faridabad" className="hover:text-black transition-colors underline underline-offset-2">Luxury Builder Floors Faridabad</Link>
                <span className="text-neutral-300">•</span>
                <Link href="/deals/plots-for-sale-greater-faridabad" className="hover:text-black transition-colors underline underline-offset-2">Plots Greater Faridabad</Link>
              </div>
            </div>

          </div>

          {/* Right Area — Sticky Interactive Inquiry Form */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-[120px] z-30 space-y-6">

              {/* Price & Sticky Inquiry Form Box */}
              <div className="bg-white border border-neutral-200/90 rounded-2xl p-6 shadow-xl space-y-5 font-outfit">
                <div>
                  <span className="text-neutral-500 text-[11px] uppercase tracking-wider block font-bold">Total Price Guide</span>
                  <div className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight mt-1">{property.price}</div>
                  <div className="text-xs text-neutral-500 font-semibold mt-1">{property.pricePerSqYd || property.priceSub || 'registry inclusive'}</div>
                </div>

                <hr className="border-neutral-100" />

                {/* Inquiry Form */}
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-black uppercase tracking-wider flex items-center gap-1.5">
                    <Phone className="w-4 h-4 text-black" /> Quick Plot Inquiry
                  </h4>
                  <p className="text-xs text-neutral-500">Fill your details to get exact location &amp; plot details directly.</p>

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
                        className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-2.5 text-xs text-black focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="Phone Number"
                        className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-2.5 text-xs text-black focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                    <div>
                      <textarea
                        name="message"
                        rows={2}
                        placeholder="Any specific requirement? (Optional)"
                        className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-2.5 text-xs text-black focus:outline-none focus:border-black transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-black hover:bg-neutral-800 text-white font-bold text-xs py-3 px-4 rounded-xl transition-all shadow-md active:scale-98 flex items-center justify-center gap-2"
                    >
                      <FaWhatsapp className="w-4 h-4" />
                      <span>Send Inquiry on WhatsApp</span>
                    </button>
                  </form>

                  <div className="pt-2">
                    <a
                      href="tel:+919811548267"
                      className="w-full flex items-center justify-center gap-2 border border-neutral-300 hover:bg-neutral-50 text-black font-bold text-xs py-2.5 px-4 rounded-xl transition-all active:scale-98"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Agent Direct (+91 9811548267)</span>
                    </a>
                  </div>
                </div>

                {/* Verification Info */}
                <div className="flex items-start gap-3 bg-neutral-50 border border-neutral-200/80 rounded-xl p-3.5 text-xs text-neutral-700">
                  <ShieldCheck className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-black">Verified Plot Title</p>
                    <p className="text-neutral-500 text-[11px] mt-0.5 leading-relaxed">Verified by Nakul Properties for document titles &amp; site visit inspection.</p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
