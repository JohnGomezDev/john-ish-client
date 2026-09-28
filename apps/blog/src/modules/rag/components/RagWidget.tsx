'use client';

import { RagFab } from './RagFab';
import { RagPanel } from './RagPanel';
import { useRagForm } from '../hooks/use-rag-form';
import { useRagWidget } from '../hooks/use-rag-widget';

export function RagWidget(): React.JSX.Element {
  const { isOpen, messages, appendMessage, openPanel, closePanel, clearChat } = useRagWidget();

  const { queryField, onSubmit, isPending, errors, clearErrors } = useRagForm({
    onAppendMessage: appendMessage,
  });

  const handleClose = (): void => {
    clearErrors();
    closePanel();
  };

  const handleClearChat = (): void => {
    clearChat();
    clearErrors();
  };

  return (
    <>
      {!isOpen ? <RagFab onClick={openPanel} /> : null}
      {isOpen ? (
        <RagPanel
          messages={messages}
          isPending={isPending}
          onClose={handleClose}
          onClearChat={handleClearChat}
          queryField={queryField}
          onSubmit={onSubmit}
          errors={errors}
        />
      ) : null}
    </>
  );
}
