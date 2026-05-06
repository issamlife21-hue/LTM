import { ServiceDetailLayout } from "@/components/ServiceDetailLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { faqs } from "@/data/faqs";
import { licensePlateCharges } from "@/data/pricing";
import { formatUsd } from "@/lib/format";

export const metadata = {
  title: "License Plates — Liberia Traffic Management",
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
          <p className="text-3xl font-bold text-ltm-navy">
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
          <p className="text-3xl font-bold text-ltm-navy">
            {formatUsd(licensePlateCharges.customizedPlatePerCharacter)}
            <span className="ml-2 text-base font-normal text-ltm-muted">
              per character
            </span>
          </p>
          <p className="mt-2 text-sm text-ltm-slate">
            Choose your own combination — pricing is per character on the
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
      overview="Standard license plates are included with your vehicle registration. We also offer test plates for newly imported or temporary-use vehicles, and customized license plates where you choose your own letter/number combination — priced per character."
      whatToBring={[
        "Valid vehicle registration",
        "Valid ID",
        "Payment for any custom or test plates",
      ]}
      pricing={<PlatesPricing />}
      process={[
        "Complete your vehicle registration.",
        "If you want a test or custom plate, request it at the registration counter.",
        "For custom plates, choose your combination (subject to availability).",
        "Pay the additional fee.",
        "Receive your plates same-day.",
      ]}
      faqs={faqs.filter((f) => PLATE_FAQ_IDS.includes(f.id))}
    />
  );
}
