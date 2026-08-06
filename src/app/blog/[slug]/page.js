import Navbar from '@/components/Navbar';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, ArrowLeft, ChevronRight, Home, BadgeAlert } from 'lucide-react';

export async function generateStaticParams() {
  const posts = await client.fetch(`*[_type == "post" && defined(slug.current)]`);
  return posts.map((post) => ({
    slug: post.slug.current,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug || '').trim().toLowerCase();
  
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]`,
    { slug: decodedSlug }
  );

  if (!post) return {};

  return {
    title: `${post.title} | Nakul Properties Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${decodedSlug}`,
    },
    openGraph: {
      title: `${post.title} | Nakul Properties Blog`,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug || '').trim().toLowerCase();

  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]`,
    { slug: decodedSlug }
  );

  if (!post) {
    notFound();
  }

  // Fetch up to 3 similar articles
  const similarPosts = await client.fetch(
    `*[_type == "post" && slug.current != $slug] [0...3] | order(publishedAt desc)`,
    { slug: decodedSlug }
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
      month: 'long',
      year: 'numeric',
    });
  };

  // Split text by double newlines to render as clean paragraphs
  const paragraphs = post.body ? post.body.split('\n\n') : [];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* Main Reading Container */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-8 font-outfit" style={{ paddingTop: '120px' }}>
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-1.5 text-neutral-400 text-xs font-semibold mb-6" aria-label="Breadcrumb">
          <Link href="/" className="flex items-center gap-1 hover:text-black transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3 h-3 text-neutral-300" />
          <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
          <ChevronRight className="w-3 h-3 text-neutral-300" />
          <span className="text-black truncate max-w-[200px] sm:max-w-xs">{post.title}</span>
        </nav>

        {/* Article Header */}
        <header className="space-y-4 mb-8">
          <div className="flex items-center gap-1.5 text-neutral-500 text-xs font-semibold">
            <Calendar className="w-4 h-4" />
            <span>Published: {formatDate(post.publishedAt)}</span>
          </div>
          
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight leading-tight">
            {post.title}
          </h1>
          
          <p className="text-neutral-500 text-sm sm:text-base leading-relaxed italic font-light pl-4 border-l-2 border-neutral-300">
            {post.excerpt}
          </p>
        </header>

        {/* Hero Image */}
        <div className="relative w-full h-[240px] sm:h-[450px] rounded-xl overflow-hidden bg-neutral-100 mb-10 border border-neutral-200">
          <img 
            src={getImageUrl(post.mainImage)} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body */}
        <article className="prose max-w-none text-neutral-700 text-base leading-relaxed space-y-6">
          {paragraphs.map((para, idx) => {
            const trimmed = para.trim();
            if (!trimmed) return null;
            return (
              <p key={idx} className="font-light whitespace-pre-line">
                {trimmed}
              </p>
            );
          })}
        </article>

        {/* Tags Section */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-2 pt-6 border-t border-neutral-100">
            {post.tags.map((tag) => (
              <span key={tag} className="bg-neutral-50 text-neutral-600 text-xs font-semibold px-3 py-1 rounded-md border border-neutral-200">
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Similar Articles Section */}
        {similarPosts && similarPosts.length > 0 && (
          <div className="mt-16 pt-10 border-t border-neutral-100 space-y-6">
            <h3 className="text-xl font-bold text-black">Similar Articles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {similarPosts.map((simPost) => (
                <Link 
                  key={simPost._id} 
                  href={`/blog/${simPost.slug?.current}`}
                  className="group flex flex-col justify-between border border-neutral-200/80 rounded-xl p-3 hover:shadow-md transition-all"
                >
                  <div className="space-y-3">
                    <div className="relative w-full h-32 rounded-lg overflow-hidden bg-neutral-100 shrink-0">
                      <img 
                        src={getImageUrl(simPost.mainImage)} 
                        alt={simPost.title}
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                      />
                    </div>
                    <div className="space-y-1">
                      <div className="text-neutral-400 text-[10px] font-semibold">{formatDate(simPost.publishedAt)}</div>
                      <h4 className="text-sm font-bold text-black group-hover:text-neutral-700 transition-colors line-clamp-2 leading-snug">{simPost.title}</h4>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="mt-12 pt-6 border-t border-neutral-150 flex items-center justify-between">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-black border border-neutral-200 hover:bg-neutral-50 px-4 py-2 rounded-lg transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Articles
          </Link>
        </div>

      </main>
    </div>
  );
}
