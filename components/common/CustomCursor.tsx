"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable on mobile or if no fine pointer (touch devices)
    if (
      typeof window === "undefined" ||
      window.innerWidth <= 767 ||
      !window.matchMedia("(pointer: fine)").matches
    ) {
      return;
    }

    const dot = dotRef.current;
    if (!dot) return;

    // Target position (where mouse actually is)
    let mx = 0;
    let my = 0;
    // Current rendered position (lerps toward target)
    let cx = 0;
    let cy = 0;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;

      /**
       * VISIBILITY CHECK
       * We check the hover target directly on every move.
       * This is the most reliable way as it bypasses event propagation issues.
       */
      const target = e.target as HTMLElement;
      if (target && target.closest) {
        // Hide if over Navbar, Footer, any Link/Button, or input elements
        const isForbidden = !!target.closest(
          "header, footer, nav, a, button, [role='button'], input, textarea, select, [role='dialog']"
        );
        
        if (isForbidden) {
          dot.dataset.hidden = "1";
        } else {
          delete dot.dataset.hidden;
        }
      }
    };

    // Lerp factor — 0.15 means the dot trails ~100ms behind the real cursor
    const LERP = 0.15;

    const animate = () => {
      cx += (mx - cx) * LERP;
      cy += (my - cy) * LERP;
      dot.style.left = `${cx}px`;
      dot.style.top = `${cy}px`;
      rafId = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMove);
    rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    // Small yellow trailing dot — native cursor stays visible on top
    <div
      ref={dotRef}
      className={[
        "fixed pointer-events-none z-[9999]",
        "-translate-x-1/2 -translate-y-1/2",
        "hidden md:block",
        // Default: 10px yellow dot
        "size-2.5 rounded-full bg-primary",
        // Smooth fade-out duration
        "transition-opacity duration-150 ease-out",
        // Hidden when data-hidden is set
        "data-[hidden]:opacity-0",
      ].join(" ")}
    />
  );
}
