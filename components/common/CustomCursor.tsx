"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

    // Grow dot slightly when hovering interactive elements
    const targets = document.querySelectorAll<HTMLElement>(
      "a, button, [role='button']",
    );
    const grow = () => {
      dot.dataset.hov = "1";
    };
    const shrink = () => {
      delete dot.dataset.hov;
    };

    targets.forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", grow);
        el.removeEventListener("mouseleave", shrink);
      });
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
        // Grows slightly on hover over interactive elements
        "transition-[width,height] duration-150 ease-out",
        "data-[hov]:size-4 data-[hov]:bg-primary/70",
      ].join(" ")}
    />
  );
}
