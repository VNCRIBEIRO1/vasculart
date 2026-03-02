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
    icon: Stethoscope,
    title: 'Inclusão',
    desc: 'Espaço acessível, inclusivo e acolhedor para todos os pacientes, sem distinção.',
  },
];

const formacao = [
  {
    year: '1987–93',
    title: 'Graduação em Medicina',
    institution: 'Universidade Estadual de Londrina (UEL)',
  },
  {
    year: '1994–96',
    title: 'Residência em Cirurgia Geral',
    institution: 'Hospital de Clínicas de Marília',
  },
  {
    year: '1996–98',
    title: 'Residência em Angiologia e Cirurgia Vascular',
    institution: 'Hospital Universitário Evangélico de Curitiba',
  },
  {
    year: '1998',
    title: 'Início em Presidente Prudente',
    institution: 'Centro Médico Garcia — desde 01/02/1998',
  },
  {
    year: '2009',
    title: 'Fundação da Clínica Vasculart',
    institution: 'CNES 6096514 — cadastrada em 14/01/2009',
  },
  {
    year: '2015',
    title: 'Extensão Universitária em Docência',
    institution: 'Universidade do Oeste Paulista (Unoeste)',
  },
  {
    year: '2018–22',
    title: 'Coordenação da Liga de Angiologia',
    institution: 'Faculdade de Medicina da Unoeste',
  },
  {
    year: '2021–23',
    title: 'Mestrado em Ciências da Saúde',
    institution: 'Unoeste — Dissertação sobre Aterogênese e Herbicidas',
  },
];

export default function SobrePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-72 h-72 bg-primary-400 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 bg-white/10 text-primary-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Stethoscope className="w-4 h-4" />
              Sobre a Clínica
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Conheça a{' '}
              <span className="text-primary-300">Dra. Fernanda Toreto</span>
            </h1>
            <p className="text-primary-100/80 text-lg max-w-2xl">
              Mais de 30 anos de experiência em Angiologia e Cirurgia Vascular.
              Mestre em Ciências da Saúde e Professora Universitária na Unoeste.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Sobre */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative">
                  <Image
                    src={IMAGES.doctor}
                    alt="Dra. Fernanda Toreto - Angiologista e Cirurgiã Vascular"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-6 rounded-xl shadow-xl">
                  <div className="flex items-center gap-1 mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-white text-white" />
                    ))}
                  </div>
                  <p className="text-sm font-medium">5★ no Google</p>
                  <p className="text-xs opacity-80">289+ avaliações</p>
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
                  Londrina (UEL), com residência em Cirurgia Geral em Marília e especialização
                  em Angiologia e Cirurgia Vascular em Curitiba.
                </p>
                <p>
                  Com mais de 30 anos de experiência, a Dra. Fernanda é{' '}
                  <strong className="text-primary-800">Mestre em Ciências da Saúde</strong> pela
                  Unoeste e docente da Faculdade de Medicina, onde coordenou a Liga
                  Acadêmica de Angiologia e Cirurgia Vascular entre 2018 e 2022.
                </p>
                <p>
                  A clínica é referência regional em procedimentos minimamente invasivos
                  como escleroterapia, espuma densa, laser transdérmico e laser
                  endovenoso, além de cirurgias vasculares complexas. Credenciada pela
                  Unimed e Unoeste Saúde, também atende pacientes particulares.
                </p>
                <p>
                  Com 5 estrelas no Google (289+ avaliações), a Vasculart se destaca pelo
                  atendimento humanizado, infraestrutura acessível e ambiente inclusivo.
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
                  <div className="card p-8 text-center h-full border border-secondary-100">
                    <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
                      <Icon className="w-8 h-8 text-primary-600" />
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

      {/* Formação */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection>
            <SectionHeader
              badge="Trajetória"
              title="Formação e Experiência"
              subtitle="Uma trajetória de mais de 30 anos dedicados à medicina vascular."
            />
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            {formacao.map((item, index) => (
              <AnimatedSection key={item.year} delay={index * 0.1}>
                <div className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-xs text-center leading-tight">
                        {item.year}
                      </span>
                    </div>
                    {index < formacao.length - 1 && (
                      <div className="w-0.5 flex-1 bg-primary-200 mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-lg font-serif font-bold text-primary-800 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-secondary-500 text-sm">{item.institution}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pesquisa e Congressos */}
      <section className="py-20 bg-secondary-50">
        <div className="container-custom">
          <AnimatedSection>
            <SectionHeader
              badge="Pesquisa Acadêmica"
              title="Produção Científica e Congressos"
              subtitle="Contribuição ativa para o avanço da medicina vascular no Brasil."
            />
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="card p-8 border border-secondary-100 mb-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-bold text-primary-800 mb-2">
                      Dissertação de Mestrado
                    </h3>
                    <p className="text-secondary-500 text-sm leading-relaxed">
                      &ldquo;Aterogênese Associada à Exposição Crônica Inalatória aos Herbicidas
                      Glifosato e Ácido Diclofenoxiacético (2,4-D) em Ratos Wistar&rdquo;
                    </p>
                    <p className="text-primary-600 text-xs mt-2 font-medium">
                      Unoeste — 2021 a 2023
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h3 className="text-xl font-serif font-bold text-primary-800 mb-6 text-center">
                Participação em Congressos Recentes
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { event: 'XXIII Encontro Paulista SBACV', year: '2025' },
                  { event: '45º Congresso Brasileiro de Angiologia e Cirurgia Vascular (CBACV)', year: '2024' },
                  { event: 'Venous Arterial Aesthetic Congress (VAAC)', year: '2023 e 2024' },
                  { event: 'Meeting SBACV Regional SP', year: '2023' },
                  { event: '37ª Jornada Vascular e Endovascular', year: '2022' },
                  { event: 'Atualizações em Angiologia e Cirurgia Vascular', year: '2022' },
                ].map((item, index) => (
                  <div
                    key={item.event}
                    className="flex items-center gap-3 bg-white p-4 rounded-xl border border-secondary-100 shadow-sm"
                  >
                    <Award className="w-5 h-5 text-primary-500 flex-shrink-0" />
                    <div>
                      <p className="text-secondary-600 text-sm font-medium">{item.event}</p>
                      <p className="text-primary-500 text-xs">{item.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Titulações */}
      <section className="py-20 bg-white">
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
              'Participação em Rede Globo (2012) e Band Mulher (2018)',
            ].map((titulo, index) => (
              <AnimatedSection key={titulo} delay={index * 0.05}>
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-secondary-100 shadow-sm">
                  <CheckCircle2 className="w-6 h-6 text-primary-500 flex-shrink-0" />
                  <p className="text-secondary-600 text-sm">{titulo}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Infraestrutura */}
      <section className="py-20 bg-secondary-50">
        <div className="container-custom">
          <AnimatedSection>
            <SectionHeader
              badge="Infraestrutura"
              title="Conforto e Acessibilidade"
              subtitle="Um espaço pensado para o bem-estar e a inclusão de todos os pacientes."
            />
          </AnimatedSection>

          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
            {[
              { icon: '♿', text: 'Acessibilidade para cadeirantes' },
              { icon: '🅿️', text: 'Estacionamento gratuito' },
              { icon: '🚻', text: 'Banheiro gênero neutro' },
              { icon: '🏳️‍🌈', text: 'Espaço LGBTQ+ inclusivo' },
              { icon: '💳', text: 'Cartão crédito, débito e NFC' },
              { icon: '🏥', text: '6 hospitais vinculados na região' },
            ].map((item) => (
              <AnimatedSection key={item.text}>
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-secondary-100 shadow-sm">
                  <span className="text-2xl">{item.icon}</span>
                  <p className="text-secondary-600 text-sm font-medium">{item.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-medical">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-serif font-bold text-white mb-4">
              Agende Sua Consulta
            </h2>
            <p className="text-primary-200 max-w-xl mx-auto mb-8">
              Cuide da sua saúde vascular com quem tem mais de 30 anos de
              experiência e dedicação.
            </p>
            <Link href="/contato" className="btn-white">
              Agendar Consulta
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
