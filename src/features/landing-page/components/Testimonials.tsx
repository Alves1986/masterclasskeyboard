import type { TestimonialItem } from "@/types/landing";

const testimonials: TestimonialItem[] = [
  {
    name: "Rafael Mendes",
    role: "Streamer & Gamer Competitivo",
    content:
      "Depois do curso, montei meu primeiro custom build e a diferença é absurda. O som, o feeling... nunca mais volto para teclado de prateleira.",
    rating: 5,
  },
  {
    name: "Juliana Costa",
    role: "Desenvolvedora Full-Stack",
    content:
      "Como dev, passo 10+ horas digitando por dia. Os mods de som e a customização de layout mudaram completamente minha ergonomia e produtividade.",
    rating: 5,
  },
  {
    name: "André Oliveira",
    role: "Designer de Produto",
    content:
      "A parte de materiais e construção abriu minha cabeça. Agora entendo cada detalhe do que faz um teclado ser especial. Conteúdo de altíssima qualidade.",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-accent" : "text-neutral-700"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

/**
 * Seção de Prova Social — Depoimentos com design cinema/industrial.
 */
export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32 px-4">
      <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-accent text-sm font-medium tracking-[0.2em] uppercase">
            Prova Social
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Quem Já Vive Essa Experiência
          </h2>
          <p className="mt-4 text-neutral-400 max-w-xl mx-auto text-lg">
            Veja o que nossos alunos têm a dizer sobre a transformação.
          </p>
        </div>

        {/* Grid de depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative p-6 md:p-8 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm"
            >
              {/* Aspas decorativas */}
              <svg
                className="absolute top-5 right-5 w-8 h-8 text-accent/10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
              </svg>

              {/* Estrelas */}
              <StarRating rating={item.rating} />

              {/* Texto do depoimento */}
              <p className="mt-4 text-neutral-300 text-sm leading-relaxed">
                &ldquo;{item.content}&rdquo;
              </p>

              {/* Autor */}
              <div className="mt-6 flex items-center gap-3">
                {/* Avatar placeholder com iniciais */}
                <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-sm font-semibold">
                  {item.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{item.name}</p>
                  <p className="text-neutral-500 text-xs">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
