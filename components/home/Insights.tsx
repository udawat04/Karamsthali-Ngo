import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const BLOGS = [
  {
    category: "Social Impact",
    title: "Building Stronger Communities Through Collective Action",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop",
    link: "/blog/1"
  },
  {
    category: "Education Access",
    title: "Why Education Remain Foundation of Social Change",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop",
    link: "/blog/2"
  },
  {
    category: "Gender Equality",
    title: "Empowering Women Lead Change in Their Communities",
    image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070&auto=format&fit=crop",
    link: "/blog/3"
  }
];

export default function Insights() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
        
        {/* Header */}
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white border border-brand-dark/10 rounded-full pl-2 pr-5 py-1 mb-6 shadow-sm">
            <span className="size-2 rounded-full bg-primary" />
            <span className="text-[0.85rem] font-medium text-brand-dark">Latest Blogs</span>
          </div>
          <h2 className="font-headline font-extrabold text-brand-dark leading-[1.1] tracking-[-0.025em] text-[clamp(2.5rem,4vw,3.5rem)] mb-6">
            Insights, Stories & Impact
          </h2>
          <p className="font-stack-sans text-brand-dark/60 leading-[1.7] text-[1.05rem]">
            Read real stories from the field, community experiences, and thought-provoking 
            perspectives that reflect our mission and impact.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOGS.map((blog, idx) => (
            <div 
              key={idx} 
              className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${blog.image}')` }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-black/20 transition-opacity duration-500 group-hover:opacity-90" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                {/* Top Badge */}
                <div className="self-start">
                  <span className="inline-block bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold text-xs py-1.5 px-4 rounded-full">
                    {blog.category}
                  </span>
                </div>

                {/* Bottom Text */}
                <div className="mt-auto">
                  <h3 className="font-headline font-bold text-white text-2xl leading-tight mb-5 drop-shadow-md">
                    <Link href={blog.link} className="hover:text-primary transition-colors">
                      {blog.title}
                    </Link>
                  </h3>
                  
                  <div className="pt-5 border-t border-white/20 transition-colors group-hover:border-primary/50">
                    <Link href={blog.link} className="inline-flex items-center gap-2 font-bold text-[0.95rem] text-white hover:text-primary transition-colors group/link">
                      Read More
                      <ArrowUpRight className="size-4 shrink-0" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
