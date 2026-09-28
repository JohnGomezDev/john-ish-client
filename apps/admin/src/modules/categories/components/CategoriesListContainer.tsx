'use client';

import { useCategories } from '@/modules/categories/hooks/use-categories';

import { ROUTES } from '@/lib/constants/routes.constants';
import { ListPageHeader } from '@/modules/common/components/ListPageHeader';
import { ListPageToolbar } from '@/modules/common/components/ListPageToolbar';

import { CategoriesTable } from './CategoriesTable';

export function CategoriesListContainer(): React.JSX.Element {
  const { data, isLoading, isError } = useCategories();

  const renderContent = (): React.JSX.Element => {
    if (isLoading) {
      return <p className="text-sm text-neutral/65">Cargando categorías...</p>;
    }

    if (isError) {
      return <p className="text-sm text-destructive">No se pudieron cargar las categorías.</p>;
    }

    if (!data?.length) {
      return (
        <div className="rounded-xl border border-dashed border-border bg-background px-6 py-12 text-center">
          <p className="text-sm text-neutral/65">Aún no hay categorías registradas.</p>
        </div>
      );
    }

    return <CategoriesTable categories={data} />;
  };

  return (
    <div className="space-y-6">
      <ListPageHeader title="Categorías">
        <ListPageToolbar
          createHref={ROUTES.admin.categorias.create}
          createLabel="Crear categoría"
        />
      </ListPageHeader>

      {renderContent()}
    </div>
  );
}
