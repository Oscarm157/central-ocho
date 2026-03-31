import { Slide } from "@/components/slide";
import { SectionHeader } from "@/components/ui/section-header";
import { CopperIcon } from "@/components/ui/copper-icon";
import { execution, quotes } from "@/lib/data";

const stepIcons = ["shield", "chart", "trending"];
const stepBadges = ["Riesgo mitigado", "Flujo continuo", "Retorno acelerado"];

export function S10Modelo() {
  return (
    <Slide>
      <div className="stagger-in">
        <SectionHeader number="10" title="MODELO DE EJECUCIÓN" subtitle="Capital optimizado, riesgo controlado" />

        {/* 3 steps with arrows */}
        <div className="flex items-start justify-center gap-2 sm:gap-4 mb-10">
          {execution.map((step, i) => (
            <div key={step.number} className="flex items-start">
              {/* Step */}
              <div className="flex flex-col items-center text-center max-w-[180px] sm:max-w-[200px]">
                {/* Golden square */}
                <div className="w-14 h-14 bg-primary/15 border border-primary/30 rounded-lg flex items-center justify-center mb-4">
                  <span className="font-mono text-xl text-primary">{step.number}</span>
                </div>

                <h3 className="font-semibold text-foreground text-sm sm:text-base mb-2">{step.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-3">{step.description}</p>

                {/* Badge with icon */}
                <div className="flex items-center gap-1.5">
                  <CopperIcon name={stepIcons[i]} size={14} className="text-primary/60" />
                  <span className="text-muted text-xs">{stepBadges[i]}</span>
                </div>
              </div>

              {/* Arrow between steps */}
              {i < execution.length - 1 && (
                <span className="text-primary/40 text-2xl sm:text-3xl font-light mt-3 mx-1 sm:mx-3 shrink-0">&rarr;</span>
              )}
            </div>
          ))}
        </div>

        {/* Quote */}
        <p className="text-center text-muted italic text-sm sm:text-base">&ldquo;{quotes.s10}&rdquo;</p>
      </div>
    </Slide>
  );
}
