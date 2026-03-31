import Image from "next/image";
import { Slide } from "@/components/slide";
import { product, quotes } from "@/lib/data";

const stats = [
  { label: "Superficie habitable", value: "130 m²" },
  { label: "Garage", value: "57 m²" },
  { label: "Roof privado", value: "50 m²" },
  { label: "Niveles", value: "3 + roof" },
];

export function S05Producto() {
  return (
    <Slide>
      <div className="stagger-in">
        {/* Header */}
        <div className="mb-6">
          <span className="font-mono text-sm text-foreground/20 block mb-3">05</span>
          <div className="w-[60px] h-[2px] bg-primary mb-4" />
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-primary-light font-medium mb-2">
            El Producto
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground">
            Townhouse de 3 niveles + roof privado
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 mb-6">
          {/* Left: Stats bars */}
          <div className="lg:col-span-2 space-y-3">
            {stats.map((s) => (
              <div key={s.label} className="bg-charcoal rounded-lg px-5 py-3.5 flex items-center justify-between">
                <span className="text-white/70 text-sm">{s.label}</span>
                <span className="text-primary-light font-mono text-base sm:text-lg font-medium">{s.value}</span>
              </div>
            ))}
          </div>

          {/* Right: Render image */}
          <div className="lg:col-span-3 relative rounded-xl overflow-hidden bg-card">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/planta-social.png"
                alt="Área social — Central Ocho"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
                quality={85}
              />
            </div>
          </div>
        </div>

        {/* Distribution compact */}
        <div className="mb-6">
          <h3 className="font-semibold text-foreground text-sm mb-3 uppercase tracking-wider">Distribución inteligente</h3>
          <div className="space-y-1.5 text-sm">
            {product.distribution.map((d) => (
              <p key={d.level} className="text-muted">
                <span className="text-foreground font-medium">{d.level}:</span> {d.description}
              </p>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="text-center">
          <div className="w-10 h-[2px] bg-primary mx-auto mb-4" />
          <p className="font-display text-base sm:text-lg text-muted italic max-w-2xl mx-auto">
            &ldquo;{quotes.s05}&rdquo;
          </p>
        </div>
      </div>
    </Slide>
  );
}
