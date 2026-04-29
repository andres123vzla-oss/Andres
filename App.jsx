import React from "react";
import { HeroSection } from "./components/HeroSection";
import { ProductSection } from "./components/ProductSection";
import { StepsSection } from "./components/StepsSection";
import { OrderForm } from "./components/OrderForm";
import { TrustSection } from "./components/TrustSection";
import { FooterCTA } from "./components/FooterCTA";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="max-w-full overflow-hidden">
      <HeroSection />
      <ProductSection />
      <StepsSection />
      <OrderForm />
      <TrustSection />
      <FooterCTA />
      <FloatingWhatsApp />
    </div>
  );
}
