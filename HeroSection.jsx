import React, { useState } from "react";
import { PRODUCTS, SITE_CONFIG, waLink } from "../data/products";
import { OrganicShapes } from "./OrganicShapes";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[var(--cream)]">
      <OrganicShapes />

      <div className="absolute top-0 right-0 bottom-0 w-[58%] sm:w-[55%] md:w-[50%] z-[1] rounded-bl-[48px] overflow-hidden">
        <img
          src={PRODUCTS[0].image}
          alt="Mujer sosteniendo corazón de rosas y chocolates"
          onLoad={() => setLoaded(true)}
          className="w-full h-full object-cover transition-opacity duration-700"
          style={{ objectPosition: "center 20%", opacity: loaded ? 1 : 0 }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-[var(--cream)] to-transparent" />
      </div>

      <div className="relative z-[2] px-6 sm:px-12 lg:px-18 py-20 max-w-[480px] flex flex-col gap-5 flex-1 justify-center">
        <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <h1 className="font-display text-[clamp(52px,12vw,96px)] leading-none font-bold text-[var(--text-dark)]">
            {SITE_CONFIG.title.split(" ")[0]} de<br />la Madre
          </h1>
          <div className="flex items-center gap-3 mt-3">
            <div className="w-12 h-[3px] bg-[var(--terracotta)] rounded-full" />
            <span className="text-[var(--terracotta)] text-xl">♥</span>
          </div>
        </div>

        <p className="animate-fade-up text-[clamp(14px,3.5vw,18px)] font-semibold tracking-widest uppercase text-[var(--text-dark)] leading-relaxed" style={{ animationDelay: "0.3s" }}>
          {SITE_CONFIG.subtitle}
        </p>

        <p className="animate-fade-up text-[clamp(15px,3.8vw,20px)] text-[var(--text-light)] leading-relaxed italic" style={{ animationDelay: "0.5s" }}>
          {SITE_CONFIG.heroDescription}
        </p>

        <div className="animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <span className="inline-block bg-[var(--terracotta)] text-white text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-md">
            {SITE_CONFIG.limitedText}
          </span>
        </div>

        <div className="animate-fade-up flex flex-col gap-3 mt-2" style={{ animationDelay: "0.7s" }}>
          <a
            href={waLink("Hola! Quiero reservar un pack del Día de la Madre 💐")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-[var(--terracotta)] text-white font-semibold text-base px-8 py-4 rounded-full shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
          >
            <WhatsAppIcon fill="#fff" />
            Reservar por WhatsApp
          </a>
          <a href="#producto" className="text-[15px] text-[var(--terracotta-dark)] underline underline-offset-4 text-center font-medium">
            Ver packs ↓
          </a>
        </div>
      </div>
    </section>
  );
}
