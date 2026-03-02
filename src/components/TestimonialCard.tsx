'use client';

import AnimatedSection from './AnimatedSection';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  text: string;
  author: string;
  role: string;
  delay?: number;
}

export default function TestimonialCard({
  text,
  author,
  role,
  delay = 0,
}: TestimonialCardProps) {
  const initials = author
    .split(' ')
    .map((w) => w.charAt(0))
    .join('')
    .slice(0, 2);

  return (
    <AnimatedSection delay={delay}>
      <div className="card p-8 h-full border border-secondary-100 relative overflow-hidden">
        <svg
          width="64"
          height="48"
          viewBox="0 0 64 48"
          fill="none"
          className="absolute top-4 right-4 opacity-[0.06]"
          aria-hidden="true"
        >
          <path
            d="M0 36C0 22 6 12 18 0l6 4C14 14 12 24 12 36v12H0V36Zm34 0C34 22 40 12 52 0l6 4C48 14 46 24 46 36v12H34V36Z"
            fill="currentColor"
            className="text-primary-700"
          />
        </svg>

        <div className="flex gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-primary-500 text-primary-500" />
          ))}
        </div>

        <p className="text-secondary-600 leading-relaxed mb-6 relative z-10">
          &ldquo;{text}&rdquo;
        </p>

        <div className="flex items-center gap-3">
          <div className="w-11 h-11 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-sm tracking-wide">
              {initials}
            </span>
          </div>
          <div>
            <p className="font-medium text-primary-800 text-sm">{author}</p>
            <p className="text-secondary-400 text-xs">{role}</p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-400 opacity-60" />
      </div>
    </AnimatedSection>
  );
}
