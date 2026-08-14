'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, ArrowRight, BookOpen } from 'lucide-react';
import { urlFor } from '@/sanity/lib/image';

const defaultPosts = [
  {
    _id: 'blog-1',
    slug: { current: 'top-5-sectors-to-invest-huda-plots-faridabad' },
    title: 'Top Sectors to Buy Freehold HUDA Plots in Faridabad (Sector 65, 64 & 62)',
    excerpt: 'Comprehensive guide on plot sizes, current market prices per Gaj, and capital appreciation potential in Sector 65, 64 & 62 Faridabad.',
    publishedAt: '2026-08-10',
    mainImage: '/plot1.png',
  },
  {
    _id: 'blog-2',
    slug: { current: 'faridabad-huda-plot-registry-process-guide' },
    title: 'HUDA Plot Registry & Physical Possession Rules in Faridabad',
    excerpt: 'Step-by-step procedure for registry, stamp duty charges, transfer permissions, and clearance documents required for HSVP plots.',
    publishedAt: '2026-08-05',
    mainImage: '/cat-huda.png',
  },
  {
    _id: 'blog-3',
    slug: { current: 'why-invest-in-sector-65-faridabad-plots' },
    title: 'Why Sector 65 Faridabad is the #1 Prime Location for Residential Plots',
    excerpt: 'Explore why Sector 65 is witnessing high demand with 18m wide sector roads, top connectivity, and clear freehold titles.',
    publishedAt: '2026-08-01',
    mainImage: '/plot2.png',
  },
];

export default function LatestBlogs({ posts = [] }) {
  const displayPosts = (posts && posts.length > 0) ? posts.slice(0, 3) : defaultPosts;

  const getImageUrl = (image) => {
    if (!image) return '/placeholder.png';
    if (typeof image === 'string') return image;
    try {
      return urlFor(image).url();
    } catch (e) {
      return '/placeholder.png';
    }
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <section id="blogs" className="scroll-mt-32 font-outfit" aria-labelledby="blogs-heading">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-2 block flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-black" /> Market Insights &amp; Guides
          </span>
          <h2 id="blogs-heading" className="text-3xl sm:text-4xl font-semibold text-black tracking-tight">
            Latest Real Estate Articles
          </h2>
        </div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-black border border-neutral-300 hover:bg-neutral-50 px-4 py-2.5 rounded-xl transition-all self-start sm:self-auto"
        >
          <span>View All Articles</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* 3 Grid Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {displayPosts.map((post) => {
          const slug = post.slug?.current || post.slug;
          return (
            <article
              key={post._id || slug}
              className="bg-white border border-neutral-200 rounded-2xl p-4 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* Image Link */}
                <Link href={`/blog/${slug}`} className="relative w-full h-48 rounded-xl overflow-hidden mb-4 bg-neutral-100 block">
                  <img
                    src={getImageUrl(post.mainImage)}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="bg-black/80 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                      Property Guide
                    </span>
                  </div>
                </Link>

                {/* Published Date */}
                <div className="flex items-center gap-1.5 text-neutral-400 text-xs font-semibold mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{formatDate(post.publishedAt)}</span>
                </div>

                {/* Title Link */}
                <Link href={`/blog/${slug}`}>
                  <h3 className="text-base font-bold text-black mb-2 leading-snug group-hover:text-neutral-700 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </Link>

                {/* Excerpt */}
                <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4 font-light">
                  {post.excerpt}
                </p>
              </div>

              {/* Read More Link */}
              <div className="pt-3 border-t border-neutral-100">
                <Link
                  href={`/blog/${slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-black hover:text-neutral-600 transition-colors"
                >
                  <span>Read Full Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
