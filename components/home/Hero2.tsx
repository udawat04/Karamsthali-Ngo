"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { cn } from "@/lib/utils";

const SLIDES = [
  { bg: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1920" },
  { bg: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1920" },
];

const SwiperNavButtons = () => {
  const swiper = useSwiper();
  return (
    <>
      {/* Left Button */}
      <button 
        onClick={() => swiper.slidePrev()} 
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-60 size-12 lg:size-16 bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-primary hover:text-brand-dark rounded-full flex items-center justify-center transition-all cursor-pointer shadow-lg hover:shadow-btn-yellow"
        aria-label="Previous slide"
      >
        <ArrowLeft className="size-6 lg:size-8" />
      </button>
      {/* Right Button */}
      <button 
        onClick={() => swiper.slideNext()} 
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-60 size-12 lg:size-16 bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-primary hover:text-brand-dark rounded-full flex items-center justify-center transition-all cursor-pointer shadow-lg hover:shadow-btn-yellow"
        aria-label="Next slide"
      >
        <ArrowRight className="size-6 lg:size-8" />
      </button>
    </>
  );
};

export default function HeroSection2() {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] lg:h-[90vh] bg-[#0a1811] overflow-hidden">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        effect="fade"
        speed={1000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full relative"
      >
        {SLIDES.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            {/* Background Image Container */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 ease-linear hover:scale-105"
              style={{ backgroundImage: `url('${slide.bg}')` }}
            >
              {/* Subtle overlay for better button visibility if needed */}
              <div className="absolute inset-0 bg-black/10 transition-all duration-700 hover:bg-black/0" />
            </div>

            {/* Content Container (Just the button placed at the bottom center) */}
            <div className="relative z-10 w-full h-full flex items-end justify-center pb-20 lg:pb-32 px-6">
              <Link
                href="/donate"
                className={cn(
                  "group inline-flex items-center gap-3",
                  "font-bold text-lg lg:text-xl px-8 py-4 lg:px-10 lg:py-5 rounded-2xl",
                  "transition-all duration-300",
                  "bg-primary text-brand-dark",
                  "hover:bg-primary-light hover:-translate-y-1",
                  "shadow-btn-yellow hover:shadow-btn-yellow-hover"
                )}
              >
                <span>Donate and Save Tax</span>
                <ArrowUpRight className="size-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" strokeWidth={2.5} />
              </Link>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Buttons inside Swiper but outside SwiperSlide */}
        <SwiperNavButtons />
      </Swiper>
    </section>
  );
}
