'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ShieldCheck, Phone, ArrowLeft, ChevronRight, Home, BadgeCheck, Eye } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { urlFor } from '@/sanity/lib/image';

export default function SeoLandingClient({ data }) {
    const getImageUrl = (image) => {
        if (!image) return '/placeholder.png';
        if (typeof image === 'string') return image;
        try {
            return urlFor(image).url();
        } catch (e) {
            return '/placeholder.png';
        }
    };

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Banner with Target Keyword */}
            <section className="relative w-full overflow-hidden" style={{ paddingTop: '104px', minHeight: '340px' }}>
                <div className="absolute inset-0">
                    <Image
                         src={data.heroImage || '/hero-banner.png'}
                         alt={data.keywordTitle}
                         fill
                         className="object-cover"
                         priority
                         sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/85" />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 flex flex-col justify-end px-4 sm:px-6 pb-10 pt-8 max-w-7xl mx-auto min-h-[236px] sm:min-h-[260px]">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-1.5 text-white/70 text-xs font-medium mb-3" aria-label="Breadcrumb">
                        <Link href="/" className="flex items-center gap-1 hover:text-white transition-colors">
                            <Home className="w-3.5 h-3.5" />
                            <span>Home</span>
                        </Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-white/80">Deals</span>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-white truncate max-w-[150px] sm:max-w-xs">{data.keywordTitle}</span>
                    </nav>

                    <span className="inline-flex items-center gap-1 bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-md mb-2 w-max uppercase tracking-wider">
                        <BadgeCheck className="w-3.5 h-3.5 shrink-0" /> Premium Deal Location
                    </span>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight max-w-4xl">
                        {data.keywordTitle}
                    </h1>
                </div>
            </section>

            {/* Main Content & Properties */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 font-outfit">
                {/* SEO Text Block */}
                <div className="bg-neutral-50 border border-neutral-200/80 rounded-2xl p-6 sm:p-8 mb-10">
                    <h2 className="text-xl sm:text-2xl font-bold text-black mb-3">Overview</h2>
                    <div className="text-neutral-600 text-sm sm:text-base leading-relaxed space-y-4">
                        <p>{data.longDescription}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                            {data.benefits.map((benefit, i) => (
                                <div key={i} className="flex items-start gap-2">
                                    <ShieldCheck className="w-4 h-4 text-black shrink-0 mt-0.5" />
                                    <span className="text-xs sm:text-sm text-neutral-700 font-medium">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Results Banner */}
                <div className="flex items-center justify-between mb-6">
                    <span className="text-sm font-semibold text-neutral-500">
                        Available Listings: <span className="text-black">{data.properties.length} Properties</span>
                    </span>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-black hover:underline"
                    >
                        <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
                    </Link>
                </div>

                {/* Properties Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {data.properties.map((property) => {
                        const dynamicId = property.slug?.current || property._id || property.id;
                        return (
                            <article
                                key={dynamicId}
                                className="bg-white border border-neutral-200 rounded-xl overflow-hidden transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between"
                            >
                                <div>
                                    {/* Top Image — Full Bleed Header */}
                                    <Link href={`/property/${dynamicId}`} className="relative w-full h-44 overflow-hidden bg-neutral-100 block">
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

                                        <Link href={`/property/${dynamicId}`}>
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
                                                href={`/property/${dynamicId}`}
                                                className="flex items-center gap-1 bg-black hover:bg-neutral-800 text-white font-semibold text-xs px-3 py-2 rounded-lg transition-all active:scale-95 shadow-xs"
                                            >
                                                <Eye className="w-3.5 h-3.5" />
                                                <span>Details</span>
                                            </Link>
                                            <a
                                                href={`https://wa.me/919811548267?text=Hi%20Nakul%20Properties,%20I%20am%20interested%20in%20${encodeURIComponent(property.title)}%20listed%20on%20${encodeURIComponent(data.keywordTitle)}`}
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
                        );
                    })}
                </div>
            </div>
        </main>
    );
}
