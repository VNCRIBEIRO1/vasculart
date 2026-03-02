// Mapeamento central de imagens — Clínica Vasculart
// Imagens do Unsplash (uso gratuito) + foto da médica

export const IMAGES = {
  // Foto da Dra. Fernanda Vizzotto Toreto
  // Substitua pela foto real: salve em public/images/dra-fernanda.jpg e altere o path abaixo
  doctor: 'https://images.unsplash.com/public/images/dra-fernanda.jpg',

  // Hero background - Consultório médico moderno
  hero: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=1920&q=80',

  // Clínica / ambiente médico
  clinic: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',

  // Equipamentos médicos
  equipment: 'https://images.unsplash.com/photo-1551190822-a9ce113ac100?auto=format&fit=crop&w=1200&q=80',

  // Consulta médica (mulher médica com paciente)
  consultation: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=1200&q=80',

  // Procedimento médico
  surgery: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
} as const;

// Imagens por especialidade
export const SPECIALTY_IMAGES: Record<string, string> = {
  'Varizes':
    'https://images.unsplash.com/photo-1559757175-7cb057fba93c?auto=format&fit=crop&w=800&q=80',
  'Trombose':
    'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80',
  'Trombose Venosa':
    'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80',
  'Cirurgia Vascular':
    'https://images.unsplash.com/photo-1551190822-a9ce113ac100?auto=format&fit=crop&w=800&q=80',
  'Insuficiência Venosa':
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
  'Escleroterapia':
    'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=800&q=80',
  'Laser Transdérmico':
    'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
  'Doença Arterial':
    'https://images.unsplash.com/photo-1559757175-7cb057fba93c?auto=format&fit=crop&w=800&q=80',
  'Saúde Vascular':
    'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80',
  'Prevenção':
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
  'Aneurisma':
    'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80',
  'Doppler Vascular':
    'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
};

// Imagens por categoria de blog
export const BLOG_IMAGES: Record<string, string> = {
  ...SPECIALTY_IMAGES,
  'Saúde': 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80',
};

// Imagem padrão (fallback)
export const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80';

// Helper
export function getCategoryImage(category: string): string {
  return BLOG_IMAGES[category] || SPECIALTY_IMAGES[category] || DEFAULT_IMAGE;
}
