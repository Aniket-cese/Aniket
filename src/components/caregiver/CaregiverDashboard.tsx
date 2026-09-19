import React, { useState } from 'react';
import { HeartHandshake, TrendingUp, Calendar, Clock, Smile, FileText, CheckCircle2, ShieldAlert, Sparkles, Brain } from 'lucide-react';
import { GameResult, CaregiverStat } from '../../types';

interface CaregiverDashboardProps {
  activityLogs: GameResult[];
  onSwitchToGame: () => void;
}

const DEFAULT_WEEKLY_STATS: CaregiverStat[] = [
  { day: 'Mon', sessions: 2, stabilityScore: 92, focusMinutes: 14, mood: 'cheerful' },
  { day: 'Tue', sessions: 1, stabilityScore: 89, focusMinutes: 10, mood: 'peaceful' },
  { day: 'Wed', sessions: 3, stabilityScore: 95, focusMinutes: 22, mood: 'cheerful' },
  { day: 'Thu', sessions: 2, stabilityScore: 91, focusMinutes: 16, mood: 'focused' },
  { day: 'Fri', sessions: 2, stabilityScore: 94, focusMinutes: 15, mood: 'peaceful' },
  { day: 'Sat', sessions: 3, stabilityScore: 96, focusMinutes: 24, mood: 'cheerful' },
  { day: 'Sun (Today)', sessions: 2, stabilityScore: 94, focusMinutes: 18, mood: 'peaceful' },
];

export const CaregiverDashboard: React.FC<CaregiverDashboardProps> = ({
  activityLogs,
  onSwitchToGame,
}) => {
  const [copiedReport, setCopiedReport] = useState(false);

  const handleCopyReport = () => {
    setCopiedReport(true);
    setTimeout(() => setCopiedReport(false), 3000);
  };

  return (
    <div className="space-y-8">
      {/* Caregiver Welcome Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 bg-amber-100 text-amber-900 text-xs font-bold rounded-full uppercase tracking-wider">
                Caregiver-Aware Portal
              </span>
              <span className="text-xs text-slate-500 font-medium">Slide 04: "SHARE" Principle</span>
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900 mt-2">
              Family & Caregiver Insights
            </h1>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Giving families a clear, comforting window into how their loved one is thinking, engaging, and feeling every day at home.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <button
              id="btn-export-doctor-summary"
              onClick={handleCopyReport}
              className="flex items-center space-x-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl text-xs font-bold transition-colors shadow-sm"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              <span>{copiedReport ? 'Copied to Clipboard!' : 'Export Clinical Summary'}</span>
            </button>
          </div>
        </div>

        {/* 4 Core Pillars Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {/* Card 1 */}
          <div className="bg-teal-50/70 rounded-2xl p-4 border border-teal-100">
            <div className="flex items-center justify-between text-teal-800 text-xs font-bold">
              <span>COGNITIVE STABILITY</span>
              <TrendingUp className="w-4 h-4 text-teal-600" />
            </div>
            <div className="mt-2 text-2xl font-black text-teal-950">94%</div>
            <p className="text-xs text-teal-700 mt-1">Steady recall across 7 days</p>
          </div>

          {/* Card 2 */}
          <div className="bg-amber-50/70 rounded-2xl p-4 border border-amber-100">
            <div className="flex items-center justify-between text-amber-800 text-xs font-bold">
              <span>ENGAGEMENT TIME</span>
              <Clock className="w-4 h-4 text-amber-600" />
            </div>
            <div className="mt-2 text-2xl font-black text-amber-950">119 mins</div>
            <p className="text-xs text-amber-700 mt-1">Weekly target reached early</p>
          </div>

          {/* Card 3 */}
          <div className="bg-rose-50/70 rounded-2xl p-4 border border-rose-100">
            <div className="flex items-center justify-between text-rose-800 text-xs font-bold">
              <span>PREVALENT MOOD</span>
              <Smile className="w-4 h-4 text-rose-600" />
            </div>
            <div className="mt-2 text-2xl font-black text-rose-950">Peaceful</div>
            <p className="text-xs text-rose-700 mt-1">Zero agitation observed</p>
          </div>

          {/* Card 4 */}
          <div className="bg-indigo-50/70 rounded-2xl p-4 border border-indigo-100">
            <div className="flex items-center justify-between text-indigo-800 text-xs font-bold">
              <span>ADAPTIVE LEVEL</span>
              <Brain className="w-4 h-4 text-indigo-600" />
            </div>
            <div className="mt-2 text-2xl font-black text-indigo-950">Gentle Flow</div>
            <p className="text-xs text-indigo-700 mt-1">AI adjusted for motor ease</p>
          </div>
        </div>
      </div>

      {/* Weekly Activity Trends & Caregiver Note */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Weekly Trend Chart */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900">7-Day Engagement & Routine</h3>
              <p className="text-xs text-slate-500">Duration of play & cognitive stability</p>
            </div>
            <span className="text-xs font-bold text-teal-600 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-100">
              Positive Routine
            </span>
          </div>

          <div className="space-y-3 mt-6">
            {DEFAULT_WEEKLY_STATS.map((stat, idx) => (
              <div key={idx} className="flex items-center space-x-3">
                <span className="w-20 text-xs font-bold text-slate-600 shrink-0">{stat.day}</span>
                <div className="flex-1 bg-slate-100 h-6 rounded-xl overflow-hidden relative">
                  <div
                    className="bg-gradient-to-r from-teal-500 to-amber-400 h-full rounded-xl transition-all duration-500 flex items-center justify-end pr-2 text-[10px] font-bold text-slate-950"
                    style={{ width: `${Math.min(100, (stat.focusMinutes / 25) * 100)}%` }}
                  >
                    {stat.focusMinutes}m
                  </div>
                </div>
                <span className="w-16 text-right text-xs font-semibold text-slate-500">
                  {stat.stabilityScore}%
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
            <span>Bar: Active minutes played</span>
            <span>Right: Cognitive consistency %</span>
          </div>
        </div>

        {/* Reminiscence & Daily Conversation Prompts for Family */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50/50 rounded-3xl p-6 border border-amber-200/80 flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-2 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Today's Family Spark</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">Conversations to Try Today</h3>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Based on Aaji's response during <em>Word Connect</em>, she smiled warmly when remembering monsoon rains and morning ginger tea.
            </p>

            <div className="mt-4 p-4 bg-white/80 rounded-2xl border border-amber-200 text-xs text-slate-800 space-y-2">
              <p className="font-semibold text-amber-900">Suggested talking points:</p>
              <ul className="list-disc pl-4 space-y-1 text-slate-700">
                <li>"Aaji, tell me about how the house smelled during the first monsoon showers."</li>
                <li>"Let's brew cardamom tea together this evening."</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-amber-200/60">
            <button
              id="btn-caregiver-start-session"
              onClick={onSwitchToGame}
              className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-2xl shadow-sm text-xs transition-colors text-center"
            >
              Start Shared Play Session With Loved One
            </button>
          </div>
        </div>
      </div>

      {/* Live Activity Logs Feed */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Recorded Activities</h3>
        
        {activityLogs.length > 0 ? (
          <div className="divide-y divide-slate-100">
            {activityLogs.map((log, index) => (
              <div key={index} className="py-3.5 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-xs">
                    🎮
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{log.gameName}</h4>
                    <p className="text-xs text-slate-500">{log.adaptiveAdjustment}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-xs">
                  <span className="font-semibold text-slate-600">Time: {log.timeSpentSec}s</span>
                  <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                    {log.accuracy}% Accuracy
                  </span>
                  <span className="text-slate-400">{log.completedAt}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-8 text-center text-slate-500 text-sm">
            <p>No games played yet in this session.</p>
            <p className="text-xs text-slate-400 mt-1">
              Switch to Companion mode and play a quick game to see live caregiver sync in action!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
