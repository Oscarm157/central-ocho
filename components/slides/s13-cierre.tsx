import Image from "next/image";
import { project, contact } from "@/lib/data";

export function S13Cierre() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-fachada.png"
        alt="Central Ocho"
        fill
        className="object-cover"
        quality={80}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <div className="stagger-in max-w-2xl">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white mb-6">
            {project.name}
          </h2>

          <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-2">
            Una oportunidad de inversión clara,
          </p>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8">
            estructurada y rentable.
          </p>

          <p className="text-[#D4C5B2] text-sm sm:text-base font-medium mb-8">
            Buscamos un socio estratégico para ejecución inmediata.
          </p>

          {/* CTA Button */}
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-white font-semibold px-8 py-3 rounded-lg transition-colors text-sm sm:text-base"
          >
            <span className="material-symbols-outlined" style={{ fontSize: 20 }}>arrow_forward</span>
            Agendar reunión
          </a>

          {/* Contact info */}
          <div className="mt-8 space-y-1 text-white/40 text-sm">
            <p>{contact.name}</p>
            <a href={`tel:${contact.phone}`} className="block hover:text-white/60 transition-colors">{contact.phone}</a>
            <a href={`mailto:${contact.email}`} className="block hover:text-white/60 transition-colors">{contact.email}</a>
          </div>

          <p className="mt-10 text-white/20 text-xs uppercase tracking-[0.2em]">
            {project.name} · {project.location} · {project.year}
          </p>
        </div>
      </div>
    </div>
  );
}
