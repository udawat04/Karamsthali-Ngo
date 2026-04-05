import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  Clock,
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Mail,
  Building2,
  Bookmark,
  ChevronRight,
  Phone,
} from "lucide-react";
import eventsData from "@/data/events.json";
import eventsDetail from "@/data/events-detail.json";
import Navbar2 from "@/components/common/Navbar2";
import ShareButton from "@/components/events/ShareButton";
import ContactSection from "@/components/contact/ContactSection";
import FAQ from "@/components/common/FAQ";

// ── Types ─────────────────────────────────────────────────────────────────────
type AgendaItem = { time: string; activity: string };
type EventDetail = {
  fullDescription: string;
  highlights: string[];
  agenda: AgendaItem[];
  organizer: string;
  contact: string;
  registrationRequired: boolean;
  gallery: string[];
};
type EventDetailMap = Record<string, EventDetail>;

// ── Helpers ───────────────────────────────────────────────────────────────────
const CATEGORY_COLORS: Record<string, string> = {
  "Feeding the Needy":   "bg-orange-100 text-orange-700 border-orange-200",
  "Cow Welfare & Care":  "bg-green-100 text-green-700 border-green-200",
  "Empowering Children": "bg-blue-100 text-blue-700 border-blue-200",
  "Feeding Street Dogs": "bg-amber-100 text-amber-700 border-amber-200",
};

const CATEGORY_ACCENT: Record<string, string> = {
  "Feeding the Needy":   "bg-orange-500",
  "Cow Welfare & Care":  "bg-green-500",
  "Empowering Children": "bg-blue-500",
  "Feeding Street Dogs": "bg-amber-500",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function formatDateShort(dateStr: string) {
  const d = new Date(dateStr);
  return {
    day:   d.toLocaleDateString("en-IN", { day: "2-digit" }),
    month: d.toLocaleDateString("en-IN", { month: "short" }).toUpperCase(),
    year:  d.toLocaleDateString("en-IN", { year: "numeric" }),
  };
}

// ── Static params for SSG ─────────────────────────────────────────────────────
export async function generateStaticParams() {
  return eventsData.map((e) => ({ slug: e.slug }));
}

// ── Metadata ──────────────────────────────────────────────────────────────────
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = eventsData.find((e) => e.slug === slug);
  if (!event) return {};
  return {
    title: `${event.title} | Karamsthali NGO Events`,
    description: event.shortDescription,
  };
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = eventsData.find((e) => e.slug === slug);
  if (!event) notFound();

  const detail = (eventsDetail as EventDetailMap)[event.slug];
  if (!detail) notFound();

  const relatedEvents = eventsData
    .filter((e) => e.slug !== event.slug && e.category === event.category)
    .slice(0, 3);

  const dm = formatDateShort(event.date);
  const catColor  = CATEGORY_COLORS[event.category]  ?? "bg-gray-100 text-gray-700 border-gray-200";
  const catAccent = CATEGORY_ACCENT[event.category]   ?? "bg-gray-400";

  return (
    <>
      
      <main className="min-h-screen bg-[#f8f9fa]">

        {/* ═══════════════════════════════════════════════════════
            HERO — full-bleed image with gradient overlay
        ════════════════════════════════════════════════════════ */}
        <section className="relative h-[65vh] md:h-[75vh] min-h-[500px] overflow-hidden">
          <Image
            src={event.image}
            alt={event.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Multi-stop gradient for depth */}
          <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/55 to-black/15" />
          {/* Subtle brand-color bottom glow */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#0e2218]/60 to-transparent" />

          {/* ── Breadcrumb ── */}
          {/* Increased pt-28 to pt-36 to avoid overlap with navbar, and added z-index */}
          <div className="absolute top-0 left-0 right-0 pt-36 pb-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-20">
            <nav className="flex items-center gap-1.5 text-sm text-white/80 font-medium">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-white/40" />
              <Link href="/events" className="hover:text-primary transition-colors">Events</Link>
              <ChevronRight className="w-3.5 h-3.5 text-white/40" />
              <span className="text-primary/95 line-clamp-1 max-w-[220px] font-bold">{event.title}</span>
            </nav>
          </div>
           
          {/* ── Hero Content ── */}
          <div className="absolute inset-0 flex flex-col justify-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16 z-10">
           {/* Category pill */}
            <span className={`self-start text-xs font-bold px-4 py-1.5 lg:mt-5 rounded-full border ${catColor}`}>
              {event.category}
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6 max-w-4xl font-headline tracking-tight">
              {event.title}
            </h1>

            {/* Quick-glance meta row */}
            <div className="flex flex-wrap gap-5 text-white/85 text-sm md:text-base font-medium">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary shrink-0" />
                {formatDate(event.date)}
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                {event.ngoLocation}
              </span>
              <span className="flex items-center gap-2 text-white/90">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href={`tel:${event.contactNumber.replace(/\s+/g, '')}`} className="hover:text-primary transition-colors">{event.contactNumber}</a>
              </span>
            </div>
            
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            INFO BAR — sticky quick-action strip
        ════════════════════════════════════════════════════════ */}
        <div className="bg-white border-b border-gray-100 shadow-sm sticky top-[72px] md:top-[90px] z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 py-3.5">
            <Link
              href="/events"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-brand-dark/55 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All Events
            </Link>

            <div className="flex items-center gap-2 ml-auto">
              {/* Registration status */}
              <span className={`hidden md:flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full border ${
                detail.registrationRequired
                  ? "bg-rose-50 text-rose-600 border-rose-200"
                  : "bg-green-50 text-green-700 border-green-200"
              }`}>
                <span className={`size-1.5 rounded-full ${detail.registrationRequired ? "bg-rose-500" : "bg-green-500"}`} />
                {detail.registrationRequired ? "Registration Required" : "Free & Open to All"}
              </span>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-brand-dark text-white font-bold text-sm px-5 py-2.5 rounded-full hover:bg-primary hover:text-brand-dark transition-all duration-300"
              >
                {detail.registrationRequired ? "Register Now" : "Get Involved"}
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════
            MAIN LAYOUT — 2/3 content + 1/3 sidebar
        ════════════════════════════════════════════════════════ */}
        <section className="py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 xl:gap-16 items-start">

              {/* ── LEFT COLUMN ──────────────────────────────── */}
              <div className="space-y-14">

                {/* ── About ── */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-1 h-8 rounded-full ${catAccent}`} />
                    <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark">About This Event</h2>
                  </div>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed whitespace-pre-line">
                    {detail.fullDescription}
                  </p>
                </div>

                {/* ── What to Expect ── */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-1 h-8 rounded-full ${catAccent}`} />
                    <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark">What to Expect</h2>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {detail.highlights.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3.5 bg-white rounded-2xl px-5 py-4 border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
                      >
                        <span className="mt-0.5 shrink-0 flex items-center justify-center size-6 rounded-full bg-primary/15">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                        </span>
                        <span className="text-brand-dark text-sm leading-snug font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ── Suggested Seva Timeline ── */}
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <div className={`w-1 h-8 rounded-full ${catAccent}`} />
                    <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark">How to Contribute</h2>
                  </div>
                  <div className="relative space-y-0">
                    {/* Vertical line */}
                    <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-gray-200" />
                    {detail.agenda.map((item, i) => (
                      <div key={i} className="relative flex gap-6 pb-7 last:pb-0">
                        {/* Timeline dot */}
                        <div className={`relative z-10 shrink-0 size-14 rounded-2xl flex items-center justify-center shadow-sm text-center ${i === 0 ? "bg-brand-dark" : "bg-white border border-gray-200"}`}>
                          <div>
                            <div className={`text-[10px] font-extrabold leading-tight tracking-wide ${i === 0 ? "text-primary" : "text-primary"}`}>
                              {item.time.split(" ")[0]}
                            </div>
                            {item.time.split(" ").length > 1 && (
                              <div className={`text-[9px] font-medium ${i === 0 ? "text-white/70" : "text-gray-400"}`}>
                                {item.time.split(" ").slice(1).join(" ")}
                              </div>
                            )}
                          </div>
                        </div>
                        {/* Content */}
                        <div className={`flex-1 flex items-center rounded-2xl px-5 py-4 ${i === 0 ? "bg-brand-dark text-white shadow-lg" : "bg-white border border-gray-100 shadow-sm"}`}>
                          <p className={`font-semibold text-sm md:text-base ${i === 0 ? "text-white" : "text-brand-dark"}`}>
                            {item.activity}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── Photo Gallery ── */}
                {detail.gallery.length > 0 && (
                  <div>
                    <div className="flex items-center gap-3 mb-8">
                      <div className={`w-1 h-8 rounded-full ${catAccent}`} />
                      <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark whitespace-nowrap">Event Gallery</h2>
                    </div>
                    {/* Redesigned grid for 6-8 images */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:grid-rows-2">
                      {/* Large featured image (top-left 2x2 area) */}
                      <div className="col-span-2 md:row-span-2 relative h-64 md:h-full min-h-[300px] rounded-3xl overflow-hidden shadow-md group">
                        <Image
                          src={detail.gallery[0] || "/placeholder.jpg"}
                          alt="Gallery 1"
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-1000"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>

                      {/* Remaining images 2nd to 8th */}
                      {detail.gallery.slice(1, 4).map((src, i) => (
                        <div key={i} className="relative h-44 md:h-auto rounded-2xl overflow-hidden shadow-sm group">
                          <Image
                            src={src}
                            alt={`Gallery ${i + 2}`}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                            sizes="(max-width: 640px) 50vw, 25vw"
                          />
                          <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        </div>
                      ))}

                      {/* Larger middle image on the right if we have 5+ images */}
                      {detail.gallery.length > 4 && (
                        <div className="relative h-44 md:h-auto rounded-2xl overflow-hidden shadow-sm group">
                          <Image
                            src={detail.gallery[4]}
                            alt="Gallery 5"
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                            sizes="(max-width: 640px) 50vw, 25vw"
                          />
                          <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        </div>
                      )}

                      {/* Row 2 extra small ones */}
                      {detail.gallery.slice(5, 8).map((src, i) => (
                        <div key={i+5} className="relative h-44 rounded-2xl overflow-hidden shadow-sm group">
                          <Image
                            src={src}
                            alt={`Gallery ${i + 6}`}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                            sizes="(max-width: 640px) 50vw, 25vw"
                          />
                          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>

              {/* ── RIGHT SIDEBAR ────────────────────────────── */}
              <div className="sticky top-36 space-y-5">

                {/* Date Card */}
                <div className="bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden">
                  {/* Coloured top strip */}
                  <div className={`h-2 w-full ${catAccent}`} />

                  {/* Date banner */}
                  <div className="bg-brand-dark px-8 py-6 flex items-center gap-5">
                    <div className="text-center min-w-[52px]">
                      <div className="text-4xl font-extrabold text-primary leading-none">{dm.day}</div>
                      <div className="text-xs font-bold text-primary/80 tracking-widest mt-0.5">{dm.month}</div>
                      <div className="text-xs text-white/40 mt-0.5">{dm.year}</div>
                    </div>
                    <div className="w-px h-14 bg-white/10" />
                    <div>
                      <div className="text-white/50 text-xs font-medium mb-1">Event Date</div>
                      <div className="text-white font-bold text-sm leading-snug">
                        {formatDate(event.date)}
                      </div>
                    </div>
                  </div>

                  {/* Event detail rows */}
                  <div className="p-7 space-y-5">
                    {[
                      { Icon: MapPin,    label: "Head Office",       value: event.ngoLocation },
                      { Icon: Phone,     label: "Contact No.",       value: event.contactNumber, isLink: true, href: `tel:${event.contactNumber.replace(/\s+/g, '')}` },
                      { Icon: Building2, label: "Organiser",         value: detail.organizer },
                    ].map(({ Icon, label, value, isLink, href }) => (
                      <div key={label} className="flex items-start gap-3.5">
                        <div className="size-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-0.5">{label}</div>
                          {isLink ? (
                            <a href={href} className="text-brand-dark font-semibold text-sm hover:text-primary transition-colors">{value}</a>
                          ) : (
                            <div className="text-brand-dark font-semibold text-sm">{value}</div>
                          )}
                        </div>
                      </div>
                    ))}

                    {/* Contact */}
                    <div className="flex items-start gap-3.5">
                      <div className="size-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Mail className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Contact</div>
                        <a href={`mailto:${detail.contact}`} className="text-primary font-semibold text-sm hover:underline">
                          {detail.contact}
                        </a>
                      </div>
                    </div>

                    {/* Registration */}
                    <div className="flex items-start gap-3.5">
                      <div className="size-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Bookmark className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Registration</div>
                        <div className={`text-sm font-bold ${detail.registrationRequired ? "text-rose-600" : "text-green-600"}`}>
                          {detail.registrationRequired ? "Required" : "Free & Open to All"}
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link
                      href="/contact"
                      className="group mt-2 w-full flex items-center justify-center gap-2 bg-primary text-brand-dark font-bold py-4 rounded-2xl hover:bg-brand-dark hover:text-primary transition-all duration-400 shadow-btn-yellow hover:shadow-none text-base"
                    >
                      {detail.registrationRequired ? "Register Now" : "Get Involved"}
                      <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45 duration-300" />
                    </Link>
                  </div>
                </div>

                {/* Share / Back */}
                <div className="flex gap-3">
                  <Link
                    href="/events"
                    className="flex-1 flex items-center justify-center gap-1.5 border border-gray-200 text-brand-dark/70 font-semibold py-3 rounded-2xl hover:border-primary hover:text-primary transition-all text-sm"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    All Events
                  </Link>
                  <ShareButton title={event.title} />
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            RELATED EVENTS
        ════════════════════════════════════════════════════════ */}
        {relatedEvents.length > 0 && (
          <section className="py-14 md:py-20 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <span className={`size-2.5 rounded-full ${catAccent}`} />
                  <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark">
                    More {event.category} Events
                  </h2>
                </div>
                <Link
                  href="/events"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-dark/55 hover:text-primary transition-colors"
                >
                  View All Events <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedEvents.map((rel) => {
                  const relDm = formatDateShort(rel.date);
                  return (
                    <Link
                      key={rel.id}
                      href={`/events/${rel.slug}`}
                      className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:border-transparent transition-all duration-500 hover:-translate-y-1.5 flex flex-col"
                    >
                      {/* Thumbnail */}
                      <div className="relative h-52 overflow-hidden">
                        <Image
                          src={rel.thumbnail}
                          alt={rel.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          sizes="(max-width: 640px) 100vw, 33vw"
                        />
                        {/* Date badge */}
                        <div className="absolute top-4 left-4 bg-white rounded-xl text-center px-2.5 py-2 shadow-md min-w-[48px]">
                          <div className="text-lg font-extrabold text-brand-dark leading-none">{relDm.day}</div>
                          <div className="text-[10px] font-bold text-primary tracking-widest">{relDm.month}</div>
                        </div>
                        {/* Category */}
                        <div className="absolute top-4 right-4">
                          <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${CATEGORY_COLORS[rel.category] ?? "bg-gray-100 text-gray-700 border-gray-200"}`}>
                            {rel.category}
                          </span>
                        </div>
                      </div>

                      {/* Card body */}
                      <div className="p-5 flex flex-col grow">
                        <h3 className="font-bold text-brand-dark text-base leading-snug mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {rel.title}
                        </h3>
                        <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-3">
                          <MapPin className="w-3.5 h-3.5 text-primary" />
                          <span className="line-clamp-1">{rel.ngoLocation}</span>
                        </div>
                        <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-end">
                          <span className="inline-flex items-center gap-1 text-primary font-bold text-xs group-hover:gap-1.5 transition-all">
                            View Details <ArrowUpRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ═══════════════════════════════════════════════════════
            BOTTOM CTA STRIP
        ════════════════════════════════════════════════════════ */}
        <section className="bg-brand-dark py-8 md:py-8 relative overflow-hidden">
          {/* Dot pattern */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              opacity: 0.04,
            }}
          />
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/15 rounded-full blur-[80px]" />

          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 rounded-full px-5 py-2 mb-6">
              <span className="size-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-bold text-white tracking-widest uppercase">Karamsthali NGO</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Want to Volunteer at This Event?
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
              Your time and passion can create real change. Join our volunteer network and be part of the movement.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-brand-dark font-bold px-8 py-4 rounded-full hover:bg-primary-light transition-all duration-300 shadow-btn-yellow text-sm md:text-base"
              >
                {detail.registrationRequired ? "Register for this Event" : "Volunteer Now"}
                <ArrowUpRight className="w-5 h-5" />
              </Link>
              <Link
                href="/events"
                className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:border-primary hover:text-primary transition-all duration-300 text-sm md:text-base"
              >
                <ArrowLeft className="w-4 h-4" />
                Browse All Events
              </Link>
            </div>
          </div>
        </section>

        <ContactSection/>
        

      </main>
    </>
  );
}
