import Link from "next/link";
import Navbar2 from "@/components/common/Navbar2";
import PageHeader from "@/components/common/PageHeader";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "404 – Page Not Found | Karamsthali NGO",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <>
      <PageHeader 
        title="Oops! Page Not Found"
        highlightedWord="Oops!"
        subtitle="The page you are looking for might have been moved or removed. Let's get you back on track."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "404 Error" }
        ]}
      />
      {/* 404 content */}
      <main className="min-h-screen bg-[#f5f5f5] flex flex-col items-center justify-center px-4 pt-10 pb-20">
        {/* Illustrated 404 */}
        <div className="flex items-center justify-center gap-0 select-none" aria-hidden="true">

          {/* Left "4" */}
          <span
            className="font-headline font-extrabold text-brand-dark leading-none"
            style={{ fontSize: "clamp(7rem, 18vw, 14rem)", letterSpacing: "-0.04em" }}
          >
            4
          </span>

          {/* Centre circular illustration */}
          <div className="relative flex items-center justify-center"
            style={{ width: "clamp(7rem, 18vw, 14rem)", height: "clamp(7rem, 18vw, 14rem)" }}>
            <svg
              viewBox="0 0 220 220"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              {/* ── Outer decorative ring ── */}
              <circle cx="110" cy="110" r="100" fill="#0e2218" />

              {/* ── Gold leaf / wreath sprigs ── */}
              {/* Left sprigs */}
              <g transform="translate(28, 88) rotate(-30)">
                <ellipse cx="0" cy="0" rx="8" ry="14" fill="#f0c040" opacity="0.85" />
              </g>
              <g transform="translate(20, 108) rotate(-50)">
                <ellipse cx="0" cy="0" rx="6" ry="11" fill="#f0c040" opacity="0.7" />
              </g>
              <g transform="translate(36, 130) rotate(-15)">
                <ellipse cx="0" cy="0" rx="7" ry="12" fill="#f0c040" opacity="0.75" />
              </g>
              {/* Right sprigs */}
              <g transform="translate(192, 88) rotate(30)">
                <ellipse cx="0" cy="0" rx="8" ry="14" fill="#f0c040" opacity="0.85" />
              </g>
              <g transform="translate(200, 108) rotate(50)">
                <ellipse cx="0" cy="0" rx="6" ry="11" fill="#f0c040" opacity="0.7" />
              </g>
              <g transform="translate(184, 130) rotate(15)">
                <ellipse cx="0" cy="0" rx="7" ry="12" fill="#f0c040" opacity="0.75" />
              </g>
              {/* Top tiny leaves */}
              <g transform="translate(88, 28) rotate(-20)">
                <ellipse cx="0" cy="0" rx="5" ry="9" fill="#f0c040" opacity="0.6" />
              </g>
              <g transform="translate(132, 28) rotate(20)">
                <ellipse cx="0" cy="0" rx="5" ry="9" fill="#f0c040" opacity="0.6" />
              </g>

              {/* ── Person body ── */}
              {/* Head */}
              <circle cx="110" cy="88" r="20" fill="#f4a261" />
              {/* Hair / beanie */}
              <ellipse cx="110" cy="72" rx="21" ry="14" fill="#0e2218" />
              <ellipse cx="110" cy="64" rx="12" ry="7" fill="#0e2218" />
              {/* Beanie pom */}
              <circle cx="110" cy="58" r="5" fill="#f0c040" />

              {/* Body / torso */}
              <rect x="88" y="108" width="44" height="46" rx="10" fill="#f4793b" />

              {/* ── Binoculars ── */}
              {/* Left lens barrel */}
              <rect x="78" y="110" width="22" height="16" rx="7" fill="#1a3a26" />
              <circle cx="89" cy="118" r="7" fill="#0e2218" />
              <circle cx="89" cy="118" r="4" fill="#2a5a3a" />
              <circle cx="89" cy="118" r="2" fill="#3b82f6" opacity="0.6" />
              {/* Right lens barrel */}
              <rect x="120" y="110" width="22" height="16" rx="7" fill="#1a3a26" />
              <circle cx="131" cy="118" r="7" fill="#0e2218" />
              <circle cx="131" cy="118" r="4" fill="#2a5a3a" />
              <circle cx="131" cy="118" r="2" fill="#3b82f6" opacity="0.6" />
              {/* Bridge between lenses */}
              <rect x="100" y="113" width="20" height="8" rx="3" fill="#112a1a" />

              {/* Arms holding binoculars */}
              <rect x="78" y="118" width="12" height="22" rx="5" fill="#f4a261" transform="rotate(-15 84 129)" />
              <rect x="130" y="118" width="12" height="22" rx="5" fill="#f4a261" transform="rotate(15 136 129)" />

              {/* Legs / bottom cropped by circle */}
              <rect x="95" y="150" width="12" height="30" rx="6" fill="#1a3a26" />
              <rect x="113" y="150" width="12" height="30" rx="6" fill="#1a3a26" />
            </svg>
          </div>

          {/* Right "4" */}
          <span
            className="font-headline font-extrabold text-brand-dark leading-none"
            style={{ fontSize: "clamp(7rem, 18vw, 14rem)", letterSpacing: "-0.04em" }}
          >
            4
          </span>
        </div>

        {/* Text + CTA */}
        <div className="text-center mt-6 max-w-lg">
          <h1 className="text-3xl md:text-4xl font-extrabold text-brand-dark mb-3">
            Oops! Page Not Found
          </h1>
          <p className="text-gray-500 text-base md:text-lg mb-8">
            The page you are looking for does not exist
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary text-brand-dark font-bold px-8 py-3.5 rounded-lg hover:bg-primary-light transition-all duration-300 shadow-btn-yellow hover:shadow-none text-sm md:text-base"
          >
            Back To Homepage
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
    </>
  );
}
