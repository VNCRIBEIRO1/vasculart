'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Shield, Award, Phone, MapPin, Star } from 'lucide-react';
import { IMAGES } from '@/lib/images';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background com gradiente rico */}
      <div className="absolute inset-0 gradient-hero" />

      {/* Background image overlay */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.hero}
          alt=""
          fill
          className="object-cover opacity-[0.08] mix-blend-luminosity"
          priority
          sizes="100vw"
        />
      </div>

      {/* Decorative orbs */}
      <div className="absolute top-20 right-[20%] w-[500px] h-[500px] bg-primary-400/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 left-[10%] w-[400px] h-[400px] bg-accent-500/5 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/5 rounded-full blur-[150px]" />

      <div className="container-custom relative z-10 pt-32 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Coluna de texto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            {/* Badge com heartbeat */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-primary-200 px-5 py-2.5 rounded-full text-sm font-medium mb-8 border border-white/10"
            >
              <Heart className="w-4 h-4 text-accent-400 animate-heartbeat" />
              Clínica Vasculart — Desde 2009
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.1] mb-6">
              Sua{' '}
              <span className="text-gradient bg-gradient-to-r from-primary-300 via-primary-200 to-primary-300 bg-clip-text text-transparent">
                Saúde Vascular
              </span>
              <br />
              em Boas Mãos
            </h1>

            <p className="text-lg text-primary-100/80 leading-relaxed mb-8 max-w-lg">
              Dra. Fernanda Vizzotto Toreto — Angiologista, Cirurgiã Vascular e
              Mestre em Ciências da Saúde. Mais de 30 anos de experiência,
              tecnologia avançada e atendimento humanizado.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/contato" className="btn-heartbeat text-base group">
                Agende sua Consulta
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/5518996228447"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-4 border-2 border-white/20 text-white font-medium rounded-2xl hover:bg-white/10 transition-all duration-300 text-base backdrop-blur-sm"
              >
                <Phone className="w-5 h-5 mr-2" />
                WhatsApp
              </a>
            </div>

            {/* Credenciais */}
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <span className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/10 text-primary-200">
                <Shield className="w-4 h-4 text-primary-300" />
                CRM/SP 78575
              </span>
              <span className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/10 text-primary-200">
                <Award className="w-4 h-4 text-primary-300" />
                RQE 41951
              </span>
              <span className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/10 text-primary-200">
                <Star className="w-4 h-4 text-yellow-400" />
                5★ Google (289+)
              </span>
            </div>
          </motion.div>

          {/* Coluna da foto */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Glow atrás da foto */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary-400/20 via-primary-500/10 to-transparent rounded-[2rem] blur-2xl" />

              {/* Foto principal */}
              <div className="relative w-[320px] h-[400px] md:w-[380px] md:h-[480px] lg:w-[420px] lg:h-[530px] rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src={IMAGES.doctor}
                  alt="Dra. Fernanda Vizzotto Toreto — Angiologista e Cirurgiã Vascular"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 320px, (max-width: 1024px) 380px, 420px"
                />
                {/* Gradiente sutil na base */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary-900/60 to-transparent" />

                {/* Info na base da foto */}
                <div className="absolute bottom-0 inset-x-0 p-6">
                  <p className="text-white font-serif font-bold text-lg">
                    Dra. Fernanda Toreto
                  </p>
                  <p className="text-primary-200 text-sm">
                    Angiologista • Cirurgiã Vascular
                  </p>
                </div>
              </div>

              {/* Badge flutuante - Mestre */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-4 top-20 bg-white rounded-2xl shadow-xl px-4 py-3 border border-primary-100"
              >
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                    <Award className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary-800">Mestre</p>
                    <p className="text-[10px] text-secondary-500">Ciências da Saúde</p>
                  </div>
                </div>
              </motion.div>

              {/* Badge flutuante - Professora */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -left-4 bottom-28 bg-white rounded-2xl shadow-xl px-4 py-3 border border-primary-100"
              >
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-accent-50 rounded-xl flex items-center justify-center">
                    <Heart className="w-5 h-5 text-accent-500" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary-800">30+ Anos</p>
                    <p className="text-[10px] text-secondary-500">de Experiência</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom curve - CSS only, sem SVG */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 bg-white"
        style={{ clipPath: 'ellipse(75% 100% at 50% 100%)' }}
      />
    </section>
  );
}
