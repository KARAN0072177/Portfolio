"use client";

import {
  FileSearch,
  ShieldCheck,
  Blocks,
  RefreshCcw,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const steps = [
  {
    icon: FileSearch,
    title: "Plan Before Coding",
    description:
      "Every project starts with understanding the domain, mapping data flows, and defining clear requirements. Architecture decisions made early prevent expensive rewrites later.",
  },
  {
    icon: ShieldCheck,
    title: "Security-First Mindset",
    description:
      "Authentication, authorization, and data validation are never afterthoughts. I build security into the foundation, not patch it on top.",
  },
  {
    icon: Blocks,
    title: "Reusable & Modular",
    description:
      "Code is structured in composable modules that can evolve independently. This means faster feature development and simpler maintenance as the product grows.",
  },
  {
    icon: RefreshCcw,
    title: "Built to Scale",
    description:
      "From database indexing to caching strategies to API pagination, I think about performance at scale from the start so you never hit a wall.",
  },
];

const delayClasses = ["", "reveal-delay-1", "reveal-delay-2", "reveal-delay-3"];

export function Process() {
  const sectionRef = useScrollReveal();

  return (
    <section id="process" className="border-t border-border bg-card/50 py-24" ref={sectionRef}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal">
          <SectionHeading
            label="// PROCESS"
            title="How I Build Software"
            description="Engineering maturity means making the right decisions before writing a single line of code."
          />
        </div>

        <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className={`reveal ${delayClasses[i]} flex flex-col bg-card p-8`}
            >
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-neon/10 text-neon">
                  <step.icon className="h-5 w-5" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
