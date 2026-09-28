'use client';

import type { ITag } from '@repo/lib/modules/taxonomy/types/taxonomy.types';

import { TagsTableRow } from './TagsTableRow';

interface ITagsTableProps {
  tags: ITag[];
}

export function TagsTable({ tags }: ITagsTableProps): React.JSX.Element {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-background shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[24rem] border-collapse table-auto text-left">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th
                scope="col"
                className="px-4 py-3 align-top text-xs font-semibold tracking-wide text-neutral/65 uppercase sm:px-6"
              >
                Nombre
              </th>
              <th
                scope="col"
                className="min-w-[5.5rem] px-4 py-3 pr-6 align-top text-right text-xs font-semibold tracking-wide whitespace-nowrap text-neutral/65 uppercase sm:px-6 sm:pr-8"
              >
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {tags.map((tag) => (
              <TagsTableRow key={tag.id} tag={tag} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
