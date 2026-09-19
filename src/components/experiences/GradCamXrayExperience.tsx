import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';


export const GradCamXrayExperience: React.FC = () => {
  const { unlockSecret } = usePortfolio();
  const [viewMode, setViewMode] = useState<'raw' | 'gradcam' | 'leakage'>('gradcam');

  const handleToggle = (mode: 'raw' | 'gradcam' | 'leakage') => {
    setViewMode(mode);
    if (mode === 'leakage') {
      unlockSecret('bed_marker_leakage');
    }
  };

  return (
    <div className="group relative flex flex-col justify-between rounded-3xl border-2 border-[#f43f8e]/35 bg-white p-6 sm:p-8 shadow-sm hover:border-[#f43f8e] transition-all gap-6">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <p className="text-xs font-mono font-medium text-slate-500">
            Medical Computer Vision · PyTorch · Grad-CAM · Lovelace Hackathon
          </p>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mt-1">AI Pneumonia Detection & Saliency Inspection</h3>
          <p className="text-slate-600 text-sm mt-1 max-w-xl leading-relaxed">
            Interactive radiograph visualizer with explainability layer demonstrating visual model attribution.
          </p>
        </div>

        {/* View Mode Controls */}
        <div className="flex items-center gap-1.5 bg-slate-100 border border-slate-200 rounded-xl p-1 text-xs font-mono">
          <button
            onClick={() => handleToggle('raw')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              viewMode === 'raw'
                ? 'bg-white border border-slate-300 text-slate-900 font-bold shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Raw X-Ray
          </button>
          <button
            onClick={() => handleToggle('gradcam')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              viewMode === 'gradcam'
                ? 'bg-[#f43f8e] text-white font-bold shadow-sm'
                : 'text-slate-600 hover:text-[#f43f8e]'
            }`}
          >
            Grad-CAM Saliency
          </button>
          <button
            onClick={() => handleToggle('leakage')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              viewMode === 'leakage'
                ? 'bg-rose-600 text-white font-bold shadow-sm'
                : 'text-slate-600 hover:text-rose-600'
            }`}
            title="Inspect what broke during prototype validation"
          >
            Data Leakage Bug
          </button>
        </div>
      </div>

      {/* Interactive Radiograph Canvas Simulation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
        {/* Chest X-Ray Simulator Display */}
        <div className="lg:col-span-7 relative h-72 sm:h-80 bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden flex items-center justify-center shadow-inner">
          {/* Simulated Thoracic Cavity Silhouette */}
          <div className="relative w-64 h-72 border border-slate-700/40 rounded-3xl bg-slate-900/80 flex items-center justify-center">
            {/* Spine column */}
            <div className="w-4 h-full bg-slate-800/80 rounded-full blur-[1px]" />
            {/* Left lung field */}
            <div className="absolute left-6 top-10 w-20 h-44 rounded-full border border-slate-700/40 bg-slate-950/90 blur-[2px]" />
            {/* Right lung field */}
            <div className="absolute right-6 top-10 w-20 h-44 rounded-full border border-slate-700/40 bg-slate-950/90 blur-[2px]" />

            {/* Corner Bed Marker (Source of Data Leakage Bug!) */}
            <div className={`absolute top-3 right-4 px-1.5 py-0.5 rounded border text-[9px] font-mono transition-all ${
              viewMode === 'leakage'
                ? 'border-rose-500 bg-rose-950/80 text-rose-300 animate-pulse ring-2 ring-rose-500'
                : 'border-slate-800 text-slate-600'
            }`}>
              PORTABLE AP
            </div>

            {/* Grad-CAM Heatmap Layer (Pneumonic Consolidation in Lower Right Lobe) */}
            {viewMode === 'gradcam' && (
              <div className="absolute right-8 bottom-16 w-16 h-20 rounded-full bg-gradient-to-tr from-rose-500/80 via-amber-400/70 to-transparent blur-md animate-pulse" />
            )}

            {/* Data Leakage Attention Focus */}
            {viewMode === 'leakage' && (
              <div className="absolute top-2 right-2 w-24 h-12 rounded-lg bg-gradient-to-br from-rose-500/90 to-amber-500/80 blur-md animate-ping" />
            )}
          </div>

          {/* Overlay HUD Tags */}
          <div className="absolute bottom-3 left-3 text-[11px] font-mono text-slate-400 bg-slate-900/90 px-2.5 py-1 rounded border border-slate-800">
            {viewMode === 'raw' && 'MODE: UNPROCESSED DICOM TENSOR'}
            {viewMode === 'gradcam' && 'ATTENTION: RIGHT LOWER LOBE CONSOLIDATION (0.89)'}
            {viewMode === 'leakage' && 'CRITICAL: ATTENDING TO "PORTABLE" CORNER TEXT!'}
          </div>
        </div>

        {/* Engineering Narrative & Diagnostic Context */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-4 font-mono text-xs">
          <div className="space-y-3">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-slate-900 font-bold mb-1">
                <span>
                  {viewMode === 'leakage'
                    ? 'The "Hospital Bed Marker" Trap'
                    : 'Grad-CAM Feature Localization'}
                </span>
              </div>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                {viewMode === 'leakage'
                  ? 'Our 24-hour prototype initially boasted 96% accuracy. However, inspecting saliency revealed it was classifying cases by reading the "PORTABLE" machine label burned into scans of bedridden ICU patients, not lung tissue.'
                  : 'By projecting the gradients of the target class back into the final convolutional feature maps, clinicians can verify that the model is genuinely inspecting pulmonary infiltrates rather than scanning artifacts.'}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 space-y-1.5">
              <div className="text-slate-900 font-semibold">
                The Fix Implemented:
              </div>
              <div>• Automated lung-field bounding box segmentation.</div>
              <div>• Spatial corner masking & high-variance data augmentation.</div>
              <div>• Eliminated false positive shortcut learning.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
