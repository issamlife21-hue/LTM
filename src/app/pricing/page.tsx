import { PricingPageClient } from "./PricingPageClient";

export const metadata = {
  title: "Pricing",
  description:
    "Official LTM pricing for vehicle registration, driver licenses, inspection, towing, and license plates.",
};

export default function PricingPage() {
  return <PricingPageClient />;
}
