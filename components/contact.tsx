"use client";

import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "karavani2003@gmail.com",
    href: "mailto:karavani2003@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/KARAN0072177",
    href: "https://github.com/KARAN0072177",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/karan-vani-580704357",
    href: "https://www.linkedin.com/in/karan-vani-580704357/",
  },
];

export function Contact() {
  const sectionRef = useScrollReveal();

  return (
    <section id="contact" className="py-24" ref={sectionRef}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal">
          <SectionHeading
            label="// CONTACT"
            title="Let's Build Something Together"
            description="Have a project in mind? I'm available for freelance work and always interested in hearing about new challenges."
          />
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* CTA Card */}
          <div className="reveal rounded-lg border border-border bg-card p-8">
            <h3 className="mb-3 text-xl font-bold text-foreground">
              Start a Conversation
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              Whether you need a full SaaS build, want to improve your existing
              architecture, or have questions about my approach, I&apos;d like
              to hear from you. I typically respond within 24 hours.
            </p>
            <Button
              asChild
              size="lg"
              className="btn-primary"
            >
              <a href="mailto:karavani2003@gmail.com">
                Send an Email
                <ArrowUpRight className="ml-1.5 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Contact methods */}
          <div className="reveal reveal-delay-2 flex flex-col gap-4">
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-lg border border-border bg-card p-5 transition-all duration-300 hover:border-neon/30 hover:bg-secondary/50"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-neon/10 text-neon">
                  <method.icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">
                    {method.label}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {method.value}
                  </p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:text-neon group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
