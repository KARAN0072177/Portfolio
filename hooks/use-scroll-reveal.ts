"use client";

import { useEffect, useRef } from "react";

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    // Observe the container and all children with .reveal
    const revealChildren = el.querySelectorAll(".reveal");
    revealChildren.forEach((child) => observer.observe(child));

    // Also observe the element itself if it has .reveal
    if (el.classList.contains("reveal")) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}
