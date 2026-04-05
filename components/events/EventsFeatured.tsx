import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, ArrowUpRight } from "lucide-react";
import { CATEGORY_COLORS, formatDateLong } from "./EventsHero";

interface Event {
  id: number;
  slug: string;
  title: string;
  category: string;
  date: string;
  ngoLocation: string;
  image: string;
  isFeatured: boolean;
}

interface EventsFeaturedProps {
  events: Event[];
}

export default function EventsFeatured({ events }: EventsFeaturedProps) {
  if (!events || events.length === 0) return null;

  const [primary, ...rest] = events;

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="flex items-center gap-3 mb-10">
          <span className="size-2.5 rounded-full bg-primary animate-pulse" />
          <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark">
            Featured Events
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">

          {/* ── Large featured card (first item) ── */}
          <Link
            href={`/events/${primary.slug}`}
            className="group lg:col-span-2 relative rounded-3xl overflow-hidden min-h-[420px] block"
          >
            <Image
              src={primary.image}
              alt={primary.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
              <span
                className={`self-start text-xs font-bold px-3 py-1.5 rounded-full mb-4 ${
                  CATEGORY_COLORS[primary.category] ?? "bg-gray-100 text-gray-700"
                }`}
              >
                {primary.category}
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight mb-3">
                {primary.title}
              </h3>
              <div className="flex flex-wrap gap-4 text-gray-300 text-sm mb-5">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-primary" />
                  {formatDateLong(primary.date)}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-primary" />
                  {primary.ngoLocation}
                </span>
              </div>
              <span className="inline-flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                View Details <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
              </span>
            </div>
          </Link>

          {/* ── Side featured cards ── */}
          <div className="flex flex-col gap-6">
            {rest.map((event) => (
              <Link
                key={event.id}
                href={`/events/${event.slug}`}
                className="group relative rounded-3xl overflow-hidden min-h-[196px] block"
              >
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span
                    className={`self-start text-xs font-bold px-3 py-1 rounded-full mb-3 ${
                      CATEGORY_COLORS[event.category] ?? "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {event.category}
                  </span>
                  <h3 className="text-lg font-bold text-white leading-tight mb-2">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-gray-300 text-sm">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    {formatDateLong(event.date)}
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
