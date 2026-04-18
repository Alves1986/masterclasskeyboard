import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",      // Gera HTML estático (necessário para GitHub Pages)
  trailingSlash: true,   // Compatibilidade com GitHub Pages
  images: {
    unoptimized: true,   // GitHub Pages não tem servidor de imagens Next.js
  },
};

export default nextConfig;
