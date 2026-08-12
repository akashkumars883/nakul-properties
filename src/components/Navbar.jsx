'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown, Phone, Menu, X } from 'lucide-react';
import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa6';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeState, setFadeState] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const dropdownRef = useRef(null);

  const announcements = [
    {
      text: 'Sector 65, Faridabad, Haryana 121004',
      link: null,
    },
    {
      text: 'Special Offer: 0% Brokerage on Selected Builder Floors in Sector 14!',
      link: '#properties',
    },
    {
      text: 'Exclusive Pre-Launch Deals in Greater Faridabad (Neharpar)',
      link: '#properties',
    },
    {
      text: 'Free Property Valuation & Expert Consultation Available Today',
      link: '#contact',
    },
    {
      text: 'Festival Discount: Up to 5% off on Booking in Sector 81',
      link: '#properties',
    },
  ];

  const propertyCategories = [
    { name: 'All Properties', href: '/properties' },
    { name: 'HUDA / HSVP Sector Plots', href: '/properties/huda-plots' },
    { name: 'Gated Townships & Registry Plots', href: '/properties/gated-townships' },
    { name: 'Independent Builder Floors', href: '/properties/builder-floors' },
    { name: 'Commercial Shops & SCO', href: '/properties/commercial-rent-sale' },
  ];

  // Rotate Top Bar announcements
  useEffect(() => {
    const timer = setInterval(() => {
      setFadeState(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % announcements.length);
        setFadeState(true);
      }, 400);
    }, 3800);

    return () => clearInterval(timer);
  }, [announcements.length]);

  const pathname = usePathname();
  const isHome = pathname === '/';

  // Track scroll position for transparent navbar effect
  useEffect(() => {
    const handleScroll = () => {
      if (!isHome) {
        setScrolled(true);
        return;
      }
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentItem = announcements[currentIndex];

  return (
    <>
      {/* Mobile Backdrop Blur Overlay — renders outside fixed header context */}
      <div 
        className={`fixed inset-0 bg-black/45 backdrop-blur-xs z-40 md:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        {/* Top Bar with Fading Announcements */}
        <div className={`text-xs py-2 px-4 sm:px-8 font-outfit transition-all duration-300 ${scrolled ? 'bg-black text-white' : 'bg-black/60 text-white backdrop-blur-xs'
          }`}>
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 h-6">

            {/* Fading Item: Address & Offers */}
            <div className="flex-1 flex items-center overflow-hidden min-w-0">
              <div
                className={`flex items-center gap-1.5 min-w-0 transition-opacity duration-500 ease-in-out ${fadeState ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'
                  }`}
              >
                {currentItem.link ? (
                  <a
                    href={currentItem.link}
                    className="hover:underline transition-colors flex items-center gap-1.5 truncate font-medium text-slate-200 min-w-0"
                  >
                    <span className="truncate">{currentItem.text}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-white shrink-0" />
                  </a>
                ) : (
                  <div className="flex items-center gap-1.5 truncate text-slate-300 font-normal min-w-0">
                    <span className="truncate">{currentItem.text}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-white shrink-0" />
                  </div>
                )}
              </div>
            </div>

            {/* Right: Social Media Links */}
            <div className="flex items-center gap-4 shrink-0 text-white">
              <span className="hidden lg:inline text-white text-[11px]">Follow Us:</span>
              {/* WhatsApp */}
              <a href="https://wa.me/919811548267" target="_blank" rel="noreferrer" className="hover:opacity-75 transition-opacity" aria-label="WhatsApp">
                <FaWhatsapp className="w-3.5 h-3.5 shrink-0" />
              </a>
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:opacity-75 transition-opacity" aria-label="Facebook">
                <FaFacebookF className="w-3.5 h-3.5 shrink-0" />
              </a>
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:opacity-75 transition-opacity" aria-label="Instagram">
                <FaInstagram className="w-3.5 h-3.5 shrink-0" />
              </a>
            </div>

          </div>
        </div>

        {/* Main Navbar */}
        <div className={`transition-all duration-300 ${scrolled
          ? 'bg-white text-black py-3'
          : 'bg-transparent text-white py-4'
          }`}>
          <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Left: Brand Logo */}
          <a href="/" className="text-xl sm:text-2xl font-normal tracking-tight flex items-center gap-1 shrink-0">
            <span className={scrolled ? 'text-black' : 'text-white'}>Nakul</span>
            <span className={scrolled ? 'text-neutral-500' : 'text-slate-300'}>Properties</span>
          </a>

          {/* Center: Centered Desktop Navigation */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center justify-center gap-10 font-outfit text-md font-medium flex-1 px-8">

            {/* 1. Home */}
            <a
              href="/"
              className={`transition-colors ${scrolled ? 'text-black hover:text-neutral-600' : 'text-white hover:text-slate-300'}`}
            >
              Home
            </a>

            {/* 2. About Us */}
            <a
              href="/about"
              className={`transition-colors ${scrolled ? 'text-black hover:text-neutral-600' : 'text-white hover:text-slate-300'}`}
            >
              About Us
            </a>

            {/* 2. Properties Dropdown */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`flex items-center gap-1 transition-colors py-2 focus:outline-none ${scrolled ? 'text-black hover:text-neutral-600' : 'text-white hover:text-slate-300'
                  }`}
                aria-expanded={dropdownOpen}
              >
                <span>Properties</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''} ${scrolled ? 'text-black' : 'text-white'}`}
                />
              </button>

              {/* Dropdown Menu Box */}
              {dropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white text-black border border-neutral-200 rounded-lg shadow-2xl py-2 z-50 animate-in fade-in duration-150">
                  {propertyCategories.map((cat, idx) => (
                    <Link
                      key={idx}
                      href={cat.href}
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-2.5 text-sm font-outfit text-black hover:bg-neutral-100 transition-colors"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 3. Blog */}
            <a
              href="/blog"
              className={`transition-colors ${scrolled ? 'text-black hover:text-neutral-600' : 'text-white hover:text-slate-300'}`}
            >
              Blog
            </a>

            {/* 4. Contact */}
            <a
              href="/contact"
              className={`transition-colors ${scrolled ? 'text-black hover:text-neutral-600' : 'text-white hover:text-slate-300'}`}
            >
              Contact
            </a>
          </nav>

          {/* Right: Phone Number */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <a
              href="tel:+919811548267"
              className={`flex items-center gap-2 font-semibold text-sm px-5 py-2.5 rounded-full transition-all border ${scrolled
                ? 'bg-black text-white border-black hover:bg-neutral-800'
                : 'bg-white text-black border-white hover:bg-neutral-200'
                }`}
            >
              <Phone className="w-4 h-4" />
              <span>+91 9811548267</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden focus:outline-none p-2 rounded-lg transition-colors ${scrolled ? 'text-black hover:bg-neutral-100' : 'text-white hover:bg-white/10'
              }`}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu with Slide-Down Animation */}
      <div 
        className={`md:hidden border-b border-neutral-200 bg-white/98 backdrop-blur-xl text-black px-6 py-5 space-y-4 font-outfit shadow-2xl rounded-b-2xl fixed left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          mobileMenuOpen 
            ? 'top-[104px] opacity-100 pointer-events-auto translate-y-0' 
            : 'top-[-400px] opacity-0 pointer-events-none -translate-y-10'
        }`}
      >
        <a
          href="/"
          onClick={() => setMobileMenuOpen(false)}
          className="block text-base font-medium text-black hover:text-neutral-600 transition-colors py-1.5 border-b border-neutral-100"
        >
          Home
        </a>
        <a
          href="/about"
          onClick={() => setMobileMenuOpen(false)}
          className="block text-base font-medium text-black hover:text-neutral-600 transition-colors py-1.5 border-b border-neutral-100"
        >
          About Us
        </a>

        {/* Mobile Properties Dropdown Accordion */}
        <div className="border-b border-neutral-100 pb-1.5">
          <button
            type="button"
            onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
            className="flex items-center justify-between w-full text-left text-base font-medium text-black hover:text-neutral-600 transition-colors py-1.5 focus:outline-none"
          >
            <span>Properties</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${mobileDropdownOpen ? 'rotate-180 text-black' : 'text-neutral-500'}`}
            />
          </button>
          {mobileDropdownOpen && (
            <div className="pl-4 mt-2 space-y-2 border-l-2 border-neutral-200">
              {propertyCategories.map((cat, idx) => (
                <Link
                  key={idx}
                  href={cat.href}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setMobileDropdownOpen(false);
                  }}
                  className="block text-sm text-neutral-700 hover:text-black transition-colors py-1"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        <a
          href="/blog"
          onClick={() => setMobileMenuOpen(false)}
          className="block text-base font-medium text-black hover:text-neutral-600 transition-colors py-1.5 border-b border-neutral-100"
        >
          Blog
        </a>

        <a
          href="/contact"
          onClick={() => setMobileMenuOpen(false)}
          className="block text-base font-medium text-black hover:text-neutral-600 transition-colors py-1.5"
        >
          Contact
        </a>

        {/* Mobile Quick Action Buttons */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <a
            href="tel:+919811548267"
            className="flex items-center justify-center gap-2 bg-black text-white font-semibold text-sm px-4 py-3 rounded-xl transition-all shadow-md active:scale-95"
          >
            <Phone className="w-4 h-4" />
            <span>Call Us</span>
          </a>
          <a
            href="https://wa.me/919811548267"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 border border-neutral-300 text-black font-semibold text-sm px-4 py-3 rounded-xl transition-all active:scale-95"
          >
            <FaWhatsapp className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  </>
  );
}

