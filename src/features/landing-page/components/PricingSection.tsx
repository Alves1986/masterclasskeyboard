import TictoCheckoutButton from "./TictoCheckoutButton";

const CHECKOUT_URL =
  process.env.NEXT_PUBLIC_TICTO_CHECKOUT_URL ??
  "https://pay.ticto.com.br/SEU_PRODUTO";

const features = [
  "Acesso vitalício a todas as aulas gravadas",
  "Módulo completo de Switches, Keycaps e Layouts",
  "Sound Design & Mods avançados",
  "Firmware QMK/VIA do zero",
  "Comunidade exclusiva de builders",
  "Atualizações gratuitas de conteúdo",
  "Certificado de conclusão",
  "Suporte via comunidade",
];

const guarantee = {
  days: 7,
  text: "Se por qualquer motivo você não gostar do curso, devolvemos 100% do seu dinheiro em até 7 dias após a compra — sem perguntas.",
};

/**
 * Seção de Oferta & Preço — Produto único com ancoragem de valor,
 * lista de benefícios, garantia e CTA Ticto.
 * Curso gravado com acesso vitalício.
 */
export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 md:py-32 px-4">
      <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Glow de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/5 rounded-full blur-[160px]" />

      <div className="relative max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-accent text-sm font-medium tracking-[0.2em] uppercase">
            Investimento
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Acesso Completo ao Curso
          </h2>
          <p className="mt-4 text-neutral-400 max-w-xl mx-auto text-lg">
            Uma única compra. Acesso vitalício. Estude no seu ritmo.
          </p>
        </div>

        {/* Card principal */}
        <div className="relative p-8 md:p-12 rounded-2xl border border-accent/30 bg-accent/[0.03] shadow-2xl shadow-accent/10">
          {/* Badge */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 rounded-full bg-accent text-neutral-950 text-xs font-bold uppercase tracking-widest whitespace-nowrap">
            🎬 Curso Gravado — Acesso Imediato
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            {/* Lista de benefícios */}
            <ul className="space-y-3 flex-1">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm">
                  <svg
                    className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-neutral-300">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Bloco de preço + CTA */}
            <div className="flex flex-col items-center gap-6 md:min-w-[240px]">
              {/* Preço com ancoragem */}
              <div className="text-center">
                <p className="text-neutral-500 text-sm line-through mb-1">
                  De R$697
                </p>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-neutral-400 text-xl font-medium mb-1">R$</span>
                  <span className="text-6xl font-extrabold text-white leading-none">
                    397
                  </span>
                </div>
                <p className="text-neutral-500 text-xs mt-2">
                  ou 12× de R$39,70 no cartão
                </p>
              </div>

              <TictoCheckoutButton
                checkoutUrl={CHECKOUT_URL}
                label="GARANTIR MINHA VAGA"
                size="large"
                className="w-full justify-center"
              />

              {/* Selos de segurança */}
              <div className="flex items-center gap-3 text-neutral-500 text-xs">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  Pagamento seguro
                </span>
                <span>•</span>
                <span>Acesso imediato</span>
              </div>
            </div>
          </div>

          {/* Garantia */}
          <div className="mt-8 pt-8 border-t border-white/5 flex items-start gap-4">
            <div className="flex-shrink-0 w-14 h-14 rounded-full border-2 border-accent/40 flex items-center justify-center text-2xl">
              🛡️
            </div>
            <div>
              <p className="text-white font-semibold text-sm">
                Garantia incondicional de {guarantee.days} dias
              </p>
              <p className="text-neutral-500 text-sm mt-1 leading-relaxed">
                {guarantee.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
