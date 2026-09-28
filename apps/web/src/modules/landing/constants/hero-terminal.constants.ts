import {
  BLOG_HREF,
  GITHUB_HREF,
  SITE_BRAND,
  SITE_NAME,
} from '@/modules/landing/constants/landing.constants';

export type TTerminalTone = 'default' | 'muted' | 'accent' | 'sky' | 'amber' | 'error';

export interface ITerminalLine {
  id: string;
  text: string;
  tone?: TTerminalTone;
  /** When true, renders as a prompt line (`$ cmd`). */
  isCommand?: boolean;
}

export interface ITerminalCommand {
  name: string;
  description: string;
  /** Aliases accepted in addition to `name`. */
  aliases?: readonly string[];
  /** Hidden from the “useful” help section — easter eggs. */
  fun?: boolean;
  run: () => readonly Omit<ITerminalLine, 'id'>[];
}

export const TERMINAL_PROMPT = `${SITE_BRAND.toLowerCase()} ~ %`;

export const TERMINAL_WINDOW_TITLE = `${SITE_BRAND.toLowerCase()} — zsh`;

export const TERMINAL_WELCOME: readonly Omit<ITerminalLine, 'id'>[] = [
  { text: `Bienvenido a ${SITE_NAME} OS (build del portafolio).`, tone: 'muted' },
  {
    text: 'Escribe `help` para ver comandos — o prueba algo raro.',
    tone: 'muted',
  },
  { text: '' },
];

export const TERMINAL_SUGGESTIONS = [
  'help',
  'hire',
  'whoami',
  'ping',
  'neofetch'
] as const;

function lines(
  entries: readonly (string | Omit<ITerminalLine, 'id'>)[],
): readonly Omit<ITerminalLine, 'id'>[] {
  return entries.map((entry) =>
    typeof entry === 'string' ? { text: entry } : entry,
  );
}

const usefulCommands: ITerminalCommand[] = [
  {
    name: 'help',
    description: 'Lista los comandos disponibles',
    aliases: ['?'],
    run: () => {
      const useful = TERMINAL_COMMANDS.filter((command) => !command.fun);
      const fun = TERMINAL_COMMANDS.filter((command) => command.fun);

      return lines([
        { text: 'Útiles:', tone: 'accent' },
        ...useful.map((command) => ({
          text: `  ${command.name.padEnd(10)} ${command.description}`,
          tone: 'muted' as const,
        })),
        '',
        { text: 'Easter eggs:', tone: 'sky' },
        ...fun.map((command) => ({
          text: `  ${command.name.padEnd(10)} ${command.description}`,
          tone: 'muted' as const,
        })),
        '',
        {
          text: 'Tip: ↑ / ↓ para navegar el historial.',
          tone: 'amber',
        },
      ]);
    },
  },
  {
    name: 'hire',
    description: 'Disponibilidad para proyectos',
    aliases: ['contact', 'work'],
    run: () =>
      lines([
        { text: 'estado: disponible para nuevos proyectos ✓', tone: 'accent' },
        'Escríbeme por WhatsApp (botón flotante) o LinkedIn.',
        {
          text: 'Trae un problema interesante; yo traigo el teclado.',
          tone: 'muted',
        },
      ]),
  },
  {
    name: 'github',
    description: 'Abre el perfil de GitHub',
    aliases: ['gh'],
    run: () => {
      if (typeof window !== 'undefined') {
        window.open(GITHUB_HREF, '_blank', 'noopener,noreferrer');
      }
      return lines([
        { text: `Abriendo ${GITHUB_HREF}`, tone: 'sky' },
        { text: '→ commits > excusas', tone: 'muted' },
      ]);
    },
  },
  {
    name: 'blog',
    description: 'Abre el blog',
    run: () => {
      if (typeof window !== 'undefined') {
        window.open(BLOG_HREF, '_blank', 'noopener,noreferrer');
      }
      return lines([
        { text: `Abriendo ${BLOG_HREF}`, tone: 'sky' },
        { text: '→ ¿Te gusta leer?', tone: 'muted' },
      ]);
    },
  },
  {
    name: 'clear',
    description: 'Limpia la terminal',
    aliases: ['cls'],
    run: () => [],
  },
];

const funCommands: ITerminalCommand[] = [
  {
    name: 'whoami',
    description: '¿Quién soy?',
    fun: true,
    run: () =>
      lines([
        { text: 'Si no sabes tú, yo menos.', tone: 'amber' },
      ]),
  },
  {
    name: 'ping',
    description: '¿Hay red?',
    fun: true,
    run: () =>
      lines([
        {
          text: 'PING internet.local (1.1.1.1): 56 data bytes',
          tone: 'muted',
        },
        { text: 'Request timeout for icmp_seq 1', tone: 'error' },
        { text: 'Request timeout for icmp_seq 2', tone: 'error' },
        { text: 'Request timeout for icmp_seq 3', tone: 'error' },
        { text: '--- internet.local ping statistics ---', tone: 'sky' },
        '3 packets transmitted, 0 received, 100% packet loss',
        '',
        { text: 'oh no… otra vez el maldito internet.', tone: 'amber' },
      ]),
  },
  {
    name: 'neofetch',
    description: 'Specs del “sistema”',
    aliases: ['fetch', 'system'],
    fun: true,
    run: () =>
      lines([
        { text: `${SITE_BRAND}OS 1.0.0 (Edición Intencional)`, tone: 'accent' },
        '-------------------------------',
        { text: 'Host:     una silla cómoda', tone: 'muted' },
        { text: 'CPU:      overthinking.js @ 3 pensamientos/s', tone: 'muted' },
        { text: 'GPU:      imaginación (integrada)', tone: 'muted' },
        { text: 'Memoria:  16GB RAM + pestañas infinitas', tone: 'muted' },
        { text: 'Shell:    zsh + vibes', tone: 'muted' },
        { text: 'Mascotas: Lucero, Tinto y Brandy (equipo de QA)', tone: 'sky' },
        { text: 'Uptime:   desde el último “arreglo rápido”', tone: 'amber' },
      ]),
  },
  {
    name: 'pwd',
    description: '¿Dónde estoy?',
    fun: true,
    run: () =>
      lines([
        {
          text: '/home/john/construyendo/cosas/con/intencion',
          tone: 'sky',
        },
        {
          text: '(No estás perdido. Estás en el portafolio correcto.)',
          tone: 'muted',
        },
      ]),
  },
];

export const TERMINAL_COMMANDS: readonly ITerminalCommand[] = [
  ...usefulCommands,
  ...funCommands,
];

export function resolveTerminalCommand(
  rawInput: string,
): ITerminalCommand | undefined {
  const normalized = rawInput.trim().toLowerCase().split(/\s+/)[0] ?? '';
  if (!normalized) return undefined;

  return TERMINAL_COMMANDS.find(
    (command) =>
      command.name === normalized || command.aliases?.includes(normalized),
  );
}
