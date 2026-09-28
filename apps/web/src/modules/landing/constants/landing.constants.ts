/** Display name in the UI. */
export const SITE_NAME = 'John-ish';
/** Registered brand / domain label (no hyphen). */
export const SITE_BRAND = 'John-ish';

/** Shared vertical rhythm between landing sections (mobile-first). */
export const SECTION_CLASS =
  'mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24';

export interface INavLink {
  label: string;
  href: string;
}

export const GITHUB_HREF = 'https://github.com/JohnGomezDev';
export const BLOG_HREF = 'http://localhost:3002';

export const NAV_LINKS: readonly INavLink[] = [
  { label: 'Tecnologías', href: '#technologies' },
  { label: 'Vibras', href: '#vibes' },
  { label: 'Blog', href: '#blog' },
] as const;

export interface ITechStackCategory {
  /** Object key shown in the code editor. */
  key: string;
  /** Human-readable category label (accessibility / SEO). */
  label: string;
  technologies: readonly string[];
}

export interface ITechStackSnippet {
  fileName: string;
  /** Comment shown above the const (supports typing animation). */
  comment: string;
  variableName: string;
  /** Fictional TS type annotation rendered next to the variable. */
  typeAnnotation: string;
  categories: readonly ITechStackCategory[];
}

export const TECH_STACK: ITechStackSnippet = {
  fileName: 'stack.ts',
  comment:
    '// Stack que uso para construir productos sólidos y mantenibles.',
  variableName: 'stack',
  typeAnnotation: 'Record<string, string[]>',
  categories: [
    {
      key: 'frontend',
      label: 'Frontend',
      technologies: ['React', 'Next.js', 'Tailwind'],
    },
    {
      key: 'backend',
      label: 'Backend',
      technologies: ['Node.js', 'Nest.js', 'Laravel'],
    },
    {
      key: 'databases',
      label: 'Bases de datos',
      technologies: ['MySQL', 'PostgreSQL', 'MongoDB'],
    },
    {
      key: 'tools',
      label: 'Herramientas',
      technologies: ['Docker', 'Git', 'Linux'],
    },
  ],
};

/** Número de WhatsApp con código de país, sin espacios ni guiones. */
export const WHATSAPP_NUMBER = '+573009592092';
export const WHATSAPP_MESSAGE =
  'Hola John, llegué a través de John-ish y me gustaría hablar contigo';
