import { PostDetailMarkdown } from '@repo/modules/posts/components/PostDetailMarkdown';

import type { IPostDetail } from '../types/posts.types';
import { PostDetailBreadcrumbs } from './PostDetailBreadcrumbs';
import { PostDetailCategoryBadge } from './PostDetailCategoryBadge';
import { PostDetailMeta } from './PostDetailMeta';
import { PostDetailTags } from './PostDetailTags';

interface IPostDetailProps {
  post: IPostDetail;
}

export function PostDetail({ post }: IPostDetailProps): React.JSX.Element {
  return (
    <article className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <header>
        <PostDetailBreadcrumbs post={post} />

        <PostDetailCategoryBadge category={post.category} />

        <h1 className="mt-4 font-display text-2xl leading-tight font-medium tracking-tight text-primary sm:mt-5 sm:text-3xl md:text-4xl md:leading-tight">
          {post.title}
        </h1>

        <PostDetailMeta post={post} />
        <PostDetailTags tags={post.tags} />
      </header>

      <div className="mt-8 border-t border-border pt-8 sm:mt-10 sm:pt-10">
        <PostDetailMarkdown content={post.content} />
      </div>
    </article>
  );
}
