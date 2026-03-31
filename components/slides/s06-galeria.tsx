import Image from "next/image";
import { Slide } from "@/components/slide";

const plants = [
  { src: "/images/planta-garage.png", label: "Planta Baja · Garage" },
  { src: "/images/planta-rooftop.png", label: "Roof · Terraza privada" },
  { src: "/images/planta-social.png", label: "Nivel 1 · Área social" },
  { src: "/images/planta-recamaras.png", label: "Nivel 2 · Recámaras" },
];

export function S06Galeria() {
  return (
    <Slide centered={false}>
      <div className="stagger-in">
        {/* Header */}
        <div className="mb-4">
          <span className="font-mono text-sm text-foreground/20 block mb-2">06</span>
          <div className="w-[60px] h-[2px] bg-primary mb-3" />
          <h2 className="font-display text-2xl sm:text-3xl text-foreground">RECORRIDO VISUAL</h2>
        </div>

        {/* Hero image — fachada */}
        <div className="relative rounded-xl overflow-hidden mb-4 group">
          <div className="relative aspect-[21/9]">
            <Image
              src="/images/hero-fachada.png"
              alt="Fachada — Central Ocho"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              sizes="100vw"
              quality={85}
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-3">
            <p className="text-white/80 text-xs sm:text-sm">Fachada · Vista frontal · Atardecer</p>
          </div>
        </div>

        {/* 2x2 grid of plants */}
        <div className="grid grid-cols-2 gap-3">
          {plants.map((img) => (
            <div key={img.src} className="relative group rounded-lg overflow-hidden bg-card cursor-pointer transition-shadow duration-300 hover:glow-copper-strong">
              <div className="relative aspect-square">
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="50vw"
                  quality={80}
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-3 py-2">
                <p className="text-white/80 text-xs sm:text-sm">{img.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}
