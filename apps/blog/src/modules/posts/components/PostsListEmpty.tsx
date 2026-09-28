interface IPostsListEmptyProps {
  search?: string;
  categorySlug?: string;
}

export function PostsListEmpty({ search, categorySlug }: IPostsListEmptyProps): React.JSX.Element {
  let message = 'Aún no hay posts publicados.';

  if (search) {
    message = 'No se encontraron posts para tu búsqueda.';
  } else if (categorySlug) {
    message = 'No hay posts en esta categoría.';
  }

  return (
    <div className="rounded-xl border border-dashed border-border bg-background px-6 py-14 text-center">
      <p className="text-sm text-neutral/65">{message}</p>
    </div>
  );
}

export function PostsListError(): React.JSX.Element {
  return (
    <div className="rounded-xl border border-dashed border-border bg-background px-6 py-14 text-center">
      <p className="text-sm text-destructive">No se pudieron cargar los posts.</p>
    </div>
  );
}
