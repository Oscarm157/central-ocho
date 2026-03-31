import { Slide } from "@/components/slide";
import { SectionHeader } from "@/components/ui/section-header";
import { QuoteBlock } from "@/components/ui/quote-block";
import { execution, quotes } from "@/lib/data";

export function S10Modelo() {
  return (
    <Slide>
      <div className="stagger-in">
        <SectionHeader number="10" title="MODELO DE EJECUCIÓN" subtitle="Capital optimizado, riesgo controlado" />

        {/* Timeline */}
        <div className="relative mb-8">
          {/* Connecting line — desktop */}
          <div className="hidden md:block absolute top-10 left-[16.6%] right-[16.6%] h-[2px] bg-card-border" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {execution.map((step) => (
              <div key={step.number} className="relative text-center md:text-center">
                {/* Number circle */}
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-card border-2 border-primary/30 mb-4 relative z-10">
                  <span className="font-mono text-2xl sm:text-3xl text-primary font-medium">{step.number}</span>
                </div>

                <h3 className="font-semibold text-foreground text-base sm:text-lg mb-2">{step.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-3">{step.description}</p>

                {/* Label pill */}
                <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full">
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <QuoteBlock text={quotes.s10} />
      </div>
    </Slide>
  );
}
