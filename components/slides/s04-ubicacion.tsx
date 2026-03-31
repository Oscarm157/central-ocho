import { Slide } from "@/components/slide";
import { SectionHeader } from "@/components/ui/section-header";
import { QuoteBlock } from "@/components/ui/quote-block";
import { project, proximity, quotes } from "@/lib/data";

const features = [
  { icon: "location_on", title: "Zona residencial establecida", description: "Servicios completos, infraestructura consolidada, vecindario maduro." },
  { icon: "link", title: "Conectividad estratégica", description: "Acceso rápido a Zona Río, garita, centro. Vías principales a minutos." },
  { icon: "trending_up", title: "Alta absorción histórica", description: "La vivienda en esta zona no se queda en inventario." },
];

export function S04Ubicacion() {
  return (
    <Slide>
      <div className="stagger-in">
        <SectionHeader number="04" title="UBICACIÓN" subtitle={project.address} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6">
          {/* Left: Info */}
          <div className="space-y-4">
            {features.map((f) => (
              <div key={f.title} className="flex gap-3">
                <span className="material-symbols-outlined text-primary mt-0.5" style={{ fontSize: 22 }}>{f.icon}</span>
                <div>
                  <h3 className="font-semibold text-foreground text-sm sm:text-base">{f.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{f.description}</p>
                </div>
              </div>
            ))}

            {/* Proximity badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {proximity.map((p) => (
                <div key={p.place} className="bg-card rounded-lg px-3 py-2 text-center">
                  <p className="text-xs text-muted">{p.place}</p>
                  <p className="font-mono text-sm font-medium text-primary">{p.time}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Map */}
          <div className="rounded-xl overflow-hidden border border-card-border h-[250px] sm:h-[300px]">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3364.5!2d${project.coordinates.lng}!3d${project.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2smx!4v1`}
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(100%) sepia(30%) saturate(60%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Central Ocho"
            />
          </div>
        </div>

        <QuoteBlock text={quotes.s04} />
      </div>
    </Slide>
  );
}
