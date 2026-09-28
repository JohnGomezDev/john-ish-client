export const songKeys = {
  all: () => ['web', 'songs'] as const,
  favorite: () => [...songKeys.all(), 'favorite'] as const,
};
