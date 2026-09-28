'use client';

import dynamic from 'next/dynamic';

const PostFormMdxEditor = dynamic(
  () => import('./PostFormMdxEditor').then((module) => module.PostFormMdxEditor),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-64 items-center justify-center rounded-md border border-input bg-background text-sm text-neutral/65">
        Cargando editor...
      </div>
    ),
  },
);

interface IPostFormMdxEditorLazyProps {
  defaultValue?: string;
  onChange: (value: string) => void;
}

export function PostFormMdxEditorLazy({
  defaultValue,
  onChange,
}: IPostFormMdxEditorLazyProps): React.JSX.Element {
  return <PostFormMdxEditor defaultValue={defaultValue} onChange={onChange} />;
}
