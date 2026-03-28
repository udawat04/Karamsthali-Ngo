"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const ContributorData = [
  {
    name: 'Melinda French Gates',
    role: 'Co-Chair, Gates Foundation',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2070&auto=format&fit=crop',
    description: 'Philanthropy is about using every tool at our disposal—our voices, our networks, and our advocacy—to ensure every person has the chance to live a healthy life.'
  },
  {
    name: 'Azim Premji',
    role: 'Founder, Azim Premji Foundation',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2070&auto=format&fit=crop',
    description: 'The real strength of an organization lies in its values. Investing in education is the most powerful way to build a sustainable and equitable future.'
  },
  {
    name: 'Ratan Tata',
    role: 'Chairman Emeritus, Tata Trusts',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
    description: 'Upskilling our youth and providing quality healthcare are the two pillars of nation-building. We must strive to touch the lives of those left behind.'
  },
  {
    name: 'Carry Minati',
    role: 'CEO, Big-Boss',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis explicabo ducimus natus iusto voluptatibus voluptas rem ullam a, consequatur aut!'  
  }
];

export default function BiggestContributor() {
  return (
    <section className="relative py-16 lg:py-24 w-full bg-[#F9FAFB] font-stack-sans overflow-hidden">
      
      {/* --- Subtle Pattern for Light Background --- */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none"
           style={{
             backgroundImage: `linear-gradient(#f0c040 1.5px, transparent 1.5px), linear-gradient(90deg, #f0c040 1.5px, transparent 1.5px)`,
             backgroundSize: '40px 40px',
             maskImage: 'radial-gradient(circle at center, black, transparent 90%)'
           }} 
      />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-10">
        
        {/* Compact Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[2px] bg-[#f0c040]"></span>
              <span className="text-[#6B7280] text-xs font-bold uppercase tracking-[0.2em]">Our Impact Partners</span>
            </div>
            <h2 className="text-h2 font-bold text-[#1F2933] tracking-tight">
              Hear from our <span className="relative inline-block pb-2">
                Biggest
                <span className="absolute left-0 bottom-0 w-full h-1 md:h-1.5 bg-[#f0c040] rounded-full"></span>
              </span> Contributors
            </h2>
          </div>
          
          <div className="hidden md:flex items-center gap-3">
            <button className="swiper-prev-btn w-12 h-12 rounded-full border border-[#1F2933]/10 flex items-center justify-center text-[#1F2933] hover:bg-[#f0c040] hover:border-[#f0c040] transition-all duration-300 cursor-pointer">
              <ChevronLeft size={20} />
            </button>
            <button className="swiper-next-btn w-12 h-12 rounded-full border border-[#1F2933]/10 flex items-center justify-center text-[#1F2933] hover:bg-[#f0c040] hover:border-[#f0c040] transition-all duration-300 cursor-pointer">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Pagination, Navigation, Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          navigation={{ prevEl: '.swiper-prev-btn', nextEl: '.swiper-next-btn' }}
          pagination={{ clickable: true, el: '.swiper-pagination-bars' }}
          loop={true}
          autoplay={{ delay: 7000 }}
          className="w-full"
        >
          {ContributorData.map((person, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                
                {/* Scaled Image Side */}
                <div className="lg:col-span-4 relative">
                  <div className="relative aspect-[3.5/4] max-w-[340px] mx-auto lg:mx-0 rounded-[1.5rem] overflow-hidden border border-[#1F2933]/5 shadow-xl">
                    <Image 
                      src={person.image} 
                      alt={person.name} 
                      fill
                      className="object-cover"
                    />
                    {/* Gradient overlay blends into Off White background */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#F9FAFB]/40 via-transparent to-transparent" />
                  </div>
                  <div className="absolute -bottom-4 -right-2 bg-[#f0c040] p-4 rounded-xl shadow-lg hidden lg:block">
                    <Quote size={24} className="text-[#111111]" fill="currentColor" />
                  </div>
                </div>

                {/* Scaled Text Side */}
                <div className="lg:col-span-8 flex flex-col justify-center text-center lg:text-left">
                  <p className="text-[#1F2933] text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed mb-8 max-w-3xl">
                    &ldquo;{person.description}&rdquo;
                  </p>
                  
                  <div>
                    <h3 className="text-[#d4a832] text-2xl md:text-3xl font-bold mb-1">
                      {person.name}
                    </h3>
                    <p className="text-[#6B7280] text-sm md:text-base font-bold tracking-widest uppercase">
                      {person.role}
                    </p>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation & Pagination */}
        <div className="flex flex-col items-center mt-12">
          <div className="swiper-pagination-bars flex gap-2 !static" />
        </div>

      </div>

      <style jsx global>{`
        .swiper-pagination-bars .swiper-pagination-bullet {
          width: 30px;
          height: 3px;
          border-radius: 1px;
          background: rgba(31, 41, 51, 0.1) !important;
          opacity: 1;
          transition: all 0.4s ease;
        }
        .swiper-pagination-bars .swiper-pagination-bullet-active {
          background: #f0c040 !important;
          width: 60px;
        }
      `}</style>
    </section>
  );
}