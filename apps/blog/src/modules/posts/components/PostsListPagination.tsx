'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Button } from '@repo/ui/components/ui/button';
import { cn } from '@repo/ui/lib/utils';

import type { IPaginationMeta } from '../types/posts.types';
import type { TPaginationItem } from '../utils/posts-url.utils';

interface IPostsListPaginationProps {
  meta: IPaginationMeta;
  isLoading?: boolean;
  onPreviousPage: () => void;
  onNextPage: () => void;
  onGoToPage: (page: number) => void;
  getPageRange: (meta: IPaginationMeta) => { startItem: number; endItem: number };
  getVisiblePages: (meta: IPaginationMeta) => TPaginationItem[];
  isPreviousDisabled: (meta: IPaginationMeta, isLoading?: boolean) => boolean;
  isNextDisabled: (meta: IPaginationMeta, isLoading?: boolean) => boolean;
}

export function PostsListPagination({
  meta,
  isLoading = false,
  onPreviousPage,
  onNextPage,
  onGoToPage,
  getPageRange,
  getVisiblePages,
  isPreviousDisabled,
  isNextDisabled,
}: IPostsListPaginationProps): React.JSX.Element | null {
  if (meta.totalPages <= 1) {
    return null;
  }

  const { startItem, endItem } = getPageRange(meta);
  const pages = getVisiblePages(meta);
  const previousDisabled = isPreviousDisabled(meta, isLoading);
  const nextDisabled = isNextDisabled(meta, isLoading);

  return (
    <nav
      aria-label="Paginación de artículos"
      className="rounded-xl border border-border bg-background px-4 py-3 shadow-sm sm:px-5"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-neutral/65">
          Mostrando{' '}
          <span className="font-semibold text-primary">
            {startItem}–{endItem}
          </span>{' '}
          de <span className="font-semibold text-primary">{meta.totalItems}</span> artículos
        </p>

        <div className="flex flex-wrap items-center gap-1">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="cursor-pointer gap-1 text-neutral/70"
            disabled={previousDisabled}
            onClick={onPreviousPage}
            aria-label="Página anterior"
          >
            <ChevronLeft className="size-4" />
            Anterior
          </Button>

          {pages.map((item, index) => {
            if (item === 'ellipsis') {
              return (
                <span
                  key={`ellipsis-${index}`}
                  className="px-1.5 text-sm text-neutral/45"
                  aria-hidden
                >
                  …
                </span>
              );
            }

            const isActive = item === meta.currentPage;

            return (
              <Button
                key={item}
                type="button"
                size="icon-sm"
                variant={isActive ? 'secondary' : 'ghost'}
                className={cn(
                  'cursor-pointer',
                  isActive && 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
                )}
                disabled={isLoading}
                onClick={() => onGoToPage(item)}
                aria-label={`Ir a la página ${item}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item}
              </Button>
            );
          })}

          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="cursor-pointer gap-1 text-neutral/70"
            disabled={nextDisabled}
            onClick={onNextPage}
            aria-label="Página siguiente"
          >
            Siguiente
            <ChevronRight className="size-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
