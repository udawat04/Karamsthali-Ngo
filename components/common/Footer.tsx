"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12 relative overflow-hidden font-stack-sans">
      {/* Background Graphic/Pattern */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/4 translate-y-1/4" />
      
      <div className="max-w-[1320px] mx-auto px-5 md:px-7 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-24 mb-20">
          
          {/* Column 1: About & Socials */}
          <div className="flex flex-col gap-8">
            <Link href="/" className="inline-block shrink-0">
               <img src="/karm-logo.png" alt="Aasha Logo" className="h-20 w-auto max-md:h-12" />
            </Link>
            <p className="text-white/60 text-[1.05rem] leading-relaxed max-w-sm">
              We bring people together to challenge injustice, amplify unheard voices, and drive collective action that addresses inequality and builds a more inclusive world.
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="group size-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:bg-primary hover:text-brand-dark hover:border-primary transition-all duration-500"
                >
                  <Icon className="size-5 transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col gap-10">
            <h4 className="text-2xl font-bold font-headline tracking-tight relative pb-4 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-primary">
              Explore Aasha
            </h4>
            <ul className="grid grid-cols-2 gap-y-5 gap-x-10">
              {["Home", "About Us", "Our Services", "Success Stories", "Latest Blog", "Volunteer", "Donate Now", "Contact Us"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/60 hover:text-primary transition-all duration-300 flex items-center gap-2 group">
                    <span className="size-1 rounded-full bg-primary/20 group-hover:bg-primary transition-colors" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Newsletter */}
          <div className="flex flex-col gap-10">
            <h4 className="text-2xl font-bold font-headline tracking-tight relative pb-4 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-primary">
              Stay Connected
            </h4>
            <div className="flex flex-col gap-8">
              <ul className="flex flex-col gap-6">
                <li className="flex items-start gap-5 group">
                  <div className="size-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-primary group-hover:bg-primary/20 transition-all duration-300">
                    <MapPin className="size-5" />
                  </div>
                  <p className="text-white/70 leading-relaxed">
                     456 Compassion Way, <br />
                     Equality Park, NY 10001
                  </p>
                </li>
                <li className="flex items-center gap-5 group">
                  <div className="size-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-primary group-hover:bg-primary/20 transition-all duration-300">
                    <Phone className="size-5" />
                  </div>
                  <p className="text-white/70 font-medium">+1 (555) 123-4567</p>
                </li>
              </ul>

              {/* Minimal Newsletter Signup */}
              <div className="relative mt-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 transition-all"
                />
                <button className="absolute right-2 top-2 size-11 rounded-xl bg-primary text-brand-dark flex items-center justify-center transition-all shadow-lg active:scale-95 group">
                  <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright section */}
        <div className="pt-10 border-t border-white/8 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/40 text-sm font-medium">
            © {new Date().getFullYear()} Aasha NGO. All Rights Reserved.
          </p>
          <div className="flex items-center gap-10">
             <a href="#" className="text-white/40 text-sm hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="text-white/40 text-sm hover:text-white transition-colors">Terms of Use</a>
             <a href="#" className="text-white/40 text-sm hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
