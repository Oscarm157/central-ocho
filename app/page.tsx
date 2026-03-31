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
import { S10Modelo } from "@/components/slides/s10-modelo";
import { S11Retorno } from "@/components/slides/s11-retorno";
import { S12Respaldo } from "@/components/slides/s12-respaldo";
import { S13Cierre } from "@/components/slides/s13-cierre";

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
      <S10Modelo />
      <S11Retorno />
      <S12Respaldo />
      <S13Cierre />
    </SlidesDeck>
  );
}
