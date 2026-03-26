"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight, ArrowUpRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────
   Types
───────────────────────────────────────────── */
interface NavLink {
  label: string;
  href: string;
}

/* ─────────────────────────────────────────────
   Nav data — flat, NO dropdowns, NO children
───────────────────────────────────────────────── */
const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Pages", href: "/pages" },
  { label: "Contact Us", href: "/contact" },
];

/* ─────────────────────────────────────────────
   Component
───────────────────────────────────────────── */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const closeSheet = () => setSheetOpen(false);

  return (
    <>
      {/* ══════════════════════════════════════
          STICKY HEADER
      ══════════════════════════════════════ */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-brand-dark/95 backdrop-blur-[14px] border-b border-white/[0.06]"
            : "bg-transparent",
        )}
      >
        <div
          className={cn(
            "max-w-[1320px] mx-auto flex items-center justify-between",
            "px-10 h-[90px]",
            "max-lg:px-7",
            "max-md:px-5 max-md:h-[72px]",
          )}
        >
          {/* ── Logo: SVG only — the SVG file already contains the icon+wordmark ── */}
          <Link href="/" className="shrink-0 flex items-center">
            <Image
              src="/karm-logo.png"
              alt="Aasha"
              width={160}
              height={80}
              unoptimized
              priority
              className="h-20 w-auto max-md:h-9"
            />
          </Link>

          {/* ── Desktop nav links (lg+) ── */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "px-4 py-2.5 rounded-lg",
                  "font-stack-sans font-medium text-[0.9rem] text-white/90 hover:text-white",
                  "transition-colors duration-200 whitespace-nowrap",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* ── Right side: Donate + Hamburger ── */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Donate Now — always visible on md+ */}
            <Link
              href="/contact"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className={cn(
                "hidden lg:inline-flex items-center gap-2",
                "font-bold text-[0.9rem] px-5 py-3 rounded-lg",
                "transition-all duration-200",
                /* default: yellow bg, dark text */
                "bg-primary text-brand-dark",
                /* hover: white bg, dark text, no translate */
                "hover:bg-primary-light hover:text-brand-dark",
                "shadow-btn-yellow hover:shadow-none",
              )}
            >
              <span className="whitespace-nowrap">Donate Now</span>
              {/* Arrow: points top-right by default, right on hover */}
              {hovered ? (
                <ArrowRight className="size-4 shrink-0" strokeWidth={2.4} />
              ) : (
                <ArrowUpRight className="size-4 shrink-0" strokeWidth={2.4} />
              )}
            </Link>

            {/* Hamburger (< lg) */}
            <button
              onClick={() => setSheetOpen(true)}
              aria-label="Open menu"
              className={cn(
                "lg:hidden flex items-center justify-center",
                "size-[46px] rounded-lg bg-primary shrink-0",
                "active:scale-95 transition-transform duration-150",
              )}
            >
              <Menu className="size-5 text-brand-dark" strokeWidth={2.2} />
            </button>
          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════
          MOBILE / TABLET DRAWER  (shadcn Sheet)
      ══════════════════════════════════════ */}
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent
          side="right"
          className={cn(
            "w-[min(300px,86vw)] bg-brand-dark p-0 flex flex-col",
            "border-l border-white/[0.07]",
            "[&>button]:hidden", // hide shadcn's default close btn
          )}
        >
          {/* Drawer header */}
          <SheetHeader className="flex-row items-center justify-between px-5 h-[72px] shrink-0 border-b border-white/[0.07] space-y-0">
            <SheetTitle asChild>
              <Link href="/" onClick={closeSheet} className="flex items-center">
                <Image
                  src="/karm-logo.jpeg"
                  alt="Aasha"
                  width={110}
                  height={34}
                  unoptimized
                  className="h-8 w-auto"
                />
              </Link>
            </SheetTitle>

            {/* Close button */}
            <button
              onClick={closeSheet}
              aria-label="Close menu"
              className={cn(
                "size-9 rounded-lg bg-white/[0.08] hover:bg-white/[0.15]",
                "flex items-center justify-center",
                "text-white/70 hover:text-white transition-colors duration-200",
              )}
            >
              <X className="size-4" strokeWidth={2} />
            </button>
          </SheetHeader>

          {/* Drawer nav — flat links, no accordion */}
          <nav className="flex-1 overflow-y-auto py-3 px-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeSheet}
                className={cn(
                  "flex items-center px-3 py-3.5 rounded-xl",
                  "font-stack-sans font-medium text-[0.97rem]",
                  "text-white/88 hover:bg-white/[0.06] hover:text-white",
                  "transition-colors duration-150",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Drawer footer CTA */}
          <div className="px-4 pb-8 pt-3 shrink-0">
            <Link
              href="/contact"
              onClick={closeSheet}
              className={cn(
                "flex items-center justify-center gap-2 w-full py-3.5 rounded-xl",
                "bg-primary hover:bg-white text-brand-dark",
                "font-bold text-[0.95rem] transition-colors duration-200",
              )}
            >
              Donate Now
              <ArrowRight className="size-4" strokeWidth={2.2} />
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
