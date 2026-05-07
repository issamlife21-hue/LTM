import Link from "next/link";
import {
  ArrowRight,
  Car,
  Hash,
  IdCard,
  type LucideIcon,
  Wrench,
} from "lucide-react";

type Service = {
  label: string;
  href: string;
  icon: LucideIcon;
  hint: string;
};

const SERVICES: Service[] = [
  {
    label: "Get or renew a driver license",
    href: "/services/driver-license",
    icon: IdCard,
    hint: "From US$35",
  },
  {
    label: "Register or renew a vehicle",
    href: "/services/vehicle-registration",
    icon: Car,
    hint: "From US$78",
  },
  {
    label: "Get my vehicle inspected",
    href: "/services/vehicle-inspection",
    icon: Wrench,
    hint: "From US$15",
  },
  {
    label: "Get a license plate",
    href: "/services/license-plates",
    icon: Hash,
    hint: "Standard included with registration",
  },
];

export function ServiceAdvisor() {
  return (
    <section
      id="service-advisor"
      aria-labelledby="service-advisor-heading"
      className="bg-ltm-stone py-16"
    >
      <div className="container-ltm">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="service-advisor-heading"
            className="text-3xl text-ltm-black md:text-4xl"
          >
            What do you need today?
          </h2>
          <p className="mt-3 text-base text-ltm-slate md:text-lg">
            Pick a service to see what to bring, what it costs, and how long
            it takes.
          </p>
        </div>

        <ul className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2">
          {SERVICES.map((s) => (
            <li key={s.href}>
              <Link
                href={s.href}
                className="group flex items-center gap-4 rounded-lg border border-ltm-border bg-white p-4 transition-colors hover:border-ltm-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ltm-navy focus-visible:ring-offset-2"
              >
                <span
                  aria-hidden="true"
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ltm-black text-white"
                >
                  <s.icon className="h-5 w-5" />
                </span>
                <span className="flex flex-1 flex-col text-left">
                  <span className="font-medium text-ltm-black">{s.label}</span>
                  <span className="text-xs text-ltm-muted">{s.hint}</span>
                </span>
                <ArrowRight
                  className="h-4 w-4 shrink-0 text-ltm-muted transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
