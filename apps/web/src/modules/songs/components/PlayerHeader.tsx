interface IPlayerHeaderProps {
  statusLabel: string;
}

export function PlayerHeader({ statusLabel }: IPlayerHeaderProps): React.JSX.Element {
  return (
    <div className="flex items-center justify-between gap-3">
      <p className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
        Mi canción favorita del momento
      </p>
      <span className="font-mono text-[11px] text-accent">{statusLabel}</span>
    </div>
  );
}
