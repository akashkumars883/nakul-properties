'use client';

import React, { useState } from 'react';
import { Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    interest: 'buy-plot',
    location: 'all',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    
    // Construct WhatsApp message URL for direct lead notification
    const text = `Hi Nakul Properties! I would like to book a site visit / consultation.%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Requirement:* ${encodeURIComponent(formData.interest)}%0A*Preferred Area:* ${encodeURIComponent(formData.location)}`;
    
    window.open(`https://wa.me/919811548267?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section 
      id="contact" 
      className="scroll-mt-32 w-full bg-black text-white rounded-xl p-6 sm:p-10 border border-neutral-800 shadow-2xl"
      aria-labelledby="contact-heading"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Direct Call & Office Information */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest bg-neutral-800 text-neutral-300 px-3 py-1 rounded-md inline-block mb-3">
              Direct Contact
            </span>
            <h2 id="contact-heading" className="text-2xl sm:text-4xl font-semibold text-white leading-tight tracking-tight">
              Book a Free Site Visit or Consultation
            </h2>
          </div>

          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-light">
            Have questions about HUDA plot registry, prices, or looking to sell your property? Contact Nakul Properties directly.
          </p>

          <div className="space-y-4 pt-2 text-sm">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-md bg-neutral-800 flex items-center justify-center shrink-0 mt-0.5">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-xs text-neutral-400 font-medium">Direct Phone & Inquiry</div>
                <a href="tel:+919811548267" className="text-base font-bold text-white hover:underline">
                  +91 9811548267
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-md bg-neutral-800 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-xs text-neutral-400 font-medium">Office Location</div>
                <div className="text-sm text-neutral-200">
                  Sector 65, Faridabad, Haryana 121004
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Lead Form */}
        <div className="lg:col-span-7 bg-neutral-900 border border-neutral-800 rounded-xl p-5 sm:p-8">
          {submitted ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Thank You!</h3>
              <p className="text-neutral-300 text-sm max-w-md mx-auto">
                Your consultation request has been initiated. Our property advisor will connect with you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-lg font-bold text-white mb-2">
                Quick Property Inquiry
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 rounded-md px-3.5 py-2.5 text-sm focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 9811548267"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 rounded-md px-3.5 py-2.5 text-sm focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Requirement */}
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    I am looking to
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full bg-neutral-800 border border-neutral-700 text-white rounded-md px-3.5 py-2.5 text-sm focus:outline-none focus:border-white transition-colors cursor-pointer"
                  >
                    <option value="Buy Residential Plot">Buy Residential Plot</option>
                    <option value="Buy Commercial SCO Plot">Buy Commercial SCO Plot</option>
                    <option value="Rent Commercial Shop">Rent Commercial Shop</option>
                    <option value="Buy Independent Builder Floor">Buy Builder Floor</option>
                    <option value="Sell My Property">Sell My Property</option>
                  </select>
                </div>

                {/* Preferred Location */}
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Preferred Area
                  </label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-neutral-800 border border-neutral-700 text-white rounded-md px-3.5 py-2.5 text-sm focus:outline-none focus:border-white transition-colors cursor-pointer"
                  >
                    <option value="All Faridabad">All Faridabad</option>
                    <option value="Sector 14 & 15">Sector 14 & 15</option>
                    <option value="Sector 21 & 28">Sector 21 & 28</option>
                    <option value="Greater Faridabad (81-89)">Greater Faridabad (81-89)</option>
                    <option value="Mathura Road Commercial">Mathura Road Commercial</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-white hover:bg-neutral-200 text-black font-bold py-3 px-4 rounded-md transition-all flex items-center justify-center gap-2 text-sm shadow-md active:scale-98 mt-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Inquiry Request</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
