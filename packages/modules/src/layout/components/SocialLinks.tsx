import { cn } from '../lib/cn';
import type { ISocialLink, TLayoutTone, TSocialNetworkId } from '../types/layout.types';

import {
  FacebookIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from './SocialIcons';

interface ISocialLinksProps {
  links: readonly ISocialLink[];
  className?: string;
  /** Visually denser icons for the compact header strip. */
  size?: 'sm' | 'md';
  tone?: TLayoutTone;
  /**
   * When true, appends a GitHub button if `githubHref` is set and the links
   * list does not already include github. Intended for the web app only.
   */
  showGithub?: boolean;
  githubHref?: string;
  githubLabel?: string;
}

function SocialIcon({
  id,
  className,
}: {
  id: TSocialNetworkId;
  className?: string;
}): React.JSX.Element | null {
  switch (id) {
    case 'facebook':
      return <FacebookIcon className={className} />;
    case 'instagram':
      return <InstagramIcon className={className} />;
    case 'x':
      return <XIcon className={className} />;
    case 'linkedin':
      return <LinkedInIcon className={className} />;
    case 'github':
      return <GitHubIcon className={className} />;
    default:
      return null;
  }
}

function resolveLinks({
  links,
  showGithub,
  githubHref,
  githubLabel,
}: Pick<
  ISocialLinksProps,
  'links' | 'showGithub' | 'githubHref' | 'githubLabel'
>): readonly ISocialLink[] {
  if (!showGithub || !githubHref) {
    return links;
  }

  if (links.some((link) => link.id === 'github')) {
    return links;
  }

  return [
    ...links,
    {
      id: 'github',
      label: githubLabel ?? 'GitHub',
      href: githubHref,
    },
  ];
}

export function SocialLinks({
  links,
  className,
  size = 'md',
  tone = 'light',
  showGithub = false,
  githubHref,
  githubLabel,
}: ISocialLinksProps): React.JSX.Element {
  const iconClass = size === 'sm' ? 'size-3.5' : 'size-4';
  const buttonClass = size === 'sm' ? 'size-8 rounded-md' : 'size-9 rounded-lg sm:size-10';
  const resolvedLinks = resolveLinks({
    links,
    showGithub,
    githubHref,
    githubLabel,
  });

  const toneClasses =
    tone === 'light'
      ? 'border-border bg-background text-neutral hover:border-secondary hover:bg-secondary/20 hover:text-primary focus-visible:ring-ring'
      : 'border-border bg-surface text-muted-foreground hover:border-accent hover:bg-accent/10 hover:text-foreground focus-visible:ring-accent focus-visible:ring-offset-background';

  return (
    <ul className={cn('flex items-center gap-2', className)}>
      {resolvedLinks.map((link) => (
        <li key={link.id}>
          <a
            href={link.href}
            aria-label={link.label}
            className={cn(
              'inline-flex items-center justify-center border transition-colors',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
              buttonClass,
              toneClasses,
            )}
            {...(link.href.startsWith('http') && {
              target: '_blank',
              rel: 'noopener noreferrer',
            })}
          >
            <SocialIcon id={link.id} className={iconClass} />
          </a>
        </li>
      ))}
    </ul>
  );
}
