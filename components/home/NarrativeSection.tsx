"use client";
import Image from "next/image";

export default function NarrativeSection() {
  return (
    <section className="bg-[#f5f5f0] py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 lg:px-12">
        
        {/* HEADER AREA */}
        <div className="flex flex-col items-center mb-12 lg:mb-16 text-center text-brand-dark">
          <h2 className="font-signature text-h2 mb-6 relative pb-4 inline-block tracking-tight leading-tight">
            Karma Sthali Narrative
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-[4px] bg-[#1e4d32] rounded-full" />
          </h2>
          <div className="bg-[#1d4ed8] text-white text-xs md:text-sm font-bold px-6 py-2 rounded-sm uppercase tracking-widest shadow-md">
            Primary cause
          </div>
        </div>

        {/* MAIN LAYOUT 
            Using flexbox for extremely stable responsive behavior.
            Mobile/Tablet: Stacked (Graphic, then Left, then Right)
            Desktop: Row (Left, Graphic, Right)
        */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-8 xl:gap-10">
          
          {/* ── LEFT COLUMN (Blue) ── */}
          <div className="flex-1 w-full flex flex-col gap-6 order-2 lg:order-1 lg:pt-6">
            <div>
              <div className="flex items-center gap-3 mb-5 border-b-2 border-[#1d4ed8] pb-2 w-full lg:max-w-max lg:pr-6">
                <span className="size-8 md:size-9 rounded-full border-2 border-[#1d4ed8] text-[#1d4ed8] flex items-center justify-center font-bold text-sm shadow-sm shrink-0">1</span>
                <h3 className="font-bold text-[#1d4ed8] text-[1.1rem] md:text-lg">Food for education (primary cause)</h3>
              </div>
              <ul className="space-y-5 text-gray-800 text-[0.95rem] md:text-[1rem] leading-relaxed">
                <li className="pl-6 relative">
                  <span className="absolute left-0 top-[10px] size-2 bg-gray-500 rounded-full" />
                  <strong className="text-[#111827]">Core Mid Day Meal program</strong>
                  <br /><span className="text-gray-600 block mt-1">including kitchen facilities (vehicles, salaries, trainings etc.)</span>
                </li>
                <li className="pl-6 relative">
                  <span className="absolute left-0 top-[10px] size-2 bg-gray-500 rounded-full" />
                  <strong className="text-[#111827]">Other supporting programs</strong>
                  <ul className="mt-3 space-y-4">
                    <li className="text-gray-600 flex items-start gap-3">
                       <span className="mt-[11px] w-2.5 h-[1.5px] bg-gray-400 shrink-0"/>
                       <span className="leading-snug"><strong className="text-gray-800">ICDS:</strong> Anganwadi feeding program (children in formative age group 3-6Y)</span>
                    </li>
                    <li className="text-gray-600 flex items-start gap-3">
                       <span className="mt-[11px] w-2.5 h-[1.5px] bg-gray-400 shrink-0"/>
                       <span className="leading-snug"><strong className="text-gray-800">Other meal programs:</strong> Milk distribution (in association with Govt.), breakfast feeding</span>
                    </li>
                    <li className="text-gray-600 flex items-start gap-3">
                       <span className="mt-[11px] w-2.5 h-[1.5px] bg-gray-400 shrink-0"/>
                       <span className="leading-snug"><strong className="text-gray-800">Infrastructure:</strong> Minimal upgrades supplementing core MDM program (seating areas with roof, infrastructure to serve, utensils)</span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          {/* ── CENTER GRAPHIC ── */}
          <div className="flex-shrink-0 w-full max-w-[320px] sm:max-w-[380px] md:max-w-[460px] lg:w-[380px] xl:w-[460px] flex justify-center order-1 lg:order-2 px-2">
            <div className="relative w-full aspect-square flex items-center justify-center">
              {/* mix-blend-multiply ensures any white background of your image smoothly disappears into the light blue layout! */}
              <Image
                src="/ring-graphic.png" 
                alt="Social causes supported"
                width={500}
                height={500}
                className="w-full h-auto object-contain mix-blend-multiply transition-transform duration-700 hover:scale-[1.03]"
                priority
              />
            </div>
          </div>

          {/* ── RIGHT COLUMN (Green & Yellow) ── */}
          <div className="flex-1 w-full flex flex-col gap-10 lg:gap-14 order-3 lg:pt-6">
            
            {/* Section 2 (Green) */}
            <div>
              <div className="flex items-center gap-3 mb-5 border-b-2 border-[#1e4d32] pb-2 w-full lg:max-w-max lg:pr-6">
                <span className="size-8 md:size-9 rounded-full border-2 border-[#1e4d32] text-[#1e4d32] flex items-center justify-center font-bold text-sm shadow-sm shrink-0">2</span>
                <h3 className="font-bold text-[#1e4d32] text-[1.1rem] md:text-lg">Sustainability (ancillary cause)</h3>
              </div>
              <ul className="space-y-4 md:space-y-5 text-gray-800 text-[0.95rem] md:text-[1rem]">
                <li className="pl-6 relative">
                  <span className="absolute left-0 top-[10px] size-2 bg-gray-500 rounded-full" />
                  <strong className="text-[#111827]">Energy:</strong> <span className="text-gray-600">Shift to renewable sources of energy</span>
                </li>
                <li className="pl-6 relative">
                  <span className="absolute left-0 top-[10px] size-2 bg-gray-500 rounded-full" />
                  <strong className="text-[#111827]">Water:</strong> <span className="text-gray-600">Minimize non-cooking freshwater usage</span>
                </li>
                <li className="pl-6 relative">
                  <span className="absolute left-0 top-[10px] size-2 bg-gray-500 rounded-full" />
                  <strong className="text-[#111827]">Waste:</strong> <span className="text-gray-600">Effective waste management</span>
                </li>
              </ul>
            </div>

            {/* Section 3 (Yellow) */}
            <div>
               <div className="flex items-center gap-3 mb-5 border-b-2 border-[#d4a832] pb-2 w-full lg:max-w-max lg:pr-6">
                <span className="size-8 md:size-9 rounded-full border-2 border-[#d4a832] text-[#d4a832] flex items-center justify-center font-bold text-sm shadow-sm shrink-0">3</span>
                <h3 className="font-bold text-[#d4a832] text-[1.1rem] md:text-lg">Education beyond MDM (ancillary cause)</h3>
              </div>
              <ul className="space-y-4 md:space-y-5 text-gray-800 text-[0.95rem] md:text-[1rem] leading-relaxed">
                <li className="pl-6 relative">
                  <span className="absolute left-0 top-[10px] size-2 bg-gray-500 rounded-full" />
                  <strong className="text-[#111827]">Scholarship program:</strong> <span className="text-gray-600 block mt-1">Financial aid for government school children and MDM beneficiaries seeking higher education / specialized skills training</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
