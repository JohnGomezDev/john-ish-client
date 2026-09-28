'use client';

import Link from 'next/link';
import { Eye, Pencil } from 'lucide-react';

import { ROUTES } from '@/lib/constants/routes.constants';
import { Button } from '@repo/ui/components/ui/button';

import type { IPostListItem } from '../types/post.types';
import { formatAuthorName, formatCategoryName, formatPostDate, formatPublishedDate } from '../utils/post-list.utils';
import { PostStatusBadge } from './PostStatusBadge';

interface IPostsTableRowProps {
  post: IPostListItem;
}

export function PostsTableRow({ post }: IPostsTableRowProps): React.JSX.Element {
  const categoryName = formatCategoryName(post.category);
  const authorName = formatAuthorName(post.admin);

  return (
    <tr className="border-b border-border transition-colors hover:bg-background">
      <td className="min-w-[10rem] max-w-[14rem] px-4 py-4 align-top sm:min-w-[12rem] sm:px-6 lg:min-w-[14rem]">
        <p className="line-clamp-2 text-sm leading-snug font-medium break-words text-primary" title={post.title}>
          {post.title}
        </p>
      </td>
      <td className="min-w-[6.5rem] px-4 py-4 align-top whitespace-nowrap sm:px-6">
        <PostStatusBadge published={post.published} />
      </td>
      <td className="hidden max-w-[10rem] px-4 py-4 align-top md:table-cell md:px-6">
        <span className="block truncate text-sm text-neutral/80" title={categoryName}>
          {categoryName}
        </span>
      </td>
      <td className="hidden max-w-[10rem] px-4 py-4 align-top sm:table-cell sm:px-6">
        <span className="block truncate text-sm text-neutral/80" title={authorName}>
          {authorName}
        </span>
      </td>
      <td className="min-w-[7.5rem] px-4 py-4 align-top text-sm whitespace-nowrap text-neutral/80 sm:px-6">
        {formatPublishedDate(post.publishedAt)}
      </td>
      <td className="hidden min-w-[7.5rem] px-4 py-4 align-top text-sm whitespace-nowrap text-neutral/80 md:table-cell md:px-6">
        {formatPostDate(post.updatedAt)}
      </td>
      <td className="min-w-[5.5rem] px-4 py-4 pr-6 align-top whitespace-nowrap sm:px-6 sm:pr-8">
        <div className="flex items-center justify-end gap-2">
          <Button
            asChild
            size="icon-sm"
            className="shrink-0 cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link href={ROUTES.admin.posts.detail(post.id)} aria-label="Ver post">
              <Eye aria-hidden="true" className="size-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="icon-sm"
            className="shrink-0 cursor-pointer border-primary bg-background text-primary hover:bg-secondary/40"
          >
            <Link href={ROUTES.admin.posts.edit(post.id)} aria-label="Editar post">
              <Pencil aria-hidden="true" className="size-4" />
            </Link>
          </Button>
        </div>
      </td>
    </tr>
  );
}
