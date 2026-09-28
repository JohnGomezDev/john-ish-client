'use client';

import { Send } from 'lucide-react';
import type { UseFormHandleSubmit, UseFormRegisterReturn } from 'react-hook-form';

import { Button } from '@repo/ui/components/ui/button';
import { Input } from '@repo/ui/components/ui/input';

import type { IRagFormValues } from '../types/rag.types';

interface IRagComposerProps {
  queryField: UseFormRegisterReturn<'query'>;
  onSubmit: ReturnType<UseFormHandleSubmit<IRagFormValues>>;
  isPending: boolean;
  errors: {
    query?: { message?: string };
  };
}

export function RagComposer({
  queryField,
  onSubmit,
  isPending,
  errors,
}: IRagComposerProps): React.JSX.Element {
  return (
    <form onSubmit={onSubmit} className="border-t border-border bg-background p-3 sm:p-4">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Input
            {...queryField}
            type="text"
            maxLength={500}
            disabled={isPending}
            placeholder="Escribe tu pregunta…"
            aria-label="Pregunta al asistente"
            aria-invalid={Boolean(errors.query)}
            className="h-10 flex-1 rounded-lg border-border bg-background shadow-none"
          />
          <Button
            type="submit"
            size="icon"
            disabled={isPending}
            aria-label="Enviar pregunta"
            className="size-10 shrink-0 cursor-pointer"
          >
            <Send className="size-4" aria-hidden />
          </Button>
        </div>
        {errors.query?.message ? (
          <p className="text-xs text-destructive" role="alert">
            {errors.query.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
