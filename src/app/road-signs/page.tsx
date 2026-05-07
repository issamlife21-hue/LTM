import { LastUpdated } from "@/components/LastUpdated";
import { SignCard } from "@/components/SignCard";
import {
  roadSigns,
  sectionMeta,
  signColorMeanings,
  type SignSection,
} from "@/data/road-signs";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Road Signs & Pavement Markings",
  description:
    "The complete official reference for traffic signals, signs, and pavement markings in Liberia. Updated from the LTM Signals, Signs and Pavement Markings document.",
};

export default function RoadSignsPage() {
  const sectionsInOrder = (Object.keys(sectionMeta) as SignSection[]).sort(
    (a, b) => sectionMeta[a].order - sectionMeta[b].order
  );

  return (
    <>
      {/* Page header */}
      <section className="bg-ltm-black py-12 text-white md:py-16">
        <div className="container-ltm">
          <h1 className="mb-3 font-serif text-4xl text-white md:text-5xl">
            Road Signs &amp; Pavement Markings
          </h1>
          <p className="max-w-3xl text-lg text-white/80">
            The complete official reference for traffic signals, signs, and
            pavement markings in Liberia.
          </p>
        </div>
      </section>

      {/* On-page jump links */}
      <nav
        aria-label="Jump to section"
        className="border-b border-ltm-border bg-ltm-paper"
      >
        <div className="container-ltm flex flex-wrap items-center gap-x-5 gap-y-2 py-3 text-xs">
          <span className="font-semibold uppercase tracking-wider text-ltm-muted">
            Jump to:
          </span>
          {sectionsInOrder.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="rounded text-ltm-black underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ltm-navy focus-visible:ring-offset-2"
            >
              {sectionMeta[section].title}
            </a>
          ))}
        </div>
      </nav>

      {/* Sign colors callout */}
      <section className="bg-ltm-cream py-12 md:py-16">
        <div className="container-ltm">
          <div className="max-w-4xl">
            <h2 className="mb-2 font-serif text-2xl md:text-3xl">Sign Colors</h2>
            <p className="mb-6 text-ltm-slate">
              Sign colors help you know what the intention of the sign is. As
              you approach a sign and while still distant, you may see the
              color long before you can read the message or see the symbol,
              giving you advance information.
            </p>
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

      {/* Six sections */}
      {sectionsInOrder.map((section, i) => {
        const meta = sectionMeta[section];
        const signs = roadSigns.filter((s) => s.section === section);
        return (
          <section
            key={section}
            id={section}
            className={cn(
              "py-12 md:py-16",
              i % 2 === 0 ? "bg-ltm-paper" : "bg-ltm-stone"
            )}
          >
            <div className="container-ltm">
              <h2 className="mb-3 font-serif text-3xl md:text-4xl">
                {meta.title}
              </h2>
              <p className="mb-8 max-w-3xl leading-relaxed text-ltm-slate">
                {meta.intro}
              </p>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {signs.map((sign) => (
                  <SignCard key={sign.id} sign={sign} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="bg-ltm-paper">
        <div className="container-ltm pb-10">
          <LastUpdated section="roadSigns" />
        </div>
      </section>
    </>
  );
}
