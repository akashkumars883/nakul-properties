'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-neutral-400 py-12 px-6 sm:px-12 border-t border-neutral-900 font-outfit mt-auto w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-neutral-900 text-left">

        {/* Column 1: Brand Intro & Address */}
        <div className="space-y-4 flex flex-col items-start">
          <h3 className="text-xl font-bold text-white tracking-tight">
            Nakul<span className="text-neutral-500 font-light">Properties</span>
          </h3>
          <p className="text-sm text-neutral-500 leading-relaxed max-w-sm">
            Faridabad’s most trusted real estate consultancy with over a decade of experience in BPTP townships, residential plots, flats, luxury builder floors, villas, commercial &amp; industrial properties.
          </p>
          <div className="text-xs text-neutral-500 space-y-1">
            <p className="font-semibold text-neutral-400">Office Location:</p>
            <p>Sector 65, Faridabad, Haryana - 121004</p>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a href="/" className="hover:text-white transition-colors">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-white transition-colors">About Us</a>
            </li>
            <li>
              <a href="/blog" className="hover:text-white transition-colors">Blog</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition-colors">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Property Categories */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider">Property Types</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a href="/properties/bptp-townships" className="hover:text-white transition-colors">BPTP Townships &amp; Plots</a>
            </li>
            <li>
              <a href="/properties/residential-plots" className="hover:text-white transition-colors">Residential Plots &amp; Land</a>
            </li>
            <li>
              <a href="/properties/flats" className="hover:text-white transition-colors">Flats &amp; Apartments</a>
            </li>
            <li>
              <a href="/properties/builder-floors" className="hover:text-white transition-colors">Builder Floors &amp; Villas</a>
            </li>
            <li>
              <a href="/properties/commercial-rent-sale" className="hover:text-white transition-colors">Commercial Shops &amp; SCO</a>
            </li>
            <li>
              <a href="/properties/industrial" className="hover:text-white transition-colors">Industrial Plots &amp; Units</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Prime Locations */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider">Popular Locations</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a href="/locations/sector-65" className="hover:text-white transition-colors">Sector 65 (Head Office)</a>
            </li>
            <li>
              <a href="/locations/sector-64" className="hover:text-white transition-colors">Sector 64 Sector Plots</a>
            </li>
            <li>
              <a href="/locations/sector-63" className="hover:text-white transition-colors">Sector 63 Plots &amp; Commercial</a>
            </li>
            <li>
              <a href="/locations/sector-62" className="hover:text-white transition-colors">Sector 62 Freehold Plots</a>
            </li>
            <li>
              <a href="/locations/sector-2" className="hover:text-white transition-colors">Sector 2 Sector Plots</a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom copyright block */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs sm:text-sm text-neutral-500 mt-8 text-left">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-1.5 md:gap-2">
          <span suppressHydrationWarning>&copy; {new Date().getFullYear()} Nakul Properties. All rights reserved.</span>
          <span className="hidden md:inline text-neutral-800">•</span>
          <span>
            Developed &amp; Managed by{' '}
            <a
              href="https://anavyainfotech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors underline decoration-neutral-700 underline-offset-2 font-medium"
            >
              Anavya Infotech
            </a>
          </span>
        </div>
        <div className="flex flex-wrap gap-4">
          <a href="tel:+919811548267" className="hover:text-white transition-colors">Call Agent</a>
          <span className="text-neutral-800">|</span>
          <a href="https://wa.me/919811548267" className="hover:text-white transition-colors">WhatsApp</a>
          <span className="text-neutral-800">|</span>
          <a href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
