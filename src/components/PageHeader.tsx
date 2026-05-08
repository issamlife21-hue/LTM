import * as React from "react";
import Image from "next/image";
import { Clock } from "lucide-react";

import { cn } from "@/lib/utils";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  note?: string;
  actions?: React.ReactNode;
  className?: string;
  backgroundImage?: { url: string; alt: string };
  estimatedTime?: string;
  crest?: { src: string; alt: string };
  align?: "left" | "center";
};

export function PageHeader({
  title,
  subtitle,
  note,
  actions,
  className,
  backgroundImage,
  estimatedTime,
  crest,
  align = "left",
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-ltm-black text-white",
        className
      )}
    >
      {backgroundImage && (
        <>
          <div className="absolute inset-0 opacity-40">
            <Image
              src={backgroundImage.url}
              alt={backgroundImage.alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-ltm-black/65"
          />
        </>
      )}
      <div
        className={cn(
          "container-ltm relative flex flex-col gap-3 py-10 md:py-14",
          align === "center"
            ? "items-center text-center"
            : "md:flex-row md:items-end md:justify-between"
        )}
      >
        <div
          className={cn(
            "max-w-3xl",
            align === "center" && "flex flex-col items-center"
          )}
        >
          {crest && (
            // Inline <img> so the SVG inherits currentColor for monochrome
            // rendering on the dark hero. Optimizing this small SVG via
            // next/image provides no meaningful savings.
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={crest.src}
              alt={crest.alt}
              width={80}
              height={96}
              className="mb-3 h-16 w-auto text-white"
              style={{ color: "#ffffff" }}
            />
          )}
          <h1 className="font-serif text-3xl text-white md:text-4xl">
            {title}
          </h1>
          {estimatedTime && (
            <p className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium text-white">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              {estimatedTime}
            </p>
          )}
          {subtitle && (
            <p className="mt-2 text-base leading-relaxed text-slate-200 md:text-lg">
              {subtitle}
            </p>
          )}
          {note && (
            <p className="mt-2 text-sm italic text-slate-300">{note}</p>
          )}
        </div>
        {actions && (
          <div className="flex shrink-0 flex-wrap gap-2 print:hidden">
            {actions}
          </div>
        )}
      </div>
    </section>
  );
}
