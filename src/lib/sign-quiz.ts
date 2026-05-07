import { roadSigns, type RoadSign, type SignSection } from "@/data/road-signs";

export type SignQuizOption = {
  text: string;
  correct: boolean;
};

export type SignQuizQuestion = {
  signId: string;
  signName: string;
  signImageHint: string;
  description: string;
  options: SignQuizOption[];
};

const QUIZABLE_SECTIONS: SignSection[] = [
  "regulatory",
  "warning",
  "sign-shapes",
];

function shortAnswer(sign: RoadSign): string {
  return sign.name;
}

function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function generateSignQuiz(count = 20): SignQuizQuestion[] {
  const pool = roadSigns.filter((s) => QUIZABLE_SECTIONS.includes(s.section));
  const selected = shuffle(pool).slice(0, count);

  return selected.map((sign) => {
    const sameSectionPool = pool.filter(
      (s) => s.section === sign.section && s.id !== sign.id
    );
    const distractors = shuffle(sameSectionPool).slice(0, 3);

    const options: SignQuizOption[] = shuffle([
      { text: shortAnswer(sign), correct: true },
      ...distractors.map((d) => ({ text: shortAnswer(d), correct: false })),
    ]);

    return {
      signId: sign.id,
      signName: sign.name,
      signImageHint: sign.imageHint,
      description: sign.description,
      options,
    };
  });
}
