"use client";

import { useRef, useState, useCallback } from "react";
import { Slide } from "@/components/slide";

const IMG_SRC = "/images/PLANTAS ARQUITECTONICAS TOWNHOUSES__.png";
const ZOOM = 2;
const LENS_SIZE = 264;

export function S05bPlantas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lupaActive, setLupaActive] = useState(true);
  const [lens, setLens] = useState<{ x: number; y: number } | null>(null);
  const [fullscreen, setFullscreen] = useState(false);

  const handleMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!lupaActive) return;
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      setLens({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    },
    [lupaActive],
  );

  return (
    <Slide centered={false}>
      <div className="stagger-in">
        {/* Header */}
        <div className="mb-3">
          <span className="font-mono text-sm text-foreground/20 block mb-2">05</span>
          <div className="w-[60px] h-[2px] bg-primary mb-3" />
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground">
            Plantas Arquitectónicas
          </h2>
        </div>

        {/* Imagen grande con lupa opcional */}
        <div
          ref={containerRef}
          className={`relative h-[80vh] ${lupaActive ? "cursor-none" : ""}`}
          onMouseMove={handleMove}
          onMouseLeave={() => setLens(null)}
          style={{
            backgroundImage: `url("${IMG_SRC}")`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Lupa */}
          {lupaActive && lens && containerRef.current && (
            <div
              className="pointer-events-none absolute rounded-full border-2 border-primary/50 shadow-[0_0_24px_rgba(139,105,20,0.3)]"
              style={{
                width: LENS_SIZE,
                height: LENS_SIZE,
                left: lens.x - LENS_SIZE / 2,
                top: lens.y - LENS_SIZE / 2,
                backgroundImage: `url("${IMG_SRC}")`,
                backgroundSize: `${containerRef.current.offsetWidth * ZOOM}px ${containerRef.current.offsetHeight * ZOOM}px`,
                backgroundPosition: `${-lens.x * ZOOM + LENS_SIZE / 2}px ${-lens.y * ZOOM + LENS_SIZE / 2}px`,
                backgroundRepeat: "no-repeat",
                zIndex: 10,
              }}
            />
          )}

          {/* Controles — arriba derecha */}
          <div className="absolute top-3 right-3 z-20 flex items-center gap-2">
            <button
              onClick={() => {
                setLupaActive((v) => !v);
                if (lupaActive) setLens(null);
              }}
              className={`rounded-lg px-3 py-2 flex items-center gap-2 transition-all duration-300 ${
                lupaActive
                  ? "bg-charcoal text-white shadow-[0_2px_12px_rgba(0,0,0,0.25)]"
                  : "bg-white text-charcoal shadow-[0_2px_12px_rgba(0,0,0,0.12)] hover:bg-white/90"
              }`}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
                {lupaActive ? "search_off" : "search"}
              </span>
              <span className="text-xs font-medium">
                {lupaActive ? "Desactivar lupa" : "Activar lupa"}
              </span>
            </button>

            <button
              onClick={() => setFullscreen(true)}
              className="bg-white text-charcoal shadow-[0_2px_12px_rgba(0,0,0,0.12)] hover:bg-white/90 rounded-lg px-3 py-2 flex items-center gap-2 transition-all duration-300"
            >
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>fullscreen</span>
              <span className="text-xs font-medium">Pantalla completa</span>
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen overlay — z-[100] para estar encima de los controles del deck (z-50) */}
      {fullscreen && (
        <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center">
          <div
            className="relative w-full h-full"
            style={{
              backgroundImage: `url("${IMG_SRC}")`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Solo botón cerrar — centrado abajo */}
            <button
              onClick={() => setFullscreen(false)}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 bg-white text-charcoal shadow-[0_2px_16px_rgba(0,0,0,0.4)] rounded-lg px-4 py-2.5 flex items-center gap-2 transition-all duration-300 hover:bg-white/90"
            >
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>fullscreen_exit</span>
              <span className="text-sm font-medium">Salir</span>
            </button>
          </div>
        </div>
      )}
    </Slide>
  );
}
