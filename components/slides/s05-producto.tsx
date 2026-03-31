import Image from "next/image";
import { Slide } from "@/components/slide";
import { QuoteBlock } from "@/components/ui/quote-block";
import { product, quotes } from "@/lib/data";

const statBars = [
  { label: "Superficie habitable", value: `${product.surfaceHabitable} m²` },
  { label: "Garage", value: `${product.garage} m²` },
  { label: "Roof privado", value: `${product.roof} m²` },
  { label: "Niveles", value: product.levels },
];

export function S05Producto() {
  return (
    <Slide>
      <div className="stagger-in">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <span className="font-mono text-sm text-foreground/20 block mb-2">05</span>
          <div className="w-[60px] h-[2px] bg-primary mb-3" />
          <p className="text-xs uppercase tracking-[0.25em] text-primary-light font-medium mb-1">
            El Producto
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground">
            Townhouse de 3 niveles + roof privado
          </h2>
        </div>

        {/* Two-column layout: 40% stats / 60% image */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 mb-8">
          {/* Left column — stat bars */}
          <div className="lg:col-span-2 flex flex-col justify-center space-y-3">
            {statBars.map((bar) => (
              <div
                key={bar.label}
                className="flex items-center justify-between bg-charcoal rounded-lg px-5 py-3.5"
              >
                <span className="text-white/70 text-sm font-sans">{bar.label}</span>
                <span className="font-mono text-primary-light text-base sm:text-lg font-medium">
                  {bar.value}
                </span>
              </div>
            ))}
          </div>

          {/* Right column — render image */}
          <div className="lg:col-span-3">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-card">
              <Image
                src="/images/planta-social.png"
                alt="Área social — render interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
                quality={85}
              />
            </div>
          </div>
        </div>

        {/* Distribution section */}
        <div className="mb-6">
          <h4 className="font-display text-lg text-foreground mb-3">Distribución inteligente</h4>
          <div className="space-y-1.5">
            {product.distribution.map((d) => (
              <p key={d.level} className="text-sm sm:text-base text-muted">
                <span className="font-semibold text-foreground">{d.level}:</span>{" "}
                {d.description}
              </p>
            ))}
          </div>
        </div>

        <QuoteBlock text={quotes.s05} />
      </div>
    </Slide>
  );
}
