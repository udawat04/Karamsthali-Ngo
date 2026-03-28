"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Button } from "@/components/common/Button";

// Swiper imports
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";

interface VolunteerAvatar {
  src: string;
  fallback: string;
  bg: string;
}

const VOLUNTEERS: VolunteerAvatar[] = [
  { src: "https://html.awaikenthemes.com/aasha/images/author-1.jpg", fallback: "V1", bg: "bg-brand-600" },
  { src: "https://html.awaikenthemes.com/aasha/images/author-2.jpg", fallback: "V2", bg: "bg-[#266e42]" },
  { src: "https://html.awaikenthemes.com/aasha/images/author-3.jpg", fallback: "V3", bg: "bg-[#2d804d]" },
  { src: "https://html.awaikenthemes.com/aasha/images/author-4.jpg", fallback: "V4", bg: "bg-[#349258]" },
];

const SLIDES = [
  {
    bg: "https://html.awaikenthemes.com/aasha/images/hero-bg-image.jpg",
    title: "Empowering Communities,\nInspiring Change",
    desc: "We bring people together to challenge injustice, amplify unheard voices, and drive collective action that addresses inequality and defends human rights.",
  },
  {
    bg: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1920",
    title: "Education For\nEvery Child",
    desc: "We believe education is a fundamental human right. Join us in providing access to quality learning resources and building schools for the future generation.",
  },
  {
    bg: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1920",
    title: "Protect Our\nEnvironment",
    desc: "Taking action for our planet. We focus on sustainability, conservation, and protecting natural habitats through community-led environmental initiatives.",
  },
];

function useAnimatedCounter(target: number, duration: number): number {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let current = 0;
    const step = target / (duration / 16);
    const id = setInterval(() => {
      current += step;
      if (current >= target) {
        setValue(target);
        clearInterval(id);
      } else setValue(Math.floor(current));
    }, 16);
    return () => clearInterval(id);
  }, [target, duration]);
  return value;
}

const SwiperNavButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flex items-center gap-3 mt-8 mb-5 lg:mt-0 relative z-[60]">
      <button 
        onClick={() => swiper.slidePrev()} 
        className="size-12 lg:size-14 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-primary hover:text-black rounded-full flex items-center justify-center transition-all cursor-pointer"
      >
        <ArrowLeft className="size-5" />
      </button>
      <button 
        onClick={() => swiper.slideNext()} 
        className="size-12 lg:size-14 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-primary hover:text-black rounded-full flex items-center justify-center transition-all cursor-pointer"
      >
        <ArrowRight className="size-5" />
      </button>
    </div>
  );
};

export default function HeroSection() {
  const count = useAnimatedCounter(180, 1800);

  return (
    <section className="relative w-full min-h-fit  bg-[#0a1811] overflow-hidden">
      <Swiper
        modules={[Navigation]}
        speed={1000}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={false}
        className="w-full h-full"
      >
        {SLIDES.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="relative w-full h-auto pb-4"
            style={{ height: "auto !important" }}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${slide.bg}')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#3a7d5b9e] via-[#41775ce8]/80 to-transparent" />
              <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 w-full  max-w-7xl mx-auto px-6 flex items-center pt-24 pb-20 xl:pt-28">
              <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
                {/* Left Side: Text */}
                <div className="flex flex-col items-start space-y-6 lg:space-y-8">
                  <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm p-1 pr-4 rounded-full border border-white/10">
                    <div className="flex -space-x-3">
                      {VOLUNTEERS.map((v, i) => (
                        <Avatar
                          key={i}
                          className="size-8 border-2 border-[#0a1811]"
                        >
                          <AvatarImage src={v.src} />
                          <AvatarFallback>{v.fallback}</AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                    <span className="text-xs lg:text-sm font-medium text-white/90">
                      Join 180+ Active Volunteers
                    </span>
                  </div>

                  <h1 className="text-h1 font-extrabold font-headline text-white leading-[1.1] whitespace-pre-line">
                    {slide.title}
                  </h1>

                  <p className="text-base lg:text-lg font-stack-sans text-white/70 max-w-lg border-l-2 border-primary pl-6">
                    {slide.desc}
                  </p>

                  <div className="flex flex-wrap items-center gap-6">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-primary text-brand-dark font-bold px-8 py-4 rounded-xl shadow-btn-yellow hover:bg-primary-light transition-all duration-200"
                    >
                      Become A Volunteer
                      <ArrowUpRight className="w-5 h-5" strokeWidth={2.5} />
                    </Link>
                  </div>
                </div>

                {/* Right Side: Impact Card */}
                <div className="flex justify-start lg:justify-end">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 lg:p-10 rounded-3xl max-w-sm w-full shadow-2xl">
                    <div className="flex items-baseline gap-1 text-white font-extrabold text-6xl lg:text-7xl mb-4">
                      {count}
                      <span className="text-primary">+</span>
                    </div>
                    <h3 className="text-xl font-bold font-headline text-white mb-2">
                      Active Volunteers
                    </h3>
                    <p className="text-white/60 font-stack-sans text-sm lg:text-base">
                      A passionate network working on the ground to make
                      widespread impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Buttons - Placed OUTSIDE the map to fix click issues */}
        <div className="absolute bottom-0 left-[35%] lg:left-[40%]  z-[70]">
          <SwiperNavButtons />
        </div>
      </Swiper>
    </section>
  );
}