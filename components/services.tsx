"use client";

import {
  Shield,
  Server,
  LayoutDashboard,
  CreditCard,
  Layers,
  Wrench,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const services = [
  {
    icon: Layers,
    title: "Complete SaaS Platforms",
    description:
      "End-to-end development of SaaS applications with multi-tenancy, user management, and subscription billing baked in from day one.",
  },
  {
    icon: Shield,
    title: "Secure Authentication",
    description:
      "Multi-flow auth systems with role-based access control, session management, and security best practices that protect your users.",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboards",
    description:
      "Data-rich admin panels with granular permissions, analytics views, and the operational tools your team needs to manage the product.",
  },
  {
    icon: CreditCard,
    title: "Payment Systems",
    description:
      "Stripe-integrated payment flows with subscription management, webhook handling, and proper invoice/receipt generation.",
  },
  {
    icon: Server,
    title: "Scalable Backend APIs",
    description:
      "RESTful APIs built for performance with proper caching layers, background job processing, and structured error handling.",
  },
  {
    icon: Wrench,
    title: "Architecture Improvement",
    description:
      "Audit and refactor existing codebases to improve maintainability, performance, and security without disrupting your live product.",
  },
];

const delayClasses = [
  "",
  "reveal-delay-1",
  "reveal-delay-2",
  "reveal-delay-3",
  "reveal-delay-4",
  "reveal-delay-4",
];

export function Services() {
  const sectionRef = useScrollReveal();

  return (
    <section id="services" className="py-24" ref={sectionRef}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal">
          <SectionHeading
            label="// SERVICES"
            title="What I Help With"
            description="I focus on the problems that matter to your business, not just the technologies behind them."
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`reveal ${delayClasses[i]} group rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-neon/30 hover:bg-secondary/50`}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-neon/10 text-neon transition-colors group-hover:bg-neon/20">
                <service.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
