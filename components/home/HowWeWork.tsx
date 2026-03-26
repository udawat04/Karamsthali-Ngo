import Image from "next/image";
import React from "react";

// NOTE: I am using the same reliable Unsplash image placeholder for all items 
// right now to ensure they all load correctly for you. 
// You can replace the `image` URLs with your actual local or remote images.
const workItems = [
  {
    title: "PM POSHAN\nProgramme",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "Homeless\nMothers",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "Anganwadi\nFeeding",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "Morning\nNutrition\nProgramme",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "Scholarship\nProgramme",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=400&auto=format&fit=crop",
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Layer */}
        <div className="text-center mb-16">
          {/* Exactly matching the target design: dark blue text, green underline fitting text width */}
          <h2 className="text-3xl md:text-[36px] font-bold text-blue-dark inline-block relative pb-3">
            How we work to make a difference
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#43A047]"></span>
          </h2>
        </div>

        {/* Circles Container: centered flex flex-wrap works beautifully for exactly 5 items */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8 max-w-6xl mx-auto">
          {workItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center group cursor-pointer w-[140px] sm:w-[150px] md:w-[170px] lg:w-[180px]"
            >
              {/* Premium Animated Ring Container - exact sizes matching target image */}
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 mb-5 flex items-center justify-center rounded-full">
                {/* SVG wrapper for boundaries */}
                <svg
                  className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
                  viewBox="0 0 100 100"
                >
                  {/* Thick grey outer boundary */}
                  <circle
                    cx="50"
                    cy="50"
                    r="48"
                    fill="none"
                    className="stroke-gray-300"
                    strokeWidth="2"
                  />
                  {/* Animated Color Border (fills on hover) */}
                  {/* Circle Path Length: 2 * PI * 48 ≈ 301.59 */}
                  <circle
                    cx="50"
                    cy="50"
                    r="48"
                    fill="none"
                    className="stroke-[#43A047] transition-all duration-[800ms] ease-in-out [stroke-dasharray:301.59] [stroke-dashoffset:301.59] group-hover:[stroke-dashoffset:0]"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>

                {/* Inner Image Wrapper with perfect white gap calculation mimicking the target design */}
                <div className="relative w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-full overflow-hidden bg-white z-10 transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={item.image}
                    alt={item.title.replace("\n", " ")}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 150px, 200px"
                    priority={index === 0}
                  />
                </div>
              </div>

              {/* Title matches the target multi-line format */}
              <h3 className="text-center text-slate-600 font-medium text-[14px] md:text-[15px] leading-[1.3] whitespace-pre-line group-hover:text-[#43A047] transition-colors duration-300">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
