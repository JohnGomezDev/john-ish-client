'use client';

import Link from 'next/link';

import { Button } from '@repo/ui/components/ui/button';

import { ROUTES } from '@/lib/constants/routes.constants';

interface IPostErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function PostError({ error, reset }: IPostErrorProps): React.JSX.Element {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
      <h1 className="font-display text-2xl font-medium text-primary sm:text-3xl">
        Algo salió mal
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral/65 sm:text-base">
        No pudimos cargar este artículo. {error.message || 'Inténtalo de nuevo en unos momentos.'}
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button type="button" onClick={reset} className="cursor-pointer">
          Reintentar
        </Button>
        <Button asChild variant="outline" className="cursor-pointer">
          <Link href={ROUTES.home}>Volver al inicio</Link>
        </Button>
      </div>
    </div>
  );
}
