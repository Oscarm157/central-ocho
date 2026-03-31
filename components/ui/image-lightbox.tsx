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
      className="fixed inset-0 z-[9999] bg-black/92 backdrop-blur-sm flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/50 hover:text-white transition-colors flex items-center gap-1 text-sm"
        >
          <span className="material-symbols-outlined" style={{ fontSize: 18 }}>close</span>
          <span>Cerrar</span>
        </button>

        {/* Image */}
        <div className="relative w-full h-[70vh] rounded-xl overflow-hidden">
          <Image
            src={images[index].src}
            alt={images[index].alt}
            fill
            className="object-contain"
            quality={90}
            sizes="100vw"
          />
        </div>

        {/* Label + counter */}
        <div className="flex items-center justify-between mt-3 px-1">
          <p className="text-white/60 text-sm">{images[index].label ?? images[index].alt}</p>
          {images.length > 1 && (
            <span className="text-white/30 font-mono text-xs">{index + 1} / {images.length}</span>
          )}
        </div>

        {/* Navigation */}
        {images.length > 1 && (
          <div className="flex items-center justify-between mt-3">
            <button
              onClick={() => setIndex((i) => Math.max(i - 1, 0))}
              disabled={index === 0}
              className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white disabled:opacity-20 transition-all"
            >
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>chevron_left</span>
            </button>
            <div className="flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${i === index ? "bg-primary-light w-4" : "bg-white/30"}`}
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
    </div>
  );
}
