'use client';

import type { ISong } from '@repo/lib/modules/songs/types/songs.types';
import { useQuery } from '@tanstack/react-query';

import { FIVE_MINUTES_IN_MS } from '@/lib/constants/stale.constants';

import { songKeys } from '../constants/songs.query-keys';
import { fetchFavoriteSong } from '../services/songs.service';

export function useFavoriteSong(): ReturnType<typeof useQuery<ISong | null>> {
  return useQuery({
    queryKey: songKeys.favorite(),
    queryFn: fetchFavoriteSong,
    staleTime: FIVE_MINUTES_IN_MS,
  });
}
