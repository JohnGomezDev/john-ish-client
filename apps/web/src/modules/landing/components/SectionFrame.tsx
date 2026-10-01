type TSectionDensity = 'loose' | 'regular' | 'tight' | 'compact';

interface ISectionFrameProps {
  id: string;
  index: string;
  label: string;
  ariaLabelledBy: string;
  density: TSectionDensity;
  /** Hero sits under the header rule, so it skips the extra divider. */
  showDivider?: boolean;
  children: React.ReactNode;
}

const DENSITY_CLASS: Record<TSectionDensity, string> = {
  loose: 'py-20 sm:py-24 lg:py-32',
  regular: 'py-16 sm:py-20 lg:py-24',
  tight: 'py-12 sm:py-16 lg:py-20',
  compact: 'py-10 sm:py-12 lg:py-16',
};

export function SectionFrame({
  id,
  index,
  label,
  ariaLabelledBy,
  density,
  showDivider = true,
  children,
}: ISectionFrameProps): React.JSX.Element {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={
        showDivider
          ? 'scroll-mt-20 border-t border-border'
          : 'scroll-mt-20'
      }
    >
      <div
        className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${DENSITY_CLASS[density]}`}
      >
        <div className="border-l-2 border-accent pl-5 sm:pl-7">
          <p
            aria-hidden="true"
            className="mb-6 flex items-baseline gap-3 font-mono text-xs text-muted-foreground sm:mb-8"
          >
            <span>{index}</span>
            <span>{label}</span>
          </p>
          {children}
        </div>
      </div>
    </section>
  );
}
