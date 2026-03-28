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
                    ${isActive
                      ? "bg-brand-800  text-white"
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

        {/* ── Contact Us card ── */}
        <div
          className="relative rounded-2xl overflow-hidden min-h-[200px] flex flex-col justify-between p-6"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-brand-dark/70" />
          
          <div className="relative z-10">
            <h4 className="font-headline font-bold text-white text-xl mb-3">
              Contact Us
            </h4>
            <p className="font-stack-sans text-white/75 text-sm leading-relaxed mb-6">
              Delivering awareness campaigns, training sessions, and educational
              initiatives
            </p>
          </div>

          <div className="relative z-10 flex items-center gap-3">
            <div className="size-10 rounded-full bg-primary flex items-center justify-center shrink-0">
              <Phone className="size-4 text-brand-dark" strokeWidth={2} />
            </div>
            <p className="font-headline font-bold text-white text-base">
              Call At: +91 98765 43210
            </p>
          </div>
        </div>

    </aside>
  );
}
