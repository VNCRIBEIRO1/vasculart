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
    title: 'Cuidado Integral',
    desc: 'Acompanhamento completo do paciente, da prevenção ao pós-tratamento.',
  },
];

const formacao = [
  { year: '2008', title: 'Graduação em Medicina', institution: 'UNESP - Botucatu' },
  { year: '2011', title: 'Residência em Cirurgia Geral', institution: 'Hospital das Clínicas - FMUSP' },
  { year: '2013', title: 'Residência em Cirurgia Vascular', institution: 'Hospital das Clínicas - FMUSP' },
  { year: '2014', title: 'Fellowship em Cirurgia Endovascular', institution: 'Hospital Albert Einstein' },
  { year: '2015', title: 'Fundação do Instituto Vascular', institution: 'Presidente Prudente, SP' },
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
              Sobre o Instituto
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Conheça o{' '}
              <span className="text-primary-300">Dr. Ricardo Mendes</span>
            </h1>
            <p className="text-primary-100/80 text-lg max-w-2xl">
              Mais de 15 anos de experiência em Cirurgia Vascular e Angiologia,
              com formação nas melhores instituições do país.
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
                    alt="Dr. Ricardo Mendes - Cirurgião Vascular"
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
                  <p className="text-sm font-medium">4.9 no Google</p>
                  <p className="text-xs opacity-80">320+ avaliações</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="section-title">Nossa História</h2>
              <div className="space-y-4 text-secondary-500 leading-relaxed">
                <p>
                  O Instituto Vascular Prudente foi fundado pelo{' '}
                  <strong className="text-primary-800">Dr. Ricardo Augusto Mendes</strong>,
                  cirurgião vascular formado pela UNESP com residência no Hospital das
                  Clínicas da USP e fellowship no Hospital Albert Einstein.
                </p>
                <p>
                  Com mais de 15 anos de experiência, o Dr. Ricardo é membro titular da
                  Sociedade Brasileira de Angiologia e Cirurgia Vascular (SBACV) e
                  especialista em procedimentos minimamente invasivos.
                </p>
                <p>
                  A clínica conta com equipamentos de última geração para diagnóstico
                  por imagem, incluindo Ecodoppler Vascular de alta resolução, e
                  realiza procedimentos como laser endovenoso, escleroterapia com espuma
                  e cirurgias vasculares complexas.
                </p>
                <p>
                  Nosso compromisso é oferecer o melhor da medicina vascular moderna,
                  combinando tecnologia avançada com um atendimento humanizado e
                  personalizado para cada paciente.
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
              subtitle="Uma trajetória construída nas melhores instituições de saúde do Brasil."
            />
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            {formacao.map((item, index) => (
              <AnimatedSection key={item.year} delay={index * 0.1}>
                <div className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 bg-primary-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm">{item.year}</span>
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

      {/* Titulações */}
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
              'Membro Titular da Sociedade Brasileira de Angiologia e Cirurgia Vascular (SBACV)',
              'Especialista em Cirurgia Endovascular pelo MEC',
              'Fellowship em Cirurgia Vascular Minimamente Invasiva - Hospital Albert Einstein',
              'Residência em Cirurgia Vascular - Hospital das Clínicas da FMUSP',
              'CRM/SP 158.432 | RQE 72.891',
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

      {/* CTA */}
      <section className="py-16 gradient-medical">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="text-3xl font-serif font-bold text-white mb-4">
              Agende Sua Consulta
            </h2>
            <p className="text-primary-200 max-w-xl mx-auto mb-8">
              Cuide da sua saúde vascular com quem tem experiência e dedicação.
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
