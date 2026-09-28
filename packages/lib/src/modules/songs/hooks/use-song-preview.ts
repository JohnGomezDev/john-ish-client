import { useSyncExternalStore } from 'react';

import {
  getPreviewPlayerServerState,
  getPreviewPlayerState,
  subscribePreviewPlayer,
  toggleSongPreview,
} from '../utils/song-preview-player';

export function useSongPreview(previewUrl: string | null): {
  isPlaying: boolean;
  isLoading: boolean;
  canPlay: boolean;
  toggle: () => void;
} {
  const state = useSyncExternalStore(
    subscribePreviewPlayer,
    getPreviewPlayerState,
    getPreviewPlayerServerState,
  );

  const canPlay = Boolean(previewUrl);
  const isCurrentTrack = canPlay && state.url === previewUrl;
  const isPlaying = isCurrentTrack && state.isPlaying;
  const isLoading = isCurrentTrack && state.isLoading;

  const toggle = (): void => {
    if (!previewUrl) {
      return;
    }

    toggleSongPreview(previewUrl);
  };

  return { isPlaying, isLoading, canPlay, toggle };
}
