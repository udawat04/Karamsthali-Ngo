"use client";

import React from "react";
import Link from "next/link";
import { Utensils, TreeDeciduous, HeartHandshake, PawPrint, ArrowUpRight } from "lucide-react";

const workItems = [
  {
    icon: <Utensils className="w-7 h-7" />,
    title: "Feeding Childrens",
  },
  {
    icon: <TreeDeciduous className="w-7 h-7" />,
    title: "Tree Planting",
  },
  {
    icon: <PawPrint className="w-7 h-7" />,
    title: "Cow & Animal Care",
  },
  {
    icon: <HeartHandshake className="w-7 h-7" />,
    title: "Old Age Care",
  },
];

export default function AboutUsSpotlight() {
  return (
    <section className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-24 items-center">

          {/* ── LEFT: Image Composition ── */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            {/*
              Padding-bottom trick keeps the box in a fixed aspect ratio
              so it never overflows the column at any breakpoint.
            */}
            <div className="relative w-full" style={{ paddingBottom: "115%" }}>

              {/* ① Awaikenthemes hand/people PNG — top-left watermark */}
              <img
                src="https://html.awaikenthemes.com/aasha/images/about-us-image-box-bg-prime.png"
                alt=""
                aria-hidden="true"
                className="absolute top-0 left-0 w-[55%] opacity-90 pointer-events-none select-none z-0"
              />

              {/* ② Main tall photo — pushed right & down so hands peek top-left */}
              <div
                className="absolute z-10 overflow-hidden rounded-[2rem] shadow-2xl"
                style={{ top: "6%", left: "14%", right: "0%", bottom: "12%" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop"
                  alt="NGO Impact India"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* ③ Small overlapping photo — bottom-left corner */}
              <div
                className="absolute z-20 overflow-hidden rounded-[1.5rem] border-[7px] border-white shadow-2xl"
                style={{ bottom: "0%", left: "0%", width: "46%", aspectRatio: "1 / 1" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600&auto=format&fit=crop"
                  alt="Children Nutrition"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>

          {/* ── RIGHT: Content (unchanged) ── */}
          <div className="lg:col-span-7 flex flex-col items-start order-1 lg:order-2">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-100 bg-white shadow-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-brand-dark/70 text-[13px] font-bold uppercase tracking-widest font-stack-sans">
                About Us
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-h2 font-extrabold text-brand-dark leading-[1.05] tracking-tight mb-8 font-headline">
              Championing Causes <br className="hidden md:block" /> that Truly Matter
            </h2>

            {/* Description */}
            <p className="text-gray-500 text-lg md:text-xl font-stack-sans leading-relaxed mb-12 max-w-2xl">
              We are dedicated to addressing the most pressing social challenges affecting our
              communities. Through advocacy, grassroots action, and sustainable development.
            </p>

            {/* Work Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 mb-16 w-full">
              {workItems.map((item, index) => (
                <div key={index} className="flex items-center gap-6 group">
                  <div className="flex-shrink-0 w-[72px] h-[72px] rounded-full bg-primary flex items-center justify-center text-brand-dark shadow-sm transition-transform duration-500 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-brand-dark font-headline leading-tight">
                    {item.title}
                  </h4>
                </div>
              ))}
            </div>

           <Link 
            href="/services" 
            className="group relative overflow-hidden inline-flex items-center gap-2 bg-primary text-brand-dark font-bold px-7 py-4 rounded-lg shadow-btn-yellow hover:shadow-none transition-all duration-300 mt-6 md:mt-8"
          >
            {/* Background Sweep from Left to Right */}
            <span className="absolute inset-0 bg-brand-dark w-0 group-hover:w-full transition-all duration-300 ease-out z-0" />
            
            {/* Button Content */}
            <span className="relative z-10 group-hover:text-white flex items-center gap-2 transition-colors duration-300">
              Learn More About
              <ArrowUpRight className="w-5 h-5 shrink-0 transition-transform duration-300 group-hover:rotate-45" strokeWidth={2.5} />
            </span>
          </Link>
          </div>

        </div>
      </div>

      <style jsx global>{`
        .font-headline   { font-family: var(--font-headline),   sans-serif; }
        .font-stack-sans { font-family: var(--font-stack-sans), sans-serif; }
      `}</style>
    </section>
  );
}