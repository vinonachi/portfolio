"use client";

import { useEffect, useRef } from "react";

type Point = { x: number; y: number };

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

export default function CursorGlow() {
  const rafRef = useRef<number | null>(null);
  const target = useRef<Point>({ x: 0, y: 0 });
  const current = useRef<Point>({ x: 0, y: 0 });
  const visible = useRef(false);

  useEffect(() => {
    const root = document.documentElement;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) return;

    const onMove = (e: PointerEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      visible.current = true;
    };

    const onLeave = () => {
      visible.current = false;
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave, { passive: true } as AddEventListenerOptions);

    const tick = () => {
      const t = target.current;
      const c = current.current;

      c.x = lerp(c.x, t.x, 0.12);
      c.y = lerp(c.y, t.y, 0.12);

      root.style.setProperty("--cursor-x", `${c.x}px`);
      root.style.setProperty("--cursor-y", `${c.y}px`);
      root.style.setProperty("--cursor-visible", visible.current ? "1" : "0");

      rafRef.current = window.requestAnimationFrame(tick);
    };

    rafRef.current = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Purely decorative: rendered via CSS using --cursor-x/--cursor-y.
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] opacity-[var(--cursor-visible)] transition-opacity duration-300"
    >
      <div className="cursor-glow" />
    </div>
  );
}

