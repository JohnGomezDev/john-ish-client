export interface IAskRagPayload {
  query: string;
}

export interface IRagSource {
  title: string;
  slug: string;
}

export interface IAskRagResult {
  answer: string;
  sources: IRagSource[];
}

export interface IRagFormValues {
  query: string;
}

export type TRagMessageRole = 'user' | 'assistant';

export interface IRagMessage {
  id: string;
  role: TRagMessageRole;
  content: string;
  sources?: IRagSource[];
}
