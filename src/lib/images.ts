// Mapeamento central de imagens — Clínica Vasculart
// Todas as imagens Unsplash são gratuitas (Unsplash License)
// Cada imagem foi selecionada para correlacionar com o tema vascular

export const IMAGES = {
  // Foto real da Dra. Fernanda Vizzotto Toreto (salva em public/images/)
  doctor: '/images/dra-fernanda.jpg',

  // Hero background — Instalação médica moderna, tons azul/teal
  hero: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1920&q=80',

  // Consultório / clínica moderna — estetoscópio sobre mesa, representando consulta vascular
  clinic: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=1200&q=80',

  // Equipamento médico — ultrassom / aparelhos de diagnóstico
  equipment: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80',

  // Consulta médica — médica com paciente em consultório
  consultation: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=1200&q=80',

  // Centro cirúrgico — equipe cirúrgica em procedimento vascular
  surgery: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80',
} as const;

// Imagens por especialidade — cada imagem correlaciona com o procedimento/doença
export const SPECIALTY_IMAGES: Record<string, string> = {
  // Varizes — Pernas com sintomas venosos / exame de membros inferiores
  'Varizes':
    'https://images.unsplash.com/photo-1559757175-7cb057fba93c?auto=format&fit=crop&w=800&q=80',

  // Trombose — Glóbulos vermelhos / sistema circulatório (representação de coágulo)
  'Trombose':
    'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80',
  'Trombose Venosa':
    'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80',

  // Cirurgia Vascular — Equipe cirúrgica em sala de operação
  'Cirurgia Vascular':
    'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80',

  // Insuficiência Venosa — Exame / consulta médica de pernas
  'Insuficiência Venosa':
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',

  // Escleroterapia — Seringa com luvas azuis (foto tagueada como varicose veins no Unsplash)
  'Escleroterapia':
    'https://images.unsplash.com/photo-1691935444200-1addcb8a1d66?auto=format&fit=crop&w=800&q=80',

  // Laser Transdérmico — Equipamento médico / dispositivo de laser
  'Laser Transdérmico':
    'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',

  // Doença Arterial — Modelo anatômico de coração / sistema arterial
  'Doença Arterial':
    'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&w=800&q=80',

  // Saúde Vascular — Médica com estetoscópio (saúde e diagnóstico)
  'Saúde Vascular':
    'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',

  // Prevenção — Pessoa praticando exercício / caminhada (prevenção vascular)
  'Prevenção':
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',

  // Aneurisma — Estetoscópio / exame cardiovascular
  'Aneurisma':
    'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80',

  // Doppler Vascular — Tela de equipamento de ultrassom / diagnóstico por imagem
  'Doppler Vascular':
    'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
};

// Imagens por categoria de blog — herda de SPECIALTY_IMAGES + extras
export const BLOG_IMAGES: Record<string, string> = {
  ...SPECIALTY_IMAGES,
  // Saúde geral — ambiente médico / bem-estar
  'Saúde':
    'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80',
};

// Imagem padrão (fallback) — tema médico genérico
export const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80';

// Helper
export function getCategoryImage(category: string): string {
  return BLOG_IMAGES[category] || SPECIALTY_IMAGES[category] || DEFAULT_IMAGE;
}
