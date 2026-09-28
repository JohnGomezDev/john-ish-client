import { VibesSection } from '@/modules/landing/components/VibesSection';
import { BlogPreviewSection } from '@/modules/landing/components/BlogPreviewSection';
import { HeroSection } from '@/modules/landing/components/HeroSection';
import { ToolsSection } from '@/modules/landing/components/ToolsSection';
import {
  BLOG_HREF,
  GITHUB_HREF,
} from '@/modules/landing/constants/landing.constants';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL!;

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'John Gomez',
  url: siteUrl,
  jobTitle: 'Desarrollador de software',
  description:
    'John Gomez, desarrollador de software full-stack. Construyo, aprendo y comparto sobre desarrollo web, arquitectura, backend, frontend y tecnología.',
  sameAs: [GITHUB_HREF, BLOG_HREF],
};

export default function HomePage(): React.JSX.Element {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <HeroSection />
      <ToolsSection />
      <VibesSection />
      <BlogPreviewSection />
    </>
  );
}
