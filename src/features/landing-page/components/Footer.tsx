/**
 * Footer minimalista — links legais, selos de segurança e branding.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-16 pb-8 px-4">
      {/* Linha superior */}
      <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Grid superior */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Branding */}
          <div>
            <span className="text-white font-bold text-xl tracking-tight">
              Page<span className="text-accent">Keyboards</span>
            </span>
            <p className="mt-3 text-neutral-500 text-sm leading-relaxed max-w-xs">
              A referência definitiva em teclados mecânicos.
              Conhecimento premium para entusiastas exigentes.
            </p>
          </div>

          {/* Links legais */}
          <div>
            <h4 className="text-neutral-300 text-sm font-semibold uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Termos de Uso", href: "#" },
                { label: "Política de Privacidade", href: "#" },
                { label: "Política de Reembolso", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-neutral-500 text-sm hover:text-accent transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Selos de segurança */}
          <div>
            <h4 className="text-neutral-300 text-sm font-semibold uppercase tracking-wider mb-4">
              Segurança
            </h4>
            <div className="flex flex-wrap gap-3">
              {/* Selo SSL */}
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/5 bg-white/[0.02]">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
                <span className="text-neutral-400 text-xs font-medium">
                  SSL Seguro
                </span>
              </div>

              {/* Selo Checkout */}
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/5 bg-white/[0.02]">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
                <span className="text-neutral-400 text-xs font-medium">
                  Checkout Protegido
                </span>
              </div>

              {/* Selo Garantia */}
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/5 bg-white/[0.02]">
                <svg
                  className="w-5 h-5 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                </svg>
                <span className="text-neutral-400 text-xs font-medium">
                  7 Dias de Garantia
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="h-px bg-white/5 mb-6" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-neutral-600 text-xs">
            &copy; {currentYear} Page Keyboards. Todos os direitos reservados.
          </p>
          <p className="text-neutral-700 text-xs">
            Este site não faz parte do Google Inc. ou do Facebook Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
