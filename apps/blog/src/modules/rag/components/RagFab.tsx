'use client';

import { BotMessageSquare } from 'lucide-react';

import { Button } from '@repo/ui/components/ui/button';
import { cn } from '@repo/ui/lib/utils';

interface IRagFabProps {
  onClick: () => void;
  className?: string;
}

export function RagFab({ onClick, className }: IRagFabProps): React.JSX.Element {
  return (
    <Button
      type="button"
      size="icon-lg"
      onClick={onClick}
      aria-label="Abrir asistente del blog"
      className={cn(
        'fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-50 size-14 cursor-pointer rounded-full bg-secondary text-secondary-foreground shadow-md hover:bg-secondary/90',
        className,
      )}
    >
      <BotMessageSquare className="size-6" aria-hidden />
    </Button>
  );
}
