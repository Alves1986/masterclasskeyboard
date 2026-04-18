"use client";

import { useState, useCallback } from "react";
import type { VimeoPlayerProps } from "@/types/landing";

/**
 * Player Vimeo responsivo com fallback de carregamento elegante.
 * Suporte a autoplay, controles ocultos e lazy loading.
 */
export default function VimeoPlayer({
  videoId,
  title = "Video Sales Letter",
  autoplay = false,
  posterUrl,
}: VimeoPlayerProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
  }, []);

  /* Parâmetros Vimeo:
     - background=0: Mantém controles mínimos
     - autopause=0: Não pausa em scroll
     - autoplay: Controlado via prop
     - title=0, byline=0, portrait=0: Oculta info desnecessária
  */
  const vimeoSrc = `https://player.vimeo.com/video/${videoId}?autopause=0&title=0&byline=0&portrait=0&controls=1${autoplay ? "&autoplay=1&muted=1" : ""}`;

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Glow de fundo */}
      <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 via-accent/5 to-accent/20 rounded-2xl blur-xl opacity-60" />

      {/* Container com aspect ratio 16:9 */}
      <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-neutral-950 shadow-2xl shadow-accent/5">
        {/* Skeleton de carregamento */}
        {!isLoaded && !hasError && (
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            {posterUrl ? (
              <img
                src={posterUrl}
                alt={title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 animate-pulse flex items-center justify-center">
                {/* Ícone de play animado */}
                <div className="relative">
                  <div className="w-20 h-20 rounded-full border-2 border-accent/40 flex items-center justify-center backdrop-blur-sm bg-white/5">
                    <svg
                      className="w-8 h-8 text-accent ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 rounded-full border-2 border-accent/20 animate-ping" />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Estado de erro */}
        {hasError && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-neutral-950 gap-3">
            <svg
              className="w-12 h-12 text-neutral-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-neutral-400 text-sm">
              Erro ao carregar o vídeo
            </p>
          </div>
        )}

        {/* Iframe do Vimeo com lazy loading */}
        <iframe
          src={vimeoSrc}
          title={title}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={handleLoad}
          onError={handleError}
        />
      </div>
    </div>
  );
}
