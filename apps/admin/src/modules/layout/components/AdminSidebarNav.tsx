'use client';

import { SIDEBAR_NAV_ITEMS } from '../constants/sidebar-nav.constants';
import { AdminSidebarNavItem } from './AdminSidebarNavItem';

interface IAdminSidebarNavProps {
  onNavigate?: () => void;
}

export function AdminSidebarNav({ onNavigate }: IAdminSidebarNavProps): React.JSX.Element {
  return (
    <nav aria-label="Navegación principal" className="flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto px-2 py-4">
      {SIDEBAR_NAV_ITEMS.map((item) => (
        <AdminSidebarNavItem key={item.href} item={item} onNavigate={onNavigate} />
      ))}
    </nav>
  );
}
