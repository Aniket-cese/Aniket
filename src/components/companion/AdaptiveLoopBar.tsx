import React from 'react';
import { Sliders, Cpu, Activity, HeartHandshake, ArrowRight } from 'lucide-react';
import { GameResult } from '../../types';

interface AdaptiveLoopBarProps {
  latestResult: GameResult | null;
}

export const AdaptiveLoopBar: React.FC<AdaptiveLoopBarProps> = ({ latestResult }) => {
  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-lg border border-slate-800">
      {/* Loop Headline from Slide 4 */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-ping" />
            <span className="text-xs uppercase font-extrabold tracking-widest text-teal-400">
              Slide 03 Architecture
            </span>
          </div>
          <h3 className="text-lg font-bold text-white mt-1">Live Adaptive AI Loop</h3>
        </div>

        <div className="text-xs text-slate-400 bg-slate-800/80 px-3.5 py-1.5 rounded-full border border-slate-700/50">
          <span className="text-teal-300 font-semibold">Continuous Calibrator:</span> Active & Monitoring
        </div>
      </div>

      {/* 4 Loop Steps: Performance -> Personalization -> New Activity -> New Performance */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {/* Step 1: Performance */}
        <div className="bg-slate-800/60 rounded-2xl p-4 border border-slate-700/60 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs text-slate-400 font-bold mb-2">
              <span>01. PERFORMANCE</span>
              <Activity className="w-4 h-4 text-teal-400" />
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Speed: <span className="text-white font-bold">{latestResult ? `${latestResult.timeSpentSec}s` : '1.8s'}</span>
            </p>
            <p className="text-xs text-slate-300 leading-relaxed mt-1">
              Motor tremor: <span className="text-teal-300 font-medium">Smoothed</span>
            </p>
          </div>
          <div className="mt-3 text-[11px] text-teal-400/90 font-medium">
            Capturing natural rhythms
          </div>
        </div>

        {/* Step 2: Personalization */}
        <div className="bg-slate-800/60 rounded-2xl p-4 border border-slate-700/60 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs text-slate-400 font-bold mb-2">
              <span>02. PERSONALIZATION</span>
              <Cpu className="w-4 h-4 text-amber-400" />
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Cognitive load: <span className="text-white font-bold">Optimal / Low stress</span>
            </p>
            <p className="text-xs text-slate-300 leading-relaxed mt-1">
              Pacing: <span className="text-amber-300 font-medium">Unrushed gentle flow</span>
            </p>
          </div>
          <div className="mt-3 text-[11px] text-amber-400/90 font-medium">
            Zero fail states or countdowns
          </div>
        </div>

        {/* Step 3: New Activity */}
        <div className="bg-slate-800/60 rounded-2xl p-4 border border-slate-700/60 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs text-slate-400 font-bold mb-2">
              <span>03. ADAPTIVE MIX</span>
              <Sliders className="w-4 h-4 text-rose-400" />
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Target size: <span className="text-white font-bold">+18% expanded</span>
            </p>
            <p className="text-xs text-slate-300 leading-relaxed mt-1">
              Contrast: <span className="text-rose-300 font-medium">High clarity mode</span>
            </p>
          </div>
          <div className="mt-3 text-[11px] text-rose-400/90 font-medium">
            Auto-tuned to user comfort
          </div>
        </div>

        {/* Step 4: Share */}
        <div className="bg-slate-800/60 rounded-2xl p-4 border border-slate-700/60 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs text-slate-400 font-bold mb-2">
              <span>04. CAREGIVER SYNC</span>
              <HeartHandshake className="w-4 h-4 text-emerald-400" />
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Insight: <span className="text-white font-bold">Positive recall trend</span>
            </p>
            <p className="text-xs text-slate-300 leading-relaxed mt-1">
              Sync status: <span className="text-emerald-400 font-medium">Encrypted & instant</span>
            </p>
          </div>
          <div className="mt-3 text-[11px] text-emerald-400/90 font-medium">
            Family portal updated
          </div>
        </div>
      </div>

      {/* Adaptive Loop formula pill directly quoting Slide 4 */}
      <div className="px-4 py-3 bg-slate-950/80 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
        <span className="font-extrabold text-teal-400 uppercase tracking-wider">
          Adaptive Formula:
        </span>
        <div className="flex items-center space-x-2 text-slate-300 font-semibold overflow-x-auto max-w-full">
          <span>Performance</span>
          <ArrowRight className="w-3.5 h-3.5 text-teal-400 shrink-0" />
          <span>Personalization</span>
          <ArrowRight className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span>New Activity</span>
          <ArrowRight className="w-3.5 h-3.5 text-rose-400 shrink-0" />
          <span className="text-white">New Performance</span>
        </div>
      </div>
    </div>
  );
};
