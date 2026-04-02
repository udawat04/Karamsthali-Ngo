import Link from "next/link";
import Image from "next/image";
import { Clock, MapPin, Users, ArrowUpRight } from "lucide-react";
import { CATEGORY_COLORS, getDayMonth } from "./EventsHero";

interface Event {
  id: number;
  slug: string;
  title: string;
  category: string;
  date: string;
  time: string;
  location: string;
  thumbnail: string;
  shortDescription: string;
  attendees: number;
}

interface EventsGridProps {
  events: Event[];
}

export default function EventsGrid({ events }: EventsGridProps) {
  return (
    <section className="py-16 md:py-24 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <span className="size-2.5 rounded-full bg-primary" />
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark">
              All Events
            </h2>
          </div>
          <div className="text-sm text-gray-500 font-medium">
            {events.length} events total
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {events.map((event) => {
            const dm = getDayMonth(event.date);
            return (
              <Link
                key={event.id}
                href={`/events/${event.slug}`}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100 hover:border-transparent transition-all duration-500 hover:-translate-y-1 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={event.thumbnail}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                  {/* Date badge */}
                  <div className="absolute top-4 left-4 bg-white rounded-2xl text-center px-3 py-2 shadow-lg min-w-[56px]">
                    <div className="text-xl font-extrabold text-brand-dark leading-none">{dm.day}</div>
                    <div className="text-[10px] font-bold text-primary tracking-widest mt-0.5">{dm.month}</div>
                    <div className="text-[9px] text-gray-400">{dm.year}</div>
                  </div>
                  {/* Category badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`text-xs font-bold px-3 py-1.5 rounded-full ${
                        CATEGORY_COLORS[event.category] ?? "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {event.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col grow">
                  <h3 className="font-bold text-brand-dark text-lg leading-snug mb-4 group-hover:text-primary transition-colors line-clamp-2">
                    {event.title}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Clock className="w-4 h-4 text-primary shrink-0" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <MapPin className="w-4 h-4 text-primary shrink-0" />
                      <span className="line-clamp-1">{event.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 grow mb-5">
                    {event.shortDescription}
                  </p>

                  <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto">
                    <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                      <Users className="w-3.5 h-3.5" />
                      {event.attendees.toLocaleString()}+ expected
                    </div>
                    <span className="inline-flex items-center gap-1 text-primary font-bold text-sm group-hover:gap-2 transition-all">
                      Register / Details
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
