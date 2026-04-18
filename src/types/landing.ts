/** Props do player de vídeo Vimeo */
export interface VimeoPlayerProps {
  /** ID do vídeo no Vimeo */
  videoId: string;
  /** Título do vídeo para acessibilidade */
  title?: string;
  /** Habilitar autoplay (sujeito a política do navegador) */
  autoplay?: boolean;
  /** Imagem de capa para fallback/loading */
  posterUrl?: string;
}

/** Props do botão de checkout Ticto */
export interface TictoCheckoutButtonProps {
  /** URL do checkout na Ticto */
  checkoutUrl: string;
  /** Texto do botão */
  label?: string;
  /** Parâmetros UTM opcionais para rastreamento */
  utmParams?: UtmParams;
  /** Variante de tamanho */
  size?: "default" | "large";
  /** Classes CSS adicionais */
  className?: string;
}

/** Parâmetros UTM para rastreamento de campanhas */
export interface UtmParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

/** Item de feature/benefício */
export interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

/** Item de depoimento */
export interface TestimonialItem {
  name: string;
  role: string;
  content: string;
  avatarUrl?: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

/** Plano de preço */
export interface PricingPlan {
  name: string;
  originalPrice: string;
  price: string;
  description: string;
  features: string[];
  highlighted: boolean;
  checkoutUrl: string;
}

/** Item de FAQ */
export interface FaqItem {
  question: string;
  answer: string;
}
