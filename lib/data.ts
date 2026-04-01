export const project = {
  name: "CENTRAL OCHO",
  tagline: "Desarrollo boutique · 8 townhouses",
  location: "Buena Vista, Tijuana",
  address: "Sta. Isabel 418, Col. Buena Vista, Tijuana",
  coordinates: { lat: 32.4981, lng: -116.9367 },
  year: 2026,
  units: 8,
};

export const product = {
  surfaceHabitable: 130,
  garage: 57,
  roof: 50,
  levels: "3 + roof",
  distribution: [
    { level: "Planta baja", description: "Área social abierta y garage integrado. Espacios conectados, iluminación natural." },
    { level: "Niveles superiores", description: "Recámaras amplias con buena iluminación. Privacidad y confort." },
    { level: "Roof", description: "Espacio premium de convivencia con vista. El amenity que cierra ventas." },
  ],
};

export const pricing = {
  phases: [
    { fase: "Preventa", precio: 4.95, label: "$4.95M", status: "Captura early adopters" },
    { fase: "En obra", precio: 5.20, label: "$5.20M", status: "Incremento progresivo" },
    { fase: "Entrega", precio: 5.60, label: "$5.60M", status: "Valor real del mercado" },
  ],
  averagePrice: 5.5,
  totalRevenue: 44,
  appreciationPerUnit: 1500000,
  appreciationPercent: 34.9,
};

export const investment = {
  annualReturn: 15,
  maxMonths: 30,
};

export const proximity = [
  { place: "Zona Río", time: "5 min" },
  { place: "Garita San Ysidro", time: "10 min" },
  { place: "Centro Tijuana", time: "8 min" },
  { place: "Plaza Río", time: "6 min" },
  { place: "Hospital General", time: "4 min" },
  { place: "Escuelas", time: "3-7 min" },
];

export const differentiators = [
  { icon: "roofing", title: "Roof privado", description: "El amenity más deseado en townhouse. Es lo que cierra ventas." },
  { icon: "palette", title: "Diseño real, no genérico", description: "Arquitectura que el comprador presume, no que tolera." },
  { icon: "lock", title: "Baja densidad", description: "Solo 8 vecinos. Privacidad garantizada. Plusvalía protegida." },
  { icon: "trending_up", title: "Valor vs. precio", description: "Más metros y mejor diseño que la competencia al mismo precio." },
];

export const security = [
  { title: "Activo físico", description: "Capital respaldado por un proyecto real en construcción. Terreno, materiales, avance tangible." },
  { title: "Ubicación validada", description: "Zona con demanda comprobada y absorción histórica. La ubicación resuelve la salida." },
  { title: "Producto probado", description: "Townhouse: formato con mayor tracción en este segmento. El comprador lo conoce y lo busca." },
  { title: "Inventario limitado", description: "Solo 8 unidades. El riesgo de sobreinventario no existe. Exclusividad que protege el valor." },
];

export const execution = [
  { number: 1, title: "Preventa", description: "Genera flujo inicial antes de arrancar obra fuerte.", label: "Riesgo mitigado" },
  { number: 2, title: "Construcción por etapas", description: "Se construye conforme entra capital. Sin apalancamiento excesivo.", label: "Flujo continuo" },
  { number: 3, title: "Comercialización progresiva", description: "Se vende durante todo el ciclo, no solo al final.", label: "Retorno acelerado" },
];

export const contact = {
  name: "[Nombre del contacto]",
  phone: "[Teléfono]",
  email: "[Email]",
  whatsapp: "https://wa.me/52XXXXXXXXXX?text=Hola%2C%20me%20interesa%20conocer%20más%20sobre%20CENTRAL%20OCHO",
};

export const quotes = {
  s02: "No es un desarrollo masivo. Es un producto preciso para un mercado que ya existe.",
  s03: "Producto correcto. Zona correcta. Momento correcto.",
  s04: "Buena Vista lleva años siendo zona de demanda real. La ubicación ya tiene mercado.",
  s05: "Un producto que supera el estándar de mercado en su rango de precio.",
  s08: "El precio sube con cada fase. Quien entra primero compra más barato el mismo producto, obteniendo más por su inversión.",
  s09: "El estándar de un departamento chico en la zona ronda entre $4.5 y $6 millones. A un precio similar, los townhouses se prevén de colocación rápida — son una opción mejor y más grande.",
  s10: "El modelo reduce exposición y acelera retorno.",
  s11: "Es un proyecto corto con retorno claro. No hay que esperar años para ver resultados.",
  s12: "El balance ideal entre rendimiento atractivo y riesgo controlado.",
};
