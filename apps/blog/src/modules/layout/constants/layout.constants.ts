import { ROUTES } from '@/lib/constants/routes.constants';

/** Display name in the UI. */
export const SITE_NAME = 'John-ish';
/** Public blog title shown in the UI. */
export const SITE_FULL_NAME = 'John-ish Blog';
/** Registered brand / domain label (no hyphen). */
export const SITE_BRAND = 'John-ish';
/** Blog public hostname placeholder. */
export const SITE_DOMAIN = 'blog.johnish.dev';

export const SITE_DESCRIPTION =
  'Comparto lo que construyo, aprendo y descubro mientras desarrollo software: experiencias reales, conceptos, decisiones técnicas y proyectos. Sin humo ni recetas mágicas.';

export interface INavLink {
  label: string;
  href: string;
}

export const FOOTER_LEGAL_LINKS: readonly INavLink[] = [
  { label: 'Política de Privacidad', href: ROUTES.privacyPolicy },
  { label: 'Términos de uso', href: ROUTES.termsOfUse }
] as const;
