'use client';

import { useSongPreview } from '@repo/lib/modules/songs/hooks/use-song-preview';
import type { ISong } from '@repo/lib/modules/songs/types/songs.types';
import { formatSongArtists } from '@repo/lib/modules/songs/utils/song-data.utils';

import { PLAYER_SHELL_CLASS } from '@/modules/songs/constants/music-player.constants';

import { AlbumCover } from './AlbumCover';
import { DurationLabel } from './DurationLabel';
import { PlayerControls } from './PlayerControls';
import { PlayerHeader } from './PlayerHeader';
import { Waveform } from './Waveform';

interface IMusicPlayerContentProps {
  song: ISong;
}

export function MusicPlayerContent({ song }: IMusicPlayerContentProps): React.JSX.Element {
  const artistNames = formatSongArtists(song.artists);
  const { isPlaying, isLoading, canPlay, toggle } = useSongPreview(song.previewUrl);

  const statusLabel = isLoading
    ? 'Cargando'
    : isPlaying
      ? 'Reproduciendo'
      : canPlay
        ? 'En pausa'
        : 'Sin preview';

  return (
    <aside
      aria-label={`Reproductor de música — ${song.trackName} de ${artistNames}`}
      className={PLAYER_SHELL_CLASS}
    >
      <PlayerHeader statusLabel={statusLabel} />

      <div className="flex items-center gap-3.5 sm:gap-4">
        <AlbumCover song={song} />
        <div className="min-w-0 flex-1">
          <p className="truncate font-display text-base font-medium text-foreground sm:text-lg">
            {song.trackName}
          </p>
          <p className="mt-0.5 truncate text-sm text-muted-foreground">{artistNames}</p>
          <p className="mt-1 truncate font-mono text-[11px] text-muted-foreground/70">
            {song.albumName}
          </p>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-center">
        <Waveform isPlaying={isPlaying} />
      </div>

      <DurationLabel durationMs={song.durationMs} />

      <PlayerControls
        trackName={song.trackName}
        deezerUrl={song.url}
        canPlay={canPlay}
        isPlaying={isPlaying}
        isLoading={isLoading}
        onToggle={toggle}
      />
    </aside>
  );
}
