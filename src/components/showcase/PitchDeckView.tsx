import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Brain, Users, TrendingUp, Sparkles, AlertCircle, ShieldCheck, ArrowRight, Play, Globe } from 'lucide-react';
import { SLIDES_CONTENT } from '../../data/slidesContent';

interface PitchDeckViewProps {
  onLaunchPrototype: () => void;
}

export const PitchDeckView: React.FC<PitchDeckViewProps> = ({ onLaunchPrototype }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const prevSlide = () => setCurrentSlideIndex(i => Math.max(0, i - 1));
  const nextSlide = () => setCurrentSlideIndex(i => Math.min(SLIDES_CONTENT.length - 1, i + 1));

  return (
    <div className="space-y-6">
      {/* Slide Navigation Header Bar */}
      <div className="bg-slate-900 text-white rounded-3xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 border border-slate-800 shadow-md">
        <div className="flex items-center space-x-3">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-400 bg-teal-950/60 px-3 py-1 rounded-full border border-teal-800/50">
            Ideathon 2026 Deck
          </span>
          <span className="text-sm font-semibold text-slate-300">
            Slide {currentSlideIndex + 1} of {SLIDES_CONTENT.length}
          </span>
        </div>

        {/* Quick Slide Pills */}
        <div className="flex items-center space-x-1.5 overflow-x-auto py-1 max-w-md">
          {SLIDES_CONTENT.map((slide, idx) => (
            <button
              id={`slide-nav-dot-${idx}`}
              key={slide.id}
              onClick={() => setCurrentSlideIndex(idx)}
              className={`h-8 px-3 rounded-xl text-xs font-bold transition-all shrink-0 ${
                currentSlideIndex === idx
                  ? 'bg-teal-400 text-slate-950 shadow-md'
                  : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
              }`}
            >
              {slide.sectionNumber || 'Intro'}
            </button>
          ))}
        </div>

        {/* Arrows */}
        <div className="flex items-center space-x-2">
          <button
            id="btn-prev-slide"
            onClick={prevSlide}
            disabled={currentSlideIndex === 0}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-white transition-colors"
            title="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            id="btn-next-slide"
            onClick={nextSlide}
            disabled={currentSlideIndex === SLIDES_CONTENT.length - 1}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-white transition-colors"
            title="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Slide Card Container */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-slate-200 min-h-[580px] flex flex-col justify-between transition-all">
        {/* SLIDE 1: TITLE SLIDE */}
        {currentSlideIndex === 0 && (
          <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 my-auto relative overflow-hidden border border-slate-800">
            {/* Background Node Network Visualization as on Slide 1 */}
            <div className="absolute top-6 right-6 sm:right-12 w-64 h-64 opacity-80 pointer-events-none hidden md:block">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <line x1="30" y1="40" x2="100" y2="100" stroke="#334155" strokeWidth="2" />
                <line x1="160" y1="20" x2="100" y2="100" stroke="#334155" strokeWidth="2" />
                <line x1="180" y1="110" x2="100" y2="100" stroke="#334155" strokeWidth="2" />
                <line x1="140" y1="170" x2="100" y2="100" stroke="#334155" strokeWidth="2" />
                <line x1="40" y1="150" x2="100" y2="100" stroke="#334155" strokeWidth="2" />
                <line x1="30" y1="40" x2="160" y2="20" stroke="#334155" strokeWidth="1.5" />
                <line x1="140" y1="170" x2="40" y2="150" stroke="#334155" strokeWidth="1.5" />
                <line x1="180" y1="110" x2="140" y2="170" stroke="#334155" strokeWidth="1.5" />
                
                {/* Nodes */}
                <circle cx="30" cy="40" r="12" fill="#2dd4bf" />
                <circle cx="160" cy="20" r="9" fill="#f43f5e" />
                <circle cx="100" cy="100" r="16" fill="#f59e0b" />
                <circle cx="180" cy="110" r="8" fill="#2dd4bf" />
                <circle cx="140" cy="170" r="13" fill="#2dd4bf" />
                <circle cx="40" cy="150" r="9" fill="#f43f5e" />
              </svg>
            </div>

            <div className="relative z-10 max-w-2xl">
              <div className="text-xs uppercase tracking-widest font-extrabold text-teal-400 mb-6">
                NEURAL NEXUS &nbsp;|&nbsp; IDEATHON 2026
              </div>

              <h1 className="text-5xl sm:text-6xl font-black tracking-tight text-white mb-2">
                Smritimitra
              </h1>

              <p className="text-sm font-medium text-slate-300 italic mb-6">
                <span className="text-teal-400 font-semibold">Smriti</span> = memory &nbsp;|&nbsp; <span className="text-amber-400 font-semibold">Mitra</span> = friend
              </p>

              <p className="text-lg sm:text-xl text-slate-200 font-normal leading-relaxed mb-8">
                An AI-powered cognitive game companion for people living with dementia, and the families who care for them.
              </p>

              {/* 3 Pillars Tags */}
              <div className="flex flex-wrap gap-2.5 mb-10">
                <span className="px-4 py-1.5 rounded-full border border-teal-500/40 bg-teal-500/10 text-teal-300 text-xs font-bold tracking-wider uppercase">
                  AI-POWERED
                </span>
                <span className="px-4 py-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-300 text-xs font-bold tracking-wider uppercase">
                  GAME-BASED
                </span>
                <span className="px-4 py-1.5 rounded-full border border-rose-500/40 bg-rose-500/10 text-rose-300 text-xs font-bold tracking-wider uppercase">
                  CAREGIVER-AWARE
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-800 text-xs text-slate-400">
                <span className="font-bold text-slate-300">Team Neural Nexus</span>
                <span className="tracking-widest font-extrabold text-teal-400">
                  PLAY &nbsp;•&nbsp; ENGAGE &nbsp;•&nbsp; REMEMBER
                </span>
              </div>
            </div>
          </div>
        )}

        {/* SLIDE 2: PROBLEM STATEMENT */}
        {currentSlideIndex === 1 && (
          <div className="space-y-6 my-auto">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-widest text-teal-600">
                01 / PROBLEM STATEMENT
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
                When memory fades, independence follows.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              {/* What is dementia box */}
              <div className="bg-slate-900 text-white p-6 rounded-3xl flex flex-col justify-between border border-slate-800">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-300 flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-extrabold tracking-widest text-teal-400 uppercase">
                    WHAT IS DEMENTIA?
                  </span>
                  <p className="text-sm text-slate-200 mt-2 leading-relaxed">
                    An umbrella term for conditions that affect memory, thinking, behaviour and daily functioning.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-amber-400 font-semibold italic">
                  Not a normal part of ageing (WHO)
                </div>
              </div>

              {/* 3 Impact Pillars */}
              <div className="md:col-span-2 space-y-3">
                <div className="p-4 bg-teal-50/60 rounded-2xl border border-teal-100 flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center shrink-0 font-bold">
                    🧠
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Memory</h4>
                    <p className="text-sm text-slate-600 mt-0.5">Names, recent events and daily routines slip away.</p>
                  </div>
                </div>

                <div className="p-4 bg-rose-50/60 rounded-2xl border border-rose-100 flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-rose-500 text-white flex items-center justify-center shrink-0 font-bold">
                    🏠
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Independence</h4>
                    <p className="text-sm text-slate-600 mt-0.5">Planning, cooking, handling money and finding the way home get hard.</p>
                  </div>
                </div>

                <div className="p-4 bg-amber-50/60 rounded-2xl border border-amber-100 flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center shrink-0 font-bold">
                    🤝
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Caregivers</h4>
                    <p className="text-sm text-slate-600 mt-0.5">Families give daily support, often without a clear view of how things are changing.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Problem Statement Summary Callout */}
            <div className="p-5 bg-rose-50/70 rounded-2xl border border-rose-200 mt-4">
              <span className="text-xs uppercase font-extrabold tracking-wider text-rose-700 block mb-1">
                PROBLEM STATEMENT
              </span>
              <p className="text-base font-semibold text-slate-900 leading-snug">
                People with dementia and their families lack an engaging, accessible, everyday way to keep the mind active and to track changes at home.
              </p>
            </div>
          </div>
        )}

        {/* SLIDE 3: THE SCALE */}
        {currentSlideIndex === 2 && (
          <div className="space-y-6 my-auto">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-widest text-teal-600">
                02 / THE SCALE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
                A growing crisis, and not only for the elderly.
              </h2>
            </div>

            {/* 3 Top Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 text-center">
                <span className="text-5xl font-black text-teal-600 block mb-2">57M</span>
                <p className="text-sm text-slate-700 font-medium">people living with dementia worldwide (2021)</p>
              </div>

              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 text-center">
                <span className="text-5xl font-black text-rose-600 block mb-2">~10M</span>
                <p className="text-sm text-slate-700 font-medium">new cases every year</p>
              </div>

              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 text-center">
                <span className="text-5xl font-black text-amber-600 block mb-2">8.8M</span>
                <p className="text-sm text-slate-700 font-medium">Indians aged 60+ live with dementia (7.4%)</p>
              </div>
            </div>

            {/* Young-Onset Dementia Callout */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800">
              <div className="text-xs uppercase font-extrabold tracking-widest text-teal-400 mb-4">
                YOUNG-ONSET DEMENTIA
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <span className="text-4xl font-extrabold text-rose-400">Up to 9%</span>
                  <p className="text-xs text-slate-300 mt-1">of cases begin before age 65 (WHO)</p>
                </div>

                <div>
                  <span className="text-4xl font-extrabold text-amber-400">119</span>
                  <p className="text-xs text-slate-300 mt-1">per 100,000 people aged 30 to 64 (JAMA Neurology, 2021)</p>
                </div>

                <div className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700/60">
                  <span className="text-[11px] font-bold text-teal-300 uppercase block mb-1">
                    ILLUSTRATIVE EXAMPLE
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed italic">
                    "A 45-year-old teacher keeps forgetting her students' names and taking wrong turns on the way home. It is put down to stress, and help is delayed."
                  </p>
                </div>
              </div>
            </div>

            <div className="text-[11px] text-slate-400 pt-2">
              <strong>Sources:</strong> WHO dementia fact sheet; Lee et al., Alzheimer's & Dementia (2023, LASI); Hendriks et al., JAMA Neurology (2021).
            </div>
          </div>
        )}

        {/* SLIDE 4: PROPOSED SOLUTION */}
        {currentSlideIndex === 3 && (
          <div className="space-y-6 my-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase font-extrabold tracking-widest text-teal-600">
                  03 / PROPOSED SOLUTION
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
                  Games that adapt to every mind.
                </h2>
              </div>
              <button
                id="btn-try-solution-companion"
                onClick={onLaunchPrototype}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold rounded-xl shadow-md transition-colors"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>Launch Working Prototype</span>
              </button>
            </div>

            {/* 4 Pillars: Play, Learn, Adapt, Share */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-3xl bg-teal-50 border border-teal-100 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-black text-teal-600">01</span>
                    <span className="w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center text-sm font-bold">🎮</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">PLAY</h4>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    The person picks a short, simple game.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-3xl bg-rose-50 border border-rose-100 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-black text-rose-600">02</span>
                    <span className="w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center text-sm font-bold">📈</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">LEARN</h4>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    AI studies how they interact, such as speed and accuracy.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-3xl bg-amber-50 border border-amber-100 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-black text-amber-600">03</span>
                    <span className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center text-sm font-bold">🎛️</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">ADAPT</h4>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    Difficulty and activity mix change to suit them.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-3xl bg-indigo-50 border border-indigo-100 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-black text-indigo-600">04</span>
                    <span className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center text-sm font-bold">👥</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">SHARE</h4>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    Caregivers get simple, clear insights.
                  </p>
                </div>
              </div>
            </div>

            {/* Adaptive Loop formula */}
            <div className="p-4 bg-teal-900 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="font-extrabold uppercase tracking-wider text-teal-300">
                ADAPTIVE LOOP:
              </span>
              <div className="flex items-center space-x-2 font-medium">
                <span>Performance</span>
                <span>→</span>
                <span>personalization</span>
                <span>→</span>
                <span>new activity</span>
                <span>→</span>
                <span>new performance</span>
              </div>
            </div>

            {/* Sample Games Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">SAMPLE GAMES:</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-800 text-xs font-bold rounded-full border border-slate-200">
                Memory Match
              </span>
              <span className="px-3 py-1 bg-slate-100 text-slate-800 text-xs font-bold rounded-full border border-slate-200">
                Pattern Path
              </span>
              <span className="px-3 py-1 bg-slate-100 text-slate-800 text-xs font-bold rounded-full border border-slate-200">
                Word Connect
              </span>
            </div>

            <div className="text-[11px] text-slate-400 italic">
              "A support tool, not a diagnostic device or a replacement for clinical care."
            </div>
          </div>
        )}

        {/* SLIDE 5: USP AND COMPETITORS */}
        {currentSlideIndex === 4 && (
          <div className="space-y-6 my-auto">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-widest text-teal-600">
                04 / USP AND COMPETITORS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
                Our edge is the combination.
              </h2>
            </div>

            {/* 3 Core Value Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-teal-50 border border-teal-100">
                <span className="text-sm font-extrabold text-teal-900 block">Adaptive</span>
                <p className="text-xs text-teal-700 mt-1">Responds to how each person plays.</p>
              </div>
              <div className="p-4 rounded-2xl bg-rose-50 border border-rose-100">
                <span className="text-sm font-extrabold text-rose-900 block">Engaging</span>
                <p className="text-xs text-rose-700 mt-1">Games, not tests: less pressure, more play.</p>
              </div>
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-100">
                <span className="text-sm font-extrabold text-amber-900 block">Connected</span>
                <p className="text-xs text-amber-700 mt-1">Caregivers stay in the loop with simple insights.</p>
              </div>
            </div>

            {/* Competitor Matrix Table directly from Slide 5 */}
            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-900 text-white font-bold">
                  <tr>
                    <th className="p-3.5">Solution type</th>
                    <th className="p-3.5 text-center">Adaptive</th>
                    <th className="p-3.5 text-center">Game-like</th>
                    <th className="p-3.5 text-center">Caregiver-aware</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5">
                      <div className="font-bold text-slate-900">General brain training</div>
                      <div className="text-[11px] text-slate-400">e.g. Lumosity, Elevate</div>
                    </td>
                    <td className="p-3.5 text-center font-bold text-teal-600">Yes</td>
                    <td className="p-3.5 text-center font-bold text-teal-600">Yes</td>
                    <td className="p-3.5 text-center font-bold text-slate-400">No</td>
                  </tr>

                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5">
                      <div className="font-bold text-slate-900">Assessment tools</div>
                      <div className="text-[11px] text-slate-400">e.g. CogniFit, Cogstate</div>
                    </td>
                    <td className="p-3.5 text-center font-semibold text-amber-600">Partly</td>
                    <td className="p-3.5 text-center font-semibold text-amber-600">Partly</td>
                    <td className="p-3.5 text-center font-bold text-slate-400">No</td>
                  </tr>

                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5">
                      <div className="font-bold text-slate-900">Dementia / rehab apps</div>
                      <div className="text-[11px] text-slate-400">e.g. MindMate, Constant Therapy</div>
                    </td>
                    <td className="p-3.5 text-center font-semibold text-amber-600">Partly</td>
                    <td className="p-3.5 text-center font-semibold text-amber-600">Partly</td>
                    <td className="p-3.5 text-center font-bold text-teal-600">Yes</td>
                  </tr>

                  {/* SMRITIMITRA WIN ROW */}
                  <tr className="bg-teal-50/80 border-t-2 border-teal-500 font-bold">
                    <td className="p-3.5">
                      <div className="font-extrabold text-teal-950 text-sm flex items-center space-x-1.5">
                        <span>SMRITIMITRA</span>
                        <span className="text-[10px] bg-teal-500 text-white px-2 py-0.5 rounded-full font-bold">OUR DESIGN GOAL</span>
                      </div>
                      <div className="text-[11px] text-teal-700 font-medium">All 3 criteria satisfied</div>
                    </td>
                    <td className="p-3.5 text-center font-black text-teal-800 text-sm">✓ Yes</td>
                    <td className="p-3.5 text-center font-black text-teal-800 text-sm">✓ Yes</td>
                    <td className="p-3.5 text-center font-black text-teal-800 text-sm">✓ Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="text-[11px] text-slate-400 italic">
              Category-level view; example names are illustrative and features vary by product and version.
            </div>
          </div>
        )}

        {/* SLIDE 6: MARKET SIZE */}
        {currentSlideIndex === 5 && (
          <div className="space-y-6 my-auto">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-widest text-teal-600">
                05 / MARKET SIZE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
                A big market, with an India-first entry.
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
              {/* Concentric TAM SAM SOM visualization */}
              <div className="bg-slate-900 text-white rounded-3xl p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
                <div className="w-56 h-56 rounded-full border-2 border-dashed border-teal-500/40 flex flex-col items-center justify-center p-4 relative">
                  <span className="text-[10px] font-bold text-teal-400 uppercase tracking-widest absolute top-2">
                    TAM $6-9B
                  </span>

                  <div className="w-40 h-40 rounded-full bg-teal-950/70 border border-teal-500/50 flex flex-col items-center justify-center p-3 relative">
                    <span className="text-[10px] font-bold text-teal-300 uppercase tracking-widest absolute top-2">
                      SAM ~$333M
                    </span>

                    <div className="w-24 h-24 rounded-full bg-teal-500 text-slate-950 flex flex-col items-center justify-center p-2 shadow-lg">
                      <span className="text-[10px] font-extrabold tracking-widest uppercase">SOM</span>
                      <span className="text-sm font-black">~$3.3M</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-400 mt-4">Concentric market opportunity</p>
              </div>

              {/* Detail Breakdown */}
              <div className="lg:col-span-2 space-y-3">
                <div className="p-4 rounded-2xl bg-teal-50 border border-teal-100 flex items-start space-x-3">
                  <span className="px-2.5 py-1 bg-teal-600 text-white font-extrabold text-xs rounded-lg">TAM</span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Total Addressable Market • $6-9B</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Global cognitive assessment and training: about US$6-9B (estimates vary by research firm).
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-100 flex items-start space-x-3">
                  <span className="px-2.5 py-1 bg-amber-600 text-white font-extrabold text-xs rounded-lg">SAM</span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Serviceable Available Market • ~$333M</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      The part we can reach, India-first: about US$333M in 2024 (Grand View Research).
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900 text-white border border-slate-800 flex items-start space-x-3">
                  <span className="px-2.5 py-1 bg-teal-400 text-slate-950 font-black text-xs rounded-lg">SOM</span>
                  <div>
                    <h4 className="text-sm font-bold text-white">Serviceable Obtainable Market • ~$3.3M</h4>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Early goal of 1% of SAM, about US$3.3M. Our assumption, to be validated in pilots.
                    </p>
                  </div>
                </div>

                {/* HOW WE EARN */}
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    HOW WE EARN
                  </span>
                  <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-800">
                    <span className="px-3 py-1 bg-white rounded-full border border-slate-200">Family subscriptions</span>
                    <span>•</span>
                    <span className="px-3 py-1 bg-white rounded-full border border-slate-200">Clinic and care-home licences</span>
                    <span>•</span>
                    <span className="px-3 py-1 bg-white rounded-full border border-slate-200">Partnerships</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-[11px] text-slate-400 pt-1">
              Sources: IMARC (2024) and Mordor Intelligence for global range; Grand View Research for India. SOM is a team assumption, not a sourced figure.
            </div>
          </div>
        )}

        {/* SLIDE 7: SWOT ANALYSIS & NEXT PROOF POINTS */}
        {currentSlideIndex === 6 && (
          <div className="space-y-6 my-auto">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-widest text-teal-600">
                06 / SWOT ANALYSIS & NEXT PROOF POINTS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
                Honest about risks, ready to prove it.
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
              {/* 2x2 SWOT Grid */}
              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Strengths */}
                <div className="p-4 rounded-2xl bg-teal-50 border border-teal-200">
                  <span className="text-xs font-extrabold text-teal-800 uppercase tracking-wider block mb-2">
                    STRENGTHS
                  </span>
                  <ul className="text-xs text-teal-950 font-medium space-y-1.5 list-disc pl-4">
                    <li>AI personalization</li>
                    <li>Game-based engagement</li>
                    <li>Caregiver-aware design</li>
                  </ul>
                </div>

                {/* Weaknesses */}
                <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200">
                  <span className="text-xs font-extrabold text-rose-800 uppercase tracking-wider block mb-2">
                    WEAKNESSES
                  </span>
                  <ul className="text-xs text-rose-950 font-medium space-y-1.5 list-disc pl-4">
                    <li>Early-stage product</li>
                    <li>Needs usability testing</li>
                    <li>Digital literacy barriers</li>
                  </ul>
                </div>

                {/* Opportunities */}
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200">
                  <span className="text-xs font-extrabold text-amber-800 uppercase tracking-wider block mb-2">
                    OPPORTUNITIES
                  </span>
                  <ul className="text-xs text-amber-950 font-medium space-y-1.5 list-disc pl-4">
                    <li>Large unmet need</li>
                    <li>Growing digital-health adoption</li>
                    <li>India-first, then global</li>
                  </ul>
                </div>

                {/* Threats */}
                <div className="p-4 rounded-2xl bg-slate-100 border border-slate-300">
                  <span className="text-xs font-extrabold text-slate-800 uppercase tracking-wider block mb-2">
                    THREATS
                  </span>
                  <ul className="text-xs text-slate-800 font-medium space-y-1.5 list-disc pl-4">
                    <li>Established competitors</li>
                    <li>Privacy and regulation</li>
                    <li>Need for clinical evidence</li>
                  </ul>
                </div>
              </div>

              {/* Next Proof Points & Vision Box */}
              <div className="bg-slate-900 text-white rounded-3xl p-6 flex flex-col justify-between border border-slate-800">
                <div>
                  <span className="text-xs font-extrabold tracking-widest text-teal-400 uppercase block mb-3">
                    NEXT PROOF POINTS
                  </span>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center space-x-2.5">
                      <span className="w-5 h-5 rounded-full bg-teal-500 text-slate-950 flex items-center justify-center font-bold text-[10px]">1</span>
                      <span className="font-semibold text-white">Prototype (Active in this Demo)</span>
                    </div>
                    <div className="flex items-center space-x-2.5">
                      <span className="w-5 h-5 rounded-full bg-rose-500 text-white flex items-center justify-center font-bold text-[10px]">2</span>
                      <span className="text-slate-300">User testing</span>
                    </div>
                    <div className="flex items-center space-x-2.5">
                      <span className="w-5 h-5 rounded-full bg-teal-500 text-slate-950 flex items-center justify-center font-bold text-[10px]">3</span>
                      <span className="text-slate-300">Caregiver feedback</span>
                    </div>
                    <div className="flex items-center space-x-2.5">
                      <span className="w-5 h-5 rounded-full bg-rose-500 text-white flex items-center justify-center font-bold text-[10px]">4</span>
                      <span className="text-slate-300">Clinical collaboration</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800">
                  <p className="text-xs italic text-slate-300 leading-relaxed">
                    "Technology should not replace care. It should make care more human."
                  </p>
                  <p className="text-sm font-extrabold text-amber-400 mt-2">
                    Thank you.
                  </p>
                  <p className="text-[10px] tracking-widest uppercase font-bold text-teal-400 mt-0.5">
                    PLAY &nbsp;•&nbsp; ENGAGE &nbsp;•&nbsp; REMEMBER
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer controls for Slide */}
        <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-slate-700">NEURAL NEXUS / SMRITIMITRA</span>
            <span>•</span>
            <span>Slide 0{currentSlideIndex + 1}</span>
          </div>

          <div className="flex items-center space-x-3">
            {currentSlideIndex > 0 && (
              <button
                onClick={prevSlide}
                className="text-slate-600 hover:text-slate-900 font-semibold"
              >
                ← Back
              </button>
            )}
            {currentSlideIndex < SLIDES_CONTENT.length - 1 ? (
              <button
                onClick={nextSlide}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors"
              >
                Next Slide →
              </button>
            ) : (
              <button
                onClick={onLaunchPrototype}
                className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl transition-colors flex items-center space-x-1.5"
              >
                <span>Try Live Prototype</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
