import React from 'react';
import { Phone, Mail, Clock } from 'lucide-react';

interface ContactCardProps {
  icon: React.ElementType; // Changed to ElementType for cleaner prop passing
  title: string;
  description: string;
  value: string;
}

function ContactCard({ icon: Icon, title, description, value }: ContactCardProps) {
  return (
    <div className="group border-2 border-gray-100 bg-white rounded-3xl p-10 pt-16 shadow-xl shadow-gray-100 flex flex-col items-center text-center relative transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-900/10">
      
      {/* Icon Circle Container - Dark Green Base (#2D4F1E) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 bg-primary rounded-full flex items-center justify-center shadow-lg z-10 overflow-hidden">
        
        {/* Flower Animation Layer: Scales from 0 to 1 on hover */}
        <div className="absolute inset-0 bg-brand-dark rounded-full scale-0 group-hover:scale-100 transition-transform duration-700 ease-out origin-center" />
        
        {/* The Icon: Forced to 18px via className and Lucide prop */}
        <div className="relative z-20 text-white transition-transform duration-500 group-hover:scale-110 flex items-center justify-center">
          <Icon size={18} strokeWidth={2.5} />
        </div>
      </div>

      <h3 className="text-[20px] font-extrabold text-[#1F2933] mb-4">{title}</h3>
      <p className="text-[#6B7280] text-[16px] mb-8 leading-relaxed max-w-[240px]">
        {description}
      </p>
      
      <div className="w-full h-px bg-gray-100 mb-8" />
      
      <p className="text-lg font-bold text-[#1F2933]">
        {value}
      </p>
    </div>
  );
}

export default function ContactCards() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-8 mt-12">
          <ContactCard 
            icon={Phone} 
            title="Phone Number"
            description="We work closely with communities to identify real needs."
            value="Call Us: +(123) 456-789"
          />
          <ContactCard 
            icon={Mail}
            title="Email Address"
            description="We work closely with communities to identify real needs."
            value="Email: info@domainname.com"
          />
          <ContactCard 
            icon={Clock}
            title="Working Hours"
            description="We work closely with communities to identify real needs."
            value="Mon - Fri: 09 AM - 06 PM"
          />
        </div>
      </div>
    </section>
  );
}