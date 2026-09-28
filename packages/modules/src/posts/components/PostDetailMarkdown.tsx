'use client';

import 'highlight.js/styles/gml.css';
import '../styles/post-detail-markdown.css';

import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

import {
  paragraphContainsImage,
  paragraphIsOnlyImage,
} from '../utils/post-detail-markdown.utils';

interface IPostDetailMarkdownProps {
  content: string;
}

const rehypeHighlightOptions = {
  aliases: {
    javascript: ['js', 'jsx'],
    markdown: 'md',
    typescript: ['ts', 'tsx'],
    xml: 'html',
  },
};

function isHighlightedCodeBlock(className?: string): boolean {
  return Boolean(className?.includes('hljs'));
}

const PARAGRAPH_CLASS_NAME =
  'mt-4 text-sm leading-relaxed text-neutral first:mt-0 sm:mt-5 sm:text-base sm:leading-7';

export function PostDetailMarkdown({ content }: IPostDetailMarkdownProps): React.JSX.Element {
  return (
    <div className="post-detail-markdown font-sans text-neutral">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, [rehypeHighlight, rehypeHighlightOptions]]}
        components={{
          h1: ({ children }) => (
            <h1 className="mt-8 font-display text-2xl leading-tight font-medium text-primary first:mt-0 sm:mt-10 sm:text-3xl">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="mt-8 font-display text-xl leading-tight font-medium text-primary first:mt-0 sm:mt-10 sm:text-2xl">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="mt-6 font-display text-lg leading-snug font-medium text-primary first:mt-0 sm:mt-8 sm:text-xl">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="mt-5 font-display text-base leading-snug font-medium text-primary first:mt-0 sm:mt-6 sm:text-lg">
              {children}
            </h4>
          ),
          p: ({ children, node }) => {
            // Markdown wraps `![alt](src)` in <p>; our img renderer returns <figure>/<div>,
            // which is invalid inside <p> and causes hydration errors.
            if (paragraphContainsImage(node)) {
              if (paragraphIsOnlyImage(node)) {
                return <>{children}</>;
              }

              return <div className={PARAGRAPH_CLASS_NAME}>{children}</div>;
            }

            return <p className={PARAGRAPH_CLASS_NAME}>{children}</p>;
          },
          em: ({ children }) => <em className="italic text-neutral">{children}</em>,
          strong: ({ children }) => (
            <strong className="font-bold text-primary underline decoration-secondary decoration-[0.22em] underline-offset-[0.22em]">
              {children}
            </strong>
          ),
          mark: ({ children }) => (
            <mark className="bg-transparent font-bold text-primary underline decoration-tertiary decoration-[0.22em] underline-offset-[0.22em]">
              {children}
            </mark>
          ),
          ul: ({ children }) => (
            <ul className="post-detail-ul mt-5 space-y-3 sm:mt-6 sm:space-y-4">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="post-detail-ol mt-5 space-y-4 sm:mt-6 sm:space-y-5">{children}</ol>
          ),
          li: ({ children }) => (
            <li className="text-sm leading-relaxed text-neutral sm:text-base sm:leading-7">{children}</li>
          ),
          blockquote: ({ children }) => (
            <blockquote className="post-detail-quote mt-6 rounded-lg border border-border border-l-[6px] border-l-tertiary bg-muted px-4 py-5 sm:mt-8 sm:rounded-xl sm:px-6 sm:py-6 md:px-8 md:py-7 [&>p]:mt-0 [&>p]:text-base [&>p]:leading-relaxed [&>p]:font-bold [&>p]:italic [&>p]:text-primary sm:[&>p]:text-lg sm:[&>p]:leading-7 [&>p+p]:mt-4 sm:[&>p+p]:mt-5 [&>p:last-child:not(:only-child)]:mt-5 [&>p:last-child:not(:only-child)]:text-xs [&>p:last-child:not(:only-child)]:font-medium [&>p:last-child:not(:only-child)]:not-italic [&>p:last-child:not(:only-child)]:tracking-[0.06em] [&>p:last-child:not(:only-child)]:text-neutral/65 [&>p:last-child:not(:only-child)]:uppercase sm:[&>p:last-child:not(:only-child)]:mt-6 sm:[&>p:last-child:not(:only-child)]:text-sm">
              {children}
            </blockquote>
          ),
          a: ({ children, href }) => (
            <a
              href={href}
              className="font-medium text-primary underline decoration-secondary decoration-2 underline-offset-4 transition-colors hover:decoration-tertiary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
          hr: () => <hr className="my-8 border-0 border-t border-border sm:my-10" />,
          code: ({ className, children, ...props }) => {
            if (isHighlightedCodeBlock(className)) {
              return (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            }

            return (
              <code
                className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.875em] text-primary"
                {...props}
              >
                {children}
              </code>
            );
          },
          pre: ({ children, ...props }) => (
            <pre
              className="mt-5 overflow-x-auto rounded-lg sm:mt-6 [&>code.hljs]:block [&>code.hljs]:overflow-x-auto [&>code.hljs]:rounded-lg [&>code.hljs]:p-3 sm:[&>code.hljs]:p-4"
              {...props}
            >
              {children}
            </pre>
          ),
          table: ({ children }) => (
            <div className="mt-5 overflow-x-auto sm:mt-6">
              <table className="w-full border-collapse text-sm">{children}</table>
            </div>
          ),
          th: ({ children }) => (
            <th className="border border-border bg-muted px-3 py-2 text-left font-semibold text-primary">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border border-border px-3 py-2 text-neutral">{children}</td>
          ),
          img: ({ src, alt }) => {
            if (typeof src !== 'string' || src.length === 0) {
              return null;
            }

            const imageAlt = alt ?? '';

            return (
              <figure className="mt-5 sm:mt-6">
                <div
                  className="relative w-full overflow-hidden rounded-lg"
                  style={{ aspectRatio: '16 / 9' }}
                >
                  <Image
                    src={src}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 760px"
                    className="object-contain"
                  />
                </div>
                {imageAlt ? (
                  <figcaption className="mt-2 text-center text-xs text-neutral/60">
                    {imageAlt}
                  </figcaption>
                ) : null}
              </figure>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

