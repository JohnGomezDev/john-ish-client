import Image from 'next/image';
import type { ISong } from '@repo/lib/modules/songs/types/songs.types';

interface IAlbumCoverProps {
  song: ISong;
}

export function AlbumCover({ song }: IAlbumCoverProps): React.JSX.Element {
  return (
    <div className="relative size-14 shrink-0 overflow-hidden rounded-xl sm:size-16">
      <Image
        src={song.albumCoverUrl}
        alt={`Portada de ${song.albumName}`}
        width={64}
        height={64}
        className="size-full object-cover"
        sizes="64px"
      />
    </div>
  );
}
