"use client";

import * as React from "react";

import { SignQuizClient } from "@/components/SignQuizClient";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { PracticeTestPageClient } from "./PracticeTestPageClient";

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
