"use client";

import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const SLIDES = [
  {
    id: 1,
    title1: "12,000+",
    subtitle1: "Lives Impacted",
    text1: "Providing education, healthcare, and support programs that have positively affected communities.",
    centerImage: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop",
    title2: "Real Community Impact",
    text2: "Every program we run is designed to address genuine community needs.",
    bullets: ["Ensuring that every initiative delivers", "We track outcomes & monitor progress"],
    avatarStack: [
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=150",
      "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=150",
      "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=150",
    ]
  },
  {
    id: 2,
    title1: "500+",
    subtitle1: "Schools Built",
    text1: "Constructing modern learning environments in remote areas to foster future growth.",
    centerImage: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2070&auto=format&fit=crop",
    title2: "Sustainable Learning",
    text2: "Our schools are designed with solar energy and sustainable water systems.",
    bullets: ["Eco-friendly infrastructure", "Long-term maintenance support"],
    avatarStack: [
      "https://images.unsplash.com/photo-1524486361537-8ad15938e1a3?q=80&w=150",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=150",
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=150",
    ]
  }
];

export default function OurBenefits() {
  return (
    <section className="bg-[#0b1c14] py-16 md:py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M54.627 0l.83.83-29.083 29.084L54.627 59.17l-.83.83-29.5-29.5L54.627 0zM26.29 0l.83.83-29.083 29.084L26.29 59.17l-.83.83-29.5-29.5L26.29 0z\\' fill=\\'%23ffffff\\' fill-rule=\\'evenodd\\'/%3E%3C/svg%3E')",
        }}
      />

      <div className="max-w-[1320px] mx-auto px-5 lg:px-10 relative z-10">
        <Carousel opts={{ loop: true, align: "start" }} className="w-full">
          
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12 md:mb-16">
            <div className="max-w-[650px]">
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full pl-2 pr-5 py-1 mb-6">
                <span className="size-2 rounded-full bg-primary" />
                <span className="text-[0.85rem] font-medium text-white/90">Our Benefits</span>
              </div>
              <h2 className="font-headline font-extrabold text-white text-h2 mb-6">
                Thoughtful Actions with <br className="hidden lg:block"/> Measurable Impact
              </h2>
            </div>

            <div className="flex flex-col items-start md:items-end gap-6 w-full md:w-auto">
              <p className="font-stack-sans text-white/70 leading-[1.7] text-[0.98rem] max-w-[450px] md:text-right">
                We plan and execute every initiative with care, clarity, and accountability. By setting clear goals and tracking outcomes, we ensure our actions deliver real impact.
              </p>
              
              <div className="flex flex-col items-start md:items-end gap-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 bg-primary text-brand-dark font-bold px-6 py-3.5 rounded-lg shadow-btn-yellow hover:bg-primary-light transition-all duration-200"
                >
                  Contact Us
                  <ArrowUpRight className="size-5" strokeWidth={2.5} />
                </Link>
                
                <div className="flex items-center gap-3">
                  <CarouselPrevious className="static translate-y-0 h-[52px] w-[52px] bg-white/5 border-white/20 text-white hover:bg-primary hover:text-brand-dark transition-all rounded-full" />
                  <CarouselNext className="static translate-y-0 h-[52px] w-[52px] bg-white/5 border-white/20 text-white hover:bg-primary hover:text-brand-dark transition-all rounded-full" />
                </div>
              </div>
            </div>
          </div>

          <CarouselContent>
            {SLIDES.map((slide) => (
              <CarouselItem key={slide.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  
                  {/* Card 1: Lives Impacted */}
                  <div className="bg-[#1e342b] rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between min-h-[420px] border border-white/5 order-1 md:order-1 lg:order-1">
                    <div>
                      <h3 className="text-white font-headline font-extrabold text-5xl mb-6">
                        {slide.title1}<sup className="text-primary text-3xl ml-1">+</sup>
                      </h3>
                      <div className="size-14 rounded-full bg-primary flex items-center justify-center mb-10 shadow-lg text-brand-dark">
                         <svg className="size-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>
                      </div>
                    </div>
                    <div className="mt-auto">
                      <h4 className="text-white font-headline font-bold text-xl mb-4 border-t border-white/10 pt-6">
                        {slide.subtitle1}
                      </h4>
                      <p className="text-white/60 text-[0.95rem] leading-relaxed">
                        {slide.text1}
                      </p>
                    </div>
                  </div>

                  {/* Card 2: Real Community Impact */}
                  {/* Order-3 on Mobile, Order-2 on Tablet (puts it next to Card 1), Order-3 on Desktop */}
                  <div className="bg-[#1e342b] rounded-[2.5rem] p-8 md:p-10 flex flex-col border border-white/5 order-3 md:order-2 lg:order-3">
                    <div className="flex -space-x-3 mb-10">
                      {slide.avatarStack.map((img, i) => (
                        <div key={i} className="size-14 rounded-full border-[3px] border-[#1e342b] overflow-hidden bg-gray-800">
                          <img src={img} alt="Volunteer" className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                    <h4 className="text-white font-headline font-bold text-2xl mb-4 border-b border-white/10 pb-5">
                      {slide.title2}
                    </h4>
                    <p className="text-white/60 text-[0.95rem] leading-relaxed mb-8">
                      {slide.text2}
                    </p>
                    <ul className="space-y-4">
                      {slide.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-center gap-3 text-white/90 text-sm font-medium">
                          <div className="size-5 rounded-full bg-primary/20 flex items-center justify-center">
                            <Check className="size-3 text-primary" strokeWidth={4} />
                          </div>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Image Section */}
                  {/* Order-2 on Mobile (Card 1 -> Image -> Card 2), Order-3 on Tablet (Spans bottom), Order-2 on Desktop (Center) */}
                  <div className="h-[350px] md:h-[450px] lg:h-full rounded-[2.5rem] overflow-hidden order-2 md:order-3 lg:order-2 md:col-span-2 lg:col-span-1">
                    <img 
                      src={slide.centerImage} 
                      alt="Project impact" 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                    />
                  </div>

                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}