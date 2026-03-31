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
            <div className="text-foreground font-display text-4xl sm:text-5xl font-bold mb-1">Anual</div>
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

        <div className="border-t border-card-border mb-5" />

        {/* Respaldo — 4 compact items in a row */}
        <p className="uppercase tracking-wider text-primary-light text-xs font-medium mb-4 text-center">
          Respaldo y Seguridad
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
          {security.map((s, i) => (
            <div
              key={s.title}
              className="bg-card border border-card-border rounded-xl p-4 flex flex-col items-center text-center gap-2 transition-all duration-300 hover:border-primary/25 hover:-translate-y-0.5"
            >
              <CopperIcon name={icons[i]} size={22} />
              <h3 className="text-foreground font-semibold text-xs sm:text-sm leading-tight">{s.title}</h3>
            </div>
          ))}
        </div>

        <div className="border border-primary/30 rounded-lg py-3 px-6 text-center">
          <p className="text-muted italic text-xs sm:text-sm">&ldquo;{quotes.s11}&rdquo;</p>
        </div>
      </div>
    </Slide>
  );
}
