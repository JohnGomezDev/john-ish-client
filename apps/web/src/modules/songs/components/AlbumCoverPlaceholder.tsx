export function AlbumCoverPlaceholder(): React.JSX.Element {
  return (
    <div
      className="relative flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-accent/25 via-surface-elevated to-foreground/10 sm:size-16"
      aria-hidden="true"
    >
      <span className="absolute inset-[18%] rounded-full border border-accent/20" />
      <span className="absolute inset-[32%] rounded-full border border-accent/15" />
      <span className="absolute size-2.5 rounded-full bg-accent/80" />
    </div>
  );
}
