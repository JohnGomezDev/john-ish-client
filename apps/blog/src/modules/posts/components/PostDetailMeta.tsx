import { CalendarDays, RefreshCw } from 'lucide-react';

import type { IPostDetail } from '../types/posts.types';
import {
  buildPostShareUrls,
  formatPostDate,
  getAuthorFullName,
  getPostCanonicalUrl,
} from '../utils/post-detail.utils';
import { PostDetailShareButtons } from './PostDetailShareButtons';

interface IPostDetailMetaProps {
  post: IPostDetail;
}

export function PostDetailMeta({ post }: IPostDetailMetaProps): React.JSX.Element {
  const authorName = getAuthorFullName(post.admin);
  const publishedAt = post.publishedAt ?? post.createdAt;
  const canonicalUrl = getPostCanonicalUrl(post.slug);
  const shareUrls = buildPostShareUrls(canonicalUrl, post.title);
  const showUpdated =
    Boolean(post.updatedAt) &&
    new Date(post.updatedAt).getTime() !== new Date(publishedAt).getTime();

  return (
    <div className="mt-6 rounded-xl border border-border bg-background px-4 py-4 sm:mt-8 sm:px-5 sm:py-5">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <div className="min-w-0">
          <p className="truncate text-sm font-bold text-primary sm:text-base">{authorName}</p>
          <p className="mt-0.5 text-xs text-neutral/55 sm:text-sm">Autor</p>

          <div className="mt-3 flex flex-col gap-1.5 text-xs text-neutral/60 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4 sm:gap-y-1 sm:text-sm">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="size-3.5 shrink-0" aria-hidden />
              <span>
                Publicado el{' '}
                <time dateTime={publishedAt}>{formatPostDate(publishedAt)}</time>
              </span>
            </span>

            {showUpdated ? (
              <span className="inline-flex items-center gap-1.5">
                <RefreshCw className="size-3.5 shrink-0" aria-hidden />
                <span>
                  Actualizado el{' '}
                  <time dateTime={post.updatedAt}>{formatPostDate(post.updatedAt)}</time>
                </span>
              </span>
            ) : null}
          </div>
        </div>

        <PostDetailShareButtons url={canonicalUrl} shareUrls={shareUrls} />
      </div>
    </div>
  );
}
