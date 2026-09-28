'use client';

import { useFavoriteSong } from '@/modules/songs/hooks/use-favorite-song';

import { MusicPlayerContent } from './MusicPlayerContent';
import { MusicPlayerFeedback } from './MusicPlayerFeedback';
import { MusicPlayerSkeleton } from './MusicPlayerSkeleton';

export function MusicPlayerCard(): React.JSX.Element {
  const { data: song, isLoading, isError, refetch } = useFavoriteSong();

  if (isLoading) {
    return <MusicPlayerSkeleton />;
  }

  if (isError) {
    return (
      <MusicPlayerFeedback
        title="No se pudo cargar la canción"
        message="Hubo un problema al obtener la canción favorita actual. Inténtalo de nuevo."
        onRetry={() => {
          void refetch();
        }}
      />
    );
  }

  if (!song) {
    return (
      <MusicPlayerFeedback
        title="Sin canción favorita"
        message="Aún no hay una canción guardada para mostrar aquí."
      />
    );
  }

  return <MusicPlayerContent song={song} />;
}
