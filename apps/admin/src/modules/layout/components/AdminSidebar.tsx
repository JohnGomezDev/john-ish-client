'use client';

import { AdminSidebarNav } from './AdminSidebarNav';
import { AdminSidebarUser } from './AdminSidebarUser';

interface IAdminSidebarProps {
  onNavigate?: () => void;
}

export function AdminSidebar({ onNavigate }: IAdminSidebarProps): React.JSX.Element {
  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-border px-6 py-5">
        <p className="font-display text-lg font-medium tracking-tight text-primary sm:text-xl">
          John-ish dashboard
        </p>
      </div>

      <AdminSidebarNav onNavigate={onNavigate} />

      <AdminSidebarUser />
    </div>
  );
}
