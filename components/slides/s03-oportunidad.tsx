import { Slide } from "@/components/slide";
import { SectionHeader } from "@/components/ui/section-header";
import { QuoteBlock } from "@/components/ui/quote-block";
import { quotes } from "@/lib/data";

const opportunities = [
  {
    title: "Zona consolidada",
    description: "Buena Vista es zona consolidada con demanda constante y plusvalía comprobada.",
  },
  {
    title: "Escasez real",
    description: "No hay producto tipo townhouse en este corredor. La oferta: depto genérico o casa usada.",
  },
  {
    title: "Comprador existente",
    description: "El comprador de $5M+ existe, pero no encuentra producto nuevo que le haga sentido.",
  },
];

export function S03Oportunidad() {
  return (
    <Slide className="bg-card/40">
      <div className="stagger-in">
        <SectionHeader number="03" title="LA OPORTUNIDAD" subtitle="La brecha que nadie está cubriendo" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
          {opportunities.map((o) => (
            <div key={o.title} className="bg-background/60 rounded-xl p-5 sm:p-6">
              <h3 className="font-semibold text-foreground text-base sm:text-lg mb-2">{o.title}</h3>
              <p className="text-muted text-sm sm:text-base leading-relaxed">{o.description}</p>
            </div>
          ))}
        </div>

        {/* Highlighted block */}
        <div className="bg-charcoal rounded-xl p-6 sm:p-8 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
            <div>
              <p className="text-white/60 text-sm uppercase tracking-wider mb-1">Brecha identificada</p>
              <p className="text-white font-semibold text-lg">Segmento: $5M+ MXN</p>
            </div>
            <div className="flex-1">
              <p className="text-white/50 text-xs mb-2">Demanda vs Oferta</p>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full" style={{ width: "78%" }} />
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-white/40 text-xs">Oferta actual</span>
                <span className="text-primary-light text-xs font-medium">Demanda insatisfecha</span>
              </div>
            </div>
          </div>
        </div>

        <QuoteBlock text={quotes.s03} />
      </div>
    </Slide>
  );
}
