'use client';

import { useState } from 'react';

import type { IRagMessage } from '../types/rag.types';

export function useRagWidget(): {
  isOpen: boolean;
  messages: IRagMessage[];
  appendMessage: (message: IRagMessage) => void;
  openPanel: () => void;
  closePanel: () => void;
  clearChat: () => void;
} {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<IRagMessage[]>([]);

  const appendMessage = (message: IRagMessage): void => {
    setMessages((previous) => [...previous, message]);
  };

  const openPanel = (): void => {
    setIsOpen(true);
  };

  const closePanel = (): void => {
    setIsOpen(false);
  };

  const clearChat = (): void => {
    setMessages([]);
  };

  return {
    isOpen,
    messages,
    appendMessage,
    openPanel,
    closePanel,
    clearChat,
  };
}
