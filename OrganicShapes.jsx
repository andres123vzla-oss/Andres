import React from "react";

export function OrganicShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      <div
        className="absolute rounded-full"
        style={{ top: "-80px", left: "-60px", width: "320px", height: "320px", background: "var(--blush-light)", opacity: 0.4 }}
      />
      <div
        className="absolute rounded-full"
        style={{ top: "200px", left: "20px", width: "140px", height: "140px", background: "var(--blush)", opacity: 0.15 }}
      />
      <svg
        className="absolute bottom-0 right-0 w-full"
        style={{ height: "300px", opacity: 0.12 }}
        viewBox="0 0 600 300"
        fill="none"
        preserveAspectRatio="none"
      >
        <path d="M600 300V80C520 140 400 20 300 80S80 200 0 160V300H600Z" fill="var(--rose)" />
      </svg>
      <svg
        className="absolute"
        style={{ bottom: "45%", left: "16px", width: "60px", height: "100px", opacity: 0.08 }}
        viewBox="0 0 60 100"
      >
        <path d="M30 100V20C30 20 5 35 5 60S30 100 30 100Z" fill="var(--cafe)" />
        <path d="M30 100V20C30 20 55 35 55 60S30 100 30 100Z" fill="var(--cafe)" opacity="0.7" />
      </svg>
    </div>
  );
}
