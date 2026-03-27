import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function EventsCTA() {
  return (
    <section className="bg-primary py-16 md:py-20">
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
          className="inline-flex items-center gap-2 bg-brand-dark text-white font-bold px-8 py-4 rounded-full hover:bg-brand-dark/90 transition-all duration-300 shadow-xl"
        >
          Get Involved
          <ArrowUpRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
