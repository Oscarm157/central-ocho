"use client";

import { useRef, useState, useCallback } from "react";
import { Slide } from "@/components/slide";

const IMG_SRC = "/images/PLANTAS ARQUITECTONICAS TOWNHOUSES__.png";
const ZOOM = 2;
const LENS_SIZE = 264;

export function S05bPlantas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const fullRef = useRef<HTMLDivElement>(null);
  const [lupaActive, setLupaActive] = useState(true);
  const [lens, setLens] = useState<{ x: number; y: number } | null>(null);
  const [fullscreen, setFullscreen] = useState(false);
  const [fullLens, setFullLens] = useState<{ x: number; y: number } | null>(null);

  const handleFullMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!lupaActive) return;
    const rect = fullRef.current?.getBoundingClientRect();
    if (!rect) return;
    setFullLens({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, [lupaActive]);

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

      {/* Fullscreen overlay */}
      {fullscreen && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
          <div
            ref={fullRef}
            className={`relative w-full h-full ${lupaActive ? "cursor-none" : ""}`}
            onMouseMove={handleFullMove}
            onMouseLeave={() => setFullLens(null)}
            style={{
              backgroundImage: `url("${IMG_SRC}")`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Lupa en fullscreen */}
            {lupaActive && fullLens && fullRef.current && (
              <div
                className="pointer-events-none absolute rounded-full border-2 border-primary/50 shadow-[0_0_24px_rgba(139,105,20,0.3)]"
                style={{
                  width: LENS_SIZE,
                  height: LENS_SIZE,
                  left: fullLens.x - LENS_SIZE / 2,
                  top: fullLens.y - LENS_SIZE / 2,
                  backgroundImage: `url("${IMG_SRC}")`,
                  backgroundSize: `${fullRef.current.offsetWidth * ZOOM}px ${fullRef.current.offsetHeight * ZOOM}px`,
                  backgroundPosition: `${-fullLens.x * ZOOM + LENS_SIZE / 2}px ${-fullLens.y * ZOOM + LENS_SIZE / 2}px`,
                  backgroundRepeat: "no-repeat",
                  zIndex: 10,
                }}
              />
            )}

            {/* Controles fullscreen */}
            <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
              <button
                onClick={() => {
                  setLupaActive((v) => !v);
                  if (lupaActive) setFullLens(null);
                }}
                className={`rounded-lg px-3 py-2 flex items-center gap-2 transition-all duration-300 ${
                  lupaActive
                    ? "bg-white text-charcoal shadow-[0_2px_12px_rgba(0,0,0,0.3)]"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
                  {lupaActive ? "search_off" : "search"}
                </span>
              </button>

              <button
                onClick={() => { setFullscreen(false); setFullLens(null); }}
                className="bg-white text-charcoal shadow-[0_2px_12px_rgba(0,0,0,0.3)] rounded-lg px-3 py-2 flex items-center gap-2 transition-all duration-300 hover:bg-white/90"
              >
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>close</span>
                <span className="text-xs font-medium">Cerrar</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </Slide>
  );
}
