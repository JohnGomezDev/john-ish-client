import { PLAYER_SHELL_CLASS } from '@/modules/songs/constants/music-player.constants';

import { PlayerControls } from './PlayerControls';
import { PlayerHeader } from './PlayerHeader';
import { Waveform } from './Waveform';

export function MusicPlayerSkeleton(): React.JSX.Element {
  return (
    <aside
      aria-label="Cargando canción favorita"
      aria-busy="true"
      className={PLAYER_SHELL_CLASS}
    >
      <PlayerHeader statusLabel="Cargando" />

      <div className="flex items-center gap-3.5 sm:gap-4">
        <div
          className="size-14 shrink-0 animate-pulse rounded-xl bg-muted sm:size-16 motion-reduce:animate-none"
          aria-hidden="true"
        />
        <div className="min-w-0 flex-1 space-y-2">
          <div className="h-5 w-3/4 animate-pulse rounded bg-muted motion-reduce:animate-none" />
          <div className="h-4 w-1/2 animate-pulse rounded bg-muted motion-reduce:animate-none" />
          <div className="h-3 w-2/5 animate-pulse rounded bg-muted motion-reduce:animate-none" />
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-center">
        <Waveform />
      </div>

      <div className="flex items-center justify-between gap-3">
        <div className="h-3 w-24 animate-pulse rounded bg-muted motion-reduce:animate-none" />
        <div className="h-3 w-10 animate-pulse rounded bg-muted motion-reduce:animate-none" />
      </div>

      <PlayerControls
        trackName=""
        canPlay={false}
        isPlaying={false}
        isLoading={false}
        onToggle={() => undefined}
      />
    </aside>
  );
}
