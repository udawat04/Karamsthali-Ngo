"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ContributorData = [
  {
    name: 'Bhuvan Bam',
    role: 'CEO, Y-Combinator',
    image: '',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis explicabo ducimus natus iusto voluptatibus voluptas rem ullam a, consequatur aut!'
  },
  {
    name: 'Aashish Chanchlani',
    role: 'CEO, YouTube',
    image: '',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis explicabo ducimus natus iusto voluptatibus voluptas rem ullam a, consequatur aut!'  
  },
  {
    name: 'Carry Minati',
    role: 'CEO, Big-Boss',
    image: '',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis explicabo ducimus natus iusto voluptatibus voluptas rem ullam a, consequatur aut!'  
  }
];

export default function BiggestContributor() {
  return (
    <section className="relative py-20 lg:py-32 w-full bg-brand-dark font-stack-sans overflow-hidden z-0">
      
      {/* Premium Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[800px] h-[80vw] max-h-[800px] bg-primary/5 rounded-full blur-[100px] md:blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-[1320px] mx-auto px-5 md:px-7 lg:px-10 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-h2 font-bold text-white tracking-tight">
            Hear from our <span className="relative inline-block pb-2">
              Biggest
              <span className="absolute left-0 bottom-0 w-full h-1 md:h-1.5 bg-primary rounded-full"></span>
            </span> Contributors
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="max-w-6xl mx-auto relative px-0">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            pagination={{ 
              el: '.swiper-pagination-custom',
              clickable: true,
            }}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            loop={true}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            spaceBetween={40}
            className="w-full"
            style={{
              '--swiper-pagination-color': 'var(--color-primary, #f0c040)',
              '--swiper-pagination-bullet-inactive-color': '#ffffff',
              '--swiper-pagination-bullet-inactive-opacity': '0.2',
              '--swiper-pagination-bullet-size': '12px',
              '--swiper-pagination-bullet-horizontal-gap': '8px',
            } as React.CSSProperties}
          >
            {ContributorData.map((contributor, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 lg:gap-24 w-full">
                  
                  {/* Image Container */}
                  <div className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 shrink-0 rounded-full p-2 border border-white/20 bg-white/5 relative flex items-center justify-center shadow-[0_0_50px_rgba(0,0,0,0.15)]">
                    <div className="w-full h-full rounded-full overflow-hidden relative bg-brand-dark/30 flex items-center justify-center">
                      {contributor.image ? (
                        <Image 
                          src={contributor.image} 
                          alt={contributor.name} 
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 224px, (max-width: 1024px) 288px, 320px"
                        />
                      ) : (
                        <span className="text-white/30 text-xl font-medium tracking-wider">No Image</span>
                      )}
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 max-w-2xl text-center md:text-left flex flex-col items-center md:items-start">
                    <p className="text-white/90 text-[1.15rem] md:text-2xl lg:text-[1.75rem] leading-[1.6] md:leading-[1.7] italic mb-8 md:mb-10 font-light">
                      &ldquo;{contributor.description}&rdquo;
                    </p>
                    
                    <h3 className="text-h3 font-bold text-primary mb-2 md:mb-3">
                      {contributor.name}
                    </h3>
                    
                    <span className="text-white/70 text-sm md:text-base tracking-[0.2em] uppercase font-bold">
                      {contributor.role}
                    </span>
                  </div>
                  
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Bottom Center Controls (Pagination + Navigation) */}
          <div className="flex items-center justify-center gap-6 md:gap-8 mt-16 md:mt-24">
            <button className="swiper-button-prev-custom w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-primary text-brand-dark hover:bg-white hover:text-brand-dark hover:scale-105 transition-all shadow-btn-yellow z-10 shrink-0">
              <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2.5} />
            </button>
            
            {/* Custom Pagination Container */}
            <div className="swiper-pagination-custom flex items-center justify-center min-w-[80px]" />
            
            <button className="swiper-button-next-custom w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-primary text-brand-dark hover:bg-white hover:text-brand-dark hover:scale-105 transition-all shadow-btn-yellow z-10 shrink-0">
              <ChevronRight className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2.5} />
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
}