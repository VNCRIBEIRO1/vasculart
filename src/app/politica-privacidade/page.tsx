'use client';

import { Shield, Lock, Database, Cookie, UserCheck, Mail, FileText } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import SectionHeader from '@/components/SectionHeader';

const lastUpdate = '02 de março de 2026';

export default function PoliticaPrivacidadePage() {
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
              <Shield className="w-4 h-4 text-accent-400" />
              Privacidade &amp; Proteção de Dados
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Política de{' '}
              <span className="text-primary-300">Privacidade</span>
            </h1>
            <p className="text-primary-100/80 text-lg max-w-2xl">
              Sua privacidade é uma prioridade para a Clínica Vasculart.
              Saiba como coletamos, utilizamos e protegemos seus dados pessoais
              em conformidade com a LGPD.
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

          {/* 1. Introdução */}
          <AnimatedSection className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary-600" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-primary-800">
                1. Introdução
              </h2>
            </div>
            <div className="space-y-4 text-secondary-500 leading-relaxed pl-[52px]">
              <p>
                A <strong className="text-primary-800">Clínica Vasculart</strong>,
                inscrita no CNPJ sob o nº <strong className="text-primary-800">11.739.298/0001-72</strong>,
                com sede na Rua Donato Armelin, 326 — Vila Euclides, Presidente Prudente/SP — CEP 19013-810,
                representada pela <strong className="text-primary-800">Dra. Fernanda Maria Bottino Vizzotto Toreto</strong>,
                é a controladora dos dados pessoais tratados por meio deste site.
              </p>
              <p>
                Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e
                protegemos suas informações pessoais, em conformidade com a
                <strong className="text-accent-500"> Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018)</strong>.
              </p>
            </div>
          </AnimatedSection>

          {/* 2. Dados Coletados */}
          <AnimatedSection className="mb-16" delay={0.1}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                <Database className="w-5 h-5 text-primary-600" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-primary-800">
                2. Dados Coletados
              </h2>
            </div>
            <div className="space-y-4 text-secondary-500 leading-relaxed pl-[52px]">
              <p>Podemos coletar os seguintes dados pessoais quando você utiliza nosso site:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 shrink-0" />
                  <span><strong className="text-primary-800">Dados de identificação:</strong> nome completo, e-mail e telefone, fornecidos voluntariamente via formulário de contato.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 shrink-0" />
                  <span><strong className="text-primary-800">Dados de navegação:</strong> endereço IP, tipo de navegador, páginas acessadas, horário de acesso e dados de cookies.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 shrink-0" />
                  <span><strong className="text-primary-800">Dados de comunicação:</strong> mensagens enviadas via formulário de contato ou WhatsApp.</span>
                </li>
              </ul>
              <div className="bg-primary-50 border-l-4 border-accent-500 rounded-r-xl p-4 mt-4">
                <p className="text-primary-800 text-sm font-medium">
                  ⚕️ Importante: Este site <strong>não coleta dados de saúde</strong>. Dados clínicos e
                  prontuários são tratados exclusivamente no âmbito presencial da clínica, conforme
                  regulamentação do CFM e sigilo médico.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* 3. Finalidade do Tratamento */}
          <AnimatedSection className="mb-16" delay={0.15}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                <UserCheck className="w-5 h-5 text-primary-600" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-primary-800">
                3. Finalidade do Tratamento
              </h2>
            </div>
            <div className="space-y-4 text-secondary-500 leading-relaxed pl-[52px]">
              <p>Seus dados pessoais são tratados para as seguintes finalidades:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 shrink-0" />
                  Responder às suas solicitações enviadas pelo formulário de contato;
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 shrink-0" />
                  Viabilizar o agendamento de consultas;
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 shrink-0" />
                  Melhorar a experiência de navegação no site;
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 shrink-0" />
                  Gerar estatísticas anônimas de acesso (analytics);
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 shrink-0" />
                  Cumprir obrigações legais e regulatórias aplicáveis.
                </li>
              </ul>
            </div>
          </AnimatedSection>

          {/* 4. Cookies */}
          <AnimatedSection className="mb-16" delay={0.2}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                <Cookie className="w-5 h-5 text-primary-600" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-primary-800">
                4. Cookies
              </h2>
            </div>
            <div className="space-y-4 text-secondary-500 leading-relaxed pl-[52px]">
              <p>
                Utilizamos cookies e tecnologias semelhantes para melhorar sua
                experiência de navegação. Os cookies podem ser:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div className="bg-secondary-50 rounded-xl p-4">
                  <h4 className="font-semibold text-primary-800 mb-1">Cookies Essenciais</h4>
                  <p className="text-sm">Necessários para o funcionamento básico do site. Não podem ser desativados.</p>
                </div>
                <div className="bg-secondary-50 rounded-xl p-4">
                  <h4 className="font-semibold text-primary-800 mb-1">Cookies de Análise</h4>
                  <p className="text-sm">Permitem análise estatística de navegação (ex.: Google Analytics). Podem ser recusados.</p>
                </div>
              </div>
              <p className="text-sm mt-2">
                Você pode gerenciar suas preferências de cookies a qualquer momento
                através das configurações do seu navegador.
              </p>
            </div>
          </AnimatedSection>

          {/* 5. Armazenamento e Segurança */}
          <AnimatedSection className="mb-16" delay={0.25}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                <Lock className="w-5 h-5 text-primary-600" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-primary-800">
                5. Armazenamento e Segurança
              </h2>
            </div>
            <div className="space-y-4 text-secondary-500 leading-relaxed pl-[52px]">
              <p>
                Os dados pessoais coletados são armazenados em servidores seguros, protegidos
                por medidas técnicas e organizacionais adequadas, incluindo:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 shrink-0" />
                  Criptografia SSL/TLS em todas as transmissões de dados;
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 shrink-0" />
                  Acesso restrito aos dados pessoais apenas a pessoas autorizadas;
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 shrink-0" />
                  Hospedagem em plataforma com certificações de segurança (Vercel).
                </li>
              </ul>
              <p>
                Os dados serão retidos apenas pelo tempo necessário para cumprir as finalidades
                descritas nesta política ou conforme exigido por lei.
              </p>
            </div>
          </AnimatedSection>

          {/* 6. Direitos do Titular (LGPD) */}
          <AnimatedSection className="mb-16" delay={0.3}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent-50 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-accent-600" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-primary-800">
                6. Seus Direitos (LGPD)
              </h2>
            </div>
            <div className="space-y-4 text-secondary-500 leading-relaxed pl-[52px]">
              <p>
                De acordo com a Lei Geral de Proteção de Dados (art. 18), você tem
                os seguintes direitos em relação aos seus dados pessoais:
              </p>
              <div className="bg-gradient-to-br from-primary-50 to-accent-50/30 rounded-2xl p-6 space-y-3 border border-primary-100">
                <div className="flex items-start gap-2">
                  <span className="text-accent-500 font-bold">I.</span>
                  <span>Confirmar a existência de tratamento de dados;</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-accent-500 font-bold">II.</span>
                  <span>Acessar seus dados pessoais;</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-accent-500 font-bold">III.</span>
                  <span>Corrigir dados incompletos, inexatos ou desatualizados;</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-accent-500 font-bold">IV.</span>
                  <span>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos;</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-accent-500 font-bold">V.</span>
                  <span>Solicitar a portabilidade dos dados a outro fornecedor;</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-accent-500 font-bold">VI.</span>
                  <span>Eliminar dados pessoais tratados com base no consentimento;</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-accent-500 font-bold">VII.</span>
                  <span>Revogar o consentimento a qualquer tempo;</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-accent-500 font-bold">VIII.</span>
                  <span>Obter informações sobre compartilhamento de dados com terceiros.</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* 7. Compartilhamento de Dados */}
          <AnimatedSection className="mb-16" delay={0.35}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                <UserCheck className="w-5 h-5 text-primary-600" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-primary-800">
                7. Compartilhamento de Dados
              </h2>
            </div>
            <div className="space-y-4 text-secondary-500 leading-relaxed pl-[52px]">
              <p>
                A Clínica Vasculart <strong className="text-primary-800">não vende, aluga ou compartilha</strong> seus
                dados pessoais com terceiros para fins comerciais. Os dados podem ser compartilhados apenas:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 shrink-0" />
                  Com prestadores de serviço essenciais (hospedagem, analytics), sob cláusulas de confidencialidade;
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 shrink-0" />
                  Quando exigido por ordem judicial ou determinação legal;
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 shrink-0" />
                  Para proteção dos direitos da clínica em processos judiciais.
                </li>
              </ul>
            </div>
          </AnimatedSection>

          {/* 8. Contato para Solicitações */}
          <AnimatedSection delay={0.4}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent-50 rounded-xl flex items-center justify-center">
                <Mail className="w-5 h-5 text-accent-600" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-primary-800">
                8. Contato e Solicitações
              </h2>
            </div>
            <div className="space-y-4 text-secondary-500 leading-relaxed pl-[52px]">
              <p>
                Para exercer qualquer um dos seus direitos previstos na LGPD, ou para
                esclarecer dúvidas sobre esta Política de Privacidade, entre em contato
                com a nossa encarregada de dados:
              </p>
              <div className="bg-gradient-to-br from-primary-50 to-accent-50/30 rounded-2xl p-6 border border-primary-100">
                <p className="font-semibold text-primary-800 mb-1">Dra. Fernanda Maria Bottino Vizzotto Toreto</p>
                <p className="text-sm">Encarregada de Proteção de Dados (DPO)</p>
                <div className="mt-3 space-y-1 text-sm">
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
                </div>
              </div>
              <p className="text-sm text-secondary-400 mt-4">
                Responderemos à sua solicitação em até 15 (quinze) dias úteis, conforme
                previsto na legislação vigente.
              </p>
            </div>
          </AnimatedSection>

        </div>
      </section>
    </>
  );
}
