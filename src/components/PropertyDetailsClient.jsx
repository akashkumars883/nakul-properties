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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

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

              <hr className="border-neutral-100" />

              {/* Detailed specs quick indicators */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="space-y-1">
                  <div className="text-neutral-500 text-xs font-semibold flex items-center gap-1">
                    <Ruler className="w-3.5 h-3.5 text-black" /> Plot Size
                  </div>
                  <div className="text-black font-semibold text-base sm:text-lg">{property.size}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-neutral-500 text-xs font-semibold flex items-center gap-1">
                    <Compass className="w-3.5 h-3.5 text-black" /> Facing
                  </div>
                  <div className="text-black font-semibold text-base sm:text-lg">{property.facing || 'N/A'}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-neutral-500 text-xs font-semibold flex items-center gap-1">
                    <Road className="w-3.5 h-3.5 text-black" /> Road Size
                  </div>
                  <div className="text-black font-semibold text-base sm:text-lg">{property.roadSize || 'N/A'}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-neutral-500 text-xs font-semibold flex items-center gap-1">
                    <Info className="w-3.5 h-3.5 text-black" /> Dimensions
                  </div>
                  <div className="text-black font-semibold text-base sm:text-lg truncate">{property.dimensions || 'N/A'}</div>
                </div>
              </div>

              {/* Long description text */}
              <div className="space-y-3.5">
                <h2 className="text-xl font-bold text-black">Property Details &amp; Description</h2>
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                  {property.longDescription || 'This premium property listing is located in a prime locality of Faridabad. Features close connectivity to metro stations, main highways, schools, and shopping markets. 100% verified legal clear titles with freehold registry guidelines ready for immediate registry and possession.'}
                </p>
              </div>

              {/* Legal Checklist & Approvals */}
              <div className="space-y-3.5 pt-2">
                <h3 className="text-xl font-bold text-black flex items-center gap-2">
                  <ShieldCheck className="w-5.5 h-5.5 text-black" /> Legal Approvals &amp; Compliance
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-neutral-700">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-neutral-900" />
                    <span>HSVP / HUDA Approved Layout</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-neutral-900" />
                    <span>Freehold Registry Title</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-neutral-900" />
                    <span>State Bank Approved Project</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-neutral-900" />
                    <span>No Legal Dispute - Clear History</span>
                  </div>
                </div>
              </div>

              {/* Nearby Landmarks & Distances */}
              <div className="space-y-3.5 pt-2">
                <h3 className="text-xl font-bold text-black flex items-center gap-2">
                  <Map className="w-5.5 h-5.5 text-black" /> Location Highlights &amp; Distance
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-neutral-700">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-black shrink-0" />
                    <span>Nearest Metro Station: 5 mins drive</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-black shrink-0" />
                    <span>Delhi-Mathura Highway Link: 8 mins drive</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-black shrink-0" />
                    <span>Local Sector HUDA Market: Walk-in Distance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-black shrink-0" />
                    <span>Convent School &amp; Hospital: 10 mins proximity</span>
                  </div>
                </div>
              </div>

              {/* Features checklist */}
              {property.features && property.features.length > 0 && (
                <div className="space-y-4 pt-2">
                  <h3 className="text-xl font-bold text-black">Amenities &amp; Features</h3>
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
                <a href="/deals/best-property-dealer-faridabad" className="hover:text-black transition-colors underline underline-offset-2">Best Property Dealer Faridabad</a>
                <span className="text-neutral-300">•</span>
                <a href="/deals/huda-plots-for-sale-faridabad" className="hover:text-black transition-colors underline underline-offset-2">HUDA Plots for Sale Faridabad</a>
                <span className="text-neutral-300">•</span>
                <a href="/deals/luxury-builder-floors-faridabad" className="hover:text-black transition-colors underline underline-offset-2">Luxury Builder Floors Faridabad</a>
                <span className="text-neutral-300">•</span>
                <a href="/deals/plots-for-sale-greater-faridabad" className="hover:text-black transition-colors underline underline-offset-2">Plots Greater Faridabad</a>
              </div>
            </div>

          </div>

          {/* Right Area (Pricing and Contact CTA card) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">

            {/* Price & Contact Box */}
            <div className="bg-white border border-neutral-200/90 rounded-md p-6 space-y-6">
              <div>
                <span className="text-neutral-500 text-xs uppercase tracking-wider block font-bold">Total Price Guide</span>
                <div className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight mt-1">{property.price}</div>
                <div className="text-xs text-neutral-500 font-semibold mt-1">{property.pricePerSqYd || property.priceSub || 'registry inclusive'}</div>
              </div>

              <hr className="border-neutral-100" />

              {/* Verification Info */}
              <div className="flex items-start gap-3 bg-neutral-50 border border-neutral-200/80 rounded-md p-4 text-xs text-neutral-700">
                <ShieldCheck className="w-5 h-5 text-black shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-black">Verified Ownership Title</p>
                  <p className="text-neutral-500 mt-1 leading-relaxed">This listing has been verified by Nakul Properties for document titles and road mapping approvals.</p>
                </div>
              </div>

              {/* Contact CTAs */}
              <div className="space-y-3 pt-2">
                <a
                  href={`https://wa.me/919811548267?text=Hi%20Nakul%20Properties,%20I%20am%20interested%20in%20the%20${encodeURIComponent(property.title)}%20at%20${encodeURIComponent(property.location)}.%20Please%20share%20details.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-black hover:bg-neutral-800 text-white font-bold py-3.5 px-4 rounded-md transition-all active:scale-98"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  <span>Inquire on WhatsApp</span>
                </a>
                <a
                  href="tel:+919811548267"
                  className="w-full flex items-center justify-center gap-2 border border-neutral-300 hover:bg-neutral-50 text-black font-bold py-3.5 px-4 rounded-md transition-all active:scale-98"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Property Agent</span>
                </a>
              </div>
            </div>

            {/* General Advice Banner */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-md p-6 text-white space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-400">Need Help?</h4>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Looking for alternative dimensions or have a specific budget requirement? Share your parameters and we will find the perfect property matches.
              </p>
              <Link
                href="/#contact"
                className="text-xs font-semibold text-[#D4AF37] hover:underline flex items-center gap-1"
              >
                Book a Site Visit <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}
