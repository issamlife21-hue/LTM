import { type RoadSign } from "@/data/road-signs";
import { SignImage } from "@/components/SignImage";

export function SignCard({ sign }: { sign: RoadSign }) {
  return (
    <article className="rounded-md border border-ltm-border bg-white p-4">
      <div className="mb-3 flex items-start gap-4">
        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded bg-ltm-stone">
          <SignImage sign={sign} />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="mb-1 text-base font-semibold leading-tight text-ltm-black">
            {sign.name}
          </h3>
          {sign.liberiaSpecific && (
            <span className="inline-block rounded bg-ltm-red/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-ltm-red">
              Liberia-specific
            </span>
          )}
        </div>
      </div>
      <p className="text-sm leading-relaxed text-ltm-slate">{sign.description}</p>
    </article>
  );
}
