import { User } from 'lucide-react';

import {
  formatDurationFromMs,
  formatSongArtists,
} from '@repo/lib/modules/songs/utils/song-data.utils';

import type { ISong } from '../types/songs.types';
import { SongCover } from './SongCover';
import { SongPlayButton } from './SongPlayButton';

interface IFavoriteSongCardProps {
  song: ISong;
}

export function FavoriteSongCard({ song }: IFavoriteSongCardProps): React.JSX.Element {
  const artistNames = formatSongArtists(song.artists);
  const duration = formatDurationFromMs(song.durationMs);

  return (
    <article className="rounded-xl border border-border bg-background p-4 shadow-sm sm:p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="flex min-w-0 flex-1 gap-3 sm:gap-4">
          <SongCover src={song.albumCoverUrl} alt={`Portada de ${song.albumName}`} size="lg" />

          <div className="min-w-0 flex-1 self-center">
            <h3 className="text-lg font-bold tracking-tight text-primary sm:text-2xl">
              {song.trackName}
            </h3>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-neutral/80">
              <User aria-hidden="true" className="size-4 shrink-0" />
              <span className="truncate">{artistNames}</span>
            </p>
            <p className="mt-2 text-sm text-neutral/65">
              Álbum: {song.albumName} • Duración: {duration}
            </p>
          </div>
        </div>

        <div className="flex justify-center sm:shrink-0 sm:justify-end">
          <SongPlayButton previewUrl={song.previewUrl} trackName={song.trackName} size="lg" />
        </div>
      </div>
    </article>
  );
}
