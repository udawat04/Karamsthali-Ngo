"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import servicesData from "@/data/services.json";

const ICONS = [
  // Community Development
  <svg key={0} className="size-6 text-[#0e2218]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>,
  // Education & Awareness
  <svg key={1} className="size-6 text-[#0e2218]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>,
  // Human Rights Advocacy
  <svg key={2} className="size-6 text-[#0e2218]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>,
  // Healthcare & Nutrition
  <svg key={3} className="size-6 text-[#0e2218]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>,
  // Women Empowerment
  <svg key={4} className="size-6 text-[#0e2218]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="8" r="4" />
    <path d="M12 12v9" />
    <path d="M8 17h8" />
  </svg>,
  // Environmental Sustainability
  <svg key={5} className="size-6 text-[#0e2218]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M17 8C8 10 5.9 16.17 3.82 22m9.87-4.64c3.94-1.59 6.78-4.13 6.78-9.36A7 7 0 0 0 12 2C6 2 4 8.5 4 12c0 1.5.5 3 1 4" />
  </svg>,
];

interface OurSectionsProps {
  limit?: number;
  showViewAll?: boolean;
}

export default function OurSections({ limit, showViewAll = false }: OurSectionsProps) {
  const allItems = servicesData.map((s, i) => ({ ...s, text: s.cardText, icon: ICONS[i] }));
  const items = limit ? allItems.slice(0, limit) : allItems;

  return (
    <section className="py-16 md:py-24 bg-[#FAF9F6] overflow-hidden">
      {/* ── Custom Clip-Path Reveal from Bottom-Left ── */}
      <style>{`
        .card-reveal-overlay {
          /* Starts at bottom-left corner */
          clip-path: inset(100% 100% 0% 0%);
          transition: clip-path 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .group:hover .card-reveal-overlay {
          clip-path: inset(0% 0% 0% 0%);
        }
      `}</style>

      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="text-center max-w-[750px] mx-auto mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-white border border-zinc-200 rounded-full pl-2 pr-5 py-1.5 mb-6 shadow-sm">
            <span className="size-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs md:text-[0.85rem] font-bold text-brand-dark uppercase tracking-wider font-stack-sans">Our Services</span>
          </div>
          <h2 className="font-headline font-extrabold text-brand-dark text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight leading-tight">
            Our Actions for <span className="text-primary">Social Change</span>
          </h2>
          <p className="font-stack-sans text-brand-dark/60 leading-relaxed text-base md:text-lg">
            We turn compassion into action by implementing community-led programs, advocating for
            social justice, and promoting education, health, and equality.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((action, index) => (
            <Link
              key={index}
              href={`/services/${action.slug}`}
              className={cn(
                "rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between min-h-[400px] md:h-[450px] relative overflow-hidden group transition-all duration-700 cursor-pointer",
                "bg-white border border-zinc-100 hover:shadow-2xl hover:shadow-brand-dark/5",
              )}
            >
              {/* Image reveal layer - Reveal from Bottom-Left */}
              <div
                className="card-reveal-overlay absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: `url('${action.bgImage}')` }}
              />

              {/* Subtle Linear Overlay (Optional - removes the solid green/dark blocks for a clear image) */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-[1]" />

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full pointer-events-none">
                {/* Icon */}
                <div className="size-14 md:size-16 rounded-full bg-primary flex items-center justify-center mb-8 md:mb-10 shadow-lg shrink-0 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-6">
                  {action.icon}
                </div>

                <div className="mt-auto">
                  <h3 className="font-headline font-bold text-2xl md:text-3xl mb-4 leading-tight text-brand-dark group-hover:text-white transition-colors duration-500">
                    {action.title}
                  </h3>
                  <p className="font-stack-sans leading-relaxed text-sm md:text-base mb-8 line-clamp-3 text-brand-dark/60 group-hover:text-white/90 transition-colors duration-500">
                    {action.text}
                  </p>
                </div>

                {/* Footer link */}
                <div className="pt-6 mt-auto border-t border-brand-dark/10 group-hover:border-white/20 transition-colors duration-500">
                  <span className="inline-flex items-center gap-2 font-extrabold text-sm md:text-base text-brand-dark group-hover:text-white transition-colors duration-500">
                    Read More
                    <ArrowUpRight className="size-4 md:size-5 transition-transform duration-500 group-hover:rotate-45" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        {showViewAll && (
          <div className="flex justify-center mt-12 md:mt-16">
            <Link
              href="/services"
              className="group relative overflow-hidden inline-flex items-center gap-2 bg-primary text-brand-dark font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-xl"
            >
              <span className="absolute inset-0 bg-brand-dark w-0 group-hover:w-full transition-all duration-500 ease-in-out z-0" />
              <span className="relative z-10 group-hover:text-white flex items-center gap-2 transition-colors duration-500">
                View All Services
                <ArrowUpRight className="w-5 h-5 shrink-0 transition-transform duration-500 group-hover:rotate-45" strokeWidth={2.5} />
              </span>
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}