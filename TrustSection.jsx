import React from "react";
import { TRUST_ITEMS } from "../data/products";

export function TrustSection() {
  return (
    <section className="bg-[var(--ivory)] py-12 sm:py-16 px-6 sm:px-12 lg:px-18">
      <div className="max-w-[600px] mx-auto">
        <h3 className="font-display text-[clamp(24px,6vw,32px)] text-[var(--text-dark)] mb-6 text-center">
          Compra con confianza
        </h3>
        <div className="grid grid-cols-2 gap-3.5">
          {TRUST_ITEMS.map((item) => (
            <div key={item} className="bg-[var(--cream)] rounded-xl p-4 flex items-start gap-2.5">
              <div className="w-2 h-2 rounded-full bg-[var(--gold)] shrink-0 mt-1.5" />
              <span className="text-[clamp(13px,3.2vw,16px)] text-[var(--text-body)] leading-snug">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
