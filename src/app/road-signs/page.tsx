"use client";

import * as React from "react";
import { AlertTriangle } from "lucide-react";

import { PageHeader } from "@/components/PageHeader";
import { SignCard } from "@/components/SignCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  liberiaSpecificRules,
  roadSigns,
  sectionIntros,
  signCategories,
  type SignCategory,
} from "@/data/road-signs";
import { cn } from "@/lib/utils";

export default function RoadSignsPage() {
  const [activeTab, setActiveTab] = React.useState<SignCategory>(
    signCategories[0].id
  );

  const signsByCategory = React.useMemo(() => {
    const map = new Map<SignCategory, typeof roadSigns>();
    for (const cat of signCategories) {
      map.set(
        cat.id,
        roadSigns.filter((s) => s.category === cat.id)
      );
    }
    return map;
  }, []);

  return (
    <>
      <PageHeader
        title="Road Signs & Signals"
        subtitle="A complete reference for traffic signals, signs, and pavement markings in Liberia."
      />

      <section className="container-ltm py-10">
        <div className="mb-8 rounded-lg border-2 border-ltm-warning/40 bg-ltm-warning/5 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle
              className="mt-0.5 h-5 w-5 shrink-0 text-ltm-warning"
              aria-hidden="true"
            />
            <div>
              <h2 className="text-lg font-semibold text-ltm-navy">
                Liberia-specific rules to remember
              </h2>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-ltm-slate">
                {liberiaSpecificRules.map((rule, i) => (
                  <li key={i}>{rule}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-8">
          <Tabs
            value={activeTab}
            onValueChange={(v) => setActiveTab(v as SignCategory)}
            className="w-full"
          >
            <TabsList className="mb-6 flex h-auto w-full flex-wrap justify-start gap-1 bg-ltm-bg p-1">
              {signCategories.map((cat) => (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id}
                  className="text-xs sm:text-sm"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {signCategories.map((cat) => (
              <TabsContent key={cat.id} value={cat.id} className="space-y-6">
                <p className="text-base leading-relaxed text-ltm-muted">
                  {sectionIntros[cat.id]}
                </p>
                {(signsByCategory.get(cat.id) ?? []).length > 0 ? (
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {(signsByCategory.get(cat.id) ?? []).map((sign) => (
                      <SignCard key={sign.id} sign={sign} />
                    ))}
                  </div>
                ) : (
                  <p className="text-sm italic text-ltm-muted">
                    See the section intro above for details.
                  </p>
                )}
              </TabsContent>
            ))}
          </Tabs>

          <aside
            aria-label="On this page"
            className="hidden lg:sticky lg:top-24 lg:block lg:h-fit"
          >
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-ltm-muted">
              On this page
            </h2>
            <ul className="space-y-1 border-l border-ltm-border">
              {signCategories.map((cat) => (
                <li key={cat.id}>
                  <button
                    type="button"
                    onClick={() => setActiveTab(cat.id)}
                    className={cn(
                      "block w-full -ml-px border-l-2 px-3 py-1.5 text-left text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ltm-navy",
                      activeTab === cat.id
                        ? "border-ltm-navy font-semibold text-ltm-navy"
                        : "border-transparent text-ltm-muted hover:border-ltm-border hover:text-ltm-slate"
                    )}
                  >
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
