// 11-stripe Liberian flag rendered as a single thin band.
// Total height: 4px mobile, 6px desktop. From far away it reads as a
// thin red line; up close it reveals the flag's stripes.

const STRIPES = Array.from({ length: 11 }, (_, i) => i % 2 === 0); // true = red

export function FlagStripe() {
  return (
    <div
      className="flex h-[4px] w-full flex-col md:h-[6px]"
      role="img"
      aria-label="Liberian flag stripes"
    >
      {STRIPES.map((isRed, i) => (
        <div
          key={i}
          className="flex-1"
          style={{ backgroundColor: isRed ? "#bf0a30" : "#ffffff" }}
        />
      ))}
    </div>
  );
}
