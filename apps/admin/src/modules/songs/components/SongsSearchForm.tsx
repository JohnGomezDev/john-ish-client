'use client';

import { Search } from 'lucide-react';
import type { UseFormRegisterReturn } from 'react-hook-form';

import { Button } from '@repo/ui/components/ui/button';
import { Input } from '@repo/ui/components/ui/input';

interface ISongsSearchFormProps {
  queryField: UseFormRegisterReturn<'query'>;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  queryError?: string;
  isSearching?: boolean;
}

export function SongsSearchForm({
  queryField,
  onSubmit,
  queryError,
  isSearching = false,
}: ISongsSearchFormProps): React.JSX.Element {
  return (
    <form
      onSubmit={onSubmit}
      className="rounded-xl border border-border bg-background p-4 shadow-sm sm:p-5"
      noValidate
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
        <div className="min-w-0 flex-1">
          <label className="relative block">
            <span className="sr-only">Buscar canciones</span>
            <Search
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              type="search"
              placeholder="Buscar por título, artista o álbum"
              autoComplete="off"
              className="h-10 pl-10"
              aria-invalid={Boolean(queryError)}
              {...queryField}
            />
          </label>
          {queryError ? <p className="mt-1.5 text-sm text-destructive">{queryError}</p> : null}
        </div>

        <Button
          type="submit"
          disabled={isSearching}
          className="h-10 w-full shrink-0 cursor-pointer bg-primary hover:bg-primary/90 sm:w-auto"
        >
          <Search aria-hidden="true" className="size-4" />
          {isSearching ? 'Buscando...' : 'Buscar canciones'}
        </Button>
      </div>
    </form>
  );
}
