"use client";

import { Slide } from "@/components/slide";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { QuoteBlock } from "@/components/ui/quote-block";
import { investment, quotes } from "@/lib/data";

export function S11Retorno() {
  return (
    <Slide className="bg-charcoal">
      <div className="stagger-in">
        <div className="mb-8 sm:mb-10">
          <span className="font-mono text-sm text-white/20 block mb-3">11</span>
          <div className="w-[60px] h-[2px] bg-primary mb-4" />
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white">PROPUESTA DE RETORNO</h2>
          <p className="mt-2 text-lg sm:text-xl text-white/50 font-medium">Rendimiento claro y estructurado</p>
        </div>

        {/* Two big stats */}
        <div className="grid grid-cols-2 gap-4 sm:gap-8 mb-8">
          <div className="text-center py-8 sm:py-12">
            <div className="font-mono text-6xl sm:text-7xl md:text-8xl text-primary-light font-medium">
              <AnimatedCounter target={investment.annualReturn} suffix="%" duration={1500} />
            </div>
            <p className="text-white/50 text-base sm:text-lg mt-3">Rendimiento anual</p>
          </div>
          <div className="text-center py-8 sm:py-12">
            <div className="font-mono text-6xl sm:text-7xl md:text-8xl text-primary-light font-medium">
              <AnimatedCounter target={investment.maxMonths} duration={1500} />
            </div>
            <p className="text-white/50 text-base sm:text-lg mt-3">Meses máximo · Pago de rendimientos</p>
          </div>
        </div>

        <blockquote className="border-l-[3px] border-primary bg-white/5 px-6 py-4 rounded-r-lg">
          <p className="font-display text-base sm:text-lg text-white/70 italic">&ldquo;{quotes.s11}&rdquo;</p>
        </blockquote>
      </div>
    </Slide>
  );
}
