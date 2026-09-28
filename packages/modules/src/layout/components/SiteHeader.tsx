import { cn } from '../lib/cn';
import type { TLayoutTone } from '../types/layout.types';

interface ISiteHeaderProps {
  brand: React.ReactNode;
  children?: React.ReactNode;
  /** Optional strip below the main bar (e.g. mobile nav). */
  below?: React.ReactNode;
  className?: string;
  tone?: TLayoutTone;
}

export function SiteHeader({
  brand,
  children,
  below,
  className,
  tone = 'light',
}: ISiteHeaderProps): React.JSX.Element {
  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b border-border backdrop-blur',
        tone === 'light'
          ? 'bg-background/95 supports-[backdrop-filter]:bg-background/80'
          : 'bg-background/90 supports-[backdrop-filter]:bg-background/80',
        className,
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        {brand}
        {children}
      </div>
      {below}
    </header>
  );
}
