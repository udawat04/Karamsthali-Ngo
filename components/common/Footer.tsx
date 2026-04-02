"use client";

import React from "react";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Contact Us", href: "/contact" },
    { name: "Events", href: "/events" },
  ];

  const socialLinks = [
    { Icon: Facebook, href: "https://facebook.com" },
    { Icon: Twitter, href: "https://twitter.com" },
    { Icon: Instagram, href: "https://instagram.com" },
    { Icon: Linkedin, href: "https://linkedin.com" },
  ];

  return (
    <footer className="bg-brand-dark text-white pt-14 pb-4 relative overflow-hidden font-stack-sans">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/4 translate-y-1/4" />

      <div className="max-w-[1320px] mx-auto px-5 md:px-7 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-24 mb-10">
          {/* Column 1: Updated Bio in Hindi */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block shrink-0">
              <img
                src="/karma-logo-3.png"
                alt="Karmasthali Sansthan Logo"
                width={180}
                height={100}
                className="h-22 w-auto max-md:h-20"
              />
            </Link>
            <div className="space-y-4">
              <h5 className="text-primary font-bold text-lg">
                कर्म स्थली संस्थान बलीचा, उदयपुर
              </h5>
              <p className="text-white/70 text-[0.95rem] leading-relaxed">
                संस्थान के माध्यम से आप निर्धन बच्चों के लिए पुण्यतिथि, जन्मदिन,
                शादी की सालगिरह या किसी भी त्यौहार पर भोजन सेवा करवा सकते हैं।
              </p>
              <p className="text-white/60 text-sm italic border-l-2 border-primary pl-4">
                भोजन के समय बच्चों का वीडियो आपके नाम के साथ सेंड किया जाएगा।
              </p>
            </div>
            <div className="flex items-center gap-4">
              {socialLinks.map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="group size-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-primary hover:text-brand-dark transition-all duration-500"
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col gap-10">
            <h4 className="text-2xl font-bold font-headline tracking-tight relative pb-4 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-primary">
              Explore K.S.S NGO
            </h4>
            <ul className="grid grid-cols-2 gap-y-5 gap-x-10">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-primary transition-all duration-300 flex items-center gap-2 group text-sm"
                  >
                    <span className="size-1 rounded-full bg-primary/20 group-hover:bg-primary transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col gap-10">
            <h4 className="text-2xl font-bold font-headline tracking-tight relative pb-4 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-primary">
              Stay Connected
            </h4>
            <div className="flex flex-col gap-8">
              <ul className="flex flex-col gap-6">
                <li className="flex items-start gap-5 group">
                  <div className="size-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-primary">
                    <MapPin className="size-5" />
                  </div>
                  <div className="text-white/70 text-sm leading-relaxed">
                    52, B.D.O. Colony, Balicha, <br />
                    Udaipur (Rajasthan) 313001
                  </div>
                </li>
                <li className="flex items-center gap-5 group">
                  <div className="size-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-primary">
                    <Phone className="size-5" />
                  </div>
                  <a
                    href="tel:+919772403688"
                    className="text-white/70 font-medium hover:text-white transition-colors"
                  >
                    +91 97724 03688
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-white/8 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/40 text-xs font-medium">
            © {new Date().getFullYear()} Karmasthali Sansthan (K.S.S) NGO. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
