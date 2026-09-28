'use client';

import { QueryClientProvider } from '@tanstack/react-query';

import { getQueryClient } from './get-query-client';

interface IProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: IProvidersProps): React.JSX.Element {
  const queryClient = getQueryClient();

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
