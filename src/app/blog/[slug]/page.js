import React from 'react';
import Navbar from '@/components/Navbar';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, ArrowLeft, ChevronRight, Home, BadgeAlert } from 'lucide-react';
import { PortableText } from '@portabletext/react';

function parseInlineText(text) {
  if (!text) return null;
  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*|\[.*?\]\(.*?\))/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return <strong key={i} className="font-semibold text-black">{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
      return <em key={i} className="italic">{part.slice(1, -1)}</em>;
    }
    const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
    if (linkMatch) {
      return (
        <a key={i} href={linkMatch[2]} target={linkMatch[2].startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-black font-medium underline underline-offset-4 hover:text-neutral-600">
          {linkMatch[1]}
        </a>
      );
    }
    return part;
  });
}

function renderLegacyBody(bodyText) {
  if (!bodyText || typeof bodyText !== 'string') return null;
  const blocks = bodyText.split(/\n\s*\n/);
  
  return blocks.map((block, idx) => {
    const trimmed = block.trim();
    if (!trimmed) return null;

    if (/^#{1,4}\s+/.test(trimmed)) {
      const level = (trimmed.match(/^#+/) || [''])[0].length;
      const titleText = trimmed.replace(/^#+\s+/, '');
      if (level === 1) return <h1 key={idx} className="text-3xl sm:text-4xl font-bold text-black tracking-tight mt-8 mb-4">{parseInlineText(titleText)}</h1>;
      if (level === 2) return <h2 key={idx} className="text-2xl sm:text-3xl font-bold text-black tracking-tight mt-8 mb-4">{parseInlineText(titleText)}</h2>;
      if (level === 3) return <h3 key={idx} className="text-xl sm:text-2xl font-semibold text-black tracking-tight mt-6 mb-3">{parseInlineText(titleText)}</h3>;
      return <h4 key={idx} className="text-lg font-semibold text-black mt-5 mb-2">{parseInlineText(titleText)}</h4>;
    }

    if (trimmed.startsWith('> ')) {
      return (
        <blockquote key={idx} className="border-l-4 border-black pl-4 py-2 my-6 italic text-neutral-700 font-light bg-neutral-50 rounded-r-lg">
          {parseInlineText(trimmed.replace(/^>\s+/, ''))}
        </blockquote>
      );
    }

    const lines = trimmed.split('\n');

    const isBulletList = lines.every(l => /^[-*•]\s+/.test(l.trim()));
    if (isBulletList && lines.length > 0) {
      return (
        <ul key={idx} className="list-disc list-outside space-y-2 my-4 ml-6 text-neutral-700 font-light text-base sm:text-lg">
          {lines.map((line, lIdx) => (
            <li key={lIdx} className="leading-relaxed pl-1">
              {parseInlineText(line.trim().replace(/^[-*•]\s+/, ''))}
            </li>
          ))}
        </ul>
      );
    }

    const isNumList = lines.every(l => /^\d+[\.\)]\s+/.test(l.trim()));
    if (isNumList && lines.length > 0) {
      return (
        <ol key={idx} className="list-decimal list-outside space-y-2 my-4 ml-6 text-neutral-700 font-light text-base sm:text-lg">
          {lines.map((line, lIdx) => (
            <li key={lIdx} className="leading-relaxed pl-1">
              {parseInlineText(line.trim().replace(/^\d+[\.\)]\s+/, ''))}
            </li>
          ))}
        </ol>
      );
    }

    if (lines.length === 1 && (trimmed.endsWith(':') || (trimmed.startsWith('**') && trimmed.endsWith('**')))) {
      return (
        <h3 key={idx} className="text-xl sm:text-2xl font-bold text-black tracking-tight mt-6 mb-2">
          {parseInlineText(trimmed)}
        </h3>
      );
    }

    return (
      <p key={idx} className="font-light text-neutral-700 leading-relaxed my-4 text-base sm:text-lg">
        {lines.map((line, lIdx) => (
          <React.Fragment key={lIdx}>
            {lIdx > 0 && <br />}
            {parseInlineText(line)}
          </React.Fragment>
        ))}
      </p>
    );
  });
}

const createPortableTextComponents = (urlFor) => ({
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;
      return (
        <figure className="my-8">
          <img
            src={urlFor(value).url()}
            alt={value.alt || 'Blog image'}
            className="w-full h-auto rounded-xl border border-neutral-200 object-cover shadow-sm"
          />
          {value.caption && (
            <figcaption className="mt-2 text-center text-xs text-neutral-500 italic">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl sm:text-4xl font-bold text-black tracking-tight mt-8 mb-4">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl sm:text-3xl font-bold text-black tracking-tight mt-8 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl sm:text-2xl font-semibold text-black tracking-tight mt-6 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-semibold text-black mt-5 mb-2">
        {children}
      </h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-black pl-4 py-2 my-6 italic text-neutral-700 font-light bg-neutral-50 rounded-r-lg">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="font-light text-neutral-700 leading-relaxed my-4 text-base sm:text-lg">
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-outside space-y-2 my-4 ml-6 text-neutral-700 font-light text-base sm:text-lg">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-outside space-y-2 my-4 ml-6 text-neutral-700 font-light text-base sm:text-lg">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed pl-1">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed pl-1">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-black">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => <span className="underline decoration-1 underline-offset-4">{children}</span>,
    code: ({ children }) => <code className="bg-neutral-100 text-red-600 px-1.5 py-0.5 rounded text-sm font-mono">{children}</code>,
    highlight: ({ children }) => (
      <mark className="bg-amber-200/90 text-neutral-900 px-1.5 py-0.5 rounded font-normal">
        {children}
      </mark>
    ),
    greenHighlight: ({ children }) => (
      <mark className="bg-emerald-100 text-emerald-950 px-1.5 py-0.5 rounded font-normal">
        {children}
      </mark>
    ),
    redText: ({ children }) => (
      <span className="text-red-600 font-semibold">{children}</span>
    ),
    blueText: ({ children }) => (
      <span className="text-blue-600 font-semibold">{children}</span>
    ),
    greenText: ({ children }) => (
      <span className="text-emerald-600 font-semibold">{children}</span>
    ),
    link: ({ value, children }) => {
      const href = value?.href || '#';
      const target = href.startsWith('http') ? '_blank' : undefined;
      return (
        <a
          href={href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className="text-black font-medium underline underline-offset-4 hover:text-neutral-600 transition-colors"
        >
          {children}
        </a>
      );
    },
  },
});

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

  const portableTextComponents = createPortableTextComponents(urlFor);

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
        <article className="prose max-w-none text-neutral-700 text-base leading-relaxed">
          {Array.isArray(post.body) ? (
            <PortableText value={post.body} components={portableTextComponents} />
          ) : (
            renderLegacyBody(post.body)
          )}
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
