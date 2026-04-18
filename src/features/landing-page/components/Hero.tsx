import VimeoPlayer from "./VimeoPlayer";
import TictoCheckoutButton from "./TictoCheckoutButton";

/**
 * Hero Section — Primeira impressão da landing page.
 * Headline impactante, sub-headline, VSL do Vimeo e CTA principal.
 */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 overflow-hidden"
    >
      {/* Grades de fundo industriais */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Glow radial sutil */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        {/* Badge de urgência */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-accent text-sm font-medium tracking-wide uppercase">
            Vagas Limitadas
          </span>
        </div>

        {/* Headline principal */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
          <span className="text-white">
            Domine a Arte dos{" "}
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-light to-accent">
            Teclados Mecânicos
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          O método definitivo para transformar sua experiência de digitação.
          Descubra como escolher, personalizar e otimizar o teclado perfeito
          para o seu estilo.
        </p>

        {/* VSL — Video Sales Letter */}
        <div className="mt-8">
          <VimeoPlayer
            videoId={process.env.NEXT_PUBLIC_VIMEO_VIDEO_ID ?? "YOUR_VIMEO_ID"}
            title="Page Keyboards - Apresentação"
            autoplay={false}
          />
        </div>

        {/* CTA principal */}
        <div className="mt-10 flex flex-col items-center gap-4">
          <TictoCheckoutButton
            checkoutUrl={process.env.NEXT_PUBLIC_TICTO_CHECKOUT_URL ?? "https://pay.ticto.com.br/SEU_PRODUTO"}
            label="QUERO GARANTIR O MEU"
            size="large"
          />
          <p className="text-neutral-500 text-sm flex items-center gap-2">
            <svg
              className="w-4 h-4 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Compra 100% segura • Garantia de 7 dias
          </p>
        </div>
      </div>

      {/* Gradiente inferior para transição suave */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-950 to-transparent" />
    </section>
  );
}
