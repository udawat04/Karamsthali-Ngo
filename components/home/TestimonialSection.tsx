"use client";

import React from "react";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Annette Black",
    role: "Community Volunteer",
    text: "Being part of this organization has been truly life change. The team's compassion, transparency & commitment to real impact made me feel proud to contribute my time and skills.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&auto=format&fit=crop",
    stars: 5,
  },
  {
    id: 2,
    name: "Jane Cooper",
    role: "Long-Term Supporter",
    text: "Working with this organization has been life changing. Their commit-ment to transparency & community development is genuine, and the impact they create is visible at every level.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
    stars: 5,
  },
  {
    id: 3,
    name: "Joseph Willison",
    role: "Local Partner",
    text: "From education programs to women empowerment initiatives, every project is thoughtfully planned and responsibly executed. It's inspiring to be part of something so meaningful.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop",
    stars: 5,
  },
  {
    id: 4,
    name: "Cameron Williamson",
    role: "Major Donor",
    text: "I am amazed by the efficiency and heart of this team. They ensure that every dollar goes exactly where it's needed most, and the results speak for themselves.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop",
    stars: 5,
  },
  {
    id: 5,
    name: "Brooklyn Simmons",
    role: "Volunteer Coordinator",
    text: "The spirit of collaboration here is unmatched. It's not just about giving; it's about building a sustainable future together with the community.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop",
    stars: 5,
  }
];

export default function TestimonialSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-white overflow-hidden font-stack-sans">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0e2218 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-[1320px] mx-auto px-5 md:px-7 lg:px-10 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-100 bg-white shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-brand-dark/80 text-sm font-medium">Our Testimonials</span>
            </div>
            <h2 className="text-h2 font-extrabold font-headline text-brand-dark leading-[1.1] tracking-tight mb-6">
              Voices of Real Peoples
            </h2>
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-xl">
              Hear directly from the people, volunteers, and partners whose lives have been touched by our work and who continue to believe in our mission.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-4 pb-2">
            <button className="testimonial-prev w-12 h-12 md:w-14 md:h-14 rounded-full border border-brand-dark flex items-center justify-center text-brand-dark hover:bg-primary hover:border-primary transition-all cursor-pointer group">
              <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:-translate-x-1" strokeWidth={1.5} />
            </button>
            <button className="testimonial-next w-12 h-12 md:w-14 md:h-14 rounded-full border border-brand-dark flex items-center justify-center text-brand-dark hover:bg-primary hover:border-primary transition-all cursor-pointer group">
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <div className="w-full">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            spaceBetween={30}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 1.5 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-16 testimonial-swiper !px-4 overflow-hidden"
            style={{overflow:"hidden !important"}}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="h-auto overflow-hidden">
                {({ isActive }) => (
                  <div
                    className={`h-full p-8 md:p-10 rounded-[2.5rem] transition-all duration-700 flex flex-col justify-between border ${
                      isActive
                        ? "bg-primary text-brand-dark  border-transparent rounded-2xl scale-105 z-10"
                        : "bg-[#f8f9f8] text-brand-dark border-gray-100/50 hover:border-primary/20"
                    }`}
                  >
                    <div>
                      {/* Star Rating */}
                      <div className="flex gap-1 mb-8">
                        {[...Array(testimonial.stars)].map((_, i) => (
                          <Star
                            key={i}
                            className={`size-5 fill-current ${
                              isActive ? "text-brand-dark" : "text-primary"
                            }`}
                          />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <blockquote className="mb-10">
                        <p className={`text-xl md:text-2xl font-bold leading-tight ${
                          isActive ? "text-brand-dark" : "text-brand-dark/90"
                        }`}>
                          &ldquo;{testimonial.text}&rdquo;
                        </p>
                      </blockquote>
                    </div>

                    <div>
                      {/* Divider */}
                      <div className={`w-full h-px mb-8 ${
                        isActive ? "bg-brand-dark/10" : "bg-gray-200"
                      }`} />

                      {/* Profile Section */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`relative size-14 rounded-full overflow-hidden border-2 transition-colors duration-500 ${
                            isActive ? "border-brand-dark/20" : "border-white shadow-sm"
                          }`}>
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-bold text-lg leading-none mb-1">{testimonial.name}</h4>
                            <p className={`text-sm transition-colors duration-500 ${
                              isActive ? "text-brand-dark/70" : "text-gray-500"
                            }`}>
                              {testimonial.role}
                            </p>
                          </div>
                        </div>

                        <div className={`size-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                          isActive 
                            ? "bg-brand-dark text-primary" 
                            : "bg-primary text-brand-dark"
                        }`}>
                          <Quote className="size-6 rotate-180 fill-current" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      
      <style jsx global>{`
        .testimonial-swiper .swiper-slide {
          height: auto !important;
          display: flex !important;
          padding-top: 2rem;
          padding-bottom: 2rem;
        }
        .testimonial-swiper {
          overflow: visible !important;
        }
      `}</style>
    </section>
  );
}
