import { SocialLinks } from '@repo/modules/layout/components/SocialLinks';
import { SOCIAL_LINKS } from '@repo/modules/layout/constants/social.constants';

import { GITHUB_HREF, SITE_BRAND } from '@/modules/landing/constants/landing.constants';

export function WebFooter(): React.JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-5 px-4 py-8 sm:flex-row sm:px-6 sm:py-10 lg:px-8">
        <p className="text-center text-xs text-muted-foreground sm:text-left sm:text-sm">
          © {currentYear} {SITE_BRAND}. Construido con precisión.
        </p>

        <nav aria-label="Redes sociales y contacto">
          <SocialLinks
            links={SOCIAL_LINKS}
            tone="dark"
            showGithub
            githubHref={GITHUB_HREF}
          />
        </nav>
      </div>
    </footer>
  );
}
