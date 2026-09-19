import React from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { X, ExternalLink } from 'lucide-react';

export const VideoModal: React.FC = () => {
  const { activeVideoId, setActiveVideoId } = usePortfolio();

  if (!activeVideoId) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-slate-800 bg-slate-900/60 font-mono text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
            <span className="font-bold">AUTONOMOUS AI SUPPORT AGENT // LIVE DEMO</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`https://youtu.be/${activeVideoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white flex items-center gap-1"
            >
              <span>YouTube</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <button
              onClick={() => setActiveVideoId(null)}
              className="p-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Responsive 16:9 Video Embed */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${activeVideoId}?autoplay=1&rel=0`}
            title="Project Demo Video"
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Footer info */}
        <div className="p-4 bg-slate-900/40 text-slate-400 text-xs flex flex-wrap items-center justify-between gap-2 border-t border-slate-800/80">
          <span>Demonstrating multi-scenario workflow routing, JSON schema output, and human escalation triage.</span>
          <button
            onClick={() => setActiveVideoId(null)}
            className="px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
