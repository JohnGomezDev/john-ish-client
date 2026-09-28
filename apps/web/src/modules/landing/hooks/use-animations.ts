'use client';

import type { TargetAndTransition, Transition } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';

interface IFadeUpProps {
  initial: TargetAndTransition;
  animate: TargetAndTransition;
  transition: Transition;
}

interface IScrollFadeUpProps {
  initial: TargetAndTransition;
  whileInView: TargetAndTransition;
  viewport: { once: boolean; amount: number };
  transition: Transition;
}

/** Common fade-in-from-bottom for above-the-fold hero elements. */
export function useFadeUp(delay = 0): IFadeUpProps {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    return {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.01 },
    };
  }

  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: 'easeOut', delay },
  };
}

/** Viewport-triggered fade-in for sections below the fold. */
export function useScrollFadeUp(delay = 0): IScrollFadeUpProps {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    return {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      viewport: { once: true, amount: 0.2 },
      transition: { duration: 0.01 },
    };
  }

  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.5, ease: 'easeOut', delay },
  };
}

export type { IFadeUpProps, IScrollFadeUpProps };
