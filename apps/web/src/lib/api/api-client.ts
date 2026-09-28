import { createFetchClient } from '@repo/lib/api/fetch-client';

export const apiClient = createFetchClient(process.env.NEXT_PUBLIC_API_URL!);
