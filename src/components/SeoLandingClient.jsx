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
                                className="bg-white border border-neutral-200 rounded-xl p-4 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between"
                            >
                                <div>
                                    {/* Property Image */}
                                    <Link href={`/property/${dynamicId}`} className="relative w-full h-44 rounded-md overflow-hidden mb-4 bg-neutral-100 block">
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
                                    <Link href={`/property/${dynamicId}`}>
                                        <h3 className="text-base font-bold text-black mb-1.5 leading-snug group-hover:text-neutral-700 transition-colors">
                                            {property.title}
                                        </h3>
                                    </Link>

                                    {/* Location */}
                                    <div className="flex items-center gap-1 text-neutral-500 text-xs font-medium mb-3">
                                        <MapPin className="w-3.5 h-3.5 text-black shrink-0" />
                                        <span className="truncate">{property.location}</span>
                                    </div>

                                    {/* Specs Grid */}
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

                                {/* Price & CTAs */}
                                <div>
                                    <div className="pt-2 pb-3 border-t border-neutral-100 flex items-baseline justify-between mb-3">
                                        <div>
                                            <div className="text-xl font-bold text-black tracking-tight">{property.price}</div>
                                            <div className="text-[11px] text-neutral-500 font-medium">{property.priceSub || property.pricePerSqYd}</div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <Link
                                            href={`/property/${dynamicId}`}
                                            className="w-full flex items-center justify-center gap-1.5 bg-black hover:bg-neutral-800 text-white font-semibold text-xs py-2 rounded-md transition-all active:scale-95 shadow-xs"
                                        >
                                            <Eye className="w-3.5 h-3.5" />
                                            <span>View Details</span>
                                        </Link>
                                        <div className="grid grid-cols-2 gap-2">
                                            <a
                                                href={`https://wa.me/919811548267?text=Hi%20Nakul%20Properties,%20I%20am%20interested%20in%20${encodeURIComponent(property.title)}%20listed%20on%20${encodeURIComponent(data.keywordTitle)}`}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center justify-center gap-1 text-black border border-neutral-300 hover:bg-neutral-50 font-semibold text-[10px] sm:text-xs py-1.5 rounded-md transition-all active:scale-95"
                                            >
                                                <FaWhatsapp className="w-3.5 h-3.5" />
                                                <span>WhatsApp</span>
                                            </a>
                                            <a
                                                href="tel:+919811548267"
                                                className="flex items-center justify-center gap-1 border border-neutral-300 hover:bg-neutral-50 text-black font-semibold text-[10px] sm:text-xs py-1.5 rounded-md transition-all active:scale-95"
                                            >
                                                <Phone className="w-3.5 h-3.5" />
                                                <span>Call Agent</span>
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
