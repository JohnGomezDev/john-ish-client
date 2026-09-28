interface IPlayerControlsProps {
  trackName: string;
  deezerUrl?: string;
  canPlay: boolean;
  isPlaying: boolean;
  isLoading: boolean;
  onToggle: () => void;
}

function PlayIcon(): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="relative size-5 translate-x-0.5"
      aria-hidden="true"
    >
      <path d="M5 3l14 9-14 9V3z" />
    </svg>
  );
}

function PauseIcon(): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="relative size-5"
      aria-hidden="true"
    >
      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
    </svg>
  );
}

function LoadingIcon(): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="relative size-5 animate-spin motion-reduce:animate-none"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeOpacity="0.25"
        strokeWidth="2.5"
      />
      <path
        d="M21 12a9 9 0 0 0-9-9"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PlayerControls({
  trackName,
  deezerUrl,
  canPlay,
  isPlaying,
  isLoading,
  onToggle,
}: IPlayerControlsProps): React.JSX.Element {
  const ariaLabel = !canPlay
    ? `Sin preview para ${trackName}`
    : isLoading
      ? `Cargando ${trackName}`
      : isPlaying
        ? `Pausar ${trackName}`
        : `Reproducir preview de ${trackName}`;

  return (
    <div className="flex items-center gap-2.5 sm:gap-3">
      <button
        type="button"
        aria-label={ariaLabel}
        aria-busy={isLoading}
        disabled={!canPlay}
        onClick={onToggle}
        className="group relative flex size-12 shrink-0 cursor-pointer items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-[0_0_0_1px_color-mix(in_srgb,var(--accent)_35%,transparent),0_8px_24px_-8px_color-mix(in_srgb,var(--accent)_55%,transparent)] transition-[opacity,transform] hover:enabled:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:cursor-not-allowed disabled:opacity-60 motion-reduce:hover:enabled:scale-100"
      >
        <span
          className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/15 to-transparent opacity-80"
          aria-hidden="true"
        />
        {isLoading ? <LoadingIcon /> : isPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>

      {deezerUrl ? (
        <a
          href={deezerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex min-h-12 min-w-0 flex-1 items-center justify-between gap-3 rounded-xl border border-border bg-surface-elevated/60 px-3.5 py-2.5 transition-colors hover:border-accent/40 hover:bg-surface-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <span className="min-w-0 text-left">
            <span className="block truncate text-sm font-semibold text-foreground transition-colors group-hover:text-accent">
              Escuchar canción completa
            </span>
            <span className="mt-0.5 block truncate font-mono text-[11px] text-muted-foreground">
              Abrir en Deezer
            </span>
          </span>
          <span
            className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-border bg-background/50 text-muted-foreground transition-colors group-hover:border-accent/35 group-hover:text-accent"
            aria-hidden="true"
          >
            <svg viewBox="0 0 24 24" fill="none" className="size-3.5">
              <path
                d="M7 17 17 7M9 7h8v8"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>
      ) : (
        <div
          className="min-h-12 min-w-0 flex-1 rounded-xl border border-border/60 bg-muted/40"
          aria-hidden="true"
        />
      )}
    </div>
  );
}
