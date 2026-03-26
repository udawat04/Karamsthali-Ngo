'use client';

import React from 'react';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';

interface MemberAboutProps {
  member: {
    name: string;
    role: string;
    image: string;
    bio: string[];
    socials: {
      facebook: string;
      instagram: string;
      linkedin: string;
      whatsapp: string;
    };
  };
}

export default function MemberAbout({ member }: MemberAboutProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1320px]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          
          {/* Left Side: Image */}
          <div className="w-full lg:w-1/3 shrink-0">
            <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl bg-gray-50">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Side: Bio & Social */}
          <div className="w-full lg:w-2/3 flex flex-col pt-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-10 leading-tight">
              About Me
            </h2>

            <div className="space-y-6 mb-12">
              {member.bio.map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-500 leading-relaxed font-stack-sans">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="h-px w-full bg-gray-100 mb-10" />

            {/* Social Links */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <h3 className="text-2xl font-bold text-brand-dark">
                Follow Me on Social
              </h3>
              
              <div className="flex items-center gap-4">
                <a 
                  href={member.socials.facebook} 
                  className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-brand-dark hover:bg-primary hover:border-primary transition-all duration-300 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook size={20} className="group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href={member.socials.instagram} 
                  className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-brand-dark hover:bg-primary hover:border-primary transition-all duration-300 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={20} className="group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href={member.socials.linkedin} 
                  className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-brand-dark hover:bg-primary hover:border-primary transition-all duration-300 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href={`https://wa.me/${member.socials.whatsapp}`} 
                  className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-brand-dark hover:bg-primary hover:border-primary transition-all duration-300 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
