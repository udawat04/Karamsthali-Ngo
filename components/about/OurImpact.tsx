import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/common/Button';

export default function OurImpact() {
  return (
    <section className="py-20 lg:py-28 w-full bg-[#f9f9f9] font-stack-sans text-brand-dark">
      <div className="max-w-[1320px] mx-auto px-5 md:px-7 lg:px-10 flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
        
        {/* Left Side: Overlapping Images */}
        <div className="relative w-full lg:w-1/2 h-[500px] md:h-[600px] shrink-0">
          {/* Back Image */}
          <div className="absolute top-0 left-0 w-[75%] md:w-[65%] lg:w-[70%] h-[75%] rounded-3xl overflow-hidden shadow-lg">
            <Image 
              src="https://images.unsplash.com/photo-1529148482759-b35b25c5f217?q=80&w=2070&auto=format&fit=crop" 
              alt="Protesters with signs"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 75vw, 40vw"
            />
          </div>
          
          {/* Front Image */}
          <div className="absolute bottom-0 right-0 w-[65%] md:w-[60%] lg:w-[65%] h-[65%] rounded-3xl overflow-hidden shadow-2xl border-[6px] md:border-8 border-[#f9f9f9]">
            <Image 
              src="https://images.unsplash.com/photo-1531206715517-5c0ba140bef2?q=80&w=2070&auto=format&fit=crop" 
              alt="Crowd with megaphone"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 65vw, 40vw"
            />
          </div>
        </div>
        
        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-8 z-10">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-black/10 rounded-full px-4 py-1.5 text-sm font-medium bg-white">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Our Impact
          </div>
          
          {/* Heading */}
          <h2 className="text-h2 font-bold leading-[1.15] text-brand-dark tracking-tight">
            Creating Change That <br className="hidden lg:block" /> Truly Matters
          </h2>
          
          {/* Description */}
          <p className="text-brand-dark/70 text-[1.05rem] md:text-lg leading-relaxed max-w-xl">
            Through dedicated programs, transparent processes, & long-term commitment, 
            we ensure every effort leads to meaningful and lasting impact.
          </p>
          
          {/* Stat Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mt-4">
            
            {/* Card 1 */}
            <div className="group relative overflow-hidden bg-white rounded-3xl p-8 border border-black/[0.04] shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-between transition-colors duration-500">
              {/* Bottom to Top Yellow Sweep */}
              <div className="absolute inset-0 bg-primary z-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-start mb-6">
                    <span className="text-5xl font-bold text-brand-dark tracking-tight transition-colors duration-500">4500</span>
                    <span className="text-4xl font-bold text-primary relative -top-1 ml-0.5 group-hover:text-brand-dark transition-colors duration-500">+</span>
                  </div>
                  <h4 className="text-lg font-bold text-brand-dark mb-3">Active Volunteers</h4>
                </div>
                <p className="text-brand-dark/60 group-hover:text-brand-dark/80 text-[0.95rem] leading-relaxed transition-colors duration-500">
                  A strong network dedicated volunteers working.
                </p>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="group relative overflow-hidden bg-white rounded-3xl p-8 border border-black/[0.04] shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-between transition-colors duration-500">
              {/* Bottom to Top Yellow Sweep */}
              <div className="absolute inset-0 bg-primary z-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-start mb-6">
                    <span className="text-5xl font-bold text-brand-dark tracking-tight transition-colors duration-500">500</span>
                    <span className="text-4xl font-bold text-primary relative -top-1 ml-0.5 group-hover:text-brand-dark transition-colors duration-500">+</span>
                  </div>
                  <h4 className="text-lg font-bold text-brand-dark mb-3">Community Projects</h4>
                </div>
                <p className="text-brand-dark/60 group-hover:text-brand-dark/80 text-[0.95rem] leading-relaxed transition-colors duration-500">
                  Successfully deliver impact-ful initiatives.
                </p>
              </div>
            </div>
            
          </div>
          
          <Link 
            href="/contact" 
            className="group relative overflow-hidden inline-flex items-center gap-2 bg-primary text-brand-dark font-bold px-7 py-4 rounded-lg shadow-btn-yellow hover:shadow-none transition-all duration-300 mt-6 md:mt-8"
          >
            {/* Background Sweep from Left to Right */}
            <span className="absolute inset-0 bg-brand-dark w-0 group-hover:w-full transition-all duration-300 ease-out z-0" />
            
            {/* Button Content */}
            <span className="relative z-10 group-hover:text-white flex items-center gap-2 transition-colors duration-300">
              Contact Us
              <ArrowUpRight className="w-5 h-5 shrink-0 transition-transform duration-300 group-hover:rotate-45" strokeWidth={2.5} />
            </span>
          </Link>
          
        </div>
      </div>
    </section>
  );
}
