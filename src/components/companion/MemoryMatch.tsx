import React, { useState, useEffect } from 'react';
import { Sparkles, RefreshCw, CheckCircle2, Heart } from 'lucide-react';

interface CardItem {
  id: number;
  pairId: number;
  label: string;
  icon: string;
  subtext: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const SYMBOLS = [
  { pairId: 1, label: 'Warm Chai', icon: '☕', subtext: 'Morning ritual' },
  { pairId: 2, label: 'Golden Diya', icon: '🪔', subtext: 'Light of warmth' },
  { pairId: 3, label: 'Lotus Flower', icon: '🪷', subtext: 'Calm mind' },
  { pairId: 4, label: 'Sweet Mango', icon: '🥭', subtext: 'Summer memory' },
];

interface MemoryMatchProps {
  onActivityLog: (gameName: string, accuracy: number, timeSec: number, note: string) => void;
}

export const MemoryMatch: React.FC<MemoryMatchProps> = ({ onActivityLog }) => {
  const [cards, setCards] = useState<CardItem[]>([]);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [matchesCount, setMatchesCount] = useState<number>(0);
  const [startTime, setStartTime] = useState<number>(Date.now());
  const [attempts, setAttempts] = useState<number>(0);
  const [encouragement, setEncouragement] = useState<string>("Tap any card to begin. There's never any rush.");

  const initGame = () => {
    const rawCards: CardItem[] = [];
    let idCounter = 1;
    
    SYMBOLS.forEach((sym) => {
      // 2 cards per symbol
      rawCards.push({
        id: idCounter++,
        pairId: sym.pairId,
        label: sym.label,
        icon: sym.icon,
        subtext: sym.subtext,
        isFlipped: false,
        isMatched: false,
      });
      rawCards.push({
        id: idCounter++,
        pairId: sym.pairId,
        label: sym.label,
        icon: sym.icon,
        subtext: sym.subtext,
        isFlipped: false,
        isMatched: false,
      });
    });

    // Shuffle
    const shuffled = [...rawCards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setSelectedIds([]);
    setMatchesCount(0);
    setAttempts(0);
    setStartTime(Date.now());
    setEncouragement("Tap any card to begin. There's never any rush.");
  };

  useEffect(() => {
    initGame();
  }, []);

  const handleCardClick = (id: number) => {
    const card = cards.find(c => c.id === id);
    if (!card || card.isFlipped || card.isMatched || selectedIds.length >= 2) return;

    const newSelected = [...selectedIds, id];
    setSelectedIds(newSelected);

    // Flip this card
    setCards(prev => prev.map(c => c.id === id ? { ...c, isFlipped: true } : c));

    if (newSelected.length === 2) {
      setAttempts(a => a + 1);
      const first = cards.find(c => c.id === newSelected[0])!;
      const second = cards.find(c => c.id === id)!;

      if (first.pairId === second.pairId) {
        // Matched!
        setTimeout(() => {
          setCards(prev => prev.map(c => 
            c.id === first.id || c.id === second.id 
              ? { ...c, isMatched: true, isFlipped: true } 
              : c
          ));
          setSelectedIds([]);
          const newMatches = matchesCount + 1;
          setMatchesCount(newMatches);
          setEncouragement(`Wonderful! You paired the ${first.label}! 🌸`);

          if (newMatches === SYMBOLS.length) {
            const timeTaken = Math.round((Date.now() - startTime) / 1000);
            const accuracy = Math.round((SYMBOLS.length / (attempts + 1)) * 100);
            setEncouragement("Complete! You finished with a calm, focused mind!");
            onActivityLog('Memory Match', accuracy, timeTaken, 'Demonstrated steady visual recall');
          }
        }, 600);
      } else {
        // Not matched - gentle flip back
        setTimeout(() => {
          setCards(prev => prev.map(c => 
            newSelected.includes(c.id) ? { ...c, isFlipped: false } : c
          ));
          setSelectedIds([]);
          setEncouragement("Good attempt! Take a breath, we can try another.");
        }, 1200);
      }
    }
  };

  const isCompleted = matchesCount === SYMBOLS.length && cards.length > 0;

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200">
      {/* Game Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-3 py-1 bg-teal-100 text-teal-800 text-xs font-bold rounded-full uppercase tracking-wider">
              Sample Game 01
            </span>
            <span className="text-xs text-slate-500 font-medium">Visual Recognition & Recall</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">Memory Match</h2>
        </div>

        <div className="flex items-center space-x-3">
          <div className="text-right">
            <p className="text-xs text-slate-400 font-semibold uppercase">Pairs Matched</p>
            <p className="text-xl font-extrabold text-teal-600">{matchesCount} / {SYMBOLS.length}</p>
          </div>
          <button
            id="btn-restart-memory"
            onClick={initGame}
            className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
            title="Reset Game"
          >
            <RefreshCw className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Gentle Reassurance Coach Banner */}
      <div className="mb-6 px-4 py-3 bg-teal-50/80 rounded-2xl border border-teal-100 flex items-center space-x-3">
        <Heart className="w-5 h-5 text-teal-600 shrink-0" />
        <p className="text-sm font-medium text-teal-900">{encouragement}</p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto">
        {cards.map((card) => {
          const isRevealed = card.isFlipped || card.isMatched;
          return (
            <button
              id={`memory-card-${card.id}`}
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              disabled={card.isMatched}
              className={`h-36 sm:h-40 rounded-2xl p-3 flex flex-col items-center justify-center text-center transition-all duration-300 transform select-none ${
                card.isMatched
                  ? 'bg-teal-50 border-2 border-teal-300 scale-95 opacity-90'
                  : isRevealed
                  ? 'bg-amber-50 border-2 border-amber-300 shadow-md scale-100'
                  : 'bg-gradient-to-b from-slate-50 to-slate-100 border-2 border-slate-300 hover:border-teal-400 shadow-sm hover:shadow active:scale-95'
              }`}
            >
              {isRevealed ? (
                <div className="animate-in fade-in zoom-in-75 duration-200 flex flex-col items-center">
                  <span className="text-4xl sm:text-5xl mb-2">{card.icon}</span>
                  <span className="text-sm font-bold text-slate-800 leading-tight">{card.label}</span>
                  <span className="text-[11px] text-slate-500 mt-0.5">{card.subtext}</span>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mb-1.5 font-bold text-xl">
                    ?
                  </div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Tap here</span>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Completion Modal / Message */}
      {isCompleted && (
        <div className="mt-8 p-6 bg-gradient-to-r from-teal-50 via-emerald-50 to-amber-50 rounded-2xl border border-teal-200 text-center animate-in fade-in duration-300">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-500 text-white mb-2">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Wonderful Effort!</h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto mt-1">
            You smoothly matched all {SYMBOLS.length} cards. Your cognitive rhythm has been gently logged for your family caregiver.
          </p>
          <div className="mt-4 inline-flex items-center space-x-3">
            <button
              id="btn-play-again-memory"
              onClick={initGame}
              className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl shadow-md transition-all text-sm"
            >
              Play Once More
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
