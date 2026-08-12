import Navbar from '@/components/Navbar';
import { client } from '@/sanity/lib/client';
import BlogListingClient from '@/components/BlogListingClient';

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
        
        {/* Paginated Blog Listing Component */}
        <BlogListingClient posts={posts} />

      </main>
    </div>
  );
}
