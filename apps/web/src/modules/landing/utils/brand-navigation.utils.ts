import { ROUTES } from '@/lib/constants/routes.constants';

/** On the landing home route, clear the hash and scroll to the top. */
export function handleBrandClick(event: React.MouseEvent<HTMLAnchorElement>): void {
  if (window.location.pathname !== ROUTES.home) {
    return;
  }

  event.preventDefault();
  window.history.replaceState(null, '', ROUTES.home);

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;

  window.scrollTo({
    top: 0,
    behavior: prefersReducedMotion ? 'auto' : 'smooth',
  });
}
