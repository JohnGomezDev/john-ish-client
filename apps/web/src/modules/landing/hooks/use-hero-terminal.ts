'use client';

import { useCallback, useId, useRef, useState } from 'react';

import {
  resolveTerminalCommand,
  TERMINAL_PROMPT,
  TERMINAL_WELCOME,
  type ITerminalLine,
} from '@/modules/landing/constants/hero-terminal.constants';

interface IUseHeroTerminalResult {
  lines: readonly ITerminalLine[];
  input: string;
  setInput: (value: string) => void;
  prompt: string;
  inputId: string;
  scrollRef: React.RefObject<HTMLDivElement | null>;
  inputRef: React.RefObject<HTMLInputElement | null>;
  submit: () => void;
  runSuggestion: (command: string) => void;
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  focusInput: () => void;
}

let lineSeq = 0;

function createLines(
  entries: readonly Omit<ITerminalLine, 'id'>[],
): ITerminalLine[] {
  return entries.map((entry) => {
    lineSeq += 1;
    return { ...entry, id: `term-line-${lineSeq}` };
  });
}

export function useHeroTerminal(): IUseHeroTerminalResult {
  const inputId = useId();
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [lines, setLines] = useState<ITerminalLine[]>(() =>
    createLines([...TERMINAL_WELCOME]),
  );
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const scrollToBottom = useCallback((): void => {
    requestAnimationFrame(() => {
      const node = scrollRef.current;
      if (node) node.scrollTop = node.scrollHeight;
    });
  }, []);

  const focusInput = useCallback((): void => {
    inputRef.current?.focus();
  }, []);

  const execute = useCallback(
    (raw: string): void => {
      const trimmed = raw.trim();
      if (!trimmed) return;

      const commandLine = createLines([
        { text: trimmed, isCommand: true, tone: 'default' },
      ]);

      const command = resolveTerminalCommand(trimmed);

      if (!command) {
        setLines((prev) => [
          ...prev,
          ...commandLine,
          ...createLines([
            {
              text: `comando no encontrado: ${trimmed.split(/\s+/)[0]}`,
              tone: 'error',
            },
            { text: 'Escribe `help` para ver los comandos disponibles.', tone: 'muted' },
          ]),
        ]);
        setHistory((prev) => [...prev, trimmed]);
        setHistoryIndex(-1);
        setInput('');
        scrollToBottom();
        return;
      }

      if (command.name === 'clear') {
        setLines(createLines([...TERMINAL_WELCOME]));
        setHistory((prev) => [...prev, trimmed]);
        setHistoryIndex(-1);
        setInput('');
        scrollToBottom();
        return;
      }

      const output = createLines([...command.run()]);
      setLines((prev) => [...prev, ...commandLine, ...output, ...createLines([{ text: '' }])]);
      setHistory((prev) => [...prev, trimmed]);
      setHistoryIndex(-1);
      setInput('');
      scrollToBottom();
    },
    [scrollToBottom],
  );

  const submit = useCallback((): void => {
    execute(input);
  }, [execute, input]);

  const runSuggestion = useCallback(
    (command: string): void => {
      execute(command);
      focusInput();
    },
    [execute, focusInput],
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>): void => {
      if (event.key === 'Enter') {
        event.preventDefault();
        submit();
        return;
      }

      if (event.key === 'ArrowUp') {
        event.preventDefault();
        if (history.length === 0) return;
        const nextIndex =
          historyIndex < 0 ? history.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIndex);
        setInput(history[nextIndex] ?? '');
        return;
      }

      if (event.key === 'ArrowDown') {
        event.preventDefault();
        if (historyIndex < 0) return;
        const nextIndex = historyIndex + 1;
        if (nextIndex >= history.length) {
          setHistoryIndex(-1);
          setInput('');
          return;
        }
        setHistoryIndex(nextIndex);
        setInput(history[nextIndex] ?? '');
      }
    },
    [history, historyIndex, submit],
  );

  return {
    lines,
    input,
    setInput,
    prompt: TERMINAL_PROMPT,
    inputId,
    scrollRef,
    inputRef,
    submit,
    runSuggestion,
    handleKeyDown,
    focusInput,
  };
}
