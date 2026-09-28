'use client';

import { ROUTES } from '@/lib/constants/routes.constants';
import { ListPageHeader } from '@/modules/common/components/ListPageHeader';
import { ListPageToolbar } from '@/modules/common/components/ListPageToolbar';

import { useAdminPosts } from '../hooks/use-admin-posts';
import { usePostsPagination } from '../hooks/use-posts-pagination';
import { usePostsSearchForm } from '../hooks/use-posts-search-form';
import { PostsListPagination } from './PostsListPagination';
import { PostsTable } from './PostsTable';

export function PostsListContainer(): React.JSX.Element {
  const { searchField, debouncedSearch } = usePostsSearchForm();
  const {
    page,
    goToPreviousPage,
    goToNextPage,
    getPageRange,
    isPreviousDisabled,
    isNextDisabled,
  } = usePostsPagination(debouncedSearch);
  const { data, isLoading, isError, isFetching } = useAdminPosts({
    page,
    search: debouncedSearch || undefined,
  });

  const renderContent = (): React.JSX.Element => {
    if (isLoading) {
      return <p className="text-sm text-neutral/65">Cargando posts...</p>;
    }

    if (isError) {
      return <p className="text-sm text-destructive">No se pudieron cargar los posts.</p>;
    }

    if (!data?.items.length) {
      return (
        <div className="rounded-xl border border-dashed border-border bg-background px-6 py-12 text-center">
          <p className="text-sm text-neutral/65">
            {debouncedSearch
              ? 'No se encontraron posts para tu búsqueda.'
              : 'Aún no hay posts publicados.'}
          </p>
        </div>
      );
    }

    return (
      <>
        <PostsTable posts={data.items} />
        <PostsListPagination
          meta={data.meta}
          isLoading={isFetching}
          onPreviousPage={goToPreviousPage}
          onNextPage={goToNextPage}
          getPageRange={getPageRange}
          isPreviousDisabled={isPreviousDisabled}
          isNextDisabled={isNextDisabled}
        />
      </>
    );
  };

  return (
    <div className="space-y-6">
      <ListPageHeader title="Posts">
        <ListPageToolbar
          createHref={ROUTES.admin.posts.create}
          createLabel="Crear post"
          searchField={searchField}
          searchPlaceholder="Buscar posts..."
        />
      </ListPageHeader>

      {renderContent()}
    </div>
  );
}
