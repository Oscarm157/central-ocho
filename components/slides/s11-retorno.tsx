"use client";

import { Slide } from "@/components/slide";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { investment, quotes } from "@/lib/data";

export function S11Retorno() {
  return (
    <Slide className="bg-charcoal">
      <div className="stagger-in flex flex-col h-full">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <p className="uppercase tracking-wider text-primary-light/60 text-xs sm:text-sm font-medium mb-3">
            Propuesta de Retorno
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-white">
            Rendimiento claro y estructurado
          </h2>
        </div>

        {/* 3 giant columns */}
        <div className="flex items-start justify-center flex-1 mb-8">
          {/* Column 1 — Rendimiento */}
          <div className="flex-1 text-center px-4 sm:px-6">
            <div className="text-gradient font-mono text-5xl sm:text-6xl md:text-7xl font-medium mb-2">
              <AnimatedCounter target={investment.annualReturn} suffix="%" duration={1500} />
            </div>
            <p className="text-white/50 text-sm sm:text-base">Rendimiento anual</p>
          </div>

          {/* Divider */}
          <div className="border-l border-white/10 self-stretch" />

          {/* Column 2 — Frecuencia */}
          <div className="flex-1 text-center px-4 sm:px-6">
            <div className="text-white font-display text-5xl sm:text-6xl font-bold mb-2">
              Anual
            </div>
            <p className="text-white/50 text-sm sm:text-base">Pago de rendimientos</p>
          </div>

          {/* Divider */}
          <div className="border-l border-white/10 self-stretch" />

          {/* Column 3 — Plazo */}
          <div className="flex-1 text-center px-4 sm:px-6">
            <div className="text-gradient font-mono text-5xl sm:text-6xl md:text-7xl font-medium mb-2">
              <AnimatedCounter target={investment.maxMonths} duration={1500} />
            </div>
            <p className="text-white/50 text-sm sm:text-base">Meses máximo</p>
          </div>
        </div>

        {/* Quote in bordered box */}
        <div className="border border-primary/30 rounded-lg py-4 px-8 text-center">
          <p className="text-white/60 italic text-sm sm:text-base">&ldquo;{quotes.s11}&rdquo;</p>
        </div>
      </div>
    </Slide>
  );
}
