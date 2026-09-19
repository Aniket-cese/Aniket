import React from 'react';
import { Heart, Brain } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 bg-slate-900 text-white border-t border-slate-800 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center text-slate-950 font-bold">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <span className="font-extrabold text-base text-white">Smritimitra</span>
              <p className="text-xs text-slate-400">Team Neural Nexus • Ideathon 2026</p>
            </div>
          </div>

          <div className="text-center md:text-right text-xs text-slate-400 max-w-md">
            <p className="text-slate-300 font-medium italic">
              "Technology should not replace care. It should make care more human."
            </p>
            <p className="mt-1 text-[11px] text-slate-500">
              A support tool, not a diagnostic device or a replacement for clinical care.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">
          <span>PLAY &nbsp;•&nbsp; ENGAGE &nbsp;•&nbsp; REMEMBER</span>
          <span>Designed for dementia patients & caregiver families</span>
        </div>
      </div>
    </footer>
  );
};
