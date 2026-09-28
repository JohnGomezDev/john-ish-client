'use client';

import { useMutation } from '@tanstack/react-query';

import { askRag } from '../services/rag.service';
import type { IAskRagPayload, IAskRagResult } from '../types/rag.types';

export function useAskRag(): ReturnType<
  typeof useMutation<IAskRagResult, Error, IAskRagPayload>
> {
  return useMutation({
    mutationFn: askRag,
  });
}
