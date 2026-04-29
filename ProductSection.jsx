import React from "react";
import { PRODUCTS, waLink } from "../data/products";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function ProductSection() {
  const product = PRODUCTS[0];

  return (
    <section id="producto" className="bg-[var(--ivory)] py-16 sm:py-20 px-6 sm:px-12 lg:px-18">
      <div className="max-w-[600px] mx-auto">
        <span className="inline-block bg-[var(--terracotta)] text-white text-xs font-semibold tracking-widest uppercase px-3.5 py-1 rounded-md mb-3">
          {product.badge}
        </span>

        <h2 className="font-display text-[clamp(36px,9vw,56px)] text-[var(--text-dark)] leading-tight mb-4">
          {product.name}
        </h2>

        <p className="text-[clamp(16px,4vw,20px)] text-[var(--text-light)] leading-relaxed mb-6">
          {product.description}
        </p>

        <div className="rounded-2xl overflow-hidden mb-7 shadow-lg bg-[var(--cream)]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full object-cover"
            style={{ maxHeight: "420px", objectPosition: "center 35%" }}
            loading="lazy"
          />
        </div>

        <p className="font-display text-[clamp(32px,8vw,48px)] font-bold text-[var(--terracotta-dark)] mb-7">
          {product.price}
        </p>

        <div className="flex flex-col gap-3.5 mb-8">
          {product.benefits.map((benefit) => (
            <div key={benefit} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[var(--blush-light)] flex items-center justify-center shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--terracotta)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className="text-[clamp(15px,3.8vw,18px)] text-[var(--text-body)]">{benefit}</span>
            </div>
          ))}
        </div>

        <div className="grid gap-3">
          <a
            href="#reservar"
            className="flex items-center justify-center gap-2.5 bg-[var(--terracotta)] text-white font-semibold text-[17px] px-9 py-4 rounded-full w-full shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
          >
            Completar datos para reservar
          </a>
          <a
            href={waLink(`Hola! Quiero reservar el pack "${product.name}" 💐`)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 border border-[var(--terracotta)] text-[var(--terracotta-dark)] font-semibold text-[16px] px-9 py-3.5 rounded-full w-full hover:bg-[var(--cream)] transition-all duration-300"
          >
            <WhatsAppIcon fill="#25D366" />
            Reservar directo por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
