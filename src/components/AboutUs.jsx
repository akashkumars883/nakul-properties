'use client';

import React from 'react';
import { Phone, CheckCircle2 } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';

export default function AboutUs() {
  return (
    <section
      id="about"
      className="scroll-mt-12 w-full bg-white rounded-xl p-6 sm:p-10 border border-neutral-200"
      aria-labelledby="about-heading"
      itemScope
      itemType="https://schema.org/RealEstateAgent"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">

        {/* Left Column: Heading, 28+ Years Exp & SEO Description */}
        <div className="flex-1 space-y-3.5 text-left">
          <span className="text-black font-semibold text-xs uppercase tracking-widest bg-neutral-200/80 px-3 py-1 rounded-xl inline-block">
            About Nakul Properties
          </span>

          <h2
            id="about-heading"
            className="text-2xl sm:text-4xl font-semibold text-black leading-tight tracking-tight"
            itemProp="name"
          >
            28+ Years of Trust & Excellence in Faridabad Real Estate
          </h2>

          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-3xl font-light" itemProp="description">
            Faridabad’s premier real estate consultancy specializing in HUDA sector plots, gated township plots & commercial rental leasing across Sector 14, 15, 21 & Greater Faridabad with 100% verified legal titles.
          </p>

          {/* Feature Badges */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-black pt-2">
            <span className="flex items-center gap-1.5 bg-white border border-neutral-200 px-3 py-1.5 rounded-xl shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-black shrink-0" /> 28+ Years Experience
            </span>
            <span className="flex items-center gap-1.5 bg-white border border-neutral-200 px-3 py-1.5 rounded-xl shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-black shrink-0" /> 100% Legal Title Clearance
            </span>
            <span className="flex items-center gap-1.5 bg-white border border-neutral-200 px-3 py-1.5 rounded-xl shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-black shrink-0" /> 0% Brokerage Options
            </span>
          </div>
        </div>

        {/* Right Column: Action Buttons */}
        <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 w-full sm:w-auto">
          <a
            href="tel:+919811548267"
            className="bg-black hover:bg-neutral-800 text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 active:scale-95"
          >
            <Phone className="w-4 h-4" />
            <span>Call +91 9811548267</span>
          </a>

          <a
            href="https://wa.me/919811548267"
            target="_blank"
            rel="noreferrer"
            className="bg-white border border-neutral-300 hover:bg-neutral-100 text-black font-semibold text-sm px-6 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            <FaWhatsapp className="w-4 h-4" />
            <span>WhatsApp Consultation</span>
          </a>
        </div>

      </div>
    </section>
  );
}
