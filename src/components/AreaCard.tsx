'use client';

import Link from 'next/link';
import {
  Heart,
  Activity,
  Syringe,
  Scan,
  Zap,
  Stethoscope,
  ArrowRight,
  LucideIcon,
} from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const iconMap: Record<string, LucideIcon> = {
  Heart,
  Activity,
  Syringe,
  Scan,
  Zap,
  Stethoscope,
};

const colorMap: Record<string, string> = {
  Heart: 'from-accent-500 to-accent-600',
  Activity: 'from-primary-600 to-primary-700',
  Syringe: 'from-primary-500 to-primary-600',
  Scan: 'from-primary-700 to-primary-800',
  Zap: 'from-accent-500 to-accent-700',
  Stethoscope: 'from-primary-600 to-primary-800',
};

interface ServiceCardProps {
  iconName: string;
  title: string;
  description: string;
  href?: string;
  delay?: number;
}

export default function ServiceCard({
  iconName,
  title,
  description,
  href = '/especialidades',
  delay = 0,
}: ServiceCardProps) {
  const Icon = iconMap[iconName] || Heart;
  const gradient = colorMap[iconName] || 'from-primary-500 to-primary-600';

  return (
    <AnimatedSection delay={delay}>
      <Link href={href} className="block group">
        <div className="card p-0 h-full border border-secondary-100 hover:border-primary-300 group-hover:-translate-y-1 overflow-hidden">
          <div className={`h-1.5 bg-gradient-to-r ${gradient}`} />
          <div className="p-8">
            <div className={`w-14 h-14 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              <Icon className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-serif font-bold text-primary-800 mb-3">
              {title}
            </h3>
            <p className="text-secondary-500 text-sm leading-relaxed mb-4">
              {description}
            </p>
            <span className="inline-flex items-center text-sm font-medium text-primary-600 group-hover:text-primary-700 transition-colors">
              Saiba mais
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </Link>
    </AnimatedSection>
  );
}
