import React from "react";
import { Phone, Mail, Clock, MessageCircle } from "lucide-react";

interface ContactCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  value: string;
  href?: string; // Added href for clickable actions
}

function ContactCard({
  icon: Icon,
  title,
  description,
  value,
  href,
}: ContactCardProps) {
  const CardContent = (
    <div className="group border-2 border-gray-100 bg-white rounded-3xl p-10 pt-16 shadow-xl shadow-gray-100 flex flex-col items-center text-center relative transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-900/10 h-full">
      {/* Icon Circle Container */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 bg-primary rounded-full flex items-center justify-center shadow-lg z-10 overflow-hidden">
        {/* Flower Animation Layer */}
        <div className="absolute inset-0 bg-brand-dark rounded-full scale-0 group-hover:scale-100 transition-transform duration-700 ease-out origin-center" />

        {/* The Icon */}
        <div className="relative z-20 text-white transition-transform duration-500 group-hover:scale-110 flex items-center justify-center">
          <Icon size={24} strokeWidth={2.5} />
        </div>
      </div>

      <h3 className="text-[20px] font-extrabold text-[#1F2933] mb-4">
        {title}
      </h3>
      <p className="text-[#6B7280] text-[16px] mb-8 leading-relaxed max-w-[240px]">
        {description}
      </p>

      <div className="w-full h-px bg-gray-100 mb-8" />

      <p className="text-lg font-bold text-[#1F2933]">{value}</p>
    </div>
  );

  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      {CardContent}
    </a>
  ) : (
    <div className="h-full">{CardContent}</div>
  );
}

export default function ContactCards() {
  return (
    <section className="py-24 bg-[#F9FAFB]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-8 mt-12">
          {/* Phone Number Card */}
          <ContactCard
            icon={Phone}
            title="Phone Number"
            description="Reach out to us directly for any urgent inquiries or support."
            value="+91 97724 03688"
            href="tel:+919772403688"
          />

          {/* WhatsApp / Email Card */}
          <ContactCard
            icon={MessageCircle}
            title="Direct Message"
            description="Connect with us on WhatsApp for quick updates and service info."
            value="WhatsApp: +91 63769 06858"
            href="https://wa.me/916376906858"
          />

          {/* Working Hours Card */}
          <ContactCard
            icon={Clock}
            title="Working Hours"
            description="Our doors and support lines are open throughout the week."
            value="All Days: 08:00 AM - 08:00 PM"
          />
        </div>

        {/* Small Email Link below cards */}
        <div className="mt-16 text-center">
          <p className="text-[#6B7280]">
            Prefer email? Send us a message at{" "}
            <a
              href="mailto:karmasthalisansthan@gmail.com"
              className="text-[#0B3C5D] font-bold hover:text-primary transition-colors"
            >
              karmasthalisansthan@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
