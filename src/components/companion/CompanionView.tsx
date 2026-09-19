import React, { useState } from 'react';
import { Brain, Sparkles, Gamepad2, Sliders, ShieldCheck, UserCheck } from 'lucide-react';
import { GameType, GameResult } from '../../types';
import { MemoryMatch } from './MemoryMatch';
import { PatternPath } from './PatternPath';
import { WordConnect } from './WordConnect';
import { AdaptiveLoopBar } from './AdaptiveLoopBar';

interface CompanionViewProps {
  onLogResult: (result: GameResult) => void;
  latestResult: GameResult | null;
}

export const CompanionView: React.FC<CompanionViewProps> = ({
  onLogResult,
  latestResult,
}) => {
  const [activeGame, setActiveGame] = useState<GameType>('memory');
  const [profileName, setProfileName] = useState<string>('Aaji (Grandmother)');

  const handleGameLog = (gameName: string, accuracy: number, timeSec: number, note: string) => {
    onLogResult({
      gameName,
      accuracy,
      timeSpentSec: timeSec,
      hesitations: 1,
      completedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      adaptiveAdjustment: note,
    });
  };

  return (
    <div className="space-y-8">
      {/* Patient Greeting & Senior-Friendly Settings Bar */}
      <div className="bg-gradient-to-r from-teal-900 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-teal-800/30 relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center space-x-2 text-teal-300 text-xs font-bold uppercase tracking-widest mb-1.5">
              <span className="w-2 h-2 rounded-full bg-teal-400" />
              <span>Smritimitra Companion • Daily Cognitive Session</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Namaste, {profileName}
            </h1>
            <p className="text-slate-300 text-sm mt-1 max-w-xl leading-relaxed">
              Every morning activity strengthens neural pathways and sparks warm memories. Take all the time you need.
            </p>
          </div>

          {/* Profile & Accessibility Accommodation Badge */}
          <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/10">
            <div className="w-10 h-10 rounded-full bg-teal-400 text-slate-950 flex items-center justify-center font-bold text-base">
              🌸
            </div>
            <div>
              <div className="text-xs text-slate-300 font-medium">Session Mode</div>
              <div className="text-sm font-bold text-white">Gentle & Unhurried</div>
            </div>
          </div>
        </div>

        {/* Game Switcher Tabs directly implementing Slide 4's 3 Sample Games */}
        <div className="relative z-10 mt-8 pt-6 border-t border-teal-800/50 flex flex-wrap items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-300 mr-2">
            Choose Activity:
          </span>

          <button
            id="tab-game-memory"
            onClick={() => setActiveGame('memory')}
            className={`flex items-center space-x-2 px-5 py-3 rounded-2xl text-sm font-bold transition-all ${
              activeGame === 'memory'
                ? 'bg-teal-400 text-slate-950 shadow-lg shadow-teal-400/25 scale-102'
                : 'bg-white/10 text-white hover:bg-white/15'
            }`}
          >
            <span className="text-base">🪷</span>
            <span>1. Memory Match</span>
          </button>

          <button
            id="tab-game-pattern"
            onClick={() => setActiveGame('pattern')}
            className={`flex items-center space-x-2 px-5 py-3 rounded-2xl text-sm font-bold transition-all ${
              activeGame === 'pattern'
                ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/25 scale-102'
                : 'bg-white/10 text-white hover:bg-white/15'
            }`}
          >
            <span className="text-base">✨</span>
            <span>2. Pattern Path</span>
          </button>

          <button
            id="tab-game-word"
            onClick={() => setActiveGame('word')}
            className={`flex items-center space-x-2 px-5 py-3 rounded-2xl text-sm font-bold transition-all ${
              activeGame === 'word'
                ? 'bg-rose-400 text-slate-950 shadow-lg shadow-rose-400/25 scale-102'
                : 'bg-white/10 text-white hover:bg-white/15'
            }`}
          >
            <span className="text-base">☕</span>
            <span>3. Word Connect</span>
          </button>
        </div>
      </div>

      {/* Main Active Playable Game Area */}
      <div>
        {activeGame === 'memory' && (
          <MemoryMatch onActivityLog={handleGameLog} />
        )}
        {activeGame === 'pattern' && (
          <PatternPath onActivityLog={handleGameLog} />
        )}
        {activeGame === 'word' && (
          <WordConnect onActivityLog={handleGameLog} />
        )}
      </div>

      {/* Slide 4 Adaptive Loop Visualizer */}
      <AdaptiveLoopBar latestResult={latestResult} />

      {/* Required Clinical Disclaimer from Slide 4 */}
      <div className="p-4 bg-slate-100 rounded-2xl border border-slate-200 text-center">
        <p className="text-xs text-slate-500 font-medium italic">
          "A support tool, not a diagnostic device or a replacement for clinical care." — Neural Nexus / Smritimitra
        </p>
      </div>
    </div>
  );
};
