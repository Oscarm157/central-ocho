import { Slide } from "@/components/slide";
import { SectionHeader } from "@/components/ui/section-header";
import { QuoteBlock } from "@/components/ui/quote-block";
import { quotes } from "@/lib/data";

const concepts = [
  {
    title: "8 Unidades",
    description: "Inventario limitado por decisión, no por restricción. Cada unidad es parte de una colección exclusiva.",
  },
  {
    title: "Diseño contemporáneo",
    description: "Arquitectura que compite con desarrollos de mayor precio. Diseño intencional, no genérico.",
  },
  {
    title: "Perfil definido",
    description: "Producto diseñado para un segmento específico. Cada detalle responde a un comprador real.",
  },
];

export function S02Concepto() {
  return (
    <Slide>
      <div className="stagger-in">
        <SectionHeader number="02" title="EL CONCEPTO" subtitle="Exclusividad por diseño" />

        <div className="relative">
          {/* Decorative 8 */}
          <div className="absolute -right-4 sm:right-0 top-1/2 -translate-y-1/2 font-display text-[200px] sm:text-[280px] text-primary/[0.07] leading-none select-none pointer-events-none hidden md:block">
            8
          </div>

          {/* Grid of 3 concepts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 relative z-10">
            {concepts.map((c) => (
              <div key={c.title} className="bg-card/50 rounded-xl p-5 sm:p-6">
                <h3 className="font-semibold text-foreground text-base sm:text-lg mb-2">{c.title}</h3>
                <p className="text-muted text-sm sm:text-base leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </div>

        <QuoteBlock text={quotes.s02} />
      </div>
    </Slide>
  );
}
