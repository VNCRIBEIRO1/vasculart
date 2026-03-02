import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react';
import { articles, Article } from '@/lib/articles';

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return {};

  return {
    title: `${article.title} | Instituto Vascular Prudente`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.image }],
    },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a: Article) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 gradient-hero relative overflow-hidden">
        <div className="container-custom relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary-200 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao Blog
          </Link>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1 bg-white/10 text-primary-200 px-3 py-1 rounded-full text-xs font-medium mb-4">
              <Tag className="w-3 h-3" />
              {article.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-primary-200 text-sm">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {article.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {article.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="bg-white">
        <div className="container-custom -mt-8">
          <div className="aspect-video w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl relative">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 896px"
              priority
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <article className="max-w-3xl mx-auto">
            <div
              className="prose prose-lg max-w-none
                prose-headings:font-serif prose-headings:text-primary-800
                prose-p:text-secondary-600 prose-p:leading-relaxed
                prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline
                prose-strong:text-primary-700
                prose-li:text-secondary-600
                prose-blockquote:border-primary-500 prose-blockquote:bg-primary-50 prose-blockquote:rounded-r-xl prose-blockquote:py-1
              "
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </article>
        </div>
      </section>

      {/* Related articles */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <h2 className="text-2xl font-serif font-bold text-primary-800 text-center mb-10">
            Outros Artigos
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {articles
              .filter((a) => a.slug !== article.slug)
              .slice(0, 3)
              .map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="card p-4 border border-secondary-100 hover:border-primary-200 transition-colors group"
                >
                  <div className="aspect-video relative rounded-lg overflow-hidden mb-3">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <span className="text-xs text-primary-600 font-medium">
                    {related.category}
                  </span>
                  <h3 className="text-sm font-serif font-bold text-primary-800 mt-1 line-clamp-2 group-hover:text-primary-600 transition-colors">
                    {related.title}
                  </h3>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
