'use client';

import { useState } from 'react';
import { LogOut } from 'lucide-react';

import { Button } from '@repo/ui/components/ui/button';
import { useAppSelector } from '@/store/hooks';

import { useAuth } from '@/modules/auth/hooks/use-auth';

export function AdminSidebarUser(): React.JSX.Element {
  const user = useAppSelector((state) => state.auth.user);
  const { logout } = useAuth();
  const [isPending, setIsPending] = useState(false);

  const displayName = user ? `${user.name} ${user.lastName}` : 'Administrador';

  const handleLogout = async (): Promise<void> => {
    setIsPending(true);
    try {
      await logout();
    } catch {
      setIsPending(false);
    }
  };

  return (
    <div className="mt-auto flex shrink-0 items-center gap-3 border-t border-border px-4 py-4">
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-primary">{displayName}</p>
        <p className="truncate text-xs text-neutral/65">Administrador</p>
      </div>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={handleLogout}
        disabled={isPending}
        aria-label={isPending ? 'Cerrando sesión...' : 'Cerrar sesión'}
        className="shrink-0 text-neutral/65 hover:text-primary"
      >
        <LogOut className="cursor-pointer size-5" />
      </Button>
    </div>
  );
}
