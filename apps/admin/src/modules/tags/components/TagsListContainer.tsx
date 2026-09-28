'use client';

import { useTags } from '@/modules/tags/hooks/use-tags';

import { ROUTES } from '@/lib/constants/routes.constants';
import { ListPageHeader } from '@/modules/common/components/ListPageHeader';
import { ListPageToolbar } from '@/modules/common/components/ListPageToolbar';

import { TagsTable } from './TagsTable';

export function TagsListContainer(): React.JSX.Element {
  const { data, isLoading, isError } = useTags();

  const renderContent = (): React.JSX.Element => {
    if (isLoading) {
      return <p className="text-sm text-neutral/65">Cargando tags...</p>;
    }

    if (isError) {
      return <p className="text-sm text-destructive">No se pudieron cargar los tags.</p>;
    }

    if (!data?.length) {
      return (
        <div className="rounded-xl border border-dashed border-border bg-background px-6 py-12 text-center">
          <p className="text-sm text-neutral/65">Aún no hay tags registrados.</p>
        </div>
      );
    }

    return <TagsTable tags={data} />;
  };

  return (
    <div className="space-y-6">
      <ListPageHeader title="Tags">
        <ListPageToolbar createHref={ROUTES.admin.tags.create} createLabel="Crear tag" />
      </ListPageHeader>

      {renderContent()}
    </div>
  );
}
