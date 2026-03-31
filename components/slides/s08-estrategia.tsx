"use client";

import { Slide } from "@/components/slide";
import { SectionHeader } from "@/components/ui/section-header";
import { CopperIcon } from "@/components/ui/copper-icon";
import { QuoteBlock } from "@/components/ui/quote-block";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { quotes } from "@/lib/data";

const phases = [
  {
    fase: "Fase 1",
    price: 4.95,
    label: "Preventa (inicio)",
    status: "Captura early adopters",
    bg: "bg-card",
    text: "text-foreground",
    priceColor: "text-primary",
  },
  {
    fase: "Fase 2",
    price: 5.2,
    label: "Venta en obra",
    status: "Incremento progresivo",
    bg: "bg-sand",
    text: "text-foreground",
    priceColor: "text-primary",
  },
  {
    fase: "Fase 3",
    price: 5.6,
    label: "Entrega terminada",
    status: "Valor real del mercado",
    bg: "bg-accent",
    text: "text-foreground",
    priceColor: "text-primary",
  },
];

export function S08Estrategia() {
  return (
    <Slide>
      <div className="stagger-in">
        <SectionHeader
          number="08"
          title="ESTRATEGIA COMERCIAL"
          subtitle="Escalonamiento inteligente de precio"
        />

        {/* 3 phase cards — staggered */}
        <div className="flex flex-col sm:flex-row items-stretch justify-center gap-2 sm:gap-0 mb-6">
          {phases.map((p, i) => (
            <div key={p.fase} className="flex items-center sm:flex-1">
              <div
                className={`${p.bg} ${p.text} rounded-xl p-5 sm:p-6 text-center w-full flex flex-col justify-between`}
                style={{ opacity: 0, animation: `staggerChild 0.5s cubic-bezier(0.16,1,0.3,1) ${0.3 + i * 0.18}s forwards` }}
              >
                <p className="text-xs uppercase tracking-wider mb-2 text-muted">{p.fase}</p>
                <div className={`font-mono text-3xl sm:text-4xl font-medium mb-1 ${p.priceColor}`}>
                  <AnimatedCounter target={p.price} prefix="$" suffix="M" decimals={2} duration={1200} />
                </div>
                <p className="text-sm font-medium mb-2">{p.label}</p>
                <p className="text-xs text-muted">{p.status}</p>
              </div>

              {i < phases.length - 1 && (
                <span
                  className="text-primary text-2xl sm:text-3xl font-light mx-2 sm:mx-3 shrink-0 hidden sm:block"
                  style={{ opacity: 0, animation: `staggerChild 0.5s cubic-bezier(0.16,1,0.3,1) ${0.3 + i * 0.18 + 0.09}s forwards` }}
                >
                  &rarr;
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Highlight banner */}
        <div className="bg-card rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <CopperIcon name="trending" size={28} className="text-primary-light shrink-0" />
            <div>
              <p className="text-muted/70 text-xs mb-0.5">Plusvalía capturada por unidad</p>
              <span className="text-primary-light font-mono text-2xl sm:text-3xl font-medium">
                <AnimatedCounter target={650000} prefix="$" suffix="" duration={1500} />
                <span className="text-lg text-muted ml-1">MXN</span>
              </span>
            </div>
          </div>
          <div className="sm:text-right sm:border-l sm:border-card-border sm:pl-5">
            <p className="text-muted/70 text-xs mb-0.5">De preventa a entrega</p>
            <span className="text-gradient font-mono text-xl sm:text-2xl font-medium">
              13.1% incremento
            </span>
          </div>
        </div>

        <QuoteBlock text={quotes.s08} />
      </div>
    </Slide>
  );
}
