'use client';

import Link from 'next/link';
import {
  Heart,
  Activity,
  Syringe,
  Scan,
  Zap,
  Stethoscope,
  Shield,
  Droplets,
  ArrowRight,
  CheckCircle2,
  LucideIcon,
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import SectionHeader from '@/components/SectionHeader';

interface Especialidade {
  icon: LucideIcon;
  title: string;
  slug: string;
  description: string;
  symptoms: string[];
  treatments: string[];
}

const especialidades: Especialidade[] = [
  {
    icon: Heart,
    title: 'Varizes',
    slug: 'varizes',
    description:
      'As varizes são veias dilatadas e tortuosas que surgem principalmente nos membros inferiores. O tratamento moderno inclui técnicas minimamente invasivas com excelentes resultados estéticos e funcionais.',
    symptoms: [
      'Veias visíveis e dilatadas',
      'Dor e peso nas pernas',
      'Inchaço nos tornozelos',
      'Câimbras noturnas',
      'Alterações na pele',
    ],
    treatments: [
      'Laser endovenoso (EVLA)',
      'Escleroterapia com espuma',
      'Microcirurgia de varizes',
      'Radiofrequência endovenosa',
    ],
  },
  {
    icon: Activity,
    title: 'Trombose Venosa',
    slug: 'trombose-venosa',
    description:
      'A trombose venosa profunda (TVP) é a formação de coágulos sanguíneos nas veias profundas. O diagnóstico precoce e tratamento adequado são fundamentais para evitar complicações graves.',
    symptoms: [
      'Inchaço súbito no membro',
      'Dor intensa na panturrilha',
      'Vermelhidão e calor local',
      'Endurecimento da pele',
      'Dificuldade para caminhar',
    ],
    treatments: [
      'Anticoagulação medicamentosa',
      'Trombolise guiada por cateter',
      'Filtro de veia cava',
      'Meias de compressão graduada',
    ],
  },
  {
    icon: Syringe,
    title: 'Escleroterapia',
    slug: 'escleroterapia',
    description:
      'Procedimento minimamente invasivo para tratamento de vasinhos (telangiectasias) e microvarizes. Consiste na injeção de substância esclerosante que fecha as veias doentes.',
    symptoms: [
      'Vasinhos vermelhos ou azulados',
      'Microvarizes visíveis',
      'Desconforto estético',
      'Queimação nas pernas',
      'Sensação de peso localizado',
    ],
    treatments: [
      'Escleroterapia convencional',
      'Escleroterapia com espuma (foam)',
      'Laser transdérmico',
      'Crioescleroterapia',
    ],
  },
  {
    icon: Scan,
    title: 'Doppler Vascular',
    slug: 'doppler-vascular',
    description:
      'Exame de ultrassom não invasivo que avalia o fluxo sanguíneo nas artérias e veias. Fundamental para o diagnóstico preciso de doenças vasculares e planejamento cirúrgico.',
    symptoms: [
      'Avaliação pré-operatória',
      'Dor nas pernas ao caminhar',
      'Feridas que não cicatrizam',
      'Inchaço persistente',
      'Acompanhamento de varizes',
    ],
    treatments: [
      'Ecodoppler venoso',
      'Ecodoppler arterial',
      'Mapeamento de varizes',
      'Avaliação de carótidas',
    ],
  },
  {
    icon: Zap,
    title: 'Cirurgia Vascular',
    slug: 'cirurgia-vascular',
    description:
      'Procedimentos cirúrgicos para correção de doenças vasculares complexas. Realizamos cirurgias convencionais e endovasculares com técnicas de última geração.',
    symptoms: [
      'Aneurismas arteriais',
      'Obstruções arteriais graves',
      'Úlceras vasculares crônicas',
      'Pé diabético avançado',
      'Malformações vasculares',
    ],
    treatments: [
      'Endarterectomia de carótida',
      'Revascularização de membros',
      'Correção de aneurisma',
      'Fístula arteriovenosa para diálise',
    ],
  },
  {
    icon: Stethoscope,
    title: 'Check-up Vascular',
    slug: 'check-up-vascular',
    description:
      'Avaliação completa da saúde vascular, com exames clínicos e de imagem para identificação precoce de doenças vasculares. Indicado especialmente para pacientes com fatores de risco.',
    symptoms: [
      'Histórico familiar de varizes',
      'Diabetes mellitus',
      'Hipertensão arterial',
      'Tabagismo',
      'Sedentarismo e obesidade',
    ],
    treatments: [
      'Exame clínico completo',
      'Ecodoppler arterial e venoso',
      'Índice tornozelo-braço',
      'Orientações preventivas',
    ],
  },
  {
    icon: Shield,
    title: 'Doença Arterial Periférica',
    slug: 'doenca-arterial-periferica',
    description:
      'A DAP é o estreitamento das artérias que levam sangue para as pernas. Pode causar dor ao caminhar (claudicação) e, em casos graves, risco de amputação.',
    symptoms: [
      'Dor ao caminhar (claudicação)',
      'Pés frios e pálidos',
      'Feridas que não cicatrizam',
      'Perda de pelos nas pernas',
      'Dor em repouso nos pés',
    ],
    treatments: [
      'Tratamento clínico otimizado',
      'Angioplastia com stent',
      'Revascularização cirúrgica',
      'Reabilitação vascular',
    ],
  },
  {
    icon: Droplets,
    title: 'Insuficiência Venosa Crônica',
    slug: 'insuficiencia-venosa-cronica',
    description:
      'Condição progressiva em que as veias não conseguem retornar o sangue adequadamente ao coração, levando a inchaço, alterações de pele e úlceras venosas.',
    symptoms: [
      'Inchaço persistente nas pernas',
      'Pele escurecida (hiperpigmentação)',
      'Eczema venoso',
      'Úlceras de estase venosa',
      'Sensação de peso crônico',
    ],
    treatments: [
      'Terapia compressiva',
      'Laser endovenoso',
      'Escleroterapia com espuma',
      'Tratamento de úlceras',
    ],
  },
];

export default function EspecialidadesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 gradient-vascular relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-accent-400 rounded-full blur-3xl" />
          <div className="absolute top-10 right-10 w-96 h-96 bg-primary-400 rounded-full blur-[120px]" />
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 bg-white/10 text-white/90 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/10">
              <Heart className="w-4 h-4 text-accent-300 animate-heartbeat" />
              Nossas Especialidades
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Tratamentos em{' '}
              <span className="text-accent-300">Cirurgia Vascular</span>
            </h1>
            <p className="text-primary-100/80 text-lg max-w-2xl">
              Conheça as principais áreas de atuação da Clínica Vasculart.
              Diagnósticos precisos e tratamentos modernos para a sua saúde vascular.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Lista de Especialidades */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          {especialidades.map((esp, index) => {
            const Icon = esp.icon;
            const isEven = index % 2 === 0;
            return (
              <AnimatedSection key={esp.slug} delay={0.1}>
                <div
                  className={`flex flex-col ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-12 items-center py-16 ${
                    index < especialidades.length - 1 ? 'border-b border-secondary-100' : ''
                  }`}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-accent-50 to-primary-50 rounded-2xl flex items-center justify-center border border-accent-100">
                        <Icon className="w-7 h-7 text-accent-600" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-800">
                        {esp.title}
                      </h2>
                    </div>
                    <p className="text-secondary-500 leading-relaxed mb-6">
                      {esp.description}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-sm font-bold text-accent-700 uppercase tracking-wider mb-3">
                          Sintomas e Indicações
                        </h3>
                        <ul className="space-y-2">
                          {esp.symptoms.map((s) => (
                            <li key={s} className="flex items-start gap-2 text-sm text-secondary-500">
                              <CheckCircle2 className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" />
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-primary-700 uppercase tracking-wider mb-3">
                          Tratamentos Disponíveis
                        </h3>
                        <ul className="space-y-2">
                          {esp.treatments.map((t) => (
                            <li key={t} className="flex items-start gap-2 text-sm text-secondary-500">
                              <Zap className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                              {t}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-full lg:w-80">
                    <div className="bg-gradient-to-br from-accent-50 via-primary-50 to-primary-100 rounded-2xl p-8 text-center border border-accent-100/50">
                      <Icon className="w-16 h-16 text-accent-600 mx-auto mb-4" />
                      <h3 className="font-serif font-bold text-primary-800 mb-2">
                        {esp.title}
                      </h3>
                      <p className="text-accent-600 text-sm mb-4">
                        Agende uma avaliação
                      </p>
                      <Link
                        href="/contato"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-accent-600 px-5 py-2.5 rounded-xl hover:bg-accent-700 transition-colors shadow-md"
                      >
                        Marcar consulta
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-vascular">
        <div className="container-custom text-center">
          <AnimatedSection>
            <Heart className="w-10 h-10 text-accent-300 mx-auto mb-4 animate-heartbeat" />
            <h2 className="text-3xl font-serif font-bold text-white mb-4">
              Precisa de uma Avaliação?
            </h2>
            <p className="text-primary-200 max-w-xl mx-auto mb-8">
              Entre em contato e agende sua consulta. O diagnóstico precoce é a
              melhor forma de prevenir complicações vasculares.
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
