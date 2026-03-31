"use client";

import { Slide } from "@/components/slide";
import { SectionHeader } from "@/components/ui/section-header";
import { CopperIcon } from "@/components/ui/copper-icon";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { quotes } from "@/lib/data";

const phases = [
  { fase: "Fase 1", price: 4.95, label: "Preventa (inicio)", status: "Captura early adopters", bg: "bg-card", text: "text-foreground" },
  { fase: "Fase 2", price: 5.2, label: "Venta en obra", status: "Incremento progresivo", bg: "bg-sand", text: "text-foreground" },
  { fase: "Fase 3", price: 5.6, label: "Entrega terminada", status: "Valor real del mercado", bg: "bg-charcoal", text: "text-white" },
];

export function S08Estrategia() {
  return (
    <Slide>
      <div className="stagger-in">
        <SectionHeader number="08" title="ESTRATEGIA COMERCIAL" subtitle="Escalonamiento inteligente de precio" />

        {/* 3 escalation cards */}
        <div className="flex items-stretch justify-center gap-2 sm:gap-4 mb-6">
          {phases.map((p, i) => (
            <div key={p.fase} className="flex items-center">
              {/* Card */}
              <div className={`${p.bg} rounded-xl p-4 sm:p-6 text-center flex-1 min-w-[100px] sm:min-w-[140px]`}>
                <p className={`text-xs uppercase tracking-wider ${p.bg === "bg-charcoal" ? "text-white/40" : "text-muted"} mb-2`}>
                  {p.fase}
                </p>
                <div className={`font-mono text-2xl sm:text-3xl md:text-4xl font-medium mb-1 ${p.bg === "bg-charcoal" ? "text-primary-light" : "text-primary"}`}>
                  <AnimatedCounter target={p.price} prefix="$" suffix="M" decimals={2} duration={1200} />
                </div>
                <p className={`text-sm font-medium ${p.text} mb-2`}>{p.label}</p>
                <p className={`text-xs ${p.bg === "bg-charcoal" ? "text-white/40" : "text-muted"}`}>{p.status}</p>
              </div>

              {/* Arrow */}
              {i < phases.length - 1 && (
                <span className="text-primary/40 text-xl sm:text-2xl font-light mx-1 sm:mx-2 shrink-0">&rarr;</span>
              )}
            </div>
          ))}
        </div>

        {/* Highlight banner */}
        <div className="bg-charcoal rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <CopperIcon name="trending" size={24} className="text-primary-light shrink-0" />
            <div>
              <p className="text-white/50 text-xs">Plusvalía capturada por unidad</p>
              <span className="text-primary-light font-mono text-2xl sm:text-3xl font-medium">
                <AnimatedCounter target={650000} prefix="$" suffix="" duration={1500} />
                <span className="text-lg"> MXN</span>
              </span>
            </div>
          </div>
          <div className="sm:text-right">
            <p className="text-white/50 text-xs">De preventa a entrega</p>
            <span className="text-gradient font-mono text-xl sm:text-2xl font-medium">13.1% incremento</span>
          </div>
        </div>

        {/* Quote */}
        <div className="text-center">
          <div className="w-10 h-[2px] bg-primary mx-auto mb-4" />
          <p className="font-display text-base sm:text-lg text-muted italic max-w-2xl mx-auto">
            &ldquo;{quotes.s08}&rdquo;
          </p>
        </div>
      </div>
    </Slide>
  );
}
