import { dehydrate, HydrationBoundary, noop } from '@tanstack/react-query';
import type { Metadata } from 'next';
import { Suspense } from 'react';

import { ROUTES } from '@/lib/constants/routes.constants';
import { getQueryClient } from '@/lib/providers/get-query-client';
import { categoryKeys } from '@/modules/categories/constants/categories.query-keys';
import { fetchCategories } from '@/modules/categories/services/categories.service';
import {
  SITE_FULL_NAME,
  SITE_NAME,
} from '@/modules/layout/constants/layout.constants';
import { PostsHomeIntro } from '@/modules/posts/components/PostsHomeIntro';
import { PostsListContainer } from '@/modules/posts/components/PostsListContainer';
import { PostsListSkeleton } from '@/modules/posts/components/PostsListSkeleton';
import { postKeys } from '@/modules/posts/constants/posts.query-keys';
import { fetchPosts } from '@/modules/posts/services/posts.service';

const DEFAULT_POSTS_PARAMS = { page: 1 } as const;

export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL!;
  const postsUrl = `${siteUrl}${ROUTES.home}`;

  return {
    title: 'Todos los artículos',
    description:
      'Explora todos los artículos sobre arquitectura de software, Next.js, TypeScript y el oficio de construir software que dure.',
    alternates: {
      canonical: postsUrl,
    },
    robots: { index: true, follow: true },
  };
}

export default async function PostsPage(): Promise<React.JSX.Element> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL!;
  const postsUrl = `${siteUrl}${ROUTES.home}`;
  const queryClient = getQueryClient();

  await Promise.all([
    queryClient
      .query({
        queryKey: postKeys.list(DEFAULT_POSTS_PARAMS),
        queryFn: () => fetchPosts(DEFAULT_POSTS_PARAMS),
      })
      .catch(noop),
    queryClient
      .query({
        queryKey: categoryKeys.lists(),
        queryFn: fetchCategories,
      })
      .catch(noop),
  ]);

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: SITE_FULL_NAME,
    url: postsUrl,
    author: { '@type': 'Person', name: SITE_NAME },
    inLanguage: 'es',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <PostsHomeIntro />

        <HydrationBoundary state={dehydrate(queryClient)}>
          <Suspense
            fallback={
              <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[minmax(0,280px)_minmax(0,1fr)] lg:gap-8">
                <div className="h-64 animate-pulse rounded-xl border border-border bg-background" />
                <PostsListSkeleton />
              </div>
            }
          >
            <PostsListContainer />
          </Suspense>
        </HydrationBoundary>
      </div>
    </>
  );
}
