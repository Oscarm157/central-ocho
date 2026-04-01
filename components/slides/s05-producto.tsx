import { Slide } from "@/components/slide";
import { QuoteBlock } from "@/components/ui/quote-block";
import { product, quotes } from "@/lib/data";

const statBars = [
  { label: "Superficie habitable", value: `${product.surfaceHabitable} m²` },
  { label: "Garage", value: `${product.garage} m²` },
  { label: "Roof privado", value: `${product.roof} m²` },
  { label: "Niveles", value: product.levels },
];

export function S05Producto() {
  return (
    <Slide>
      <div className="stagger-in grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

        {/* Columna izquierda — todo el contenido */}
        <div className="flex flex-col justify-center">
          {/* Header */}
          <div className="mb-5">
            <span className="font-mono text-sm text-foreground/20 block mb-2">05</span>
            <div className="w-[60px] h-[2px] bg-primary mb-3" />
            <p className="text-xs uppercase tracking-[0.25em] text-primary-light font-medium mb-1">
              El Producto
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground">
              Townhouse de 3 niveles + roof privado
            </h2>
          </div>

          {/* Stat bars */}
          <div className="space-y-2.5 mb-5">
            {statBars.map((bar, i) => (
              <div
                key={bar.label}
                className="flex items-center justify-between bg-card rounded-lg px-5 py-3"
                style={{ animation: `staggerChild 0.5s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.08}s both` }}
              >
                <span className="text-muted text-sm">{bar.label}</span>
                <span className="font-mono text-primary-light text-base font-medium">{bar.value}</span>
              </div>
            ))}
          </div>

          {/* Distribución */}
          <div className="mb-5">
            <h4 className="font-display text-base text-foreground mb-2">Distribución inteligente</h4>
            <div className="space-y-1">
              {product.distribution.map((d) => (
                <p key={d.level} className="text-sm text-muted">
                  <span className="font-semibold text-foreground">{d.level}:</span>{" "}
                  {d.description}
                </p>
              ))}
            </div>
          </div>

          <QuoteBlock text={quotes.s05} />
        </div>

        {/* Columna derecha — video sin cortes, 80% ancho */}
        <div className="rounded-xl overflow-hidden bg-card mt-6 sm:mt-10 lg:mt-14 w-4/5 mx-auto lg:mx-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto block"
          >
            <source src="/images/video-render.mp4" type="video/mp4" />
          </video>
        </div>

      </div>
    </Slide>
  );
}
