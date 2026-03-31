"use client";

import { Slide } from "@/components/slide";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { CopperIcon } from "@/components/ui/copper-icon";
import { pricing, project, execution, quotes } from "@/lib/data";

const stepIcons = ["shield", "chart", "trending"];
const stepBadges = ["Riesgo mitigado", "Flujo continuo", "Retorno acelerado"];

export function S09Proyeccion() {
  return (
    <Slide>
      <div className="stagger-in flex flex-col items-center text-center">
        {/* Label */}
        <p className="uppercase tracking-wider text-primary-light text-xs sm:text-sm font-medium mb-3">
          Proyección de Ingresos
        </p>

        {/* Giant number */}
        <div className="text-gradient font-mono text-5xl sm:text-6xl md:text-7xl font-medium mb-1">
          <AnimatedCounter target={pricing.totalRevenue} prefix="$" suffix="M" decimals={1} duration={2000} />
        </div>
        <p className="text-muted text-base sm:text-lg mb-5">MXN en ingreso proyectado</p>

        {/* 3 sub-stats */}
        <div className="flex items-start justify-center divide-x divide-card-border w-full max-w-2xl mb-6">
          <div className="flex-1 px-4 sm:px-6">
            <span className="font-mono text-2xl sm:text-3xl text-foreground font-medium">{project.units}</span>
            <p className="text-muted text-xs sm:text-sm mt-1">Unidades totales</p>
          </div>
          <div className="flex-1 px-4 sm:px-6">
            <span className="font-mono text-2xl sm:text-3xl text-foreground font-medium">${pricing.averagePrice}M</span>
            <p className="text-muted text-xs sm:text-sm mt-1">Precio promedio</p>
          </div>
          <div className="flex-1 px-4 sm:px-6">
            <span className="font-mono text-2xl sm:text-3xl text-foreground font-medium">~${pricing.totalRevenue}M</span>
            <p className="text-muted text-xs sm:text-sm mt-1">Ingreso total</p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full max-w-2xl border-t border-card-border mb-6" />

        {/* Modelo de ejecución — 3 steps */}
        <p className="uppercase tracking-wider text-primary-light text-xs font-medium mb-4">
          Modelo de Ejecución
        </p>
        <div className="flex items-start justify-center gap-2 sm:gap-4 w-full max-w-3xl">
          {execution.map((step, i) => (
            <div key={step.number} className="flex items-start">
              <div className="flex flex-col items-center text-center max-w-[160px] sm:max-w-[200px]">
                <div className="w-10 h-10 bg-primary/15 border border-primary/30 rounded-lg flex items-center justify-center mb-2">
                  <span className="font-mono text-sm text-primary">{step.number}</span>
                </div>
                <h3 className="font-semibold text-foreground text-xs sm:text-sm mb-1">{step.title}</h3>
                <p className="text-muted text-xs leading-relaxed mb-2">{step.description}</p>
                <div className="flex items-center gap-1">
                  <CopperIcon name={stepIcons[i]} size={12} className="text-primary/60" />
                  <span className="text-muted text-xs">{stepBadges[i]}</span>
                </div>
              </div>
              {i < execution.length - 1 && (
                <span className="text-primary/40 text-xl font-light mt-2 mx-1 sm:mx-2 shrink-0">&rarr;</span>
              )}
            </div>
          ))}
        </div>

        {/* Quote */}
        <p className="text-muted italic text-xs sm:text-sm mt-5 max-w-xl">&ldquo;{quotes.s09}&rdquo;</p>
      </div>
    </Slide>
  );
}
