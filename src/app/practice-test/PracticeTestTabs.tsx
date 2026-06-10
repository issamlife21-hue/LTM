"use client";

import * as React from "react";
import dynamic from "next/dynamic";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Loading = () => (
  <div className="py-12 text-center text-ltm-slate">Loading test…</div>
);

const PracticeTestPageClient = dynamic(
  () =>
    import("./PracticeTestPageClient").then((m) => m.PracticeTestPageClient),
  { ssr: false, loading: Loading },
);

const SignQuizClient = dynamic(
  () => import("@/components/SignQuizClient").then((m) => m.SignQuizClient),
  { ssr: false, loading: Loading },
);

export function PracticeTestTabs() {
  return (
    <div className="container-ltm pt-8">
      <Tabs defaultValue="written">
        <TabsList className="mb-2">
          <TabsTrigger value="written">Written test</TabsTrigger>
          <TabsTrigger value="signs">Road signs quiz</TabsTrigger>
        </TabsList>
        <TabsContent value="written">
          <PracticeTestPageClient />
        </TabsContent>
        <TabsContent value="signs">
          <SignQuizClient />
        </TabsContent>
      </Tabs>
    </div>
  );
}
