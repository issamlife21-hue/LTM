"use client";

import * as React from "react";
import Image from "next/image";

import { heroPhotos } from "@/data/photos";
import { cn } from "@/lib/utils";

const INTERVAL_MS = 3200;

export function HeroCarousel() {
  const [index, setIndex] = React.useState(0);
  const [reduceMotion, setReduceMotion] = React.useState(false);

  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  React.useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % heroPhotos.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion, index]);

  const handleDotClick = (i: number) => {
    setIndex(i);
  };

  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden">
      {heroPhotos.map((photo, i) => (
        <div
          key={photo.id}
          aria-hidden={i !== index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            i === index ? "opacity-100" : "opacity-0"
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
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ltm-black/85 via-ltm-black/40 to-transparent"
      />

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {heroPhotos.map((photo, i) => (
          <button
            key={photo.id}
            type="button"
            onClick={() => handleDotClick(i)}
            aria-label={`Go to slide ${i + 1} of ${heroPhotos.length}`}
            aria-current={i === index}
            className={cn(
              "h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ltm-black",
              i === index
                ? "w-8 bg-white"
                : "w-2 bg-white/50 hover:bg-white/75"
            )}
          />
        ))}
      </div>
    </div>
  );
}
