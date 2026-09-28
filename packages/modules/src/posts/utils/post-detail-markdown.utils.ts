interface IMarkdownElementNode {
  type: string;
  tagName?: string;
}

interface IMarkdownParentNode {
  children?: ReadonlyArray<IMarkdownElementNode>;
}

export function paragraphContainsImage(node: IMarkdownParentNode | undefined): boolean {
  return Boolean(
    node?.children?.some((child) => child.type === 'element' && child.tagName === 'img'),
  );
}

export function paragraphIsOnlyImage(node: IMarkdownParentNode | undefined): boolean {
  if (!node?.children?.length) {
    return false;
  }

  const elementChildren = node.children.filter((child) => child.type === 'element');

  return (
    elementChildren.length === 1 &&
    elementChildren[0]?.type === 'element' &&
    elementChildren[0].tagName === 'img'
  );
}
