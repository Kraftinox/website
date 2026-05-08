"use client";
import { animationConfig } from "@/config/animationConfig";
import useFadeObserver from "@/hooks/useFadeObserver";
import useTextRevel from "@/hooks/useTextRevel";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const AnimationWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  // CSS + IntersectionObserver fade (no GSAP ticker, no ScrollTrigger)
  useFadeObserver();

  // GSAP scrub word-by-word reveal for .tp-text-revel titles
  useTextRevel();

  useEffect(() => {
    if (!pathname) return;

    // Route-based one-shot animations only (e.g. buttonTextAnim)
    const id = requestAnimationFrame(() => {
      Object.entries(animationConfig).forEach(([route, animations]) => {
        if (pathname === route || (route !== "/" && pathname.startsWith(`${route}/`))) {
          animations.forEach((fn) => fn());
        }
      });
    });

    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return <>{children}</>;
};

export default AnimationWrapper;