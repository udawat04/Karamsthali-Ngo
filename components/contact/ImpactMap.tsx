'use client';

import React from 'react';
import { ExternalLink, Navigation } from 'lucide-react';

export default function ImpactMap() {
  return (
    <section className="py-20 lg:py-32 bg-[#F8F9FB]">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1320px]">
        {/* Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            <span className="text-brand-dark/70 text-[13px] font-bold uppercase tracking-widest font-stack-sans">
              Our Location
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0D2E26] mb-8 leading-tight max-w-4xl mx-auto">
            Where We Make an Impact
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Our offices and outreach centers are located across key regions, allowing us to connect 
            directly with communities and deliver programs efficiently and effectively.
          </p>
        </div>

        {/* Map Container */}
        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 aspect-video md:aspect-21/10 lg:aspect-25/10 animate-in fade-in zoom-in duration-1000 delay-200">
          {/* Google Maps Iframe */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116078.31354749615!2d73.62247033481485!3d24.60826376676789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e56550a14411%3A0xdbd8c28455b868b0!2sUdaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1774454996498!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
            className="grayscale-[0.2] contrast-[1.1]"
          ></iframe>

          {/* Overlay Card - Desktop/Tablet */}
          {/* <div className="absolute top-6 left-6 md:top-10 md:left-10 bg-white p-6 rounded-xl shadow-xl border border-gray-100 hidden sm:block max-w-[300px] animate-in slide-in-from-left-4 duration-700 delay-500">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-bold text-gray-900 text-lg">New York</h3>
                <p className="text-gray-500 text-sm">New York, NY, USA</p>
                <p className="text-gray-400 text-xs mt-1">No reviews</p>
              </div>
              <div className="flex gap-3">
                <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors border border-gray-100 group">
                  <ExternalLink className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform" />
                </button>
                <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors border border-gray-100 group">
                  <Navigation className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform fill-blue-500/10" />
                </button>
              </div>
            </div>
          </div> */}
          
          {/* Mobile Overlay (Optional or visible below map) */}
          {/* <div className="sm:hidden absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-lg border border-gray-100">
             <div className="flex justify-between items-center">
                <div>
                   <h3 className="font-bold text-gray-900">New York</h3>
                   <p className="text-gray-500 text-xs text-nowrap">New York, NY, USA</p>
                </div>
                <div className="flex gap-3">
                   <ExternalLink className="w-5 h-5 text-blue-500" />
                   <Navigation className="w-5 h-5 text-blue-500" />
                </div>
             </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
