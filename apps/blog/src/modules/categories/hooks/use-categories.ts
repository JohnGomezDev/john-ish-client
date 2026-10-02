'use client';

import { useQuery } from '@tanstack/react-query';
import type { ICategory } from '@repo/lib/modules/taxonomy/types/taxonomy.types';

import { fetchCategories } from '../services/categories.service';
import { categoryKeys } from '../constants/categories.query-keys';
import { ONE_HOUR_IN_SECONDS } from '@/lib/constants/stale.constants';


export function useCategories(): ReturnType<typeof useQuery<ICategory[]>> {
  return useQuery({
    queryKey: categoryKeys.lists(),
    queryFn: fetchCategories,
    staleTime: ONE_HOUR_IN_SECONDS * 1000,
  });
}
