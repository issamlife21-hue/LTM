import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";
import { Badge } from "@/components/ui/badge";
import { type PriceColumn } from "@/components/PriceTable";
import { driverLicenseCharges } from "@/data/pricing";
import { faqs } from "@/data/faqs";
import { servicePhotos } from "@/data/photos";
import {
  formatLastUpdated,
  lastUpdated,
  serviceEstimates,
} from "@/data/site-meta";
import { formatUsd } from "@/lib/format";

export const metadata = {
  title: "Driver License. Liberia Traffic Management",
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
    emphasis: true,
    render: (v) => formatUsd(v as number),
  },
];

export default function DriverLicensePage() {
  return (
    <ServiceDetailLayout
      title="Driver License"
      subtitle="Apply for, renew, or upgrade your license."
      overview="LTM issues the driver license. We cover motorcycle, tricycle, private car, heavy-duty, and chauffeur categories. First-time applicants must come in person for photo and biometrics; renewals can be delegated."
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
        {
          title: "Walk in to our Monrovia office",
          body: "Visit our SKD Boulevard service center during working hours. No appointment needed.",
        },
        {
          title: "Pick up and complete the application form",
          body: "We hand it to you when you arrive. Fill it in there with your details.",
        },
        {
          title: "Hand over your documents",
          body: "Show your ID, share your blood type, and confirm your personal details.",
          items: [
            "Valid ID (national ID, passport, or previous license)",
            "Your blood type",
          ],
        },
        {
          title: "We capture your photo and biometrics",
          body: "Required for first-time applicants. Renewals only need biometrics if your file is incomplete.",
        },
        {
          title: "Pay and receive your license",
          body: "Most licenses are issued the same day, often within 20 to 30 minutes from arrival.",
        },
      ]}
      faqs={faqs.filter((f) => f.category === "driver-license")}
      headerImage={servicePhotos["driver-license"]}
      estimatedTime={serviceEstimates["driver-license"]}
      summary={{
        cost: "US$35 to US$100",
        visit: "20 to 30 minutes",
        documents: 4,
        lastReviewed: formatLastUpdated(lastUpdated.services),
      }}
      source={
        <>
          Liberian driver license categories follow the standards established
          by the Government of Liberia and the Liberia National Police.
        </>
      }
    />
  );
}
