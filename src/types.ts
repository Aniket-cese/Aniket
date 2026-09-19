export type ActiveTab = 'companion' | 'caregiver' | 'pitch';

export type GameType = 'memory' | 'pattern' | 'word';

export interface GameResult {
  gameName: string;
  accuracy: number;
  timeSpentSec: number;
  hesitations: number;
  completedAt: string;
  adaptiveAdjustment: string;
}

export interface CaregiverStat {
  day: string;
  sessions: number;
  stabilityScore: number;
  focusMinutes: number;
  mood: 'peaceful' | 'focused' | 'cheerful' | 'tired';
}
