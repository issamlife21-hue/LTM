type QuizProgressBarProps = { current: number; total: number };

export function QuizProgressBar({ current, total }: QuizProgressBarProps) {
  const pct = Math.round((current / total) * 100);
  return (
    <div
      role="progressbar"
      aria-valuenow={current}
      aria-valuemin={0}
      aria-valuemax={total}
      aria-label={`Question ${current} of ${total}`}
      className="h-2 w-full overflow-hidden rounded-full bg-ltm-border"
    >
      <div
        className="h-full bg-ltm-black transition-all duration-300"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
