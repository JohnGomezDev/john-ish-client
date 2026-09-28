'use client';

interface IErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ reset }: IErrorPageProps): React.JSX.Element {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col items-start gap-4 px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl font-medium text-foreground">
        Algo salió mal
      </h1>
      <p className="text-muted-foreground">Ocurrió un error inesperado.</p>
      <button
        type="button"
        onClick={reset}
        className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        Reintentar
      </button>
    </section>
  );
}
