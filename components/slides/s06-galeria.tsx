import Image from "next/image";
import { Slide } from "@/components/slide";
import { SectionHeader } from "@/components/ui/section-header";

const gallery = [
  { src: "/images/hero-fachada.png", label: "Fachada · Vista frontal · Atardecer", span: "col-span-2" },
  { src: "/images/planta-garage.png", label: "Planta Baja · Garage", span: "col-span-1" },
  { src: "/images/planta-rooftop.png", label: "Roof · Terraza privada", span: "col-span-1" },
  { src: "/images/planta-social.png", label: "Nivel 1 · Área social", span: "col-span-1" },
  { src: "/images/planta-recamaras.png", label: "Nivel 2 · Recámaras", span: "col-span-1" },
];

export function S06Galeria() {
  return (
    <Slide centered={false}>
      <div className="stagger-in">
        <SectionHeader number="06" title="RECORRIDO VISUAL" />

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {gallery.map((img) => (
            <div
              key={img.src}
              className={`${img.span} relative group rounded-lg overflow-hidden bg-card`}
            >
              <div className={`relative ${img.span === "col-span-2" ? "aspect-[21/9]" : "aspect-square"}`}>
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes={img.span === "col-span-2" ? "100vw" : "50vw"}
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
