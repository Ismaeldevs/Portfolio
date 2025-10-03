export interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  url?: string;
  status: 'completado' | 'en progreso';
  progress?: number;
  expectedCompletion?: string;
}