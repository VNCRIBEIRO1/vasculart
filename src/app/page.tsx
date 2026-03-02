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
  Heart,
  Tv,
  GraduationCap,
  Instagram,
  Facebook,
  ExternalLink,
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
      'Laser endovenoso (EVLA), radiofrequência e escleroterapia. Procedimentos ambulatoriais com rápida recuperação e resultados excelentes.',
  },
  {
    iconName: 'Activity',
    title: 'Trombose Venosa',
    description:
      'Diagnóstico e tratamento urgente de TVP e flebite. Prevenção de embolia pulmonar com acompanhamento especializado.',
  },
  {
    iconName: 'Syringe',
    title: 'Escleroterapia e Espuma Densa',
    description:
      'Tratamento de vasinhos e microvarizes com substância esclerosante e técnica de espuma densa. Resultados estéticos superiores.',
  },
  {
    iconName: 'Zap',
    title: 'Laser Transdérmico',
    description:
      'Tecnologia a laser para tratamento de vasinhos e telangiectasias. Procedimento rápido, preciso e minimamente invasivo.',
  },
  {
    iconName: 'Scan',
    title: 'Doppler Vascular',
    description:
      'Ecodoppler para avaliação completa do sistema venoso e arterial. Diagnóstico preciso e não invasivo.',
  },
  {
    iconName: 'Stethoscope',
    title: 'Cirurgia Vascular',
    description:
      'Cirurgia de varizes, aneurisma periférico, endarterectomia de carótidas e procedimentos endovasculares complexos.',
  },
];

const testimonials = [
  {
    text: 'Dra. Fernanda é uma profissional excepcional! Me atendeu com muita atenção e cuidado. Recomendo de olhos fechados a todos que precisam de um angiologista.',
    author: 'Sandra M.',
    role: 'Paciente — Varizes',
  },
  {
    text: 'Melhor clínica vascular de Prudente! A Dra. Fernanda explicou tudo com clareza e o tratamento foi excelente. Nota 10!',
    author: 'Roberto C.',
    role: 'Paciente — Escleroterapia',
  },
  {
    text: 'Profissional maravilhosa, atenciosa e competente. Me senti acolhida desde a primeira consulta. Ambiente muito agradável e equipe dedicada.',
    author: 'Luciana T.',
    role: 'Paciente — Check-up Vascular',
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

const mediaItems = [
  {
    icon: Tv,
    color: 'from-red-500 to-red-700',
    bgColor: 'bg-red-50',
    iconColor: 'text-red-600',
    tag: 'Rede Globo',
    year: '2012',
    title: '"Cuidando de suas Varizes"',
    description:
      'Reportagem especial sobre tratamento de varizes com participação da Clínica Vasculart. Publicada em novembro de 2012.',
    image: 'https://images.unsplash.com/photo-1766224242540-836020f0c64e?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: Tv,
    color: 'from-blue-500 to-blue-700',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
    tag: 'Band TV',
    year: '2018',
    title: 'Programa "Band Mulher"',
    description:
      'Dra. Fernanda entrevistada pela apresentadora Gisele Gontijo sobre inchaço nas pernas e nos pés (19/01/2018).',
    image: 'https://images.unsplash.com/photo-1602743297108-4c9061884285?auto=format&fit=crop&w=600&q=80',
  },
  {
    icon: GraduationCap,
    color: 'from-primary-500 to-primary-700',
    bgColor: 'bg-primary-50',
    iconColor: 'text-primary-600',
    tag: 'Unoeste',
    year: '2023',
    title: 'Docente e Pesquisadora',
    description:
      'Professora do Curso de Medicina. Mestre em Ciências da Saúde com dissertação sobre aterogênese e herbicidas.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80',
  },
];

const socialStats = [
  {
    icon: Star,
    label: 'Google',
    value: '5★',
    detail: '289+ avaliações',
    color: 'text-yellow-500',
  },
  {
    icon: Facebook,
    label: 'Facebook',
    value: '7.400+',
    detail: 'seguidores • 92% recomendação',
    color: 'text-blue-600',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@clinicavasculart',
    detail: 'Conteúdo educativo diário',
    color: 'text-pink-600',
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

      {/* Sobre — Prévia */}
      <section className="py-20 bg-secondary-50">
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
                {/* Badge Google Reviews */}
                <div className="absolute -bottom-5 -right-5 bg-white p-5 rounded-2xl shadow-xl border border-primary-100">
                  <div className="flex items-center gap-1 mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm font-bold text-primary-800">5★ no Google</p>
                  <p className="text-xs text-secondary-500">289+ avaliações</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 bg-primary-50 px-4 py-1.5 rounded-full mb-4">
                <Heart className="w-3.5 h-3.5 text-accent-500" />
                Sobre a Clínica
              </span>
              <h2 className="section-title">
                Referência em Angiologia e Cirurgia Vascular
              </h2>
              <p className="text-secondary-500 leading-relaxed mb-6">
                A Clínica Vasculart é referência em Presidente Prudente desde 2009.
                Liderada pela <strong className="text-primary-700">Dra. Fernanda Maria
                Bottino Vizzotto Toreto</strong>, Mestre em Ciências da Saúde e
                Professora da Unoeste, oferecemos tratamentos vasculares com
                tecnologia de ponta e atendimento humanizado.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  'Mestre em Ciências da Saúde (Unoeste)',
                  'Professora do Curso de Medicina da Unoeste',
                  'Credenciada Unimed e Unoeste Saúde',
                  'Laser, Espuma Densa, Escleroterapia e Cirurgia',
                  'Presença na Rede Globo e TV Band',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0" />
                    <span className="text-secondary-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/sobre" className="btn-primary">
                Conheça a Dra. Fernanda
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-16 gradient-medical relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-300 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-400 rounded-full blur-[120px]" />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Award, number: '30+', label: 'Anos de Experiência' },
              { icon: Heart, number: 'Desde 2009', label: 'Clínica Vasculart' },
              { icon: Star, number: '5★', label: 'Avaliação Google' },
              { icon: Users, number: '289+', label: 'Avaliações 5 Estrelas' },
            ].map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/10">
                    <stat.icon className="w-7 h-7 text-primary-300" />
                  </div>
                </div>
                <p className="text-3xl md:text-4xl font-bold text-white mb-1 font-serif">{stat.number}</p>
                <p className="text-primary-200/80 text-sm">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          PRESENÇA NA MÍDIA E DIGITAL
          ========================================== */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection>
            <SectionHeader
              badge="Na Mídia"
              title="Presença na Mídia e Digital"
              subtitle="Aparições em TV, redes sociais e presença digital consolidada da Clínica Vasculart e Dra. Fernanda Toreto."
            />
          </AnimatedSection>

          {/* Cards de Mídia TV/Acadêmico */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {mediaItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.tag + item.year} delay={index * 0.15}>
                  <div className="group card-elevated h-full flex flex-col">
                    {/* Imagem com overlay */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={`${item.tag} — ${item.title}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-60`} />
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-white text-xs font-bold uppercase tracking-wider">
                          {item.tag}
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-white text-xs font-bold">{item.year}</span>
                      </div>
                    </div>

                    {/* Conteúdo */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-lg font-serif font-bold text-primary-800 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-secondary-500 text-sm leading-relaxed flex-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          {/* Social Stats Bar */}
          <AnimatedSection>
            <div className="bg-gradient-to-r from-primary-50 via-white to-primary-50 rounded-3xl p-8 md:p-10 border border-primary-100">
              <h3 className="text-center text-xl font-serif font-bold text-primary-800 mb-8">
                Presença Digital
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {socialStats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="flex items-center gap-4 justify-center md:justify-start"
                    >
                      <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center flex-shrink-0 border border-secondary-100">
                        <Icon className={`w-6 h-6 ${stat.color}`} />
                      </div>
                      <div>
                        <p className="font-bold text-primary-800 text-lg">{stat.value}</p>
                        <p className="text-secondary-500 text-xs">{stat.detail}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-center gap-4 mt-8">
                <a
                  href="https://instagram.com/clinicavasculart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 hover:text-primary-900 transition-colors bg-white px-5 py-2.5 rounded-xl border border-primary-200 shadow-sm hover:shadow-md"
                >
                  <Instagram className="w-4 h-4" />
                  Seguir no Instagram
                  <ExternalLink className="w-3 h-3 opacity-50" />
                </a>
                <a
                  href="https://facebook.com/ClinicaVasculart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 hover:text-primary-900 transition-colors bg-white px-5 py-2.5 rounded-xl border border-primary-200 shadow-sm hover:shadow-md"
                >
                  <Facebook className="w-4 h-4" />
                  Curtir no Facebook
                  <ExternalLink className="w-3 h-3 opacity-50" />
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-secondary-50">
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
      <section className="py-20 bg-white">
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
          <div className="absolute top-10 right-10 w-72 h-72 bg-primary-400 rounded-full blur-[100px]" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent-500 rounded-full blur-[100px]" />
        </div>

        <div className="container-custom relative z-10 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-primary-200 border border-white/10 mb-6">
              <Heart className="w-4 h-4 text-accent-400 animate-heartbeat" />
              Clínica Vasculart
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Cuide da Sua Saúde Vascular
            </h2>
            <p className="text-primary-200 text-lg max-w-2xl mx-auto mb-8">
              Agende sua consulta na Clínica Vasculart. Diagnóstico preciso,
              tratamentos modernos e acompanhamento completo com quem tem mais de
              30 anos de experiência.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contato" className="btn-white text-base">
                Agende sua Consulta
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href="https://wa.me/5518996228447"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/20 text-white font-medium rounded-xl hover:bg-white/10 transition-all duration-300 text-base"
              >
                <Phone className="w-5 h-5 mr-2" />
                (18) 99622-8447
              </a>
            </div>
            <div className="flex items-center justify-center gap-4 mt-8 text-primary-300/60 text-sm">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                Rua Donato Armelin, 326 — Pres. Prudente
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                Seg a Sex, 08h às 19h
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
