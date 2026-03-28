"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import programs from "@/data/ngo-programs.json";

// Swiper Styles
import "swiper/css";
import "swiper/css/navigation";

export default function NGOPrograms() {
  return (
    <section className="py-20 lg:py-20 bg-[#FAF9F6] overflow-hidden font-stack-sans">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
        {/* --- HEADER SECTION --- */}
        <div className="text-center flex flex-col items-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#f0c040] animate-pulse"></span>
            <span className="text-[#0e2218]/70 text-[12px] md:text-[13px] font-bold uppercase tracking-widest">
              Our Programs
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#0e2218] leading-[1.15] md:leading-[1.1] mb-6 max-w-4xl tracking-tight">
            Action-led social programs
          </h2>

          <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto px-4">
            Our programs focus on improving lives, empowering communities, and
            creating long-term solutions for a brighter and more sustainable
            future.
          </p>
        </div>

        {/* --- CAROUSEL SECTION --- */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            navigation={{
              prevEl: ".nav-prev",
              nextEl: ".nav-next",
            }}
            loop={true}
            spaceBetween={20} // Smaller gap for mobile
            // breakpoints for precise responsiveness
            breakpoints={{
              0: {
                slidesPerView: 1.1, // Shows a peek of the next card on mobile
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            // Force equal height across all slides
            autoHeight={false}
            className="!pb-12 h-full"
          >
            {programs.map((program) => (
              <SwiperSlide key={program.id} className="!h-auto">
                {/* h-full ensures all cards stretch to the tallest card's height */}
                <div className="group/card relative bg-white rounded-[2.5rem] p-4 md:p-5 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100 hover:border-[#0e2218]/10 flex flex-col h-full">
                  {/* Image Wrapper */}
                  <div className="relative aspect-[4/5] rounded-[1.8rem] overflow-hidden mb-6 md:mb-8 flex-shrink-0">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e2218]/80 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-all duration-500" />
                  </div>

                  {/* Program Info */}
                  <div className="px-2 md:px-3 pb-4 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-10 md:w-12 h-[2.5px] bg-[#f0c040]"></span>
                      <p className="text-[#0e2218] text-[11px] md:text-[12px] font-bold uppercase tracking-widest">
                        {program.category}
                      </p>
                    </div>

                    <h3 className="text-[#0e2218] text-xl md:text-2xl lg:text-2xl font-extrabold group-hover/card:text-[#f0c040] transition-colors duration-300 leading-snug">
                      {program.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-6 md:gap-8 mt-10 md:mt-12">
            <button className="nav-prev w-12 h-12 md:w-14 md:h-14 rounded-full border border-gray-200 flex items-center justify-center text-[#0e2218] hover:bg-[#f0c040] hover:text-[#0e2218] hover:border-[#f0c040] transition-all duration-300 group cursor-pointer bg-white">
              <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-x-1 transition-transform" />
            </button>
            <div className="w-1.5 h-1.5 rounded-full bg-[#f0c040]"></div>
            <button className="nav-next w-12 h-12 md:w-14 md:h-14 rounded-full border border-gray-200 flex items-center justify-center text-[#0e2218] hover:bg-[#f0c040] hover:text-[#0e2218] hover:border-[#f0c040] transition-all duration-300 group cursor-pointer bg-white">
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
