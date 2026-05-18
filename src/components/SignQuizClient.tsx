"use client";

import * as React from "react";
import Link from "next/link";
import {
  CheckCircle2,
  ChevronRight,
  Lightbulb,
  RotateCw,
  Trophy,
  XCircle,
} from "lucide-react";

import { EmptyState } from "@/components/EmptyState";
import { QuizProgressBar } from "@/components/QuizProgressBar";
import { SignImage } from "@/components/SignImage";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { generateSignQuiz, type SignQuizQuestion } from "@/lib/sign-quiz";
import { cn } from "@/lib/utils";

type Mode = "intro" | "quiz" | "review";
type Answer = { signId: string; correct: boolean; selectedText: string };

const QUESTION_COUNT = 20;

function OptionButton({
  text,
  state,
  onClick,
  disabled,
}: {
  text: string;
  state: "idle" | "selected-correct" | "selected-wrong" | "correct" | "dim";
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-pressed={state === "selected-correct" || state === "selected-wrong"}
      className={cn(
        "w-full rounded-lg border-2 px-4 py-3 text-left text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ltm-navy focus-visible:ring-offset-2 sm:text-base",
        state === "idle" &&
          "border-ltm-border bg-white text-ltm-slate hover:border-ltm-black hover:bg-ltm-stone",
        state === "selected-correct" &&
          "border-ltm-success bg-ltm-success/10 text-ltm-slate",
        state === "selected-wrong" &&
          "border-ltm-red bg-ltm-red/10 text-ltm-slate",
        state === "correct" &&
          "border-ltm-success bg-ltm-success/10 text-ltm-slate",
        state === "dim" && "border-ltm-border bg-white text-ltm-muted opacity-60"
      )}
    >
      {text}
    </button>
  );
}

export function SignQuizClient() {
  const [mode, setMode] = React.useState<Mode>("intro");
  const [questions, setQuestions] = React.useState<SignQuizQuestion[]>([]);
  const [current, setCurrent] = React.useState(0);
  const [answers, setAnswers] = React.useState<Answer[]>([]);
  const [selected, setSelected] = React.useState<string | null>(null);

  const startQuiz = React.useCallback(() => {
    setQuestions(generateSignQuiz(QUESTION_COUNT));
    setCurrent(0);
    setAnswers([]);
    setSelected(null);
    setMode("quiz");
  }, []);

  const handleSelect = React.useCallback(
    (text: string) => {
      if (selected !== null) return;
      const q = questions[current];
      const opt = q.options.find((o) => o.text === text)!;
      setSelected(text);
      setAnswers((prev) => [
        ...prev,
        { signId: q.sign.id, correct: opt.correct, selectedText: text },
      ]);
    },
    [questions, current, selected]
  );

  const handleNext = React.useCallback(() => {
    if (current + 1 >= questions.length) {
      setMode("review");
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
    }
  }, [current, questions.length]);

  if (mode === "intro") {
    return (
      <section className="py-12">
        <div className="mx-auto max-w-2xl space-y-6">
          <p className="text-base leading-relaxed text-ltm-slate">
            {QUESTION_COUNT} random signs with instant feedback. Study aid
            only, not the official examination.
          </p>
          <Button size="lg" onClick={startQuiz}>
            Start sign quiz
          </Button>
        </div>
      </section>
    );
  }

  if (mode === "quiz") {
    const q = questions[current];
    const correctText = q.options.find((o) => o.correct)!.text;
    const total = questions.length;
    const isLast = current + 1 >= total;

    return (
      <section className="py-12">
        <div className="mx-auto max-w-2xl">
          <div className="mb-6 space-y-2">
            <div className="flex items-center justify-between text-sm text-ltm-muted">
              <span>
                Question {current + 1} of {total}
              </span>
              <span className="tabular-nums">
                {Math.round(((current + 1) / total) * 100)}%
              </span>
            </div>
            <QuizProgressBar current={current + 1} total={total} />
          </div>

          <Card>
            <CardContent className="space-y-5 p-6">
              <div className="flex flex-col items-center gap-6 rounded-lg bg-ltm-cream p-8">
                <div className="relative h-44 w-44 overflow-hidden rounded-lg bg-white shadow-sm md:h-52 md:w-52">
                  <SignImage sign={q.sign} />
                </div>
                <h2 className="text-center font-serif text-xl text-ltm-black md:text-2xl">
                  What does this sign mean?
                </h2>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {q.options.map((opt) => {
                  let state:
                    | "idle"
                    | "selected-correct"
                    | "selected-wrong"
                    | "correct"
                    | "dim" = "idle";
                  if (selected) {
                    if (opt.text === selected) {
                      state = opt.correct ? "selected-correct" : "selected-wrong";
                    } else if (opt.text === correctText) {
                      state = "correct";
                    } else {
                      state = "dim";
                    }
                  }
                  return (
                    <OptionButton
                      key={opt.text}
                      text={opt.text}
                      state={state}
                      onClick={() => handleSelect(opt.text)}
                      disabled={selected !== null}
                    />
                  );
                })}
              </div>

              {selected && (
                <div className="flex items-start gap-3 rounded-lg border border-ltm-border bg-ltm-stone p-4">
                  <Lightbulb
                    className="mt-0.5 h-4 w-4 shrink-0 text-ltm-warning"
                    aria-hidden="true"
                  />
                  <p className="text-sm leading-relaxed text-ltm-slate">
                    <span className="font-semibold text-ltm-black">
                      {q.sign.name}.
                    </span>{" "}
                    {q.sign.description}
                  </p>
                </div>
              )}

              {selected && (
                <div className="flex justify-end">
                  <Button onClick={handleNext} size="lg">
                    {isLast ? "See results" : "Next sign"}
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  // review
  const total = questions.length;
  const correct = answers.filter((a) => a.correct).length;
  const incorrect = total - correct;
  const pct = total ? Math.round((correct / total) * 100) : 0;
  const passed = pct >= 75;

  const missed = questions
    .map((q, i) => ({ q, a: answers[i] }))
    .filter((x) => x.a && !x.a.correct);

  return (
    <section className="py-12">
      <div className="mx-auto max-w-3xl space-y-8">
        <Card>
          <CardContent className="space-y-5 p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-wider text-ltm-muted">
                  Your score
                </p>
                <p className="mt-1 text-4xl font-bold text-ltm-black sm:text-5xl">
                  {correct} <span className="text-ltm-muted">/</span> {total}
                </p>
                <p className="mt-1 text-lg text-ltm-slate">{pct}%</p>
              </div>
              {passed ? (
                <Badge variant="success" className="px-3 py-1.5 text-sm">
                  <CheckCircle2 className="mr-1 h-4 w-4" aria-hidden="true" />
                  Passed
                </Badge>
              ) : (
                <Badge variant="destructive" className="px-3 py-1.5 text-sm">
                  <XCircle className="mr-1 h-4 w-4" aria-hidden="true" />
                  Try again
                </Badge>
              )}
            </div>

            <div
              className="flex h-3 w-full overflow-hidden rounded-full"
              role="img"
              aria-label={`${correct} correct, ${incorrect} incorrect`}
            >
              <div
                className="bg-ltm-success"
                style={{ width: `${(correct / total) * 100}%` }}
              />
              <div
                className="bg-ltm-red"
                style={{ width: `${(incorrect / total) * 100}%` }}
              />
            </div>

            <p className="rounded-md border border-ltm-border bg-ltm-stone p-3 text-xs italic leading-relaxed text-ltm-muted">
              You correctly identified {correct} of {total} signs. This quiz
              is a study aid only. It does not replace the official road
              signs reference.
            </p>
          </CardContent>
        </Card>

        {missed.length === 0 ? (
          <EmptyState
            icon={Trophy}
            title="A perfect round. Well done."
            description="You identified every sign correctly."
          />
        ) : (
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-ltm-black">
              Signs you missed
            </h2>
            <ul className="space-y-3">
              {missed.map(({ q, a }) => (
                <li
                  key={q.sign.id}
                  className="rounded-lg border border-ltm-border bg-white p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded bg-ltm-stone">
                      <SignImage sign={q.sign} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-ltm-black">
                        {q.sign.name}
                      </h3>
                      <dl className="mt-2 space-y-1 text-sm">
                        <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-2">
                          <dt className="font-medium text-ltm-red">
                            Your answer:
                          </dt>
                          <dd className="text-ltm-slate">{a.selectedText}</dd>
                        </div>
                        <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-2">
                          <dt className="font-medium text-ltm-success">
                            Correct answer:
                          </dt>
                          <dd className="text-ltm-slate">{q.sign.name}</dd>
                        </div>
                      </dl>
                      <p className="mt-3 rounded-md bg-ltm-stone p-3 text-sm leading-relaxed text-ltm-slate">
                        {q.sign.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button size="lg" onClick={startQuiz} className="flex-1">
            <RotateCw className="h-4 w-4" aria-hidden="true" />
            New round
          </Button>
          <Button asChild size="lg" variant="outline" className="flex-1">
            <Link href="/road-signs">Browse all signs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
