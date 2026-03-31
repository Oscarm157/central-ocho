"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface LightboxImage {
  src: string;
  alt: string;
  label?: string;
}

interface ImageLightboxProps {
  images: LightboxImage[];
  initialIndex?: number;
  onClose: () => void;
}

export function ImageLightbox({ images, initialIndex = 0, onClose }: ImageLightboxProps) {
  const [index, setIndex] = useState(initialIndex);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (["Escape", "ArrowLeft", "ArrowRight"].includes(e.key)) {
        e.stopPropagation();
        e.stopImmediatePropagation();
      }
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex((i) => Math.min(i + 1, images.length - 1));
      if (e.key === "ArrowLeft") setIndex((i) => Math.max(i - 1, 0));
    };
    window.addEventListener("keydown", handler, { capture: true });
    return () => window.removeEventListener("keydown", handler, { capture: true });
  }, [images.length, onClose]);

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/92 backdrop-blur-sm flex flex-col"
      onClick={onClose}
    >
      {/* Título arriba centrado + cerrar */}
      <div
        className="flex items-center justify-between px-6 py-4 shrink-0"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="text-white/30 font-mono text-xs">
          {images.length > 1 ? `${index + 1} / ${images.length}` : ""}
        </span>
        <p className="text-white/80 text-sm font-medium text-center flex-1 px-4">
          {images[index].label ?? images[index].alt}
        </p>
        <button
          onClick={onClose}
          className="text-white/50 hover:text-white transition-colors flex items-center gap-1 text-sm shrink-0"
        >
          <span className="material-symbols-outlined" style={{ fontSize: 18 }}>close</span>
          <span className="hidden sm:inline">Cerrar</span>
        </button>
      </div>

      {/* Imagen */}
      <div
        className="flex-1 flex items-center justify-center px-4 min-h-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full max-w-5xl h-full">
          <Image
            src={images[index].src}
            alt={images[index].alt}
            fill
            className="object-contain"
            quality={90}
            sizes="100vw"
          />
        </div>
      </div>

      {/* Navegación abajo centrada — con padding para no chocar con barra de presentación */}
      {images.length > 1 && (
        <div
          className="flex items-center justify-center gap-6 px-6 py-5 pb-10 shrink-0"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setIndex((i) => Math.max(i - 1, 0))}
            disabled={index === 0}
            className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white disabled:opacity-20 transition-all"
          >
            <span className="material-symbols-outlined" style={{ fontSize: 20 }}>chevron_left</span>
          </button>

          <div className="flex gap-2 items-center">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? "bg-primary-light w-5" : "bg-white/30 w-1.5"}`}
              />
            ))}
          </div>

          <button
            onClick={() => setIndex((i) => Math.min(i + 1, images.length - 1))}
            disabled={index === images.length - 1}
            className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white disabled:opacity-20 transition-all"
          >
            <span className="material-symbols-outlined" style={{ fontSize: 20 }}>chevron_right</span>
          </button>
        </div>
      )}
    </div>
  );
}
