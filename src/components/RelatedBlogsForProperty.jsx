'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, ArrowRight } from 'lucide-react';

const defaultGuides = [
  {
    slug: 'huda-plots-in-faridabad-property-verification',
    title: '7-Point HUDA Plot Verification & Legal Due Diligence Checklist',
    excerpt: 'Essential checklist before buying a HUDA plot in Faridabad: allotment letter, conveyance deed, no-dues certificate, and title check.',
    image: '/cat-huda.png',
    keywords: ['huda', 'plot', 'verification', 'legal', 'registry', 'sector 14', 'sector 15', 'sector 21', 'sector 65', 'sector 64', 'sector 62'],
    badge: 'Legal Checklist'
  },
  {
    slug: 'faridabad-huda-plot-registry-process-guide',
    title: 'HUDA Plot Registry & Physical Possession Process in Faridabad',
    excerpt: 'Step-by-step procedure for stamp duty calculations, transfer permissions, and clearance documents needed for HSVP plot registry.',
    image: '/plot1.png',
    keywords: ['registry', 'possession', 'huda', 'hsvp', 'plot', 'sector', 'freehold', 'land', 'floor'],
    badge: 'Registry Guide'
  },
  {
    slug: 'top-5-sectors-to-invest-huda-plots-faridabad',
    title: 'Top Sectors to Buy Freehold HUDA Plots in Faridabad (Sector 65, 64 & 62)',
    excerpt: 'Detailed analysis of plot rates per Gaj, infrastructure growth, and capital appreciation in Sector 65, 64 & 62 Faridabad.',
    image: '/plot2.png',
    keywords: ['sector 65', 'sector 64', 'sector 62', 'invest', 'huda', 'plot', 'rates', 'gaj', 'township'],
    badge: 'Investment Guide'
  },
  {
    slug: 'why-invest-in-sector-65-faridabad-plots',
    title: 'Why Sector 65 Faridabad is the #1 Prime Location for Residential Plots',
    excerpt: 'Explore why Sector 65 is witnessing high demand with 18m wide sector roads, top connectivity, and clear freehold titles.',
    image: '/plot3.png',
    keywords: ['sector 65', 'head office', 'plots', 'faridabad', 'prime location'],
    badge: 'Location Special'
  }
];

export default function RelatedBlogsForProperty({ property, title = "Related Buyer & Verification Guides" }) {
  // Extract keywords from current property details
  const searchText = `${property?.title || ''} ${property?.location || ''} ${property?.badge || ''} ${property?.longDescription || ''}`.toLowerCase();

  // Calculate relevance score for each guide based on keyword matching
  const scoredGuides = defaultGuides.map(guide => {
    let score = 0;
    guide.keywords.forEach(kw => {
      if (searchText.includes(kw.toLowerCase())) {
        score += 3;
      }
    });
    return { ...guide, score };
  });

  // Sort by highest score and take top 3
  scoredGuides.sort((a, b) => b.score - a.score);
  const relatedArticles = scoredGuides.slice(0, 3);

  return (
    <section className="mt-12 pt-10 border-t border-neutral-200/80 font-outfit">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-1 block flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-black" /> Expert Property Guides
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-black tracking-tight">
            {title}
          </h3>
        </div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-black hover:text-neutral-600 transition-colors"
        >
          <span>All Guides</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* 3 Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {relatedArticles.map((article) => (
          <article
            key={article.slug}
            className="bg-neutral-50 border border-neutral-200/80 rounded-2xl p-4 transition-all duration-300 group hover:-translate-y-1 hover:shadow-md hover:bg-white flex flex-col justify-between"
          >
            <div>
              {/* Thumbnail Image */}
              <Link href={`/blog/${article.slug}`} className="relative w-full h-36 rounded-xl overflow-hidden mb-3 bg-neutral-100 block">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2">
                  <span className="bg-black/85 backdrop-blur-xs text-white text-[10px] font-semibold px-2 py-0.5 rounded-md">
                    {article.badge}
                  </span>
                </div>
              </Link>

              {/* Title */}
              <Link href={`/blog/${article.slug}`}>
                <h4 className="text-sm font-bold text-black mb-1.5 leading-snug group-hover:text-neutral-700 transition-colors line-clamp-2">
                  {article.title}
                </h4>
              </Link>

              {/* Excerpt */}
              <p className="text-neutral-500 text-xs leading-relaxed line-clamp-2 font-light mb-3">
                {article.excerpt}
              </p>
            </div>

            {/* Read Button */}
            <div className="pt-2 border-t border-neutral-200/60">
              <Link
                href={`/blog/${article.slug}`}
                className="inline-flex items-center gap-1 text-xs font-bold text-black group-hover:underline"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
