import { SiteBrand } from '@repo/modules/layout/components/SiteBrand';
import { SiteHeader } from '@repo/modules/layout/components/SiteHeader';
import { SocialLinks } from '@repo/modules/layout/components/SocialLinks';
import { SOCIAL_LINKS } from '@repo/modules/layout/constants/social.constants';

import { ROUTES } from '@/lib/constants/routes.constants';

import { SITE_NAME } from '../constants/layout.constants';

export function BlogHeader(): React.JSX.Element {
  return (
    <SiteHeader
      tone="light"
      brand={
        <SiteBrand
          href={ROUTES.home}
          name={SITE_NAME}
          size="sm"
          animated
          tone="light"
        />
      }
    >
      <nav aria-label="Redes sociales">
        <SocialLinks links={SOCIAL_LINKS} size="sm" tone="light" />
      </nav>
    </SiteHeader>
  );
}
