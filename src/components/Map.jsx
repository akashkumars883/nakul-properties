'use client';

import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

export default function Map() {
  const mapQuery = "Sector 65, Faridabad, Haryana 121004";
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;

  return (
    <section className="w-full font-outfit">
      <div className="border border-neutral-200/80 rounded-xl p-5 sm:p-8 bg-white space-y-6">

        {/* Header Information */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-widest block">
              Our Location
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-black flex items-center gap-2">
              <MapPin className="w-5 h-5 text-black" />
              Visit Our Office
            </h2>
            <p className="text-neutral-600 text-sm font-light">
              Sector 65, Faridabad, Haryana - 121004
            </p>
          </div>

          <div>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-black hover:bg-neutral-800 text-white font-bold text-sm py-2.5 px-5 rounded-lg transition-all shadow-sm active:scale-95"
            >
              <Navigation className="w-4 h-4" />
              Get Directions
            </a>
          </div>
        </div>

        {/* Map Iframe Container */}
        <div className="relative w-full h-[350px] sm:h-[400px] overflow-hidden rounded-lg border border-neutral-200 shadow-inner">
          <iframe
            title="Nakul Properties Office Location Map"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
            className="absolute top-0 left-0 w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </section>
  );
}
