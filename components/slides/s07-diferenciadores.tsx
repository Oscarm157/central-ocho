import { Slide } from "@/components/slide";
import { CopperIcon } from "@/components/ui/copper-icon";

const items = [
  {
    icon: "roofing",
    title: "Roof privado",
    description: "El amenity más deseado. Espacio premium que diferencia del competidor.",
  },
  {
    icon: "design",
    title: "Diseño real, no genérico",
    description: "Arquitectura que el comprador presume, no que tolera.",
  },
  {
    icon: "shield",
    title: "Baja densidad",
    description: "Solo 8 vecinos. Privacidad garantizada. Plusvalía protegida.",
  },
  {
    icon: "chart",
    title: "Valor vs. precio",
    description: "Más metros y mejor diseño que la competencia al mismo precio.",
  },
];

export function S07Diferenciadores() {
  return (
    <Slide className="bg-charcoal">
      <div className="stagger-in">
        {/* Header */}
        <div className="mb-8">
          <span className="font-mono text-sm text-white/20 block mb-3">07</span>
          <div className="w-[60px] h-[2px] bg-primary mb-4" />
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-primary-light font-medium mb-2">
            Diferenciadores
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-white">
            ¿Por qué se vende fácil?
          </h2>
        </div>

        {/* 2x2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-8">
          {items.map((d) => (
            <div key={d.title} className="bg-white/5 border border-white/10 rounded-xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-0.5 hover:glow-copper-subtle">
              <CopperIcon name={d.icon} size={28} className="mb-3 text-primary-light" />
              <h3 className="text-white font-semibold text-base sm:text-lg mb-1.5">{d.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{d.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom summary bar */}
        <div className="bg-white/5 rounded-xl p-4 flex items-center justify-between">
          <div>
            <span className="text-white/40 text-xs block">Velocidad de venta esperada</span>
            <span className="text-white font-semibold text-sm">Alta absorción</span>
          </div>
          <div className="text-right">
            <span className="text-white/40 text-xs block">Diferenciación competitiva</span>
            <span className="text-gradient font-semibold text-sm">4 pilares sólidos</span>
          </div>
        </div>
      </div>
    </Slide>
  );
}
