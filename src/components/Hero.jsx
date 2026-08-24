'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Search, MapPin, Home as HomeIcon, IndianRupee, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();
  
  // Custom dropdown states
  const [propertyType, setPropertyType] = useState('all');
  const [location, setLocation] = useState('all');
  const [budget, setBudget] = useState('all');

  const [typeDropdownOpen, setTypeDropdownOpen] = useState(false);
  const [locDropdownOpen, setLocDropdownOpen] = useState(false);
  const [budgetDropdownOpen, setBudgetDropdownOpen] = useState(false);

  const [currentSlide, setCurrentSlide] = useState(0);

  const typeRef = useRef(null);
  const locRef = useRef(null);
  const budgetRef = useRef(null);

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

  // Dropdown mapping configurations
  const propertyTypesList = [
    { value: 'all', label: 'All Properties' },
    { value: 'bptp-townships', label: 'BPTP Townships' },
    { value: 'residential-plots', label: 'Residential Plots' },
    { value: 'flats', label: 'Flats & Apartments' },
    { value: 'builder-floors', label: 'Builder Floors' },
    { value: 'villas', label: 'Luxury Villas' },
    { value: 'commercial', label: 'Commercial Shops & SCO' },
    { value: 'industrial', label: 'Industrial Plots & Units' }
  ];

  const locationsList = [
    { value: 'all', label: 'All Faridabad' },
    { value: 'sector-2', label: 'Sector 2' },
    { value: 'sector-62', label: 'Sector 62' },
    { value: 'sector-63', label: 'Sector 63' },
    { value: 'sector-64', label: 'Sector 64' },
    { value: 'sector-65', label: 'Sector 65' },
    { value: 'sector-69', label: 'Sector 69' },
    { value: 'sector-14', label: 'Sector 14' },
    { value: 'sector-15', label: 'Sector 15' },
    { value: 'neharpar', label: 'Greater Faridabad (BPTP)' }
  ];

  const budgetsList = [
    { value: 'all', label: 'Any Budget' },
    { value: '50l-1cr', label: '₹50 Lac - ₹1 Cr' },
    { value: '1cr-2.5cr', label: '₹1 Cr - ₹2.5 Cr' },
    { value: '2.5cr-5cr', label: '₹2.5 Cr - ₹5 Cr' },
    { value: '5cr-plus', label: '₹5 Cr+' }
  ];

  // Close dropdowns on clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (typeRef.current && !typeRef.current.contains(event.target)) {
        setTypeDropdownOpen(false);
      }
      if (locRef.current && !locRef.current.contains(event.target)) {
        setLocDropdownOpen(false);
      }
      if (budgetRef.current && !budgetRef.current.contains(event.target)) {
        setBudgetDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Auto slide timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Submit search query directly to search page route
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    router.push(`/search?type=${propertyType}&location=${location}&budget=${budget}`);
  };

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
          <div className="absolute inset-0 bg-black/50 z-0" />
        </div>
      ))}

      {/* Slide Navigation Arrows */}
      <div className="absolute inset-x-2 sm:inset-x-6 top-1/3 -translate-y-1/2 z-20 flex justify-between pointer-events-none max-w-7xl mx-auto">
        <button
          type="button"
          onClick={prevSlide}
          className="pointer-events-auto w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-all border border-white/20 active:scale-95 shadow-md cursor-pointer"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className="pointer-events-auto w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-all border border-white/20 active:scale-95 shadow-md cursor-pointer"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Hero Title & SEO Paragraph Slider Content */}
      <div className="relative z-10 flex-1 flex flex-col items-start sm:items-center justify-center max-w-5xl w-full mx-auto text-white pt-4 pb-6 min-h-[180px]">
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

      {/* Quick Property Search Card */}
      <div className="relative z-30 max-w-7xl w-full mx-auto text-white flex justify-center">
        <div className="w-full max-w-5xl bg-white text-black rounded-2xl p-3.5 sm:p-5 font-outfit border border-neutral-200 relative z-30">
          <h2 className="text-base sm:text-lg font-bold text-black text-start sm:text-center mb-3.5 tracking-tight">
            Search Your Dream Property in Faridabad
          </h2>
          
          <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 items-center relative z-30">
            
            {/* 1. Custom Property Type Dropdown */}
            <div ref={typeRef} className="relative flex flex-col gap-1.5 bg-neutral-50 hover:bg-neutral-100/70 border border-neutral-200 rounded-xl p-3.5 text-left cursor-pointer transition-colors" onClick={() => setTypeDropdownOpen(!typeDropdownOpen)}>
              <span className="text-[11px] text-neutral-500 font-semibold uppercase tracking-wider flex items-center gap-1.5 pointer-events-none">
                <HomeIcon className="w-3.5 h-3.5 text-black" /> Property Type
              </span>
              <div className="flex items-center justify-between text-sm font-bold text-black pointer-events-none">
                <span>{propertyTypesList.find(t => t.value === propertyType)?.label}</span>
                <ChevronDown className={`w-4 h-4 text-black transition-transform duration-200 ${typeDropdownOpen ? 'rotate-180' : ''}`} />
              </div>
              
              {/* Dropdown Options list */}
              {typeDropdownOpen && (
                <div className="absolute top-[105%] left-0 w-full bg-white border border-neutral-200 rounded-xl shadow-xl py-2 z-50 animate-in fade-in duration-100">
                  {propertyTypesList.map((typeOption) => (
                    <div
                      key={typeOption.value}
                      onClick={() => setPropertyType(typeOption.value)}
                      className={`px-4 py-2.5 text-xs sm:text-sm font-semibold transition-colors hover:bg-neutral-100 ${propertyType === typeOption.value ? 'bg-neutral-50 text-black font-bold' : 'text-neutral-700'}`}
                    >
                      {typeOption.label}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 2. Custom Location Dropdown */}
            <div ref={locRef} className="relative flex flex-col gap-1.5 bg-neutral-50 hover:bg-neutral-100/70 border border-neutral-200 rounded-xl p-3.5 text-left cursor-pointer transition-colors" onClick={() => setLocDropdownOpen(!locDropdownOpen)}>
              <span className="text-[11px] text-neutral-500 font-semibold uppercase tracking-wider flex items-center gap-1.5 pointer-events-none">
                <MapPin className="w-3.5 h-3.5 text-black" /> Location
              </span>
              <div className="flex items-center justify-between text-sm font-bold text-black pointer-events-none">
                <span>{locationsList.find(l => l.value === location)?.label}</span>
                <ChevronDown className={`w-4 h-4 text-black transition-transform duration-200 ${locDropdownOpen ? 'rotate-180' : ''}`} />
              </div>

              {/* Dropdown Options list */}
              {locDropdownOpen && (
                <div className="absolute top-[105%] left-0 w-full bg-white border border-neutral-200 rounded-xl shadow-xl py-2 z-50 animate-in fade-in duration-100">
                  {locationsList.map((locOption) => (
                    <div
                      key={locOption.value}
                      onClick={() => setLocation(locOption.value)}
                      className={`px-4 py-2.5 text-xs sm:text-sm font-semibold transition-colors hover:bg-neutral-100 ${location === locOption.value ? 'bg-neutral-50 text-black font-bold' : 'text-neutral-700'}`}
                    >
                      {locOption.label}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 3. Custom Budget Dropdown */}
            <div ref={budgetRef} className="relative flex flex-col gap-1.5 bg-neutral-50 hover:bg-neutral-100/70 border border-neutral-200 rounded-xl p-3.5 text-left cursor-pointer transition-colors" onClick={() => setBudgetDropdownOpen(!budgetDropdownOpen)}>
              <span className="text-[11px] text-neutral-500 font-semibold uppercase tracking-wider flex items-center gap-1.5 pointer-events-none">
                <IndianRupee className="w-3.5 h-3.5 text-black" /> Budget
              </span>
              <div className="flex items-center justify-between text-sm font-bold text-black pointer-events-none">
                <span>{budgetsList.find(b => b.value === budget)?.label}</span>
                <ChevronDown className={`w-4 h-4 text-black transition-transform duration-200 ${budgetDropdownOpen ? 'rotate-180' : ''}`} />
              </div>

              {/* Dropdown Options list */}
              {budgetDropdownOpen && (
                <div className="absolute top-[105%] left-0 w-full bg-white border border-neutral-200 rounded-xl shadow-xl py-2 z-50 animate-in fade-in duration-100">
                  {budgetsList.map((budgetOption) => (
                    <div
                      key={budgetOption.value}
                      onClick={() => setBudget(budgetOption.value)}
                      className={`px-4 py-2.5 text-xs sm:text-sm font-semibold transition-colors hover:bg-neutral-100 ${budget === budgetOption.value ? 'bg-neutral-50 text-black font-bold' : 'text-neutral-700'}`}
                    >
                      {budgetOption.label}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 4. Custom Search Button */}
            <button
              type="submit"
              className="bg-black hover:bg-neutral-800 text-white font-bold h-full min-h-[58px] px-6 rounded-xl flex items-center justify-center gap-2.5 transition-all shadow-md active:scale-98"
            >
              <Search className="w-5 h-5 text-white" />
              <span className="text-base">Search Now</span>
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}
