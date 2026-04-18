"use client";

import { useMemo } from "react";
import type { TictoCheckoutButtonProps } from "@/types/landing";

/**
 * Botão de checkout Ticto reutilizável.
 * Design premium com efeito de pulso/glow para atrair cliques.
 * Aceita UTMs dinâmicos para rastreamento de campanhas.
 */
export default function TictoCheckoutButton({
  checkoutUrl,
  label = "QUERO GARANTIR O MEU",
  utmParams,
  size = "default",
  className = "",
}: TictoCheckoutButtonProps) {
  const finalUrl = useMemo(() => {
    if (!utmParams) return checkoutUrl;

    const url = new URL(checkoutUrl);
    const entries = Object.entries(utmParams) as [string, string | undefined][];

    entries.forEach(([key, value]) => {
      if (value) {
        url.searchParams.set(key, value);
      }
    });

    return url.toString();
  }, [checkoutUrl, utmParams]);

  const sizeClasses =
    size === "large"
      ? "px-12 py-5 text-lg md:text-xl"
      : "px-8 py-4 text-base md:text-lg";

  return (
    <a
      href={finalUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group relative inline-flex items-center justify-center
        ${sizeClasses}
        font-bold uppercase tracking-wider
        text-neutral-950 bg-accent
        rounded-lg cursor-pointer
        transition-all duration-300 ease-out
        hover:brightness-110 hover:scale-[1.02]
        active:scale-[0.98]
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950
        ${className}
      `}
    >
      {/* Glow pulsante atrás do botão */}
      <span className="absolute inset-0 rounded-lg bg-accent/40 blur-xl animate-cta-pulse -z-10" />

      {/* Reflexo sutil no topo */}
      <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

      {/* Texto do botão */}
      <span className="relative z-10 flex items-center gap-2">
        {label}
        <svg
          className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </span>
    </a>
  );
}
