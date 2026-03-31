"use client";

import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface Project {
  title: string;
  description: string;
  highlights: string[];
  stack: string[];
  liveUrl?: string;
  codeUrl?: string;
}

const projects: Project[] = [
  {
    title: "LMS Platform",
    description:
      "A full-featured learning management system handling course delivery, student progress tracking, and instructor dashboards with real-time notifications.",
    highlights: [
      "Complex relational schema with cascading data models",
      "AWS S3 for media storage with signed URL delivery",
      "CI/CD pipeline with automated testing and staging deploys",
      "Background job processing for assignment tasks",
      "Redis caching for session management and rate limiting",
      "Structured REST API with versioned endpoints",
    ],
    stack: [
      "MERN",
      "TypeScript",
      "Redis",
      "AWS",
      "Render",
      "Docker",
    ],
    liveUrl: "https://assignflowhub.karanart.com/home",
    codeUrl: "https://github.com/KARAN0072177/assignflow-hub-prod",
  },
    {
    title: "SaaS Application",
    description:
      "A multi-tenant SaaS platform with comprehensive user management, payment processing, and a full admin panel for operational oversight.",
    highlights: [
      "Multi-flow authentication with OAuth and credentials",
      "Role-based admin panel with granular permissions",
      "Stripe integration for subscriptions and one-time payments",
      "Image upload pipeline with optimization and CDN delivery",
      "User profile management with activity logging",
      "Webhook handling with retry logic and event deduplication",
    ],
    stack: [
      "React",
      "Node.js",
      "Flask",
      "Stripe",
      "Auth Providers",
      "Web Sockets",
    ],
    liveUrl: "https://arts-of-imagination-ever-2-0.onrender.com",
    codeUrl: "https://github.com/KARAN0072177/ARTS-OF-IMAGINATION-EVER-2.0",
  },
];

export function Projects() {
  const sectionRef = useScrollReveal();

  return (
    <section id="projects" className="py-24" ref={sectionRef}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal">
          <SectionHeading
            label="// PROJECTS"
            title="Featured Work"
            description="Selected projects that demonstrate my approach to building robust, production-grade applications."
          />
        </div>

        <div className="flex flex-col gap-8">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`reveal ${i === 1 ? "reveal-delay-2" : ""} group overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:border-neon/30`}
            >
              <div className="p-8">
                <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
                  {/* Left: Info */}
                  <div className="flex-1">
                    <h3 className="mb-3 text-2xl font-bold text-foreground">
                      {project.title}
                    </h3>
                    <p className="mb-6 leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="border border-border bg-secondary/50 text-muted-foreground"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      {project.liveUrl && (
                        <Button
                          asChild
                          size="sm"
                          className="btn-primary"
                        >
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {project.codeUrl && (
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="btn-outline bg-transparent"
                        >
                          <a
                            href={project.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="mr-1.5 h-3.5 w-3.5" />
                            Source Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Right: Highlights */}
                  <div className="flex-1">
                    <p className="mb-4 font-mono text-xs font-medium tracking-wider text-neon">
                      ARCHITECTURE HIGHLIGHTS
                    </p>
                    <ul className="flex flex-col gap-3">
                      {project.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon/60" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
