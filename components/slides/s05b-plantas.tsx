"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { Slide } from "@/components/slide";

const ZOOM = 2.5;
const LENS_SIZE = 180;

export function S05bPlantas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lens, setLens] = useState<{ x: number; y: number; bgX: number; bgY: number } | null>(null);
  const [imgLoaded, setImgLoaded] = useState(false);

  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const percX = (x / rect.width) * 100;
    const percY = (y / rect.height) * 100;
    setLens({ x, y, bgX: percX, bgY: percY });
  }, []);

  return (
    <Slide centered={false}>
      <div className="stagger-in flex flex-col h-full">
        {/* Header compacto */}
        <div className="mb-2 sm:mb-3 shrink-0">
          <span className="font-mono text-sm text-foreground/20 block mb-1">05</span>
          <div className="w-[60px] h-[2px] bg-primary mb-2" />
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground">
            Plantas Arquitectónicas
          </h2>
        </div>

        {/* Imagen — casi pantalla completa, sin box */}
        <div
          ref={containerRef}
          className="zoom-reveal relative h-[78vh] overflow-hidden cursor-none"
          onMouseMove={handleMove}
          onMouseLeave={() => setLens(null)}
        >
          <Image
            src="/images/PLANTAS ARQUITECTONICAS TOWNHOUSES__.png"
            alt="Plantas Arquitectónicas Townhouses"
            fill
            className="object-contain"
            sizes="100vw"
            quality={90}
            priority
            onLoad={() => setImgLoaded(true)}
          />

          {/* Lupa que sigue el cursor */}
          {lens && imgLoaded && (
            <div
              className="pointer-events-none absolute rounded-full border-2 border-primary/60 shadow-[0_0_20px_rgba(139,105,20,0.25)]"
              style={{
                width: LENS_SIZE,
                height: LENS_SIZE,
                left: lens.x - LENS_SIZE / 2,
                top: lens.y - LENS_SIZE / 2,
                backgroundImage: `url("/images/PLANTAS ARQUITECTONICAS TOWNHOUSES__.png")`,
                backgroundSize: `${ZOOM * 100}%`,
                backgroundPosition: `${lens.bgX}% ${lens.bgY}%`,
                backgroundRepeat: "no-repeat",
                zIndex: 10,
              }}
            />
          )}

          {/* Hint */}
          {!lens && (
            <div className="absolute bottom-3 right-3 bg-foreground/60 backdrop-blur-sm rounded-lg px-3 py-1.5 flex items-center gap-2 opacity-60">
              <span className="material-symbols-outlined text-white" style={{ fontSize: 16 }}>search</span>
              <span className="text-white text-xs font-medium">Mueve el cursor para explorar</span>
            </div>
          )}
        </div>
      </div>
    </Slide>
  );
}
