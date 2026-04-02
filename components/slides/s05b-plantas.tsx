"use client";

import { useRef, useState, useCallback } from "react";

const IMG_SRC = "/images/PLANTAS ARQUITECTONICAS TOWNHOUSES__.png";
const ZOOM = 3;
const LENS_SIZE = 200;

export function S05bPlantas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lens, setLens] = useState<{ x: number; y: number } | null>(null);

  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setLens({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  return (
    <div className="w-full h-full overflow-hidden">
      {/* Header mínimo — posición absoluta para no quitar espacio a la imagen */}
      <div className="absolute top-4 left-6 z-10 stagger-in">
        <span className="font-mono text-sm text-foreground/20 block mb-1">05</span>
        <div className="w-[60px] h-[2px] bg-primary mb-2" />
        <h2 className="font-display text-xl sm:text-2xl md:text-3xl text-foreground">
          Plantas Arquitectónicas
        </h2>
      </div>

      {/* Imagen a pantalla completa con lupa */}
      <div
        ref={containerRef}
        className="zoom-reveal relative w-full h-full cursor-none"
        onMouseMove={handleMove}
        onMouseLeave={() => setLens(null)}
        style={{
          backgroundImage: `url("${IMG_SRC}")`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Lupa — zoom real hacia adentro */}
        {lens && (
          <div
            className="pointer-events-none absolute rounded-full border-2 border-primary/50 shadow-[0_0_24px_rgba(139,105,20,0.3)]"
            style={{
              width: LENS_SIZE,
              height: LENS_SIZE,
              left: lens.x - LENS_SIZE / 2,
              top: lens.y - LENS_SIZE / 2,
              backgroundImage: `url("${IMG_SRC}")`,
              backgroundSize: `${containerRef.current!.offsetWidth * ZOOM}px ${containerRef.current!.offsetHeight * ZOOM}px`,
              backgroundPosition: `${-lens.x * ZOOM + LENS_SIZE / 2}px ${-lens.y * ZOOM + LENS_SIZE / 2}px`,
              backgroundRepeat: "no-repeat",
              zIndex: 10,
            }}
          />
        )}

        {/* Hint */}
        {!lens && (
          <div className="absolute bottom-4 right-4 bg-foreground/60 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center gap-2 opacity-60">
            <span className="material-symbols-outlined text-white" style={{ fontSize: 16 }}>search</span>
            <span className="text-white text-xs font-medium">Mueve el cursor para explorar</span>
          </div>
        )}
      </div>
    </div>
  );
}
