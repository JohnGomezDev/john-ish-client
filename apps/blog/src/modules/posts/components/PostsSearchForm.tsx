'use client';

import { Search, X } from 'lucide-react';

import { Button } from '@repo/ui/components/ui/button';
import { Input } from '@repo/ui/components/ui/input';

import { usePostsSearchForm } from '../hooks/use-posts-search-form';

export function PostsSearchForm(): React.JSX.Element {
  const { searchField, onSubmit, clearSearch, watch } = usePostsSearchForm();
  const currentValue = watch('search');

  return (
    <section className="rounded-xl border border-border bg-background p-4 shadow-sm sm:p-5">
      <h2 className="mb-3 text-xs font-semibold tracking-[0.12em] text-neutral uppercase">
        Búsqueda en vivo
      </h2>

      <form onSubmit={onSubmit} className="flex flex-col gap-2.5">
        <div className="relative">
          <Search
            className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-neutral/45"
            aria-hidden
          />
          <Input
            {...searchField}
            type="text"
            placeholder="Buscar artículos, temas o autores..."
            className="h-11 rounded-lg border-border bg-background pr-10 pl-10 shadow-none"
            aria-label="Buscar artículos"
          />
          {currentValue ? (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute top-1/2 right-2.5 flex size-6 -translate-y-1/2 cursor-pointer items-center justify-center rounded-md text-neutral/50 transition-colors hover:bg-muted hover:text-neutral"
              aria-label="Limpiar búsqueda"
            >
              <X className="size-4" />
            </button>
          ) : null}
        </div>

        <Button type="submit" className="h-10 w-full cursor-pointer">
          Buscar
        </Button>
      </form>
    </section>
  );
}
