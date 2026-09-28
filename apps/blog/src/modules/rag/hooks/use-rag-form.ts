'use client';

import { getApiErrorMessage } from '@repo/lib/utils/get-api-error-message';
import { toast } from '@repo/ui/components/ui/sonner';
import {
  useForm,
  type SubmitHandler,
  type UseFormHandleSubmit,
  type UseFormRegisterReturn,
} from 'react-hook-form';

import { useAskRag } from './use-ask-rag';
import type { IRagFormValues, IRagMessage } from '../types/rag.types';

interface IUseRagFormOptions {
  onAppendMessage: (message: IRagMessage) => void;
}

function createMessageId(): string {
  return crypto.randomUUID();
}

export function useRagForm({ onAppendMessage }: IUseRagFormOptions): {
  queryField: UseFormRegisterReturn<'query'>;
  onSubmit: ReturnType<UseFormHandleSubmit<IRagFormValues>>;
  isPending: boolean;
  clearErrors: () => void;
  errors: {
    query?: { message?: string };
  };
} {
  const { mutate: askRag, isPending } = useAskRag();

  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm<IRagFormValues>({
    defaultValues: {
      query: '',
    },
  });

  const submitQuery: SubmitHandler<IRagFormValues> = (data): void => {
    const query = data.query.trim();

    onAppendMessage({
      id: createMessageId(),
      role: 'user',
      content: query,
    });
    reset();

    askRag(
      { query },
      {
        onSuccess: (result) => {
          onAppendMessage({
            id: createMessageId(),
            role: 'assistant',
            content: result.answer,
            sources: result.sources,
          });
        },
        onError: (error) => {
          toast.error(
            getApiErrorMessage(error, 'No se pudo obtener una respuesta. Intenta de nuevo.'),
          );
        },
      },
    );
  };

  return {
    queryField: register('query', {
      required: 'La pregunta es requerida',
      minLength: {
        value: 3,
        message: 'La pregunta debe tener al menos 3 caracteres',
      },
      maxLength: {
        value: 500,
        message: 'La pregunta no puede superar 500 caracteres',
      },
      validate: (value) => {
        const trimmed = value.trim();

        if (trimmed.length === 0) {
          return 'La pregunta es requerida';
        }

        if (trimmed.length < 3) {
          return 'La pregunta debe tener al menos 3 caracteres';
        }

        if (trimmed.length > 500) {
          return 'La pregunta no puede superar 500 caracteres';
        }

        return true;
      },
    }),
    onSubmit: handleSubmit(submitQuery),
    isPending,
    clearErrors,
    errors,
  };
}
