import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { faqs } from "@/data/faqs";
import { servicePhotos } from "@/data/photos";
import {
  formatLastUpdated,
  lastUpdated,
  serviceEstimates,
} from "@/data/site-meta";
import { licensePlateCharges } from "@/data/pricing";
import { formatUsd } from "@/lib/format";

export const metadata = {
  title: "License Plates. Liberia Traffic Management",
  description:
    "Standard, test, and customized license plates. Customized plates priced per character.",
};

const PLATE_FAQ_IDS = ["q22", "q23", "q24"];

function PlatesPricing() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Test Plate</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold text-ltm-black">
            {formatUsd(licensePlateCharges.testPlate)}
          </p>
          <p className="mt-2 text-sm text-ltm-slate">
            For newly imported or temporary-use vehicles.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Customized Plate</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold text-ltm-black">
            {formatUsd(licensePlateCharges.customizedPlatePerCharacter)}
            <span className="ml-2 text-base font-normal text-ltm-muted">
              per character
            </span>
          </p>
          <p className="mt-2 text-sm text-ltm-slate">
            Choose your own combination. Pricing is per character on the
            plate.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default function LicensePlatesPage() {
  return (
    <ServiceDetailLayout
      title="License Plates"
      subtitle="Standard, test, and customized license plates."
      overview="Standard license plates are included with your vehicle registration. We also offer test plates for newly imported or temporary-use vehicles, and customized license plates where you choose your own letter/number combination, priced per character."
      whatToBring={[
        "Valid vehicle registration",
        "Valid ID",
        "Payment for any custom or test plates",
      ]}
      pricing={<PlatesPricing />}
      process={[
        {
          title: "Complete your vehicle registration",
          body: "Standard plates are issued together with your registration. If you only need a standard plate, you're done after registration.",
        },
        {
          title: "Request a test or custom plate (optional)",
          body: "Tell the registration counter what you'd like. They'll add it to your file.",
        },
        {
          title: "Choose your custom combination",
          body: "For customized plates, pick the letter/number combination you want, subject to availability.",
        },
        {
          title: "Pay the additional fee",
          body: "Test plates are a flat US$250. Customized plates are US$30 per character on the plate.",
        },
        {
          title: "Receive your plates same-day",
          body: "Standard plates leave with you on the day of registration. Custom plates are usually ready the same day.",
        },
      ]}
      faqs={faqs.filter((f) => PLATE_FAQ_IDS.includes(f.id))}
      headerImage={servicePhotos["license-plates"]}
      estimatedTime={serviceEstimates["license-plates"]}
      summary={{
        cost: "Standard plate included; test US$250; custom US$30 per character",
        visit: "Same day",
        documents: 3,
        lastReviewed: formatLastUpdated(lastUpdated.services),
      }}
    />
  );
}
