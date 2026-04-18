"use client";

import { useState, useCallback } from "react";
import type { FaqItem } from "@/types/landing";

const faqData: FaqItem[] = [
  {
    question: "Para quem é este curso?",
    answer:
      "Para qualquer pessoa interessada em teclados mecânicos — desde iniciantes curiosos até entusiastas que querem dominar construções custom, mods de som e personalização avançada.",
  },
  {
    question: "Preciso ter conhecimento técnico prévio?",
    answer:
      "Não. O conteúdo foi estruturado progressivamente, começando do básico (tipos de switch, layouts) até temas avançados (firmware QMK, mods acústicos). Cada módulo tem exemplos práticos.",
  },
  {
    question: "Por quanto tempo tenho acesso ao conteúdo?",
    answer:
      "Acesso vitalício. Além disso, todas as atualizações futuras de módulos e materiais são incluídas sem custo adicional.",
  },
  {
    question: "Como funciona a garantia?",
    answer:
      "Você tem 7 dias de garantia incondicional. Se por qualquer motivo não ficar satisfeito, basta solicitar o reembolso integral — sem perguntas, sem burocracia.",
  },
  {
    question: "O pagamento é seguro?",
    answer:
      "Sim. O checkout é processado pela Ticto, plataforma certificada com criptografia SSL, antifraude avançado e conformidade PCI DSS. Seus dados estão 100% protegidos.",
  },
  {
    question: "Existe suporte para dúvidas?",
    answer:
      "Sim. No plano Pro Builder e Enterprise, você tem acesso à comunidade exclusiva e suporte prioritário. No plano Starter, o suporte é feito via comunidade geral.",
  },
];

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-white/5 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 md:py-6 text-left cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 rounded-lg"
        aria-expanded={isOpen}
      >
        <span className="text-white font-medium text-base md:text-lg pr-4 group-hover:text-accent transition-colors duration-200">
          {item.question}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? "bg-accent/10 border-accent/30 rotate-45"
              : "bg-white/[0.02] group-hover:border-accent/20"
          }`}
        >
          <svg
            className={`w-4 h-4 transition-colors duration-200 ${
              isOpen ? "text-accent" : "text-neutral-400"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </span>
      </button>

      {/* Conteúdo expansível */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 pb-5 md:pb-6" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-neutral-400 text-sm md:text-base leading-relaxed pr-12">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

/**
 * Seção FAQ com acordeão expansível — estilo industrial minimalista.
 */
export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <section id="faq" className="relative py-24 md:py-32 px-4">
      <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-accent text-sm font-medium tracking-[0.2em] uppercase">
            Dúvidas Frequentes
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Perguntas & Respostas
          </h2>
        </div>

        {/* Acordeão */}
        <div className="rounded-xl border border-white/5 bg-white/[0.01] backdrop-blur-sm p-4 md:p-6">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
