import React from "react";
import { waLink } from "../data/products";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function FloatingWhatsApp() {
  return (
    <a
      href={waLink("Hola! Quiero consultar disponibilidad para el Día de la Madre 💐")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Consultar por WhatsApp"
      className="fixed right-4 bottom-4 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:scale-105 transition-transform"
    >
      <WhatsAppIcon fill="#fff" size={30} />
    </a>
  );
}
