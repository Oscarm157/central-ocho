"use client";

import { project } from "@/lib/data";

export function S01Hero() {
  const goNext = () => {
    window.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowRight", bubbles: true }));
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/images/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

      {/* Top label */}
      <div className="absolute top-20 left-0 right-0 flex justify-center hero-fade-in">
        <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#A67C00] font-medium">
          Pitch Deck de Inversión · {project.year}
        </span>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 sm:pb-28 px-6">
        <h1 className="font-[family-name:var(--font-bodoni)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.3em] text-white text-center hero-fade-in-delayed uppercase">
          {project.name}
        </h1>
        <p className="mt-4 text-sm sm:text-base uppercase tracking-[0.2em] text-[#D4C5B2] font-medium hero-fade-in-delayed-2">
          {project.tagline}
        </p>
        <p className="mt-2 text-sm text-white/60 hero-fade-in-delayed-2">
          {project.location}
        </p>

        {/* CTA */}
        <div className="mt-10 hero-fade-in-delayed-3">
          <button
            onClick={goNext}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 active:scale-95 transition-all"
          >
            <span className="text-xs sm:text-sm uppercase tracking-[0.2em] text-white/70 font-medium">Iniciar</span>
            <span className="material-symbols-outlined text-[#A67C00] animate-bounce-down" style={{ fontSize: 18 }}>
              arrow_forward
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
