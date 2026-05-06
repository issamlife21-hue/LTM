import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";
import { Badge } from "@/components/ui/badge";
import { type PriceColumn } from "@/components/PriceTable";
import { driverLicenseCharges } from "@/data/pricing";
import { faqs } from "@/data/faqs";
import { servicePhotos } from "@/data/photos";
import { formatUsd } from "@/lib/format";

export const metadata = {
  title: "Driver License — Liberia Traffic Management",
  description:
    "Apply for or renew your driver license at LTM, the official issuer in Liberia.",
};

const columns: PriceColumn[] = [
  { key: "category", label: "Category" },
  { key: "description", label: "Description" },
  {
    key: "type",
    label: "Type",
    render: (v) =>
      v === "Private" ? (
        <Badge variant="success">Private</Badge>
      ) : (
        <Badge>Commercial</Badge>
      ),
  },
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

export default function DriverLicensePage() {
  return (
    <ServiceDetailLayout
      title="Driver License"
      subtitle="Apply for, renew, or upgrade your license."
      overview="LTM is the only authorized entity to issue driver licenses in Liberia. We offer licenses for motorcycles, tricycles, private cars, heavy-duty vehicles, and commercial chauffeurs. For your first visit, you must be present in person so we can take your live photo and biometrics — after that, you can delegate someone else to handle renewals on your behalf."
      whatToBring={[
        "Valid ID (national ID, passport, or previous driving license)",
        "Completed application form (fill on arrival)",
        "Your blood type",
        "Personal details",
      ]}
      pricing={{
        columns,
        rows: driverLicenseCharges as unknown as Record<string, unknown>[],
      }}
      process={[
        "Walk into our service center on SKD Boulevard.",
        "Pick up and complete the application form.",
        "Provide your ID, blood type, and personal details.",
        "We capture your live photo and biometrics.",
        "Pay the fee and receive your license — typically same-day.",
      ]}
      faqs={faqs.filter((f) => f.category === "driver-license")}
      headerImage={servicePhotos["driver-license"]}
    />
  );
}
