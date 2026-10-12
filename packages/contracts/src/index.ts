export interface SourceCitation {
  documentId: string;
  title: string;
  excerpt: string;
  href: string;
}

export interface Answer {
  text: string;
  citations: SourceCitation[];
  insufficientSources: boolean;
}

export interface HealthResponse {
  status: 'ok';
}
