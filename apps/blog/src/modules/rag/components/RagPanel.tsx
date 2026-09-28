'use client';

import { Trash2, X } from 'lucide-react';
import { useEffect } from 'react';
import type { UseFormHandleSubmit, UseFormRegisterReturn } from 'react-hook-form';

import { Button } from '@repo/ui/components/ui/button';
import { cn } from '@repo/ui/lib/utils';

import { RagComposer } from './RagComposer';
import { RagMessageList } from './RagMessageList';
import type { IRagFormValues, IRagMessage } from '../types/rag.types';

interface IRagPanelProps {
  messages: IRagMessage[];
  isPending: boolean;
  onClose: () => void;
  onClearChat: () => void;
  queryField: UseFormRegisterReturn<'query'>;
  onSubmit: ReturnType<UseFormHandleSubmit<IRagFormValues>>;
  errors: {
    query?: { message?: string };
  };
  className?: string;
}

export function RagPanel({
  messages,
  isPending,
  onClose,
  onClearChat,
  queryField,
  onSubmit,
  errors,
  className,
}: IRagPanelProps): React.JSX.Element {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent): void {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="rag-panel-title"
      className={cn(
        'fixed z-50 flex flex-col overflow-hidden rounded-xl border border-border bg-background',
        'shadow-[0_8px_30px_rgb(0,0,0,0.12),0_2px_8px_rgb(0,0,0,0.08)] ring-1 ring-primary/10',
        'right-4 left-4 h-[min(70vh,560px)]',
        'bottom-[max(1rem,env(safe-area-inset-bottom))]',
        'sm:left-auto sm:w-[400px]',
        className,
      )}
    >
      <header className="flex items-center justify-between border-b border-border px-4 py-3">
        <h2 id="rag-panel-title" className="font-display text-lg font-medium tracking-tight text-primary">
          Asistente del blog
        </h2>
        <div className="flex items-center gap-0.5">
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            onClick={onClearChat}
            disabled={messages.length === 0 || isPending}
            aria-label="Eliminar chat"
            title="Eliminar chat"
            className="cursor-pointer"
          >
            <Trash2 className="size-4" aria-hidden />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon-sm"
            onClick={onClose}
            aria-label="Cerrar asistente"
            className="cursor-pointer"
          >
            <X className="size-4" aria-hidden />
          </Button>
        </div>
      </header>

      <RagMessageList messages={messages} isPending={isPending} />

      <RagComposer
        queryField={queryField}
        onSubmit={onSubmit}
        isPending={isPending}
        errors={errors}
      />
    </div>
  );
}
