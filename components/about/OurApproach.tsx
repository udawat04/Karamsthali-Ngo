import React from 'react';
import { ArrowUpRight, Globe, Video, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const CARDS_DATA = [
  {
    id: 1,
    icon: <Globe className="w-5 h-5 text-brand-dark" />,
    title: 'Our Mission',
    description: 'Our mission is to improve the quality of life in underserved communities by delivering accessible healthcare.',
    highlight: 'To empower communities by addressing real social challenges.',
    bgShape: (
      // 8-pointed star
      <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 0L57.5 35H95L65 57.5L75 95L50 72.5L25 95L35 57.5L5 35H42.5L50 0Z" />
      </svg>
    ),
  },
  {
    id: 2,
    icon: <Video className="w-5 h-5 text-brand-dark" />,
    title: 'Our Vision',
    description: 'A world where every community has equal opportunities, dignity, and the power to build a better future together.',
    highlight: 'A world where empowered communities thrive with opportunitie.',
    bgShape: (
      // Blob
      <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M78 22C88 32 95 48 90 61C85 74 68 84 52 87C36 90 21 86 11 75C1 64 -4 46 3 31C10 16 26 4 43 1C60 -2 68 12 78 22Z" />
      </svg>
    ),
  },
  {
    id: 3,
    icon: <ShieldCheck className="w-5 h-5 text-brand-dark" />,
    title: 'Our Values',
    description: 'We work with honesty, transparency, and accountability, building trust with the communities we serve and our partners.',
    highlight: 'Guiding every action we take to create meaningful & lasting social impact.',
    bgShape: (
      // 4-pointed diamond star
      <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 0C50 27.6142 72.3858 50 100 50C72.3858 50 50 72.3858 50 100C50 72.3858 27.6142 50 0 50C27.6142 50 50 27.6142 50 0Z" />
      </svg>
    ),
  }
];

export default function OurApproach() {
  return (
    <section className="py-20 lg:py-28 px-5 md:px-7 lg:px-10 max-w-[1320px] mx-auto w-full font-stack-sans text-brand-dark">
      {/* Top Part */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 mb-16 lg:mb-20">
        
        {/* Header content side */}
        <div className="flex-1 max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 border border-black/10 rounded-full px-4 py-1.5 text-sm font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Our Approach
          </div>
          
          <h2 className="text-h2 font-bold leading-[1.15] text-brand-dark">
            From Understanding to <br className="hidden xl:block" /> Meaningful Action
          </h2>
        </div>
        
        {/* Paragraph and CTA side */}
        <div className="md:w-[400px] lg:w-[480px] shrink-0 space-y-6 md:pt-4">
          <p className="text-brand-dark/70 text-base md:text-lg leading-relaxed">
            Through careful planning, collaboration, and transparent execution, we turn insights
            into practical initiatives that create lasting, positive impact where it matters most.
          </p>
          
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-primary text-brand-dark font-bold px-6 py-3.5 rounded-lg shadow-btn-yellow hover:bg-primary-light transition-all duration-200"
          >
            Contact Us
            <ArrowUpRight className="w-5 h-5" strokeWidth={2.5} />
          </Link>
        </div>
      </div>
      
      {/* Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {CARDS_DATA.map((card) => (
          <div 
            key={card.id}
            className="group relative overflow-hidden rounded-2xl bg-[#f8f9fa] border border-black/5 flex flex-col p-8 md:p-10 h-full min-h-[420px]"
          >
            {/* Hover Sweep Animation Background */}
            <div className="absolute inset-0 bg-primary z-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
            
            {/* Top Right Abstract Shape overlaying the bg */}
            <div className="absolute -top-4 -right-10 w-48 h-48 z-10 text-brand-dark/5 group-hover:text-brand-dark/10 transition-colors duration-500 pointer-events-none">
              <div className="w-full h-full animate-[spin_12s_linear_infinite]">
                {card.bgShape}
              </div>
            </div>

            {/* Main Content Container */}
            <div className="relative z-20 flex flex-col flex-1 h-full font-stack-sans transition-colors duration-500 group-hover:text-brand-dark">
              {/* Icon */}
              <div className="w-12 h-12 bg-primary group-hover:bg-brand-dark rounded-full flex items-center justify-center mb-8 shrink-0 transition-colors duration-500 [&>svg]:text-brand-dark! group-hover:[&>svg]:text-primary! [&>svg]:transition-colors [&>svg]:duration-500">
                {card.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-6 text-brand-dark">
                {card.title}
              </h3>
              
              <p className="text-[1.05rem] leading-relaxed mb-auto group-hover:text-brand-dark/90 text-brand-dark/70 transition-colors duration-500">
                {card.description}
              </p>
              
              {/* Divider and highlight line */}
              <div className="pt-8 mt-8 border-t border-black/10 group-hover:border-brand-dark/20 transition-colors duration-500">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary group-hover:text-brand-dark shrink-0 mt-0.5 transition-colors duration-500" />
                  <p className="text-[0.95rem] font-medium leading-relaxed group-hover:text-brand-dark/90 text-brand-dark/80 transition-colors duration-500">
                    {card.highlight}
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
}
