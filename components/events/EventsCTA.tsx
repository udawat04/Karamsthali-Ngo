import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function EventsCTA() {
  return (
    <section className="bg-primary py-8 md:py-8">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-4">
          Want to Volunteer at Our Events?
        </h2>
        <p className="text-brand-dark/70 text-lg mb-8">
          Your time and skills can create lasting change. Join our volunteer
          network and be part of the action on the ground.
        </p>
        <Link 
            href="/contact" 
            className="group relative overflow-hidden inline-flex items-center gap-2 bg-brand-dark text-white font-bold px-7 py-4 rounded-lg shadow-btn-yellow hover:shadow-none transition-all duration-300 mt-6 md:mt-8"
          >
            {/* Background Sweep from Left to Right */}
            <span className="absolute inset-0 bg-white w-0 group-hover:w-full transition-all duration-300 ease-out z-0" />
            
            {/* Button Content */}
            <span className="relative z-10 group-hover:text-brand-dark flex items-center gap-2 transition-colors duration-300">
              Get Involved
              <ArrowUpRight className="w-5 h-5 shrink-0 transition-transform duration-300 group-hover:rotate-45" strokeWidth={2.5} />
            </span>
          </Link>
      </div>
    </section>
  );
}
