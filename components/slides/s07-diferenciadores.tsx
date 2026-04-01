import { Slide } from "@/components/slide";
import { CopperIcon } from "@/components/ui/copper-icon";

const items = [
  {
    icon: "connect",
    title: "Acceso estratégico",
    description: "A metros de la vía rápida. Conectividad inmediata con toda la ciudad: Zona Río, Garita, Centro, Aeropuerto — todo a menos de 15 minutos.",
  },
  {
    icon: "inventory",
    title: "Escasez de casas",
    description: "La zona de Buena Vista está dominada por departamentos. Una casa nueva representa una ventaja competitiva real en un mercado sin oferta comparable.",
  },
  {
    icon: "shield",
    title: "Privacidad garantizada",
    description: "Solo 8 unidades. Sin áreas comunes compartidas, sin alta densidad. Un formato residencial pensado para quienes valoran su espacio.",
  },
  {
    icon: "chart",
    title: "Zona en crecimiento",
    description: "Buena Vista se ha consolidado como alternativa sólida a Zona Dorada. Plusvalía comprobada, infraestructura madura y demanda sostenida.",
  },
];

export function S07Diferenciadores() {
  return (
    <Slide className="bg-card">
      <div className="stagger-in">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <span className="font-mono text-sm text-foreground/20 block mb-2">07</span>
          <div className="w-[60px] h-[2px] bg-primary mb-3" />
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-medium mb-1">
            Diferenciadores
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground">
            Ventajas competitivas
          </h2>
        </div>

        {/* 2x2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-6">
          {items.map((d) => (
            <div
              key={d.title}
              className="bg-background/70 border border-card-border rounded-xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
            >
              <CopperIcon name={d.icon} size={26} className="mb-3" />
              <h3 className="text-foreground font-bold text-base sm:text-lg mb-1.5">{d.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{d.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom bar — ventajas adicionales */}
        <div className="bg-background/70 border border-card-border rounded-xl px-5 py-3.5 flex items-center justify-center gap-2 flex-wrap">
          {["Roof privado", "Diseño contemporáneo", "Garage integrado", "Acabados premium"].map((v, i, arr) => (
            <span key={v} className="flex items-center gap-2">
              <span className="text-foreground/70 text-xs sm:text-sm">{v}</span>
              {i < arr.length - 1 && <span className="text-primary/40 text-xs">·</span>}
            </span>
          ))}
        </div>
      </div>
    </Slide>
  );
}
