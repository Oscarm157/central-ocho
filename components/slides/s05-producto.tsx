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
      <div className="stagger-in">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <span className="font-mono text-sm text-foreground/20 block mb-2">05</span>
          <div className="w-[60px] h-[2px] bg-primary mb-3" />
          <p className="text-xs uppercase tracking-[0.25em] text-primary-light font-medium mb-1">
            El Producto
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground">
            Townhouse de 3 niveles + roof privado
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 mb-8">
          {/* Stat bars */}
          <div className="lg:col-span-2 flex flex-col justify-center space-y-3">
            {statBars.map((bar, i) => (
              <div
                key={bar.label}
                className="flex items-center justify-between bg-card rounded-lg px-5 py-3.5"
                style={{ animation: `staggerChild 0.5s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.08}s both` }}
              >
                <span className="text-muted text-sm font-sans">{bar.label}</span>
                <span className="font-mono text-primary-light text-base sm:text-lg font-medium">
                  {bar.value}
                </span>
              </div>
            ))}
          </div>

          {/* Video render */}
          <div className="lg:col-span-3">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-card">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/images/video-render.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/50 backdrop-blur-sm rounded-lg px-2.5 py-1.5 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-white" style={{ fontSize: 14 }}>zoom_in</span>
                  <span className="text-white text-xs">Ampliar</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Distribution */}
        <div className="mb-6">
          <h4 className="font-display text-lg text-foreground mb-3">Distribución inteligente</h4>
          <div className="space-y-1.5">
            {product.distribution.map((d) => (
              <p key={d.level} className="text-sm sm:text-base text-muted">
                <span className="font-semibold text-foreground">{d.level}:</span>{" "}
                {d.description}
              </p>
            ))}
          </div>
        </div>

        <QuoteBlock text={quotes.s05} />
      </div>
    </Slide>
  );
}
