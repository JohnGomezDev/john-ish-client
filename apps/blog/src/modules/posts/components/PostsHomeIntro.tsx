import { SITE_DESCRIPTION, SITE_FULL_NAME } from '@/modules/layout/constants/layout.constants';

export function PostsHomeIntro(): React.JSX.Element {
  return (
    <header className="mb-8 sm:mb-10">
      <h1 className="font-display text-3xl font-medium tracking-tight text-primary sm:text-4xl">
        {SITE_FULL_NAME}
      </h1>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral/65 sm:text-base">
        {SITE_DESCRIPTION}
      </p>
    </header>
  );
}
