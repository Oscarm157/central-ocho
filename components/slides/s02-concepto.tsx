import { Slide } from "@/components/slide";
import { CopperIcon } from "@/components/ui/copper-icon";
import { quotes } from "@/lib/data";

export function S02Concepto() {
  return (
    <Slide className="bg-card">
      <div className="stagger-in">
        {/* Section label */}
        <div className="mb-6">
          <span className="font-mono text-sm text-foreground/20 block mb-2">02</span>
          <div className="w-[60px] h-[2px] bg-primary mb-3" />
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-primary font-medium mb-2">
            El Concepto
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground">
            Exclusividad por diseño
          </h2>
        </div>

        {/* 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-8">
          {/* Column 1: The 8 */}
          <div className="bg-background/70 border border-card-border rounded-xl p-6 sm:p-7">
            <span className="font-display text-5xl sm:text-6xl text-primary leading-none block mb-2 animate-number">
              8
            </span>
            <h3 className="text-foreground font-semibold text-base sm:text-lg mb-2">Unidades</h3>
            <p className="text-muted text-sm leading-relaxed">
              Inventario limitado por decisión, no por restricción. Cada unidad es parte de una colección exclusiva.
            </p>
          </div>

          {/* Column 2: Design */}
          <div className="bg-background/70 border border-card-border rounded-xl p-6 sm:p-7">
            <div className="mb-3">
              <CopperIcon name="design" size={32} />
            </div>
            <h3 className="text-foreground font-semibold text-base sm:text-lg mb-2">Diseño contemporáneo</h3>
            <p className="text-muted text-sm leading-relaxed">
              Arquitectura que compite con desarrollos de mayor precio. Diseño intencional, no genérico.
            </p>
          </div>

          {/* Column 3: Profile */}
          <div className="bg-background/70 border border-card-border rounded-xl p-6 sm:p-7">
            <div className="mb-3">
              <CopperIcon name="profile" size={32} />
            </div>
            <h3 className="text-foreground font-semibold text-base sm:text-lg mb-2">Perfil definido</h3>
            <p className="text-muted text-sm leading-relaxed">
              Producto diseñado para un segmento específico. Cada detalle responde a un comprador real.
            </p>
          </div>
        </div>

        {/* Quote */}
        <div className="text-center pt-2">
          <div className="w-10 h-[2px] bg-primary mx-auto mb-4" />
          <p className="font-display text-base sm:text-lg text-muted italic max-w-2xl mx-auto">
            &ldquo;{quotes.s02}&rdquo;
          </p>
        </div>
      </div>
    </Slide>
  );
}
