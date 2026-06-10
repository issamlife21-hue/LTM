"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  // Stagger delay in seconds.
  delay?: number;
};

// Subtle scroll-triggered reveal for static content sections only. GPU-only
// (opacity + translateY), fast, and fully disabled under prefers-reduced-motion
// so it never costs anything on cheap phones set to reduce motion.
export function FadeIn({ children, className, delay = 0 }: FadeInProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.2, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
