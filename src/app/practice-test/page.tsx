import { PracticeTestPageClient } from "./PracticeTestPageClient";

export const metadata = {
  title: "Practice Test",
  description:
    "45-question Liberia driver's license practice exam, courtesy of LTM.",
};

export default function PracticeTestPage() {
  return <PracticeTestPageClient />;
}
