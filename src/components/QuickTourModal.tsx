import React from 'react';
import { X, Sparkles, Brain, Users, Presentation, ArrowRight } from 'lucide-react';
import { ActiveTab } from '../types';

interface QuickTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTab: (tab: ActiveTab) => void;
}

export const QuickTourModal: React.FC<QuickTourModalProps> = ({
  isOpen,
  onClose,
  onSelectTab,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-xl w-full shadow-2xl border border-slate-200 relative">
        <button
          id="btn-close-tour"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-2 text-teal-600 text-xs font-extrabold uppercase tracking-widest mb-1.5">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span>Ideathon 2026 Showoff Guide</span>
        </div>
        <h2 className="text-2xl font-black text-slate-900">
          How to Present Smritimitra
        </h2>
        <p className="text-xs text-slate-600 mt-1">
          Quick 3-step walkthrough tailored for pitching to judges, investors, or clinical mentors:
        </p>

        <div className="space-y-3 mt-6">
          {/* Step 1 */}
          <div
            onClick={() => {
              onSelectTab('pitch');
              onClose();
            }}
            className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200 hover:border-rose-400 hover:bg-rose-50 cursor-pointer transition-all flex items-start space-x-3.5 group"
          >
            <div className="w-9 h-9 rounded-xl bg-rose-600 text-white flex items-center justify-center shrink-0 font-bold text-sm">
              1
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-rose-700">
                  The Pitch & Market Scale
                </h4>
                <Presentation className="w-4 h-4 text-rose-500" />
              </div>
              <p className="text-xs text-slate-600 mt-0.5">
                Show the 57M global & 8.8M Indian crisis, TAM $6-9B, and why general brain training fails dementia patients.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div
            onClick={() => {
              onSelectTab('companion');
              onClose();
            }}
            className="p-4 rounded-2xl bg-teal-50/70 border border-teal-200 hover:border-teal-400 hover:bg-teal-50 cursor-pointer transition-all flex items-start space-x-3.5 group"
          >
            <div className="w-9 h-9 rounded-xl bg-teal-600 text-white flex items-center justify-center shrink-0 font-bold text-sm">
              2
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-teal-700">
                  Interactive Companion Demo
                </h4>
                <Brain className="w-4 h-4 text-teal-500" />
              </div>
              <p className="text-xs text-slate-600 mt-0.5">
                Play Memory Match, Pattern Path, or Word Connect with live Adaptive AI pacing and gentle reassurance.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div
            onClick={() => {
              onSelectTab('caregiver');
              onClose();
            }}
            className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 hover:border-amber-400 hover:bg-amber-50 cursor-pointer transition-all flex items-start space-x-3.5 group"
          >
            <div className="w-9 h-9 rounded-xl bg-amber-600 text-white flex items-center justify-center shrink-0 font-bold text-sm">
              3
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-amber-700">
                  Caregiver & Family Loop
                </h4>
                <Users className="w-4 h-4 text-amber-500" />
              </div>
              <p className="text-xs text-slate-600 mt-0.5">
                Demonstrate the "SHARE" portal: weekly cognitive stability scores and shareable clinical notes for doctors.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 text-center">
          <button
            onClick={onClose}
            className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl text-xs transition-colors"
          >
            Start Exploring Prototype
          </button>
        </div>
      </div>
    </div>
  );
};
