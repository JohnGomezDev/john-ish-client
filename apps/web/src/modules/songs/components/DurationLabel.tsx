import { formatDurationFromMs } from '@repo/lib/modules/songs/utils/song-data.utils';

interface IDurationLabelProps {
  durationMs: number;
}

export function DurationLabel({ durationMs }: IDurationLabelProps): React.JSX.Element {
  return (
    <div className="flex items-center justify-between gap-3">
      <p className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
        Duración total
      </p>
      <span className="font-mono text-[11px] text-muted-foreground">
        {formatDurationFromMs(durationMs)}
      </span>
    </div>
  );
}
