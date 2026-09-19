import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';

export const OrcaMarineExperience: React.FC = () => {
  const { unlockSecret } = usePortfolio();
  const [stormActive, setStormActive] = useState<boolean>(false);

  const toggleStorm = () => {
    setStormActive(!stormActive);
    unlockSecret('orca_storm_simulation');
  };

  return (
    <div className="group relative flex flex-col justify-between rounded-3xl border-2 border-[#f43f8e]/35 bg-white p-6 sm:p-8 shadow-sm hover:border-[#f43f8e] transition-all">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <p className="text-xs font-mono font-medium text-slate-500">
            Multi-Agent Maritime Intelligence · Internal Smart India Hackathon · MIT Bengaluru
          </p>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mt-1">SagarMitra – ORCA Platform</h3>
          <p className="text-slate-600 text-sm mt-1 max-w-xl leading-relaxed">
            Collaborative agents fusing live ocean bathymetry, satellite sea-temperature feeds, and vessel route optimization.
          </p>
        </div>

        {/* Dynamic Storm Toggle */}
        <button
          onClick={toggleStorm}
          className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
            stormActive
              ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30 animate-pulse'
              : 'bg-white border border-slate-800 text-slate-900 hover:border-[#f43f8e] hover:text-[#f43f8e]'
          }`}
        >
          {stormActive ? 'Cyclonic Alert Active (Rerouted)' : 'Simulate Cyclonic Front'}
        </button>
      </div>

      {/* Radar Map & Agent Consensus Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mt-4">
        
        {/* Visual Radar Scope */}
        <div className="lg:col-span-6 relative h-64 sm:h-72 bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden flex items-center justify-center shadow-inner">
          {/* Radar Circles */}
          <div className="w-48 h-48 rounded-full border border-cyan-500/20 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full border border-cyan-500/30 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border border-cyan-500/40" />
            </div>
          </div>

          {/* Crosshairs */}
          <div className="absolute inset-x-0 h-px bg-cyan-500/20" />
          <div className="absolute inset-y-0 w-px bg-cyan-500/20" />

          {/* Sweeping Radar Beam */}
          <div className="absolute inset-0 radar-sweep pointer-events-none origin-center bg-gradient-to-tr from-cyan-500/20 via-transparent to-transparent rounded-full" />

          {/* Vessel Icon */}
          <div className={`absolute flex flex-col items-center transition-all duration-700 ${
            stormActive ? 'top-12 left-16' : 'top-28 left-28'
          }`}>
            <div className="w-4 h-4 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/80 animate-ping absolute" />
            <div className="w-4 h-4 rounded-full bg-cyan-500 flex items-center justify-center text-[8px] text-black font-bold">
              ▲
            </div>
            <span className="text-[9px] font-mono text-cyan-300 mt-1">VESSEL-04</span>
          </div>

          {/* Storm Hazard Zone */}
          {stormActive && (
            <div className="absolute top-24 right-16 w-28 h-28 rounded-full bg-rose-500/20 border border-rose-500/60 flex items-center justify-center animate-pulse">
              <span className="text-[10px] font-mono text-rose-300 font-bold">CYCLONIC GALE 45KT</span>
            </div>
          )}

          {/* Fishing Zone Hotspot */}
          <div className="absolute bottom-8 right-12 px-2.5 py-1 rounded-lg bg-emerald-950/80 border border-emerald-500/60 text-[10px] font-mono text-emerald-300">
            PFZ Zone A-3 (Chlorophyll High)
          </div>
        </div>

        {/* Collaborative Multi-Agent Consensus Stream */}
        <div className="lg:col-span-6 flex flex-col gap-3 font-mono text-xs">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="text-slate-900 font-bold mb-2.5">
              <span className="text-[11px] uppercase tracking-wider">Multi-Agent Consensus Hierarchy</span>
            </div>
            <div className="space-y-2 text-[11px] text-slate-700">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Weather Agent:</span>
                <span className={stormActive ? 'text-rose-600 font-bold' : 'text-emerald-600 font-bold'}>
                  {stormActive ? 'Wave Height: 4.8m (HAZARDOUS)' : 'Wave Height: 1.2m (CALM)'}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Route Optimizer:</span>
                <span className="text-slate-900 font-semibold">
                  {stormActive ? 'Waypoints altered: +6.2nm bypass' : 'Direct optimal trajectory active'}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Multilingual Assistant:</span>
                <span className="text-slate-800">Kannada, Tamil, Bengali voice synthesis active</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 leading-relaxed">
            <span className="text-slate-900 font-bold block mb-1">
              Architectural Arbitration
            </span>
            Hierarchical priority prevents deadlock: Depth safety strictly dominates route distance, guaranteeing vessels never enter shallow reef zones to save fuel.
          </div>
        </div>

      </div>
    </div>
  );
};
