import type { IApiResponse } from '@repo/lib/api/api-response.types';
import type { ISong } from '@repo/lib/modules/songs/types/songs.types';

import { apiClient } from '@/lib/api/api-client';

export async function fetchFavoriteSong(): Promise<ISong | null> {
  const response = await apiClient.get<IApiResponse<ISong>>('/songs/favorite');

  return response.data;
}
