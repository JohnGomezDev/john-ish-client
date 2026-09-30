'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { adminPostKeys } from '../constants/post.query-keys';
import { unpublishPost } from '../services/posts.service';
import type { IPost, IUnpublishPostResult } from '../types/post.types';

export function useUnpublishPost(): ReturnType<
  typeof useMutation<IUnpublishPostResult, Error, string>
> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => unpublishPost(id),
    onSuccess: ({ post }) => {
      queryClient.setQueryData<IPost>(adminPostKeys.detail(post.id), post);
      void queryClient.invalidateQueries({ queryKey: adminPostKeys.lists() });
      void queryClient.invalidateQueries({ queryKey: adminPostKeys.detail(post.id) });
    },
  });
}
