'use client';

import { useState } from 'react';

import { SiteBrand } from '@repo/modules/layout/components/SiteBrand';
import { SiteHeader } from '@repo/modules/layout/components/SiteHeader';
import { SocialLinks } from '@repo/modules/layout/components/SocialLinks';
import { SOCIAL_LINKS } from '@repo/modules/layout/constants/social.constants';

import { ROUTES } from '@/lib/constants/routes.constants';
import { NAV_LINKS, SITE_NAME } from '@/modules/landing/constants/landing.constants';
import { handleBrandClick } from '@/modules/landing/utils/brand-navigation.utils';

export function WebHeader(): React.JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <SiteHeader
      tone="dark"
      brand={
        <SiteBrand
          href={ROUTES.home}
          name={SITE_NAME}
          size="sm"
          animated
          tone="dark"
          onClick={handleBrandClick}
        />
      }
      below={
        isMenuOpen ? (
          <nav
            id="mobile-menu"
            aria-label="Menú de navegación móvil"
            className="border-t border-border bg-background/95 md:hidden"
          >
            <ul className="flex flex-col px-4 py-4 sm:px-6">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ) : null
      }
    >
      <nav aria-label="Navegación principal" className="hidden md:block">
        <ul className="flex items-center gap-6 lg:gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-2 sm:gap-3">
        <nav aria-label="Redes sociales">
          <SocialLinks links={SOCIAL_LINKS} size="sm" tone="dark" />
        </nav>

        <button
          type="button"
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground md:hidden"
        >
          {isMenuOpen ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-5"
              aria-hidden="true"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-5"
              aria-hidden="true"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
    </SiteHeader>
  );
}
