const WAVEFORM_BARS = [
  28, 44, 36, 62, 48, 78, 54, 70, 42, 88, 60, 74, 38, 66, 52, 80, 46, 58, 34, 72,
  50, 84, 40, 68, 56, 76, 32, 64,
] as const;

interface IWaveformProps {
  isPlaying?: boolean;
}

export function Waveform({ isPlaying = false }: IWaveformProps): React.JSX.Element {
  return (
    <div
      className="flex h-10 items-end justify-between gap-0.5 sm:h-12"
      aria-hidden="true"
    >
      {WAVEFORM_BARS.map((height, index) => (
        <span
          key={index}
          className={
            isPlaying
              ? 'w-full max-w-[5px] origin-bottom rounded-full bg-accent motion-safe:animate-waveform-bar motion-reduce:animate-none'
              : 'w-full max-w-[5px] origin-bottom rounded-full bg-border'
          }
          style={{
            height: `${height}%`,
            animationDelay: isPlaying ? `${(index % 8) * 0.08}s` : undefined,
          }}
        />
      ))}
    </div>
  );
}
