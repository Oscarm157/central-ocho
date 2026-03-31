# CENTRAL OCHO — Pitch Deck de Inversión (Presentación Programática)

## 🎯 OBJETIVO

Construir una presentación web programática tipo scroll-based pitch deck para el proyecto inmobiliario **CENTRAL OCHO** — un desarrollo boutique de 8 townhouses en Buena Vista, Tijuana. El objetivo es convencer a un inversionista de participar. La presentación debe sentirse premium, ejecutiva y moderna — no como un PowerPoint convertido a web, sino como una experiencia diseñada desde cero.

**Referencia de diseño**: https://narrativa360.vercel.app/arq-mkt (estructura de scroll, secciones con animaciones, tipografía limpia, transiciones suaves).

---

## 🛠 STACK TÉCNICO

- **Next.js 16.2.1** (App Router)
- **React 19.2.4**
- **TypeScript 5**
- **Tailwind CSS 4**
- **Recharts** (para gráficas/visualizaciones de datos)
- **ESLint 9** con config de Next.js
- **Framer Motion** (para animaciones de scroll y transiciones)

---

## 🎨 SISTEMA DE DISEÑO

### Paleta de Colores

La estética debe reflejar los renders arquitectónicos del proyecto: concreto beige, madera oscura, iluminación cálida. Predominantemente **beige/sand** con acentos discretos y **un solo color de contraste fuerte**.

```
COLORES PRINCIPALES:
- Beige claro (fondo principal):     #F5F0EB
- Beige medio (superficies/cards):   #E8E0D6
- Arena cálida (acentos suaves):     #D4C5B2
- Concreto claro (textos suaves):    #B8ADA0

NEUTROS:
- Charcoal (texto principal):        #2A2A2A
- Grafito medio (texto secundario):  #5A5A5A
- Gris claro (bordes, divisores):    #E0D8CF

CONTRASTE (usar con moderación — solo para CTAs, datos clave, números importantes):
- Cobre/Bronce oscuro:               #8B6914
- Cobre claro (hover/accent):        #A67C00

MADERA (para elementos decorativos):
- Nogal oscuro:                       #4A3728
- Nogal medio:                        #6B5344
```

### Tipografía

```
DISPLAY/TÍTULOS:   "DM Serif Display" (Google Fonts) — serif con personalidad, elegante pero no ornamental
SUBTÍTULOS/LABELS: "Plus Jakarta Sans" weight 600-700 — geométrica, moderna
CUERPO:            "Plus Jakarta Sans" weight 400-500 — limpia, legible
DATOS/NÚMEROS:     "DM Mono" (Google Fonts) — monospace para cifras financieras, consistente con la familia DM
```

### Escalas Tipográficas

```
Hero title:        clamp(3rem, 6vw, 5.5rem) — muy grande, impactante
Section title:     clamp(2rem, 4vw, 3.5rem)
Section subtitle:  clamp(1.25rem, 2vw, 1.75rem)
Body:              1rem (16px) - 1.125rem (18px)
Caption/label:     0.75rem - 0.875rem — uppercase, tracking-wide
Big numbers:       clamp(3rem, 8vw, 7rem) — para estadísticas hero
```

### Principios de Espaciado

```
- Secciones: padding-y de 120px-160px mínimo (las secciones deben respirar)
- Max-width del contenido: 1200px centrado
- Gap entre elementos: 24px-48px
- Las imágenes pueden salir del contenedor para crear asimetría
```

### Motifs/Elementos Visuales Recurrentes

```
1. LÍNEA DORADA SUTIL: Un hr fino en color cobre (#8B6914) de ~60px de ancho como separador antes de cada título de sección
2. NUMERACIÓN DE SECCIÓN: Cada sección lleva un número tipo "01", "02" etc. en monospace, opacidad 30%, alineado al margen
3. QUOTE BLOCKS: Las frases clave del deck van en un bloque con borde izquierdo de 3px color cobre y fondo beige medio
4. GRAIN TEXTURE: Overlay sutil de noise/grain sobre fondos para dar textura (CSS background con SVG noise)
```

---

## 📐 ARQUITECTURA DE COMPONENTES

```
src/
├── app/
│   ├── layout.tsx              # Root layout con fonts, metadata
│   ├── page.tsx                # Página principal (importa todas las secciones)
│   └── globals.css             # Variables CSS, Tailwind config, noise texture
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx      # Nav fija minimalista (logo + indicador de scroll)
│   │   ├── SectionWrapper.tsx  # Wrapper reutilizable: padding, max-width, número de sección, animación de entrada
│   │   └── Footer.tsx          # Footer con CTA de contacto
│   ├── sections/
│   │   ├── S01_Hero.tsx        # Hero con imagen de fachada
│   │   ├── S02_Concepto.tsx    # El concepto / Exclusividad
│   │   ├── S03_Oportunidad.tsx # La brecha de mercado
│   │   ├── S04_Ubicacion.tsx   # Ubicación + mapa de tiempos
│   │   ├── S05_Producto.tsx    # El producto (plantas, renders)
│   │   ├── S06_Galeria.tsx     # Galería de renders con plantas
│   │   ├── S07_Diferenciadores.tsx  # Por qué se vende
│   │   ├── S08_Estrategia.tsx  # Estrategia comercial (escalonamiento)
│   │   ├── S09_Proyeccion.tsx  # Proyección de ingresos
│   │   ├── S10_Modelo.tsx      # Modelo de ejecución
│   │   ├── S11_Retorno.tsx     # Propuesta de retorno al inversionista
│   │   ├── S12_Respaldo.tsx    # Respaldo y seguridad
│   │   └── S13_Cierre.tsx      # CTA final / contacto
│   ├── ui/
│   │   ├── AnimatedCounter.tsx # Contador animado para números
│   │   ├── QuoteBlock.tsx      # Bloque de quote con borde cobre
│   │   ├── StatCard.tsx        # Card para estadísticas grandes
│   │   ├── FeatureCard.tsx     # Card reutilizable para features/diferenciadores/pilares
│   │   ├── TimelineStep.tsx    # Paso en timeline de ejecución
│   │   └── ScrollProgress.tsx  # Barra de progreso de scroll
│   └── charts/
│       └── PriceEscalation.tsx # Gráfica de escalonamiento de precios (Recharts)
├── lib/
│   ├── animations.ts           # Variants de Framer Motion reutilizables
│   └── data.ts                 # Todos los datos del proyecto centralizados (ver spec abajo)
└── public/
    └── images/
        ├── hero-fachada.jpg         # Render fachada atardecer (Image 7)
        ├── fachada-dia.jpg          # Render fachada día (Image 3)
        ├── fachada-sunset.jpg       # Render fachada sunset (Image 2)
        ├── planta-garage.jpg        # Planta garage (Image 1)
        ├── planta-rooftop.jpg       # Planta rooftop (Image 4)
        ├── planta-social.jpg        # Planta área social (Image 5)
        ├── planta-recamaras.jpg     # Planta recámaras (Image 6)
        └── noise.svg                # Textura de noise para overlay
```

---

## 📄 CONTENIDO POR SECCIÓN (DETALLADO)

### S01 — HERO

**Layout**: Full viewport height. Imagen de fachada (atardecer — Image 7) como background con overlay gradiente oscuro desde abajo. El texto aparece sobre la imagen en la mitad inferior.

**Contenido**:
```
CENTRAL OCHO                        ← DM Serif Display, muy grande, blanco
Desarrollo boutique · 8 townhouses  ← Plus Jakarta Sans, uppercase, tracking-wide, arena
Buena Vista, Tijuana                ← Plus Jakarta Sans, weight 400, blanco 70%

[Pitch Deck de Inversión · 2026]   ← Label pequeño, cobre, posición superior o inferior

↓ Scroll indicator animado (chevron pulsante)
```

**Animación**: Texto entra con fade-up staggered (0.3s delay entre líneas). La imagen tiene un sutil parallax (translateY con scroll).

**Nota técnica**: La imagen debe usar `next/image` con `priority`, `fill`, y `object-cover`. Overlay con `bg-gradient-to-t from-black/70 via-black/30 to-transparent`.

---

### S02 — EL CONCEPTO

**Layout**: Dos columnas. Izquierda: texto. Derecha: número "8" gigante como elemento decorativo (en cobre, semi-transparente, ~300px).

**Contenido**:
```
02 ← número de sección, monospace, opacidad 20%
— ← línea cobre de 60px
EL CONCEPTO
Exclusividad por diseño

[Grid de 3 items]:
┌─────────────────────┬─────────────────────┬─────────────────────┐
│ 8 Unidades          │ Diseño              │ Perfil              │
│                     │ contemporáneo       │ definido            │
│ Inventario limitado │ Arquitectura que    │ Producto diseñado   │
│ por decisión, no    │ compite con         │ para un segmento    │
│ por restricción.    │ desarrollos de      │ específico. Cada    │
│ Cada unidad es      │ mayor precio.       │ detalle responde    │
│ parte de una        │ Diseño intencional, │ a un comprador      │
│ colección exclusiva.│ no genérico.        │ real.               │
└─────────────────────┴─────────────────────┴─────────────────────┘

> "No es un desarrollo masivo. Es un producto preciso para un mercado que ya existe."
```

**Animación**: El "8" gigante entra desde la derecha con fade + scale. Los 3 cards entran con stagger de izquierda a derecha.

---

### S03 — LA OPORTUNIDAD

**Layout**: Una sección con fondo beige medio para contraste. 3 columnas con iconos/headlines + un bloque destacado abajo.

**Contenido**:
```
03
—
LA OPORTUNIDAD
La brecha que nadie está cubriendo

[3 columnas]:
Zona consolidada          │ Escasez real               │ Comprador existente
Buena Vista es zona       │ No hay producto tipo       │ El comprador de $5M+
consolidada con demanda   │ townhouse en este corredor.│ existe, pero no encuentra
constante y plusvalía     │ La oferta: depto genérico  │ producto nuevo que le
comprobada.               │ o casa usada.              │ haga sentido.

[Bloque destacado — fondo charcoal, texto blanco]:
┌──────────────────────────────────────────────────┐
│  Brecha identificada    Segmento: $5M+ MXN       │
│  ████████████░░░  Demanda vs Oferta               │
│  (barra visual mostrando demanda > oferta)        │
└──────────────────────────────────────────────────┘

> "Producto correcto. Zona correcta. Momento correcto."
```

---

### S04 — UBICACIÓN

**Layout**: Split horizontal. Izquierda: información textual con badges de tiempo. Derecha: mapa estilizado o embed de mapa (preferiblemente un SVG simplificado que muestre la posición relativa, NO Google Maps embed — mantenerlo diseñado).

**Contenido**:
```
04
—
UBICACIÓN
Sta. Isabel 418, Col. Buena Vista, Tijuana

[3 características con ícono]:
📍 Zona residencial establecida
   Servicios completos, infraestructura consolidada, vecindario maduro.

🔗 Conectividad estratégica
   Acceso rápido a Zona Río, garita, centro. Vías principales a minutos.

📈 Alta absorción histórica
   La vivienda en esta zona no se queda en inventario.

[Badges/chips de tiempo — en fila horizontal, wrapping en mobile]:
┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐
│ Zona Río   │ │ Garita     │ │ Centro     │ │ Plaza Río  │ │ Hospital   │ │ Escuelas   │
│ 5 min      │ │ 10 min     │ │ 8 min      │ │ 6 min      │ │ 4 min      │ │ 3-7 min    │
└────────────┘ └────────────┘ └────────────┘ └────────────┘ └────────────┘ └────────────┘

Coordenadas: 32.4981° N, 116.9367° W

> "La ubicación resuelve la salida del proyecto antes de que empiece la obra."
```

**Nota**: Para el mapa, usar un iframe de Google Maps con estilo monocromático (Snazzy Maps style en tonos beige/arena). Centrado en las coordenadas 32.4981, -116.9367 con zoom ~15. El iframe debe tener bordes redondeados, un outline sutil en color arena, y un filtro CSS `grayscale(100%) sepia(30%) saturate(60%)` para que se integre con la paleta beige del sitio. Si Google Maps embed no permite estilos, aplicar el filtro CSS sobre el iframe directamente.

---

### S05 — EL PRODUCTO

**Layout**: Hero de producto. Gran titular con las 3 cifras principales como stat cards. Debajo, la distribución por niveles.

**Contenido**:
```
05
—
EL PRODUCTO
Townhouse de 3 niveles + roof privado

[3 stat cards grandes, fondo charcoal, números en cobre]:
┌──────────┐ ┌──────────┐ ┌──────────┐
│  130 m²  │ │  57 m²   │ │  50 m²   │
│ Superficie│ │ Garage   │ │  Roof    │
│ habitable │ │          │ │ privado  │
└──────────┘ └──────────┘ └──────────┘

        3 + roof ← número grande en cobre
        Niveles

[Distribución — 3 filas con ícono]:
Planta baja:      Área social abierta y garage integrado. Espacios conectados, 
                  iluminación natural.
Niveles superiores: Recámaras amplias con buena iluminación. Privacidad y confort.
Roof:             Espacio premium de convivencia con vista. El amenity que cierra ventas.

> "Un producto que supera el estándar de mercado en su rango de precio."
```

---

### S06 — GALERÍA DE PLANTAS Y RENDERS

**Layout**: Sección de galería inmersiva. Mostrar las plantas arquitectónicas y fachadas de forma visual y atractiva. NO como un grid estándar — usar un layout más editorial.

**Contenido**:
```
06
—
RECORRIDO VISUAL

[Layout editorial — alternar entre imagen grande + texto y grids]:

FILA 1: Imagen grande de fachada atardecer (Image 2) — ancho completo o 70%, con caption:
         "Fachada · Vista frontal · Atardecer"

FILA 2: Grid de 2 columnas con las plantas:
        [Planta garage (Image 1)]     [Planta rooftop (Image 4)]
        "Planta Baja · Garage"        "Roof · Terraza privada"

FILA 3: Grid de 2 columnas:
        [Planta social (Image 5)]      [Planta recámaras (Image 6)]
        "Nivel 1 · Área social"        "Nivel 2 · Recámaras"

FILA 4: Imagen de fachada día (Image 3) — con un parallax sutil
```

**Animación**: Cada imagen entra con fade-up al hacer scroll. Efecto de hover en las plantas que haga un zoom suave (scale 1.02).

**Nota técnica**: Todas las imágenes con `next/image`, lazy loading (excepto hero), y `sizes` apropiados. Usar `aspect-ratio` para mantener proporciones sin saltos de layout.

---

### S07 — DIFERENCIADORES

**Layout**: Grid 2x2 de cards. Cada card tiene un ícono/header y descripción. Abajo un bloque resumen.

**Contenido**:
```
07
—
DIFERENCIADORES
¿Por qué se vende fácil?

[Grid 2x2]:
┌─────────────────────────┐ ┌─────────────────────────┐
│ 🏠 Roof privado         │ │ 🎨 Diseño real,          │
│                          │ │    no genérico           │
│ El amenity más deseado   │ │ Arquitectura que el      │
│ en townhouse. Es lo que  │ │ comprador presume, no    │
│ cierra ventas.           │ │ que tolera.              │
└─────────────────────────┘ └─────────────────────────┘
┌─────────────────────────┐ ┌─────────────────────────┐
│ 🔒 Baja densidad        │ │ 💰 Valor vs. precio      │
│                          │ │                          │
│ Solo 8 vecinos.          │ │ Más metros y mejor diseño│
│ Privacidad garantizada.  │ │ que la competencia al    │
│ Plusvalía protegida.     │ │ mismo precio.            │
└─────────────────────────┘ └─────────────────────────┘

[Bloque resumen]:
Alta absorción esperada · 4 pilares sólidos de diferenciación
```

---

### S08 — ESTRATEGIA COMERCIAL

**Layout**: Sección con visualización del escalonamiento de precios. Usar Recharts para una gráfica de barras o stepped-line que muestre las 3 fases.

**Contenido**:
```
08
—
ESTRATEGIA COMERCIAL
Escalonamiento inteligente de precio

[Visualización — Gráfica Recharts o visual custom]:

Fase 1: Preventa        $4.95M MXN   → "Captura early adopters"
Fase 2: Venta en obra   $5.20M MXN   → "Incremento progresivo"
Fase 3: Entrega          $5.60M MXN   → "Valor real del mercado"

[Stat destacado]:
┌──────────────────────────────────────┐
│  +$650,000 MXN  │  13.1% incremento │
│  Plusvalía capturada por unidad      │
│  (de preventa a entrega)             │
└──────────────────────────────────────┘

> "Se captura plusvalía durante el desarrollo. El que entra primero, paga menos."
```

**Gráfica Recharts**: Barras verticales escalonadas con colores progresivos (beige claro → beige medio → cobre). Labels dentro de las barras con precio. Animación de grow-up al entrar en viewport.

---

### S09 — PROYECCIÓN DE INGRESOS

**Layout**: Sección con un solo stat hero gigante ($41.6M) y 3 sub-stats.

**Contenido**:
```
09
—
PROYECCIÓN DE INGRESOS

$41.6M                               ← Número gigante, cobre, DM Mono
MXN en ingreso proyectado            ← Subtítulo debajo

[3 sub-stats en fila]:
┌──────────┐ ┌──────────────┐ ┌──────────────┐
│    8     │ │    $5.2M     │ │   $650K      │
│ Unidades │ │ Precio prom. │ │ Plusvalía por │
│ totales  │ │ por unidad   │ │ unidad (13%) │
└──────────┘ └──────────────┘ └──────────────┘

> "Proyecto de volumen controlado con alta liquidez por unidad."
```

**Animación**: El $41.6M debe usar un AnimatedCounter que cuente de 0 a 41.6 al entrar en viewport (usando IntersectionObserver). Los sub-stats entran con stagger.

---

### S10 — MODELO DE EJECUCIÓN

**Layout**: Timeline horizontal de 3 pasos con números grandes (1, 2, 3) conectados por línea.

**Contenido**:
```
10
—
MODELO DE EJECUCIÓN
Capital optimizado, riesgo controlado

[Timeline de 3 pasos]:

   ①──────────────②──────────────③
   
Preventa              Construcción         Comercialización
                      por etapas           progresiva

Genera flujo inicial  Se construye         Se vende durante
antes de arrancar     conforme entra       todo el ciclo, no
obra fuerte.          capital. Sin         solo al final.
                      apalancamiento
                      excesivo.

[Labels debajo]:
Riesgo mitigado · Flujo continuo · Retorno acelerado

> "El modelo reduce exposición y acelera retorno."
```

**Animación**: La línea del timeline se dibuja progresivamente al hacer scroll (SVG stroke-dashoffset animation). Los pasos aparecen conforme la línea llega a ellos.

---

### S11 — PROPUESTA DE RETORNO

**Layout**: Sección con fondo charcoal/oscuro para generar contraste dramático. Dos stats enormes.

**Contenido**:
```
11
—
PROPUESTA DE RETORNO
Rendimiento claro y estructurado

[Fondo oscuro: #2A2A2A]

┌─────────────────────────────────────────────┐
│                                             │
│    20%              24                      │
│    Anual            Meses máximo            │
│                                             │
│    Rendimiento      Pago de                 │
│    anual            rendimientos            │
│                                             │
└─────────────────────────────────────────────┘

> "Retorno competitivo respaldado por un activo inmobiliario real."
```

**Animación**: Los números 20 y 24 se animan con contador desde 0. El fondo oscuro crea un "momento de impacto" en el scroll.

---

### S12 — RESPALDO Y SEGURIDAD

**Layout**: Grid 2x2 similar a diferenciadores pero con estilo más sobrio. Borde izquierdo cobre en cada card.

**Contenido**:
```
12
—
RESPALDO Y SEGURIDAD
Inversión con piso firme

[Grid 2x2 — cada card con borde izquierdo cobre]:

Activo físico              │ Ubicación validada
Capital respaldado por     │ Zona con demanda comprobada
un proyecto real en        │ y absorción histórica. La
construcción. Terreno,     │ ubicación resuelve la salida.
materiales, avance         │
tangible.                  │

Producto probado           │ Inventario limitado
Townhouse: formato con     │ Solo 8 unidades. El riesgo
mayor tracción en este     │ de sobreinventario no existe.
segmento. El comprador     │ Exclusividad que protege
lo conoce y lo busca.      │ el valor.

[Bloque resumen — fondo beige medio, texto centrado]:
"El balance ideal entre rendimiento atractivo y riesgo controlado."
4 pilares de seguridad
```

---

### S13 — CIERRE / CTA

**Layout**: Full viewport similar al hero pero más contenido. Imagen de fachada como fondo (Image 2 sunset). Overlay oscuro. Información de contacto.

**Contenido**:
```
CENTRAL OCHO                        ← DM Serif Display, grande, blanco

Una oportunidad de inversión clara,
estructurada y rentable.

Buscamos un socio estratégico
para ejecución inmediata.

[Botón CTA en cobre — link a WhatsApp con mensaje pre-llenado]:
→ Agendar reunión
   (href: https://wa.me/52XXXXXXXXXX?text=Hola%2C%20me%20interesa%20conocer%20más%20sobre%20CENTRAL%20OCHO)
   (target: _blank)

[Datos de contacto]:
[Nombre del contacto]
[Teléfono] ← clickable con tel:
[Email] ← clickable con mailto:

CENTRAL OCHO · Buena Vista, Tijuana · 2026
```

---

## ⚡ ESPECIFICACIONES DE ANIMACIÓN

### Framer Motion — Variants Globales

```typescript
// lib/animations.ts

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
}

export const drawLine = {
  hidden: { pathLength: 0 },
  visible: { 
    pathLength: 1, 
    transition: { duration: 1.2, ease: "easeInOut" }
  }
}
```

### Reglas de Animación

1. **Usar `whileInView`** con `viewport={{ once: true, amount: 0.3 }}` — las animaciones se disparan una sola vez cuando el 30% del elemento es visible.
2. **No sobre-animar** — solo fade-up para textos, scale para cards, stagger para grids. Nada de bounces o efectos exagerados.
3. **Parallax sutil** en imágenes hero — máximo 30px de desplazamiento.
4. **El scroll progress bar** en el nav se llena de izquierda a derecha conforme se avanza.

---

## 🧩 COMPONENTES REUTILIZABLES — SPECS

### `SectionWrapper`
```
Props:
  - number: string ("01", "02", etc.)
  - children: ReactNode
  - className?: string (para override de bg-color, etc.)
  - dark?: boolean (para secciones con fondo oscuro)

Renderiza:
  <section> con padding-y grande, max-width 1200px centrado
  Número de sección en la esquina superior izquierda (monospace, opacidad 20%)
  Línea cobre de 60px como separator
  Children debajo
```

### `QuoteBlock`
```
Props:
  - text: string

Renderiza:
  Bloque con borde izquierdo de 3px color cobre
  Fondo beige medio
  Texto en itálica, DM Serif Display
  Padding generoso
```

### `StatCard`
```
Props:
  - value: string | number
  - label: string
  - prefix?: string ("$", "+")
  - suffix?: string ("M", "%", "m²")
  - dark?: boolean
  - animate?: boolean (usar AnimatedCounter)

Renderiza:
  Card con número grande (DM Mono, cobre si dark) y label debajo
  Background: charcoal si dark, beige medio si no
```

### `AnimatedCounter`
```
Props:
  - target: number
  - prefix?: string
  - suffix?: string
  - duration?: number (ms, default 2000)
  - decimals?: number

Funcionalidad:
  Usa requestAnimationFrame + IntersectionObserver
  Cuenta de 0 al target cuando entra en viewport
  Ease-out natural
```

### `FeatureCard`
```
Props:
  - icon: ReactNode | string
  - title: string
  - description: string
  - borderAccent?: boolean (borde izquierdo cobre)

Renderiza:
  Card con hover sutil (translate-y -2px + shadow)
  Ícono/emoji arriba, título bold, descripción debajo
  Se reutiliza para S07 (Diferenciadores) y S12 (Respaldo): con borderAccent=true en S12
```

### `Navigation`
```
Componente fijo (sticky top-0 z-50):
  - Fondo transparente que se vuelve beige claro con blur al hacer scroll (backdrop-blur-md)
  - Izquierda: texto "CENTRAL OCHO" en DM Serif Display, tamaño pequeño (1rem), color charcoal
  - Derecha: label "Pitch Deck · 2026" en Plus Jakarta Sans, uppercase, tracking-wide, tamaño caption, color arena
  - Debajo del nav: ScrollProgress bar (línea fina de 2px, color cobre, width = % de scroll)
  - Altura total: ~60px
  - En mobile: misma estructura, textos más pequeños
  - Transición de fondo: opacity 0 → 1 después de scroll > 100px
```

### `ScrollProgress`
```
Props: ninguna (lee scroll position del window)

Funcionalidad:
  - Escucha scroll event (con throttle de 16ms / requestAnimationFrame)
  - Calcula porcentaje: scrollY / (documentHeight - viewportHeight)
  - Renderiza un div de 2px de alto, color cobre (#8B6914), width = porcentaje
  - Posición: fixed, top del nav o justo debajo
```

### `TimelineStep`
```
Props:
  - number: number (1, 2, 3)
  - title: string
  - subtitle: string
  - description: string
  - label: string (ej: "Riesgo mitigado")

Renderiza:
  - Número grande (DM Mono, cobre, ~48px)
  - Título bold debajo
  - Subtítulo en gris
  - Descripción body text
  - Label tag al fondo (pill con fondo cobre/10%, texto cobre)
  - En desktop: se conectan horizontalmente con una línea SVG animada
  - En mobile: se stackean verticalmente con línea vertical a la izquierda
```

---

## 📦 ESTRUCTURA DE DATOS — `lib/data.ts`

Centralizar TODOS los datos del proyecto en un solo archivo para que los componentes solo importen de aquí. Esto evita datos duplicados y facilita cambios.

```typescript
// lib/data.ts

export const project = {
  name: "CENTRAL OCHO",
  tagline: "Desarrollo boutique · 8 townhouses",
  location: "Buena Vista, Tijuana",
  address: "Sta. Isabel 418, Col. Buena Vista, Tijuana",
  coordinates: { lat: 32.4981, lng: -116.9367 },
  year: 2026,
  units: 8,
}

export const product = {
  surfaceHabitable: 130,  // m²
  garage: 57,              // m²
  roof: 50,                // m²
  levels: "3 + roof",
  distribution: [
    {
      level: "Planta baja",
      description: "Área social abierta y garage integrado. Espacios conectados, iluminación natural."
    },
    {
      level: "Niveles superiores",
      description: "Recámaras amplias con buena iluminación. Privacidad y confort."
    },
    {
      level: "Roof",
      description: "Espacio premium de convivencia con vista. El amenity que cierra ventas."
    }
  ]
}

export const pricing = {
  phases: [
    { fase: "Preventa", precio: 4.95, label: "$4.95M", status: "Captura early adopters" },
    { fase: "En obra", precio: 5.20, label: "$5.20M", status: "Incremento progresivo" },
    { fase: "Entrega", precio: 5.60, label: "$5.60M", status: "Valor real del mercado" },
  ],
  averagePrice: 5.2,       // millones MXN
  totalRevenue: 41.6,      // millones MXN
  appreciationPerUnit: 650000,  // MXN
  appreciationPercent: 13.1,
}

export const investment = {
  annualReturn: 20,          // %
  maxMonths: 24,
}

export const proximity = [
  { place: "Zona Río", time: "5 min" },
  { place: "Garita San Ysidro", time: "10 min" },
  { place: "Centro Tijuana", time: "8 min" },
  { place: "Plaza Río", time: "6 min" },
  { place: "Hospital General", time: "4 min" },
  { place: "Escuelas / Universidades", time: "3-7 min" },
]

export const differentiators = [
  {
    icon: "🏠",
    title: "Roof privado",
    description: "El amenity más deseado en townhouse. Es lo que cierra ventas."
  },
  {
    icon: "🎨",
    title: "Diseño real, no genérico",
    description: "Arquitectura que el comprador presume, no que tolera."
  },
  {
    icon: "🔒",
    title: "Baja densidad",
    description: "Solo 8 vecinos. Privacidad garantizada. Plusvalía protegida."
  },
  {
    icon: "💰",
    title: "Valor vs. precio",
    description: "Más metros y mejor diseño que la competencia al mismo precio."
  },
]

export const security = [
  {
    title: "Activo físico",
    description: "Capital respaldado por un proyecto real en construcción. Terreno, materiales, avance tangible."
  },
  {
    title: "Ubicación validada",
    description: "Zona con demanda comprobada y absorción histórica. La ubicación resuelve la salida."
  },
  {
    title: "Producto probado",
    description: "Townhouse: formato con mayor tracción en este segmento. El comprador lo conoce y lo busca."
  },
  {
    title: "Inventario limitado",
    description: "Solo 8 unidades. El riesgo de sobreinventario no existe. Exclusividad que protege el valor."
  },
]

export const execution = [
  {
    number: 1,
    title: "Preventa",
    description: "Genera flujo inicial antes de arrancar obra fuerte. Capital de trabajo desde el inicio.",
    label: "Riesgo mitigado"
  },
  {
    number: 2,
    title: "Construcción por etapas",
    description: "Se construye conforme entra capital. Sin apalancamiento excesivo ni dependencia bancaria.",
    label: "Flujo continuo"
  },
  {
    number: 3,
    title: "Comercialización progresiva",
    description: "Se vende durante todo el ciclo, no solo al final. Flujo constante y riesgo distribuido.",
    label: "Retorno acelerado"
  },
]

export const contact = {
  name: "[Nombre del contacto]",    // ← REEMPLAZAR
  phone: "[Teléfono]",              // ← REEMPLAZAR
  email: "[Email]",                 // ← REEMPLAZAR
  whatsapp: "[Link de WhatsApp]",   // ← REEMPLAZAR (formato: https://wa.me/52XXXXXXXXXX)
}

export const quotes = {
  s02: "No es un desarrollo masivo. Es un producto preciso para un mercado que ya existe.",
  s03: "Producto correcto. Zona correcta. Momento correcto.",
  s04: "La ubicación resuelve la salida del proyecto antes de que empiece la obra.",
  s05: "Un producto que supera el estándar de mercado en su rango de precio.",
  s08: "Se captura plusvalía durante el desarrollo. El que entra primero, paga menos.",
  s09: "Proyecto de volumen controlado con alta liquidez por unidad.",
  s10: "El modelo reduce exposición y acelera retorno.",
  s11: "Retorno competitivo respaldado por un activo inmobiliario real.",
  s12: "El balance ideal entre rendimiento atractivo y riesgo controlado.",
}
```

---

## 📊 GRÁFICAS RECHARTS — SPECS

### PriceEscalation (S08)

```
Tipo: BarChart vertical con 3 barras
Datos:
  [
    { fase: "Preventa", precio: 4.95, label: "$4.95M", status: "Inicio" },
    { fase: "En obra", precio: 5.20, label: "$5.20M", status: "Progresivo" },
    { fase: "Entrega", precio: 5.60, label: "$5.60M", status: "Valor real" }
  ]

Estilos:
  - Barras con gradient de beige a cobre (más cobre conforme sube el precio)
  - Sin grid lines
  - Labels personalizados dentro o arriba de las barras
  - Fondo transparente
  - Tooltip custom con estilo de card beige
  - ResponsiveContainer ancho 100%, alto 300px
  - AnimationDuration: 1500ms, animationBegin: 300ms
```

---

## 📱 RESPONSIVE

```
Breakpoints (Tailwind defaults):
  sm: 640px
  md: 768px
  lg: 1024px
  xl: 1280px

HERO: Texto reduce tamaño pero sigue impactante. Imagen siempre full viewport.
GRIDS: 2x2 → 1 columna en mobile. Gap se reduce.
STATS: Row → stack en mobile.
TIMELINE (S10): Horizontal → vertical en mobile.
GALERÍA: 2 columnas → 1 columna en mobile.
NÚMEROS GRANDES: Reducir pero mantener prominencia con clamp().
NAV: Siempre visible, se simplifica en mobile.
```

---

## 🔧 CONFIGURACIÓN INICIAL

### `tailwind.config.ts` — Extender con:
```
- colors custom (la paleta completa)
- fontFamily con las Google Fonts
- animation custom para fade-up, counter, draw-line
```

### `globals.css` — Incluir:
```
- Google Fonts import: DM Serif Display (400), Plus Jakarta Sans (400,500,600,700), DM Mono (400,500)
- CSS variables con la paleta completa (--beige-light, --beige-mid, --sand, --charcoal, --copper, etc.)
- Noise texture overlay como pseudo-element (::after con background SVG noise, opacity ~0.03, pointer-events: none)
- html { scroll-behavior: smooth }
- ::selection { background: #D4C5B2; color: #2A2A2A }
- Scrollbar sutil: track transparente, thumb en arena (#D4C5B2), width 6px
- body { background: #F5F0EB; color: #2A2A2A }
```

### `next.config.ts`:
```
- Image optimization habilitado
- No domains necesarios (imágenes locales)
```

---

## 🖼 NOTAS SOBRE LAS IMÁGENES

Las imágenes subidas se deben colocar en `public/images/` con nombres descriptivos:

| Archivo subido | Nombre destino | Uso |
|---|---|---|
| Image 1 (garage top-down) | `planta-garage.jpg` | S06 — Galería |
| Image 2 (fachada warm sunset) | `fachada-sunset.jpg` | S06 — Galería, posible S13 |
| Image 3 (fachada día gris) | `fachada-dia.jpg` | S06 — Galería |
| Image 4 (rooftop top-down) | `planta-rooftop.jpg` | S06 — Galería |
| Image 5 (social area top-down) | `planta-social.jpg` | S06 — Galería |
| Image 6 (bedrooms top-down) | `planta-recamaras.jpg` | S06 — Galería |
| Image 7 (fachada twilight) | `hero-fachada.jpg` | S01 — Hero (imagen principal) |

**Optimización**: Todas las imágenes deben pasar por `next/image`. El hero debe tener `priority={true}` y `quality={85}`. Las demás pueden ser lazy con `quality={80}`.

---

## ✅ CHECKLIST FINAL

- [ ] Todas las secciones implementadas (S01 a S13)
- [ ] Animaciones con Framer Motion (fade-up, stagger, counters)
- [ ] Gráfica de Recharts funcional en S08 (PriceEscalation)
- [ ] Contadores animados en S09 ($41.6M), S11 (20%, 24)
- [ ] Responsive completo (mobile, tablet, desktop)
- [ ] Timeline S10: horizontal en desktop, vertical en mobile
- [ ] Imágenes optimizadas con next/image
- [ ] Tipografía correcta (DM Serif Display, Plus Jakarta Sans, DM Mono)
- [ ] Paleta de colores consistente (beige/cobre/charcoal)
- [ ] Noise texture overlay sutil en fondos
- [ ] Navigation sticky con transición transparente → blur
- [ ] Scroll progress bar (2px, cobre) debajo del nav
- [ ] Quote blocks con borde izquierdo cobre en cada sección
- [ ] Secciones con padding generoso (120-160px vertical)
- [ ] S11 (Retorno) con fondo charcoal oscuro como contraste
- [ ] S13 CTA final: botón WhatsApp + datos de contacto clickables
- [ ] Google Maps embed monocromático en S04
- [ ] Datos centralizados en lib/data.ts
- [ ] Performance: LCP < 2.5s, CLS < 0.1
- [ ] Deploy funcional en Vercel

---

## 💡 NOTAS PARA EL DEVELOPER

1. **Esto ES una presentación web programática** — no un PowerPoint exportado a HTML. Es una experiencia narrativa de scroll donde cada sección debe sentirse como una revelación progresiva que construye el caso de inversión. El sitio de referencia es https://narrativa360.vercel.app/arq-mkt — misma filosofía de diseño, animaciones con scroll, tipografía con peso.

2. **El ritmo es clave**: Secciones claras → dato impactante → pausa visual → siguiente argumento. El inversionista debe sentir que cada scroll le da una razón más.

3. **Los números son el héroe**: $41.6M, 20%, 13.1%, 8 unidades — estos datos deben ser enormes, animados, imposibles de ignorar.

4. **El tono es de seguridad**: No estamos rogando por inversión. Estamos presentando una oportunidad sólida con datos. El diseño debe reflejar esa confianza — premium, limpio, sin ruido.

5. **Menos es más en texto**: Los párrafos de la PPT original son buenos pero algunos se pueden condensar. En web, mejor frases cortas y impactantes que párrafos largos.

6. **Las imágenes de los renders son de muy buena calidad** — aprovecharlas en grande. Son el mejor argumento visual del proyecto.
