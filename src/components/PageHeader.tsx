import * as React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  note?: string;
  actions?: React.ReactNode;
  className?: string;
  backgroundImage?: { url: string; alt: string };
};

export function PageHeader({
  title,
  subtitle,
  note,
  actions,
  className,
  backgroundImage,
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-ltm-navy text-white",
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
            className="absolute inset-0 bg-ltm-navy/65"
          />
        </>
      )}
      <div className="container-ltm relative flex flex-col gap-4 py-12 md:flex-row md:items-end md:justify-between md:py-16">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold text-white md:text-4xl">{title}</h1>
          {subtitle && (
            <p className="mt-3 text-base leading-relaxed text-slate-200 md:text-lg">
              {subtitle}
            </p>
          )}
          {note && (
            <p className="mt-3 text-sm italic text-slate-300">{note}</p>
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
