import { LoneStar } from "@/components/LoneStar";

export function IdentityStrip() {
  return (
    <div className="border-b border-white/10 bg-ltm-navy-dark text-white">
      <div className="container-ltm flex h-7 items-center gap-2 text-[13px] leading-none">
        <LoneStar size={16} />
        <span>An official service of the Government of Liberia</span>
      </div>
    </div>
  );
}
