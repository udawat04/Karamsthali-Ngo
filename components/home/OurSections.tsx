"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
// Updated Lucide icons for the new mission
import {
  ArrowUpRight,
  Heart, // For Cow Welfare
  Dog, // For Feeding Street Dogs
  BookOpen, // For Education
  Utensils, // For Feeding the Needy
  Sparkles, // For Impact
  Globe, // For Mission
} from "lucide-react";
import servicesData from "@/data/services.json";

// Map your new data indices to mission-specific Lucide components
const ICONS = [
  Heart, // Index 0: Cow Welfare
  Dog, // Index 1: Feeding Street Dogs
  BookOpen, // Index 2: Education
  Utensils, // Index 3: Feeding the Needy
  Sparkles, // Fallback 1
  Globe, // Fallback 2
];

interface OurSectionsProps {
  limit?: number;
  showViewAll?: boolean;
}

export default function OurActions({
  limit,
  showViewAll = false,
}: OurSectionsProps) {
  const allItems = servicesData.map((s, i) => ({
    ...s,
    text: s.cardText,
    IconComponent: ICONS[i % ICONS.length],
  }));

  const items = limit ? allItems.slice(0, limit) : allItems;

  return (
    <section className="py-16 md:py-24 bg-[#FAF9F6]">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header Section - Mission Focused */}
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white border border-zinc-200 rounded-full pl-2 pr-5 py-1.5 mb-6 shadow-sm">
            <span className="size-2 rounded-full bg-[#F4B400] animate-pulse" />
            <span className="text-xs md:text-[0.85rem] font-bold text-[#0B3C5D] uppercase tracking-wider">
              Our Mission of Kindness
            </span>
          </div>
          <h2 className="font-headline font-extrabold text-[#0B3C5D] text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight leading-tight">
            Small Acts, <span className="text-[#F4B400]">Big Impact</span>
          </h2>
          <p className="font-stack-sans text-[#1F2933]/70 leading-relaxed text-base md:text-lg">
            We are dedicated to creating a world filled with compassion and
            equal opportunities. From protecting those who cannot speak to
            empowering the next generation, every action we take is a step
            toward a kinder tomorrow.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((action, index) => {
            const Icon = action.IconComponent;

            return (
              <div
                key={index}
                className="group flex flex-col h-full rounded-[1.5rem] overflow-hidden bg-white border border-zinc-100 shadow-lg transition-all duration-500 hover:shadow-2xl"
              >
                <Link
                  href={`/services/${action.slug}`}
                  className="flex flex-col flex-grow"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={action.bgImage}
                      alt={action.title}
                      fill
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-col flex-grow p-8">
                    {/* Icon Container with expanding hover effect */}
                    <div className="relative size-16 mb-6 flex items-center justify-center shrink-0 rounded-full bg-[#F4B400] overflow-hidden">
                      {/* Dark circle expanding from center on hover */}
                      <div className="absolute inset-0 bg-[#0B3C5D] scale-0 rounded-full transition-transform duration-500 ease-in-out origin-center group-hover:scale-100" />

                      {/* Lucide Icon */}
                      <Icon
                        className="size-7 relative z-10 text-[#0B3C5D] transition-colors duration-500 group-hover:text-white"
                        strokeWidth={2}
                      />
                    </div>

                    <h3 className="font-headline font-bold text-2xl mb-4 text-[#0B3C5D]">
                      {action.title}
                    </h3>
                    <p className="font-stack-sans text-[#1F2933]/70 text-base leading-relaxed line-clamp-3">
                      {action.text}
                    </p>
                  </div>

                  {/* Button Footer - Independent Hover */}
                  <div className="relative w-full py-5 px-6 bg-[#F4B400] overflow-hidden group/btn">
                    {/* Background fill on BUTTON hover only */}
                    <div className="absolute inset-0 bg-[#0B3C5D] translate-x-[-101%] transition-transform duration-500 ease-in-out group-hover/btn:translate-x-0" />

                    <span className="relative z-10 flex items-center justify-center gap-2 font-bold text-[#0B3C5D] transition-colors duration-500 group-hover/btn:text-white">
                      Support This Cause
                      <ArrowUpRight className="size-5 transition-transform duration-500 group-hover/btn:rotate-45" />
                    </span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* View All Button (Optional) */}
        {showViewAll && (
          <div className="mt-16 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0B3C5D] text-white font-bold rounded-full hover:bg-[#F4B400] hover:text-[#0B3C5D] transition-all duration-300"
            >
              View All Initiatives
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
