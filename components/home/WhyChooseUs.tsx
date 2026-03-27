import Link from "next/link";
import { ArrowUpRight, Eye, Heart, Sprout, Shield, Users, Globe, Star, Handshake } from "lucide-react";

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
    <section className="bg-[#f5f5f0] py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-7 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center">

          {/* ── LEFT: Content ── */}
          <div>
            {/* Label */}
            <div className="inline-flex items-center gap-2 bg-white border border-[#e8e8e0] rounded-full pl-2 pr-5 py-1 mb-6 shadow-sm">
              <span className="size-2 rounded-full bg-primary shrink-0" />
              <span className="text-[0.8rem] font-semibold text-brand-dark/80 tracking-wide">
                Why Choose Us
              </span>
            </div>

            {/* Heading */}
            <h2
              className="font-headline font-extrabold text-brand-dark leading-[1.1] tracking-tight mb-5"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              What Makes our Impact <br className="hidden sm:block" />
              Strong
            </h2>

            {/* Sub-description */}
            <p className="font-stack-sans text-brand-dark/60 text-[0.96rem] leading-[1.75] mb-8 max-w-[500px]">
              We approach every initiative with compassion, operate with full
              transparency, and focus on creating sustainable impact that
              improves lives.
            </p>

            {/* Why-choose-us points: 2 columns on sm+, 1 column on mobile */}
            <div className="bg-white rounded-2xl border border-[#e8e8e0] shadow-sm p-5 sm:p-6 mb-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              {WHY_POINTS.map((point, i) => {
                const Icon = point.icon;
                return (
                  <div key={i} className="flex items-start gap-3">
                    <div className="size-9 rounded-lg bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="size-4 text-[#c8860a]" strokeWidth={1.8} />
                    </div>
                    <p className="text-brand-dark/75 text-[0.875rem] leading-[1.6]">
                      {point.text}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <Link
              href="/about"
              className="group relative overflow-hidden inline-flex items-center gap-2 bg-primary text-brand-dark font-bold px-7 py-4 rounded-lg shadow-btn-yellow hover:shadow-none transition-all duration-300"
            >
              <span className="absolute inset-0 bg-white w-0 group-hover:w-full transition-all duration-300 ease-out z-0" />
              <span className="relative z-10 group-hover:text-brand-dark flex items-center gap-2 transition-colors duration-300">
                Learn More
                <ArrowUpRight
                  className="w-5 h-5 shrink-0 transition-transform duration-300 group-hover:rotate-45"
                  strokeWidth={2.5}
                />
              </span>
            </Link>
          </div>

          {/* ── RIGHT: Image Collage ── */}
          <div className="relative h-[400px] sm:h-[480px] lg:h-[560px] mt-6 lg:mt-0">
            {/* Top-right large image */}
            <div className="absolute top-0 right-0 w-[58%] h-[52%] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=700&q=80"
                alt="Community gathering"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom-right smaller image */}
            <div className="absolute bottom-0 right-0 w-[54%] h-[43%] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=700&q=80"
                alt="Volunteers"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Left large image spanning full height */}
            <div className="absolute top-0 left-0 w-[40%] h-[100%] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
              <img
                src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80"
                alt="Protest march"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Call Us card */}
            <div className="absolute top-4 right-[calc(42%+8px)] bg-white rounded-xl p-3 shadow-[0_8px_32px_rgba(0,0,0,0.12)] z-10 flex items-center gap-3 min-w-[170px]">
              <div className="size-10 rounded-lg bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0">
                <svg
                  className="size-5 text-[#c8860a]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.5 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.41 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <p className="font-headline font-bold text-brand-dark text-[0.9rem] leading-none mb-0.5">
                  Call Us
                </p>
                <p className="font-stack-sans text-brand-dark/60 text-[0.75rem]">
                  +91 98765 43210
                </p>
              </div>
            </div>

            {/* Decorative dot */}
            <div className="absolute top-[49%] left-[38%] size-3 rounded-full bg-primary z-10 animate-pulse" />
          </div>

        </div>
      </div>
    </section>
  );
}
