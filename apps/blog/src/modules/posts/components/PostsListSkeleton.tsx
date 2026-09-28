export function PostsListSkeleton(): React.JSX.Element {
  return (
    <div className="flex flex-col gap-4" aria-busy="true" aria-label="Cargando artículos">
      {Array.from({ length: 3 }, (_, index) => (
        <div
          key={index}
          className="h-52 animate-pulse rounded-xl border border-border bg-background p-5 sm:h-56 sm:p-6"
        >
          <div className="mb-4 h-4 w-40 rounded bg-muted" />
          <div className="mb-2 h-7 w-4/5 rounded bg-muted" />
          <div className="mb-2 h-4 w-full rounded bg-muted" />
          <div className="mb-6 h-4 w-2/3 rounded bg-muted" />
          <div className="flex items-center justify-between border-t border-border pt-4">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-muted" />
              <div className="space-y-2">
                <div className="h-3 w-28 rounded bg-muted" />
                <div className="h-3 w-16 rounded bg-muted" />
              </div>
            </div>
            <div className="h-9 w-32 rounded-md bg-muted" />
          </div>
        </div>
      ))}
    </div>
  );
}
