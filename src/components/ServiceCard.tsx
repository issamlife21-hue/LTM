import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { ServiceIcon } from "@/data/services";

type ServiceCardProps = {
  icon: ServiceIcon;
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
      className="group flex h-full flex-col rounded-md border border-ltm-border bg-white p-5 transition-colors hover:border-ltm-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ltm-navy focus-visible:ring-offset-2"
    >
      <div className="mb-3 flex items-center gap-3">
        <Icon className="h-5 w-5 text-ltm-black" aria-hidden="true" />
        <h3 className="text-base font-semibold text-ltm-black">{title}</h3>
      </div>
      <p className="flex-1 text-sm leading-relaxed text-ltm-slate">
        {description}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-ltm-black group-hover:underline">
        Full details
        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
      </span>
    </Link>
  );
}
