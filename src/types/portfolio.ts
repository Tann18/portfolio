export type PortfolioMode = 'dossier' | 'explore';

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  tagline: string;
  whyIBuiltThis: string;
  whatBroke: string;
  outcomes: string[];
  techStack: string[];
  links: {
    github?: string;
    demo?: string;
    youtubeId?: string;
  };
  metrics: {
    label: string;
    value: string;
  }[];
}

export interface AgentNode {
  id: string;
  label: string;
  role: string;
  x: number;
  y: number;
  z: number;
  color: string;
  type: 'router' | 'memory' | 'executor' | 'guard' | 'escalator';
  isDetached?: boolean;
}

export interface SimulationState {
  scenarioId: string;
  query: string;
  confidenceScore: number;
  threshold: number;
  missingContext: boolean;
  toolFailure: boolean;
  conflictingPrecedent: boolean;
  schemaError: boolean;
  humanInTheLoop: boolean;
}
