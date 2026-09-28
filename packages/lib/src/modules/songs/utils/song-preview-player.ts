type TPreviewPlayerListener = () => void;

interface IPreviewPlayerState {
  url: string | null;
  isPlaying: boolean;
  isLoading: boolean;
}

let audio: HTMLAudioElement | null = null;
let playRequestId = 0;
let state: IPreviewPlayerState = { url: null, isPlaying: false, isLoading: false };
const listeners = new Set<TPreviewPlayerListener>();

function emit(): void {
  listeners.forEach((listener) => listener());
}

function setState(next: IPreviewPlayerState): void {
  state = next;
  emit();
}

function ensureAudio(): HTMLAudioElement {
  if (!audio) {
    audio = new Audio();
    audio.preload = 'none';
    audio.addEventListener('ended', () => {
      setState({ url: state.url, isPlaying: false, isLoading: false });
    });
  }

  return audio;
}

function playUrl(player: HTMLAudioElement, url: string, requestId: number): void {
  setState({ url, isPlaying: false, isLoading: true });

  void player
    .play()
    .then(() => {
      if (requestId !== playRequestId) {
        return;
      }

      setState({ url, isPlaying: true, isLoading: false });
    })
    .catch(() => {
      if (requestId !== playRequestId) {
        return;
      }

      setState({ url, isPlaying: false, isLoading: false });
    });
}

export function subscribePreviewPlayer(listener: TPreviewPlayerListener): () => void {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
}

export function getPreviewPlayerState(): IPreviewPlayerState {
  return state;
}

export function getPreviewPlayerServerState(): IPreviewPlayerState {
  return { url: null, isPlaying: false, isLoading: false };
}

export function toggleSongPreview(url: string): void {
  const player = ensureAudio();

  if (state.url === url && (state.isPlaying || state.isLoading)) {
    playRequestId += 1;
    player.pause();
    setState({ url, isPlaying: false, isLoading: false });
    return;
  }

  const requestId = ++playRequestId;

  if (state.url === url) {
    playUrl(player, url, requestId);
    return;
  }

  player.pause();
  player.src = url;
  playUrl(player, url, requestId);
}
