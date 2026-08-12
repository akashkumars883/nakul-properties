'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Calendar, ArrowRight, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
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

  // Pagination Logic
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
    // Smooth scroll to top of content
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  return (
    <div className="space-y-12">
      {/* Listings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentPosts.map((post) => {
          const slug = post.slug?.current;
          return (
            <article 
              key={post._id}
              className="bg-white border border-neutral-200/85 rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Main Image */}
                {slug ? (
                  <Link href={`/blog/${slug}`} className="block relative w-full h-48 bg-neutral-100 overflow-hidden">
                    <img 
                      src={getImageUrl(post.mainImage)} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
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
                  <div className="flex items-center gap-1.5 text-neutral-400 text-xs font-semibold">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                  
                  {slug ? (
                    <Link href={`/blog/${slug}`}>
                      <h2 className="text-base sm:text-lg font-bold text-black hover:text-neutral-700 transition-colors line-clamp-2 leading-snug">
                        {post.title}
                      </h2>
                    </Link>
                  ) : (
                    <h2 className="text-base sm:text-lg font-bold text-black line-clamp-2 leading-snug">
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
                <div className="px-5 pb-5 pt-1">
                  <Link 
                    href={`/blog/${slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-black hover:gap-2.5 transition-all"
                  >
                    <span>Read Full Article</span>
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
