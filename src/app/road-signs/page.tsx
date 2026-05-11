import { LastUpdated } from "@/components/LastUpdated";
import { signColorMeanings } from "@/data/road-signs";

import { RoadSignsBody } from "./RoadSignsBody";

export const metadata = {
  title: "Road Signs & Pavement Markings",
  description:
    "Official reference for traffic signals, signs, and pavement markings in Liberia.",
};

export default function RoadSignsPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-ltm-black py-12 text-white md:py-16">
        <div className="container-ltm">
          <h1 className="font-serif text-3xl text-white md:text-4xl">
            Road Signs &amp; Pavement Markings
          </h1>
        </div>
      </section>

      {/* Sign colors */}
      <section className="bg-ltm-paper py-14 md:py-20">
        <div className="container-ltm">
          <div className="max-w-4xl">
            <h2 className="mb-8 font-serif text-2xl md:text-3xl">
              Sign colors
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {signColorMeanings.map((c) => (
                <div
                  key={c.colors}
                  className="rounded border-l-4 border-ltm-navy bg-white p-5"
                >
                  <p className="mb-1 font-semibold text-ltm-black">
                    {c.colors}
                  </p>
                  <p className="text-sm leading-relaxed text-ltm-slate">
                    {c.meaning}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search + sections (full-bleed alternating bands) */}
      <RoadSignsBody />

      <section className="bg-ltm-paper">
        <div className="container-ltm pb-10">
          <LastUpdated section="roadSigns" />
        </div>
      </section>
    </>
  );
}
