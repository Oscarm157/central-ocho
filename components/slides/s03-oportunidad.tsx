"use client";

import { Slide } from "@/components/slide";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { quotes } from "@/lib/data";

const opportunities = [
  {
    title: "Zona sin casas nuevas",
    description: "La oferta residencial en Buena Vista se limita a departamentos y vivienda usada. No hay casas nuevas disponibles.",
  },
  {
    title: "Demanda comprobada",
    description: "La zona tiene absorción histórica sostenida. El comprador de $5M+ busca activamente pero no encuentra producto a su nivel.",
  },
  {
    title: "Oportunidad clara",
    description: "Quien construya casas nuevas en esta zona no compite — cubre un vacío. El mercado ya existe, la oferta no.",
  },
];

export function S03Oportunidad() {
  return (
    <Slide>
      <div className="stagger-in">
        <SectionHeader number="03" title="LA OPORTUNIDAD" subtitle="En Buena Vista sobran departamentos y faltan casas" />

        {/* 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-6">
          {opportunities.map((o) => (
            <div
              key={o.title}
              className="bg-card rounded-xl p-5 sm:p-6 border border-transparent transition-all duration-300 hover:border-primary/25 hover:-translate-y-0.5 hover:shadow-sm"
            >
              <h3 className="text-foreground font-semibold text-base sm:text-lg mb-2">{o.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{o.description}</p>
            </div>
          ))}
        </div>

        {/* Demand vs Supply */}
        <div className="bg-card rounded-xl p-5 sm:p-7 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
            <div className="sm:w-1/3">
              <p className="text-muted/70 text-xs uppercase tracking-wider mb-1">Demanda vs Oferta</p>
              <p className="text-muted/60 text-xs">Brecha identificada</p>
            </div>

            <div className="flex-1">
              <div className="h-4 bg-foreground/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full animate-bar-width relative"
                  style={{ "--target-width": "75%" } as React.CSSProperties}
                >
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-[10px] font-mono font-medium opacity-0 animate-number">75%</span>
                </div>
              </div>
              <div className="flex justify-between mt-1.5">
                <span className="text-muted/60 text-xs">Oferta actual</span>
                <span className="text-primary-light text-xs font-medium">Demanda insatisfecha</span>
              </div>
            </div>

            <div className="sm:text-right">
              <p className="font-display text-2xl sm:text-3xl text-primary-light leading-none">
                $<AnimatedCounter target={5} suffix="M+" decimals={0} duration={1200} />
              </p>
              <p className="text-muted/70 text-xs mt-1">MXN · Segmento objetivo</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="w-10 h-[2px] bg-primary mx-auto mb-4" />
          <p className="font-display text-base sm:text-lg text-muted italic max-w-2xl mx-auto">
            &ldquo;{quotes.s03}&rdquo;
          </p>
        </div>
      </div>
    </Slide>
  );
}
