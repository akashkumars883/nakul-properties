'use client';

import { MapPin, ShieldCheck, Phone, Eye } from "lucide-react";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';

export default function FeaturedProperties({ properties = [] }) {
    const [activeFilter, setActiveFilter] = useState('all');

    const getImageUrl = (image) => {
        if (!image) return '/placeholder.png';
        try {
            return urlFor(image).url();
        } catch (e) {
            return '/placeholder.png';
        }
    };

    const matchesCategory = (item, filterKey) => {
        if (filterKey === 'all') return true;
        const cat = item.category;
        const titleLower = item.title?.toLowerCase() || '';
        if (filterKey === 'bptp') return cat === 'bptp' || cat === 'gated' || titleLower.includes('bptp');
        if (filterKey === 'plots') return cat === 'plots' || cat === 'huda' || cat === 'budget' || titleLower.includes('plot');
        if (filterKey === 'flats') return cat === 'flats' || titleLower.includes('flat') || titleLower.includes('apartment');
        if (filterKey === 'floor') return cat === 'floor' || titleLower.includes('floor');
        if (filterKey === 'villas') return cat === 'villas' || titleLower.includes('villa');
        if (filterKey === 'commercial') return cat === 'commercial' || titleLower.includes('shop') || titleLower.includes('sco');
        if (filterKey === 'industrial') return cat === 'industrial' || titleLower.includes('industrial');
        return cat === filterKey;
    };

    // Filter featured properties only. Fallback to all properties if none are marked as featured.
    const featuredProperties = properties.filter(item => item.featured === true);
    const displayProperties = featuredProperties.length > 0 ? featuredProperties : properties;

    const filteredProperties = displayProperties
        .filter(item => matchesCategory(item, activeFilter))
        .slice(0, 4);

    return (
        <section id="properties" className="scroll-mt-32 font-outfit" aria-labelledby="featured-heading">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-10">
                <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-2 block">Featured Listings</span>
                <h2 id="featured-heading" className="text-3xl sm:text-4xl font-semibold text-black mb-3 tracking-tight">Verified Properties for Sale &amp; Rent</h2>
                <p className="text-neutral-600 text-base leading-relaxed">Direct verified options for BPTP townships, residential plots, builder floors, flats, villas, commercial &amp; industrial properties in Faridabad.</p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
                {[
                    { key: 'all', label: 'All Properties' },
                    { key: 'bptp', label: 'BPTP Townships' },
                    { key: 'plots', label: 'Residential Plots' },
                    { key: 'floor', label: 'Builder Floors' },
                    { key: 'flats', label: 'Flats & Apartments' },
                    { key: 'commercial', label: 'Commercial SCO' },
                    { key: 'industrial', label: 'Industrial Units' },
                ].map((tab) => (
                    <button
                        key={tab.key}
                        type="button"
                        onClick={() => setActiveFilter(tab.key)}
                        className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-md transition-all border ${activeFilter === tab.key ? 'bg-black text-white border-black' : 'bg-white text-black border-neutral-200 hover:bg-neutral-100'}`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Plots Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredProperties.map((property) => {
                    const propertyId = property.slug?.current || property._id;
                    return (
                    <article
                        key={propertyId}
                        className="bg-white border border-neutral-200 rounded-xl overflow-hidden transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between"
                    >
                        <div>
                            {/* Top Image — Full Bleed Header */}
                            <Link href={`/property/${propertyId}`} className="relative w-full h-44 overflow-hidden bg-neutral-100 block">
                                <img
                                    src={getImageUrl(property.image)}
                                    alt={property.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                                <div className="absolute top-3 left-3">
                                    <span className="bg-black/80 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                                        {property.badge || 'Verified'}
                                    </span>
                                </div>
                                {property.verified && (
                                    <div className="absolute top-3 right-3">
                                        <span className="bg-white/95 text-black text-[10px] font-bold px-2 py-0.5 rounded-md border border-neutral-200 shadow-xs flex items-center gap-1">
                                            <ShieldCheck className="w-3 h-3 text-black" /> Verified
                                        </span>
                                    </div>
                                )}
                            </Link>

                            {/* Card Content Body */}
                            <div className="p-4">
                                <div className="flex items-center gap-1 text-neutral-500 font-semibold text-[11px] tracking-wider uppercase mb-1">
                                    <MapPin className="w-3 h-3 text-black shrink-0" />
                                    <span className="truncate">{property.location}</span>
                                </div>

                                <Link href={`/property/${propertyId}`}>
                                    <h3 className="text-base font-bold text-black mb-3 group-hover:text-neutral-600 transition-colors leading-snug line-clamp-1">
                                        {property.title}
                                    </h3>
                                </Link>

                                {/* Specs Grid */}
                                <div className="grid grid-cols-2 gap-2 text-xs bg-neutral-50 p-2.5 rounded-md border border-neutral-200/80 mb-2">
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
                            </div>
                        </div>

                        {/* Card Footer Price & Action Bar */}
                        <div className="p-4 pt-0">
                            <div className="pt-3 border-t border-neutral-100 flex items-center justify-between gap-2">
                                <div className="min-w-0">
                                    <span className="text-[10px] text-neutral-400 block font-medium uppercase tracking-wider">Price Guide</span>
                                    <span className="text-sm font-bold text-black truncate block">{property.price}</span>
                                </div>

                                <div className="flex items-center gap-1.5 shrink-0">
                                    <Link
                                        href={`/property/${propertyId}`}
                                        className="flex items-center gap-1 bg-black hover:bg-neutral-800 text-white font-semibold text-xs px-3 py-2 rounded-lg transition-all active:scale-95 shadow-xs"
                                    >
                                        <Eye className="w-3.5 h-3.5" />
                                        <span>Details</span>
                                    </Link>
                                    <a
                                        href={`https://wa.me/919811548267?text=Hi%20Nakul%20Properties,%20I%20am%20interested%20in%20${encodeURIComponent(property.title)}%20(${encodeURIComponent(property.location)})`}
                                        target="_blank"
                                        rel="noreferrer"
                                        title="WhatsApp Agent"
                                        className="w-8 h-8 flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-lg transition-all active:scale-95"
                                    >
                                        <FaWhatsapp className="w-4 h-4" />
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
