import React from 'react';
import { WHAT_BROKE_STORIES } from '../../data/portfolioData';

export const WhatBrokeArchive: React.FC = () => {
  return (
    <div className="group relative flex flex-col justify-between rounded-3xl border-2 border-[#f43f8e]/35 bg-white p-6 sm:p-8 shadow-sm hover:border-[#f43f8e] transition-all">
      <div>
        <p className="text-xs font-mono font-medium text-slate-500">
          Engineering Post-Mortems · Root Cause Analysis
        </p>
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mt-1">
          Things I Broke While Building Systems
        </h2>
        <p className="text-slate-600 text-sm sm:text-base mt-1.5 max-w-2xl leading-relaxed">
          Polished portfolios often pretend everything works on the first try. Here are real engineering failures I triggered, how I diagnosed them, and the architectural principles they forged.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {WHAT_BROKE_STORIES.map((story, idx) => (
          <div 
            key={idx}
            className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#f43f8e]/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="text-xs font-mono text-[#f43f8e] font-semibold mb-1">{story.context}</div>
              <h3 className="text-base font-bold text-slate-900 mb-3">{story.title}</h3>

              <div className="space-y-3 text-xs">
                <div className="p-3.5 rounded-xl bg-rose-50/80 border border-rose-200/80">
                  <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-rose-700 mb-1">
                    The Incident
                  </div>
                  <p className="text-slate-700 text-xs leading-relaxed">{story.incident}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/80">
                  <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-amber-800 mb-1">
                    Root Cause & Fix
                  </div>
                  <p className="text-slate-700 text-xs leading-relaxed">{story.fix}</p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] font-mono text-emerald-800 leading-relaxed">
              <span className="font-bold text-slate-500 uppercase tracking-wider text-[10px] block mb-0.5">
                Key Architectural Lesson
              </span>
              <span>{story.lesson}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
