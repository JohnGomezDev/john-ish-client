'use client';

import {
  TERMINAL_SUGGESTIONS,
  TERMINAL_WINDOW_TITLE,
  type ITerminalLine,
  type TTerminalTone,
} from '@/modules/landing/constants/hero-terminal.constants';
import { useHeroTerminal } from '@/modules/landing/hooks/use-hero-terminal';

const TONE_CLASS: Record<TTerminalTone, string> = {
  default: 'text-foreground',
  muted: 'text-muted-foreground',
  accent: 'text-accent',
  sky: 'text-foreground',
  amber: 'text-muted-foreground',
  error: 'text-accent',
};

function TerminalLineView({ line, prompt }: { line: ITerminalLine; prompt: string }): React.JSX.Element {
  if (line.isCommand) {
    return (
      <p className="whitespace-pre-wrap break-words">
        <span className="text-accent">{prompt}</span>{' '}
        <span className="text-foreground">{line.text}</span>
      </p>
    );
  }

  if (!line.text) {
    return <p className="h-3" />;
  }

  return (
    <p
      className={`whitespace-pre-wrap break-words ${TONE_CLASS[line.tone ?? 'default']}`}
    >
      {line.text}
    </p>
  );
}

export function HeroTerminal(): React.JSX.Element {
  const {
    lines,
    input,
    setInput,
    prompt,
    inputId,
    scrollRef,
    inputRef,
    runSuggestion,
    handleKeyDown,
    focusInput,
  } = useHeroTerminal();

  return (
    <div className="relative flex aspect-[4/3] w-full flex-col overflow-hidden rounded-2xl border border-border bg-surface sm:aspect-[5/4]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, #d6ff00 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 flex shrink-0 items-center gap-2 border-b border-border bg-surface-elevated px-4 py-3">
        <span className="size-2.5 rounded-full bg-accent/80" aria-hidden="true" />
        <span className="size-2.5 rounded-full bg-foreground/50" aria-hidden="true" />
        <span className="size-2.5 rounded-full bg-muted-foreground/80" aria-hidden="true" />
        <span className="ml-3 font-mono text-xs text-muted-foreground">
          {TERMINAL_WINDOW_TITLE}
        </span>
      </div>

      <div
        ref={scrollRef}
        className="relative z-10 flex min-h-0 flex-1 cursor-text flex-col overflow-y-auto p-3 font-mono text-[11px] leading-5 sm:p-4 sm:text-xs sm:leading-6"
        onClick={focusInput}
      >
        <div className="flex flex-col gap-0.5">
          {lines.map((line) => (
            <TerminalLineView key={line.id} line={line} prompt={prompt} />
          ))}
        </div>

        <label htmlFor={inputId} className="sr-only">
          Comando de terminal
        </label>
        <div className="mt-0.5 flex items-center gap-2">
          <span className="shrink-0 text-accent">{prompt}</span>
          <input
            ref={inputRef}
            id={inputId}
            type="text"
            value={input}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="none"
            spellCheck={false}
            enterKeyHint="go"
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={handleKeyDown}
            className="min-w-0 flex-1 bg-transparent text-foreground caret-accent outline-none placeholder:text-muted-foreground/50"
            placeholder="help"
            aria-label="Escribe un comando y presiona Enter"
          />
        </div>
      </div>

      <ul className="relative z-10 flex shrink-0 flex-wrap items-center gap-y-1 border-t border-border px-3 py-2.5 sm:px-4">
        {TERMINAL_SUGGESTIONS.map((suggestion, index) => (
          <li key={suggestion} className="flex items-center">
            {index > 0 ? (
              <span className="px-2 font-mono text-[11px] text-muted-foreground/40" aria-hidden="true">
                /
              </span>
            ) : null}
            <button
              type="button"
              onClick={() => runSuggestion(suggestion)}
              className="font-mono text-[11px] text-muted-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:text-xs"
            >
              {suggestion}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
