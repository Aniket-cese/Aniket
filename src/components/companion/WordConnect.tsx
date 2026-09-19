import React, { useState } from 'react';
import { Sparkles, RefreshCw, CheckCircle2, MessageCircleHeart } from 'lucide-react';

interface WordPair {
  id: number;
  prompt: string;
  icon: string;
  target: string;
  distractors: string[];
  reminiscenceQuestion: string;
}

const WORD_ITEMS: WordPair[] = [
  {
    id: 1,
    prompt: "Morning Routine",
    icon: "🌅",
    target: "Warm Cup of Chai",
    distractors: ["Flashlight", "Suitcase"],
    reminiscenceQuestion: "Who used to make the best morning ginger tea in your home?"
  },
  {
    id: 2,
    prompt: "Monsoon Season",
    icon: "🌧️",
    target: "Fragrance of Rain (Mitti)",
    distractors: ["Winter Jacket", "Sand Dunes"],
    reminiscenceQuestion: "Do you remember dancing or sitting by the veranda when the first monsoon showers arrived?"
  },
  {
    id: 3,
    prompt: "Evening Gathering",
    icon: "🕯️",
    target: "Storytime & Laughter",
    distractors: ["Alarm Clock", "Office Desk"],
    reminiscenceQuestion: "What was your favorite festival story to share with family?"
  },
  {
    id: 4,
    prompt: "Garden Courtyard",
    icon: "🌺",
    target: "Fresh Marigold & Tulsi",
    distractors: ["Iron Nails", "Speedboat"],
    reminiscenceQuestion: "Did you enjoy watering plants in the morning courtyard?"
  }
];

interface WordConnectProps {
  onActivityLog: (gameName: string, accuracy: number, timeSec: number, note: string) => void;
}

export const WordConnect: React.FC<WordConnectProps> = ({ onActivityLog }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState<number>(0);
  const [startTime] = useState<number>(Date.now());
  const [isDone, setIsDone] = useState<boolean>(false);

  const currentItem = WORD_ITEMS[currentIndex];

  // Options shuffled
  const [options, setOptions] = useState<string[]>(() => {
    return [currentItem.target, ...currentItem.distractors].sort(() => Math.random() - 0.5);
  });

  const nextQuestion = (idx: number) => {
    if (idx < WORD_ITEMS.length) {
      setCurrentIndex(idx);
      setSelectedOption(null);
      setIsCorrect(null);
      const nextItem = WORD_ITEMS[idx];
      setOptions([nextItem.target, ...nextItem.distractors].sort(() => Math.random() - 0.5));
    } else {
      setIsDone(true);
      const timeSec = Math.round((Date.now() - startTime) / 1000);
      const acc = Math.round((score / WORD_ITEMS.length) * 100);
      onActivityLog('Word Connect', acc, timeSec, 'Warm semantic fluency and reminiscence engagement');
    }
  };

  const handleSelect = (choice: string) => {
    if (selectedOption !== null) return;
    setSelectedOption(choice);

    if (choice === currentItem.target) {
      setIsCorrect(true);
      setScore(s => s + 1);
    } else {
      setIsCorrect(false);
    }
  };

  const resetGame = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsCorrect(null);
    setScore(0);
    setIsDone(false);
    const first = WORD_ITEMS[0];
    setOptions([first.target, ...first.distractors].sort(() => Math.random() - 0.5));
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-3 py-1 bg-rose-100 text-rose-900 text-xs font-bold rounded-full uppercase tracking-wider">
              Sample Game 03
            </span>
            <span className="text-xs text-slate-500 font-medium">Semantic Memory & Conversational Reminiscence</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">Word Connect</h2>
        </div>

        <div className="flex items-center space-x-3">
          <div className="text-right">
            <p className="text-xs text-slate-400 font-semibold uppercase">Progress</p>
            <p className="text-xl font-extrabold text-rose-600">{currentIndex + 1} / {WORD_ITEMS.length}</p>
          </div>
          <button
            id="btn-restart-word"
            onClick={resetGame}
            className="p-2 rounded-xl border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
            title="Reset"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {!isDone ? (
        <div className="max-w-xl mx-auto">
          {/* Prompt card */}
          <div className="p-6 bg-gradient-to-br from-rose-50/70 to-amber-50/70 rounded-3xl border border-rose-100 text-center mb-6">
            <span className="text-5xl block mb-2">{currentItem.icon}</span>
            <p className="text-xs font-bold uppercase tracking-wider text-rose-600">Which memory connects naturally with?</p>
            <h3 className="text-2xl font-extrabold text-slate-900 mt-1">{currentItem.prompt}</h3>
          </div>

          {/* Options */}
          <div className="space-y-3 mb-6">
            {options.map((option, idx) => {
              const isSelected = selectedOption === option;
              let btnClass = "bg-slate-50 border-2 border-slate-200 text-slate-800 hover:border-rose-300 hover:bg-rose-50/50";
              if (isSelected) {
                if (option === currentItem.target) {
                  btnClass = "bg-emerald-50 border-2 border-emerald-500 text-emerald-950 font-bold shadow-md";
                } else {
                  btnClass = "bg-amber-50 border-2 border-amber-400 text-amber-950 font-bold";
                }
              }

              return (
                <button
                  id={`word-opt-${idx}`}
                  key={idx}
                  onClick={() => handleSelect(option)}
                  disabled={selectedOption !== null}
                  className={`w-full p-4 rounded-2xl text-left flex items-center justify-between text-base font-semibold transition-all duration-200 ${btnClass}`}
                >
                  <span>{option}</span>
                  {isSelected && option === currentItem.target && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Reminiscence Conversation Card for Caregiver & Patient */}
          {selectedOption && (
            <div className="p-4 bg-teal-50/80 rounded-2xl border border-teal-200 text-left animate-in fade-in duration-300 mb-6">
              <div className="flex items-center space-x-2 text-teal-800 font-bold text-xs uppercase tracking-wide mb-1">
                <MessageCircleHeart className="w-4 h-4 text-teal-600" />
                <span>Caregiver Conversation Cue</span>
              </div>
              <p className="text-sm font-medium text-teal-950 italic">
                "{currentItem.reminiscenceQuestion}"
              </p>
            </div>
          )}

          {/* Next Button */}
          {selectedOption && (
            <div className="text-center">
              <button
                id="btn-next-word"
                onClick={() => nextQuestion(currentIndex + 1)}
                className="px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-2xl shadow-md text-sm transition-transform active:scale-95"
              >
                {currentIndex + 1 === WORD_ITEMS.length ? 'Finish Activity' : 'Next Memory Card →'}
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Completion */
        <div className="p-8 bg-gradient-to-r from-rose-50 to-teal-50 rounded-3xl border border-rose-200 text-center animate-in fade-in duration-300">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-rose-500 text-white mb-3">
            <Sparkles className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">Beautiful Reminiscence!</h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto mt-2">
            These shared memories ignite positive neural sparks and spark warm conversation between family and elder.
          </p>
          <div className="mt-6">
            <button
              id="btn-play-word-again"
              onClick={resetGame}
              className="px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-2xl shadow-md text-sm transition-all"
            >
              Play Word Connect Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
