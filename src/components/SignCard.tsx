import { type RoadSign } from "@/data/road-signs";
import { SignImage } from "@/components/SignImage";

export function SignCard({ sign }: { sign: RoadSign }) {
  return (
    <article className="rounded-lg border border-ltm-border bg-white p-5 transition-shadow hover:shadow-md">
      <div className="mb-3 flex items-start gap-4">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded bg-ltm-stone">
          <SignImage signId={sign.id} hint={sign.imageHint} />
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
