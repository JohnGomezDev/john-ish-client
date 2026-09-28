interface IPlayerHeaderProps {
  statusLabel: string;
}

export function PlayerHeader({ statusLabel }: IPlayerHeaderProps): React.JSX.Element {
  return (
    <div className="flex items-center justify-between gap-3">
      <p className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
        Mi canción favorita del momento
      </p>
      <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-accent">
        <span className="size-1.5 rounded-full bg-accent opacity-40" aria-hidden="true" />
        {statusLabel}
      </span>
    </div>
  );
}
