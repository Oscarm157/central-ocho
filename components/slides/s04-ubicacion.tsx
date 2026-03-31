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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center">

          {/* Left side */}
          <div>
            <div className="mb-6 sm:mb-8">
              <span className="font-mono text-sm text-foreground/20 block mb-3">04</span>
              <div className="w-[60px] h-[2px] bg-primary mb-4" />
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground">UBICACIÓN</h2>
              <p className="mt-2 text-base sm:text-lg text-muted font-medium">{project.address}</p>
            </div>

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

            <p className="text-xs text-muted/60 font-mono mb-6">
              {project.coordinates.lat}°N, {project.coordinates.lng}°W
            </p>

            <div className="w-10 h-[2px] bg-primary mb-4" />
            <p className="font-display text-sm sm:text-base text-muted italic max-w-sm">
              &ldquo;{quotes.s04}&rdquo;
            </p>
          </div>

          {/* Right side: mapa full-height con tarjeta flotante */}
          <div className="relative h-[420px] sm:h-[500px] rounded-2xl overflow-hidden shadow-lg">

            {/* Mapa */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d5000!2d-116.98886!3d32.516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzLCsDMxJzA3LjAiTiAxMTbCsDU5JzE5LjUiVw!5e0!3m2!1ses-419!2smx!4v1774980142193!5m2!1ses-419!2smx"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Central Ocho"
            />

            {/* Tarjeta flotante — Zona de Influencia */}
            <div className="absolute bottom-8 left-3 right-3">
              <div className="bg-background/90 backdrop-blur-md rounded-xl border border-card-border overflow-hidden">
                <div className="px-4 py-2.5 border-b border-card-border/60 flex items-center justify-between bg-foreground/5">
                  <h3 className="text-foreground/90 font-semibold text-sm">Zona de Influencia</h3>
                  <span className="text-primary-light font-mono text-xs">{proximity.length} puntos clave</span>
                </div>
                <div className="grid grid-cols-2">
                  {proximity.map((p, i) => (
                    <div
                      key={p.place}
                      className={`flex items-center justify-between px-4 py-2 ${
                        i % 2 === 0 ? "border-r border-card-border/40" : ""
                      } ${i < proximity.length - 2 ? "border-b border-card-border/40" : ""}`}
                    >
                      <span className="text-muted text-xs truncate mr-2">{p.place}</span>
                      <span className="text-primary-light font-mono text-xs font-medium shrink-0">{p.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Slide>
  );
}
