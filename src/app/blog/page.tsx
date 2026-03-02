'use client';

import { BookOpen } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import SectionHeader from '@/components/SectionHeader';
import BlogCard from '@/components/BlogCard';
import { articles } from '@/lib/articles';

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-1/2 w-96 h-96 bg-primary-400 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 bg-white/10 text-primary-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Saúde Vascular em{' '}
              <span className="text-primary-300">Foco</span>
            </h1>
            <p className="text-primary-100/80 text-lg max-w-2xl">
              Artigos informativos sobre saúde vascular, prevenção de doenças e
              tratamentos modernos. Conteúdo escrito pelo Dr. Ricardo Mendes.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <AnimatedSection>
            <SectionHeader
              badge="Artigos"
              title="Conteúdo Educativo"
              subtitle="Informação de qualidade para ajudar você a cuidar da sua saúde vascular."
            />
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <AnimatedSection key={article.slug} delay={index * 0.1}>
                <BlogCard {...article} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
