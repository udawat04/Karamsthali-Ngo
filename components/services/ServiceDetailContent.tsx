"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Service {
  slug: string;
  title: string;
  tagline: string;
  heroImage: string;
  overviewParagraphs: string[];
  whoItHelps: {
    description: string;
    image: string;
    features: { title: string; description: string }[];
  };
  whyItMatters: {
    intro: string;
    body: string;
    bullets: string[];
  };
  faqs: { question: string; answer: string }[];
}

interface Props {
  service: Service;
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-zinc-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-zinc-50 transition-colors duration-200"
      >
        <span className="font-stack-sans font-semibold text-brand-dark text-[0.95rem] pr-4">
          {question}
        </span>
        <span
          className={`size-8 rounded-full bg-primary flex items-center justify-center shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        >
          <ChevronDown className="size-4 text-brand-dark" strokeWidth={2.5} />
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5 pt-1 bg-white border-t border-zinc-100">
          <p className="font-stack-sans text-brand-dark/65 text-[0.9rem] leading-[1.75]">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function ServiceDetailContent({ service }: Props) {
  return (
    <div className="flex-1 min-w-0 space-y-14">

      {/* ── 1. Hero Image ── */}
      <div className="w-full h-[280px] sm:h-[360px] md:h-[420px] rounded-2xl overflow-hidden shadow-sm">
        <img
          src={service.heroImage}
          alt={service.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* ── 2. Overview paragraphs ── */}
      <div className="space-y-4">
        {service.overviewParagraphs.map((para, i) => (
          <p
            key={i}
            className="font-stack-sans text-brand-dark/70 text-[0.97rem] leading-[1.85]"
          >
            {para}
          </p>
        ))}
      </div>

      {/* ── 3. Who This Program Helps ── */}
      <div>
        <h2
          className="font-headline font-extrabold text-brand-dark mb-4 leading-tight"
          style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}
        >
          Who This Program Helps
        </h2>
        <p className="font-stack-sans text-brand-dark/65 text-[0.97rem] leading-[1.8] mb-8">
          {service.whoItHelps.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Image */}
          <div className="h-[280px] sm:h-[340px] rounded-2xl overflow-hidden shadow-sm">
            <img
              src={service.whoItHelps.image}
              alt="Who it helps"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Feature points */}
          <div className="space-y-6">
            {service.whoItHelps.features.map((feat, i) => (
              <div key={i} className="flex gap-4">
                <div className="size-11 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                  {/* Generic grid icon for each feature */}
                  <svg
                    className="size-5 text-[#c8860a]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    {i === 0 ? (
                      <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" />
                    ) : (
                      <>
                        <rect x="2" y="3" width="20" height="14" rx="2" />
                        <path d="M8 21h8M12 17v4" />
                      </>
                    )}
                  </svg>
                </div>
                <div>
                  <h4 className="font-headline font-bold text-brand-dark text-lg mb-1">
                    {feat.title}
                  </h4>
                  <p className="font-stack-sans text-brand-dark/60 text-[0.88rem] leading-[1.7]">
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 4. Why It Matters ── */}
      <div>
        <h2
          className="font-headline font-extrabold text-brand-dark mb-4 leading-tight"
          style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}
        >
          Why It Matters
        </h2>
        <p className="font-stack-sans text-brand-dark/65 text-[0.97rem] leading-[1.8] mb-4">
          {service.whyItMatters.intro}
        </p>
        <p className="font-stack-sans text-brand-dark/65 text-[0.97rem] leading-[1.8] mb-8">
          {service.whyItMatters.body}
        </p>

        {/* 2×2 bullet grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {service.whyItMatters.bullets.map((bullet, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 border border-zinc-200 rounded-xl bg-zinc-50"
            >
              <span className="size-5 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                <svg
                  className="size-3 text-brand-dark"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <p className="font-stack-sans text-brand-dark/70 text-[0.875rem] leading-[1.6]">
                {bullet}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── 5. FAQ ── */}
      <div>
        <h2
          className="font-headline font-extrabold text-brand-dark mb-3 leading-tight"
          style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}
        >
          Frequently Asked Questions
        </h2>
        <p className="font-stack-sans text-brand-dark/60 text-[0.95rem] leading-[1.75] mb-7">
          This program is designed to support individuals and families in
          underserved communities who face challenges related to education,
          health, livelihoods, and access to basic resources.
        </p>
        <div className="space-y-3">
          {service.faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>

    </div>
  );
}
