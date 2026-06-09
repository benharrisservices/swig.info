"use client";

import { useEffect, useRef, useState } from "react";
import { nav as navItems, site } from "@/lib/site";
import Wordmark from "@/components/Wordmark";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const navEl = document.getElementById("nav");
    if (!navEl) return;
    const panels = Array.from(
      document.querySelectorAll<HTMLElement>("[data-nav]")
    );

    const onScroll = () => {
      navEl.classList.toggle("is-stuck", window.scrollY > 24);
      const line = 64;
      let current = "dark";
      for (const p of panels) {
        const r = p.getBoundingClientRect();
        if (r.top <= line && r.bottom > line) current = p.dataset.nav || "dark";
      }
      navEl.classList.toggle("is-light", current === "light");
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    // Keep off-screen menu links out of the tab order when closed.
    if (menuRef.current) menuRef.current.inert = !open;
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape for keyboard users.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className="nav" id="nav">
        <a className="nav__brand" href="#top" aria-label="SWIG, home">
          <span className="nav__dot" aria-hidden="true" />
          <Wordmark />
        </a>
        <nav className="nav__links" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.href} className="nav__link" href={item.href}>
              {item.label}
            </a>
          ))}
          <a className="nav__tel" href={site.phone.href}>
            {site.phone.display}
          </a>
          <a className="nav__cta" href="#contact">
            Enquire now
          </a>
        </nav>
        <button
          className={`nav__toggle${open ? " is-open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </header>

      <div
        ref={menuRef}
        className={`menu${open ? " is-open" : ""}`}
        aria-hidden={!open}
        id="menu"
      >
        <span className="mono">Index</span>
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <a href="#contact" onClick={() => setOpen(false)}>
          Enquire now
        </a>
        <a className="menu__tel mono" href={site.phone.href}>
          {site.phone.display}
        </a>
      </div>
    </>
  );
}
