"use client";

import { useState } from "react";
import { ArrowUpRight, Target, Lightbulb, Puzzle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

/* ── Tab data ── */
const TABS = [
  {
    id: "awareness",
    label: "Awareness",
    icon: Target,
    title: "Empowering Communities",
    desc: "We design and implement programs that address real community needs—ranging from education and healthcare to women & youth.",
  },
  {
    id: "capacity",
    label: "Capacity Building",
    icon: Lightbulb,
    title: "Building Resilience & Skills",
    desc: "We provide technical training and modern resources to ensure individuals can build sustainable careers and lead their communities.",
  },
  {
    id: "collaboration",
    label: "Collaboration",
    icon: Puzzle,
    title: "Fostering Sincere Partnerships",
    desc: "By working with local leaders and global partners, we ensure every initiative delivers measurable results and long-term impact.",
  },
];

/* ── Avatar sources ── */
const AVATARS = [1, 2, 3, 4].map((i) => ({
  src: `https://html.awaikenthemes.com/aasha/images/author-${i}.jpg`,
  fallback: `V${i}`,
}));

export default function FocusedActions() {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  return (
    <section className="bg-brand-dark py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-10 max-lg:px-7 max-sm:px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center">
          {/* ── LEFT: Photo collage using public images ── */}
          <div className="relative h-[560px] md:h-[620px] lg:h-[680px] max-sm:h-[420px]">
            {/* 1. Top-right photo (hero-banner-1) */}
            <div className="absolute top-0 right-0 w-[56%] h-[47%] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)] border-4 border-white/10">
              <img
                src="/hero-banner-1.jpeg"
                alt="Feeding Children"
                className="w-full h-full object-cover"
              />
            </div>

            {/* 2. Main tall photo — left (hero-banner-3) */}
            <div className="absolute top-[8%] left-0 w-[58%] h-[80%] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.45)] border-4 border-white/10 z-10">
              <img
                src="/hero-banner-3.jpg"
                alt="Planting Trees"
                className="w-full h-full object-cover"
              />
            </div>

            {/* 3. Bottom-right photo (hero-banner-2) */}
            <div className="absolute bottom-0 right-0 w-[50%] h-[46%] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)] border-4 border-white/10">
              <img
                src="/hero-banner-2.jpg"
                alt="Feeding Cows"
                className="w-full h-full object-cover"
              />
            </div>

            {/* ── Floating card: Active Volunteers ── */}
            <div className="absolute top-[-10px] left-[-10px] bg-white text-brand-dark rounded-2xl p-4 shadow-2xl z-20 max-w-[200px] border border-gray-100">
              <p className="font-headline font-extrabold text-lg leading-snug mb-3">
                3,500+ Active
                <br />
                Volunteers
              </p>
              <div className="flex -space-x-2">
                {AVATARS.map((av, i) => (
                  <Avatar key={i} className="size-9 border-2 border-white">
                    <AvatarImage
                      src={av.src}
                      alt={av.fallback}
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-primary text-brand-dark text-[10px] font-bold">
                      {av.fallback}
                    </AvatarFallback>
                  </Avatar>
                ))}
              </div>
            </div>

            {/* ── Floating card: Projects Completed ── */}
            <div className="absolute bottom-10 left-[-20px] bg-white text-brand-dark rounded-2xl p-4 shadow-2xl z-20 flex items-center gap-3 max-w-[220px] border border-gray-100">
              <div className="size-11 rounded-xl bg-primary flex items-center justify-center shrink-0">
                <Target className="size-5 text-brand-dark" strokeWidth={2.5} />
              </div>
              <div>
                <p className="font-headline font-extrabold text-xl leading-none">
                  250+
                </p>
                <p className="font-stack-sans text-sm text-brand-dark/70 mt-0.5">
                  Projects Done
                </p>
              </div>
            </div>

            {/* ── SINGLE PULSE DOT ── */}
            <div className="absolute top-[47%] right-[41%] size-4 flex items-center justify-center z-20">
              <div className="size-3 rounded-full bg-primary border-2 border-white shadow-lg" />
              <div className="absolute size-full rounded-full bg-primary animate-ping opacity-60" />
            </div>
          </div>

          {/* ── RIGHT: Content ── */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full pl-3 pr-5 py-1.5 mb-6">
              <span className="size-2 rounded-full bg-primary shrink-0" />
              <span className="font-stack-sans font-semibold text-xs uppercase tracking-[0.18em] text-white/80">
                What We Do
              </span>
            </div>

            <h2
              className="font-headline font-extrabold text-white leading-[1.1] tracking-tight mb-5"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
            >
              Focused Actions That
              <br />
              Deliver Impacts
            </h2>

            <p className="font-stack-sans text-white/65 text-[0.97rem] leading-[1.75] mb-8 max-w-[520px]">
              Through thoughtfully planned programs and community-led action, we
              empower individuals and foster lasting positive change in Udaipur.
            </p>

            {/* Tabs navigation */}
            <div className="flex flex-wrap gap-3 mb-6">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "px-6 py-3 rounded-full font-stack-sans font-bold text-sm transition-all duration-200",
                    activeTab.id === tab.id
                      ? "bg-primary text-brand-dark shadow-btn-yellow"
                      : "bg-white/[0.07] border border-white/10 text-white/80 hover:bg-white/[0.12]",
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="h-px bg-white/[0.08] mb-6" />

            {/* Tab content */}
            <div
              key={activeTab.id}
              className="flex items-start gap-5 mb-8 animate-in fade-in slide-in-from-left-2 duration-300"
            >
              <div className="size-14 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0 mt-0.5">
                <activeTab.icon
                  className="size-6 text-primary"
                  strokeWidth={1.8}
                />
              </div>
              <div>
                <h3 className="font-headline font-bold text-white text-xl leading-snug mb-2">
                  {activeTab.title}
                </h3>
                <p className="font-stack-sans text-white/60 text-[0.92rem] leading-[1.72]">
                  {activeTab.desc}
                </p>
              </div>
            </div>

            <div className="h-px bg-white/[0.08] mb-8" />

            <Link
              href="/contact"
              className="group relative overflow-hidden inline-flex items-center gap-2 bg-primary text-brand-dark font-bold px-7 py-4 rounded-xl shadow-btn-yellow hover:shadow-none transition-all duration-300"
            >
              <span className="absolute inset-0 bg-white w-0 group-hover:w-full transition-all duration-300 ease-out z-0" />
              <span className="relative z-10 group-hover:text-brand-dark flex items-center gap-2 transition-colors duration-300">
                Contact Us
                <ArrowUpRight
                  className="w-5 h-5 shrink-0 transition-transform duration-300 group-hover:rotate-45"
                  strokeWidth={2.5}
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
