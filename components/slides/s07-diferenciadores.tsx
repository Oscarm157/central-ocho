import { Slide } from "@/components/slide";
import { SectionHeader } from "@/components/ui/section-header";
import { FeatureCard } from "@/components/ui/feature-card";
import { differentiators } from "@/lib/data";

export function S07Diferenciadores() {
  return (
    <Slide>
      <div className="stagger-in">
        <SectionHeader number="07" title="DIFERENCIADORES" subtitle="¿Por qué se vende fácil?" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-8">
          {differentiators.map((d) => (
            <FeatureCard key={d.title} icon={d.icon} title={d.title} description={d.description} />
          ))}
        </div>

        <div className="text-center bg-card/60 rounded-xl py-4 px-6">
          <p className="text-muted text-sm">
            Alta absorción esperada · <span className="text-primary font-medium">4 pilares sólidos de diferenciación</span>
          </p>
        </div>
      </div>
    </Slide>
  );
}
