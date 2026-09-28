'use client';

import ReactMarkdown from 'react-markdown';

interface IRagAssistantMarkdownProps {
  content: string;
}

export function RagAssistantMarkdown({ content }: IRagAssistantMarkdownProps): React.JSX.Element {
  return (
    <div className="min-w-0 max-w-full text-sm leading-relaxed wrap-anywhere text-neutral [&_p+_p]:mt-2">
      <ReactMarkdown
        components={{
          p: ({ children }) => <p className="whitespace-pre-wrap wrap-anywhere">{children}</p>,
          strong: ({ children }) => <strong className="font-semibold text-primary">{children}</strong>,
          em: ({ children }) => <em className="italic">{children}</em>,
          ul: ({ children }) => <ul className="mt-2 list-disc space-y-1 pl-4">{children}</ul>,
          ol: ({ children }) => <ol className="mt-2 list-decimal space-y-1 pl-4">{children}</ol>,
          li: ({ children }) => <li className="leading-relaxed wrap-anywhere">{children}</li>,
          pre: ({ children }) => (
            <pre className="my-2 max-w-full min-w-0 overflow-x-auto rounded-lg border border-border bg-background px-3 py-2.5 [overflow-wrap:normal]">
              {children}
            </pre>
          ),
          code: ({ className, children }) => {
            const isBlock = Boolean(className?.includes('language-'));

            if (isBlock) {
              return (
                <code className="block font-mono text-xs whitespace-pre text-primary [overflow-wrap:normal]">
                  {children}
                </code>
              );
            }

            return (
              <code className="rounded bg-background/80 px-1 py-0.5 font-mono text-xs wrap-anywhere text-primary">
                {children}
              </code>
            );
          },
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium wrap-anywhere text-primary underline-offset-2 hover:underline"
            >
              {children}
            </a>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
