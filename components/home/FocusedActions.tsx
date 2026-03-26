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

        {/* ══════════════════════════════════════════════════════
            TWO-COLUMN SPLIT
            Left  → photo collage + floating stat cards
            Right → label, h2, description, tabs, tab content, CTA
        ══════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center">

          {/* ── LEFT: Photo collage with floating cards ── */}
          <div className="relative h-[560px] md:h-[620px] lg:h-[680px] max-sm:h-[420px]">

            {/* Top-right photo */}
            <div className="absolute top-0 right-0 w-[56%] h-[47%] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80"
                alt="Community gathering"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://html.awaikenthemes.com/aasha/images/about-image-1.jpg";
                }}
              />
            </div>

            {/* Main tall photo — left, spans full height */}
            <div className="absolute top-[8%] left-0 w-[58%] h-[80%] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.45)]">
              <img
                src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80"
                alt="Protest march"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://html.awaikenthemes.com/aasha/images/about-image-1.jpg";
                }}
              />
            </div>

            {/* Bottom-right photo */}
            <div className="absolute bottom-0 right-0 w-[50%] h-[46%] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80"
                alt="Volunteers"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://html.awaikenthemes.com/aasha/images/about-image-1.jpg";
                }}
              />
            </div>

            {/* ── Floating card: Active Volunteers (top-left) ── */}
            <div className="absolute top-0 left-0 bg-white text-brand-dark rounded-2xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.2)] z-10 max-w-[200px]">
              <p className="font-headline font-extrabold text-lg leading-snug mb-3">
                3,500+ Active<br />Volunteers
              </p>
              {/* Avatar stack */}
              <div className="flex -space-x-2">
                {AVATARS.map((av, i) => (
                  <Avatar
                    key={i}
                    className="size-9 border-2 border-white"
                  >
                    <AvatarImage src={av.src} alt={av.fallback} className="object-cover" />
                    <AvatarFallback className="bg-brand-600 text-white text-[10px] font-bold">
                      {av.fallback}
                    </AvatarFallback>
                  </Avatar>
                ))}
              </div>
            </div>

            {/* ── Floating card: Projects Completed (bottom-left) ── */}
            <div className="absolute bottom-0 left-0 bg-white text-brand-dark rounded-2xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.2)] z-10 flex items-center gap-3 max-w-[220px]">
              <div className="size-11 rounded-xl bg-primary flex items-center justify-center shrink-0">
                {/* Command/grid icon */}
                <svg className="size-5 text-brand-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
                  <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" />
                </svg>
              </div>
              <div>
                <p className="font-headline font-extrabold text-xl leading-none">250+</p>
                <p className="font-stack-sans text-sm text-brand-dark/70 mt-0.5">Projects Completed</p>
              </div>
            </div>

            {/* Yellow dot accent — matches reference */}
            <div className="absolute top-[47%] right-[41%] size-3 rounded-full bg-primary z-10 animate-[var(--animate-dot-pulse)]" />
          </div>

          {/* ── RIGHT: Content ── */}
          <div>

            {/* "What We Do" label */}
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full pl-3 pr-5 py-1.5 mb-6">
              <span className="size-2 rounded-full bg-primary shrink-0" />
              <span className="font-stack-sans font-semibold text-xs uppercase tracking-[0.18em] text-white/80">
                What We Do
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-headline font-extrabold text-white leading-[1.1] tracking-tight mb-5"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
            >
              Focused Actions That<br />Deliver Impacts
            </h2>

            {/* Description */}
            <p className="font-stack-sans text-white/65 text-[0.97rem] leading-[1.75] mb-8 max-w-[520px]">
              Through thoughtfully planned programs and community-led action, we empower
              individuals, strengthen neighborhoods, and foster lasting positive change one
              initiative at a time.
            </p>

            {/* ── Tabs navigation ── */}
            <div className="flex flex-wrap gap-3 mb-6">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "px-6 py-3 rounded-full font-stack-sans font-bold text-sm transition-all duration-200",
                    activeTab.id === tab.id
                      ? "bg-primary text-brand-dark shadow-btn-yellow"
                      : "bg-white/[0.07] border border-white/10 text-white/80 hover:bg-white/[0.12] hover:text-white",
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-white/[0.08] mb-6" />

            {/* ── Tab content: icon + title + desc ── */}
            <div key={activeTab.id} className="flex items-start gap-5 mb-8">
              {/* Icon */}
              <div className="size-14 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0 mt-0.5">
                <activeTab.icon className="size-6 text-primary" strokeWidth={1.8} />
              </div>
              {/* Text */}
              <div>
                <h3 className="font-syne font-bold text-white text-xl leading-snug mb-2">
                  {activeTab.title}
                </h3>
                <p className="font-stack-sans text-white/62 text-[0.92rem] leading-[1.72]">
                  {activeTab.desc}
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/[0.08] mb-8" />

            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-primary text-brand-dark font-bold px-7 py-3.5 rounded-xl shadow-btn-yellow hover:bg-primary-light transition-all duration-200 group"
            >
              Contact Us
              <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" strokeWidth={2.5} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}