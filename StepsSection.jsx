import React from "react";
import { STEPS } from "../data/products";

const ICONS = {
  heart: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--terracotta)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  pen: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--terracotta)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  ),
  truck: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--terracotta)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" rx="2" /><path d="M16 8h4l3 4v5h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  ),
};

export function StepsSection() {
  return (
    <section className="bg-[var(--cream)] py-16 sm:py-20 px-6 sm:px-12 lg:px-18">
      <div className="max-w-[600px] mx-auto">
        <h3 className="font-display text-[clamp(28px,7vw,40px)] text-[var(--text-dark)] mb-8 text-center">
          Cómo comprar
        </h3>
        <div className="flex flex-col gap-5">
          {STEPS.map((step) => (
            <div key={step.num} className="flex items-center gap-5 bg-[var(--ivory)] rounded-2xl p-6 shadow-sm">
              <div className="w-14 h-14 rounded-full bg-[var(--blush-light)] flex items-center justify-center shrink-0 relative">
                {ICONS[step.icon]}
                <span className="absolute -top-1 -right-1 rounded-full bg-[var(--terracotta)] text-white text-xs font-bold flex items-center justify-center" style={{ width: "22px", height: "22px" }}>
                  {step.num}
                </span>
              </div>
              <span className="text-[clamp(16px,4vw,20px)] font-medium text-[var(--text-body)]">
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
