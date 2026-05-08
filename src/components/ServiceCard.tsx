import * as React from "react";
import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
};

export function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-lg border border-ltm-border bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ltm-navy focus-visible:ring-offset-2"
    >
      <span
        className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-ltm-black text-white"
        aria-hidden="true"
      >
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="text-lg font-semibold text-ltm-black">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ltm-slate">
        {description}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-ltm-black group-hover:underline">
        Learn more
        <ArrowRight
          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
