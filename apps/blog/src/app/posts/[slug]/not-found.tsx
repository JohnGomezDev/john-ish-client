import Link from 'next/link';

import { Button } from '@repo/ui/components/ui/button';

import { ROUTES } from '@/lib/constants/routes.constants';

export default function PostNotFound(): React.JSX.Element {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
      <p className="text-sm font-semibold tracking-wide text-neutral/50 uppercase">404</p>
      <h1 className="mt-2 font-display text-2xl font-medium text-primary sm:text-3xl">
        Post no encontrado
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral/65 sm:text-base">
        El artículo que buscas no existe o ya no está disponible.
      </p>
      <Button asChild className="mt-8 cursor-pointer">
        <Link href={ROUTES.home}>Volver al inicio</Link>
      </Button>
    </div>
  );
}
