import { Slide } from "@/components/slide";
import { CopperIcon } from "@/components/ui/copper-icon";
import { security, quotes } from "@/lib/data";

const icons = ["home", "location", "check", "inventory"];

export function S12Respaldo() {
  return (
    <Slide className="bg-card">
      <div className="stagger-in">
        {/* Header */}
        <div className="mb-6">
          <span className="font-mono text-sm text-foreground/20 block mb-2">12</span>
          <div className="w-[60px] h-[2px] bg-primary mb-3" />
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground">RESPALDO Y SEGURIDAD</h2>
          <p className="mt-1.5 text-base sm:text-lg text-muted font-medium">Inversión con piso firme</p>
        </div>

        {/* 2x2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-6">
          {security.map((s, i) => (
            <div key={s.title} className="bg-background/70 border border-card-border rounded-xl p-5 sm:p-6">
              <CopperIcon name={icons[i]} size={26} className="mb-3" />
              <h3 className="text-foreground font-semibold text-base sm:text-lg mb-1.5">{s.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="bg-background/70 border border-card-border rounded-xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CopperIcon name="check" size={20} />
            <span className="text-muted text-sm">{quotes.s12}</span>
          </div>
          <div className="text-right shrink-0 ml-4">
            <span className="text-muted text-xs block">Seguridad</span>
            <span className="text-gradient font-semibold text-sm">4 pilares</span>
          </div>
        </div>
      </div>
    </Slide>
  );
}
