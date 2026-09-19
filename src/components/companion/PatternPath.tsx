import React, { useState, useEffect } from 'react';
import { Play, RefreshCw, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

interface Stone {
  id: number;
  label: string;
  colorName: string;
  bgActive: string;
  bgDefault: string;
  borderActive: string;
  textColor: string;
}

const STONES: Stone[] = [
  { id: 0, label: 'Lotus Lake', colorName: 'Teal', bgActive: 'bg-teal-400', bgDefault: 'bg-teal-50', borderActive: 'border-teal-500', textColor: 'text-teal-800' },
  { id: 1, label: 'Golden Lamp', colorName: 'Amber', bgActive: 'bg-amber-400', bgDefault: 'bg-amber-50', borderActive: 'border-amber-500', textColor: 'text-amber-800' },
  { id: 2, label: 'Rose Petal', colorName: 'Coral', bgActive: 'bg-rose-400', bgDefault: 'bg-rose-50', borderActive: 'border-rose-500', textColor: 'text-rose-800' },
  { id: 3, label: 'Evening Sky', colorName: 'Indigo', bgActive: 'bg-indigo-400', bgDefault: 'bg-indigo-50', borderActive: 'border-indigo-500', textColor: 'text-indigo-800' },
];

interface PatternPathProps {
  onActivityLog: (gameName: string, accuracy: number, timeSec: number, note: string) => void;
}

export const PatternPath: React.FC<PatternPathProps> = ({ onActivityLog }) => {
  const [sequence, setSequence] = useState<number[]>([0, 1, 3]);
  const [userStep, setUserStep] = useState<number>(0);
  const [activeStone, setActiveStone] = useState<number | null>(null);
  const [isPlayingSeq, setIsPlayingSeq] = useState<boolean>(false);
  const [completed, setCompleted] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<string>("Press 'Show The Path' to watch the stepping stones light up.");
  const [level, setLevel] = useState<number>(1);
  const [startTime, setStartTime] = useState<number>(Date.now());

  // Generate sequence for current level
  const generateNewPattern = (lvl: number) => {
    const length = lvl === 1 ? 3 : lvl === 2 ? 4 : 4;
    const newSeq: number[] = [];
    for (let i = 0; i < length; i++) {
      newSeq.push(Math.floor(Math.random() * STONES.length));
    }
    setSequence(newSeq);
    setUserStep(0);
    setCompleted(false);
    setStartTime(Date.now());
    playSequence(newSeq);
  };

  const playSequence = (seqToPlay = sequence) => {
    setIsPlayingSeq(true);
    setUserStep(0);
    setStatusMessage("Watch the glowing path carefully...");

    seqToPlay.forEach((stoneId, index) => {
      setTimeout(() => {
        setActiveStone(stoneId);
        setTimeout(() => {
          setActiveStone(null);
          if (index === seqToPlay.length - 1) {
            setIsPlayingSeq(false);
            setStatusMessage("Your turn! Tap the stones in the same peaceful order.");
          }
        }, 800);
      }, (index + 1) * 1100);
    });
  };

  useEffect(() => {
    generateNewPattern(1);
  }, []);

  const handleStoneClick = (stoneId: number) => {
    if (isPlayingSeq || completed) return;

    // Flash clicked stone
    setActiveStone(stoneId);
    setTimeout(() => setActiveStone(null), 300);

    const expectedStone = sequence[userStep];

    if (stoneId === expectedStone) {
      const nextStep = userStep + 1;
      setUserStep(nextStep);

      if (nextStep === sequence.length) {
        // Completed sequence
        setCompleted(true);
        setStatusMessage("Excellent! You traced the full path with patience and precision.");
        const timeSec = Math.round((Date.now() - startTime) / 1000);
        onActivityLog('Pattern Path', 100, timeSec, `Successfully navigated ${sequence.length}-step cognitive sequence`);
      } else {
        setStatusMessage(`Great step! ${sequence.length - nextStep} more to go.`);
      }
    } else {
      // Gentle support instead of harsh error
      setStatusMessage("That is okay! Let's watch the path light up again together.");
      setTimeout(() => {
        playSequence();
      }, 1000);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-3 py-1 bg-amber-100 text-amber-900 text-xs font-bold rounded-full uppercase tracking-wider">
              Sample Game 02
            </span>
            <span className="text-xs text-slate-500 font-medium">Working Memory & Spatial Sequencing</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">Pattern Path</h2>
        </div>

        <div className="flex items-center space-x-3">
          <button
            id="btn-play-path-seq"
            onClick={() => playSequence()}
            disabled={isPlayingSeq}
            className="flex items-center space-x-1.5 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition-colors disabled:opacity-50"
          >
            <Play className="w-3.5 h-3.5 text-teal-600 fill-teal-600" />
            <span>Show The Path</span>
          </button>
          <button
            id="btn-restart-pattern"
            onClick={() => generateNewPattern(level)}
            className="p-2 rounded-xl border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
            title="Generate New Path"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Gentle Status Coach */}
      <div className="mb-6 px-4 py-3 bg-amber-50/80 rounded-2xl border border-amber-100 flex items-center space-x-3">
        <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0" />
        <p className="text-sm font-medium text-amber-900">{statusMessage}</p>
      </div>

      {/* Stepping Stones Field */}
      <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-lg mx-auto my-6">
        {STONES.map((stone) => {
          const isGlowing = activeStone === stone.id;
          return (
            <button
              id={`stone-btn-${stone.id}`}
              key={stone.id}
              onClick={() => handleStoneClick(stone.id)}
              disabled={isPlayingSeq}
              className={`h-36 sm:h-40 rounded-3xl p-4 flex flex-col items-center justify-center transition-all duration-300 transform select-none border-2 shadow-sm ${
                isGlowing
                  ? `${stone.bgActive} border-white ring-4 ring-amber-400/50 scale-105 shadow-xl text-slate-950 font-bold`
                  : `${stone.bgDefault} border-slate-200 hover:border-amber-300 hover:shadow-md active:scale-95`
              }`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-extrabold mb-2 shadow-inner ${
                isGlowing ? 'bg-white text-slate-900' : 'bg-white/80 ' + stone.textColor
              }`}>
                {stone.id + 1}
              </div>
              <span className={`text-sm font-bold ${isGlowing ? 'text-slate-950' : 'text-slate-800'}`}>
                {stone.label}
              </span>
              <span className="text-[11px] text-slate-500 mt-0.5">
                {isGlowing ? '✨ Glowing Now' : `Step ${stone.id + 1}`}
              </span>
            </button>
          );
        })}
      </div>

      {/* Sequence Progress dots */}
      <div className="flex items-center justify-center space-x-2 my-4">
        {sequence.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all ${
              i < userStep
                ? 'bg-amber-500 scale-110'
                : i === userStep
                ? 'bg-amber-300 animate-pulse'
                : 'bg-slate-200'
            }`}
          />
        ))}
      </div>

      {/* Completion */}
      {completed && (
        <div className="mt-6 p-6 bg-gradient-to-r from-amber-50 to-teal-50 rounded-2xl border border-amber-200 text-center animate-in fade-in duration-300">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-500 text-white mb-2">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Path Traced Perfectly!</h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto mt-1">
            You completed the sequence with confidence. Adaptive AI has registered this spatial milestone.
          </p>
          <div className="mt-4 inline-flex items-center space-x-3">
            <button
              id="btn-next-path-level"
              onClick={() => {
                setLevel(l => Math.min(3, l + 1));
                generateNewPattern(level + 1);
              }}
              className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl shadow-md transition-all text-sm"
            >
              Try Next Sequence
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
