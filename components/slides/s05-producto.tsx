import { Slide } from "@/components/slide";
import { SectionHeader } from "@/components/ui/section-header";
import { StatCard } from "@/components/ui/stat-card";
import { QuoteBlock } from "@/components/ui/quote-block";
import { product, quotes } from "@/lib/data";

export function S05Producto() {
  return (
    <Slide>
      <div className="stagger-in">
        <SectionHeader number="05" title="EL PRODUCTO" subtitle="Townhouse de 3 niveles + roof privado" />

        {/* Stat cards */}
        <div className="grid grid-cols-3 gap-3 sm:gap-5 mb-8">
          <StatCard value={product.surfaceHabitable} suffix=" m²" label="Superficie habitable" dark />
          <StatCard value={product.garage} suffix=" m²" label="Garage" dark />
          <StatCard value={product.roof} suffix=" m²" label="Roof privado" dark />
        </div>

        {/* Levels highlight */}
        <div className="text-center mb-8">
          <span className="font-mono text-5xl sm:text-6xl text-primary font-medium animate-number">{product.levels}</span>
          <p className="text-muted text-sm mt-1">Niveles</p>
        </div>

        {/* Distribution */}
        <div className="space-y-3 mb-8">
          {product.distribution.map((d) => (
            <div key={d.level} className="flex gap-4 items-start bg-card/50 rounded-lg p-4">
              <span className="material-symbols-outlined text-primary mt-0.5" style={{ fontSize: 20 }}>
                {d.level === "Planta baja" ? "garage" : d.level === "Roof" ? "deck" : "bed"}
              </span>
              <div>
                <h3 className="font-semibold text-foreground text-sm sm:text-base">{d.level}</h3>
                <p className="text-muted text-sm">{d.description}</p>
              </div>
            </div>
          ))}
        </div>

        <QuoteBlock text={quotes.s05} />
      </div>
    </Slide>
  );
}
