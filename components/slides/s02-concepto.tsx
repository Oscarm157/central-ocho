"use client";

import { CopperIcon } from "@/components/ui/copper-icon";
import { Slide } from "@/components/slide";
import { quotes } from "@/lib/data";

const pillars = [
  {
    icon: "design",
    title: "Diseño contemporáneo",
    description: "Arquitectura que compite con desarrollos de mayor precio. Diseño intencional, no genérico.",
  },
  {
    icon: "profile",
    title: "Perfil definido",
    description: "Producto diseñado para un segmento específico. Cada detalle responde a un comprador real.",
  },
  {
    icon: "shield",
    title: "Inventario limitado",
    description: "Escasez por decisión. Cada unidad es parte de una colección exclusiva de 8.",
  },
];

export function S02Concepto() {
  return (
    <Slide className="bg-card">
      <div className="stagger-in flex flex-col items-center text-center">
        {/* Label */}
        <div className="mb-4">
          <span className="font-mono text-sm text-foreground/20 block mb-2">02</span>
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-primary font-medium">
            El Concepto
          </p>
        </div>

        {/* Giant 8 */}
        <div className="relative mb-2">
          <span className="font-[family-name:var(--font-bodoni)] text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px] leading-none text-primary/15 select-none animate-number block">
            8
          </span>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-display text-2xl sm:text-3xl md:text-4xl md:text-5xl text-foreground">Exclusividad</span>
            <span className="font-display text-2xl sm:text-3xl md:text-4xl md:text-5xl text-primary">por diseño</span>
          </div>
        </div>

        <p className="text-muted text-sm sm:text-base mb-8 max-w-md">
          Townhouses · Buena Vista · Solo 8 unidades
        </p>

        {/* 3 pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-6">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="bg-background/70 border border-card-border rounded-xl p-5 sm:p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
            >
              <CopperIcon name={p.icon} size={26} className="mb-3" />
              <h3 className="text-foreground font-semibold text-sm sm:text-base mb-1.5">{p.title}</h3>
              <p className="text-muted text-xs sm:text-sm leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>

        <div className="w-10 h-[2px] bg-primary mx-auto mb-3" />
        <p className="font-display text-sm sm:text-base text-muted italic max-w-xl">
          &ldquo;{quotes.s02}&rdquo;
        </p>
      </div>
    </Slide>
  );
}
