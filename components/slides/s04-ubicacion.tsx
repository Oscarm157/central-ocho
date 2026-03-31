import { Slide } from "@/components/slide";
import { CopperIcon } from "@/components/ui/copper-icon";
import { project, proximity, quotes } from "@/lib/data";

const features = [
  {
    icon: "location",
    title: "Zona residencial establecida",
    description: "Servicios completos, infraestructura consolidada, vecindario maduro.",
  },
  {
    icon: "connect",
    title: "Conectividad estratégica",
    description: "Acceso rápido a Zona Río, garita, centro. Vías principales a minutos.",
  },
  {
    icon: "absorption",
    title: "Alta absorción histórica",
    description: "La vivienda en esta zona no se queda en inventario.",
  },
];

export function S04Ubicacion() {
  return (
    <Slide>
      <div className="stagger-in">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {/* Left side */}
          <div>
            {/* Section header inline */}
            <div className="mb-6 sm:mb-8">
              <span className="font-mono text-sm text-foreground/20 block mb-3">04</span>
              <div className="w-[60px] h-[2px] bg-primary mb-4" />
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground">UBICACIÓN</h2>
              <p className="mt-2 text-base sm:text-lg text-muted font-medium">{project.address}</p>
            </div>

            {/* Features with CopperIcons */}
            <div className="space-y-5 mb-6">
              {features.map((f) => (
                <div key={f.title} className="flex gap-3.5 items-start">
                  <CopperIcon name={f.icon} size={26} className="mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground text-sm sm:text-base">{f.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Coordinates */}
            <p className="text-xs text-muted/60 font-mono">
              {project.coordinates.lat}°N, {project.coordinates.lng}°W
            </p>
          </div>

          {/* Right side: Proximity table + Map */}
          <div className="space-y-4">
            <div className="bg-card rounded-xl overflow-hidden">
              <div className="px-5 sm:px-6 py-4 border-b border-card-border">
                <h3 className="text-foreground font-semibold text-base sm:text-lg">Zona de Influencia</h3>
              </div>
              <div>
                {proximity.map((p, i) => (
                  <div
                    key={p.place}
                    className={`flex items-center justify-between px-5 sm:px-6 py-3 ${
                      i % 2 === 1 ? "bg-foreground/5" : ""
                    }`}
                  >
                    <span className="text-muted text-sm">{p.place}</span>
                    <span className="text-primary-light font-mono text-sm font-medium">{p.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Maps embed */}
            <div className="rounded-xl overflow-hidden border border-card-border h-[160px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3364.2820914329377!2d-116.99131202434798!3d32.518612073772786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzLCsDMxJzA3LjAiTiAxMTbCsDU5JzE5LjUiVw!5e0!3m2!1ses-419!2smx!4v1774980142193!5m2!1ses-419!2smx"
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
        </div>

        {/* Quote at bottom */}
        <div className="text-center mt-8">
          <div className="w-10 h-[2px] bg-primary mx-auto mb-4" />
          <p className="font-display text-base sm:text-lg text-muted italic max-w-2xl mx-auto">
            &ldquo;{quotes.s04}&rdquo;
          </p>
        </div>
      </div>
    </Slide>
  );
}
