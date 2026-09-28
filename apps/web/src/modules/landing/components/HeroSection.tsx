'use client';

import { GitHubIcon } from '@repo/modules/layout/components/SocialIcons';
import { motion } from 'framer-motion';

import { HeroTerminal } from '@/modules/landing/components/HeroTerminal';
import { useFadeUp } from '@/modules/landing/hooks/use-animations';
import {
  GITHUB_HREF,
  BLOG_HREF,
  SECTION_CLASS,
} from '@/modules/landing/constants/landing.constants';

export function HeroSection(): React.JSX.Element {
  const line1 = useFadeUp(0.1);
  const line2 = useFadeUp(0.2);
  const line3 = useFadeUp(0.35);
  const line4 = useFadeUp(0.5);
  const terminal = useFadeUp(0.3);

  return (
    <section id="hero" aria-labelledby="hero-heading" className={SECTION_CLASS}>
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-6 sm:gap-7">
          <motion.div {...line1}>
            <p className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1.5 font-mono text-xs text-accent sm:text-sm">
              <span
                className="size-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_8px_var(--accent)]"
                aria-hidden="true"
              />
              Aquí, haciendo cosas...
            </p>
          </motion.div>

          <motion.div {...line2}>
            <h1
              id="hero-heading"
              className="font-display text-4xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              Menos humo,{' '}
              <em className="not-italic text-accent">Más software.</em>
            </h1>
          </motion.div>

          <motion.p
            {...line3}
            className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Construyo, aprendo y descubro cosas sobre el desarrollo de software. Comparto lo que encuentro en el camino, desde proyectos reales hasta ideas y conceptos que valen la pena.
          </motion.p>

          <motion.div
            {...line4}
            className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
          >
            <a
              href={BLOG_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Explorar el blog
            </a>
            <a
              href={GITHUB_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-surface/60 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent/40 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <GitHubIcon className="size-4" />
              GitHub
            </a>
          </motion.div>
        </div>

        <motion.div {...terminal} className="relative">
          <HeroTerminal />
        </motion.div>
      </div>
    </section>
  );
}
