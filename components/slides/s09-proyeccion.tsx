"use client";

import { Slide } from "@/components/slide";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { pricing, project, quotes } from "@/lib/data";

export function S09Proyeccion() {
  return (
    <Slide>
      <div className="stagger-in flex flex-col items-center justify-center text-center h-full">
        {/* Label */}
        <p className="uppercase tracking-wider text-primary-light text-xs sm:text-sm font-medium mb-6">
          Proyección de Ingresos
        </p>

        {/* Giant number */}
        <div className="text-gradient font-mono text-5xl sm:text-6xl md:text-7xl font-medium mb-2">
          <AnimatedCounter target={pricing.totalRevenue} prefix="$" suffix="M" decimals={1} duration={2000} />
        </div>
        <p className="text-muted text-base sm:text-lg mb-8">MXN en ingreso proyectado</p>

        {/* 3 sub-stats with vertical dividers */}
        <div className="flex items-start justify-center divide-x divide-card-border w-full max-w-2xl mb-8">
          <div className="flex-1 px-4 sm:px-6">
            <span className="font-mono text-3xl text-foreground font-medium">{project.units}</span>
            <p className="text-muted text-sm mt-1">Unidades totales</p>
          </div>
          <div className="flex-1 px-4 sm:px-6">
            <span className="font-mono text-3xl text-foreground font-medium">${pricing.averagePrice}M</span>
            <p className="text-muted text-sm mt-1">Precio promedio estimado</p>
          </div>
          <div className="flex-1 px-4 sm:px-6">
            <span className="font-mono text-3xl text-foreground font-medium">~${pricing.totalRevenue}M</span>
            <p className="text-muted text-sm mt-1">Ingreso total proyectado</p>
          </div>
        </div>

        {/* Quote in dark banner */}
        <div className="bg-charcoal rounded-xl py-4 px-6 text-center w-full max-w-2xl">
          <p className="text-white/70 text-sm sm:text-base italic">&ldquo;{quotes.s09}&rdquo;</p>
        </div>
      </div>
    </Slide>
  );
}
