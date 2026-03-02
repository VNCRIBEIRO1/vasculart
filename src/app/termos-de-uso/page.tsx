'use client';

import { Shield, Scale, Globe, AlertTriangle, FileText, BookOpen, Heart } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import SectionHeader from '@/components/SectionHeader';

const lastUpdate = '02 de março de 2026';

export default function TermosDeUsoPage() {
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
              <Heart className="w-4 h-4 text-accent-400" />
              Termos Legais
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Termos de{' '}
              <span className="text-primary-300">Uso</span>
            </h1>
            <p className="text-primary-100/80 text-lg max-w-2xl">
              Leia atentamente os termos e condições que regem o uso do site
              da Clínica Vasculart. Ao acessar nosso site, você concorda com
              estas condições.
            </p>
            <p className="text-primary-300/60 text-sm mt-4">
              Última atualização: {lastUpdate}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-4xl">

          {/* 1. Aceitação dos Termos */}
          <AnimatedSection className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary-600" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-primary-800">
                1. Aceitação dos Termos
              </h2>
            </div>
            <div className="space-y-4 text-secondary-500 leading-relaxed pl-[52px]">
              <p>
                Ao acessar e utilizar o site da <strong className="text-primary-800">Clínica Vasculart</strong>,
                inscrita no CNPJ sob o nº <strong className="text-primary-800">11.739.298/0001-72</strong>,
                com sede na Rua Donato Armelin, 326 — Vila Euclides, Presidente Prudente/SP — CEP 19013-810,
                você declara que leu, compreendeu e concorda integralmente com os presentes Termos de Uso.
              </p>
              <p>
                Caso não concorde com qualquer disposição destes termos,
                solicitamos que interrompa imediatamente a utilização do site.
              </p>
            </div>
          </AnimatedSection>

          {/* 2. Descrição do Serviço */}
          <AnimatedSection className="mb-16" delay={0.1}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                <Globe className="w-5 h-5 text-primary-600" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-primary-800">
                2. Descrição do Serviço
              </h2>
            </div>
            <div className="space-y-4 text-secondary-500 leading-relaxed pl-[52px]">
              <p>
                Este site tem caráter exclusivamente <strong className="text-primary-800">informativo e educacional</strong>,
                apresentando informações sobre os serviços de Angiologia e Cirurgia Vascular oferecidos pela
                Clínica Vasculart, sob responsabilidade da
                <strong className="text-primary-800"> Dra. Fernanda Maria Bottino Vizzotto Toreto</strong>.
              </p>
              <p>O site oferece:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 shrink-0" />
                  Informações sobre a clínica, especialidades e profissional responsável;
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 shrink-0" />
                  Conteúdo educativo sobre saúde vascular (blog);
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 shrink-0" />
                  Formulário de contato para agendamento e dúvidas;
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 shrink-0" />
                  Dados de localização e canais de atendimento.
                </li>
              </ul>
            </div>
          </AnimatedSection>

          {/* 3. Aviso Médico */}
          <AnimatedSection className="mb-16" delay={0.15}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent-50 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-accent-600" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-primary-800">
                3. Aviso Médico (Disclaimer)
              </h2>
            </div>
            <div className="space-y-4 text-secondary-500 leading-relaxed pl-[52px]">
              <div className="bg-gradient-to-br from-accent-50 to-primary-50/30 rounded-2xl p-6 border border-accent-100">
                <p className="text-primary-800 font-medium mb-3">
                  ⚠️ Leia com atenção:
                </p>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 shrink-0" />
                    O conteúdo deste site <strong className="text-primary-800">não substitui</strong> consulta
                    médica, diagnóstico ou tratamento profissional.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 shrink-0" />
                    As informações são de caráter genérico e educacional, não devendo ser
                    utilizadas para automedicação ou autodiagnóstico.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 shrink-0" />
                    Em caso de emergência médica, procure imediatamente o serviço de saúde
                    mais próximo ou ligue para o <strong className="text-accent-500">SAMU (192)</strong>.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 shrink-0" />
                    A relação médico-paciente somente se estabelece mediante consulta
                    presencial com a profissional responsável.
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* 4. Propriedade Intelectual */}
          <AnimatedSection className="mb-16" delay={0.2}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary-600" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-primary-800">
                4. Propriedade Intelectual
              </h2>
            </div>
            <div className="space-y-4 text-secondary-500 leading-relaxed pl-[52px]">
              <p>
                Todo o conteúdo presente neste site — incluindo, mas não se limitando a textos,
                imagens, logotipos, design, layout, artigos, vídeos e código-fonte — é de
                propriedade exclusiva da <strong className="text-primary-800">Clínica Vasculart</strong> ou
                licenciado para uso pela mesma, sendo protegido pelas leis brasileiras de
                direitos autorais (Lei nº 9.610/98) e propriedade industrial (Lei nº 9.279/96).
              </p>
              <p>É expressamente proibido:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 shrink-0" />
                  Copiar, reproduzir, modificar ou distribuir qualquer conteúdo sem autorização prévia e por escrito;
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 shrink-0" />
                  Utilizar a marca &quot;Vasculart&quot; ou logotipos associados sem consentimento;
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 shrink-0" />
                  Realizar engenharia reversa, descompilação ou extração do código-fonte do site.
                </li>
              </ul>
            </div>
          </AnimatedSection>

          {/* 5. Limitação de Responsabilidade */}
          <AnimatedSection className="mb-16" delay={0.25}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary-600" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-primary-800">
                5. Limitação de Responsabilidade
              </h2>
            </div>
            <div className="space-y-4 text-secondary-500 leading-relaxed pl-[52px]">
              <p>A Clínica Vasculart não se responsabiliza por:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 shrink-0" />
                  Eventuais indisponibilidades temporárias do site por manutenção, falhas técnicas
                  ou eventos de força maior;
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 shrink-0" />
                  Danos diretos ou indiretos decorrentes do uso ou da impossibilidade de uso do site;
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 shrink-0" />
                  Conteúdos de sites de terceiros acessados por meio de links disponibilizados neste site;
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 shrink-0" />
                  Decisões tomadas pelo usuário com base nas informações educativas publicadas.
                </li>
              </ul>
            </div>
          </AnimatedSection>

          {/* 6. Conduta do Usuário */}
          <AnimatedSection className="mb-16" delay={0.3}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                <Globe className="w-5 h-5 text-primary-600" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-primary-800">
                6. Conduta do Usuário
              </h2>
            </div>
            <div className="space-y-4 text-secondary-500 leading-relaxed pl-[52px]">
              <p>Ao utilizar este site, você se compromete a:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 shrink-0" />
                  Não utilizar o site para fins ilícitos ou que contrariem a boa-fé;
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 shrink-0" />
                  Não inserir dados falsos nos formulários de contato;
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 shrink-0" />
                  Não tentar acessar áreas restritas ou interferir no funcionamento do site;
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 shrink-0" />
                  Respeitar os direitos de propriedade intelectual descritos nestes termos.
                </li>
              </ul>
            </div>
          </AnimatedSection>

          {/* 7. Privacidade */}
          <AnimatedSection className="mb-16" delay={0.35}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary-600" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-primary-800">
                7. Privacidade e Proteção de Dados
              </h2>
            </div>
            <div className="space-y-4 text-secondary-500 leading-relaxed pl-[52px]">
              <p>
                O tratamento de dados pessoais realizado por este site é regido pela nossa{' '}
                <a href="/politica-privacidade" className="text-accent-500 hover:underline font-medium">
                  Política de Privacidade
                </a>
                , que integra estes Termos de Uso. Ao utilizar o site, você também declara ter
                ciência e concordar com os termos da referida política, elaborada em conformidade
                com a <strong className="text-primary-800">Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD)</strong>.
              </p>
            </div>
          </AnimatedSection>

          {/* 8. Alterações nos Termos */}
          <AnimatedSection className="mb-16" delay={0.4}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary-600" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-primary-800">
                8. Alterações nos Termos
              </h2>
            </div>
            <div className="space-y-4 text-secondary-500 leading-relaxed pl-[52px]">
              <p>
                A Clínica Vasculart reserva-se o direito de modificar estes Termos de Uso a
                qualquer momento, sem aviso prévio. As alterações entram em vigor imediatamente
                após sua publicação no site. Recomendamos a consulta periódica desta página
                para manter-se informado sobre eventuais atualizações.
              </p>
            </div>
          </AnimatedSection>

          {/* 9. Legislação Aplicável e Foro */}
          <AnimatedSection className="mb-16" delay={0.45}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent-50 rounded-xl flex items-center justify-center">
                <Scale className="w-5 h-5 text-accent-600" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-primary-800">
                9. Legislação Aplicável e Foro
              </h2>
            </div>
            <div className="space-y-4 text-secondary-500 leading-relaxed pl-[52px]">
              <p>
                Estes Termos de Uso são regidos e interpretados de acordo com as leis da
                <strong className="text-primary-800"> República Federativa do Brasil</strong>.
              </p>
              <p>
                Fica eleito o <strong className="text-primary-800">Foro da Comarca de Presidente Prudente, Estado de São Paulo</strong>,
                como competente para dirimir quaisquer questões oriundas destes Termos de Uso,
                renunciando as partes a qualquer outro, por mais privilegiado que seja.
              </p>
            </div>
          </AnimatedSection>

          {/* 10. Contato */}
          <AnimatedSection delay={0.5}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent-50 rounded-xl flex items-center justify-center">
                <Heart className="w-5 h-5 text-accent-600" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-primary-800">
                10. Contato
              </h2>
            </div>
            <div className="space-y-4 text-secondary-500 leading-relaxed pl-[52px]">
              <p>
                Em caso de dúvidas sobre estes Termos de Uso, entre em contato conosco:
              </p>
              <div className="bg-gradient-to-br from-primary-50 to-accent-50/30 rounded-2xl p-6 border border-primary-100">
                <p className="font-semibold text-primary-800 mb-1">Clínica Vasculart</p>
                <p className="text-sm mb-3">CNPJ: 11.739.298/0001-72</p>
                <div className="space-y-1 text-sm">
                  <p>
                    📧 E-mail:{' '}
                    <a href="mailto:drafernandatoreto@gmail.com" className="text-accent-500 hover:underline font-medium">
                      drafernandatoreto@gmail.com
                    </a>
                  </p>
                  <p>
                    📞 Telefone:{' '}
                    <a href="tel:+5518996228447" className="text-accent-500 hover:underline font-medium">
                      (18) 99622-8447
                    </a>
                  </p>
                  <p>📍 Rua Donato Armelin, 326 — Vila Euclides, Presidente Prudente/SP — CEP 19013-810</p>
                  <p>
                    🌐 Site:{' '}
                    <a href="https://clinica-ten-iota.vercel.app" className="text-accent-500 hover:underline font-medium" target="_blank" rel="noopener noreferrer">
                      clinica-ten-iota.vercel.app
                    </a>
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
