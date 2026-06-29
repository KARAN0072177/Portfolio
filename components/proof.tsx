"use client";

import { Github, Award } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function Proof() {
  const sectionRef = useScrollReveal();

  return (
    <section className="py-24" ref={sectionRef}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal">
          <SectionHeading
            label="// PROOF OF WORK"
            title="Beyond the Portfolio"
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {/* GitHub Activity */}
          <div className="reveal group rounded-lg border border-border bg-card p-8 transition-all duration-300 hover:border-neon/30">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-neon/10 text-neon">
                <Github className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                GitHub Activity
              </h3>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              Consistent commit history across multiple repositories.
              Open-source contributions and well-documented project
              architectures.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="rounded-md border border-border bg-secondary/50 px-4 py-2">
                <p className="text-lg font-bold text-foreground">799+</p>
                <p className="text-xs text-muted-foreground">Contributions</p>
              </div>
              <div className="rounded-md border border-border bg-secondary/50 px-4 py-2">
                <p className="text-lg font-bold text-foreground">20+</p>
                <p className="text-xs text-muted-foreground">Repositories</p>
              </div>
              <div className="rounded-md border border-border bg-secondary/50 px-4 py-2">
                <p className="text-lg font-bold text-foreground">Daily</p>
                <p className="text-xs text-muted-foreground">Active</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="reveal reveal-delay-1 group rounded-lg border border-border bg-card p-8 transition-all duration-300 hover:border-neon/30">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-neon/10 text-neon">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Certifications
              </h3>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              Verified problem-solving skills through competitive programming
              platforms and technical certification programs.
            </p>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-3 rounded-md border border-border bg-secondary/50 px-4 py-3">
                <span className="h-2 w-2 rounded-full bg-neon" />
                <div>
                  <p className="text-sm font-medium text-foreground">
                    HackerRank Problem Solving
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Certified - Algorithms & Data Structures
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-3 rounded-md border border-border bg-secondary/50 px-4 py-3">
                <span className="h-2 w-2 rounded-full bg-neon" />
                <div>
                  <p className="text-sm font-medium text-foreground">
                    HackerRank JavaScript
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Certified - Advanced Level
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
