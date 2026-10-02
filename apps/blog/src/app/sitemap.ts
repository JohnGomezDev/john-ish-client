import type { MetadataRoute } from 'next';

import { ROUTES } from '@/lib/constants/routes.constants';
import { PRIVACY_POLICY_LAST_UPDATED_ISO } from '@/modules/legal/constants/privacy-policy.constants';
import { TERMS_OF_USE_LAST_UPDATED_ISO } from '@/modules/legal/constants/terms-of-use.constants';
import { fetchPosts } from '@/modules/posts/services/posts.service';

const SITEMAP_REVALIDATE_SECONDS = 86400;

export const revalidate = 86400;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL!;

  const first = await fetchPosts({ page: 1, limit: 30 }, SITEMAP_REVALIDATE_SECONDS);
  const remaining = await Promise.all(
    Array.from({ length: first.meta.totalPages - 1 }, (_, i) =>
      fetchPosts({ page: i + 2, limit: 30 }, SITEMAP_REVALIDATE_SECONDS),
    ),
  );
  const allPosts = [first, ...remaining].flatMap((response) => response.items);

  const postEntries: MetadataRoute.Sitemap = allPosts
    .filter((post) => post.published && post.publishedAt)
    .map((post) => ({
      url: `${siteUrl}${ROUTES.detail(post.slug)}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));

  return [
    {
      url: `${siteUrl}${ROUTES.home}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${siteUrl}${ROUTES.privacyPolicy}`,
      lastModified: new Date(PRIVACY_POLICY_LAST_UPDATED_ISO),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${siteUrl}${ROUTES.termsOfUse}`,
      lastModified: new Date(TERMS_OF_USE_LAST_UPDATED_ISO),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    ...postEntries,
  ];
}
