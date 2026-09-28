'use client';

import Link from 'next/link';

import { ROUTES } from '@/lib/constants/routes.constants';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@repo/ui/components/ui/alert-dialog';
import { Button } from '@repo/ui/components/ui/button';
import { Card, CardContent } from '@repo/ui/components/ui/card';

import { usePostActions } from '../hooks/use-post-actions';
import type { IPost } from '../types/post.types';

interface IPostDetailActionsCardProps {
  post: IPost;
}

export function PostDetailActionsCard({ post }: IPostDetailActionsCardProps): React.JSX.Element {
  const {
    handleDelete,
    handlePublish,
    handleUnpublish,
    isDeleting,
    isPublishing,
    isUnpublishing,
  } = usePostActions({ postId: post.id });
  const isPublished = post.published;
  const isActionPending = isDeleting || isPublishing || isUnpublishing;

  return (
    <Card className="border-border py-0 shadow-sm">
      <CardContent className="flex flex-col gap-3 px-5 py-5">
        <Button
          asChild
          className="w-full cursor-pointer bg-primary hover:bg-primary/90"
        >
          <Link href={ROUTES.admin.posts.edit(post.id)}>Editar post</Link>
        </Button>

        {isPublished ? (
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                type="button"
                disabled={isActionPending}
                className="w-full cursor-pointer border-primary bg-background text-primary hover:bg-secondary/40"
                variant="outline"
              >
                {isUnpublishing ? 'Despublicando...' : 'Despublicar'}
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>¿Despublicar este post?</AlertDialogTitle>
                <AlertDialogDescription>
                  El post &quot;{post.title}&quot; dejará de estar visible en el blog. Podrás
                  publicarlo de nuevo más tarde.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel disabled={isUnpublishing}>Cancelar</AlertDialogCancel>
                <AlertDialogAction
                  disabled={isUnpublishing}
                  className="border-primary border-1 bg-background text-primary hover:bg-secondary/40"
                  onClick={(event) => {
                    event.preventDefault();
                    handleUnpublish();
                  }}
                >
                  {isUnpublishing ? 'Despublicando...' : 'Despublicar'}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        ) : (
          <Button
            type="button"
            onClick={handlePublish}
            disabled={isActionPending}
            className="w-full cursor-pointer bg-green-600 text-white hover:bg-green-700"
          >
            {isPublishing ? 'Publicando...' : 'Publicar'}
          </Button>
        )}

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              type="button"
              disabled={isActionPending}
              className="w-full cursor-pointer bg-red-700 text-white hover:bg-red-800"
            >
              {isDeleting ? 'Eliminando...' : 'Eliminar'}
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>¿Eliminar este post?</AlertDialogTitle>
              <AlertDialogDescription>
                Esta acción no se puede deshacer. Se eliminará permanentemente el post
                &quot;{post.title}&quot;.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel disabled={isDeleting}>Cancelar</AlertDialogCancel>
              <AlertDialogAction
                disabled={isDeleting}
                className="bg-red-700 text-white hover:bg-red-800"
                onClick={(event) => {
                  event.preventDefault();
                  handleDelete();
                }}
              >
                {isDeleting ? 'Eliminando...' : 'Eliminar'}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardContent>
    </Card>
  );
}
