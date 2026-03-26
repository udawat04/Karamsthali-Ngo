"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const ACTIONS = [
  {
    title: "Community Development",
    text: "Strengthening local communities through education programs & skill-building",
    theme: "light",
    bgImage: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2070&auto=format&fit=crop",
    icon: (
      <svg className="size-6 text-brand-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <circle cx="12" cy="11" r="3" />
      </svg>
    )
  },
  {
    title: "Education & Awareness",
    text: "Delivering awareness campaigns, training sessions, & educational initiatives",
    theme: "light",
    bgImage: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop",
    icon: (
      <svg className="size-6 text-brand-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
        <circle cx="12" cy="16" r="1" fill="currentColor" />
      </svg>
    )
  },
  {
    title: "Human Rights Advocacy",
    text: "Social justice, legal support, & policy reforms that protect marginalized populations",
    theme: "light",
    bgImage: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop",
    icon: (
      <svg className="size-6 text-brand-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    )
  }
];

export default function OurActions() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-10">
        
        {/* Header Section */}
        <div className="text-center max-w-[750px] mx-auto mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-zinc-50 border border-zinc-200 rounded-full pl-2 pr-5 py-1.5 mb-6 shadow-sm">
            <span className="size-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs md:text-[0.85rem] font-bold text-brand-dark uppercase tracking-wider">Our Services</span>
          </div>
          <h2 className="font-headline font-extrabold text-brand-dark text-h2 mb-6">
            Our Actions for <span className="text-primary">Social Change</span>
          </h2>
          <p className="font-stack-sans text-brand-dark/60 leading-relaxed text-base md:text-lg">
            We turn compassion into action by implementing community-led programs, advocating for
            social justice, and promoting education, health, and equality.
          </p>
        </div>

        {/* Cards Grid */}
        {/* md:grid-cols-2 for Tablet, lg:grid-cols-3 for Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {ACTIONS.map((action, index) => (
            <div 
              key={index} 
              className={cn(
                "rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between min-h-[400px] md:h-[450px] relative overflow-hidden group transition-all duration-500",
                "bg-zinc-50 border border-zinc-100 hover:shadow-2xl hover:shadow-primary/10",
                // Special case for the 3rd card on tablet to span full width if you want to avoid the gap
                index === 2 ? "md:col-span-2 lg:col-span-1" : "" 
              )}
            >
              {/* Hover Image Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out opacity-0 scale-110 group-hover:opacity-100 group-hover:scale-100 z-0"
                style={{ backgroundImage: `url('${action.bgImage}')` }}
              />
              
              {/* Dark Gradient Overlay (Only visible on hover or dark theme) */}
              <div className={cn(
                "absolute inset-0 transition-opacity duration-500 z-[1]",
                action.theme === "dark" ? "bg-brand-dark/80 opacity-100" : "bg-brand-dark/70 opacity-0 group-hover:opacity-100"
              )} />

              {/* Content Container */}
              <div className="relative z-10 flex flex-col h-full pointer-events-none">
                {/* Icon Circle */}
                <div className="size-14 md:size-16 rounded-full bg-primary flex items-center justify-center mb-8 md:mb-10 shadow-lg shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  {action.icon}
                </div>

                <div className="mt-auto">
                  <h3 className={cn(
                    "font-headline font-bold text-2xl md:text-3xl mb-4 leading-tight transition-colors duration-500",
                    action.theme === "light" ? "text-brand-dark group-hover:text-white" : "text-white"
                  )}>
                    {action.title}
                  </h3>
                  <p className={cn(
                    "font-stack-sans leading-relaxed text-sm md:text-base mb-8 line-clamp-3 transition-colors duration-500",
                    action.theme === "light" ? "text-brand-dark/60 group-hover:text-white/80" : "text-white/80"
                  )}>
                    {action.text}
                  </p>
                </div>

                {/* Footer Link */}
                <div className={cn(
                  "pt-6 mt-auto border-t transition-all duration-500 pointer-events-auto",
                  action.theme === "light" ? "border-brand-dark/10 group-hover:border-white/20" : "border-white/20 group-hover:border-primary/50"
                )}>
                  <Link href="/services" className={cn(
                    "inline-flex items-center gap-2 font-extrabold text-sm md:text-base group/link transition-colors duration-500",
                    action.theme === "light" ? "text-brand-dark group-hover:text-white" : "text-white group-hover:text-primary"
                  )}>
                    Read More
                    <ArrowUpRight className="size-4 md:size-5 arrow-animate" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}