import React from "react";
import { SITE_CONFIG, WHATSAPP_NUMBER, formatWhatsAppNumber, waLink } from "../data/products";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function FooterCTA() {
  return (
    <section className="bg-[var(--terracotta)] py-16 sm:py-20 px-6 sm:px-12 lg:px-18 text-center relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-[200px] h-[200px] rounded-full bg-white/5" />
      <div className="absolute -bottom-16 -left-16 w-[260px] h-[260px] rounded-full bg-white/5" />

      <div className="max-w-[500px] mx-auto relative z-[1]">
        <p className="text-[clamp(13px,3vw,16px)] tracking-widest uppercase text-white/60 mb-3">
          {SITE_CONFIG.closingTagline}
        </p>

        <span className="text-white/40 text-xl block mb-3">♥</span>

        <h3 className="font-display italic text-[clamp(32px,8vw,48px)] text-[var(--ivory)] mb-2">
          {SITE_CONFIG.closingSign}
        </h3>

        <p className="text-[clamp(16px,4vw,20px)] text-white/85 mb-7 leading-relaxed">
          {SITE_CONFIG.closingText}
        </p>

        <a
          href={waLink("Hola! Quiero agendar un regalo para el Día de la Madre 💐")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-white text-[var(--terracotta-dark)] font-semibold text-[clamp(16px,4vw,20px)] px-10 py-4 rounded-full shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
        >
          <WhatsAppIcon fill="#25D366" size={24} />
          Agendar por WhatsApp
        </a>

        <p className="mt-5 text-[clamp(14px,3.5vw,17px)] text-white/65">
          Para agendar comunícate al<br />
          <a href={`tel:+${WHATSAPP_NUMBER}`} className="text-white font-semibold no-underline">
            {formatWhatsAppNumber()}
          </a>
        </p>
      </div>
    </section>
  );
}
