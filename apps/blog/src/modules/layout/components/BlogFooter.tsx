import type { ICategory } from '@repo/lib/modules/taxonomy/types/taxonomy.types';
import { SiteBrand } from '@repo/modules/layout/components/SiteBrand';
import { SocialLinks } from '@repo/modules/layout/components/SocialLinks';
import { SOCIAL_LINKS } from '@repo/modules/layout/constants/social.constants';
import Link from 'next/link';

import { fetchCategories } from '@/modules/categories/services/categories.service';
import { ROUTES } from '@/lib/constants/routes.constants';

import {
  FOOTER_LEGAL_LINKS,
  SITE_BRAND,
  SITE_DESCRIPTION,
  SITE_NAME,
} from '../constants/layout.constants';
import { buildCategoryHref } from '../utils/footer.utils';

export async function BlogFooter(): Promise<React.JSX.Element> {
  const categories: ICategory[] = await fetchCategories().catch(() => []);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid gap-10 sm:gap-12 md:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)] md:gap-16">
          <div className="flex flex-col gap-5">
            <SiteBrand href={ROUTES.home} name={SITE_NAME} tone="light" />
            <p className="max-w-md text-sm leading-relaxed text-neutral/65 sm:text-base">
              {SITE_DESCRIPTION}
            </p>
            <nav aria-label="Redes sociales">
              <SocialLinks links={SOCIAL_LINKS} tone="light" />
            </nav>
          </div>

          <nav aria-labelledby="footer-categories-heading">
            <h2
              id="footer-categories-heading"
              className="text-xs font-bold tracking-[0.12em] text-primary uppercase"
            >
              Categorías
            </h2>
            {categories.length > 0 ? (
              <ul className="mt-4 flex flex-col gap-2.5 sm:mt-5 sm:gap-3">
                {categories.map((category) => (
                  <li key={category.id}>
                    <Link
                      href={buildCategoryHref(category.slug)}
                      className="text-sm text-neutral/65 transition-colors hover:text-primary sm:text-base"
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-sm text-neutral/65 sm:mt-5">
                Aún no hay categorías.
              </p>
            )}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <p className="text-xs text-neutral/65 sm:text-sm">
            © {currentYear} {SITE_BRAND}. Todos los derechos reservados.
          </p>

          <nav aria-label="Enlaces legales">
            <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:gap-x-6">
              {FOOTER_LEGAL_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs text-neutral/65 transition-colors hover:text-primary sm:text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
