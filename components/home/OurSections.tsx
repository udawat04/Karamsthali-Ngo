"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
// Import the specific icons from lucide-react
import { 
  ArrowUpRight, 
  Target, 
  Users, 
  ShieldCheck, 
  HeartPulse, 
  Flower2, 
  Leaf 
} from "lucide-react"; 
import servicesData from "@/data/services.json";

// Map your data indices to Lucide components
const ICONS = [
  Target,      // Women Empowerment
  Users,       // Meaningful Social Impact
  ShieldCheck, // Social Justice & Advocacy
  HeartPulse,  // Healthcare
  Flower2,     // Community
  Leaf         // Environmental
];

interface OurSectionsProps {
  limit?: number;
  showViewAll?: boolean;
}

export default function OurSections({
  limit,
  showViewAll = false,
}: OurSectionsProps) {
  const allItems = servicesData.map((s, i) => ({
    ...s,
    text: s.cardText,
    IconComponent: ICONS[i % ICONS.length], // Assign the Component
  }));
  
  const items = limit ? allItems.slice(0, limit) : allItems;

  return (
    <section className="py-16 md:py-24 bg-[#FAF9F6]">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Header Section */}
        <div className="text-center max-w-[750px] mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white border border-zinc-200 rounded-full pl-2 pr-5 py-1.5 mb-6 shadow-sm">
            <span className="size-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs md:text-[0.85rem] font-bold text-brand-dark uppercase tracking-wider font-stack-sans">
              Our Services
            </span>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((action, index) => {
            const Icon = action.IconComponent; // Extract component for rendering
            
            return (
              <div 
                key={index} 
                className="group flex flex-col h-full rounded-[1.5rem] overflow-hidden bg-white border border-zinc-100 shadow-lg transition-all duration-500 hover:shadow-2xl"
              >
                <Link href={`/services/${action.slug}`} className="flex flex-col flex-grow">
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
                    {/* Flower Opening Icon Container */}
                    <div className="relative size-16 mb-6 flex items-center justify-center shrink-0 rounded-full bg-[#fdd835] overflow-hidden">
                      {/* Dark circle expanding from center on CARD hover */}
                      <div className="absolute inset-0 bg-brand-dark scale-0 rounded-full transition-transform duration-500 ease-in-out origin-center group-hover:scale-100" />
                      
                      {/* Lucide Icon */}
                      <Icon 
                        className="size-6 relative z-10 text-brand-dark transition-colors duration-500 group-hover:text-white" 
                        strokeWidth={2}
                      />
                    </div>

                    <h3 className="font-headline font-bold text-2xl mb-4 text-brand-dark">
                      {action.title}
                    </h3>
                    <p className="font-stack-sans text-brand-dark/70 text-base leading-relaxed line-clamp-3">
                      {action.text}
                    </p>
                  </div>

                  {/* Button Footer - Independent Hover */}
                  <div className="relative w-full py-5 px-6 bg-[#fdd835] overflow-hidden group/btn">
                    {/* Background fill on BUTTON hover only */}
                    <div className="absolute inset-0 bg-brand-dark translate-x-[-101%] transition-transform duration-500 ease-in-out group-hover/btn:translate-x-0" />
                    
                    <span className="relative z-10 flex items-center justify-center gap-2 font-bold text-brand-dark transition-colors duration-500 group-hover/btn:text-white">
                      Read More
                      <ArrowUpRight className="size-5 transition-transform duration-500 group-hover/btn:rotate-45" />
                    </span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}