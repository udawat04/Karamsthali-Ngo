"use client"
import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import teamMembers from '@/data/our-team.json';
import PageHeader from '@/components/common/PageHeader';

const Team = () => {
  return (
    <main className="bg-[#FAF9F6] min-h-screen">
      <PageHeader 
        title="Our Team"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Team' }
        ]}
        backgroundImage="https://images.unsplash.com/photo-1423666639041-f56196c273e8?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-24 lg:py-32 overflow-hidden font-stack-sans">
        <div className="container mx-auto px-6 lg:px-8 max-w-[1400px]">
          
          {/* Header Section */}
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-100 bg-white shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-[#f0c040] animate-pulse"></span>
              <span className="text-[#0e2218]/70 text-[13px] font-bold uppercase tracking-widest">
                Our Expert Team
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0e2218] mb-8 leading-tight max-w-4xl mx-auto">
              People Behind our Mission
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Our team brings together passionate professionals and leaders who work 
              tirelessly to drive positive social change & create lasting impact.
            </p>
          </div>

          {/* Grid Layout: 3 Laptop | 2 Tablet | 1 Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {teamMembers.map((member) => (
              <div key={member.id}>
                {/* --- CARD DESIGN DUPLICATED FROM image_0.png --- */}
                <div className="group/card relative bg-white rounded-[2.5rem] p-5 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100 hover:border-[#0e2218]/10">
                  <Link href={`/team/${member.id}`} className="block">
                    
                    {/* Image Wrapper (Original Aspect) */}
                    <div className="relative aspect-[4/5] rounded-[1.8rem] overflow-hidden mb-8">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                      />
                      
                      {/* Overlay Gradient with Brand Dark */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0e2218]/90 via-transparent to-transparent opacity-0 group-hover/card:opacity-90 transition-opacity duration-500" />

                      {/* Social Icons (Top Right Slide-in - Kept as requested) */}
                      <div className="absolute top-6 right-6 flex flex-col gap-3 translate-x-12 opacity-0 group-hover/card:translate-x-0 group-hover/card:opacity-100 transition-all duration-500">
                        {[Facebook, Instagram, Linkedin, MessageCircle].map((Icon, idx) => (
                          <div key={idx} className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-[#f0c040] hover:text-[#0e2218] transition-colors cursor-pointer border border-white/20">
                            <Icon size={18} />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Member Info (Design Duplicated from image_0.png) */}
                    <div className="px-3 pb-4">
                      {/* Flex wrapper for the yellow accent line */}
                      <div className="flex items-center gap-3 mb-2.5">
                        {/* Golden Yellow Accent Line using Primary Color */}
                        <span className="w-12 h-[2.5px] bg-[#f0c040]"></span>
                        
                        {/* Role (All Caps, Tiny, Bold - Brand Dark) */}
                        <p className="text-[#0e2218] text-[12px] font-bold uppercase tracking-widest">
                          {member.role}
                        </p>
                      </div>

                      {/* Name (Large, ExtraBold - Brand Dark) */}
                      <h3 className="text-[#0e2218] text-2xl lg:text-3xl font-extrabold group-hover/card:text-[#f0c040] transition-colors duration-300">
                        {member.name}
                      </h3>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
};

export default Team;