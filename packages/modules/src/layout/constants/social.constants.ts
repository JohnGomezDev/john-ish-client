import type { ISocialLink } from '../types/layout.types';

/** Shared profile links for web and blog chrome (header / footer). */
export const SOCIAL_LINKS: readonly ISocialLink[] = [
  { id: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61594588869417' },
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/johnish.dev' },
  { id: 'x', label: 'X', href: 'https://x.com/johnish_dev' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/john-alejandro-gómez-gonzález-6940451a5' },
] as const;
