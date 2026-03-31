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
    <Slide className="bg-card">
      <div className="stagger-in">
        {/* Header */}
        <div className="mb-6">
          <span className="font-mono text-sm text-foreground/20 block mb-2">07</span>
          <div className="w-[60px] h-[2px] bg-primary mb-3" />
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-primary font-medium mb-2">
            Diferenciadores
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground">
            ¿Por qué se vende fácil?
          </h2>
        </div>

        {/* 2x2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-6">
          {items.map((d) => (
            <div key={d.title} className="bg-background/70 border border-card-border rounded-xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
              <CopperIcon name={d.icon} size={26} className="mb-3" />
              <h3 className="text-foreground font-semibold text-base sm:text-lg mb-1.5">{d.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{d.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom summary bar */}
        <div className="bg-background/70 border border-card-border rounded-xl p-4 flex items-center justify-between">
          <div>
            <span className="text-muted text-xs block">Velocidad de venta esperada</span>
            <span className="text-foreground font-semibold text-sm">Alta absorción</span>
          </div>
          <div className="text-right">
            <span className="text-muted text-xs block">Diferenciación competitiva</span>
            <span className="text-gradient font-semibold text-sm">4 pilares sólidos</span>
          </div>
        </div>
      </div>
    </Slide>
  );
}
