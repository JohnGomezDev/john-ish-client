interface IIconProps {
  className?: string;
}

export function FacebookIcon({ className }: IIconProps): React.JSX.Element {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M14.5 8.25h2.25V5.5H14.25C12.04 5.5 10.25 7.29 10.25 9.5v1.75H8v2.75h2.25V18.5h2.75v-4.5H15.5l.5-2.75h-2.5V9.5c0-.69.56-1.25 1.25-1.25Z" />
    </svg>
  );
}

export function InstagramIcon({ className }: IIconProps): React.JSX.Element {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.75" />
      <circle cx="17.25" cy="6.75" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function XIcon({ className }: IIconProps): React.JSX.Element {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M17.66 4.5h2.59l-5.66 6.47L21.5 19.5h-5.23l-4.1-5.36L7.45 19.5H4.85l6.06-6.92L2.5 4.5h5.36l3.7 4.9 5.1-4.9Zm-.91 13.5h1.43L7.32 5.95H5.78L16.75 18Z" />
    </svg>
  );
}

export function LinkedInIcon({ className }: IIconProps): React.JSX.Element {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M6.94 9.35H4.4V19.5h2.54V9.35ZM5.67 4.5a1.48 1.48 0 1 0 .02 2.96A1.48 1.48 0 0 0 5.67 4.5ZM19.6 19.5h-2.54v-5.02c0-1.2-.02-2.73-1.66-2.73-1.67 0-1.92 1.3-1.92 2.64V19.5h-2.54V9.35h2.44v1.38h.03c.34-.64 1.16-1.32 2.4-1.32 2.56 0 3.03 1.69 3.03 3.88V19.5Z" />
    </svg>
  );
}

export function GitHubIcon({ className }: IIconProps): React.JSX.Element {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 2C6.477 2 2 6.586 2 12.253c0 4.537 2.865 8.369 6.839 9.725.5.095.683-.223.683-.496 0-.245-.009-.895-.014-1.757-2.782.62-3.369-1.38-3.369-1.38-.455-1.188-1.11-1.504-1.11-1.504-.908-.638.069-.625.069-.625 1.003.072 1.53 1.06 1.53 1.06.892 1.57 2.341 1.116 2.91.853.091-.665.35-1.116.636-1.372-2.22-.26-4.555-1.143-4.555-5.086 0-1.124.39-2.043 1.029-2.764-.103-.26-.446-1.312.098-2.735 0 0 .84-.276 2.75 1.055A9.3 9.3 0 0 1 12 7.14c.85.004 1.705.118 2.504.346 1.909-1.331 2.747-1.055 2.747-1.055.546 1.423.203 2.475.1 2.735.64.721 1.028 1.64 1.028 2.764 0 3.952-2.338 4.823-4.566 5.078.359.318.679.945.679 1.904 0 1.373-.012 2.48-.012 2.816 0 .276.18.596.688.494C19.138 20.617 22 16.787 22 12.253 22 6.586 17.523 2 12 2Z" />
    </svg>
  );
}
