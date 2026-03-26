"use client";

import React, { useState } from 'react';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';

const faqData = [
  { question: "Q1. What is the mission of your NGO?", answer: "Our mission is to empower communities and promote sustainable development through education, healthcare, and environmental conservation initiatives." },
  { question: "Q2. How can I get involved with your organization?", answer: "You can get involved by volunteering, organizing fundraisers, making donations, or partnering with us for corporate social responsibility programs." },
  { question: "Q3. Can I volunteer without prior experience?", answer: "Yes, we welcome volunteers from all backgrounds. Training and guidance are provided to ensure everyone can contribute meaningfully." },
  { question: "Q4. Where does your organization operate?", answer: "We currently operate in various regions across the country, focusing on marginalized communities and underserved rural areas." },
  { question: "Q5. How do you measure your impact?", answer: "We measure our impact through rigorous data collection, community feedback, and third-party evaluations to ensure transparency and accountability." },
  { question: "Q6. How do you select the communities you work with?", answer: "We partner with local leaders and conduct thorough needs assessments to identify communities where our interventions can make the greatest difference." },
  { question: "Q7. How can I stay updated on your work?", answer: "You can subscribe to our monthly newsletter, follow us on our social media channels, or visit the 'Updates' section on our website." },
  { question: "Q8. Can I support a specific cause or program?", answer: "Absolutely. When making a donation, you can specify the program or cause you would like your funds to be directed towards." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(4); // Default to Q5 open to match design if preferred, or null. null is better for init.

  // Using null as default is safer, but let's default to null.
  React.useEffect(() => {
    setOpenIndex(null); 
  }, []);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const leftColumnFaqs = faqData.slice(0, 4);
  const rightColumnFaqs = faqData.slice(4, 8);

  return (
    <section className="py-20 lg:py-28 w-full bg-white font-stack-sans">
      <div className="max-w-[1320px] mx-auto px-5 md:px-7 lg:px-10">
        
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16 lg:mb-20">
          
          <div className="flex-1 max-w-2xl">
            {/* Minimal Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-100 bg-white shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span className="text-brand-dark/80 text-sm font-medium">Frequently Asked Questions</span>
            </div>
            
            <h2 className="text-h2 font-bold text-brand-dark leading-[1.15] tracking-tight">
              Helping you Understand Our Work Better
            </h2>
          </div>

          <div className="flex-1 max-w-xl flex flex-col items-start lg:items-end lg:text-right">
            <p className="text-gray-500 text-lg md:text-[1.15rem] leading-relaxed mb-8 lg:mb-10 lg:text-left ml-0 lg:ml-8">
              We&apos;ve gathered answers to the questions we hear most, making it easy for you to learn about our work, values, and the impact we create together.
            </p>
            
            <button className="group flex items-center justify-center gap-2 bg-primary hover:bg-brand-dark text-brand-dark hover:text-white transition-all duration-300 px-8 py-4 font-bold text-lg">
              Contact Us Now
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>

        </div>

        {/* FAQ Accordion Section */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 items-start">
          
          {/* Left Column (Q1-Q4) */}
          <div className="flex-1 w-full flex flex-col gap-4">
            {leftColumnFaqs.map((faq, index) => {
              const actualIndex = index; // 0 to 3
              const isOpen = openIndex === actualIndex;
              
              return (
                <div 
                  key={actualIndex}
                  className={`group relative rounded-lg transition-all duration-400 overflow-hidden ${
                    isOpen ? 'bg-primary' : 'bg-gray-50'
                  }`}
                >
                  {/* Hover Sweep Background for Inactive State */}
                  {!isOpen && (
                    <div className="absolute inset-0 bg-primary z-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                  )}

                  {/* Clickable Header */}
                  <div 
                    onClick={() => toggleAccordion(actualIndex)}
                    className="relative z-10 px-6 md:px-8 py-5 flex justify-between items-center gap-4 cursor-pointer"
                  >
                    <h3 className={`text-lg md:text-[1.1rem] transition-colors duration-300 ${isOpen ? 'text-brand-dark font-semibold' : 'text-brand-dark font-medium cursor-pointer'}`}>
                      {faq.question}
                    </h3>
                    <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-500 ${
                      isOpen 
                        ? 'bg-brand-dark text-primary' 
                        : 'bg-primary text-white group-hover:bg-brand-dark group-hover:text-primary'
                    }`}>
                      {isOpen ? <Minus className="w-5 h-5" strokeWidth={2.5}/> : <Plus className="w-5 h-5" strokeWidth={2.5}/>}
                    </div>
                  </div>
                  
                  {/* Expandable Content */}
                  <div className={`relative z-10 grid transition-all duration-400 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}>
                    <div className="overflow-hidden">
                      <p className={`px-6 md:px-8 pb-6 pt-2 leading-relaxed text-[1.05rem] ${
                        isOpen ? 'text-brand-dark/90' : 'text-gray-600'
                      }`}>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column (Q5-Q8) */}
          <div className="flex-1 w-full flex flex-col gap-4">
            {rightColumnFaqs.map((faq, index) => {
              const actualIndex = index + 4; // 4 to 7
              const isOpen = openIndex === actualIndex;
              
              return (
                <div 
                  key={actualIndex}
                  className={`group relative rounded-lg transition-all duration-400 overflow-hidden ${
                    isOpen ? 'bg-primary' : 'bg-gray-50'
                  }`}
                >
                  {/* Hover Sweep Background for Inactive State */}
                  {!isOpen && (
                    <div className="absolute inset-0 bg-primary z-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                  )}

                  {/* Clickable Header */}
                  <div 
                    onClick={() => toggleAccordion(actualIndex)}
                    className="relative z-10 px-6 md:px-8 py-5 flex justify-between items-center gap-4 cursor-pointer"
                  >
                    <h3 className={`text-lg md:text-[1.1rem] transition-colors duration-300 ${isOpen ? 'text-brand-dark font-semibold' : 'text-brand-dark font-medium cursor-pointer'}`}>
                      {faq.question}
                    </h3>
                    <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-500 ${
                      isOpen 
                        ? 'bg-brand-dark text-primary' 
                        : 'bg-primary text-white group-hover:bg-brand-dark group-hover:text-primary'
                    }`}>
                      {isOpen ? <Minus className="w-5 h-5" strokeWidth={2.5}/> : <Plus className="w-5 h-5" strokeWidth={2.5}/>}
                    </div>
                  </div>
                  
                  {/* Expandable Content */}
                  <div className={`relative z-10 grid transition-all duration-400 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}>
                    <div className="overflow-hidden">
                       <p className={`px-6 md:px-8 pb-6 pt-2 leading-relaxed text-[1.05rem] ${
                        isOpen ? 'text-brand-dark/90' : 'text-gray-600'
                      }`}>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
