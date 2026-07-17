"use client";

import { useEffect } from "react";

const revealSelector = "[data-scroll-reveal], [data-scroll-reveal-group]";

function clearRevealState(elements: HTMLElement[]) {
  elements.forEach((element) => element.removeAttribute("data-reveal-state"));
}

export function ScrollRevealController() {
  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    let elements: HTMLElement[] = [];
    let observer: IntersectionObserver | null = null;

    try {
      elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));

      if (elements.length === 0) {
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            const element = entry.target as HTMLElement;
            element.dataset.revealState = "visible";
            observer?.unobserve(element);
          });
        },
        {
          rootMargin: "0px 0px -8% 0px",
          threshold: 0.08,
        },
      );

      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

      elements.forEach((element) => {
        const bounds = element.getBoundingClientRect();
        const isInitiallyVisible = bounds.top < viewportHeight && bounds.bottom > 0;

        element.dataset.revealState = isInitiallyVisible ? "visible" : "pending";

        if (!isInitiallyVisible) {
          observer?.observe(element);
        }
      });
    } catch {
      observer?.disconnect();
      clearRevealState(elements);
    }

    return () => {
      observer?.disconnect();
      clearRevealState(elements);
    };
  }, []);

  return null;
}
