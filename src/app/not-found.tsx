import Link from 'next/link';
import { Heart, ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-secondary-50 px-4">
      <div className="text-center max-w-lg">
        <div className="w-20 h-20 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <Heart className="w-10 h-10 text-primary-500" />
        </div>
        <h1 className="text-6xl font-serif font-bold text-primary-800 mb-4">404</h1>
        <h2 className="text-2xl font-serif font-bold text-primary-700 mb-4">
          Página Não Encontrada
        </h2>
        <p className="text-secondary-500 mb-8 leading-relaxed">
          A página que você procura não existe ou foi movida.
          Que tal voltar à nossa página principal?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            <Home className="w-5 h-5 mr-2" />
            Página Inicial
          </Link>
          <Link href="/contato" className="btn-accent">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Fale Conosco
          </Link>
        </div>
      </div>
    </section>
  );
}
