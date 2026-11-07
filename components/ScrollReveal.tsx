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

    // Parallax suave na foto do topo (com amortecimento para não "pular")
    const par = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    let target = window.scrollY;
    let current = target;
    let raf = 0;
    const loop = () => {
      current += (target - current) * 0.08;
      if (Math.abs(target - current) < 0.1) current = target;
      if (current < window.innerHeight * 1.2) {
        par.forEach((el) => {
          el.style.transform = `translate3d(0, ${(current * 0.1).toFixed(2)}px, 0) scale(${(1 - current * 0.00006).toFixed(4)})`;
        });
      }
      raf = current === target ? 0 : requestAnimationFrame(loop);
    };
    const onScroll = () => {
      target = window.scrollY;
      if (!raf) raf = requestAnimationFrame(loop);
    };
    if (par.length) {
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
