import type { IApiResponse } from '@repo/lib/api/api-response.types';
import type { ICategory } from '@repo/lib/modules/taxonomy/types/taxonomy.types';

import { apiClient } from '@/lib/api/api-client';
import { ONE_DAY_IN_SECONDS } from '@/lib/constants/stale.constants';

export async function fetchCategories(): Promise<ICategory[]> {
  const response = await apiClient.get<IApiResponse<ICategory[]>>('/blog/categories', {
    next: { revalidate: ONE_DAY_IN_SECONDS },
  });

  return response.data;
}
