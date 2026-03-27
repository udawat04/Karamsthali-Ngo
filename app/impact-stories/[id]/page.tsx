import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import impactStories from "@/data/impact-stories.json";
import Navbar2 from "@/components/common/Navbar2";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ImpactStoryPage({ params }: PageProps) {
  const { id } = await params;
  const story = impactStories.find((s) => s.id === id);

  if (!story) return notFound();

  return (
    <>
      <Navbar2 />
      <main className="bg-white min-h-screen">
        
        {/* Standard Clean Hero Section (No Overlaps) */}
        <section className="relative w-full h-[50vh] min-h-[400px] flex flex-col items-center justify-center overflow-hidden">
          <Image
            src={story.bgImage}
            alt={`${story.name} Cover`}
            fill
            className="object-cover"
            priority
          />
          {/* Overlay to ensure readability */}
          <div className="absolute inset-0 bg-brand-dark/80"></div>
          
          <div className="relative z-10 text-center text-white px-4 flex flex-col items-center w-full max-w-5xl">
            <Link 
              href="/home-2" 
              className="inline-flex items-center gap-2 text-xs md:text-sm tracking-[0.25em] font-medium mb-6 hover:text-primary transition-colors uppercase"
            >
              <span>&larr;</span> BACK TO HOME
            </Link>

            <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-white drop-shadow-md">
              {story.name}
            </h1>
            
            <p className="text-lg md:text-2xl font-light text-primary mt-2">
              {story.title}
            </p>
          </div>
        </section>

        {/* Story Details Section - Clean side-by-side gap layout */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-start">
            
            {/* Left Side: Portrait Image Container */}
            <div className="w-full md:w-1/3 shrink-0">
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-50">
                <Image
                  src={story.image}
                  alt={story.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Side: Article & Content */}
            <div className="w-full md:w-2/3 flex flex-col">
              
              <div className="w-16 h-1 bg-primary mb-8 rounded-full shadow-sm"></div>

              <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-brand-dark mb-8 leading-tight">
                The Journey of <span className="text-primary">{story.name}</span>
              </h2>

              <div className="prose prose-lg text-gray-600 prose-p:leading-relaxed prose-p:mb-6 max-w-none">
                {story.fullStory.split('\n\n').map((paragraph, index) => (
                  <p key={index}>
                    {paragraph}
                  </p>
                ))}
              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-100">
                <blockquote className="italic text-xl lg:text-2xl text-brand-800 border-l-4 border-primary pl-6 py-2">
                  "Every journey begins with a single step, fueled by opportunity."
                </blockquote>
              </div>

            </div>

          </div>
        </section>
      </main>
    </>
  );
}

export async function generateStaticParams() {
  return impactStories.map((story) => ({
    id: story.id,
  }));
}
