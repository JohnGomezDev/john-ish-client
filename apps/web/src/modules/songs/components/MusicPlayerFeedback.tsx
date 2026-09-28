import { PLAYER_SHELL_CLASS } from '@/modules/songs/constants/music-player.constants';

import { AlbumCoverPlaceholder } from './AlbumCoverPlaceholder';
import { PlayerHeader } from './PlayerHeader';

interface IMusicPlayerFeedbackProps {
  title: string;
  message: string;
  onRetry?: () => void;
}

export function MusicPlayerFeedback({
  title,
  message,
  onRetry,
}: IMusicPlayerFeedbackProps): React.JSX.Element {
  return (
    <aside aria-label={title} className={PLAYER_SHELL_CLASS}>
      <PlayerHeader statusLabel="Sin audio" />

      <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center">
        <AlbumCoverPlaceholder />
        <div className="space-y-1.5">
          <p className="font-display text-base font-medium text-foreground">{title}</p>
          <p className="max-w-[16rem] text-sm text-muted-foreground">{message}</p>
        </div>
        {onRetry ? (
          <button
            type="button"
            onClick={onRetry}
            className="mt-1 rounded-full border border-border px-4 py-1.5 text-sm text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Reintentar
          </button>
        ) : null}
      </div>
    </aside>
  );
}
