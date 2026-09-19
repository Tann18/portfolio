import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { 
  X, 
  Volume2, 
  VolumeX, 
  Sliders,
  CheckCircle2,
  Info
} from 'lucide-react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose
}) => {
  const { 
    soundEnabled, 
    toggleSound 
  } = usePortfolio();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md bg-white border-2 border-[#f43f8e]/35 rounded-2xl shadow-2xl p-6 text-slate-900 transition-colors">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <Sliders className="w-4 h-4 text-[#f43f8e]" />
            <h3 className="font-display font-bold text-base text-slate-900">Experience Preferences</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-900 transition-colors cursor-pointer"
            aria-label="Close preferences"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Options List */}
        <div className="space-y-4 text-xs font-mono">
          
          {/* Sound Toggle */}
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#f43f8e]/10 flex items-center justify-center text-[#f43f8e]">
                {soundEnabled ? (
                  <Volume2 className="w-4 h-4" />
                ) : (
                  <VolumeX className="w-4 h-4 text-slate-400" />
                )}
              </div>
              <div>
                <div className="font-bold text-slate-900 text-xs">Tactile Audio Feedback</div>
                <div className="text-[10px] text-slate-500">Procedural Web Audio clicks on interaction</div>
              </div>
            </div>
            <button
              onClick={toggleSound}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                soundEnabled
                  ? 'bg-[#f43f8e] text-white shadow-sm shadow-[#f43f8e]/30'
                  : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
              }`}
            >
              {soundEnabled ? 'ACTIVE' : 'MUTED'}
            </button>
          </div>

          {/* Portfolio Technical Architecture Specs */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-[11px]">
            <div className="flex items-center gap-2 text-slate-900 font-bold">
              <Info className="w-3.5 h-3.5 text-[#f43f8e]" />
              <span>System & Portfolio Runtime</span>
            </div>
            <div className="text-slate-600 space-y-1 text-[10px] leading-relaxed">
              <div className="flex justify-between">
                <span className="text-slate-500">Architecture:</span>
                <span className="font-semibold text-slate-800">React 19 · Vite · Tailwind CSS</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Design System:</span>
                <span className="font-semibold text-slate-800">Luminous Alabaster with Celestial Drift</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">ATS Verification:</span>
                <span className="font-semibold text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> ATS-Optimized PDF
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
