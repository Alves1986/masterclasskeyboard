import type { Metadata } from "next";
import { Bodoni_Moda, Jost } from "next/font/google";
import "./globals.css";

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});


export const metadata: Metadata = {
  title: "Page Keyboards — Domine a Arte dos Teclados Mecânicos",
  description:
    "O método definitivo para transformar sua experiência de digitação. Aprenda a escolher, personalizar e otimizar teclados mecânicos como um profissional.",
  keywords: [
    "teclados mecânicos",
    "keyboard custom",
    "switches",
    "keycaps",
    "QMK",
    "VIA",
    "Page Keyboards",
  ],
  openGraph: {
    title: "Page Keyboards — Domine a Arte dos Teclados Mecânicos",
    description:
      "O método definitivo para transformar sua experiência de digitação.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`dark ${bodoniModa.variable} ${jost.variable}`}>
      <body className="min-h-screen bg-[#0A0A0A] text-white antialiased">
        {children}
      </body>
    </html>
  );
}

