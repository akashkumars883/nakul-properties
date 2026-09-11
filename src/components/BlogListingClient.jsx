'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Calendar, ArrowRight, BookOpen, ChevronLeft, ChevronRight, Clock, Tag } from 'lucide-react';
import { urlFor } from '@/sanity/lib/image';

export default function BlogListingClient({ posts }) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const getImageUrl = (image) => {
    if (!image) return '/placeholder.png';
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

  const getReadingTime = (post) => {
    if (typeof post.body === 'string') {
      const words = post.body.trim().split(/\s+/).length;
      return `${Math.max(2, Math.ceil(words / 200))} min read`;
    } else if (Array.isArray(post.body)) {
      const text = post.body.map(b => b.children?.map(c => c.text).join(' ')).join(' ');
      const words = text.trim().split(/\s+/).length;
      return `${Math.max(2, Math.ceil(words / 200))} min read`;
    }
    return '3 min read';
  };

  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-16 max-w-md mx-auto space-y-4">
        <div className="w-16 h-16 rounded-full bg-neutral-50 border border-neutral-200/80 flex items-center justify-center mx-auto text-neutral-400">
          <BookOpen className="w-8 h-8" />
        </div>
        <h2 className="text-xl font-bold text-black">No blog posts found</h2>
        <p className="text-neutral-500 text-sm leading-relaxed font-light">
          We haven't uploaded any blog posts yet. Visit your Sanity Studio panel to write and publish your first article.
        </p>
        <a 
          href="/studio" 
          className="inline-flex items-center gap-1.5 text-xs font-bold text-black border border-neutral-300 px-4 py-2 rounded-lg hover:bg-neutral-50 transition-colors"
        >
          Go to Sanity Studio
        </a>
      </div>
    );
  }

  const featuredPost = currentPage === 1 ? posts[0] : null;
  const regularPosts = currentPage === 1 ? posts.slice(1) : posts;

  // Pagination Logic
  const totalPages = Math.ceil(regularPosts.length / postsPerPage);
  const indexOfLastPost = (currentPage === 1 ? currentPage : currentPage - 1) * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = currentPage === 1 ? regularPosts.slice(0, postsPerPage) : regularPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  return (
    <div className="space-y-12">
      
      {/* Featured Post (Only on Page 1) */}
      {featuredPost && (
        <article className="group bg-white border border-neutral-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col lg:flex-row hover:-translate-y-1 relative mb-12">
          {/* Absolute Featured Badge */}
          <div className="absolute top-4 left-4 z-10 bg-black text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md">
            Featured
          </div>

          <Link href={`/blog/${featuredPost.slug?.current}`} className="lg:w-1/2 relative h-64 lg:h-auto bg-neutral-100 overflow-hidden block">
            <img 
              src={getImageUrl(featuredPost.mainImage)} 
              alt={featuredPost.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
          </Link>

          <div className="lg:w-1/2 p-6 sm:p-10 flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-4 text-neutral-400 text-xs font-semibold mb-4">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>{formatDate(featuredPost.publishedAt)}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>{getReadingTime(featuredPost)}</span>
              </div>
              {featuredPost.tags && featuredPost.tags[0] && (
                <div className="flex items-center gap-1.5 text-[#D4AF37]">
                  <Tag className="w-3.5 h-3.5" />
                  <span>{featuredPost.tags[0]}</span>
                </div>
              )}
            </div>
            
            <Link href={`/blog/${featuredPost.slug?.current}`}>
              <h2 className="text-2xl sm:text-3xl font-bold text-black hover:text-[#D4AF37] transition-colors line-clamp-2 leading-snug mb-4">
                {featuredPost.title}
              </h2>
            </Link>
            
            <p className="text-neutral-500 text-sm sm:text-base line-clamp-3 leading-relaxed font-light mb-6">
              {featuredPost.excerpt}
            </p>
            
            <Link 
              href={`/blog/${featuredPost.slug?.current}`}
              className="inline-flex items-center gap-2 text-sm font-bold text-black hover:gap-3 transition-all group/link w-max"
            >
              <span>Read Full Article</span>
              <ArrowRight className="w-4 h-4 group-hover/link:text-[#D4AF37] transition-colors" />
            </Link>
          </div>
        </article>
      )}

      <h3 className="text-2xl font-bold text-black border-b border-neutral-100 pb-4">
        {currentPage === 1 ? 'Latest Articles' : `Page ${currentPage} Articles`}
      </h3>

      {/* Listings Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentPosts.map((post) => {
          const slug = post.slug?.current;
          return (
            <article 
              key={post._id}
              className="bg-white border border-neutral-200/80 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
            >
              <div>
                {/* Main Image */}
                {slug ? (
                  <Link href={`/blog/${slug}`} className="block relative w-full h-48 bg-neutral-100 overflow-hidden">
                    {post.tags && post.tags[0] && (
                      <div className="absolute top-3 left-3 z-10 bg-white/90 backdrop-blur text-black text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded shadow-sm">
                        {post.tags[0]}
                      </div>
                    )}
                    <img 
                      src={getImageUrl(post.mainImage)} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>
                ) : (
                  <div className="relative w-full h-48 bg-neutral-100 overflow-hidden">
                    <img 
                      src={getImageUrl(post.mainImage)} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Metadata & Content */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-4 text-neutral-400 text-[11px] font-semibold">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{formatDate(post.publishedAt)}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{getReadingTime(post)}</span>
                    </div>
                  </div>
                  
                  {slug ? (
                    <Link href={`/blog/${slug}`}>
                      <h2 className="text-base font-bold text-black hover:text-[#D4AF37] transition-colors line-clamp-2 leading-snug">
                        {post.title}
                      </h2>
                    </Link>
                  ) : (
                    <h2 className="text-base font-bold text-black line-clamp-2 leading-snug">
                      {post.title}
                    </h2>
                  )}

                  <p className="text-neutral-500 text-xs sm:text-sm line-clamp-3 leading-relaxed font-light">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Read More Link */}
              {slug && (
                <div className="px-5 pb-5 pt-1 mt-auto border-t border-neutral-100/50">
                  <Link 
                    href={`/blog/${slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-black hover:gap-2.5 transition-all mt-4"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}
            </article>
          );
        })}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-6">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-lg border border-neutral-200 hover:bg-neutral-50 disabled:opacity-50 disabled:hover:bg-transparent transition-colors cursor-pointer"
            aria-label="Previous Page"
          >
            <ChevronLeft className="w-5 h-5 text-black" />
          </button>

          {Array.from({ length: totalPages }, (_, index) => {
            const pageNum = index + 1;
            return (
              <button
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                className={`w-10 h-10 rounded-lg text-sm font-bold transition-all cursor-pointer ${
                  currentPage === pageNum
                    ? 'bg-black text-white'
                    : 'border border-neutral-200 text-black hover:bg-neutral-50'
                }`}
              >
                {pageNum}
              </button>
            );
          })}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg border border-neutral-200 hover:bg-neutral-50 disabled:opacity-50 disabled:hover:bg-transparent transition-colors cursor-pointer"
            aria-label="Next Page"
          >
            <ChevronRight className="w-5 h-5 text-black" />
          </button>
        </div>
      )}
    </div>
  );
}
