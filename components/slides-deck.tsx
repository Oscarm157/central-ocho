"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface SlidesDeckProps {
  children: React.ReactNode[];
  storageKey?: string;
}

export function SlidesDeck({ children, storageKey = "central8-slide" }: SlidesDeckProps) {
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isAnimating, setIsAnimating] = useState(false);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStart = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const total = children.length;

  useEffect(() => {
    const saved = sessionStorage.getItem(storageKey);
    if (saved) setCurrent(parseInt(saved, 10));
    setMounted(true);
  }, [storageKey]);

  const goTo = useCallback(
    (index: number, dir?: "next" | "prev") => {
      if (isAnimating) return;
      if (index < 0 || index >= total) return;
      setDirection(dir ?? (index > current ? "next" : "prev"));
      setIsAnimating(true);
      setCurrent(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [current, total, isAnimating]
  );

  const next = useCallback(() => goTo(current + 1, "next"), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1, "prev"), [current, goTo]);

  useEffect(() => {
    if (mounted) sessionStorage.setItem(storageKey, String(current));
  }, [current, mounted, storageKey]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); next(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
      if (e.key === "Home") { e.preventDefault(); goTo(0); }
      if (e.key === "End") { e.preventDefault(); goTo(total - 1); }
      if (e.key === "f" || e.key === "F") { toggleFullscreen(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, goTo, total]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onTouchStart = (e: TouchEvent) => {
      touchStart.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
    };
    const onTouchEnd = (e: TouchEvent) => {
      if (touchStart.current === null || touchStartY.current === null) return;
      const diffX = touchStart.current - e.changedTouches[0].clientX;
      const diffY = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(diffX) > 80 && Math.abs(diffX) > Math.abs(diffY) * 2) {
        diffX > 0 ? next() : prev();
      }
      touchStart.current = null;
      touchStartY.current = null;
    };
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => { el.removeEventListener("touchstart", onTouchStart); el.removeEventListener("touchend", onTouchEnd); };
  }, [next, prev]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }, []);

  useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  if (!mounted) return null;

  return (
    <div ref={containerRef} className="relative w-screen h-screen overflow-hidden bg-background">
      {children.map((child, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            i === current
              ? "opacity-100 translate-x-0 pointer-events-auto"
              : i < current
              ? "opacity-0 -translate-x-full pointer-events-none"
              : "opacity-0 translate-x-full pointer-events-none"
          }`}
          aria-hidden={i !== current}
        >
          {child}
        </div>
      ))}

      {/* Top-left branding + Inicio button */}
      <div className="absolute top-0 left-0 z-50 flex items-center gap-3 px-4 sm:px-6 py-3 sm:py-4">
        <span className="font-display text-sm text-foreground/70">CENTRAL OCHO</span>
        {current > 0 && (
          <button
            onClick={() => goTo(0, "prev")}
            className="flex items-center gap-1 text-xs text-concrete hover:text-foreground transition-all"
          >
            <span className="material-symbols-outlined" style={{ fontSize: 14 }}>home</span>
            <span className="hidden sm:inline">Inicio</span>
          </button>
        )}
      </div>

      {/* Top-right controls */}
      <div className="absolute top-0 right-0 z-50 flex items-center gap-2 sm:gap-3 px-3 sm:px-6 py-3 sm:py-4">
        <span className="text-xs font-mono text-concrete tabular-nums">
          {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        <div className="flex items-center gap-1">
          <button onClick={prev} disabled={current === 0} className="w-8 h-8 rounded-lg flex items-center justify-center text-concrete hover:text-foreground hover:bg-card disabled:opacity-20 disabled:cursor-not-allowed transition-all">
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>chevron_left</span>
          </button>
          <button onClick={next} disabled={current === total - 1} className="w-8 h-8 rounded-lg flex items-center justify-center text-concrete hover:text-foreground hover:bg-card disabled:opacity-20 disabled:cursor-not-allowed transition-all">
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>chevron_right</span>
          </button>
        </div>
        <button onClick={toggleFullscreen} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-concrete hover:text-foreground hover:bg-card transition-all" title="Fullscreen (F)">
          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>{isFullscreen ? "fullscreen_exit" : "fullscreen"}</span>
          <span className="text-xs font-medium hidden sm:inline">{isFullscreen ? "Salir" : "Fullscreen"}</span>
        </button>
      </div>

      {/* Bottom progress bar */}
      <div className="absolute bottom-0 left-0 right-0 z-50 px-6 py-3">
        <div className="h-0.5 bg-card-border rounded-full overflow-hidden">
          <div className="h-full bg-primary transition-all duration-500 ease-out rounded-full" style={{ width: `${((current + 1) / total) * 100}%` }} />
        </div>
      </div>
    </div>
  );
}
