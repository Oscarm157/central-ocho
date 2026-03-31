"use client";

import { Slide } from "@/components/slide";
import { SectionHeader } from "@/components/ui/section-header";
import { StatCard } from "@/components/ui/stat-card";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { QuoteBlock } from "@/components/ui/quote-block";
import { pricing, project, quotes } from "@/lib/data";

export function S09Proyeccion() {
  return (
    <Slide>
      <div className="stagger-in">
        <SectionHeader number="09" title="PROYECCIÓN DE INGRESOS" />

        {/* Hero stat */}
        <div className="text-center mb-8">
          <div className="font-mono text-6xl sm:text-7xl md:text-8xl text-primary font-medium">
            <AnimatedCounter target={pricing.totalRevenue} prefix="$" suffix="M" decimals={1} duration={2000} />
          </div>
          <p className="text-muted text-lg mt-2">MXN en ingreso proyectado</p>
        </div>

        {/* Sub stats */}
        <div className="grid grid-cols-3 gap-3 sm:gap-5 mb-8">
          <StatCard value={project.units} label="Unidades totales" />
          <StatCard value={pricing.averagePrice} prefix="$" suffix="M" label="Precio prom. por unidad" decimals={1} />
          <StatCard value={650} prefix="$" suffix="K" label="Plusvalía por unidad (13%)" />
        </div>

        <QuoteBlock text={quotes.s09} />
      </div>
    </Slide>
  );
}
