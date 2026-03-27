'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, MessageCircle, ArrowLeft, ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import teamMembers from '@/data/our-team.json';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function TeamSection() {
  return (
    <section className="py-20 lg:py-20 bg-white overflow-hidden font-stack-sans">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1320px]">
        {/* Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-100 bg-white shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-brand-dark/70 text-[13px] font-bold uppercase tracking-widest">
              Our Expert Team
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-dark mb-8 leading-tight max-w-4xl mx-auto">
            People Behind our Mission
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Our team brings together passionate professionals, volunteers, and leaders who work tirelessly 
            to drive positive social change & create lasting impact in communities.
          </p>
        </div>

        {/* Swiper Slider */}
        <div className="relative group">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            navigation={{
              prevEl: ".team-prev",
              nextEl: ".team-next",
            }}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            spaceBetween={30}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 3 },
            }}
            className="pb-16! team-swiper"
          >
            {teamMembers.map((member) => (
              <SwiperSlide key={member.id}>
                <Link href={`/team/${member.id}`} className="block group/card">
                  <div className="relative aspect-4/5 rounded-[2.5rem] overflow-hidden bg-gray-100 group-hover:shadow-2xl transition-all duration-700">
                    {/* Image */}
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-linear-to-t from-brand-dark/90 via-transparent to-transparent opacity-80 group-hover/card:opacity-90 transition-opacity duration-500" />

                    {/* Social Icons (Top Right) */}
                    <div className="absolute top-6 right-6 flex flex-col gap-3 translate-x-12 opacity-0 group-hover/card:translate-x-0 group-hover/card:opacity-100 transition-all duration-500">
                      <div className="p-2.5 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-primary hover:text-brand-dark transition-colors cursor-pointer">
                        <Facebook size={18} />
                      </div>
                      <div className="p-2.5 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-primary hover:text-brand-dark transition-colors cursor-pointer">
                        <Instagram size={18} />
                      </div>
                      <div className="p-2.5 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-primary hover:text-brand-dark transition-colors cursor-pointer">
                        <Linkedin size={18} />
                      </div>
                      <div className="p-2.5 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-primary hover:text-brand-dark transition-colors cursor-pointer">
                        <MessageCircle size={18} />
                      </div>
                    </div>

                    {/* Content (Bottom Left) */}
                    <div className="absolute bottom-10 left-10 right-10">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        <p className="text-white/80 text-sm font-medium uppercase tracking-widest">{member.role}</p>
                      </div>
                      <h3 className="text-white text-2xl font-bold group-hover/card:text-primary transition-colors duration-300">
                        {member.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <div className="flex justify-center items-center gap-6 mt-10">
            <button className="team-prev w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-brand-dark hover:bg-primary hover:border-primary transition-all duration-500 group">
              <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button className="team-next w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-brand-dark hover:bg-primary hover:border-primary transition-all duration-500 group">
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        .team-swiper .swiper-slide {
          height: auto !important;
          transition: all 0.7s ease;
        }
      `}</style>
    </section>
  );
}
