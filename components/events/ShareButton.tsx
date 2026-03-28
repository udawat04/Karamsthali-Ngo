"use client";
import { Share2 } from "lucide-react";

export default function ShareButton({ title }: { title: string }) {
  const handleShare = () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      navigator.share({ title, url: window.location.href });
    }
  };

  return (
    <button
      onClick={handleShare}
      className="flex items-center justify-center gap-1.5 border border-gray-200 text-brand-dark/70 font-semibold px-4 py-3 rounded-2xl hover:border-primary hover:text-primary transition-all text-sm"
      aria-label="Share this event"
    >
      <Share2 className="w-4 h-4" />
    </button>
  );
}
