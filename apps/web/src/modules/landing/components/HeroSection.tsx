'use client';

import { GitHubIcon } from '@repo/modules/layout/components/SocialIcons';
import { motion } from 'framer-motion';

import { HeroTerminal } from '@/modules/landing/components/HeroTerminal';
import { SectionFrame } from '@/modules/landing/components/SectionFrame';
import { useFadeUp } from '@/modules/landing/hooks/use-animations';
import { GITHUB_HREF, BLOG_HREF } from '@/modules/landing/constants/landing.constants';

const LINK_FOCUS =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background';

export function HeroSection(): React.JSX.Element {
  const line1 = useFadeUp(0.1);
  const line2 = useFadeUp(0.2);
  const line3 = useFadeUp(0.35);
  const line4 = useFadeUp(0.5);
  const terminal = useFadeUp(0.3);

  return (
    <SectionFrame
      id="hero"
      index="01"
      label="hero"
      ariaLabelledBy="hero-heading"
      density="loose"
      showDivider={false}
    >
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-6 sm:gap-7">
          <motion.p
            {...line1}
            className="font-mono text-xs text-muted-foreground sm:text-sm"
          >
            Aquí, haciendo cosas...
          </motion.p>

          <motion.div {...line2}>
            <h1
              id="hero-heading"
              className="font-display text-4xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              Menos humo,
              <em className="mt-1 block not-italic text-accent">Más software.</em>
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
            className="flex flex-row items-center gap-4 sm:gap-6"
          >
            <a
              href={BLOG_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 ${LINK_FOCUS}`}
            >
              Explorar el blog
            </a>
            <a
              href={GITHUB_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 text-sm font-semibold text-foreground underline decoration-muted-foreground/50 underline-offset-[6px] transition-colors hover:text-accent hover:decoration-accent ${LINK_FOCUS}`}
            >
              <GitHubIcon className="size-4" />
              GitHub
            </a>
          </motion.div>
        </div>

        <motion.div {...terminal} className="min-w-0">
          <HeroTerminal />
        </motion.div>
      </div>
    </SectionFrame>
  );
}
