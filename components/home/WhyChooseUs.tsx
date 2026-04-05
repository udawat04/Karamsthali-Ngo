"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import image1 from "@/public/Why-Choose-Us-1.jpeg";
import image2 from "@/public/Why-Choose-Us-2.jpeg";
import image3 from "@/public/why-choose-us-3.jpeg";
import {
  ArrowUpRight,
  Eye,
  Heart,
  Sprout,
  Shield,
  Users,
  Globe,
  Star,
  Handshake,
  Phone,
} from "lucide-react";

const WHY_POINTS = [
  {
    icon: Eye,
    text: "We operate with complete openness, clearly communicating our goals and spending.",
  },
  {
    icon: Heart,
    text: "Ensuring every program is guided by empathy, dignity, & community respect.",
  },
  {
    icon: Sprout,
    text: "Our initiatives focus on long-term solutions that empower communities to thrive.",
  },
  {
    icon: Shield,
    text: "We maintain the highest standards of accountability & ethical governance.",
  },
  {
    icon: Users,
    text: "Inclusive programs that reach the most vulnerable — regardless of background.",
  },
  {
    icon: Globe,
    text: "Locally rooted, globally inspired — our impact crosses borders and cultures.",
  },
  {
    icon: Star,
    text: "Recognized for excellence with a proven track record of measurable outcomes.",
  },
  {
    icon: Handshake,
    text: "Meaningful partnerships with governments, CSRs, and donors to amplify impact.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#f5f5f0] py-16 md:py-24 overflow-hidden font-stack-sans">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-7 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* ── LEFT: Content ── */}
          <div className="z-10">
            {/* Label - Pulse removed as requested */}
            <div className="inline-flex items-center gap-2 bg-white border border-[#e8e8e0] rounded-full pl-2 pr-5 py-1 mb-6 shadow-sm">
              <span className="size-2 rounded-full bg-primary shrink-0" />
              <span className="text-[0.8rem] font-semibold text-brand-dark/80 tracking-wide">
                Why Choose Us
              </span>
            </div>

            <h2
              className="font-headline font-extrabold text-brand-dark leading-[1.1] tracking-tight mb-5"
              style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}
            >
              Making a{" "}
              <span className="text-primary-dark">Real Difference</span>{" "}
              <br className="hidden sm:block" />
              in Udaipur
            </h2>

            <p className="text-brand-dark/60 text-[0.96rem] leading-[1.75] mb-8 max-w-[500px]">
              Our mission is driven by transparency and local action. Whether
              it's feeding the hungry or protecting animals, we ensure every
              contribution reaches its true purpose.
            </p>

            <div className="bg-white rounded-2xl border border-[#e8e8e0] shadow-sm p-5 sm:p-6 mb-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              {WHY_POINTS.map((point, i) => {
                const Icon = point.icon;
                return (
                  <div key={i} className="flex items-start gap-3">
                    <div className="size-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon
                        className="size-4 text-primary-dark"
                        strokeWidth={2}
                      />
                    </div>
                    <p className="text-brand-dark/75 text-[0.875rem] leading-[1.6]">
                      {point.text}
                    </p>
                  </div>
                );
              })}
            </div>

            <Link
              href="/about"
              className="group relative overflow-hidden inline-flex items-center gap-2 bg-primary text-primary-fg font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-none transition-all duration-300"
            >
              <span className="absolute inset-0 bg-brand-dark w-0 group-hover:w-full transition-all duration-300 ease-out z-0" />
              <span className="relative z-10 group-hover:text-white flex items-center gap-2 transition-colors duration-300">
                Our Full Mission
                <ArrowUpRight
                  className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45"
                  strokeWidth={2.5}
                />
              </span>
            </Link>
          </div>

          {/* ── RIGHT: Balanced Image Collage ── */}
          <div className="relative h-[500px] sm:h-[600px] w-full mt-12 lg:mt-0 lg:ml-auto max-w-[600px]">
            {/* 1. Main Background Image (Left Vertical) */}
            <div className="absolute top-0 left-0 w-[55%] h-[80%] rounded-[2rem] overflow-hidden shadow-xl border-4 border-white z-0">
              <Image
                src={image3}
                alt="Community initiative"
                fill
                className="object-cover"
              />
            </div>

            {/* 2. Top Right Floating Image */}
            <div className="absolute top-[5%] right-0 w-[50%] h-[45%] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white z-10">
              <Image
                src={image1}
                alt="Impact work"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* 3. Bottom Right Overlapping Image */}
            <div className="absolute bottom-0 right-[5%] w-[55%] h-[42%] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white z-20">
              <Image
                src={image2}
                alt="Welfare activity"
                fill
                className="object-cover"
              />
            </div>

            {/* ── ONLY ONE PULSE DOT ── */}
            <div className="absolute top-[48%] left-[45%] size-6 flex items-center justify-center z-30">
              <div className="size-3 rounded-full bg-primary border-2 border-white shadow-lg" />
              <div className="absolute size-full rounded-full bg-primary animate-ping opacity-50" />
            </div>

            {/* --- CLICKABLE CALL CARD --- */}
            <a
              href="tel:+916376906858"
              className="absolute top-[-30px] right-0 lg:right-auto lg:left-[-20px] bg-white rounded-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-40 flex items-center gap-4 min-w-[210px] border border-gray-100 hover:scale-105 transition-all duration-300 group"
            >
              <div className="size-12 rounded-xl bg-primary flex items-center justify-center shrink-0 shadow-inner group-hover:bg-brand-dark transition-colors duration-300">
                <Phone className="size-6 text-primary-fg group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <p className="font-bold text-brand-dark text-[10px] uppercase tracking-widest opacity-40 leading-none mb-1">
                  Connect Now
                </p>
                <p className="font-extrabold text-brand-dark text-base whitespace-nowrap">
                  +91 63769 06858
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
