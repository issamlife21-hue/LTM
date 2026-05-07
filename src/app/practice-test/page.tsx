import { PageHeader } from "@/components/PageHeader";
import { practiceTestMeta } from "@/data/practice-test";

import { PracticeTestTabs } from "./PracticeTestTabs";

export const metadata = {
  title: "Practice Test",
  description:
    "45-question Liberia driver's license practice exam plus a road signs recognition quiz, courtesy of LTM.",
};

export default function PracticeTestPage() {
  return (
    <>
      <PageHeader
        title={practiceTestMeta.title}
        subtitle={practiceTestMeta.subtitle}
      />
      <PracticeTestTabs />
    </>
  );
}
