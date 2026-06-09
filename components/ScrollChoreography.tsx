"use client";

import { useEffect } from "react";

export default function ScrollChoreography() {
  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const setLoaded = () =>
      requestAnimationFrame(() => document.body.classList.add("loaded"));
    if (document.readyState === "complete") setLoaded();
    else window.addEventListener("load", setLoaded);
    const safety = window.setTimeout(
      () => document.body.classList.add("loaded"),
      1200
    );

    // reveal on scroll
    const reveals = document.querySelectorAll<HTMLElement>(".reveal");
    let revealIO: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window && !reduce) {
      revealIO = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              obs.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );
      reveals.forEach((el) => revealIO!.observe(el));
    } else {
      reveals.forEach((el) => el.classList.add("in"));
    }

    // datum active index
    const datumItems = Array.from(
      document.querySelectorAll<HTMLElement>(".datum__item")
    );
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-sec-target]")
    );
    let datumIO: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      datumIO = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              const idx = targets.indexOf(e.target as HTMLElement);
              datumItems.forEach((d, i) => {
                const active = i === idx;
                d.classList.toggle("is-active", active);
                if (active) d.setAttribute("aria-current", "true");
                else d.removeAttribute("aria-current");
              });
            }
          });
        },
        { threshold: 0.5 }
      );
      targets.forEach((t) => datumIO!.observe(t));
    }

    return () => {
      window.removeEventListener("load", setLoaded);
      window.clearTimeout(safety);
      revealIO?.disconnect();
      datumIO?.disconnect();
    };
  }, []);

  return null;
}
