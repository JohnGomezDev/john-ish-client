import type { ISong } from '@repo/lib/modules/songs/types/songs.types';

export type { ISong, ISongArtist } from '@repo/lib/modules/songs/types/songs.types';

export interface ISongSearchArtist {
  id: number;
  name: string;
  link: string;
}

export interface ISongSearchAlbum {
  id: number;
  title: string;
  cover: string;
}

export interface ISongSearchResult {
  id: number;
  title: string;
  artist: ISongSearchArtist;
  album: ISongSearchAlbum;
  link: string;
  preview: string | null;
  duration: number;
}

export interface ISaveFavoriteSongPayload {
  trackId: string;
}

export interface ISaveFavoriteSongResult {
  song: ISong;
  message: string;
}
