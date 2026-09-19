/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ActiveTab, GameResult } from './types';
import { Header } from './components/Header';
import { CompanionView } from './components/companion/CompanionView';
import { CaregiverDashboard } from './components/caregiver/CaregiverDashboard';
import { PitchDeckView } from './components/showcase/PitchDeckView';
import { QuickTourModal } from './components/QuickTourModal';
import { Footer } from './components/Footer';
import { Sparkles, Brain, Users, Presentation } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('companion');
  const [isTourOpen, setIsTourOpen] = useState<boolean>(false);
  
  // Initial demo logs to showcase caregiver metrics right away
  const [activityLogs, setActivityLogs] = useState<GameResult[]>([
    {
      gameName: 'Memory Match',
      accuracy: 100,
      timeSpentSec: 42,
      hesitations: 0,
      completedAt: '09:15 AM',
      adaptiveAdjustment: 'Demonstrated steady visual recall with warm ginger chai icons',
    },
    {
      gameName: 'Word Connect',
      accuracy: 100,
      timeSpentSec: 35,
      hesitations: 1,
      completedAt: '09:22 AM',
      adaptiveAdjustment: 'Sparked positive reminiscence about monsoon courtyard memories',
    }
  ]);

  const [latestResult, setLatestResult] = useState<GameResult | null>(activityLogs[0]);

  const handleLogResult = (newResult: GameResult) => {
    setActivityLogs(prev => [newResult, ...prev]);
    setLatestResult(newResult);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-100 text-slate-900 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Top Header with Brand & Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenQuickTour={() => setIsTourOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Ideathon Showcase Sub-Banner */}
        <div className="mb-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-2xl p-3.5 sm:p-4 border border-slate-800 flex flex-wrap items-center justify-between gap-3 shadow-sm">
          <div className="flex items-center space-x-2 text-xs">
            <span className="font-extrabold text-teal-400">NEURAL NEXUS</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300">Ideathon 2026 Prototype Showcase</span>
          </div>

          <div className="flex items-center space-x-2 text-xs font-semibold">
            <span className="text-slate-400 hidden sm:inline">Active View:</span>
            <div className="flex items-center space-x-1.5">
              <button
                id="quick-tab-companion"
                onClick={() => setActiveTab('companion')}
                className={`px-3 py-1 rounded-xl text-xs transition-colors flex items-center space-x-1 ${
                  activeTab === 'companion' ? 'bg-teal-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300 hover:text-white'
                }`}
              >
                <Brain className="w-3 h-3" />
                <span>Companion (Patient)</span>
              </button>

              <button
                id="quick-tab-caregiver"
                onClick={() => setActiveTab('caregiver')}
                className={`px-3 py-1 rounded-xl text-xs transition-colors flex items-center space-x-1 ${
                  activeTab === 'caregiver' ? 'bg-amber-400 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300 hover:text-white'
                }`}
              >
                <Users className="w-3 h-3" />
                <span>Caregiver Portal</span>
              </button>

              <button
                id="quick-tab-pitch"
                onClick={() => setActiveTab('pitch')}
                className={`px-3 py-1 rounded-xl text-xs transition-colors flex items-center space-x-1 ${
                  activeTab === 'pitch' ? 'bg-rose-500 text-white font-bold' : 'bg-slate-800 text-slate-300 hover:text-white'
                }`}
              >
                <Presentation className="w-3 h-3" />
                <span>Pitch Deck (7 Slides)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tab Views */}
        {activeTab === 'companion' && (
          <CompanionView
            onLogResult={handleLogResult}
            latestResult={latestResult}
          />
        )}

        {activeTab === 'caregiver' && (
          <CaregiverDashboard
            activityLogs={activityLogs}
            onSwitchToGame={() => setActiveTab('companion')}
          />
        )}

        {activeTab === 'pitch' && (
          <PitchDeckView
            onLaunchPrototype={() => setActiveTab('companion')}
          />
        )}
      </main>

      {/* Presenter Quick Tour Modal */}
      <QuickTourModal
        isOpen={isTourOpen}
        onClose={() => setIsTourOpen(false)}
        onSelectTab={setActiveTab}
      />

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
