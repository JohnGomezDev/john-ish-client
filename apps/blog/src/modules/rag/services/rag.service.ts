import type { IApiResponse } from '@repo/lib/api/api-response.types';

import { apiClient } from '@/lib/api/api-client';

import type { IAskRagPayload, IAskRagResult } from '../types/rag.types';

export async function askRag(payload: IAskRagPayload): Promise<IAskRagResult> {
  const response = await apiClient.post<IApiResponse<IAskRagResult>>('/rag/ask', payload);

  return response.data;
}
