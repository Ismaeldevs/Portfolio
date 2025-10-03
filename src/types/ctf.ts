export interface CTFChallenge {
  id: string;
  name: string;
  platform: string;
  category: string;
  difficulty: 'Fácil' | 'Medio' | 'Difícil';
  points: number;
  solvedAt: string;
  writeupUrl?: string;
}

export interface CTFPlatform {
  name: string;
  url: string;
  icon: string;
}

export interface CategoryStats {
  name: string;
  solved: number;
  total: number;
}

export interface LatestCTF {
  name: string;
  date: string;
  platform: string;
  position: number;
  totalTeams: number;
  points: number;
  solvedChallenges: number;
  totalChallenges: number;
  categories: CategoryStats[];
}

export interface CTFStats {
  totalSolved: number;
  totalPoints: number;
  successRate: number;
  favoriteCategory: string;
}