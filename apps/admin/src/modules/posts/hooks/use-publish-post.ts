'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { adminPostKeys } from '../constants/post.query-keys';
import { publishPost } from '../services/posts.service';
import type { IPost, IPublishPostResult } from '../types/post.types';

export function usePublishPost(): ReturnType<
  typeof useMutation<IPublishPostResult, Error, string>
> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => publishPost(id),
    onSuccess: ({ post }) => {
      queryClient.setQueryData<IPost>(adminPostKeys.detail(post.id), post);
      void queryClient.invalidateQueries({ queryKey: adminPostKeys.lists() });
      void queryClient.invalidateQueries({ queryKey: adminPostKeys.detail(post.id) });
    },
  });
}
