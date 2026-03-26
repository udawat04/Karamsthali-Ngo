"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Swiper Styles
import "swiper/css";
import "swiper/css/navigation";

const programs = [
  {
    id: 1,
    title: "Community Empowerment Program",
    category: "Social Impact",
    image: "https://img.freepik.com/free-photo/mother-daughter-preparing-plant-tree-woods_482257-91250.jpg", // Rural Indian community gathering
  },
  {
    id: 2,
    title: "Education & Awareness Initiative",
    category: "Public Health",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=800&auto=format&fit=crop", // Indian village education context
  },
  {
    id: 3,
    title: "Health & Well-Being Program",
    category: "Social Justice",
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=800&auto=format&fit=crop", // Healthcare for Indian elderly
  },
  {
    id: 4,
    title: "Cow Protection & Gaushala",
    category: "Animal Welfare",
    image: "https://images.unsplash.com/photo-1588610376510-7216664e432f?q=80&w=800&auto=format&fit=crop", // Authentic Indian Gaushala
  },
  {
    id: 5,
    title: "Women's Skill Development",
    category: "Empowerment",
    image: "https://images.unsplash.com/photo-1610214415758-5c230c14909f?q=80&w=800&auto=format&fit=crop", // Indian women self-help group
  },
];

export default function NGOPrograms() {
  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6">
        
        {/* --- HEADER SECTION (Perfectly Centered like the Image) --- */}
        <div className="text-center flex flex-col items-center mb-20">
          {/* Subtle Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white mb-8">
            <span className="w-2 h-2 rounded-full bg-[#f0c040]"></span>
            <span className="text-gray-500 text-[13px] font-medium font-stack-sans tracking-wide">
              Our Programs
            </span>
          </div>
          
          {/* Main Title - Using your --font-headline and --color-brand-dark */}
          <h2 className="text-h2 font-bold text-[#0e2218] leading-[1.05] tracking-tight mb-8 font-headline max-w-4xl">
            Action-led social programs
          </h2>
          
          {/* Subtext - Max-width used to control line breaks like image */}
          <p className="text-gray-500 text-lg md:text-xl font-stack-sans leading-relaxed max-w-2xl mx-auto">
            Our programs focus on improving lives, empowering communities, and creating long-term 
            solutions that lead to a brighter and more sustainable future for all.
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
            spaceBetween={30}
            breakpoints={{
              0: { slidesPerView: 1.2, spaceBetween: 20 },
              768: { slidesPerView: 2.2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
            }}
            className="!pb-20 overflow-visible"
          >
            {programs.map((program) => (
              <SwiperSlide key={program.id}>
                <div className="flex flex-col items-center group">
                  
                  {/* Image Card - Ultra rounded corners (2.5rem / 40px) */}
                  <div className="w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8 shadow-sm transition-all duration-700 group-hover:shadow-2xl">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>

                  {/* Category Pill - Exact styling from image */}
                  <div className="mb-4">
                    <span className="px-6 py-1.5 rounded-full border border-gray-200 bg-white text-gray-500 text-[14px] font-stack-sans">
                      {program.category}
                    </span>
                  </div>

                  {/* Card Title - Heavy font and dark green */}
                  <h3 className="text-2xl md:text-3xl font-bold text-[#0e2218] text-center font-headline leading-snug">
                    {program.title}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Premium Navigation Controls at Bottom Center */}
          <div className="flex justify-center items-center gap-8 mt-4">
            <button className="nav-prev w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-[#0e2218] hover:bg-[#f0c040] hover:border-[#f0c040] transition-all duration-300 group cursor-pointer">
              <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            </button>
            <div className="w-1.5 h-1.5 rounded-full bg-[#f0c040]"></div>
            <button className="nav-next w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-[#0e2218] hover:bg-[#f0c040] hover:border-[#f0c040] transition-all duration-300 group cursor-pointer">
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* Applying your custom global font variables */
        .font-headline {
          font-family: var(--font-headline), sans-serif;
        }
        .font-stack-sans {
          font-family: var(--font-stack-sans), ui-sans-serif, system-ui, sans-serif;
        }
      `}</style>
    </section>
  );
}