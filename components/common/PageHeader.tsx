import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PageHeaderProps {
  title: string;
  highlightedWord?: string; // e.g. "Events" to highlight in yellow
  subtitle?: string;
  breadcrumbs: BreadcrumbItem[];
  className?: string;
  showPattern?: boolean;
}

export default function PageHeader({
  title,
  highlightedWord,
  subtitle,
  breadcrumbs,
  className,
  showPattern = true,
}: PageHeaderProps) {
  
  // Logic to highlight a word in the title if provided
  const renderTitle = () => {
    if (!highlightedWord || !title.includes(highlightedWord)) {
      return title;
    }
    const parts = title.split(highlightedWord);
    return (
      <>
        {parts[0]}
        <span className="text-primary">{highlightedWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section 
      className={cn(
        "relative bg-[#f8faf9] pt-28 pb-20 overflow-hidden border-b border-brand-dark/5",
        className
      )}
    >
      {/* ── Visible dot-grid pattern ── */}
      {showPattern && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #0e2218 1.5px, transparent 1.5px)",
            backgroundSize: "28px 28px",
            opacity: 0.10,
          }}
        />
      )}

      {/* ── Soft gradients ── */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/8 via-transparent to-brand-dark/5 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-[420px] h-[420px] bg-primary/25 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-0 -left-16 w-72 h-72 bg-brand-dark/8 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ── Breadcrumbs (Top-aligned) ── */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-brand-dark/50 mb-10 font-medium">
          {breadcrumbs.map((item, index) => {
            const isLast = index === breadcrumbs.length - 1;
            return (
              <React.Fragment key={index}>
                {item.href && !isLast ? (
                  <Link href={item.href} className="hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className={cn("font-medium", isLast ? "text-primary font-bold" : "")}>
                    {item.label}
                  </span>
                )}
                {!isLast && <span className="text-brand-dark/20 text-xs">/</span>}
              </React.Fragment>
            );
          })}
        </nav>

        {/* ── Main content block ── */}
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/40 rounded-full pl-2 pr-5 py-1.5 mb-7">
            <span className="size-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold text-brand-dark tracking-widest uppercase">
              Karamsthali NGO
            </span>
          </div>

          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-brand-dark leading-tight mb-6 tracking-tight">
            {renderTitle()}
          </h1>

          {subtitle && (
            <p className="text-brand-dark/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-2">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
