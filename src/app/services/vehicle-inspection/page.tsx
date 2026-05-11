import Image from "next/image";

import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";
import { type PriceColumn } from "@/components/PriceTable";
import { faqs } from "@/data/faqs";
import { inspectionPhotos, servicePhotos } from "@/data/photos";
import {
  formatLastUpdated,
  lastUpdated,
  serviceEstimates,
} from "@/data/site-meta";
import { vehicleInspectionCharges } from "@/data/pricing";
import { formatUsd } from "@/lib/format";

export const metadata = {
  title: "Vehicle Inspection. Liberia Traffic Management",
  description:
    "Mandatory annual vehicle inspection. For 2025, criteria are limited to lights, brakes, and windshield wipers.",
};

const columns: PriceColumn[] = [
  { key: "category", label: "Vehicle Type" },
  {
    key: "charge",
    label: "Charge",
    align: "right",
    render: (v) => (
      <span className="font-semibold text-ltm-black">
        {formatUsd(v as number)}
      </span>
    ),
  },
];

const INSPECTION_FAQ_IDS = ["q19", "q20", "q21"];

export default function VehicleInspectionPage() {
  return (
    <ServiceDetailLayout
      title="Vehicle Inspection"
      subtitle="Mandatory annual inspection. Required before registration."
      overview="Inspection is mandatory before registration. The 2025 check covers three things: lights, brakes, and windshield wipers. If you fail, you have 45 days to repair and re-inspect."
      whatToBring={[
        "The vehicle being inspected",
        "Valid ID",
        "Existing registration documents (if renewing)",
        "Time to wait. Most inspections are completed quickly",
      ]}
      pricing={{
        columns,
        rows: vehicleInspectionCharges as unknown as Record<string, unknown>[],
      }}
      process={[
        {
          title: "Bring your vehicle to an LTM service center",
          body: "Walk in during working hours. No appointment needed.",
        },
        {
          title: "Our inspector runs the check",
          body: "For 2025 the inspection covers three things only: lights, brakes, and windshield wipers.",
          items: ["Lights (front, rear, and indicators)", "Brakes", "Windshield wipers"],
        },
        {
          title: "If you pass, you get your report",
          body: "We issue your inspection report immediately. You can take it straight to registration.",
        },
        {
          title: "If you fail, use the 45-day grace period",
          body: "You have 45 days to fix the faults and come back for a re-inspection. After 45 days you're at risk of traffic penalties.",
        },
      ]}
      faqs={faqs.filter((f) => INSPECTION_FAQ_IDS.includes(f.id))}
      headerImage={servicePhotos["vehicle-inspection"]}
      estimatedTime={serviceEstimates["vehicle-inspection"]}
      summary={{
        cost: "US$15 to US$200",
        visit: "15 to 20 minutes",
        documents: 3,
        lastReviewed: formatLastUpdated(lastUpdated.services),
      }}
      source={
        <>
          Inspection criteria for 2025 are limited to lights, brakes, and
          windshield wipers, per LTM operating standards.
        </>
      }
      extraContent={
        <div>
          <h2 className="text-2xl font-semibold text-ltm-black">
            Our state-of-the-art inspection bays
          </h2>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            {inspectionPhotos.map((photo) => (
              <li
                key={photo.id}
                className="aspect-[16/9] overflow-hidden rounded-lg border border-ltm-border"
              >
                <Image
                  src={photo.url}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="h-full w-full object-cover"
                />
              </li>
            ))}
          </ul>
        </div>
      }
    />
  );
}
