"use client";

import { SlidesDeck } from "@/components/slides-deck";
import { S01Hero } from "@/components/slides/s01-hero";
import { S02Concepto } from "@/components/slides/s02-concepto";
import { S03Oportunidad } from "@/components/slides/s03-oportunidad";
import { S04Ubicacion } from "@/components/slides/s04-ubicacion";
import { S05Producto } from "@/components/slides/s05-producto";
import { S06Galeria } from "@/components/slides/s06-galeria";
import { S07Diferenciadores } from "@/components/slides/s07-diferenciadores";
import { S08Estrategia } from "@/components/slides/s08-estrategia";
import { S09Proyeccion } from "@/components/slides/s09-proyeccion";
import { S11Retorno } from "@/components/slides/s11-retorno";

export default function Home() {
  return (
    <SlidesDeck storageKey="central8-slide">
      <S01Hero />
      <S02Concepto />
      <S03Oportunidad />
      <S04Ubicacion />
      <S05Producto />
      <S06Galeria />
      <S07Diferenciadores />
      <S08Estrategia />
      <S09Proyeccion />
      <S11Retorno />
      <S01Hero />
    </SlidesDeck>
  );
}
