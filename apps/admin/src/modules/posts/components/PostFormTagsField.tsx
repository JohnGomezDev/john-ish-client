'use client';

import { X } from 'lucide-react';
import type { Control, RegisterOptions } from 'react-hook-form';
import { Controller } from 'react-hook-form';

import { cn } from '@repo/ui/lib/utils';

import type { ITag } from '@repo/lib/modules/taxonomy/types/taxonomy.types';

import type { IPostFormValues } from '../types/post-form.types';

interface IPostFormTagsFieldProps {
  control: Control<IPostFormValues>;
  options: ITag[];
  rules: RegisterOptions<IPostFormValues, 'tagIds'>;
}

export function PostFormTagsField({
  control,
  options,
  rules,
}: IPostFormTagsFieldProps): React.JSX.Element {
  return (
    <Controller
      name="tagIds"
      control={control}
      rules={rules}
      render={({ field }) => {
        const selectedIds = field.value ?? [];

        const toggleTag = (tagId: string): void => {
          if (selectedIds.includes(tagId)) {
            field.onChange(selectedIds.filter((id) => id !== tagId));
            return;
          }

          field.onChange([...selectedIds, tagId]);
        };

        const selectedTags = options.filter((option) => selectedIds.includes(option.id));
        const availableTags = options.filter((option) => !selectedIds.includes(option.id));

        return (
          <div className="space-y-3">
            {selectedTags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {selectedTags.map((tag) => (
                  <button
                    key={tag.id}
                    type="button"
                    onClick={() => toggleTag(tag.id)}
                    className="inline-flex cursor-pointer items-center gap-1 rounded-full bg-secondary/40 px-3 py-1 text-xs font-medium text-primary transition-colors hover:bg-secondary/60"
                  >
                    {tag.name}
                    <X aria-hidden="true" className="size-3" />
                  </button>
                ))}
              </div>
            )}

            <div className="rounded-md border border-input bg-background p-2">
              {availableTags.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {availableTags.map((tag) => (
                    <button
                      key={tag.id}
                      type="button"
                      onClick={() => toggleTag(tag.id)}
                      className={cn(
                        'cursor-pointer rounded-full border border-border px-3 py-1 text-xs font-medium text-neutral/80 transition-colors hover:border-secondary hover:bg-secondary/30 hover:text-primary',
                      )}
                    >
                      {tag.name}
                    </button>
                  ))}
                </div>
              ) : (
                <p className="px-2 py-1 text-sm text-neutral/50">Todas las etiquetas seleccionadas</p>
              )}
            </div>

            <p className="text-xs text-neutral/65">Haz clic para agregar o quitar etiquetas</p>
          </div>
        );
      }}
    />
  );
}
