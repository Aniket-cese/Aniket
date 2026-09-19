import React from 'react';
import { Brain, Users, Presentation, Sparkles } from 'lucide-react';
import { ActiveTab } from '../types';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenQuickTour: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenQuickTour
}) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-900 text-white shadow-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-2">
          {/* Brand Identity from Slide 1 */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('companion')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-500 via-teal-400 to-amber-400 flex items-center justify-center shadow-lg shadow-teal-500/20">
              <Brain className="w-6 h-6 text-slate-950 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-xl tracking-tight text-white">Smritimitra</span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30">
                  Ideathon 2026
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium">
                <span className="text-teal-400">Smriti</span> = memory &nbsp;|&nbsp; <span className="text-amber-300">Mitra</span> = friend
              </p>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center space-x-1 sm:space-x-2 bg-slate-800/80 p-1.5 rounded-xl border border-slate-700/60">
            <button
              id="nav-companion-tab"
              onClick={() => setActiveTab('companion')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeTab === 'companion'
                  ? 'bg-teal-500 text-slate-950 shadow-md font-bold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Brain className="w-4 h-4" />
              <span className="hidden sm:inline">Companion</span>
              <span className="text-xs opacity-80">(Patient)</span>
            </button>

            <button
              id="nav-caregiver-tab"
              onClick={() => setActiveTab('caregiver')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeTab === 'caregiver'
                  ? 'bg-amber-400 text-slate-950 shadow-md font-bold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Users className="w-4 h-4" />
              <span className="hidden sm:inline">Caregiver</span>
              <span className="text-xs opacity-80">(Portal)</span>
            </button>

            <button
              id="nav-pitch-tab"
              onClick={() => setActiveTab('pitch')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                activeTab === 'pitch'
                  ? 'bg-rose-500 text-white shadow-md font-bold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <Presentation className="w-4 h-4" />
              <span className="hidden sm:inline">Ideathon</span>
              <span className="text-xs opacity-80">(Slides)</span>
            </button>
          </div>

          {/* Quick Presenter / Showoff Button */}
          <div className="hidden lg:flex items-center">
            <button
              id="btn-showoff-guide"
              onClick={onOpenQuickTour}
              className="flex items-center space-x-2 bg-gradient-to-r from-teal-500/20 to-amber-500/20 hover:from-teal-500/30 hover:to-amber-500/30 text-teal-200 border border-teal-500/30 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Showoff Guide</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
