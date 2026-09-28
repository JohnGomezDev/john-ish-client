'use client';

import { Menu } from 'lucide-react';

import { Button } from '@repo/ui/components/ui/button';
import { cn } from '@repo/ui/lib/utils';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setSidebarOpen, toggleSidebar } from '@/store/slices/ui.slice';

import { AdminSidebar } from './AdminSidebar';

interface IAdminLayoutShellProps {
  children: React.ReactNode;
}

export function AdminLayoutShell({ children }: IAdminLayoutShellProps): React.JSX.Element {
  const dispatch = useAppDispatch();
  const sidebarOpen = useAppSelector((state) => state.ui.sidebarOpen);

  const closeSidebar = (): void => {
    dispatch(setSidebarOpen(false));
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {sidebarOpen && (
        <button
          type="button"
          aria-label="Cerrar menú"
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 h-screen w-64 shrink-0 border-r border-border bg-background transition-transform duration-300 ease-in-out lg:static lg:z-auto lg:translate-x-0',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <AdminSidebar onNavigate={closeSidebar} />
      </aside>

      <div className="flex h-screen min-w-0 flex-1 flex-col overflow-hidden">
        <header className="flex h-14 shrink-0 items-center border-b border-border bg-background px-4 lg:hidden">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => dispatch(toggleSidebar())}
            aria-label="Abrir menú"
            aria-expanded={sidebarOpen}
          >
            <Menu className="size-5" />
          </Button>
          <p className="ml-2 truncate font-display text-base font-medium text-primary">John-ish dashboard</p>
        </header>

        <main className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-6">{children}</main>
      </div>
    </div>
  );
}
