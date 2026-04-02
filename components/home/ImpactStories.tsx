"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

import impactStories from "@/data/impact-stories.json";

export default function ImpactStories() {
  return (
    <section className="relative w-full overflow-hidden py-20 md:py-32 bg-brand-dark" id="impact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-8">
          
          <div className="max-w-2xl">
            {/* Pill Tag using Tailwind v4 theme variables directly */}
            <div className="inline-block px-5 py-2 rounded-full border border-primary text-primary text-xs md:text-sm font-semibold tracking-widest uppercase mb-6 md:mb-8">
              Real Stories
            </div>
            
            {/* Titles */}
            <h2 className="text-[32px] md:text-[48px] lg:text-[56px] font-bold text-white mb-4 md:mb-6 leading-tight">
              When Change Becomes Personal
            </h2>
            <p className="text-gray-300 text-base md:text-[18px]">
              Discover the journeys shaped by our work across communities.
            </p>
          </div>
          
          {/* Custom Navigation Arrows (Top Right on Desktop) */}
          <div className="flex items-center gap-4 pb-2">
            <button className="impact-prev w-12 h-12 md:w-14 md:h-14 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-brand-dark transition-all cursor-pointer">
              <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
            </button>
            <button className="impact-next w-12 h-12 md:w-14 md:h-14 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-brand-dark transition-all cursor-pointer">
              <ArrowRight className="size-4 transition-transform group-hover/link:translate-x-1" strokeWidth={2.5} />
            </button>
          </div>
          
        </div>

        {/* Swiper Slider Section */}
        <div className="w-full">
          <Swiper
            modules={[Autoplay, Navigation]}
            navigation={{
              prevEl: ".impact-prev",
              nextEl: ".impact-next",
            }}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            spaceBetween={24}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1.2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 32,
              },
            }}
            className="!pb-8"
          >
            {impactStories.map((story) => (
              <SwiperSlide key={story.id}>
                {/* Horizontal Card Layout fully responsive */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col sm:flex-row h-auto sm:h-[320px] md:h-[340px] lg:h-[360px]">
                  
                  {/* Left Side: Image */}
                  <div className="relative w-full sm:w-[45%] h-64 sm:h-full shrink-0">
                    <Image
                      src={story.image}
                      alt={story.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                  
                  {/* Right Side: Content Box */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow justify-between bg-white relative">
                    
                    {/* Text Area */}
                    <div>
                      <h3 className="text-xl md:text-[22px] lg:text-[26px] font-bold text-brand-dark mb-3 leading-[1.3]">
                        {story.name}'s {story.title}
                      </h3>
                      <p className="text-gray-600 text-[15px] md:text-base leading-relaxed line-clamp-4">
                        {story.shortDescription}
                      </p>
                    </div>
                    
                    {/* Read More Button with Theme Colors */}
                    <div className="mt-6">
                      <Link
                        href={`/impact-stories/${story.id}`}
                        className="bg-brand-dark hover:bg-brand-800 transition-colors rounded-full text-white inline-flex items-center justify-between pl-6 pr-2 py-2 gap-4 group w-max"
                      >
                        <span className="font-medium text-sm md:text-base tracking-wide">
                          Read More
                        </span>
                        {/* Primary yellow inner circle */}
                        <div className="w-[34px] h-[34px] md:w-[44px] md:h-[44px] rounded-full bg-primary flex items-center justify-center text-brand-dark group-hover:scale-105 transition-transform">
                          <ArrowRight className="w-4 h-4 md:w-5 md:h-5" strokeWidth={2} />
                        </div>
                      </Link>
                    </div>

                  </div>
                  
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
