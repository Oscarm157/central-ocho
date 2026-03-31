"use client";

import { Slide } from "@/components/slide";
import { SectionHeader } from "@/components/ui/section-header";
import { QuoteBlock } from "@/components/ui/quote-block";
import { PriceEscalation } from "@/components/charts/price-escalation";
import { pricing, quotes } from "@/lib/data";

export function S08Estrategia() {
  return (
    <Slide>
      <div className="stagger-in">
        <SectionHeader number="08" title="ESTRATEGIA COMERCIAL" subtitle="Escalonamiento inteligente de precio" />

        {/* Chart */}
        <div className="bg-card/40 rounded-xl p-4 sm:p-6 mb-6">
          <PriceEscalation />
          <div className="flex justify-between text-xs text-muted mt-2 px-2">
            {pricing.phases.map((p) => (
              <span key={p.fase}>{p.status}</span>
            ))}
          </div>
        </div>

        {/* Highlight stat */}
        <div className="bg-charcoal rounded-xl p-5 sm:p-6 mb-6 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-3xl sm:text-4xl text-primary-light font-medium">+$650K</span>
            <span className="font-mono text-xl sm:text-2xl text-white/60">MXN</span>
          </div>
          <div className="sm:border-l sm:border-white/10 sm:pl-4">
            <p className="text-white font-medium">{pricing.appreciationPercent}% incremento</p>
            <p className="text-white/50 text-sm">Plusvalía capturada por unidad (de preventa a entrega)</p>
          </div>
        </div>

        <QuoteBlock text={quotes.s08} />
      </div>
    </Slide>
  );
}
