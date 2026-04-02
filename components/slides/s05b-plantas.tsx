"use client";

import { useState } from "react";
import Image from "next/image";
import { Slide } from "@/components/slide";
import { ImageLightbox } from "@/components/ui/image-lightbox";

const plantaImage = {
  src: "/images/PLANTAS ARQUITECTONICAS TOWNHOUSES__.png",
  alt: "Plantas Arquitectónicas Townhouses",
  label: "Plantas Arquitectónicas",
};

export function S05bPlantas() {
  const [showLightbox, setShowLightbox] = useState(false);

  return (
    <Slide centered={false}>
      <div className="stagger-in flex flex-col h-full">
        {/* Header compacto */}
        <div className="mb-3 sm:mb-4 shrink-0">
          <span className="font-mono text-sm text-foreground/20 block mb-2">05</span>
          <div className="w-[60px] h-[2px] bg-primary mb-3" />
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground">
            Plantas Arquitectónicas
          </h2>
        </div>

        {/* Imagen — ocupa todo el espacio restante */}
        <div
          className="zoom-reveal relative flex-1 min-h-0 rounded-xl overflow-hidden group cursor-zoom-in
                     transition-shadow duration-500 hover:shadow-[0_0_40px_rgba(139,105,20,0.12)]"
          onClick={() => setShowLightbox(true)}
        >
          <Image
            src={plantaImage.src}
            alt={plantaImage.alt}
            fill
            className="object-contain transition-transform duration-700 group-hover:scale-[1.03]"
            sizes="100vw"
            quality={90}
            priority
          />

          {/* Indicador de zoom en hover */}
          <div className="absolute bottom-0 right-0 m-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                          bg-black/40 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center gap-2">
            <span className="material-symbols-outlined text-white" style={{ fontSize: 16 }}>zoom_in</span>
            <span className="text-white text-xs font-medium">Ampliar</span>
          </div>
        </div>
      </div>

      {showLightbox && (
        <ImageLightbox
          images={[plantaImage]}
          initialIndex={0}
          onClose={() => setShowLightbox(false)}
        />
      )}
    </Slide>
  );
}
