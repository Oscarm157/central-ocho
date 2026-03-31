import { Slide } from "@/components/slide";
import { SectionHeader } from "@/components/ui/section-header";
import { FeatureCard } from "@/components/ui/feature-card";
import { QuoteBlock } from "@/components/ui/quote-block";
import { security, quotes } from "@/lib/data";

const icons = ["real_estate_agent", "pin_drop", "verified", "inventory_2"];

export function S12Respaldo() {
  return (
    <Slide>
      <div className="stagger-in">
        <SectionHeader number="12" title="RESPALDO Y SEGURIDAD" subtitle="Inversión con piso firme" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-8">
          {security.map((s, i) => (
            <FeatureCard
              key={s.title}
              icon={icons[i]}
              title={s.title}
              description={s.description}
              borderAccent
            />
          ))}
        </div>

        <div className="text-center bg-card/60 rounded-xl py-4 px-6 mb-6">
          <p className="text-muted text-sm">
            <span className="text-primary font-medium">4 pilares de seguridad</span>
          </p>
        </div>

        <QuoteBlock text={quotes.s12} />
      </div>
    </Slide>
  );
}
