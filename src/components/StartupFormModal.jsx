'use client';

import React, { useState, useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';

export default function StartupFormModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('huda');

  useEffect(() => {
    // Check if user has already dismissed or filled the modal during this session
    const hasShown = sessionStorage.getItem('nakul_startup_modal_shown');
    if (hasShown !== 'true') {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 4000); // Trigger after 4 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('nakul_startup_modal_shown', 'true');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert('Please fill in your name and phone number.');
      return;
    }

    // Format selected category text
    const categoryLabels = {
      huda: 'HUDA / HSVP Sector Plots',
      gated: 'Gated Township Plots',
      floor: 'Independent Builder Floors',
      commercial: 'Commercial Shops & SCO Plots',
      budget: 'Budget / Individual Plots'
    };
    const selectedCategoryText = categoryLabels[category] || category;

    // Compile WhatsApp dynamic message
    const message = `Hi Nakul Properties, I am interested in property consulting.\n\n*Name*: ${name}\n*Phone*: ${phone}\n*Property Type*: ${selectedCategoryText}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919811548267?text=${encodedMessage}`;

    // Mark as shown so it doesn't pop up again
    sessionStorage.setItem('nakul_startup_modal_shown', 'true');
    setIsOpen(false);

    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Background glass overlay */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={handleClose}
      />

      {/* Modal Container */}
      <div className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl border border-neutral-100 overflow-hidden z-10 animate-in fade-in slide-in-from-bottom-6 duration-300 font-outfit">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-black transition-colors bg-neutral-100 hover:bg-neutral-200/60 p-1.5 rounded-full"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Top Header Design Banner */}
        <div className="bg-neutral-950 text-white px-6 py-8 text-left relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-36 h-36 rounded-full bg-neutral-800/20" />
          <span className="text-[#D4AF37] text-xs font-semibold uppercase tracking-widest bg-[#D4AF37]/15 border border-[#D4AF37]/20 px-3 py-1.5 rounded-md inline-block mb-3">
            Consultation Request
          </span>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
            Find Your Dream Plot in Faridabad
          </h3>
          <p className="text-xs text-neutral-400 font-light mt-1 max-w-[90%]">
            Enter your details below. Our direct agent will guide you with circle rates, legal verification, and floor registry listings.
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4.5 text-left bg-white">
          {/* Input Name */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-neutral-600 uppercase tracking-wider block">Your Name</label>
            <input
              type="text"
              required
              placeholder="e.g. Akash Kumar"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:border-black text-sm bg-neutral-50/50"
            />
          </div>

          {/* Input Phone */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-neutral-600 uppercase tracking-wider block">Phone Number</label>
            <input
              type="tel"
              required
              placeholder="e.g. +91 98765 43210"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:border-black text-sm bg-neutral-50/50"
            />
          </div>

          {/* Property Category dropdown */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-neutral-600 uppercase tracking-wider block">Property Interest</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:border-black text-sm bg-white cursor-pointer"
            >
              <option value="huda">HUDA / HSVP Sector Plots</option>
              <option value="gated">Gated Township Plots (BPTP, Puri)</option>
              <option value="floor">Independent Builder Floors</option>
              <option value="commercial">Commercial Shops &amp; SCO Plots</option>
              <option value="budget">Budget / Individual Plots</option>
            </select>
          </div>

          {/* Security trust badge */}
          <div className="flex items-center gap-1.5 text-neutral-500 text-[11px] font-medium pt-1">
            <ShieldCheck className="w-4 h-4 text-neutral-400 shrink-0" />
            <span>Your information is secure and directly forwarded to Nakul Properties.</span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-black hover:bg-neutral-900 text-white font-semibold py-3 rounded-xl transition-all active:scale-98 shadow-md mt-6 text-sm"
          >
            <FaWhatsapp className="w-4.5 h-4.5 text-white" />
            <span>Connect on WhatsApp</span>
          </button>
        </form>

      </div>
    </div>
  );
}
