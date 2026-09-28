'use client';

import { Heart } from 'lucide-react';

import { formatDurationFromSeconds } from '@repo/lib/modules/songs/utils/song-data.utils';
import { Button } from '@repo/ui/components/ui/button';

import { useFavoriteSong } from '../hooks/use-favorite-song';
import { useSongActions } from '../hooks/use-song-actions';
import type { ISongSearchResult } from '../types/songs.types';
import { SongCover } from './SongCover';
import { SongPlayButton } from './SongPlayButton';

interface ISongSearchResultItemProps {
  result: ISongSearchResult;
}

export function SongSearchResultItem({
  result,
}: ISongSearchResultItemProps): React.JSX.Element {
  const trackId = String(result.id);
  const duration = formatDurationFromSeconds(result.duration);
  const { data: favoriteSong } = useFavoriteSong();
  const { handleSaveFavorite, isSavingFavorite } = useSongActions({ trackId });

  const isFavorite = favoriteSong?.trackId === trackId;

  return (
    <li className="border-b border-border last:border-b-0">
      <div className="flex items-start gap-3 px-4 py-4 sm:items-center sm:px-5">
        <SongCover src={result.album.cover} alt={`Portada de ${result.album.title}`} size="sm" />

        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-primary">{result.title}</p>
          <p className="mt-0.5 truncate text-sm text-neutral/65">{result.artist.name}</p>
          <p className="mt-1 truncate text-xs text-neutral/50">
            {result.album.title} • {duration} min
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <SongPlayButton previewUrl={result.preview} trackName={result.title} size="sm" />

          {isFavorite ? (
            <span className="inline-flex items-center rounded-full bg-secondary/40 px-2.5 py-0.5 text-xs font-medium text-primary">
              Favorita
            </span>
          ) : (
            <Button
              type="button"
              variant="outline"
              size="sm"
              disabled={isSavingFavorite}
              onClick={handleSaveFavorite}
              className="h-8 cursor-pointer border-primary bg-background text-primary hover:bg-secondary/40"
            >
              <Heart aria-hidden="true" className="size-3.5" />
              <span className="hidden sm:inline">
                {isSavingFavorite ? 'Guardando...' : 'Guardar'}
              </span>
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}
