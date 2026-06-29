"use client";

import React from "react"

import { useState, useEffect, useCallback } from "react";
import { Menu, X, Layers, FolderOpen, Workflow, User, Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

const navLinks: NavLink[] = [
  { label: "Services", href: "#services", icon: Layers },
  { label: "Projects", href: "#projects", icon: FolderOpen },
  { label: "Process", href: "#process", icon: Workflow },
  { label: "About", href: "#about", icon: User },
  { label: "Contact", href: "#contact", icon: Mail },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" }
    );
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  const handleSmoothScroll = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setMobileOpen(false);
    },
    []
  );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg shadow-background/20"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="group font-mono text-sm font-bold tracking-wider text-foreground transition-colors duration-300"
        >
          <span className="text-neon transition-opacity duration-300 group-hover:opacity-70">
            {"<"}
          </span>
          {"Karan Vani"}
          <span className="text-neon transition-opacity duration-300 group-hover:opacity-70">
            {" />"}
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className={cn(
                    "group/link relative flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-all duration-300",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Icon
                    className={cn(
                      "h-3.5 w-3.5 transition-colors duration-300",
                      isActive ? "text-neon" : "text-muted-foreground/60 group-hover/link:text-muted-foreground"
                    )}
                  />
                  {link.label}
                  {/* Active indicator line */}
                  <span
                    className={cn(
                      "absolute bottom-0 left-3 right-3 h-px transition-all duration-300",
                      isActive
                        ? "bg-neon opacity-100"
                        : "bg-transparent opacity-0 group-hover/link:bg-muted-foreground/30 group-hover/link:opacity-100"
                    )}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <Button
          asChild
          size="sm"
          className="btn-primary hidden md:inline-flex"
        >
          <a href="#contact" onClick={(e) => handleSmoothScroll(e, "#contact")}>
            <Mail className="mr-1.5 h-3.5 w-3.5" />
            Get in Touch
          </a>
        </Button>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <div className="relative h-5 w-5">
            <X
              className={cn(
                "absolute inset-0 h-5 w-5 transition-all duration-300",
                mobileOpen ? "rotate-0 opacity-100" : "rotate-90 opacity-0"
              )}
            />
            <Menu
              className={cn(
                "absolute inset-0 h-5 w-5 transition-all duration-300",
                mobileOpen ? "-rotate-90 opacity-0" : "rotate-0 opacity-100"
              )}
            />
          </div>
        </button>
      </nav>

      {/* Mobile nav */}
      <div
        className={cn(
          "overflow-hidden border-b bg-background/95 backdrop-blur-xl transition-all duration-300 md:hidden",
          mobileOpen ? "max-h-96 border-border opacity-100" : "max-h-0 border-transparent opacity-0"
        )}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-all duration-300",
                    isActive
                      ? "text-foreground bg-secondary/60"
                      : "text-muted-foreground hover:bg-secondary/40 hover:text-foreground"
                  )}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                >
                  <Icon
                    className={cn(
                      "h-4 w-4 transition-colors duration-300",
                      isActive ? "text-neon" : "text-muted-foreground/60"
                    )}
                  />
                  {link.label}
                  {isActive && (
                    <span className="ml-auto h-1.5 w-1.5 rounded-full bg-neon" />
                  )}
                </a>
              </li>
            );
          })}
          <li className="mt-2">
            <Button
              asChild
              size="sm"
              className="btn-primary w-full"
            >
              <a href="#contact" onClick={(e) => handleSmoothScroll(e, "#contact")}>
                <Mail className="mr-1.5 h-3.5 w-3.5" />
                Get in Touch
              </a>
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
