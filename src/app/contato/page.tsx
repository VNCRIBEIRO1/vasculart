'use client';

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Stethoscope,
  MessageCircle,
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import SectionHeader from '@/components/SectionHeader';
import ContactForm from '@/components/ContactForm';
import { SITE_CONFIG } from '@/lib/site-config';

const infoCards = [
  {
    icon: MapPin,
    title: 'Endereço',
    lines: [SITE_CONFIG.endereco.rua, `${SITE_CONFIG.endereco.complemento}`, `${SITE_CONFIG.endereco.cidade} - ${SITE_CONFIG.endereco.estado}`, `CEP: ${SITE_CONFIG.endereco.cep}`],
  },
  {
    icon: Phone,
    title: 'Telefone',
    lines: [SITE_CONFIG.telefone, SITE_CONFIG.celular, 'WhatsApp disponível'],
  },
  {
    icon: Mail,
    title: 'E-mail',
    lines: [SITE_CONFIG.email],
  },
  {
    icon: Clock,
    title: 'Horário',
    lines: ['Segunda a Sexta: 8h às 18h', 'Sábados: 8h às 12h'],
  },
];

export default function ContatoPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary-400 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 bg-white/10 text-primary-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MessageCircle className="w-4 h-4" />
              Fale Conosco
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Agende Sua{' '}
              <span className="text-primary-300">Consulta</span>
            </h1>
            <p className="text-primary-100/80 text-lg max-w-2xl">
              Entre em contato para agendar sua avaliação vascular. Estamos prontos
              para cuidar da sua saúde com atenção e profissionalismo.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {infoCards.map((info, index) => {
              const Icon = info.icon;
              return (
                <AnimatedSection key={info.title} delay={index * 0.1}>
                  <div className="card p-6 text-center border border-secondary-100 h-full">
                    <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <h3 className="font-serif font-bold text-primary-800 mb-2">
                      {info.title}
                    </h3>
                    {info.lines.map((line) => (
                      <p key={line} className="text-secondary-500 text-sm">
                        {line}
                      </p>
                    ))}
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Formulário */}
            <AnimatedSection>
              <SectionHeader
                badge="Formulário"
                title="Envie sua Mensagem"
                subtitle="Preencha o formulário e retornaremos o mais rápido possível."
                centered={false}
              />
              <ContactForm />
            </AnimatedSection>

            {/* Mapa */}
            <AnimatedSection delay={0.2}>
              <SectionHeader
                badge="Localização"
                title="Como Chegar"
                subtitle="Estamos em localização privilegiada em Presidente Prudente."
                centered={false}
              />
              <div className="rounded-2xl overflow-hidden shadow-lg border border-secondary-100 h-[480px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3737.5!2d-51.389!3d-22.121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDA3JzE1LjYiUyA1McKwMjMnMjAuNCJX!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do Instituto Vascular Prudente"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Informações Adicionais */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <AnimatedSection>
            <div className="bg-white rounded-2xl p-8 md:p-12 border border-secondary-100 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center">
                  <Stethoscope className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-primary-800">
                  Informações Importantes
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-primary-700 mb-2">
                    Primeira Consulta
                  </h3>
                  <p className="text-secondary-500 text-sm leading-relaxed">
                    Na primeira consulta, traga seus exames anteriores, lista de
                    medicamentos em uso e carteira do convênio (se aplicável). A
                    avaliação inclui exame clínico completo e pode incluir
                    ecodoppler vascular no mesmo dia.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-primary-700 mb-2">
                    Convênios e Formas de Pagamento
                  </h3>
                  <p className="text-secondary-500 text-sm leading-relaxed">
                    Atendemos Unimed, SulAmérica, Bradesco Saúde, Amil, e outros
                    convênios. Também oferecemos atendimento particular com
                    condições especiais de pagamento. Consulte nossa equipe para
                    mais detalhes.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
