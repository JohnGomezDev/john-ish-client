import Link from 'next/link';

import { cn } from '../lib/cn';
import type { TLayoutTone } from '../types/layout.types';

interface ISiteBrandProps {
  href: string;
  name: string;
  className?: string;
  size?: 'sm' | 'md';
  /** Caret blink — intended for the header mark only. */
  animated?: boolean;
  /** `light` = blog (accent mark on light canvas). `dark` = web (accent mark on dark canvas). */
  tone?: TLayoutTone;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

function BrandMark({
  className,
  animated = false,
  tone = 'light',
  size = 'md',
}: {
  className?: string;
  animated?: boolean;
  tone?: TLayoutTone;
  size?: 'sm' | 'md';
}): React.JSX.Element {
  return (
    <span
      className={cn(
        'inline-flex shrink-0 items-center justify-center rounded-md font-display font-medium tracking-tight',
        size === 'sm' ? 'text-xs' : 'text-sm sm:text-base',
        tone === 'light'
          ? 'bg-secondary text-primary'
          : 'bg-accent text-accent-foreground',
        className,
      )}
      aria-hidden="true"
    >
      <span className="inline-flex items-baseline leading-none">
        <span>J</span>
        <span
          className={cn(
            animated && 'animate-brand-caret-blink motion-reduce:animate-none',
          )}
        >
          _
        </span>
      </span>
    </span>
  );
}

export function SiteBrand({
  href,
  name,
  className,
  size = 'md',
  animated = false,
  tone = 'light',
  onClick,
}: ISiteBrandProps): React.JSX.Element {
  const markSize = size === 'sm' ? 'size-7' : 'size-8 sm:size-9';
  const textSize = size === 'sm' ? 'text-base' : 'text-lg sm:text-xl';

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        'inline-flex items-center gap-2.5 transition-opacity',
        tone === 'light'
          ? 'text-primary hover:opacity-90 focus-visible:ring-ring'
          : 'text-foreground hover:opacity-80 focus-visible:ring-accent focus-visible:ring-offset-background',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        className,
      )}
    >
      <BrandMark className={markSize} animated={animated} tone={tone} size={size} />
      <span className={cn('font-display font-medium tracking-tight', textSize)}>
        {name}
      </span>
    </Link>
  );
}
