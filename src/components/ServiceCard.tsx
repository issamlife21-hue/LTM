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
      className="group flex h-full flex-col rounded-md border-2 border-l-4 border-ltm-border border-l-transparent bg-white p-5 transition-all duration-200 hover:border-ltm-black hover:border-l-ltm-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ltm-navy focus-visible:ring-offset-2"
    >
      <div className="mb-3 flex items-center gap-3">
        <Icon className="h-6 w-6 text-ltm-black" aria-hidden="true" />
        <h3 className="text-lg font-bold text-ltm-black">{title}</h3>
      </div>
      <p className="flex-1 text-base leading-relaxed text-ltm-ink">
        {description}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ltm-black group-hover:underline">
        Full details
        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
      </span>
    </Link>
  );
}
