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
      alt: 'Luxury Real Estate in Faridabad',
      heading: (
        <>
          Leading Real Estate Dealer &amp; Property Consultant in <span className="font-semibold text-white">Faridabad</span>
        </>
      ),
      paragraph: 'Nakul Properties helps you buy, sell & rent premier builder floors, residential plots, luxury apartments and commercial property across Sector 14, 15, 21 & Greater Faridabad (Neharpar).'
    },
    {
      id: 2,
      image: '/hero-banner2.png',
      alt: 'Independent Builder Floors & Apartments in Faridabad',
      heading: (
        <>
          Exclusive Builder Floors & Luxury Flats in <span className="font-semibold text-white">Greater Faridabad</span>
        </>
      ),
      paragraph: 'Explore premium 3 & 4 BHK independent floors and modern high-rise apartments with top amenities, 0% brokerage options, and 100% verified legal titles.'
    }
  ];

  // Dropdown mapping configurations
  const propertyTypesList = [
    { value: 'all', label: 'All Properties' },
    { value: 'builder-floors', label: 'Builder Floors' },
    { value: 'residential-plots', label: 'Residential Plots' },
    { value: 'commercial', label: 'Commercial Shops' }
  ];

  const locationsList = [
    { value: 'all', label: 'All Faridabad' },
    { value: 'sector-14', label: 'Sector 14' },
    { value: 'sector-15', label: 'Sector 15' },
    { value: 'sector-21', label: 'Sector 21' },
    { value: 'neharpar', label: 'Greater Faridabad' }
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
    <section className="relative min-h-[85vh] flex flex-col justify-between pt-28 sm:pt-36 pb-6 px-4 sm:px-6 lg:px-8 bg-black">
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
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/45 z-0" />
        </div>
      ))}

      {/* Slide Navigation Arrows */}
      <div className="absolute inset-x-2 sm:inset-x-6 top-1/2 -translate-y-1/2 z-20 flex justify-between pointer-events-none max-w-7xl mx-auto">
        <button
          type="button"
          onClick={prevSlide}
          className="pointer-events-auto w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black/40 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-all border border-white/20 active:scale-95 shadow-lg"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className="pointer-events-auto w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black/40 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-md transition-all border border-white/20 active:scale-95 shadow-lg"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Hero Title & SEO Paragraph Slider Content */}
      <div className="relative z-10 flex-1 flex flex-col items-start sm:items-center justify-center max-w-6xl w-full mx-auto text-white py-8 sm:py-12 min-h-[220px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`transition-all duration-700 ease-in-out flex flex-col items-start sm:items-center ${index === currentSlide
              ? 'opacity-100 translate-y-0 relative'
              : 'opacity-0 translate-y-4 absolute pointer-events-none'
              }`}
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal font-outfit text-start sm:text-center max-w-5xl leading-tight tracking-tight mb-4">
              {slide.heading}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-neutral-200 text-start sm:text-center max-w-3xl font-outfit font-light leading-relaxed">
              {slide.paragraph}
            </p>
          </div>
        ))}
      </div>

      {/* Dot Indicators */}
      <div className="relative z-20 flex items-center justify-center gap-2 mb-3">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Quick Property Search Card */}
      <div className="relative z-30 max-w-7xl w-full mx-auto text-white flex justify-center">
        <div className="w-full max-w-6xl bg-white text-black rounded-2xl p-4 sm:p-7 shadow-2xl font-outfit border border-neutral-100 relative z-30">
          <h2 className="text-lg sm:text-xl font-bold text-black text-start sm:text-center mb-5 tracking-tight">
            Search Your Dream Property in Faridabad
          </h2>
          
          <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center relative z-30">
            
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
