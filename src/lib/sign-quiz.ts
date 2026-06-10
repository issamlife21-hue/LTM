import { roadSigns, type RoadSign, type SignSection } from "@/data/road-signs";

export type SignQuizOption = {
  text: string;
  correct: boolean;
};

export type SignQuizQuestion = {
  sign: RoadSign;
  options: SignQuizOption[];
};

const QUIZABLE_SECTIONS: SignSection[] = [
  "regulatory",
  "warning",
  "sign-shapes",
];

function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function generateSignQuiz(count = 20): SignQuizQuestion[] {
  // Only include signs that have a real image so a question never shows
  // a placeholder where the user is being asked to identify the sign.
  const pool = roadSigns.filter(
    (s) => s.imageUrl !== "" && QUIZABLE_SECTIONS.includes(s.section)
  );
  const selected = shuffle(pool).slice(0, count);

  return selected.map((sign) => {
    const sameSectionPool = pool.filter(
      (s) => s.section === sign.section && s.id !== sign.id
    );
    // Prefer distractors from the same section. If that section is too small
    // to supply 3, fall back to the whole pool so every question still has
    // exactly 4 options.
    const distractorPool =
      sameSectionPool.length >= 3
        ? sameSectionPool
        : pool.filter((s) => s.id !== sign.id);
    const distractors = shuffle(distractorPool).slice(0, 3);

    const options: SignQuizOption[] = shuffle([
      { text: sign.name, correct: true },
      ...distractors.map((d) => ({ text: d.name, correct: false })),
    ]);

    return { sign, options };
  });
}

