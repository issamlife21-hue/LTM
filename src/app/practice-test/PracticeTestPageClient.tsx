"use client";

import * as React from "react";
import Link from "next/link";
import {
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  Info,
  Lightbulb,
  RotateCw,
  Trophy,
  XCircle,
} from "lucide-react";

import { EmptyState } from "@/components/EmptyState";
import { PageHeader } from "@/components/PageHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  practiceQuestions,
  practiceTestMeta,
  type PracticeQuestion,
} from "@/data/practice-test";
import { cn } from "@/lib/utils";

type Mode = "intro" | "quiz" | "review";

type Answer = {
  questionId: number;
  selected: "a" | "b" | "c";
  correct: boolean;
};

function ProgressBar({ current, total }: { current: number; total: number }) {
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

function OptionButton({
  letter,
  text,
  state,
  onClick,
  disabled,
}: {
  letter: "a" | "b" | "c";
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
      aria-pressed={
        state === "selected-correct" || state === "selected-wrong"
      }
      className={cn(
        "flex w-full items-start gap-3 rounded-lg border-2 px-4 py-3 text-left text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ltm-navy focus-visible:ring-offset-2 sm:text-base",
        state === "idle" &&
          "border-ltm-border bg-white text-ltm-slate hover:border-ltm-charcoal hover:bg-ltm-stone",
        state === "selected-correct" &&
          "border-ltm-success bg-ltm-success/10 text-ltm-slate",
        state === "selected-wrong" &&
          "border-ltm-red bg-ltm-red/10 text-ltm-slate",
        state === "correct" &&
          "border-ltm-success bg-ltm-success/10 text-ltm-slate",
        state === "dim" && "border-ltm-border bg-white text-ltm-muted opacity-60"
      )}
    >
      <span
        className={cn(
          "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold uppercase",
          state === "selected-correct" || state === "correct"
            ? "bg-ltm-success text-white"
            : state === "selected-wrong"
              ? "bg-ltm-red text-white"
              : "bg-ltm-stone text-ltm-black"
        )}
      >
        {letter}
      </span>
      <span className="flex-1 leading-relaxed">{text}</span>
    </button>
  );
}

function IntroScreen({ onStart }: { onStart: () => void }) {
  return (
    <section className="container-ltm py-12">
      <div className="mx-auto max-w-2xl space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">What to expect</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid gap-3 sm:grid-cols-3">
              <li className="rounded-lg border border-ltm-border bg-ltm-stone p-4 text-center">
                <p className="text-2xl font-bold text-ltm-black">
                  {practiceTestMeta.totalQuestions}
                </p>
                <p className="text-xs uppercase tracking-wider text-ltm-muted">
                  Questions
                </p>
              </li>
              <li className="rounded-lg border border-ltm-border bg-ltm-stone p-4 text-center">
                <p className="text-base font-semibold text-ltm-black">
                  Multiple choice
                </p>
                <p className="text-xs uppercase tracking-wider text-ltm-muted">
                  Format
                </p>
              </li>
              <li className="rounded-lg border border-ltm-border bg-ltm-stone p-4 text-center">
                <p className="text-base font-semibold text-ltm-black">
                  Instant feedback
                </p>
                <p className="text-xs uppercase tracking-wider text-ltm-muted">
                  Per question
                </p>
              </li>
            </ul>
          </CardContent>
        </Card>

        <div className="rounded-lg border border-ltm-border bg-ltm-stone p-4 text-sm italic leading-relaxed text-ltm-muted">
          {practiceTestMeta.disclaimer}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button size="lg" onClick={onStart} className="flex-1">
            Start Test
          </Button>
          <Button asChild size="lg" variant="outline" className="flex-1">
            <Link href="/practice-test/study">
              <GraduationCap className="h-4 w-4" aria-hidden="true" />
              Study Mode
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function QuizScreen({
  current,
  question,
  selected,
  onSelect,
  onNext,
  isLast,
}: {
  current: number;
  question: PracticeQuestion;
  selected: "a" | "b" | "c" | null;
  onSelect: (letter: "a" | "b" | "c") => void;
  onNext: () => void;
  isLast: boolean;
}) {
  const total = practiceTestMeta.totalQuestions;
  const correctLetter = question.options.find((o) => o.correct)!.label;

  return (
    <section className="container-ltm py-12">
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
          <ProgressBar current={current + 1} total={total} />
        </div>

        <Card>
          <CardContent className="space-y-5 p-6">
            {question.editorNote && (
              <p className="flex items-start gap-2 text-xs italic text-ltm-muted">
                <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                {question.editorNote}
              </p>
            )}
            <h2 className="text-lg font-semibold text-ltm-slate sm:text-xl">
              {question.question}
            </h2>

            <div className="space-y-3">
              {question.options.map((opt) => {
                let state:
                  | "idle"
                  | "selected-correct"
                  | "selected-wrong"
                  | "correct"
                  | "dim" = "idle";
                if (selected) {
                  if (opt.label === selected) {
                    state = opt.correct ? "selected-correct" : "selected-wrong";
                  } else if (opt.label === correctLetter) {
                    state = "correct";
                  } else {
                    state = "dim";
                  }
                }
                return (
                  <OptionButton
                    key={opt.label}
                    letter={opt.label}
                    text={opt.text}
                    state={state}
                    onClick={() => onSelect(opt.label)}
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
                  {question.explanation}
                </p>
              </div>
            )}

            {selected && (
              <div className="flex justify-end">
                <Button onClick={onNext} size="lg">
                  {isLast ? "See Results" : "Next Question"}
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

function ReviewScreen({
  answers,
  onRestart,
}: {
  answers: Answer[];
  onRestart: () => void;
}) {
  const [showAll, setShowAll] = React.useState(false);
  const total = practiceTestMeta.totalQuestions;
  const correct = answers.filter((a) => a.correct).length;
  const incorrect = total - correct;
  const pct = Math.round((correct / total) * 100);
  const passed = pct >= 75;

  const answerById = React.useMemo(
    () => new Map(answers.map((a) => [a.questionId, a])),
    [answers]
  );

  const visible = showAll
    ? practiceQuestions
    : practiceQuestions.filter((q) => {
        const a = answerById.get(q.id);
        return a && !a.correct;
      });

  return (
    <section className="container-ltm py-12">
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
                  Try Again
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

            <div className="flex gap-6 text-sm">
              <span className="flex items-center gap-2">
                <span
                  className="h-3 w-3 rounded-full bg-ltm-success"
                  aria-hidden="true"
                />
                {correct} correct
              </span>
              <span className="flex items-center gap-2">
                <span
                  className="h-3 w-3 rounded-full bg-ltm-red"
                  aria-hidden="true"
                />
                {incorrect} incorrect
              </span>
            </div>

            <p className="rounded-md border border-ltm-border bg-ltm-stone p-3 text-xs italic leading-relaxed text-ltm-muted">
              You answered {correct} of {total} correctly. This practice test
              is a study aid only. It does not guarantee a passing score on
              the official examination, and it is not the official examination
              itself.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-xl font-semibold text-ltm-black">
              {showAll ? "All questions" : "Questions you missed"}
            </h2>
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="rounded-md text-sm font-medium text-ltm-black underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ltm-navy focus-visible:ring-offset-2"
            >
              {showAll ? "Show only missed" : "Show all questions"}
            </button>
          </div>

          {visible.length === 0 ? (
            <EmptyState
              icon={Trophy}
              title="A perfect score. Well done."
              description="You answered every question correctly. Switch to 'Show all questions' if you'd like to review your answers."
            />
          ) : (
            <ul className="space-y-3">
              {visible.map((q) => {
                const ans = answerById.get(q.id);
                if (!ans) return null;
                const correctOpt = q.options.find((o) => o.correct)!;
                const userOpt = q.options.find((o) => o.label === ans.selected)!;
                return (
                  <li
                    key={q.id}
                    className="rounded-lg border border-ltm-border bg-white p-5 shadow-sm"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wider text-ltm-muted">
                      Question {q.id}
                    </p>
                    <h3 className="mt-1 text-base font-semibold text-ltm-slate">
                      {q.question}
                    </h3>
                    <dl className="mt-3 space-y-1.5 text-sm">
                      <div
                        className={cn(
                          "flex flex-col gap-0.5 sm:flex-row sm:gap-2",
                          ans.correct && "hidden"
                        )}
                      >
                        <dt className="font-medium text-ltm-red">
                          Your answer:
                        </dt>
                        <dd className="text-ltm-slate">
                          ({userOpt.label}) {userOpt.text}
                        </dd>
                      </div>
                      <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-2">
                        <dt className="font-medium text-ltm-success">
                          Correct answer:
                        </dt>
                        <dd className="text-ltm-slate">
                          ({correctOpt.label}) {correctOpt.text}
                        </dd>
                      </div>
                    </dl>
                    <p className="mt-3 rounded-md bg-ltm-stone p-3 text-sm leading-relaxed text-ltm-slate">
                      {q.explanation}
                    </p>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button size="lg" onClick={onRestart} className="flex-1">
            <RotateCw className="h-4 w-4" aria-hidden="true" />
            Restart Test
          </Button>
          <Button asChild size="lg" variant="outline" className="flex-1">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function PracticeTestPageClient() {
  const [mode, setMode] = React.useState<Mode>("intro");
  const [current, setCurrent] = React.useState(0);
  const [answers, setAnswers] = React.useState<Answer[]>([]);
  const [selected, setSelected] = React.useState<"a" | "b" | "c" | null>(null);

  const startTest = React.useCallback(() => {
    setMode("quiz");
    setCurrent(0);
    setAnswers([]);
    setSelected(null);
  }, []);

  const handleSelect = React.useCallback(
    (letter: "a" | "b" | "c") => {
      if (selected !== null) return;
      const q = practiceQuestions[current];
      const opt = q.options.find((o) => o.label === letter)!;
      setSelected(letter);
      setAnswers((prev) => [
        ...prev,
        { questionId: q.id, selected: letter, correct: opt.correct },
      ]);
    },
    [current, selected]
  );

  const handleNext = React.useCallback(() => {
    if (current + 1 >= practiceQuestions.length) {
      setMode("review");
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
    }
  }, [current]);

  return (
    <>
      <PageHeader
        title={practiceTestMeta.title}
        subtitle={practiceTestMeta.subtitle}
      />
      {mode === "intro" && <IntroScreen onStart={startTest} />}
      {mode === "quiz" && (
        <QuizScreen
          current={current}
          question={practiceQuestions[current]}
          selected={selected}
          onSelect={handleSelect}
          onNext={handleNext}
          isLast={current + 1 >= practiceQuestions.length}
        />
      )}
      {mode === "review" && (
        <ReviewScreen answers={answers} onRestart={startTest} />
      )}
    </>
  );
}
