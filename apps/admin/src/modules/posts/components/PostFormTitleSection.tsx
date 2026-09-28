import type { UseFormRegisterReturn } from 'react-hook-form';

import { Card, CardContent } from '@repo/ui/components/ui/card';
import { Input } from '@repo/ui/components/ui/input';
import { Label } from '@repo/ui/components/ui/label';

import { RequiredFieldIndicator } from '@/modules/common/components/RequiredFieldIndicator';

interface IPostFormTitleSectionProps {
  titleField: UseFormRegisterReturn<'title'>;
  slugField: UseFormRegisterReturn<'slug'>;
  titleError?: string;
  slugError?: string;
}

export function PostFormTitleSection({
  titleField,
  slugField,
  titleError,
  slugError,
}: IPostFormTitleSectionProps): React.JSX.Element {
  return (
    <Card className="border-border py-0 shadow-sm">
      <CardContent className="space-y-5 px-5 py-6 sm:px-8">
        <div className="space-y-2">
          <Label htmlFor="title" className="sr-only">
            Título del post
            <RequiredFieldIndicator />
          </Label>
          <Input
            id="title"
            placeholder="Título del post *"
            className="h-12 border-0 px-0 text-2xl font-bold shadow-none focus-visible:ring-0 sm:text-3xl"
            aria-invalid={titleError ? true : undefined}
            {...titleField}
          />
          {titleError && <p className="text-sm text-destructive">{titleError}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="slug" className="text-sm font-medium text-neutral/80">
            Slug del post
            <RequiredFieldIndicator />
          </Label>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <span className="shrink-0 text-sm text-neutral/65">blog.johnish.dev/posts/</span>
            <Input
              id="slug"
              placeholder="slug-del-post *"
              className="h-10 font-mono"
              aria-invalid={slugError ? true : undefined}
              {...slugField}
            />
          </div>
          {slugError && <p className="text-sm text-destructive">{slugError}</p>}
        </div>
      </CardContent>
    </Card>
  );
}
