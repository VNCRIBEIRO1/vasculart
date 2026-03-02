import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Star,
  Phone,
  Clock,
  Users,
  Award,
  Stethoscope,
} from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import SectionHeader from '@/components/SectionHeader';
import ServiceCard from '@/components/AreaCard';
import TestimonialCard from '@/components/TestimonialCard';
import BlogCard from '@/components/BlogCard';
import AnimatedSection from '@/components/AnimatedSection';
import { IMAGES } from '@/lib/images';

const services = [
  {
    iconName: 'Heart',
    title: 'Varizes e Microvarizes',
    description:
      'Tratamento completo de varizes com técnicas modernas: laser endovenoso (EVLA), radiofrequência e escleroterapia. Procedimentos ambulatoriais com rápida recuperação.',
  },
  {
    iconName: 'Activity',
    title: 'Trombose Venosa',
    description:
      'Diagnóstico e tratamento urgente de trombose venosa profunda (TVP). Prevenção de embolia pulmonar com acompanhamento especializado.',
  },
  {
    iconName: 'Syringe',
    title: 'Escleroterapia',
    description:
      'Tratamento de vasinhos e microvarizes com injeção de substância esclerosante. Procedimento ambulatorial, rápido e com excelentes resultados estéticos.',
  },
  {
    iconName: 'Scan',
    title: 'Doppler Vascular',
    description:
      'Exame de ultrassonografia com Doppler para avaliação completa do sistema venoso e arterial. Diagnóstico preciso e não invasivo.',
  },
  {
    iconName: 'Zap',
    title: 'Cirurgia Vascular',
    description:
      'Procedimentos cirúrgicos e endovasculares para aneurismas, obstruções arteriais, varizes de grande calibre e outras patologias vasculares.',
  },
  {
    iconName: 'Stethoscope',
    title: 'Check-up Vascular',
    description:
      'Avaliação completa da saúde vascular com exames clínicos e de imagem. Prevenção e diagnóstico precoce de doenças circulatórias.',
  },
];

const testimonials = [
  {
    text: 'Fiz o tratamento de varizes com laser e o resultado superou minhas expectativas. Dr. Ricardo é extremamente atencioso e profissional.',
    author: 'Maria Helena Santos',
    role: 'Paciente - Varizes',
  },
  {
    text: 'Após anos sofrendo com dores nas pernas, finalmente encontrei o diagnóstico correto. O tratamento foi rápido e eficaz.',
    author: 'Carlos Eduardo Ferreira',
    role: 'Paciente - Insuficiência Venosa',
  },
  {
    text: 'Atendimento humanizado de verdade. Dr. Ricardo explica tudo com muita clareza e paciência. Me senti segura durante todo o tratamento.',
    author: 'Ana Paula Ribeiro',
    role: 'Paciente - Escleroterapia',
  },
];

const blogPosts = [
  {
    title: 'Varizes: Causas, Sintomas e Tratamentos Modernos',
    excerpt:
      'Entenda as causas das varizes, os sintomas de alerta e conheça os tratamentos minimamente invasivos disponíveis atualmente.',
    date: '25 Fev 2026',
    readTime: '7 min',
    slug: 'varizes-causas-tratamentos',
    category: 'Varizes',
  },
  {
    title: 'Trombose Venosa Profunda (TVP): Entenda os Riscos',
    excerpt:
      'Saiba o que é trombose venosa profunda, os fatores de risco, sintomas de alerta e a importância do diagnóstico precoce.',
    date: '20 Fev 2026',
    readTime: '6 min',
    slug: 'trombose-venosa-profunda',
    category: 'Trombose Venosa',
  },
  {
    title: 'Escleroterapia: Guia Completo Sobre o Procedimento',
    excerpt:
      'Tudo o que você precisa saber sobre escleroterapia: indicações, como funciona, resultados esperados e cuidados pós-procedimento.',
    date: '15 Fev 2026',
    readTime: '5 min',
    slug: 'escleroterapia-guia-completo',
    category: 'Escleroterapia',
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Especialidades */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection>
            <SectionHeader
              badge="Especialidades"
              title="Cuidado Completo Para Sua Saúde Vascular"
              subtitle="Diagnóstico avançado e tratamentos minimamente invasivos com as mais modernas técnicas da cirurgia vascular."
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                iconName={service.iconName}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
              />
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link href="/especialidades" className="btn-primary inline-flex items-center">
              Ver Todas as Especialidades
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Sobre - Prévia */}
      <section className="py-20 bg-secondary-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative">
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
              <span className="inline-block text-sm font-medium text-primary-700 bg-primary-50 px-4 py-1.5 rounded-full mb-4">
                Sobre o Instituto
              </span>
              <h2 className="section-title">
                Excelência em Cirurgia Vascular e Angiologia
              </h2>
              <p className="text-secondary-500 leading-relaxed mb-6">
                O Instituto Vascular Prudente é referência regional em diagnóstico e
                tratamento de doenças vasculares. Liderado pelo Dr. Ricardo Mendes,
                cirurgião vascular com mais de 15 anos de experiência, oferecemos
                atendimento humanizado com tecnologia de ponta.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  'Membro titular da SBACV',
                  'Equipamentos de última geração',
                  'Procedimentos minimamente invasivos',
                  'Atendimento humanizado e personalizado',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0" />
                    <span className="text-secondary-600">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/sobre" className="btn-primary">
                Conheça o Dr. Ricardo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-16 gradient-medical relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <pattern id="stats-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M40 0H0v40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#stats-grid)" />
          </svg>
        </div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Award, number: '15+', label: 'Anos de Experiência' },
              { icon: Users, number: '5.000+', label: 'Pacientes Atendidos' },
              { icon: Stethoscope, number: '8', label: 'Especialidades' },
              { icon: Star, number: '4.9', label: 'Avaliação Google' },
            ].map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1} className="text-center">
                <div className="flex justify-center mb-3">
                  <stat.icon className="w-8 h-8 text-primary-300" />
                </div>
                <p className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.number}</p>
                <p className="text-primary-200 text-sm">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection>
            <SectionHeader
              badge="Depoimentos"
              title="O Que Dizem Nossos Pacientes"
              subtitle="A satisfação e o bem-estar de nossos pacientes são nossa maior motivação."
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.author}
                text={testimonial.text}
                author={testimonial.author}
                role={testimonial.role}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-20 bg-secondary-50">
        <div className="container-custom">
          <AnimatedSection>
            <SectionHeader
              badge="Blog de Saúde"
              title="Artigos Sobre Saúde Vascular"
              subtitle="Conteúdo informativo sobre prevenção, diagnóstico e tratamento de doenças vasculares."
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={post.slug} {...post} delay={index * 0.1} />
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link href="/blog" className="btn-outline inline-flex items-center">
              Ver Todos os Artigos
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-primary-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent-500 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Cuide da Sua Saúde Vascular
            </h2>
            <p className="text-primary-200 text-lg max-w-2xl mx-auto mb-8">
              Agende sua consulta no Instituto Vascular Prudente. Diagnóstico
              preciso, tratamentos modernos e acompanhamento completo para sua
              saúde circulatória.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contato" className="btn-white text-base">
                Agende sua Consulta
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP || '5518996101884'}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline border-white/30 text-white hover:bg-white/10 text-base"
              >
                <Phone className="w-5 h-5 mr-2" />
                WhatsApp
              </a>
            </div>
            <div className="flex items-center justify-center gap-4 mt-8 text-primary-300/60 text-sm">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                Presidente Prudente, SP
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                Seg a Sex, 08h às 18h
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
