export interface ISongArtist {
  id: string;
  name: string;
  url: string;
}

export interface ISong {
  id: number;
  trackId: string;
  trackName: string;
  artists: ISongArtist[];
  albumId: string;
  albumName: string;
  albumCoverUrl: string;
  url: string;
  previewUrl: string | null;
  durationMs: number;
  createdAt: string;
  updatedAt: string;
}
