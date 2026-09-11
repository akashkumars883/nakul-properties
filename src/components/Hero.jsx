'use client';

import React, { useState, useEffect } from 'react';


export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: '/hero-banner.png',
      alt: 'Nakul Properties Faridabad — Best Real Estate Agent & Verified Plots Dealer in Sector 65, 64, 63, 62, 2',
      heading: (
        <>
          Leading Real Estate Dealer &amp; Property Consultant in <span className="font-semibold text-white">Faridabad</span>
        </>
      ),
      paragraph: 'Nakul Properties specializes in BPTP townships, freehold residential sector plots, 3/4 BHK luxury flats, independent builder floors, commercial SCOs & industrial properties across Sectors 2, 62, 63, 64, 65 & 69 Faridabad.'
    },
    {
      id: 2,
      image: '/hero-banner2.png',
      alt: 'Verified Freehold Residential Plots & 3/4 BHK Luxury Flats in Sector 69, 65, 64 Faridabad',
      heading: (
        <>
          Verified Plots, 3/4 BHK Luxury Flats &amp; Commercials in <span className="font-semibold text-white">Sectors 69, 65, 64 &amp; 62</span>
        </>
      ),
      paragraph: 'Explore 100 Gaj to 500 Gaj freehold sector plots, 3 BHK & 4 BHK luxury apartments in Sector 69 & Sector 65 with 100% clear legal titles, bank loan approvals, and zero litigation assurance.'
    }
  ];


  // Auto slide timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);





  return (
    <section className="relative min-h-[80vh] sm:min-h-[85vh] flex flex-col justify-between pt-24 sm:pt-28 pb-8 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      {/* Background Image Carousel with Smooth Transitions */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            loading={index === 0 ? 'eager' : 'lazy'}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/30 z-0" />
        </div>
      ))}



      {/* Hero Title & SEO Paragraph Slider Content */}
      <div className="relative z-10 flex-1 flex flex-col items-start sm:items-center justify-center max-w-5xl w-full mx-auto text-white pt-4 pb-16 sm:pb-28 mb-16 sm:mb-32 min-h-[180px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`transition-all duration-700 ease-in-out flex flex-col items-start sm:items-center ${index === currentSlide
              ? 'opacity-100 translate-y-0 relative'
              : 'opacity-0 translate-y-4 absolute pointer-events-none'
              }`}
          >
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-medium font-outfit text-start sm:text-center max-w-4xl leading-snug tracking-tight mb-3">
              {slide.heading}
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-neutral-200 text-start sm:text-center max-w-2xl font-outfit font-light leading-relaxed">
              {slide.paragraph}
            </p>
          </div>
        ))}
      </div>

      {/* Dot Indicators */}
      <div className="relative z-20 flex items-center justify-center gap-2 my-2 sm:my-3">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${index === currentSlide ? 'w-7 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
