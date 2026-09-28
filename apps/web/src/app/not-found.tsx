import Link from 'next/link';

import { ROUTES } from '@/lib/constants/routes.constants';

export default function NotFoundPage(): React.JSX.Element {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col items-start gap-4 px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl font-medium text-foreground">
        Página no encontrada
      </h1>
      <p className="text-muted-foreground">La ruta solicitada no existe.</p>
      <Link
        href={ROUTES.home}
        className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        Volver al inicio
      </Link>
    </section>
  );
}
