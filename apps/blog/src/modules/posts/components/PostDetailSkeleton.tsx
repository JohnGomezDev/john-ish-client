export function PostDetailSkeleton(): React.JSX.Element {
  return (
    <div
      className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8"
      aria-busy="true"
      aria-label="Cargando artículo"
    >
      <div className="mb-6 flex flex-wrap gap-2 sm:mb-8">
        <div className="h-4 w-16 animate-pulse rounded bg-muted" />
        <div className="h-4 w-28 animate-pulse rounded bg-muted" />
        <div className="h-4 w-40 animate-pulse rounded bg-muted" />
      </div>

      <div className="h-7 w-36 animate-pulse rounded-full bg-muted" />

      <div className="mt-5 space-y-3">
        <div className="h-9 w-full animate-pulse rounded bg-muted sm:h-10" />
        <div className="h-9 w-4/5 animate-pulse rounded bg-muted sm:h-10" />
      </div>

      <div className="mt-6 h-28 animate-pulse rounded-xl border border-border bg-background sm:mt-8 sm:h-24" />

      <div className="mt-6 space-y-3 sm:mt-8">
        <div className="h-4 w-48 animate-pulse rounded bg-muted" />
        <div className="flex flex-wrap gap-2">
          <div className="h-7 w-24 animate-pulse rounded-full bg-muted" />
          <div className="h-7 w-32 animate-pulse rounded-full bg-muted" />
          <div className="h-7 w-28 animate-pulse rounded-full bg-muted" />
        </div>
      </div>

      <div className="mt-8 space-y-4 border-t border-border pt-8 sm:mt-10 sm:pt-10">
        <div className="h-4 w-full animate-pulse rounded bg-muted" />
        <div className="h-4 w-full animate-pulse rounded bg-muted" />
        <div className="h-4 w-5/6 animate-pulse rounded bg-muted" />
        <div className="h-4 w-full animate-pulse rounded bg-muted" />
        <div className="h-4 w-3/4 animate-pulse rounded bg-muted" />
      </div>
    </div>
  );
}
