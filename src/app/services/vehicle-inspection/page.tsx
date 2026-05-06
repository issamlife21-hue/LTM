import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";
import { type PriceColumn } from "@/components/PriceTable";
import { faqs } from "@/data/faqs";
import { servicePhotos } from "@/data/photos";
import { vehicleInspectionCharges } from "@/data/pricing";
import { formatUsd } from "@/lib/format";

export const metadata = {
  title: "Vehicle Inspection — Liberia Traffic Management",
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
      <span className="font-semibold text-ltm-navy">
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
      subtitle="Mandatory annual inspection — required before registration."
      overview="Vehicle inspection is mandatory under Liberian law. You will be in violation if you do not have a passing inspection report. For 2025, inspection criteria are limited to three things: lights, brakes, and windshield wipers. If your vehicle fails on the first attempt, you have a 45-day grace period to make repairs and re-inspect — after that grace period, you risk serious traffic penalties."
      whatToBring={[
        "The vehicle being inspected",
        "Valid ID",
        "Existing registration documents (if renewing)",
        "Time to wait — most inspections are completed quickly",
      ]}
      pricing={{
        columns,
        rows: vehicleInspectionCharges as unknown as Record<string, unknown>[],
      }}
      process={[
        "Bring your vehicle to our SKD Boulevard service center.",
        "Our inspector checks lights, brakes, and windshield wipers.",
        "If passed, you receive an inspection report immediately — proceed to registration.",
        "If failed, you have 45 days to fix the faults and re-inspect.",
      ]}
      faqs={faqs.filter((f) => INSPECTION_FAQ_IDS.includes(f.id))}
      headerImage={servicePhotos.vehicleInspection}
    />
  );
}
