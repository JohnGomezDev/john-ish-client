import type { IApiResponse } from '@repo/lib/api/api-response.types';
import { cache } from 'react';

import { apiClient } from '@/lib/api/api-client';
import { ONE_HOUR_IN_SECONDS } from '@/lib/constants/stale.constants';

import type { IPostDetail, IPostsListParams, IPostsListResponse } from '../types/posts.types';
import { buildPostsListPath } from '../utils/posts-list.utils';

export async function fetchPosts(
  params: IPostsListParams = {},
  revalidate: number = ONE_HOUR_IN_SECONDS,
): Promise<IPostsListResponse> {
  const response = await apiClient.get<IApiResponse<IPostsListResponse>>(
    buildPostsListPath(params),
    { next: { revalidate } },
  );

  return response.data;
}

/** Dedupes requests between `generateMetadata` and the page within the same render. */
export const fetchPostBySlug = cache(async (slug: string): Promise<IPostDetail> => {
  const response = await apiClient.get<IApiResponse<IPostDetail>>(`/blog/posts/${slug}`, {
    next: { revalidate: ONE_HOUR_IN_SECONDS },
  });

  return response.data;
});
