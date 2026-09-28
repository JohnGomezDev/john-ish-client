'use client';

import type { IPostListItem } from '../types/post.types';
import { PostsTableRow } from './PostsTableRow';

interface IPostsTableProps {
  posts: IPostListItem[];
}

export function PostsTable({ posts }: IPostsTableProps): React.JSX.Element {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-background shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[34rem] border-collapse table-auto text-left sm:min-w-[40rem] md:min-w-[52rem] lg:min-w-[56rem]">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th
                scope="col"
                className="min-w-[10rem] px-4 py-3 align-top text-xs font-semibold tracking-wide text-neutral/65 uppercase sm:min-w-[12rem] sm:px-6 lg:min-w-[14rem]"
              >
                Título
              </th>
              <th
                scope="col"
                className="min-w-[6.5rem] px-4 py-3 align-top text-xs font-semibold tracking-wide whitespace-nowrap text-neutral/65 uppercase sm:px-6"
              >
                Estado
              </th>
              <th
                scope="col"
                className="hidden min-w-[8rem] px-4 py-3 align-top text-xs font-semibold tracking-wide text-neutral/65 uppercase md:table-cell md:px-6"
              >
                Categoría
              </th>
              <th
                scope="col"
                className="hidden min-w-[8rem] px-4 py-3 align-top text-xs font-semibold tracking-wide text-neutral/65 uppercase sm:table-cell sm:px-6"
              >
                Autor
              </th>
              <th
                scope="col"
                className="min-w-[7.5rem] px-4 py-3 align-top text-xs font-semibold tracking-wide whitespace-nowrap text-neutral/65 uppercase sm:px-6"
              >
                Publicación
              </th>
              <th
                scope="col"
                className="hidden min-w-[7.5rem] px-4 py-3 align-top text-xs font-semibold tracking-wide whitespace-nowrap text-neutral/65 uppercase md:table-cell md:px-6"
              >
                Actualización
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
            {posts.map((post) => (
              <PostsTableRow key={post.id} post={post} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
