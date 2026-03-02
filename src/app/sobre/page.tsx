'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Stethoscope,
  GraduationCap,
  Award,
  Target,
  Heart,
  CheckCircle2,
  ArrowRight,
  Star,
  BookOpen,
  Users,
  Tv,
  Globe,
  Instagram,
  Facebook,
  Calendar,
  MapPin,
  LucideIcon,
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import SectionHeader from '@/components/SectionHeader';
import { IMAGES } from '@/lib/images';

const valores: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Heart,
    title: 'Humanização',
    desc: 'Cada paciente é tratado com empatia, respeito e atenção individualizada ao seu caso.',
  },
  {
    icon: Target,
    title: 'Precisão',
    desc: 'Diagnóstico detalhado com tecnologia de ponta para o planejamento ideal do tratamento.',
  },
  {
    icon: Award,
    title: 'Excelência',
    desc: 'Atualização constante e busca pelas melhores técnicas da cirurgia vascular moderna.',
  },
  {
    icon: Users,
    title: 'Inclusão',
    desc: 'Espaço acessível, inclusivo e acolhedor para todos os pacientes, sem distinção.',
  },
];

const timeline = [
  {
    year: '1987–1993',
    title: 'Graduação em Medicina',
    desc: 'Universidade Estadual de Londrina (UEL)',
    type: 'academic',
  },
  {
    year: '1994–1996',
    title: 'Residência em Cirurgia Geral',
    desc: 'Faculdade de Medicina de Marília',
    type: 'academic',
  },
  {
    year: '1996–1998',
    title: 'Residência em Angiologia e Cirurgia Vascular',
    desc: 'Hospital Nossa Senhora das Graças, Curitiba. Título de Especialista.',
    type: 'academic',
  },
  {
    year: '1998',
    title: 'Início em Presidente Prudente',
    desc: 'Começa a atender no Centro Médico Especializado Garcia em 01/02/1998.',
    type: 'career',
  },
  {
    year: '2009',
    title: 'Fundação da Clínica Vasculart',
    desc: 'CNES 6096514 cadastrado em 14/01/2009. Rua Donato Armelin, 326, Vila Euclides.',
    type: 'milestone',
  },
  {
    year: '2012',
    title: '📺 Reportagem na Rede Globo',
    desc: '"Cuidando de suas Varizes" — Reportagem sobre tratamento de varizes com participação da Clínica Vasculart.',
    type: 'media',
  },
  {
    year: '2014',
    title: '🌐 Presença Digital Consolidada',
    desc: 'Site vasculart.com.br arquivado no Wayback Machine. Clínica presente nas redes sociais.',
    type: 'digital',
  },
  {
    year: '2015',
    title: 'Extensão em Docência',
    desc: 'Extensão Universitária em Docência no Ensino Superior pela Unoeste.',
    type: 'academic',
  },
  {
    year: '2018',
    title: '📺 Entrevista na TV Band',
    desc: 'Programa "Band Mulher" — Entrevista com Gisele Gontijo sobre inchaço nas pernas e pés (19/01/2018).',
    type: 'media',
  },
  {
    year: '2018–2022',
    title: '🎓 Liga de Angiologia — Unoeste',
    desc: 'Coordena a Liga Acadêmica de Angiologia e Cirurgia Vascular, formando novos especialistas.',
    type: 'academic',
  },
  {
    year: '2021',
    title: 'Início do Mestrado',
    desc: 'Mestrado em Ciências da Saúde na Unoeste. Organiza o I Workshop de Gerenciamento de Lesão Venosa.',
    type: 'academic',
  },
  {
    year: '2023',
    title: '🎓 Título de Mestre',
    desc: 'Dissertação: "Aterogênese Associada à Exposição Crônica Inalatória aos Herbicidas Glifosato e 2,4-D em Ratos Wistar".',
    type: 'milestone',
  },
  {
    year: '2025',
    title: 'Alvará Renovado e Congressos',
    desc: 'Alvará sanitário renovado em 21/07/2025. Participação no XXIII Encontro SP de Cirurgia Vascular.',
    type: 'career',
  },
];

function getTimelineColor(type: string) {
  switch (type) {
    case 'media':
      return 'from-red-500 to-red-600';
    case 'milestone':
      return 'from-accent-500 to-accent-600';
    case 'digital':
      return 'from-blue-500 to-blue-600';
    case 'academic':
      return 'from-primary-500 to-primary-700';
    default:
      return 'from-accent-600 to-primary-700';
  }
}

export default function SobrePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 gradient-vascular relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-96 h-96 bg-primary-400 rounded-full blur-[120px]" />
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 bg-white/10 text-primary-200 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/10">
              <Heart className="w-4 h-4 text-accent-400 animate-heartbeat" />
              Sobre a Clínica
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Conheça a{' '}
              <span className="text-primary-300">Dra. Fernanda Toreto</span>
            </h1>
            <p className="text-primary-100/80 text-lg max-w-2xl">
              Angiologista, Cirurgiã Vascular, Mestre em Ciências da Saúde e
              Professora Universitária. Mais de 30 anos dedicados à medicina vascular.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Sobre — Foto + História */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="photo-frame aspect-[4/5]">
                  <Image
                    src={IMAGES.doctor}
                    alt="Dra. Fernanda Vizzotto Toreto — Angiologista e Cirurgiã Vascular"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Badge flutuante - Credenciais */}
                <div className="absolute -bottom-5 -right-5 bg-white p-5 rounded-2xl shadow-xl border border-primary-100">
                  <div className="flex items-center gap-1 mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm font-bold text-primary-800">5★ no Google</p>
                  <p className="text-xs text-secondary-500">289+ avaliações</p>
                </div>

                {/* Badge flutuante - CRM */}
                <div className="absolute -top-3 -left-3 bg-white px-4 py-2.5 rounded-xl shadow-lg border border-accent-200">
                  <p className="text-xs font-bold text-accent-700">CRM/SP 78575</p>
                  <p className="text-[10px] text-secondary-500">RQE 41951</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="section-title">Nossa História</h2>
              <div className="space-y-4 text-secondary-500 leading-relaxed">
                <p>
                  A Clínica Vasculart foi fundada em <strong className="text-primary-800">2009</strong> pela{' '}
                  <strong className="text-primary-800">Dra. Fernanda Maria Bottino Vizzotto Toreto</strong>,
                  angiologista e cirurgiã vascular formada pela Universidade Estadual de
                  Londrina (UEL), com residência em Cirurgia Geral em Marília e
                  especialização em Angiologia e Cirurgia Vascular em Curitiba.
                </p>
                <p>
                  Com mais de 30 anos de experiência, a Dra. Fernanda é{' '}
                  <strong className="text-primary-800">Mestre em Ciências da Saúde</strong> pela
                  Unoeste e docente da Faculdade de Medicina, onde coordenou a Liga
                  Acadêmica de Angiologia e Cirurgia Vascular entre 2018 e 2022.
                </p>
                <p>
                  A clínica é referência regional em procedimentos como escleroterapia,
                  espuma densa, laser transdérmico, laser endovenoso e cirurgias
                  vasculares complexas. Com presença na <strong className="text-primary-800">Rede
                  Globo</strong> e <strong className="text-primary-800">TV Band</strong>, a Dra.
                  Fernanda é reconhecida pela comunidade médica e seus pacientes.
                </p>
                <p>
                  Com <strong className="text-primary-800">5 estrelas no Google</strong> (289+ avaliações),
                  7.400+ seguidores no Facebook e presença ativa no Instagram, a Vasculart
                  se destaca pelo atendimento humanizado e excelência clínica.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-secondary-50">
        <div className="container-custom">
          <AnimatedSection>
            <SectionHeader
              badge="Nossos Valores"
              title="Princípios que Nos Guiam"
              subtitle="Cada atendimento é guiado por valores sólidos que refletem nosso compromisso com a saúde dos pacientes."
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valores.map((valor, index) => {
              const Icon = valor.icon;
              return (
                <AnimatedSection key={valor.title} delay={index * 0.1}>
                  <div className="card-glass p-8 text-center h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent-50 to-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-sm border border-accent-100/50">
                      <Icon className="w-8 h-8 text-accent-600" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-primary-800 mb-3">
                      {valor.title}
                    </h3>
                    <p className="text-secondary-500 text-sm">{valor.desc}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
          PRESENÇA NA MÍDIA
          ========================================== */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection>
            <SectionHeader
              badge="Na Mídia"
              title="Presença na Mídia e Digital"
              subtitle="Aparições em TV, redes sociais e presença digital consolidada da Clínica Vasculart."
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Globo */}
            <AnimatedSection>
              <div className="group card-elevated h-full">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1766224242540-836020f0c64e?auto=format&fit=crop&w=800&q=80"
                    alt="Reportagem Rede Globo — Clínica Vasculart"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 via-red-800/40 to-transparent" />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <Tv className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white text-xs font-bold uppercase tracking-wider">Rede Globo</p>
                      <p className="text-white/70 text-[10px]">Novembro 2012</p>
                    </div>
                  </div>
                  {/* Play button visual */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30 group-hover:bg-white/30 transition-colors">
                      <div className="w-0 h-0 border-l-[20px] border-l-white border-y-[12px] border-y-transparent ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-primary-800 mb-2">
                    &ldquo;Cuidando de suas Varizes&rdquo;
                  </h3>
                  <p className="text-secondary-500 text-sm leading-relaxed">
                    Reportagem especial sobre o tratamento de varizes com participação
                    da Clínica Vasculart. Cobertura ampla sobre procedimentos modernos
                    e cuidados com a saúde vascular.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Band */}
            <AnimatedSection delay={0.15}>
              <div className="group card-elevated h-full">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1602743297108-4c9061884285?auto=format&fit=crop&w=800&q=80"
                    alt="Entrevista TV Band — Dra. Fernanda Toreto"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-800/40 to-transparent" />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <Tv className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white text-xs font-bold uppercase tracking-wider">Band TV</p>
                      <p className="text-white/70 text-[10px]">Janeiro 2018</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30 group-hover:bg-white/30 transition-colors">
                      <div className="w-0 h-0 border-l-[20px] border-l-white border-y-[12px] border-y-transparent ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-primary-800 mb-2">
                    Programa &ldquo;Band Mulher&rdquo;
                  </h3>
                  <p className="text-secondary-500 text-sm leading-relaxed">
                    Dra. Fernanda Vizzotto Toreto entrevistada pela apresentadora
                    Gisele Gontijo sobre inchaço nas pernas e nos pés, causas e
                    tratamentos disponíveis.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Redes Sociais Stats */}
          <AnimatedSection>
            <div className="grid sm:grid-cols-3 gap-6">
              {/* Google */}
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-200/50 text-center">
                <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-yellow-500" />
                </div>
                <p className="text-3xl font-serif font-bold text-primary-800">5★</p>
                <p className="text-sm font-medium text-secondary-600 mt-1">Google Avaliações</p>
                <p className="text-xs text-secondary-500 mt-1">289+ avaliações verificadas</p>
              </div>

              {/* Facebook */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200/50 text-center">
                <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center mx-auto mb-4">
                  <Facebook className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-3xl font-serif font-bold text-primary-800">7.400+</p>
                <p className="text-sm font-medium text-secondary-600 mt-1">Seguidores</p>
                <p className="text-xs text-secondary-500 mt-1">92% de recomendação • 35 avaliações</p>
              </div>

              {/* Instagram */}
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 border border-pink-200/50 text-center">
                <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center mx-auto mb-4">
                  <Instagram className="w-6 h-6 text-pink-600" />
                </div>
                <p className="text-lg font-serif font-bold text-primary-800">@clinicavasculart</p>
                <p className="text-sm font-medium text-secondary-600 mt-1">Perfil Ativo</p>
                <p className="text-xs text-secondary-500 mt-1">Laser • Espuma • Cirurgia • Dicas</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ==========================================
          TIMELINE COMPLETA
          ========================================== */}
      <section className="py-20 bg-secondary-50">
        <div className="container-custom">
          <AnimatedSection>
            <SectionHeader
              badge="Trajetória"
              title="Linha do Tempo"
              subtitle="De 1987 a 2025 — mais de 30 anos de dedicação à medicina vascular, ensino e pesquisa."
            />
          </AnimatedSection>

          <div className="max-w-3xl mx-auto relative">
            {/* Linha central vertical */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-primary-400 to-primary-200 md:-translate-x-px" />

            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <AnimatedSection key={item.year + item.title} delay={index * 0.05}>
                  <div className={`relative flex items-start gap-6 mb-10 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}>
                    {/* Dot */}
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                      <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${getTimelineColor(item.type)} shadow-lg ring-4 ring-secondary-50`} />
                    </div>

                    {/* Content */}
                    <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
                      isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8'
                    }`}>
                      <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-2 bg-gradient-to-r ${getTimelineColor(item.type)} text-white`}>
                        {item.year}
                      </span>
                      <h3 className="text-base font-serif font-bold text-primary-800 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-secondary-500 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Congressos */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection>
            <SectionHeader
              badge="Pesquisa"
              title="Produção Científica e Congressos"
              subtitle="Contribuição ativa para o avanço da medicina vascular no Brasil."
            />
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            {/* Dissertação */}
            <AnimatedSection>
              <div className="bg-gradient-to-r from-primary-50 to-primary-100/50 rounded-3xl p-8 mb-10 border border-primary-200/50">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-7 h-7 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary-600 uppercase tracking-wider mb-1">
                      Dissertação de Mestrado — 2023
                    </p>
                    <h3 className="text-lg font-serif font-bold text-primary-800 mb-2">
                      &ldquo;Aterogênese Associada à Exposição Crônica Inalatória aos
                      Herbicidas Glifosato e Ácido Diclofenoxiacético (2,4-D) em Ratos Wistar&rdquo;
                    </h3>
                    <p className="text-secondary-500 text-sm">
                      Universidade do Oeste Paulista (Unoeste) — Programa de Mestrado em
                      Ciências da Saúde
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Congressos Grid */}
            <AnimatedSection delay={0.1}>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { event: 'XXIII Encontro Paulista SBACV', year: '2025' },
                  { event: '45º Congresso Brasileiro de Angiologia e Cirurgia Vascular (CBACV)', year: '2024' },
                  { event: 'Venous Arterial Aesthetic Congress (VAAC)', year: '2023 e 2024' },
                  { event: 'Meeting SBACV Regional SP', year: '2023' },
                  { event: '37ª Jornada Vascular e Endovascular', year: '2022' },
                  { event: 'I Workshop Gerenciamento de Lesão Venosa', year: '2021 — Organizado pela Dra. Fernanda' },
                ].map((item) => (
                  <div
                    key={item.event}
                    className="flex items-center gap-3 bg-white p-4 rounded-xl border border-secondary-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 bg-accent-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-accent-500" />
                    </div>
                    <div>
                      <p className="text-secondary-700 text-sm font-medium">{item.event}</p>
                      <p className="text-primary-500 text-xs">{item.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Credenciais */}
      <section className="py-20 bg-secondary-50">
        <div className="container-custom">
          <AnimatedSection>
            <SectionHeader
              badge="Credenciais"
              title="Títulos e Certificações"
              subtitle="Reconhecimento das principais entidades da medicina vascular."
            />
          </AnimatedSection>

          <div className="max-w-3xl mx-auto grid gap-4">
            {[
              'CRM/SP 78575 | RQE 41951',
              'Mestre em Ciências da Saúde — Unoeste (2023)',
              'Especialista em Angiologia e Cirurgia Vascular',
              'Docente da Faculdade de Medicina da Unoeste',
              'Coordenadora da Liga de Angiologia e Cirurgia Vascular (2018–2022)',
              'Credenciada Unimed Prudente e Unoeste Saúde',
              'Reportagem na Rede Globo (2012) e Entrevista na TV Band (2018)',
              'Presença digital desde 2014 — 34+ capturas Wayback Machine',
            ].map((titulo, index) => (
              <AnimatedSection key={titulo} delay={index * 0.05}>
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-secondary-100 shadow-sm">
                  <CheckCircle2 className="w-6 h-6 text-accent-500 flex-shrink-0" />
                  <p className="text-secondary-600 text-sm">{titulo}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Infraestrutura */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection>
            <SectionHeader
              badge="Infraestrutura"
              title="Conforto e Acessibilidade"
              subtitle="Um espaço pensado para o bem-estar e a inclusão de todos os pacientes."
            />
          </AnimatedSection>

          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { emoji: '♿', title: 'Acessibilidade', desc: 'Acesso para cadeirantes em todos os ambientes' },
              { emoji: '🅿️', title: 'Estacionamento', desc: 'Estacionamento gratuito para pacientes' },
              { emoji: '🚻', title: 'Banheiro Neutro', desc: 'Banheiro gênero neutro disponível' },
              { emoji: '🏳️‍🌈', title: 'Inclusão LGBTQ+', desc: 'Espaço acolhedor e inclusivo para todos' },
              { emoji: '💳', title: 'Pagamento', desc: 'Crédito, débito e NFC (aproximação)' },
              { emoji: '🏥', title: 'Hospitais', desc: '6 hospitais vinculados na região' },
            ].map((item) => (
              <AnimatedSection key={item.title}>
                <div className="card-glass p-6 text-center h-full">
                  <span className="text-4xl mb-4 block">{item.emoji}</span>
                  <h3 className="font-serif font-bold text-primary-800 mb-1">{item.title}</h3>
                  <p className="text-secondary-500 text-sm">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-vascular">
        <div className="container-custom text-center">
          <AnimatedSection>
            <Heart className="w-10 h-10 text-primary-300 mx-auto mb-4 animate-heartbeat" />
            <h2 className="text-3xl font-serif font-bold text-white mb-4">
              Agende Sua Consulta
            </h2>
            <p className="text-primary-200 max-w-xl mx-auto mb-8">
              Cuide da sua saúde vascular com quem tem mais de 30 anos de
              experiência, presença acadêmica e reconhecimento na mídia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contato" className="btn-white">
                Agendar Consulta
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href="https://wa.me/5518996228447"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/20 text-white font-medium rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Rua Donato Armelin, 326
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
