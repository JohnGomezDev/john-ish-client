'use client';

import { useQuery } from '@tanstack/react-query';

import { ONE_HOUR_IN_SECONDS } from '@/lib/constants/stale.constants';

import { postKeys } from '../constants/posts.query-keys';
import { fetchPosts } from '../services/posts.service';
import type { IPostsListParams, IPostsListResponse } from '../types/posts.types';

export function usePosts(
  params: IPostsListParams = {},
): ReturnType<typeof useQuery<IPostsListResponse>> {
  return useQuery({
    queryKey: postKeys.list(params),
    queryFn: () => fetchPosts(params),
    staleTime: ONE_HOUR_IN_SECONDS * 1000,
  });
}
