'use client';

import { ArrowUpRight, BotMessageSquare, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

import { ROUTES } from '@/lib/constants/routes.constants';

import { RagAssistantMarkdown } from './RagAssistantMarkdown';
import type { IRagMessage } from '../types/rag.types';

interface IRagMessageListProps {
  messages: IRagMessage[];
  isPending: boolean;
}

export function RagMessageList({
  messages,
  isPending,
}: IRagMessageListProps): React.JSX.Element {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isPending]);

  if (messages.length === 0 && !isPending) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-3 px-4 py-8">
        <BotMessageSquare className="size-10 text-neutral/40" aria-hidden />
        <p className="max-w-[16rem] text-center text-sm text-neutral/65">
          ¡Hola! Soy el asistente del blog. Escribe tu pregunta y te ayudo a encontrar la información que necesitas.
        </p>
      </div>
    );
  }

  return (
    <div className="flex min-w-0 flex-1 flex-col gap-3 overflow-x-hidden overflow-y-auto px-4 py-4">
      {messages.map((message) =>
        message.role === 'user' ? (
          <article
            key={message.id}
            className="ml-auto max-w-[85%] min-w-0 shrink-0 rounded-xl bg-primary px-3.5 py-2.5 text-sm leading-relaxed wrap-anywhere text-primary-foreground"
          >
            <p className="whitespace-pre-wrap wrap-anywhere">{message.content}</p>
          </article>
        ) : (
          <div key={message.id} className="mr-auto flex max-w-[85%] min-w-0 shrink-0 items-start gap-2">
            <BotMessageSquare
              className="mt-2.5 size-3.5 shrink-0 text-neutral/50"
              aria-hidden
            />
            <article className="min-w-0 flex-1 overflow-hidden rounded-xl border border-border bg-muted px-3.5 py-2.5 text-sm leading-relaxed wrap-anywhere text-neutral">
              <RagAssistantMarkdown content={message.content} />
              {message.sources && message.sources.length > 0 ? (
                <ul className="mt-2 space-y-1 border-t border-border/60 pt-2">
                  {message.sources.map((source) => (
                    <li key={source.slug} className="min-w-0">
                      <Link
                        href={ROUTES.detail(source.slug)}
                        className="inline-flex max-w-full items-start gap-1 text-xs font-medium wrap-anywhere text-primary underline-offset-2 hover:underline"
                      >
                        <span className="min-w-0 wrap-anywhere">{source.title}</span>
                        <ArrowUpRight className="mt-0.5 size-3 shrink-0" aria-hidden />
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          </div>
        ),
      )}

      {isPending ? (
        <div className="mr-auto flex max-w-[85%] shrink-0 items-start gap-2">
          <BotMessageSquare className="mt-2.5 size-3.5 shrink-0 text-neutral/50" aria-hidden />
          <div className="flex items-center gap-2 rounded-xl border border-border bg-muted px-3.5 py-2.5 text-sm text-neutral/65">
            <Loader2 className="size-3.5 shrink-0 animate-spin" aria-hidden />
            <span>Pensando…</span>
          </div>
        </div>
      ) : null}

      <div ref={bottomRef} />
    </div>
  );
}
