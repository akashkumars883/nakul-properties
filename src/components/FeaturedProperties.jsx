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

    const getFilterCategory = (category) => {
        if (category === 'budget') return 'gated';
        return category;
    };

    // Filter featured properties only. Fallback to all properties if none are marked as featured.
    const featuredProperties = properties.filter(item => item.featured === true);
    const displayProperties = featuredProperties.length > 0 ? featuredProperties : properties;

    const filteredProperties = (activeFilter === 'all' 
        ? displayProperties 
        : displayProperties.filter(item => getFilterCategory(item.category) === activeFilter)
    ).slice(0, 8);

    return (
        <section id="properties" className="scroll-mt-32" aria-labelledby="featured-heading">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-10">
                <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-2 block">Featured Plot Listings</span>
                <h2 id="featured-heading" className="text-3xl sm:text-4xl font-semibold text-black mb-3 tracking-tight">Verified Sector Plots for Sale</h2>
                <p className="text-neutral-600 text-base leading-relaxed">Direct options for HUDA approved sector plots across Sector 65, 64 &amp; 62 Faridabad.</p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
                {[
                    { key: 'all', label: 'All Plots' },
                    { key: 'huda', label: 'HUDA Sectors' },
                    { key: 'gated', label: 'Gated & Registry Plots' },
                    { key: 'commercial', label: 'Commercial Shops' },
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
                        className="bg-white border border-neutral-200 rounded-xl p-4 transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between"
                        itemScope
                        itemType="https://schema.org/Product"
                    >
                        <div>
                            {/* Property Image Container */}
                            <Link href={`/property/${propertyId}`} className="relative w-full h-44 rounded-md overflow-hidden mb-4 bg-neutral-100 block">
                                <img
                                    src={getImageUrl(property.image)}
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
                                            <ShieldCheck className="w-3.5 h-3.5 text-black" /> Verified
                                        </span>
                                    </div>
                                )}
                            </Link>

                            {/* Title */}
                            <Link href={`/property/${propertyId}`}>
                                <h3 className="text-base font-bold text-black mb-1.5 leading-snug group-hover:text-neutral-700 transition-colors" itemProp="name">
                                    {property.title}
                                </h3>
                            </Link>

                            {/* Location */}
                            <div className="flex items-center gap-1 text-neutral-500 text-xs font-medium mb-3">
                                <MapPin className="w-3.5 h-3.5 text-black shrink-0" />
                                <span className="truncate">{property.location}</span>
                            </div>

                            {/* Property Specifications Grid */}
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
                                    <div className="text-[11px] text-neutral-500 font-medium">{property.pricePerSqYd || property.priceSub}</div>
                                </div>
                            </div>

                            {/* CTAs */}
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
                )})}
            </div>
        </section>
    );
}
