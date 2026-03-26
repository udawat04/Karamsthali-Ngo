import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PageHeaderProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
  backgroundImage?: string;
  className?: string;
  overlayOpacity?: number;
}

export default function PageHeader({
  title,
  breadcrumbs,
  backgroundImage = 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
  className,
  overlayOpacity = 0.6,
}: PageHeaderProps) {
  return (
    <section 
      className={cn(
        "relative w-full h-[400px] md:h-[500px] lg:h-[550px] flex items-center justify-center overflow-hidden",
        className
      )}
    >
      {/* Background Image with subtle zoom animation */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat animate-image-zoom transition-transform duration-[10s] ease-out"
        style={{ 
          backgroundImage: `url('${backgroundImage}')`,
        }}
      />
      
      {/* Sophisticated Overlay - Darker, more professional, less "plain green" */}
      <div 
        className="absolute inset-0 z-10 bg-linear-to-b from-brand-dark/90 via-brand-dark/40 to-brand-dark/90"
      />
      
      {/* Subtle radial glow to highlight the center title */}
      <div className="absolute inset-0 z-10 bg-radial-[at_center] from-primary/10 via-transparent to-transparent opacity-40" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center px-4 text-center mt-12 md:mt-16 max-w-4xl mx-auto">
        <h1 className="text-h1 font-extrabold text-white mb-6 tracking-tight drop-shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          {title}
        </h1>
        
        <nav aria-label="Breadcrumb" className="px-6 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center text-sm md:text-base font-medium text-white/90 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300 fill-mode-both">
          {breadcrumbs.map((item, index) => {
            const isLast = index === breadcrumbs.length - 1;
            return (
              <React.Fragment key={index}>
                {item.href && !isLast ? (
                  <Link href={item.href} className="text-white/70 hover:text-primary transition-colors duration-300">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-white font-bold">{item.label}</span>
                )}
                
                {!isLast && (
                  <span className="mx-2 md:mx-4 text-white/30">/</span>
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes imageZoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        .animate-image-zoom {
          animation: imageZoom 20s ease-out forwards;
        }
      `}} />
    </section>
  );
}
