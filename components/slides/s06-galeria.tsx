"use client";

import { useState } from "react";
import Image from "next/image";
import { Slide } from "@/components/slide";
import { ImageLightbox } from "@/components/ui/image-lightbox";

const allImages = [
  { src: "/images/fachada-dia.png", alt: "Fachada Central Ocho", label: "Fachada · Vista frontal · Día" },
  { src: "/images/planta-garage.png", alt: "Planta garage", label: "Planta Baja · Garage" },
  { src: "/images/planta-social.png", alt: "Área social", label: "Nivel 1 · Sala y Comedor" },
  { src: "/images/planta-recamaras.png", alt: "Recámaras", label: "Nivel 2 · Recámaras" },
  { src: "/images/planta-rooftop.png", alt: "Rooftop", label: "Roof · Terraza privada" },
  { src: "/images/hero-fachada.png", alt: "Fachada nocturna", label: "Fachada · Vista frontal · Atardecer" },
];

const plants = allImages.slice(1);

export function S06Galeria() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <Slide centered={false}>
      <div className="stagger-in">
        {/* Header */}
        <div className="mb-4 sm:mb-6">
          <span className="font-mono text-sm text-foreground/20 block mb-2">06</span>
          <div className="w-[60px] h-[2px] bg-primary mb-3" />
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground">
            RECORRIDO VISUAL
          </h2>
        </div>

        {/* Hero — fachada */}
        <div
          className="relative rounded-xl overflow-hidden mb-4 group cursor-zoom-in"
          onClick={() => setLightboxIndex(0)}
        >
          <div className="relative aspect-[21/9]">
            <Image
              src="/images/fachada-dia.png"
              alt="Fachada — Central Ocho"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="100vw"
              quality={85}
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-5 py-3 flex items-end justify-between">
            <p className="text-white text-sm sm:text-base font-medium drop-shadow-lg">
              Fachada · Vista frontal · Día
            </p>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm rounded-lg px-2.5 py-1.5 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-white" style={{ fontSize: 14 }}>zoom_in</span>
              <span className="text-white text-xs">Ampliar</span>
            </div>
          </div>
        </div>

        {/* 2x2 grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {plants.map((img, i) => (
            <div
              key={img.src}
              className="group relative rounded-lg overflow-hidden bg-card cursor-zoom-in transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(139,105,20,0.15)]"
              onClick={() => setLightboxIndex(i + 1)}
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  sizes="50vw"
                  quality={80}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 px-3 py-2.5 flex items-end justify-between">
                <p className="text-white text-xs sm:text-sm font-medium drop-shadow-md">{img.label}</p>
                <span className="material-symbols-outlined text-white/60 opacity-0 group-hover:opacity-100 transition-opacity" style={{ fontSize: 16 }}>zoom_in</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <ImageLightbox
          images={allImages}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </Slide>
  );
}
