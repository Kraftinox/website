"use client";
import { useEffect } from "react";

export default function useFadeObserver() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".tp_fade_anim");
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = parseFloat(el.dataset.delay || "0");

            if (delay > 0) {
              el.style.transitionDelay = `${delay}s`;
            }

            el.classList.add("is-visible");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
