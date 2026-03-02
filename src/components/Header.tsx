'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, ChevronRight, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Início', href: '/' },
  { name: 'Sobre', href: '/sobre' },
  { name: 'Especialidades', href: '/especialidades' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contato', href: '/contato' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-primary-100'
          : 'bg-transparent'
      }`}
    >
      {/* Barra superior */}
      <div
        className={`transition-all duration-500 overflow-hidden ${
          scrolled ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'
        }`}
      >
        <div className="bg-primary-800">
          <div className="container-custom py-1.5 flex justify-between items-center text-xs">
            <span className="text-primary-100 font-medium tracking-wide">
              CRM/SP 158.432 • Cirurgia Vascular e Angiologia
            </span>
            <a
              href="tel:+5518996101884"
              className="flex items-center gap-1.5 text-white hover:text-primary-200 transition-colors font-medium"
            >
              <Phone className="w-3 h-3" />
              (18) 99610-1884
            </a>
          </div>
        </div>
      </div>

      {/* Navegação principal */}
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className={`text-lg font-serif font-bold leading-tight transition-colors ${
                scrolled ? 'text-primary-800' : 'text-white'
              }`}>
                Instituto Vascular
              </h1>
              <p className={`text-[10px] tracking-wider uppercase transition-colors ${
                scrolled ? 'text-primary-600' : 'text-primary-200'
              }`}>
                Cirurgia Vascular & Angiologia
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 group ${
                  scrolled
                    ? 'text-secondary-600 hover:text-primary-700 hover:bg-primary-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary-500 transition-all duration-300 group-hover:w-3/4" />
              </Link>
            ))}
            <Link
              href="/contato"
              className="ml-4 inline-flex items-center gap-1.5 text-sm font-semibold px-5 py-2.5 rounded-lg bg-primary-600 text-white shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:bg-primary-700 transition-all duration-300 hover:-translate-y-0.5"
            >
              Agende sua Consulta
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'hover:bg-primary-50' : 'hover:bg-white/10'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menu"
          >
            {isOpen ? (
              <X className={`w-6 h-6 ${scrolled ? 'text-primary-800' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? 'text-primary-800' : 'text-white'}`} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-primary-100 shadow-xl"
          >
            <div className="container-custom py-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-4 text-secondary-600 hover:text-primary-700 hover:bg-primary-50 rounded-lg transition-all font-medium text-sm"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contato"
                onClick={() => setIsOpen(false)}
                className="block py-3 px-4 mt-2 bg-primary-600 text-white text-center rounded-lg font-semibold text-sm shadow-lg"
              >
                Agende sua Consulta
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
