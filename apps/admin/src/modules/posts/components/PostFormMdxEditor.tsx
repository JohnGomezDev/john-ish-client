'use client';

import { useRef } from 'react';

import {
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  ChangeCodeMirrorLanguage,
  ConditionalContents,
  CreateLink,
  InsertCodeBlock,
  InsertImage,
  ListsToggle,
  MDXEditor,
  UndoRedo,
  codeBlockPlugin,
  codeMirrorPlugin,
  headingsPlugin,
  imagePlugin,
  linkDialogPlugin,
  linkPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  quotePlugin,
  thematicBreakPlugin,
  toolbarPlugin,
  type MDXEditorMethods,
} from '@mdxeditor/editor';
import '@mdxeditor/editor/style.css';

interface IPostFormMdxEditorProps {
  defaultValue?: string;
  onChange: (value: string) => void;
}

const MDX_EDITOR_PLUGINS = [
  headingsPlugin(),
  listsPlugin(),
  quotePlugin(),
  thematicBreakPlugin(),
  markdownShortcutPlugin(),
  linkPlugin(),
  linkDialogPlugin(),
  imagePlugin(),
  codeBlockPlugin({ defaultCodeBlockLanguage: 'js' }),
  codeMirrorPlugin({
    codeBlockLanguages: {
      js: 'JavaScript',
      ts: 'TypeScript',
      tsx: 'TypeScript (React)',
      jsx: 'JavaScript (React)',
      php: 'PHP',
      python: 'Python',
      css: 'CSS',
      html: 'HTML',
      sql: 'SQL',
      json: 'JSON',
      md: 'Markdown',
    },
  }),
  toolbarPlugin({
    toolbarContents: () => (
      <>
        <UndoRedo />
        <BlockTypeSelect />
        <BoldItalicUnderlineToggles />
        <ListsToggle />
        <CreateLink />
        <InsertImage />
        <ConditionalContents
          options={[
            {
              when: (editor) => editor?.editorType === 'codeblock',
              contents: () => <ChangeCodeMirrorLanguage />,
            },
            {
              fallback: () => <InsertCodeBlock />,
            },
          ]}
        />
      </>
    ),
  }),
];

export function PostFormMdxEditor({
  defaultValue = '',
  onChange,
}: IPostFormMdxEditorProps): React.JSX.Element {
  const editorRef = useRef<MDXEditorMethods>(null);
  const initialMarkdownRef = useRef(defaultValue);

  return (
    <div className="post-form-mdx-editor overflow-hidden rounded-md border border-input [&_.mdxeditor-toolbar]:border-b [&_.mdxeditor-toolbar]:border-input [&_.mdxeditor-toolbar]:bg-background">
      <MDXEditor
        ref={editorRef}
        markdown={initialMarkdownRef.current}
        onChange={onChange}
        placeholder="Comienza a escribir tu increíble post aquí..."
        contentEditableClassName="post-form-mdx-editor-content min-h-64 px-4 py-3 text-base text-neutral"
        plugins={MDX_EDITOR_PLUGINS}
      />
    </div>
  );
}
