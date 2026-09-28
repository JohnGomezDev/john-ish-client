'use client';

import { cn } from '@repo/ui/lib/utils';

import { useCategories } from '@/modules/categories/hooks/use-categories';

import { usePostsCategoryFilter } from '../hooks/use-posts-category-filter';

export function PostsCategoriesNav(): React.JSX.Element {
  const { categorySlug, setCategorySlug } = usePostsCategoryFilter();
  const { data: categories = [], isLoading, isError } = useCategories();
  const isAllActive = !categorySlug;
  const total = categories.length;

  return (
    <section className="rounded-xl border border-border bg-background p-4 shadow-sm sm:p-5">
      <div className="mb-3 flex items-center justify-between gap-2">
        <h2 className="text-xs font-semibold tracking-[0.12em] text-neutral uppercase">
          Categorías temáticas
        </h2>
        {!isLoading && !isError ? (
          <span className="text-xs text-neutral/55">Total {total}</span>
        ) : null}
      </div>

      {isLoading ? (
        <p className="text-sm text-neutral/65">Cargando categorías...</p>
      ) : null}

      {isError ? (
        <p className="text-sm text-destructive">No se pudieron cargar las categorías.</p>
      ) : null}

      {!isLoading && !isError ? (
        <nav aria-label="Categorías">
          <ul className="flex flex-col gap-1.5">
            <li>
              <button
                type="button"
                onClick={() => setCategorySlug(undefined)}
                className={cn(
                  'group flex w-full cursor-pointer items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors',
                  isAllActive
                    ? 'bg-secondary font-medium text-secondary-foreground'
                    : 'text-neutral/75 hover:bg-muted',
                )}
                aria-current={isAllActive ? 'true' : undefined}
              >
                <span>Todas</span>
                <span
                  className={cn(
                    'inline-flex min-w-7 items-center justify-center rounded-full px-2 py-0.5 text-xs font-semibold transition-colors',
                    isAllActive
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-neutral/70 group-hover:bg-tertiary/70 group-hover:text-tertiary-foreground',
                  )}
                >
                  {total}
                </span>
              </button>
            </li>

            {categories.map((category) => {
              const isActive = categorySlug === category.slug;

              return (
                <li key={category.id}>
                  <button
                    type="button"
                    onClick={() => setCategorySlug(category.slug)}
                    className={cn(
                      'group flex w-full cursor-pointer items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors',
                      isActive
                        ? 'bg-secondary font-medium text-secondary-foreground'
                        : 'text-neutral/75 hover:bg-muted',
                    )}
                    aria-current={isActive ? 'true' : undefined}
                  >
                    <span className="flex items-center gap-2.5">
                      <span
                        className={cn(
                          'size-1.5 shrink-0 rounded-full',
                          isActive ? 'bg-secondary-foreground' : 'bg-neutral/35',
                        )}
                        aria-hidden
                      />
                      {category.name}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          {categories.length === 0 ? (
            <p className="mt-2 text-sm text-neutral/65">Aún no hay categorías.</p>
          ) : null}
        </nav>
      ) : null}
    </section>
  );
}
