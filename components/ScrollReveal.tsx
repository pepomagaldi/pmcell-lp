"use client";

import { useEffect } from "react";

// Revela elementos com [data-reveal] quando entram na tela (estilo Apple)
// e aplica um parallax leve em [data-parallax].
export default function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    (window as unknown as { __revealOk?: boolean }).__revealOk = true;
    if (!root.classList.contains("reveal-ready")) return;

    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));

    // Parallax suave na foto do topo
    const par = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        par.forEach((el) => {
          if (y < window.innerHeight * 1.2) el.style.transform = `translate3d(0, ${y * 0.18}px, 0) scale(${1 - y * 0.00012})`;
        });
        ticking = false;
      });
    };
    if (par.length) window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
