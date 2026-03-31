"use client";

import React from "react"

import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--border) / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border) / 0.4) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      {/* Glow effect */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 py-32">
        <div className="max-w-3xl">
          {/* Availability badge */}
          <div
            className={`mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 transition-all duration-700 delay-100 ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-medium text-muted-foreground">
              Available for new projects
            </span>
          </div>

          {/* Heading */}
          <h1
            className={`text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl transition-all duration-700 delay-200 ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            I build systems that
            <span className="text-neon"> don&apos;t break.</span>
          </h1>

          {/* Subtext */}
          <p
            className={`mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground transition-all duration-700 delay-300 ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            Full-Stack Developer specializing in authentication, system
            architecture, and scalable APIs. I deliver production-ready
            foundations for SaaS platforms and web applications.
          </p>

          {/* Buttons */}
          <div
            className={`mt-10 flex flex-wrap items-center gap-4 transition-all duration-700 delay-[400ms] ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
          >
            <Button asChild size="lg" className="btn-primary">
              <a href="#projects" onClick={(e) => handleScroll(e, "projects")}>
                <span>View Projects</span>
                <ArrowDown className="ml-1.5 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="btn-outline bg-transparent"
            >
              <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>
                <span>Contact Me</span>
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
