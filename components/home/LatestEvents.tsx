"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight, ArrowUpRight, Calendar, MapPin, Clock, Users } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

import eventsData from "@/data/events.json";

const CATEGORY_COLORS: Record<string, string> = {
  Healthcare: "bg-rose-100 text-rose-700",
  "Women Empowerment": "bg-purple-100 text-purple-700",
  Education: "bg-blue-100 text-blue-700",
  Environment: "bg-green-100 text-green-700",
  "Human Rights": "bg-amber-100 text-amber-700",
  Fundraising: "bg-yellow-100 text-yellow-800",
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

// Only show first 5 events in the carousel
const LIMIT = 5;
const carouselEvents = eventsData.slice(0, LIMIT);

export default function LatestEvents() {
  return (
    <section className="relative w-full overflow-hidden py-20 md:py-32 bg-[#0d1f1a]" id="events">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-block px-5 py-2 rounded-full border border-primary text-primary text-xs md:text-sm font-semibold tracking-widest uppercase mb-6">
              Upcoming Events
            </div>
            <h2 className="text-[32px] md:text-[48px] lg:text-[56px] font-bold text-white mb-4 leading-tight">
              Latest <span className="text-primary">Events</span>
            </h2>
            <p className="text-gray-300 text-base md:text-[18px]">
              Be part of the change — join our upcoming programmes, drives, and workshops happening across communities.
            </p>
          </div>

          {/* Nav arrows */}
          <div className="flex items-center gap-4 pb-2">
            <button className="events-prev w-12 h-12 md:w-14 md:h-14 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-brand-dark transition-all cursor-pointer">
              <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
            </button>
            <button className="events-next w-12 h-12 md:w-14 md:h-14 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-brand-dark transition-all cursor-pointer">
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Swiper */}
        <div className="w-full">
          <Swiper
            modules={[Autoplay, Navigation]}
            navigation={{
              prevEl: ".events-prev",
              nextEl: ".events-next",
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={24}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1.3, spaceBetween: 20 },
              768: { slidesPerView: 1.8, spaceBetween: 24 },
              1024: { slidesPerView: 2.5, spaceBetween: 28 },
              1280: { slidesPerView: 3, spaceBetween: 28 },
            }}
            className="!pb-4"
          >
            {carouselEvents.map((event) => (
              <SwiperSlide key={event.id}>
                <Link
                  href={`/events/${event.slug}`}
                  className="group block bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={event.thumbnail}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 420px"
                    />
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${CATEGORY_COLORS[event.category] ?? "bg-gray-100 text-gray-700"}`}>
                        {event.category}
                      </span>
                    </div>
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-bold text-brand-dark text-lg leading-snug mb-4 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                      {event.title}
                    </h3>

                    {/* Meta info */}
                    <div className="space-y-2 mb-5">
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <Calendar className="w-4 h-4 text-primary shrink-0" />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <Clock className="w-4 h-4 text-primary shrink-0" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <MapPin className="w-4 h-4 text-primary shrink-0" />
                        <span className="line-clamp-1">{event.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-5">
                      {event.shortDescription}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                      <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                        <Users className="w-3.5 h-3.5" />
                        <span>{event.attendees.toLocaleString()}+ expected</span>
                      </div>
                      <span className="inline-flex items-center gap-1 text-primary font-bold text-sm group-hover:gap-2 transition-all">
                        Details <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
                      </span>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* View All Events Button */}
        <div className="flex justify-center mt-12 md:mt-16">
          <Link
            href="/events"
            className="group relative overflow-hidden inline-flex items-center gap-2 bg-primary text-brand-dark font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-xl"
          >
            <span className="absolute inset-0 bg-white w-0 group-hover:w-full transition-all duration-500 ease-in-out z-0" />
            <span className="relative z-10 group-hover:text-brand-dark flex items-center gap-2 transition-colors duration-500">
              View All Events
              <ArrowUpRight className="w-5 h-5 shrink-0 transition-transform duration-500 group-hover:rotate-45" strokeWidth={2.5} />
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
}
