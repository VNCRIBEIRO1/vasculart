// ============================================================
// CONFIGURAÇÃO DA CLÍNICA — CLÍNICA VASCULART
// ============================================================

export const SITE_CONFIG = {
  // === DADOS DA CLÍNICA ===
  nome: 'Clínica Vasculart',
  nomeCompleto: 'Clínica Vasculart',
  nomeClinica: 'Clínica Vasculart — Angiologia e Cirurgia Vascular',
  razaoSocial: 'CLINICA VASCULART LTDA',
  cnpj: '11.739.298/0001-72',
  cnes: '6096514',
  alvaraSanitario: '354140616-863-001921-1-2',
  fundacao: '2009',

  // === MÉDICA RESPONSÁVEL ===
  medica: {
    nome: 'Dra. Fernanda Toreto',
    nomeCompleto: 'Dra. Fernanda Maria Bottino Vizzotto Toreto',
    especialidade: 'Angiologista | Cirurgiã Vascular | Professora Universitária',
    crm: 'CRM/SP 78575',
    rqe: 'RQE 41951',
    titulacao: [
      'Mestre em Ciências da Saúde — Unoeste',
      'Professora do Curso de Medicina — Unoeste',
      'Residência em Angiologia e Cirurgia Vascular — H. N. Sra. das Graças, Curitiba',
      'Residência em Cirurgia Geral — Fac. Medicina de Marília',
      'Graduação em Medicina — UEL, Londrina',
    ],
  },

  // === CONTATO ===
  telefone: '(18) 3222-8447',
  telefoneLink: '551832228447',
  celular: '(18) 99622-8447',
  celularLink: '5518996228447',
  whatsapp: '5518996228447',
  email: 'drafernandatoreto@gmail.com',

  // === ENDEREÇO ===
  endereco: {
    rua: 'Rua Donato Armelin, 326',
    complemento: 'Atrás da Santa Casa',
    bairro: 'Vila Euclides',
    cidade: 'Presidente Prudente',
    estado: 'SP',
    cep: '19013-810',
    completo:
      'Rua Donato Armelin, 326 — Vila Euclides, Presidente Prudente/SP — CEP 19013-810',
  },

  // === HORÁRIO ===
  horarios: [
    { dia: 'Segunda-Feira', horario: '08:00 – 18:00' },
    { dia: 'Terça-Feira', horario: '08:00 – 19:00' },
    { dia: 'Quarta-Feira', horario: '08:00 – 19:00' },
    { dia: 'Quinta-Feira', horario: '08:00 – 19:00' },
    { dia: 'Sexta-Feira', horario: '08:00 – 18:00' },
    { dia: 'Sábado', horario: 'Fechado' },
    { dia: 'Domingo', horario: 'Fechado' },
  ],
  horarioResumo: 'Seg e Sex: 08h–18h | Ter a Qui: 08h–19h',

  // === SITE / SEO ===
  dominio: 'https://clinica-ten-iota.vercel.app',
  site: 'www.vasculart.com.br',
  descricaoSite:
    'Clínica Vasculart — Angiologia e Cirurgia Vascular em Presidente Prudente, SP. Dra. Fernanda Vizzotto Toreto. Tratamento de varizes, escleroterapia, laser transdérmico, cirurgia vascular.',
  palavrasChave: [
    'angiologista Presidente Prudente',
    'cirurgiã vascular Presidente Prudente',
    'clínica vasculart',
    'tratamento de varizes',
    'escleroterapia',
    'laser transdérmico',
    'cirurgia vascular',
    'Dra Fernanda Toreto',
    'varizes Presidente Prudente',
    'angiologia',
  ],

  // === AVALIAÇÕES ===
  avaliacaoGoogle: '5',
  totalAvaliacoes: '289+',
  notaEsteticaGuia: '9.5',
  recomendacaoFacebook: '92%',
  seguidoresFacebook: '7.400+',

  // === CONVÊNIOS ===
  convenios: ['Particular', 'Unimed', 'Unoeste Saúde'],
  formasPagamento: 'Cartão de crédito, débito e NFC',

  // === HOSPITAIS VINCULADOS ===
  hospitais: [
    'Santa Casa de Presidente Prudente',
    'Hospital Iamada',
    'Unimed Mais Prudente',
    'HIU - Hospital Infantil Unimed',
    'Hospital Unimed',
    'Centro Médico Especializado Garcia',
  ],

  // === INFRAESTRUTURA ===
  infraestrutura: [
    'Acessibilidade total para cadeirantes',
    'Estacionamento gratuito no local e na rua',
    'Banheiro de gênero neutro',
    'Espaço inclusivo (LGBTQ+)',
    'Aceita cartão de crédito, débito e NFC',
    'Agendamento prévio recomendado',
  ],

  // === FORMAÇÃO ===
  formacao: [
    { year: '1987–1993', title: 'Graduação em Medicina', institution: 'Universidade Estadual de Londrina (UEL)' },
    { year: '1994–1996', title: 'Residência em Cirurgia Geral', institution: 'Faculdade de Medicina de Marília' },
    { year: '1996–1998', title: 'Residência em Angiologia e Cirurgia Vascular', institution: 'Hospital Nossa Senhora das Graças — Curitiba' },
    { year: '2009', title: 'Fundação da Clínica Vasculart', institution: 'Presidente Prudente, SP' },
    { year: '2015', title: 'Extensão Universitária em Medicina', institution: 'Unoeste' },
    { year: '2021–2023', title: 'Mestrado em Ciências da Saúde', institution: 'Universidade do Oeste Paulista (Unoeste)' },
  ],

  // === DEPOIMENTOS ===
  depoimentos: [
    {
      text: 'Dra. Fernanda é uma profissional incrível! Fez meu tratamento de varizes com muita competência e carinho. Recomendo de olhos fechados.',
      author: 'Patrícia M.',
      role: 'Paciente — Varizes',
    },
    {
      text: 'Atendimento humanizado e com total discrição. Me senti muito acolhida na Clínica Vasculart. Dra. Fernanda é extremamente atenciosa.',
      author: 'Luciana R.',
      role: 'Paciente — Escleroterapia',
    },
    {
      text: 'Depois de anos sofrendo com dores e inchaço nas pernas, finalmente encontrei o tratamento certo. Dra. Fernanda mudou minha qualidade de vida.',
      author: 'Maria A.',
      role: 'Paciente — Insuficiência Venosa',
    },
  ],

  // === REDES SOCIAIS ===
  instagram: 'https://instagram.com/clinicavasculart',
  facebook: 'https://facebook.com/ClinicaVasculart',
};
