"use client";

import * as React from "react";
import { Printer, Search } from "lucide-react";

import { LastUpdated } from "@/components/LastUpdated";
import { PageHeader } from "@/components/PageHeader";
import { PriceTable, type PriceColumn } from "@/components/PriceTable";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  driverLicenseCharges,
  drivingTestCharges,
  licensePlateCharges,
  pricingTabs,
  vehicleImpoundmentCharges,
  vehicleInspectionCharges,
  vehicleRegistrationCharges,
  vehicleTowingCharges,
} from "@/data/pricing";
import { formatUsd } from "@/lib/format";

const registrationColumns: PriceColumn[] = [
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
    key: "basePrice",
    label: "Base Price",
    align: "right",
    render: (v) => formatUsd(v as number),
  },
  {
    key: "nfrCharges",
    label: "NFR Charges",
    align: "right",
    render: (v) => formatUsd(v as number | null),
  },
  {
    key: "additionalCharges",
    label: "Additional",
    render: (v) =>
      v ? (
        <span className="text-sm text-ltm-slate">{v as string}</span>
      ) : (
        <span className="text-ltm-muted">None</span>
      ),
  },
  {
    key: "totalCost",
    label: "Total",
    align: "right",
    emphasis: true,
    render: (v, row) =>
      v === null || v === undefined ? (
        <span className="text-sm font-normal italic text-ltm-muted">
          {(row.notes as string) ?? "Set by traffic law"}
        </span>
      ) : (
        formatUsd(v as number)
      ),
  },
];

const driverLicenseColumns: PriceColumn[] = [
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

const drivingTestColumns: PriceColumn[] = [
  { key: "category", label: "Service" },
  {
    key: "charge",
    label: "Charge",
    align: "right",
    emphasis: true,
    render: (v) => formatUsd(v as number),
  },
];

const inspectionColumns: PriceColumn[] = [
  { key: "category", label: "Vehicle Type" },
  {
    key: "charge",
    label: "Charge",
    align: "right",
    emphasis: true,
    render: (v) => formatUsd(v as number),
  },
];

const towingColumns: PriceColumn[] = [
  { key: "vehicleType", label: "Vehicle Type" },
  {
    key: "vehicleCategoryCodes",
    label: "Categories",
    render: (v) => (
      <div className="flex flex-wrap gap-1">
        {(v as string[]).map((code) => (
          <Badge key={code} variant="outline" className="text-xs">
            {code}
          </Badge>
        ))}
      </div>
    ),
  },
  {
    key: "upTo25MilesUsd",
    label: "Up to 25 miles",
    align: "right",
    emphasis: true,
    render: (v) => formatUsd(v as number),
  },
  {
    key: "additionalMileRateUsd",
    label: "Additional mile rate",
    align: "right",
    render: (v) => `${formatUsd(v as number)} / mi`,
  },
];

const impoundmentColumns: PriceColumn[] = [
  { key: "durationDays", label: "Duration" },
  {
    key: "ratePerDayUsd",
    label: "Rate per day",
    align: "right",
    emphasis: true,
    render: (v, row) => {
      if (v === 0) return <Badge variant="success">Free</Badge>;
      if (v === null || v === undefined)
        return (
          <span className="text-sm font-normal italic text-ltm-muted">
            {(row.notes as string) ?? "Set by traffic law"}
          </span>
        );
      return formatUsd(v as number);
    },
  },
];

export function PricingPageClient() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const handlePrint = React.useCallback(() => {
    if (typeof window !== "undefined") window.print();
  }, []);

  return (
    <>
      <PageHeader
        title="Pricing"
        actions={
          <Button
            variant="whitePrimary"
            size="lg"
            onClick={handlePrint}
            type="button"
          >
            <Printer className="h-4 w-4" aria-hidden="true" />
            Print
          </Button>
        }
      />

      <section className="container-ltm py-12 md:py-16">
        <div className="mb-6 print:hidden">
          <label htmlFor="pricing-search" className="sr-only">
            Search pricing categories
          </label>
          <div className="relative max-w-md">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ltm-muted"
              aria-hidden="true"
            />
            <Input
              id="pricing-search"
              type="search"
              placeholder="Search categories…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>

        <Tabs defaultValue="registration" className="w-full">
          <TabsList className="mb-6 flex h-auto w-full flex-wrap justify-start gap-1 bg-ltm-stone p-1 print:hidden">
            {pricingTabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="text-xs sm:text-sm"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="print:print-stack">
            <TabsContent value="registration" className="print:!block">
              <h2 className="mb-4 hidden text-xl font-semibold text-ltm-black print:block">
                Vehicle Registration
              </h2>
              <PriceTable
                columns={registrationColumns}
                rows={vehicleRegistrationCharges as unknown as Record<string, unknown>[]}
                searchQuery={searchQuery}
              />
            </TabsContent>

            <TabsContent value="license" className="print:!block">
              <h2 className="mb-4 hidden text-xl font-semibold text-ltm-black print:block">
                Driver License
              </h2>
              <PriceTable
                columns={driverLicenseColumns}
                rows={driverLicenseCharges as unknown as Record<string, unknown>[]}
                searchQuery={searchQuery}
              />
            </TabsContent>

            <TabsContent value="driving-test" className="print:!block">
              <h2 className="mb-4 hidden text-xl font-semibold text-ltm-black print:block">
                Driving Test
              </h2>
              <PriceTable
                columns={drivingTestColumns}
                rows={drivingTestCharges as unknown as Record<string, unknown>[]}
                searchQuery={searchQuery}
              />
            </TabsContent>

            <TabsContent value="inspection" className="print:!block">
              <h2 className="mb-4 hidden text-xl font-semibold text-ltm-black print:block">
                Vehicle Inspection
              </h2>
              <PriceTable
                columns={inspectionColumns}
                rows={vehicleInspectionCharges as unknown as Record<string, unknown>[]}
                searchQuery={searchQuery}
              />
            </TabsContent>

            <TabsContent value="towing" className="print:!block">
              <h2 className="mb-4 hidden text-xl font-semibold text-ltm-black print:block">
                Towing
              </h2>
              <PriceTable
                columns={towingColumns}
                rows={vehicleTowingCharges as unknown as Record<string, unknown>[]}
                searchQuery={searchQuery}
                searchKey="vehicleType"
              />
            </TabsContent>

            <TabsContent value="impoundment" className="print:!block">
              <h2 className="mb-4 hidden text-xl font-semibold text-ltm-black print:block">
                Impoundment
              </h2>
              <PriceTable
                columns={impoundmentColumns}
                rows={vehicleImpoundmentCharges as unknown as Record<string, unknown>[]}
                searchQuery={searchQuery}
                searchKey="durationDays"
              />
            </TabsContent>

            <TabsContent value="plates" className="print:!block">
              <h2 className="mb-4 hidden text-xl font-semibold text-ltm-black print:block">
                License Plates
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Test Plate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold text-ltm-black">
                      {formatUsd(licensePlateCharges.testPlate)}
                    </p>
                    <p className="mt-2 text-sm text-ltm-muted">
                      Flat rate per test plate.
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
                    <p className="mt-2 text-sm text-ltm-muted">
                      Choose your own letter/number combination.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </div>
        </Tabs>

        <p className="mt-10 text-xs leading-relaxed text-ltm-muted">
          Fees are set by the Government of Liberia. LTM cannot discount or
          waive them.
        </p>

        <p className="mt-3 hidden text-xs text-ltm-muted print:block">
          Printed from www.liberiatraffic.com. For the most current pricing,
          visit the website.
        </p>

        <LastUpdated section="pricing" />
      </section>
    </>
  );
}
