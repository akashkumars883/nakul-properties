'use client';

import React, { useState } from 'react';
import { Share2, Link as LinkIcon, Check } from 'lucide-react';
import { FaWhatsapp, FaFacebook, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

export default function ShareButtons({ title = '', slug = '' }) {
  const [copied, setCopied] = useState(false);

  // Construct absolute URL for sharing
  const shareUrl = typeof window !== 'undefined' 
    ? window.location.href 
    : `https://nakulproperties.com/blog/${slug}`;

  const handleCopyLink = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch (e) {
      console.error('Failed to copy link:', e);
    }
  };

  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${title}\n\n${shareUrl}`)}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;

  return (
    <div className="flex flex-wrap items-center gap-2 font-outfit py-4 border-y border-neutral-100 my-6">
      <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 flex items-center gap-1.5 mr-2">
        <Share2 className="w-3.5 h-3.5 text-black" /> Share Article:
      </span>

      {/* WhatsApp Share Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] font-semibold text-xs px-3 py-1.5 rounded-lg border border-[#25D366]/30 transition-all"
        title="Share on WhatsApp"
      >
        <FaWhatsapp className="w-3.5 h-3.5" />
        <span>WhatsApp</span>
      </a>

      {/* Facebook Share Button */}
      <a
        href={facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 bg-[#1877F2]/10 hover:bg-[#1877F2]/20 text-[#1877F2] font-semibold text-xs px-3 py-1.5 rounded-lg border border-[#1877F2]/30 transition-all"
        title="Share on Facebook"
      >
        <FaFacebook className="w-3.5 h-3.5" />
        <span>Facebook</span>
      </a>

      {/* X / Twitter Share Button */}
      <a
        href={twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 bg-black/5 hover:bg-black/10 text-black font-semibold text-xs px-3 py-1.5 rounded-lg border border-neutral-200 transition-all"
        title="Share on X (Twitter)"
      >
        <FaXTwitter className="w-3.5 h-3.5" />
        <span>X / Twitter</span>
      </a>

      {/* LinkedIn Share Button */}
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 text-[#0A66C2] font-semibold text-xs px-3 py-1.5 rounded-lg border border-[#0A66C2]/30 transition-all"
        title="Share on LinkedIn"
      >
        <FaLinkedin className="w-3.5 h-3.5" />
        <span>LinkedIn</span>
      </a>

      {/* Copy Link Button */}
      <button
        onClick={handleCopyLink}
        type="button"
        className={`inline-flex items-center gap-1.5 font-semibold text-xs px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
          copied 
            ? 'bg-emerald-50 text-emerald-700 border-emerald-300' 
            : 'bg-neutral-50 hover:bg-neutral-100 text-neutral-700 border-neutral-200'
        }`}
        title="Copy Link to Clipboard"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-emerald-600" />
            <span>Link Copied!</span>
          </>
        ) : (
          <>
            <LinkIcon className="w-3.5 h-3.5 text-neutral-600" />
            <span>Copy Link</span>
          </>
        )}
      </button>
    </div>
  );
}
