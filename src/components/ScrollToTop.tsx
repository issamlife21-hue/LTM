"use client";

import * as React from "react";
import { ChevronUp } from "lucide-react";

// Floating "back to top" control. Appears once the user has scrolled past
// a comfortable threshold, and sits above the mobile bottom nav so it never
// overlaps. Honors prefers-reduced-motion with an instant jump.
export function ScrollToTop() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Back to top"
      className={`fixed bottom-20 right-4 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-ltm-graphite bg-ltm-black text-white shadow-lg transition-opacity duration-200 md:bottom-6 md:right-6 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <ChevronUp className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}
