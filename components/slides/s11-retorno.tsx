"use client";

import { Slide } from "@/components/slide";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { CopperIcon } from "@/components/ui/copper-icon";
import { investment, security, quotes } from "@/lib/data";

const icons = ["home", "location", "check", "inventory"];

export function S11Retorno() {
  return (
    <Slide>
      <div className="stagger-in flex flex-col">
        {/* Header */}
        <div className="mb-5">
          <div className="w-[60px] h-[2px] bg-primary mb-3" />
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground">RETORNO Y RESPALDO</h2>
          <p className="mt-1 text-sm sm:text-base text-muted">Rendimiento claro · Inversión con piso firme</p>
        </div>

        {/* 3 retorno columns */}
        <div className="flex items-start justify-center mb-5">
          <div className="flex-1 text-center px-4 sm:px-6">
            <div className="text-gradient font-mono text-4xl sm:text-5xl md:text-6xl font-medium mb-1">
              <AnimatedCounter target={investment.annualReturn} suffix="%" duration={1500} />
            </div>
            <p className="text-muted text-xs sm:text-sm">Rendimiento anual</p>
          </div>

          <div className="border-l border-card-border self-stretch" />

          <div className="flex-1 text-center px-4 sm:px-6">
            <div className="text-foreground font-display text-4xl sm:text-5xl font-bold mb-1">
              Anual
            </div>
            <p className="text-muted text-xs sm:text-sm">Pago de rendimientos</p>
          </div>

          <div className="border-l border-card-border self-stretch" />

          <div className="flex-1 text-center px-4 sm:px-6">
            <div className="text-gradient font-mono text-4xl sm:text-5xl md:text-6xl font-medium mb-1">
              <AnimatedCounter target={investment.maxMonths} duration={1500} />
            </div>
            <p className="text-muted text-xs sm:text-sm">Meses máximo</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-card-border mb-5" />

        {/* Respaldo — 4 items in a row */}
        <p className="uppercase tracking-wider text-primary-light text-xs font-medium mb-4 text-center">
          Respaldo y Seguridad
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-5">
          {security.map((s, i) => (
            <div key={s.title} className="bg-card border border-card-border rounded-xl p-4">
              <CopperIcon name={icons[i]} size={20} className="mb-2" />
              <h3 className="text-foreground font-semibold text-xs sm:text-sm mb-1">{s.title}</h3>
              <p className="text-muted text-xs leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="border border-primary/30 rounded-lg py-3 px-6 text-center">
          <p className="text-muted italic text-xs sm:text-sm">&ldquo;{quotes.s11}&rdquo;</p>
        </div>
      </div>
    </Slide>
  );
}
