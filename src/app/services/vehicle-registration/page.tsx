import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";
import { Badge } from "@/components/ui/badge";
import { type PriceColumn } from "@/components/PriceTable";
import { faqs } from "@/data/faqs";
import { servicePhotos } from "@/data/photos";
import { serviceEstimates } from "@/data/site-meta";
import { vehicleRegistrationCharges } from "@/data/pricing";
import { formatUsd } from "@/lib/format";

export const metadata = {
  title: "Vehicle Registration — Liberia Traffic Management",
  description:
    "Register a new vehicle, renew your registration, or transfer ownership at LTM, the official registrar in Liberia.",
};

const columns: PriceColumn[] = [
  { key: "code", label: "Code" },
  { key: "category", label: "Category" },
  { key: "weightClass", label: "Weight Class" },
  {
    key: "publicTransport",
    label: "Public Transport",
    render: (v) =>
      v ? (
        <Badge variant="success">Yes</Badge>
      ) : (
        <span className="text-ltm-muted">No</span>
      ),
  },
  {
    key: "totalCost",
    label: "Total Cost",
    align: "right",
    render: (v, row) =>
      v === null || v === undefined ? (
        <span className="italic text-ltm-muted">
          {(row.notes as string) ?? "Variable"}
        </span>
      ) : (
        <span className="font-semibold text-ltm-navy">
          {formatUsd(v as number)}
        </span>
      ),
  },
];

export default function VehicleRegistrationPage() {
  return (
    <ServiceDetailLayout
      title="Vehicle Registration"
      subtitle="Register, renew, or transfer ownership of your vehicle."
      overview="All vehicles operating in Liberia must be registered with LTM. We handle new registrations, renewals, and ownership transfers. Vehicle inspection is required before registration — you must have a passing inspection report. Vehicle insurance is also mandatory by law, but you can complete your registration first and obtain insurance separately."
      whatToBring={[
        "Valid ID",
        "Personal information",
        "Previous vehicle registration documents",
        "Customs clearance documents (for newly imported vehicles)",
        "Bill of sale and second-party ID & contact details (for ownership transfers)",
      ]}
      pricing={{
        columns,
        rows: vehicleRegistrationCharges as unknown as Record<string, unknown>[],
        note: "Heavy duty trucks above 8 tons and trailers have variable pricing — see the full pricing page for details.",
      }}
      process={[
        {
          title: "Pass your vehicle inspection",
          body: "Inspection is mandatory before we can register your vehicle. The inspector checks lights, brakes, and windshield wipers.",
        },
        {
          title: "Walk in to our Monrovia office",
          body: "Bring the vehicle and your documents to our SKD Boulevard service center.",
        },
        {
          title: "Submit your documents",
          body: "Hand them to the registration counter. We'll verify and enter them into your file.",
          items: [
            "Valid ID",
            "Previous registration (for renewals)",
            "Customs clearance (for imported vehicles)",
            "Bill of sale and second-party ID (for ownership transfers)",
          ],
        },
        {
          title: "Pay the registration fee",
          body: "Fees are set by vehicle category — see the pricing section above. Public transport rates apply for licensed taxis and buses.",
        },
        {
          title: "Receive your registration and plates",
          body: "Most registrations are issued same-day. You'll leave with the paperwork and standard plates.",
        },
        {
          title: "Get insurance",
          body: "Vehicle insurance is mandatory by law. You can buy it from any provider — we have insurers on the premises for your convenience.",
        },
      ]}
      faqs={faqs.filter((f) => f.category === "vehicle-registration")}
      headerImage={servicePhotos["vehicle-registration"]}
      estimatedTime={serviceEstimates["vehicle-registration"]}
    />
  );
}
