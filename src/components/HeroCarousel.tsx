"use client";

import * as React from "react";
import Image from "next/image";

import { heroPhotos } from "@/data/photos";
import { cn } from "@/lib/utils";

const INTERVAL_MS = 5000;

export function HeroCarousel() {
  const [index, setIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const [reduceMotion, setReduceMotion] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  React.useEffect(() => {
    const onVisibility = () => {
      if (document.hidden) setPaused(true);
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () =>
      document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  React.useEffect(() => {
    if (reduceMotion || paused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % heroPhotos.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused, reduceMotion]);

  const visibleIndex = reduceMotion ? 0 : index;

  return (
    <div
      className="absolute inset-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {heroPhotos.map((photo, i) => (
        <div
          key={photo.id}
          aria-hidden={i !== visibleIndex}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            i === visibleIndex ? "opacity-100" : "opacity-0"
          )}
        >
          <Image
            src={photo.url}
            alt={photo.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-ltm-navy/55"
      />

      {!reduceMotion && (
        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {heroPhotos.map((photo, i) => (
            <button
              key={photo.id}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === visibleIndex}
              className={cn(
                "h-2.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ltm-navy",
                i === visibleIndex
                  ? "w-8 bg-white"
                  : "w-2.5 bg-white/50 hover:bg-white/75"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
