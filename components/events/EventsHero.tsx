import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import eventsData from "@/data/events.json";

// ── Shared helpers exported so other event components can re-use them ─────────
export const CATEGORY_COLORS: Record<string, string> = {
  Healthcare:           "bg-rose-100 text-rose-700",
  "Women Empowerment":  "bg-purple-100 text-purple-700",
  Education:            "bg-blue-100 text-blue-700",
  Environment:          "bg-green-100 text-green-700",
  "Human Rights":       "bg-amber-100 text-amber-700",
  Fundraising:          "bg-yellow-100 text-yellow-800",
};

export function formatDateLong(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function getDayMonth(dateStr: string) {
  const d = new Date(dateStr);
  return {
    day:   d.toLocaleDateString("en-IN", { day: "2-digit" }),
    month: d.toLocaleDateString("en-IN", { month: "short" }).toUpperCase(),
    year:  d.toLocaleDateString("en-IN", { year: "numeric" }),
  };
}

// ── Stats shown in the hero bar ────────────────────────────────────────────────
const STATS = [
  { label: "Events This Year",    value: `${eventsData.length}+` },
  { label: "Total Beneficiaries", value: "2,500+"               },
  { label: "Districts Covered",   value: "6"                    },
  { label: "Volunteers Engaged",  value: "350+"                 },
];

export default function EventsHero() {
  return (
    <section className="relative bg-[#f8faf9] pt-28 pb-20 overflow-hidden">

      {/* ── Visible dot-grid pattern ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #0e2218 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
          opacity: 0.10,
        }}
      />

      {/* ── Light green tint wash ── */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/8 via-transparent to-brand-dark/5 pointer-events-none" />

      {/* ── Soft colour accents ── */}
      <div className="absolute -top-24 -right-24 w-[420px] h-[420px] bg-primary/25 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-0 -left-16 w-72 h-72 bg-brand-dark/8 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-brand-dark/50 mb-8 font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <span className="text-primary font-semibold">Events</span>
        </div>

        {/* Main headline block */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/40 rounded-full pl-2 pr-5 py-1.5 mb-7">
            <span className="size-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold text-brand-dark tracking-widest uppercase">
              Karamsthali NGO
            </span>
          </div>

          <h1 className="font-headline font-extrabold text-brand-dark leading-tight mb-5">
            Our <span className="text-primary">Events</span> &{" "}
            Programmes
          </h1>

          <p className="text-brand-dark/60 text-lg md:text-xl leading-relaxed mb-10">
            From health camps and skill workshops to fundraiser galas — discover every way you can join us in building a better tomorrow.
          </p>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-brand-dark text-white font-bold px-7 py-3.5 rounded-full hover:bg-primary hover:text-brand-dark transition-all duration-300 shadow-lg"
          >
            Volunteer With Us
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
          </Link>
        </div>

        {/* ── Stats bar ── */}
        <div className="flex flex-wrap gap-x-12 gap-y-6 mt-14 pt-10 border-t border-brand-dark/10">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-extrabold text-primary">{stat.value}</div>
              <div className="text-sm text-brand-dark/50 font-medium mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
