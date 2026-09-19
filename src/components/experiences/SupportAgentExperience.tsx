import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Play, Video } from 'lucide-react';

interface Scenario {
  id: string;
  query: string;
  category: string;
  baseConfidence: number;
  expectedOutput: string;
}

const SAMPLE_SCENARIOS: Scenario[] = [
  {
    id: '1',
    query: 'User requested standard account password reset link via verified email.',
    category: 'Routine Auth',
    baseConfidence: 0.94,
    expectedOutput: 'Trigger auth.reset_password() via verified webhook.'
  },
  {
    id: '2',
    query: 'Customer demanding $4,200 SLA breach refund citing customized enterprise clause 9.4.',
    category: 'High-Value Exception',
    baseConfidence: 0.62,
    expectedOutput: 'Escalate to Tier-3 Support Lead with synthesized context trace.'
  },
  {
    id: '3',
    query: 'API token rate-limit exceeded during scheduled batch ETL sync.',
    category: 'Infrastructure Triage',
    baseConfidence: 0.88,
    expectedOutput: 'Apply temporary burst allowance and dispatch telemetry alert.'
  }
];

export const SupportAgentExperience: React.FC = () => {
  const { setActiveVideoId, unlockSecret } = usePortfolio();
  const [selectedScenario, setSelectedScenario] = useState<Scenario>(SAMPLE_SCENARIOS[1]);
  const [threshold, setThreshold] = useState<number>(0.85);

  const isEscalated = selectedScenario.baseConfidence < threshold;

  const handleRun = (sc: Scenario) => {
    setSelectedScenario(sc);
    unlockSecret('support_agent_triage');
  };

  return (
    <div className="group relative flex flex-col justify-between rounded-3xl border-2 border-[#f43f8e]/35 bg-white p-6 sm:p-8 shadow-sm hover:border-[#f43f8e] transition-all">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <p className="text-xs font-mono font-medium text-slate-500">
            Interactive Agent Pipeline · Python · n8n · LLMs
          </p>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mt-1">Autonomous AI Support Agent</h3>
          <p className="text-slate-600 text-sm mt-1 max-w-xl leading-relaxed">
            Calculates mathematical confidence and routes between automated tool execution and human-in-the-loop escalation.
          </p>
        </div>

        {/* Video Modal Trigger Button */}
        <button
          onClick={() => setActiveVideoId('y2YVWYrxIS8')}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#f43f8e] hover:brightness-110 text-white text-xs font-bold shadow-md shadow-[#f43f8e]/25 transition-all active:scale-95 cursor-pointer"
        >
          <Play className="w-3.5 h-3.5 fill-current" />
          <span>Watch 42s Demo</span>
          <Video className="w-3.5 h-3.5 opacity-80 ml-1" />
        </button>
      </div>

      {/* Interactive Testing Sandbox */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-4">
        
        {/* Left: Scenarios and Threshold Slider */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          <div>
            <label className="text-xs font-mono font-semibold text-slate-700 mb-2 block uppercase tracking-wider text-[11px]">
              1. Select Test Scenario:
            </label>
            <div className="flex flex-col gap-2.5">
              {SAMPLE_SCENARIOS.map((sc) => (
                <button
                  key={sc.id}
                  onClick={() => handleRun(sc)}
                  className={`text-left p-3.5 rounded-2xl border text-xs transition-all cursor-pointer ${
                    selectedScenario.id === sc.id
                      ? 'bg-white border-2 border-[#f43f8e] text-slate-900 shadow-md shadow-[#f43f8e]/10'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-center justify-between font-mono text-[11px] mb-1">
                    <span className="text-[#f43f8e] font-bold">{sc.category}</span>
                    <span className="text-slate-500 font-semibold">Confidence: {sc.baseConfidence.toFixed(2)}</span>
                  </div>
                  <p className="text-slate-700 text-[11px] leading-relaxed line-clamp-2">{sc.query}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Threshold Control */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="flex items-center justify-between text-xs font-mono mb-2">
              <span className="text-slate-700 font-semibold">
                Escalation Threshold:
              </span>
              <span className="text-[#f43f8e] font-bold">{threshold.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0.50"
              max="0.95"
              step="0.05"
              value={threshold}
              onChange={(e) => setThreshold(parseFloat(e.target.value))}
              className="w-full accent-[#f43f8e] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
              <span>0.50 (Permissive)</span>
              <span className="text-slate-800 font-semibold">0.85 (Production Safe)</span>
              <span>0.95 (Strict)</span>
            </div>
          </div>
        </div>

        {/* Right: Real-time Decision Output */}
        <div className="lg:col-span-6 flex flex-col justify-between bg-slate-50 border border-slate-200 rounded-2xl p-5 font-mono text-xs">
          <div>
            <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-3">
              <span className="text-slate-500 text-[11px] uppercase tracking-wider font-semibold">AGENT DECISION LOG</span>
              <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-slate-700 font-semibold">
                Deterministic
              </span>
            </div>

            <div className="space-y-2.5 text-[11px]">
              <div className="flex justify-between">
                <span className="text-slate-500">Query Complexity:</span>
                <span className="text-slate-900 font-semibold">
                  {selectedScenario.baseConfidence < 0.7 ? 'HIGH (Ambiguous Policy)' : 'LOW (Structured Intent)'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Calculated Confidence:</span>
                <span className={`font-bold ${isEscalated ? 'text-amber-600' : 'text-emerald-600'}`}>
                  {selectedScenario.baseConfidence.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Active Threshold:</span>
                <span className="text-slate-900 font-semibold">{threshold.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Condition:</span>
                <span className="text-slate-900 font-semibold">
                  {selectedScenario.baseConfidence.toFixed(2)} {isEscalated ? '<' : '≥'} {threshold.toFixed(2)}
                </span>
              </div>
            </div>

            {/* Verdict Box */}
            <div className={`mt-4 p-3.5 rounded-xl border ${
              isEscalated 
                ? 'bg-amber-50 border-amber-200 text-amber-950' 
                : 'bg-emerald-50 border-emerald-200 text-emerald-950'
            }`}>
              <div className="text-[11px] leading-snug">
                <div className="font-bold">
                  {isEscalated ? 'ACTION: ESCALATE TO HUMAN QUEUE' : 'ACTION: EXECUTE AUTOMATED MUTATION'}
                </div>
                <div className="text-slate-700 mt-1">{selectedScenario.expectedOutput}</div>
              </div>
            </div>
          </div>

          {/* Key Engineering Note */}
          <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-600 leading-relaxed">
            <span className="text-[#f43f8e] font-semibold">Why this matters:</span> Eliminates silent failures. When confidence drops below safety threshold, the agent passes structured decision traces to human operators with zero context loss.
          </div>
        </div>

      </div>
    </div>
  );
};
