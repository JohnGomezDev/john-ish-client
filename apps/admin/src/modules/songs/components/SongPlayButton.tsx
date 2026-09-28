'use client';

import { Loader2, Pause, Play } from 'lucide-react';

import { Button } from '@repo/ui/components/ui/button';
import { cn } from '@repo/ui/lib/utils';

import { useSongPreview } from '@repo/lib/modules/songs/hooks/use-song-preview';

interface ISongPlayButtonProps {
  previewUrl: string | null;
  trackName: string;
  size?: 'sm' | 'lg';
}

export function SongPlayButton({
  previewUrl,
  trackName,
  size = 'sm',
}: ISongPlayButtonProps): React.JSX.Element {
  const { isPlaying, isLoading, canPlay, toggle } = useSongPreview(previewUrl);

  const Icon = isLoading ? Loader2 : isPlaying ? Pause : Play;
  const iconClassName = cn(
    size === 'lg' ? 'size-5 sm:size-6' : 'size-3.5',
    isPlaying || isLoading ? 'fill-none' : 'fill-current',
    isLoading && 'animate-spin',
  );

  const ariaLabel = !canPlay
    ? `Sin preview para ${trackName}`
    : isLoading
      ? `Cargando ${trackName}`
      : isPlaying
        ? `Pausar ${trackName}`
        : `Reproducir ${trackName}`;

  if (size === 'lg') {
    return (
      <Button
        type="button"
        size="icon-lg"
        disabled={!canPlay}
        onClick={toggle}
        className={cn(
          'size-12 shrink-0 rounded-full sm:size-16',
          canPlay
            ? 'cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90'
            : 'bg-neutral/30 text-white',
        )}
        aria-label={ariaLabel}
        aria-busy={isLoading}
      >
        <Icon aria-hidden="true" className={iconClassName} />
      </Button>
    );
  }

  return (
    <Button
      type="button"
      size="icon-sm"
      variant="outline"
      disabled={!canPlay}
      onClick={toggle}
      className={cn(
        'rounded-full border-secondary bg-secondary/30 text-primary hover:bg-secondary/40',
        canPlay ? 'cursor-pointer' : null,
      )}
      aria-label={ariaLabel}
      aria-busy={isLoading}
    >
      <Icon aria-hidden="true" className={iconClassName} />
    </Button>
  );
}
