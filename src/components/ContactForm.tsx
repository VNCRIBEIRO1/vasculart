'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';

const contactSchema = z.object({
  name: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('E-mail inválido'),
  phone: z.string().min(10, 'Telefone inválido'),
  subject: z.string().min(1, 'Selecione uma especialidade'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
  consent: z.boolean().refine((val) => val === true, {
    message: 'Você precisa concordar com a política de privacidade',
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Form data:', data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
  };

  if (isSubmitted) {
    return (
      <AnimatedSection>
        <div className="text-center py-12">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-500" />
          </div>
          <h3 className="text-2xl font-serif font-bold text-primary-800 mb-4">
            Mensagem Enviada!
          </h3>
          <p className="text-secondary-500 mb-6 max-w-md mx-auto">
            Agradecemos seu contato. Nossa equipe retornará em até 24 horas
            úteis para confirmar seu agendamento.
          </p>
          <button onClick={() => setIsSubmitted(false)} className="btn-primary">
            Enviar Nova Mensagem
          </button>
        </div>
      </AnimatedSection>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
            Nome Completo *
          </label>
          <input
            id="name"
            type="text"
            {...register('name')}
            className="input-field"
            placeholder="Seu nome completo"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
            E-mail *
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className="input-field"
            placeholder="seu@email.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
            Telefone *
          </label>
          <input
            id="phone"
            type="tel"
            {...register('phone')}
            className="input-field"
            placeholder="(18) 99999-9999"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-2">
            Especialidade de Interesse *
          </label>
          <select id="subject" {...register('subject')} className="input-field">
            <option value="">Selecione uma especialidade</option>
            <option value="varizes">Varizes e Microvarizes</option>
            <option value="trombose">Trombose Venosa</option>
            <option value="cirurgia">Cirurgia Vascular</option>
            <option value="escleroterapia">Escleroterapia</option>
            <option value="espuma">Espuma Densa</option>
            <option value="laser">Laser Transdérmico / Endovenoso</option>
            <option value="doppler">Doppler Vascular</option>
            <option value="arterial">Doença Arterial</option>
            <option value="pe-diabetico">Pé Diabético</option>
            <option value="checkup">Check-up Vascular</option>
            <option value="outro">Outro</option>
          </select>
          {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
          Mensagem *
        </label>
        <textarea
          id="message"
          rows={4}
          {...register('message')}
          className="input-field resize-none"
          placeholder="Descreva brevemente o motivo da consulta..."
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="consent"
          {...register('consent')}
          className="mt-1 h-4 w-4 rounded border-secondary-300 text-primary-600 focus:ring-primary-500"
        />
        <label htmlFor="consent" className="text-sm text-secondary-500">
          Concordo com o tratamento dos meus dados pessoais em conformidade com
          a LGPD (Lei nº 13.709/2018) para fins de agendamento de consulta.
        </label>
      </div>
      {errors.consent && <p className="text-red-500 text-xs">{errors.consent.message}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Enviando...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Send className="w-5 h-5" />
            Enviar Mensagem
          </span>
        )}
      </button>
    </form>
  );
}
