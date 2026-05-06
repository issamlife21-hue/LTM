"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Car,
  CheckCircle2,
  Hash,
  IdCard,
  type LucideIcon,
  RotateCcw,
  Wrench,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ServiceKey =
  | "driver-license"
  | "vehicle-registration"
  | "vehicle-inspection"
  | "license-plates";

type Situation = {
  id: string;
  label: string;
  description: string;
  documents: string[];
  price: string;
  time: string;
};

const SERVICES: Array<{
  id: ServiceKey;
  label: string;
  icon: LucideIcon;
  href: string;
  situations: Situation[];
}> = [
  {
    id: "driver-license",
    label: "Get or renew a driver license",
    icon: IdCard,
    href: "/services/driver-license",
    situations: [
      {
        id: "first-time",
        label: "First-time license",
        description:
          "Apply for your very first driver license at our Monrovia office.",
        documents: [
          "Valid ID (national ID, passport, or other government ID)",
          "Your blood type",
          "Personal details",
        ],
        price: "From $35",
        time: "20–30 minutes",
      },
      {
        id: "renewal",
        label: "Renewal",
        description: "Renew your existing driver license.",
        documents: [
          "Your previous driving license",
          "Valid ID (if your license has expired)",
        ],
        price: "From $35",
        time: "15–20 minutes",
      },
      {
        id: "upgrade",
        label: "Upgrade or new category",
        description: "Add a new vehicle category to an existing license.",
        documents: [
          "Your current driver license",
          "Valid ID",
          "Personal details",
        ],
        price: "From $45",
        time: "20–30 minutes",
      },
    ],
  },
  {
    id: "vehicle-registration",
    label: "Register or renew a vehicle",
    icon: Car,
    href: "/services/vehicle-registration",
    situations: [
      {
        id: "first-time",
        label: "First-time registration",
        description: "Register a vehicle that has never been registered with LTM.",
        documents: [
          "Valid ID",
          "Customs clearance documents (for newly imported vehicles)",
          "Personal information",
          "Passing vehicle inspection report",
        ],
        price: "From $78",
        time: "30–45 minutes",
      },
      {
        id: "renewal",
        label: "Renewal",
        description: "Renew an existing vehicle registration.",
        documents: [
          "Valid ID",
          "Previous vehicle registration",
          "Passing vehicle inspection report",
        ],
        price: "From $78",
        time: "20–30 minutes",
      },
      {
        id: "transfer",
        label: "Transfer of ownership",
        description: "Change ownership when buying or selling a vehicle.",
        documents: [
          "Valid ID",
          "Previous vehicle registration",
          "Bill of sale",
          "Second-party valid ID and contact details",
        ],
        price: "From $78",
        time: "30–45 minutes",
      },
      {
        id: "imported",
        label: "Newly imported vehicle",
        description: "Register a vehicle just brought into the country.",
        documents: [
          "Valid ID",
          "Customs clearance documents",
          "Bill of lading or shipping documents",
          "Passing vehicle inspection report",
        ],
        price: "From $78",
        time: "30–45 minutes",
      },
    ],
  },
  {
    id: "vehicle-inspection",
    label: "Get my vehicle inspected",
    icon: Wrench,
    href: "/services/vehicle-inspection",
    situations: [
      {
        id: "annual",
        label: "Annual inspection",
        description:
          "Mandatory annual check on lights, brakes, and windshield wipers.",
        documents: [
          "The vehicle being inspected",
          "Valid ID",
          "Existing registration documents (if renewing)",
        ],
        price: "$15 – $200 by vehicle type",
        time: "15–20 minutes",
      },
      {
        id: "re-inspection",
        label: "Re-inspection after a failed test",
        description:
          "Repeat inspection within the 45-day grace period after a failure.",
        documents: [
          "The vehicle being re-inspected",
          "Your previous inspection report",
        ],
        price: "$15 – $200 by vehicle type",
        time: "10–15 minutes",
      },
    ],
  },
  {
    id: "license-plates",
    label: "Get a license plate",
    icon: Hash,
    href: "/services/license-plates",
    situations: [
      {
        id: "standard",
        label: "Standard plate (with registration)",
        description:
          "Standard plates are included when you register your vehicle.",
        documents: [
          "Valid vehicle registration",
          "Valid ID",
        ],
        price: "Included with registration",
        time: "Same-day",
      },
      {
        id: "test",
        label: "Test plate",
        description: "For newly imported or temporary-use vehicles.",
        documents: [
          "Valid vehicle registration",
          "Valid ID",
        ],
        price: "$250",
        time: "Same-day",
      },
      {
        id: "custom",
        label: "Customized plate",
        description: "Choose your own letter/number combination.",
        documents: [
          "Valid vehicle registration",
          "Valid ID",
          "Your preferred plate combination",
        ],
        price: "$30 per character",
        time: "Same-day",
      },
    ],
  },
];

export function ServiceAdvisor() {
  const [serviceId, setServiceId] = React.useState<ServiceKey | null>(null);
  const [situationId, setSituationId] = React.useState<string | null>(null);

  const service = SERVICES.find((s) => s.id === serviceId) ?? null;
  const situation =
    service?.situations.find((sit) => sit.id === situationId) ?? null;

  const step: 1 | 2 | 3 = situation ? 3 : service ? 2 : 1;

  function reset() {
    setServiceId(null);
    setSituationId(null);
  }

  return (
    <section
      id="service-advisor"
      aria-labelledby="service-advisor-heading"
      className="bg-ltm-bg py-16"
    >
      <div className="container-ltm">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ltm-muted">
            Service Advisor
          </p>
          <h2
            id="service-advisor-heading"
            className="mt-2 text-3xl font-semibold text-ltm-navy md:text-4xl"
          >
            What do you need today?
          </h2>
          <p className="mt-3 text-base text-ltm-muted md:text-lg">
            Tell us a little about your situation and we&rsquo;ll show you what
            to bring, what it costs, and how long it takes.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          {/* Stepper */}
          <ol
            aria-label="Steps"
            className="mb-6 flex items-center justify-center gap-2 text-xs font-medium text-ltm-muted"
          >
            {[1, 2, 3].map((n) => (
              <li
                key={n}
                aria-current={n === step ? "step" : undefined}
                className="flex items-center gap-2"
              >
                <span
                  className={cn(
                    "flex h-6 w-6 items-center justify-center rounded-full border text-[11px]",
                    n === step
                      ? "border-ltm-navy bg-ltm-navy text-white"
                      : n < step
                        ? "border-ltm-success bg-ltm-success/10 text-ltm-success"
                        : "border-ltm-border text-ltm-muted"
                  )}
                >
                  {n < step ? (
                    <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                  ) : (
                    n
                  )}
                </span>
                {n < 3 && (
                  <span
                    aria-hidden="true"
                    className={cn(
                      "h-px w-6",
                      n < step ? "bg-ltm-success" : "bg-ltm-border"
                    )}
                  />
                )}
              </li>
            ))}
          </ol>

          {/* Step 1 — choose a service */}
          {step === 1 && (
            <div
              role="group"
              aria-labelledby="advisor-step-1"
              className="rounded-lg border border-ltm-border bg-white p-6 shadow-sm sm:p-8"
            >
              <h3
                id="advisor-step-1"
                className="text-lg font-semibold text-ltm-navy"
              >
                What are you here to do?
              </h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {SERVICES.map((s) => (
                  <li key={s.id}>
                    <button
                      type="button"
                      onClick={() => setServiceId(s.id)}
                      className="flex w-full items-center gap-3 rounded-lg border border-ltm-border bg-white px-4 py-3 text-left text-sm font-medium text-ltm-slate transition-colors hover:border-ltm-navy hover:bg-ltm-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ltm-navy focus-visible:ring-offset-2"
                    >
                      <span
                        aria-hidden="true"
                        className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ltm-navy text-white"
                      >
                        <s.icon className="h-4 w-4" />
                      </span>
                      <span className="flex-1">{s.label}</span>
                      <ArrowRight
                        className="h-4 w-4 shrink-0 text-ltm-muted"
                        aria-hidden="true"
                      />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Step 2 — choose a situation */}
          {step === 2 && service && (
            <div
              role="group"
              aria-labelledby="advisor-step-2"
              className="rounded-lg border border-ltm-border bg-white p-6 shadow-sm sm:p-8"
            >
              <button
                type="button"
                onClick={() => setServiceId(null)}
                className="mb-3 inline-flex items-center gap-1 text-sm font-medium text-ltm-navy hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ltm-navy focus-visible:ring-offset-2"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Back
              </button>
              <h3
                id="advisor-step-2"
                className="text-lg font-semibold text-ltm-navy"
              >
                What&rsquo;s your situation?
              </h3>
              <p className="mt-1 text-sm text-ltm-muted">{service.label}</p>
              <ul className="mt-5 grid gap-3">
                {service.situations.map((sit) => (
                  <li key={sit.id}>
                    <button
                      type="button"
                      onClick={() => setSituationId(sit.id)}
                      className="flex w-full flex-col gap-1 rounded-lg border border-ltm-border bg-white px-4 py-3 text-left transition-colors hover:border-ltm-navy hover:bg-ltm-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ltm-navy focus-visible:ring-offset-2"
                    >
                      <span className="font-medium text-ltm-slate">
                        {sit.label}
                      </span>
                      <span className="text-xs text-ltm-muted">
                        {sit.description}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Step 3 — result */}
          {step === 3 && service && situation && (
            <div
              role="group"
              aria-labelledby="advisor-step-3"
              className="rounded-lg border border-ltm-border bg-white p-6 shadow-sm sm:p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-ltm-muted">
                Your plan
              </p>
              <h3
                id="advisor-step-3"
                className="mt-1 text-2xl font-semibold text-ltm-navy"
              >
                {situation.label}
              </h3>
              <p className="mt-2 text-sm text-ltm-slate">
                {situation.description}
              </p>

              <dl className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-ltm-border bg-ltm-bg p-4">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-ltm-muted">
                    What it costs
                  </dt>
                  <dd className="mt-1 text-base font-semibold text-ltm-navy">
                    {situation.price}
                  </dd>
                </div>
                <div className="rounded-lg border border-ltm-border bg-ltm-bg p-4">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-ltm-muted">
                    How long it takes
                  </dt>
                  <dd className="mt-1 text-base font-semibold text-ltm-navy">
                    {situation.time}
                  </dd>
                </div>
              </dl>

              <div className="mt-6">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-ltm-muted">
                  What to bring
                </h4>
                <ul className="mt-3 space-y-2">
                  {situation.documents.map((doc, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-ltm-slate"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-ltm-success"
                        aria-hidden="true"
                      />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="flex-1">
                  <Link href={service.href}>
                    Visit us — full details
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button
                  type="button"
                  size="lg"
                  variant="outline"
                  onClick={reset}
                  className="flex-1"
                >
                  <RotateCcw className="h-4 w-4" aria-hidden="true" />
                  Start over
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
