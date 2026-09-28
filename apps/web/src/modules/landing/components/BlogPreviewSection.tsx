'use client';

import { motion } from 'framer-motion';

import { useScrollFadeUp } from '@/modules/landing/hooks/use-animations';
import {
  BLOG_HREF,
  SECTION_CLASS,
} from '@/modules/landing/constants/landing.constants';

export function BlogPreviewSection(): React.JSX.Element {
  const content = useScrollFadeUp();

  return (
    <section
      id="blog"
      aria-labelledby="blog-preview-heading"
      className={SECTION_CLASS}
    >
      <motion.div
        {...content}
        className="overflow-hidden rounded-2xl border border-border bg-surface"
      >
        <div className="flex flex-col items-center gap-5 px-6 py-14 text-center sm:gap-6 sm:px-12 sm:py-16 lg:py-20">
          <h2
            id="blog-preview-heading"
            className="font-display text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            Del editor al artículo
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
            Lecciones aprendidas en producción, análisis técnicos sin jerga
            vacía y reflexiones sobre el oficio de construir software con proposito.
          </p>
          <a
            href={BLOG_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface sm:text-base"
          >
            Ir al Blog
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
