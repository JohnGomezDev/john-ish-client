'use client';

import Link from 'next/link';
import { Pencil, Trash2 } from 'lucide-react';

import { ROUTES } from '@/lib/constants/routes.constants';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@repo/ui/components/ui/alert-dialog';
import { Button } from '@repo/ui/components/ui/button';
import type { ICategory } from '@repo/lib/modules/taxonomy/types/taxonomy.types';

import { useCategoryActions } from '../hooks/use-category-actions';

interface ICategoriesTableRowProps {
  category: ICategory;
}

export function CategoriesTableRow({ category }: ICategoriesTableRowProps): React.JSX.Element {
  const { handleDelete, isDeleting } = useCategoryActions({ categoryId: category.id });

  return (
    <tr className="border-b border-border transition-colors hover:bg-background">
      <td className="px-4 py-4 align-top sm:px-6">
        <p className="text-sm font-medium text-primary">{category.name}</p>
      </td>
      <td className="px-4 py-4 pr-6 align-top whitespace-nowrap sm:px-6 sm:pr-8">
        <div className="flex items-center justify-end gap-2">
          <Button
            asChild
            variant="outline"
            size="icon-sm"
            className="shrink-0 cursor-pointer border-primary bg-background text-primary hover:bg-secondary/40"
          >
            <Link href={ROUTES.admin.categorias.edit(category.id)} aria-label="Editar categoría">
              <Pencil aria-hidden="true" className="size-4" />
            </Link>
          </Button>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                type="button"
                variant="destructive"
                size="icon-sm"
                disabled={isDeleting}
                className="shrink-0 cursor-pointer"
                aria-label="Eliminar categoría"
              >
                <Trash2 aria-hidden="true" className="size-4" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>¿Eliminar esta categoría?</AlertDialogTitle>
                <AlertDialogDescription>
                  Esta acción no se puede deshacer. Se eliminará permanentemente la categoría
                  &quot;{category.name}&quot;.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel disabled={isDeleting}>Cancelar</AlertDialogCancel>
                <AlertDialogAction
                  disabled={isDeleting}
                  className="bg-red-700 text-white hover:bg-red-800"
                  onClick={(event) => {
                    event.preventDefault();
                    handleDelete();
                  }}
                >
                  {isDeleting ? 'Eliminando...' : 'Eliminar'}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </td>
    </tr>
  );
}
