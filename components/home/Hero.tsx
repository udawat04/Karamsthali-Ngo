"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  Video,
  TreeDeciduous,
  Heart,
} from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";

const VOLUNTEERS = [
  {
    src: "https://html.awaikenthemes.com/aasha/images/author-1.jpg",
    fallback: "V1",
  },
  {
    src: "https://html.awaikenthemes.com/aasha/images/author-2.jpg",
    fallback: "V2",
  },
  {
    src: "https://html.awaikenthemes.com/aasha/images/author-3.jpg",
    fallback: "V3",
  },
  {
    src: "https://html.awaikenthemes.com/aasha/images/author-4.jpg",
    fallback: "V4",
  },
];

const SLIDES = [
  {
    // Remove "/public" from the start of the path
    bg: "/hero-banner-1.jpeg",
    title: "कर्म स्थली संस्थान\nबलीचा, उदयपुर",
    desc: "निर्धन बच्चों के लिए पुण्यतिथि, जन्मदिन, शादी की सालगिरह या किसी भी अवसर पर भोजन सेवा। आपका नाम लेकर भोजन करवाया जाएगा।",
    tag: "भोजन सेवा अभियान",
    icon: <Video className="size-4 text-primary" />,
  },
  {
    bg: "/hero-banner-2.jpg", // Updated to your new tree planting image
    title: "वृक्षारोपण अभियान:\nहरा-भरा उदयपुर",
    desc: "पर्यावरण संरक्षण की दिशा में हमारा कदम। संस्थान के माध्यम से आप अपनी विशेष तिथियों पर वृक्षारोपण कर प्रकृति को उपहार दे सकते हैं।",
    tag: "प्रकृति सेवा",
    icon: <TreeDeciduous className="size-4 text-primary" />,
  },
  {
    bg: "/hero-banner-3.jpg", // Updated to your new cow feeding image
    title: "गौ सेवा ही\nपरम धर्म है",
    desc: "लावारिस और बीमार गौवंश की सेवा और चारे की व्यवस्था। संस्थान की गौशाला में सहयोग कर पुण्य के भागी बनें।",
    tag: "गौ कल्याण",
    icon: <Heart className="size-4 text-primary" />,
  },
];

const SwiperNavButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flex items-center gap-3 mt-8 lg:mt-0 relative z-[60]">
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
  return (
    <section className="relative w-full h-screen min-h-[700px] bg-[#0a1811] overflow-hidden">
      <Swiper
        modules={[Navigation, Autoplay]}
        speed={1000}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        {SLIDES.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            {/* Background Image - Reverted to original gradient colors */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${slide.bg}')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#3a7d5b9e] via-[#41775ce8]/80 to-transparent" />
              <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 flex items-center pt-24 pb-20 xl:pt-28">
              <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
                {/* Left Side: Text */}
                <div className="flex flex-col items-start space-y-6 lg:space-y-8">
                  <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm p-1 pr-4 rounded-full border border-white/10">
                    <div className="flex -space-x-3 pl-1">
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
                    <div className="flex items-center gap-2 ml-2">
                      {slide.icon}
                      <span className="text-xs lg:text-sm font-medium text-white/90 uppercase tracking-wider">
                        {slide.tag}
                      </span>
                    </div>
                  </div>

                  <h1 className="text-5xl md:text-6xl lg:text-h1 font-extrabold font-headline text-white leading-[1.1] whitespace-pre-line">
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
                      सहयोग करें
                      <ArrowUpRight className="w-5 h-5" strokeWidth={2.5} />
                    </Link>
                  </div>
                </div>

                {/* Right Side: Contribution Tiers Card */}
                <div className="flex justify-start lg:justify-end">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 lg:p-10 rounded-3xl max-w-sm w-full shadow-2xl">
                    <h3 className="text-2xl font-bold font-headline text-white mb-6 border-b border-white/10 pb-4">
                      भोजन सेवा सहयोग
                    </h3>

                    <div className="space-y-6">
                      <div className="flex justify-between items-center">
                        <span className="text-white/70 font-medium">
                          50 से 55 बच्चे
                        </span>
                        <span className="text-2xl font-extrabold text-primary">
                          ₹2100
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/70 font-medium">
                          40 से 45 बच्चे
                        </span>
                        <span className="text-2xl font-extrabold text-primary">
                          ₹1500
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/70 font-medium">
                          30 से 35 बच्चे
                        </span>
                        <span className="text-2xl font-extrabold text-primary">
                          ₹1100
                        </span>
                      </div>
                    </div>

                    <p className="mt-8 text-sm text-white/50 italic leading-relaxed">
                      "आपका एक छोटा सा सहयोग किसी मासूम की भूख मिटा सकता है।"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Buttons */}
        <div className="absolute bottom-10 left-[35%] lg:left-[40%] z-[70]">
          <SwiperNavButtons />
        </div>
      </Swiper>
    </section>
  );
}
