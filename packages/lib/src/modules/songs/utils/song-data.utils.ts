export function formatDurationFromSeconds(totalSeconds: number): string {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);

  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

export function formatDurationFromMs(durationMs: number): string {
  return formatDurationFromSeconds(Math.round(durationMs / 1000));
}

export function formatSongArtists(artists: Array<{ name: string }>): string {
  return artists.map((artist) => artist.name).join(', ');
}
