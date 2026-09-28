'use client';

import { getApiErrorMessage } from '@repo/lib/utils/get-api-error-message';

import { useSearchSongs } from '../hooks/use-search-songs';
import { useSongsSearchForm } from '../hooks/use-songs-search-form';
import { SongsSearchForm } from './SongsSearchForm';
import { SongsSearchResults } from './SongsSearchResults';

export function SongsSearchSection(): React.JSX.Element {
  const { queryField, onSubmit, submittedQuery, errors } = useSongsSearchForm();
  const { data, isLoading, isFetching, isError, error } = useSearchSongs(submittedQuery);

  const hasSubmitted = submittedQuery.length > 0;
  const isSearching = hasSubmitted && (isLoading || isFetching);

  const renderResults = (): React.JSX.Element => {
    if (!hasSubmitted) {
      return (
        <div className="rounded-xl border border-dashed border-border bg-background px-6 py-12 text-center">
          <p className="text-sm text-neutral/65">
            Usa el buscador para encontrar canciones.
          </p>
        </div>
      );
    }

    if (isLoading) {
      return <p className="text-sm text-neutral/65">Buscando canciones...</p>;
    }

    if (isError) {
      return (
        <p className="text-sm text-destructive">
          {getApiErrorMessage(error, 'No se pudieron buscar canciones.')}
        </p>
      );
    }

    if (!data?.length) {
      return (
        <div className="rounded-xl border border-dashed border-border bg-background px-6 py-12 text-center">
          <p className="text-sm text-neutral/65">No se encontraron canciones para tu búsqueda.</p>
        </div>
      );
    }

    return <SongsSearchResults results={data} />;
  };

  return (
    <>
      <section className="space-y-3">
        <div>
          <h2 className="text-lg font-semibold text-primary">Buscar canciones</h2>
          <p className="mt-1 text-sm text-neutral/65">
            Encuentra pistas por título, artista o álbum.
          </p>
        </div>
        <SongsSearchForm
          queryField={queryField}
          onSubmit={onSubmit}
          queryError={errors.query?.message}
          isSearching={isSearching}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-primary">Canciones encontradas</h2>
        {renderResults()}
      </section>
    </>
  );
}
