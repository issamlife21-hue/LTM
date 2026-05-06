import Link from "next/link";
import { ArrowLeft, CheckCircle2, Info } from "lucide-react";

import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  practiceQuestions,
  practiceTestMeta,
} from "@/data/practice-test";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Practice Test — Study Mode",
};

export default function StudyPage() {
  return (
    <>
      <PageHeader
        title="Study Mode"
        subtitle="All 45 questions with answers and explanations. Use this to prepare before taking the timed practice test."
        actions={
          <Button asChild variant="whitePrimary">
            <Link href="/practice-test">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to Practice Test
            </Link>
          </Button>
        }
      />

      <section className="container-ltm py-12">
        <div className="mx-auto max-w-3xl space-y-4">
          <div className="rounded-lg border border-ltm-border bg-ltm-bg p-4 text-sm italic leading-relaxed text-ltm-muted">
            {practiceTestMeta.disclaimer}
          </div>

          <ol className="space-y-4">
            {practiceQuestions.map((q) => {
              const correctLetter = q.options.find((o) => o.correct)!.label;
              return (
                <li key={q.id}>
                  <Card>
                    <CardContent className="space-y-4 p-6">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-ltm-muted">
                          Question {q.id}
                        </p>
                        {q.editorNote && (
                          <p className="mt-1 flex items-start gap-2 text-xs italic text-ltm-muted">
                            <Info
                              className="mt-0.5 h-3.5 w-3.5 shrink-0"
                              aria-hidden="true"
                            />
                            {q.editorNote}
                          </p>
                        )}
                        <h2 className="mt-1 text-base font-semibold text-ltm-slate">
                          {q.question}
                        </h2>
                      </div>

                      <ul className="space-y-2">
                        {q.options.map((opt) => (
                          <li
                            key={opt.label}
                            className={cn(
                              "flex items-start gap-3 rounded-md border px-3 py-2 text-sm",
                              opt.correct
                                ? "border-ltm-success bg-ltm-success/5 text-ltm-slate"
                                : "border-ltm-border bg-white text-ltm-slate"
                            )}
                          >
                            <span
                              className={cn(
                                "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold uppercase",
                                opt.correct
                                  ? "bg-ltm-success text-white"
                                  : "bg-ltm-bg text-ltm-navy"
                              )}
                            >
                              {opt.label}
                            </span>
                            <span className="flex-1 leading-relaxed">
                              {opt.text}
                            </span>
                            {opt.correct && (
                              <CheckCircle2
                                className="h-5 w-5 shrink-0 text-ltm-success"
                                aria-label="Correct answer"
                              />
                            )}
                          </li>
                        ))}
                      </ul>

                      <div className="rounded-md bg-ltm-bg p-3 text-sm leading-relaxed text-ltm-slate">
                        <span className="font-semibold text-ltm-navy">
                          Answer ({correctLetter}):
                        </span>{" "}
                        {q.explanation}
                      </div>
                    </CardContent>
                  </Card>
                </li>
              );
            })}
          </ol>

          <div className="pt-4">
            <Button asChild size="lg">
              <Link href="/practice-test">Take the Practice Test</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
