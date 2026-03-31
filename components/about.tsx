"use client";

import { SectionHeading } from "@/components/section-heading";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const traits = [
  "Product-minded problem solver",
  "Security & edge-case hunter",
  "Clean architecture advocate",
  "Scalability-conscious builder",
];

export function About() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="about"
      className="border-t border-border bg-card/50 py-24"
      ref={sectionRef}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal">
          <SectionHeading label="// ABOUT" title="A Bit About Me" />
        </div>

        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          <div className="reveal max-w-xl flex-1">
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              I&apos;m a product-minded developer who enjoys turning complex
              business requirements into clean, maintainable systems. With a
              Master&apos;s background in computer science, I bring both
              academic rigor and practical engineering experience to every
              project.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I specialize in finding the hidden risks and edge cases that
              others miss. Whether it&apos;s an authentication bypass, a race
              condition in payment processing, or a schema design that
              won&apos;t scale, I identify and solve these problems before they
              reach production.
            </p>
          </div>

          <div className="reveal reveal-delay-2 flex-1">
            <p className="mb-4 font-mono text-xs font-medium tracking-wider text-neon">
              WHAT DEFINES MY WORK
            </p>
            <ul className="flex flex-col gap-4">
              {traits.map((trait) => (
                <li
                  key={trait}
                  className="flex items-center gap-4 rounded-md border border-border bg-card p-4"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-neon" />
                  <span className="text-sm font-medium text-foreground">
                    {trait}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
