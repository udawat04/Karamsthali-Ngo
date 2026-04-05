"use client";

import React from "react";
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Instagram,
  Linkedin,
  Twitter,
  MoveUpRight,
  Facebook,
} from "lucide-react";
import Image from "next/image";

export default function ContactSection() {
  const contactMethods = [
    {
      icon: <Phone className="size-6" />,
      label: "Call Us",
      // Using the primary numbers from the image
      value: "+91 97724 03688",
      href: "tel:+919772403688",
      color: "bg-blue-50 text-[#0B3C5D]",
    },
    {
      icon: <MessageCircle className="size-6" />,
      label: "WhatsApp",
      // Providing alternative number for WhatsApp contact
      value: "+91 63769 06858",
      href: "https://wa.me/6376906858",
      color: "bg-green-50 text-[#2E7D32]",
    },
    {
      icon: <Mail className="size-6" />,
      label: "Email Address",
      value: "karmasthalisansthan@gmail.com",
      href: "mailto:karmasthalisansthan@gmail.com",
      color: "bg-amber-50 text-[#F4B400]",
    },
    {
      icon: <MapPin className="size-6" />,
      label: "Our Office",
      value: "52, B.D.O. Colony, Balicha, Udaipur (Raj.) 313001",
      href: "https://maps.google.com/?q=Karmasthali+Sansthan+Udaipur",
      color: "bg-red-50 text-red-700",
    },
  ];

  const socials = [
    {
      Icon: Facebook,
      href: "https://www.facebook.com/share/18ar2s5ir4/?mibextid=wwXIfr",
    },
    {
      Icon: Instagram,
      href: "https://www.instagram.com/karmasthalisansthan?igsh=ajhsdnYwcGlpeDE4",
    },
    { Icon: MessageCircle, href: "https://wa.me/919772403688" },
  ];

  return (
    <section className="py-20 lg:py-12 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1320px]">
        <div className="bg-white rounded-[2rem] p-4 md:p-8 lg:p-12 border border-gray-50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
            {/* ── LEFT: Visual Image ── */}
            <div className="relative rounded-[1.5rem] overflow-hidden group min-h-[400px] lg:h-full">
              <Image
                src="/about-4.png"
                alt="Karmasthali Sansthan"
                width={200} 
                height={180}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#0B3C5D]/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* ── RIGHT: Direct Contact Info ── */}
            <div className="flex flex-col justify-center">
              <div className="mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-100 bg-white shadow-sm mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#F4B400] animate-pulse"></span>
                  <span className="text-[#1F2933]/70 text-[13px] font-bold uppercase tracking-widest">
                    Direct Contact
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#1F2933] mb-6 leading-tight">
                  Karmasthali Sansthan
                </h2>
                <p className="text-lg text-[#6B7280] max-w-lg leading-relaxed">
                  Head Office: 52, B.D.O. Colony, Balicha, Udaipur. Reach out
                  to us for any inquiries or support.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="grid gap-4 mb-10">
                {contactMethods.map((method, idx) => (
                  <a
                    key={idx}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-5 rounded-2xl bg-[#F9FAFB] border border-transparent hover:border-[#F4B400] hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-5">
                      <div
                        className={`p-3.5 rounded-xl ${method.color} transition-transform group-hover:scale-110`}
                      >
                        {method.icon}
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#6B7280] mb-0.5">
                          {method.label}
                        </p>
                        <p className="text-base md:text-lg font-bold text-[#1F2933]">
                          {method.value}
                        </p>
                      </div>
                    </div>
                    <MoveUpRight className="size-4 text-gray-300 group-hover:text-[#F4B400] transition-colors" />
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-gray-100">
                <p className="text-sm font-bold text-[#1F2933]/80 uppercase tracking-wider mb-6">
                  Follow Our Socials
                </p>
                <div className="flex gap-4">
                  {socials.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      className="p-4 rounded-xl bg-[#0B3C5D] text-white hover:bg-[#F4B400] hover:text-[#0B3C5D] transition-all duration-300 shadow-lg shadow-blue-900/10 hover:-translate-y-1"
                      aria-label={social.Icon.name}
                    >
                      <social.Icon className="size-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
