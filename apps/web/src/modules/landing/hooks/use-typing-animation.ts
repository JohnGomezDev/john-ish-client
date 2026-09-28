'use client';

import { useEffect, useRef, useState } from 'react';

import { useReducedMotion } from 'framer-motion';

const TYPING_MS_PER_CHAR = 28;
const INTERSECTION_THRESHOLD = 0.35;

interface IUseTypingAnimationResult {
  containerRef: React.RefObject<HTMLDivElement | null>;
  displayedText: string;
  isTyping: boolean;
}

export function useTypingAnimation(text: string): IUseTypingAnimationResult {
  const shouldReduce = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [visibleCount, setVisibleCount] = useState(
    shouldReduce ? text.length : 0,
  );

  useEffect(() => {
    if (shouldReduce) {
      setVisibleCount(text.length);
      return;
    }

    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: INTERSECTION_THRESHOLD },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [shouldReduce, text.length]);

  useEffect(() => {
    if (shouldReduce || !hasStarted || visibleCount >= text.length) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setVisibleCount((count) => count + 1);
    }, TYPING_MS_PER_CHAR);

    return () => window.clearTimeout(timeoutId);
  }, [hasStarted, shouldReduce, text.length, visibleCount]);

  return {
    containerRef,
    displayedText: text.slice(0, visibleCount),
    isTyping: !shouldReduce && visibleCount < text.length,
  };
}
