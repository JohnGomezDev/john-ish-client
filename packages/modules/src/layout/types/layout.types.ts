export type TSocialNetworkId =
  | 'facebook'
  | 'instagram'
  | 'x'
  | 'linkedin'
  | 'github';

export interface ISocialLink {
  id: TSocialNetworkId;
  label: string;
  href: string;
}

/** Visual tone so the same chrome works on light (blog) and dark (web). */
export type TLayoutTone = 'light' | 'dark';
