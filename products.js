// ============================================
// CONFIGURACIÓN CENTRAL
// Edita aquí el número, textos, precios y productos.
// ============================================

export const WHATSAPP_NUMBER = "56927460044";

export const SITE_CONFIG = {
  title: "Día de la Madre",
  subtitle: "Celebra su amor con detalles que perduran",
  heroDescription: "Un regalo elegante, emocional y listo para sorprender.",
  closingText: "Haz que mamá reciba un detalle inolvidable.",
  closingTagline: "Porque ella merece lo mejor",
  closingSign: "Gracias, mamá.",
  deliveryZones: "Entrega en Concepción y San Pedro de la Paz",
  contactText: "Para agendar comunícate al +56 9 2746 0044",
  limitedText: "Cupos limitados",
};

export const PRODUCTS = [
  {
    id: "corazon-inolvidable",
    badge: "Destacado",
    name: "Corazón Inolvidable",
    description: "Rosas rojas premium con chocolates seleccionados.",
    price: "Desde $29.990",
    image: "/images/corazon-rosas.png",
    benefits: [
      "Hecho con amor para ella",
      "Presentación premium",
      "Dedicatoria personalizada",
      "Entrega coordinada",
    ],
  },
];

export const DELIVERY_DATES = [
  "Viernes 8 de mayo",
  "Sábado 9 de mayo",
  "Domingo 10 de mayo",
];

export const DELIVERY_WINDOWS = [
  "Mañana",
  "Tarde",
  "Noche",
  "Por coordinar",
];

export const COMMUNES = [
  "Concepción",
  "San Pedro de la Paz",
  "Chiguayante",
  "Hualpén",
  "Talcahuano",
  "Otro sector",
];

export const STEPS = [
  { num: 1, label: "Elige tu pack", icon: "heart" },
  { num: 2, label: "Envía tu dedicatoria", icon: "pen" },
  { num: 3, label: "Coordina entrega o retiro", icon: "truck" },
];

export const TRUST_ITEMS = [
  "Cupos limitados",
  "Pago confirmado para reservar",
  "Foto del producto antes del envío",
  SITE_CONFIG.deliveryZones,
];

export function formatWhatsAppNumber(number = WHATSAPP_NUMBER) {
  return `+${number.slice(0, 2)} ${number.slice(2, 3)} ${number.slice(3, 7)} ${number.slice(7)}`;
}

export function waLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildOrderMessage(order) {
  const lines = [
    "Hola! Quiero reservar un regalo para el Día de la Madre 💐",
    "",
    `Producto: ${order.productName}`,
    `Precio: ${order.price}`,
    `Nombre: ${order.customerName || "Por completar"}`,
    `Para: ${order.recipientName || "Mamá"}`,
    `Comuna: ${order.commune || "Por confirmar"}`,
    `Fecha de entrega/retiro: ${order.deliveryDate || "Por coordinar"}`,
    `Bloque horario: ${order.deliveryWindow || "Por coordinar"}`,
    `Modalidad: ${order.deliveryType || "Por confirmar"}`,
    order.address ? `Dirección: ${order.address}` : null,
    order.dedication ? `Dedicatoria: ${order.dedication}` : null,
    order.notes ? `Notas: ${order.notes}` : null,
  ].filter(Boolean);

  return lines.join("\n");
}
