// ============================================================
// EDITE AQUI: tudo que muda com frequência fica neste arquivo.
// ============================================================

// Número do WhatsApp com DDI + DDD, só dígitos. Ex.: 5554999998888
export const WHATSAPP_NUMBER = "5554000000000"; // TODO: trocar pelo número real

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Selos do topo. Só publique o que for verdade na operação.
export const HERO_BADGES = [
  { icon: "shield", title: "Garantia", sub: "de 90 dias" },
  { icon: "bolt", title: "Atendimento", sub: "rápido" },
  { icon: "truck", title: "Coleta e", sub: "entrega grátis" },
] as const;

export const SERVICES = [
  {
    id: "tela",
    title: "Troca de Tela",
    desc: "Tela nova, com qualidade, segurança e garantia.",
    image: "/images/servico-tela.png",
    message: "Olá! Quero um orçamento de TROCA DE TELA. Meu aparelho é: ",
  },
  {
    id: "bateria",
    title: "Troca de Bateria",
    desc: "Mais autonomia, segurança e o desempenho ideal para o seu celular.",
    image: "/images/servico-bateria.png",
    message: "Olá! Quero um orçamento de TROCA DE BATERIA. Meu aparelho é: ",
  },
  {
    id: "traseira",
    title: "Troca de Traseira",
    desc: "Traseira nova, acabamento perfeito e o visual do seu celular renovado.",
    image: "/images/servico-traseira.png",
    message: "Olá! Quero um orçamento de TROCA DE TRASEIRA. Meu aparelho é: ",
  },
  {
    id: "conector",
    title: "Reparo de Conector",
    desc: "Celular não carrega? Limpeza, reparo ou troca do conector de carga.",
    image: "/images/servico-conector.png",
    message: "Olá! Meu celular não está carregando direito. Meu aparelho é: ",
  },
  {
    id: "molhado",
    title: "Recuperação de Molhado",
    desc: "Caiu na água? Fazemos a desoxidação e recuperamos o seu celular.",
    image: "/images/servico-molhado.png",
    message: "Olá! Meu celular molhou e preciso de ajuda. Meu aparelho é: ",
  },
] as const;

// Blindagem: mesmos preços para iPhone e Android.
export const BLINDAGEM_PLANS = [
  {
    id: "tela",
    name: "Blindagem da Tela",
    items: ["Proteção da tela frontal", "Não altera o toque nem a nitidez"],
    cash: 200,
    card: 220,
    highlight: false,
    message: "Olá! Quero fazer a BLINDAGEM DA TELA (R$ 200). Meu aparelho é: ",
  },
  {
    id: "completa",
    name: "Blindagem Completa",
    items: ["Tela, traseira e lentes", "Mais resistência no dia a dia", "Não afeta a nitidez das câmeras"],
    cash: 350,
    card: 380,
    highlight: true,
    message: "Olá! Quero fazer a BLINDAGEM COMPLETA (R$ 350). Meu aparelho é: ",
  },
] as const;

export const TRUST_ITEMS = [
  { icon: "calendar", title: "+4 anos", sub: "em Vacaria" },
  { icon: "users", title: "Atendimento", sub: "direto com o técnico" },
  { icon: "badge", title: "Serviço com", sub: "garantia" },
  { icon: "pin", title: "Atendimento", sub: "em Vacaria/RS" },
] as const;

// Depoimentos: coloque SÓ avaliações reais (ex.: copiadas do Google).
// Enquanto a lista estiver vazia, a seção não aparece na página.
export const TESTIMONIALS: { text: string; name: string }[] = [];

// Link das avaliações no Google (opcional). Aparece se preenchido.
export const GOOGLE_REVIEWS_URL = "";
