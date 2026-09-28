import { CalendarDays } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@repo/ui/components/ui/button';
import { cn } from '@repo/ui/lib/utils';

import { ROUTES } from '@/lib/constants/routes.constants';

import type { IPostAuthor, IPostListItem } from '../types/posts.types';

interface IPostCardProps {
  post: IPostListItem;
  className?: string;
}

function formatPublishedDate(value: string | null): string {
  if (!value) {
    return 'Sin fecha';
  }

  return new Intl.DateTimeFormat('es-ES', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(value));
}

function getAuthorInitials(admin: IPostAuthor | null): string {
  if (!admin) {
    return '?';
  }

  const first = admin.name.trim().charAt(0);
  const last = admin.lastName.trim().charAt(0);

  return `${first}${last}`.toUpperCase() || '?';
}

function getAuthorFullName(admin: IPostAuthor | null): string {
  if (!admin) {
    return 'Autor';
  }

  return `${admin.name} ${admin.lastName}`.trim();
}

function getCategoryBadgeClass(slug: string | undefined): string {
  switch (slug) {
    case 'tecnologia-e-ia':
      return 'bg-secondary/40 text-secondary-foreground';
    case 'diseno-de-producto':
      return 'bg-muted text-neutral/80';
    case 'arquitectura-frontend':
      return 'bg-primary/10 text-primary';
    case 'experiencia-de-usuario':
      return 'bg-primary/5 text-primary/80';
    default:
      return 'bg-muted text-neutral/75';
  }
}

export function PostCard({ post, className }: IPostCardProps): React.JSX.Element {
  const href = ROUTES.detail(post.slug);
  const authorName = getAuthorFullName(post.admin);

  return (
    <article
      className={cn(
        'rounded-xl border border-border bg-background p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6',
        className,
      )}
    >
      <div className="mb-3 flex flex-wrap items-center gap-2.5 text-sm text-neutral/60">
        <span className="inline-flex items-center gap-1.5">
          <CalendarDays className="size-3.5 shrink-0" aria-hidden />
          <time dateTime={post.publishedAt ?? undefined}>
            {formatPublishedDate(post.publishedAt)}
          </time>
        </span>
        {post.category ? (
          <span
            className={cn(
              'inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium',
              getCategoryBadgeClass(post.category.slug),
            )}
          >
            {post.category.name}
          </span>
        ) : null}
      </div>

      <h2 className="font-display text-xl leading-snug font-medium tracking-tight text-primary sm:text-2xl">
        <Link href={href} className="transition-colors hover:text-primary/80">
          {post.title}
        </Link>
      </h2>

      <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-neutral/65 sm:text-[0.9375rem]">
        {post.excerpt}
      </p>

      <div className="mt-5 flex flex-col gap-4 border-t border-border pt-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span
            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-semibold text-primary"
            aria-hidden
          >
            {getAuthorInitials(post.admin)}
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-primary">{authorName}</p>
            <p className="text-xs text-neutral/55">Autor</p>
          </div>
        </div>

        <Button asChild variant="outline" className="cursor-pointer self-start sm:self-auto">
          <Link href={href}>
            Leer artículo
            <span aria-hidden>→</span>
          </Link>
        </Button>
      </div>
    </article>
  );
}
