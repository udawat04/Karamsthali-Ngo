"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import servicesData from "@/data/services.json";
import { Phone } from "lucide-react";

export default function ServiceSidebar() {
  const params = useParams();
  const currentSlug = params?.slug as string;

  return (
    <aside className="w-full lg:w-[320px] xl:w-[340px] shrink-0 lg:sticky lg:top-28 lg:self-start space-y-5">
      {/* ── Explore Our Services panel ── */}
      <div className="bg-white border border-zinc-100 rounded-2xl overflow-hidden shadow-sm">
        {/* Header */}
        <div className="bg-primary px-6 py-4">
          <h3 className="font-headline font-extrabold text-brand-dark text-lg tracking-tight">
            Explore Our Services
          </h3>
        </div>

        {/* Service list */}
        <nav className="divide-y divide-zinc-100">
          {servicesData.map((service) => {
            const isActive = currentSlug === service.slug;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`
                    flex items-center justify-between px-6 py-4 group transition-all duration-200
                    ${
                      isActive
                        ? "bg-brand-dark text-white"
                        : "hover:bg-zinc-50 text-brand-dark/80 hover:text-brand-dark"
                    }
                  `}
              >
                <span className="font-stack-sans font-medium text-[0.92rem] leading-snug">
                  {service.title}
                </span>
                <svg
                  className={`size-4 shrink-0 transition-transform duration-200 ${isActive ? "text-primary" : "text-brand-dark/30 group-hover:text-primary group-hover:translate-x-0.5"}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* ── Contact Us card (Updated with K.S.S Details) ── */}
      <div
        className="relative rounded-2xl overflow-hidden min-h-[240px] flex flex-col justify-between p-8"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay with brand color hint */}
        <div className="absolute inset-0 bg-[#0B3C5D]/85" />

        <div className="relative z-10">
          <h4 className="font-headline font-bold text-white text-xl mb-3">
            Direct Contact
          </h4>
          <p className="font-stack-sans text-white/80 text-[13px] leading-relaxed mb-6 italic">
            "भोजन के समय बच्चों का वीडियो आपके नाम के साथ सेंड किया जाएगा।"
          </p>
        </div>

        <a
          href="tel:+919772403688"
          className="relative z-10 flex items-center gap-4 group cursor-pointer"
        >
          <div className="size-11 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
            <Phone className="size-5 text-brand-dark" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col">
            <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">
              Call Now
            </span>
            <p className="font-headline font-bold text-white text-lg">
              +91 97724 03688
            </p>
          </div>
        </a>
      </div>
    </aside>
  );
}
