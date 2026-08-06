import Navbar from '@/components/Navbar';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';
import { Calendar, ArrowRight, BookOpen } from 'lucide-react';

export const metadata = {
  title: 'Real Estate Blog & Insights | Nakul Properties Faridabad',
  description: 'Read the latest updates, guidebooks, circle rates, registry laws, and property investment tips in Faridabad & Greater Faridabad by Nakul Properties.',
  alternates: {
    canonical: '/blog',
  },
};

export const dynamic = 'force-dynamic';

export default async function BlogListingPage() {
  // Fetch all published posts ordered by publishedAt desc
  const posts = await client.fetch(
    `*[_type == "post"] | order(publishedAt desc)`
  );

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

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* Hero Banner Section */}
      <section className="relative w-full overflow-hidden py-20 sm:py-24 font-outfit" style={{ paddingTop: '140px', minHeight: '340px' }}>
        <div className="absolute inset-0">
          <img
            src="/hero-banner.png"
            alt="Faridabad Property Blog & Market News"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/60 to-black/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[#D4AF37] font-semibold text-xs uppercase tracking-widest bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-3.5 py-1.5 rounded-full inline-block">
            Expert Insights
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Faridabad Property Blog &amp; Market News
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base max-w-xl mx-auto font-light">
            Stay updated with current circle rates, registry rules, local planning plans, and investment guides from Faridabad\'s leading property consultants.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 font-outfit">
        
        {posts.length === 0 ? (
          /* Empty State */
          <div className="text-center py-16 max-w-md mx-auto space-y-4">
            <div className="w-16 h-16 rounded-full bg-neutral-50 border border-neutral-200/80 flex items-center justify-center mx-auto text-neutral-400">
              <BookOpen className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold text-black">No blog posts found</h2>
            <p className="text-neutral-500 text-sm leading-relaxed font-light">
              We haven\'t uploaded any blog posts yet. Visit your Sanity Studio panel to write and publish your first article.
            </p>
            <a 
              href="/studio" 
              className="inline-flex items-center gap-1.5 text-xs font-bold text-black border border-neutral-300 px-4 py-2 rounded-lg hover:bg-neutral-50 transition-colors"
            >
              Go to Sanity Studio
            </a>
          </div>
        ) : (
          /* Listings Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => {
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
        )}

      </main>
    </div>
  );
}
