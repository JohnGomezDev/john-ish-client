'use client';

import { motion } from 'framer-motion';

import { useScrollFadeUp } from '@/modules/landing/hooks/use-animations';
import {
  SECTION_CLASS,
  TECH_STACK,
  type ITechStackCategory,
  type ITechStackSnippet,
} from '@/modules/landing/constants/landing.constants';
import { useTypingAnimation } from '@/modules/landing/hooks/use-typing-animation';

function CodeKeyword({ children }: { children: React.ReactNode }): React.JSX.Element {
  return <span className="text-accent">{children}</span>;
}

function CodeProperty({ children }: { children: React.ReactNode }): React.JSX.Element {
  return <span className="text-foreground">{children}</span>;
}

function CodeString({ children }: { children: React.ReactNode }): React.JSX.Element {
  return <span className="text-foreground/80">{children}</span>;
}

function CodeType({ children }: { children: React.ReactNode }): React.JSX.Element {
  return <span className="text-accent/80">{children}</span>;
}

function CodeComment({ children }: { children: React.ReactNode }): React.JSX.Element {
  return <span className="text-muted-foreground/75">{children}</span>;
}

function CodePunctuation({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return <span className="text-muted-foreground">{children}</span>;
}

function TypedComment({ text }: { text: string }): React.JSX.Element {
  const { containerRef, displayedText, isTyping } = useTypingAnimation(text);

  return (
    <div ref={containerRef} className="mb-3 sm:mb-4">
      {/* Full comment always in the DOM for SEO / screen readers */}
      <span className="sr-only">{text}</span>
      <div aria-hidden="true">
        <CodeComment>
          {displayedText}
          {isTyping ? (
            <span
              className="ml-0.5 inline-block h-[1em] w-1.5 translate-y-0.5 bg-accent/70 align-baseline motion-safe:animate-pulse"
              aria-hidden="true"
            />
          ) : null}
        </CodeComment>
      </div>
    </div>
  );
}

function TechArray({
  technologies,
}: {
  technologies: readonly string[];
}): React.JSX.Element {
  return (
    <>
      <CodePunctuation>{'['}</CodePunctuation>
      {technologies.map((tech, index) => (
        <span key={tech}>
          <CodeString>{`"${tech}"`}</CodeString>
          {index < technologies.length - 1 ? (
            <CodePunctuation>{', '}</CodePunctuation>
          ) : null}
        </span>
      ))}
      <CodePunctuation>{']'}</CodePunctuation>
    </>
  );
}

function StackCodeBlock({
  snippet,
}: {
  snippet: ITechStackSnippet;
}): React.JSX.Element {
  const { comment, variableName, typeAnnotation, categories } = snippet;
  const lastIndex = categories.length - 1;

  return (
    <pre className="overflow-x-auto p-4 font-mono text-[12px] leading-6 sm:p-6 sm:text-sm sm:leading-7">
      <code>
        <TypedComment text={comment} />

        <div>
          <CodeKeyword>const</CodeKeyword>
          {' '}
          <span className="text-foreground">{variableName}</span>
          <CodePunctuation>{': '}</CodePunctuation>
          <CodeType>{typeAnnotation}</CodeType>
          <CodePunctuation>{' = {'}</CodePunctuation>
        </div>

        {categories.map((category, index) => (
          <div key={category.key} className="pl-4 sm:pl-6">
            <CodeProperty>{category.key}</CodeProperty>
            <CodePunctuation>{': '}</CodePunctuation>
            <TechArray technologies={category.technologies} />
            {index < lastIndex ? <CodePunctuation>{','}</CodePunctuation> : null}
          </div>
        ))}

        <div>
          <CodePunctuation>{'};'}</CodePunctuation>
        </div>
      </code>
    </pre>
  );
}

function StackAccessibilityList({
  categories,
}: {
  categories: readonly ITechStackCategory[];
}): React.JSX.Element {
  return (
    <ul className="sr-only">
      {categories.map((category) => (
        <li key={category.key}>
          {category.label}: {category.technologies.join(', ')}
        </li>
      ))}
    </ul>
  );
}

export function ToolsSection(): React.JSX.Element {
  const heading = useScrollFadeUp();
  const panel = useScrollFadeUp(0.08);

  return (
    <section id="technologies" aria-labelledby="technologies-heading" className={SECTION_CLASS}>
      <motion.h2
        {...heading}
        id="technologies-heading"
        className="mb-8 font-display text-2xl font-medium tracking-tight text-foreground sm:mb-10 sm:text-3xl"
      >
        Mi caja de herramientas
      </motion.h2>

      <motion.div
        {...panel}
        className="overflow-hidden rounded-2xl border border-border bg-surface"
      >
        <div className="flex items-center gap-2 border-b border-border bg-surface-elevated px-4 py-3">
          <span className="size-2.5 rounded-full bg-border" aria-hidden="true" />
          <span className="size-2.5 rounded-full bg-border" aria-hidden="true" />
          <span className="size-2.5 rounded-full bg-border" aria-hidden="true" />
          <span className="ml-3 font-mono text-xs text-muted-foreground">
            {TECH_STACK.fileName}
          </span>
        </div>

        <StackCodeBlock snippet={TECH_STACK} />
        <StackAccessibilityList categories={TECH_STACK.categories} />
      </motion.div>
    </section>
  );
}
