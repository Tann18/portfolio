import React, { useState } from 'react';
import { INTERLOOM_EXP } from '../../data/portfolioData';
import { Cpu, ShieldCheck, Binary } from 'lucide-react';

interface ScenarioTrace {
  title: string;
  badge: string;
  requirement: string;
  candidateEvidence: string;
  embeddingModel: string;
  rawSimilarity: number;
  guardrailApplied: string;
  status: 'matched' | 'blocked' | 'alternative_grouped';
  calibratedScore: string;
  actionableSuggestion?: string;
  explanation: string;
}

export const InterloomDeepDive: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const traces: ScenarioTrace[] = [
    {
      title: 'Semantic Vector Match (Sentence-Level)',
      badge: 'Embedding Calibration',
      requirement: 'Unit Testing, TDD & Automated Verification',
      candidateEvidence: 'Engineered automated regression test suites using pytest and python-mock across microservice endpoints.',
      embeddingModel: 'BAAI/bge-small-en-v1.5 (Dense 384d)',
      rawSimilarity: 0.74,
      guardrailApplied: 'Calibrated piecewise scaling [0.20, 0.60] -> [0, 100]',
      status: 'matched',
      calibratedScore: '92% (Fully Present)',
      explanation: 'Dense embeddings accurately identified semantic equivalence between "TDD & Automated Verification" and "automated regression test suites using pytest", overcoming keyword mismatch.'
    },
    {
      title: 'Sibling Technology Guard (Coke vs. Pepsi)',
      badge: 'Co-hyponym Protection',
      requirement: 'Kubernetes Cluster Orchestration & Helm',
      candidateEvidence: 'Containerized local backend microservices and automated image builds using Docker and Docker Compose.',
      embeddingModel: 'BAAI/bge-small-en-v1.5 (Dense 384d)',
      rawSimilarity: 0.69,
      guardrailApplied: 'Sibling Filter: Detected related competitor tool ("Docker") in "clouds/containers" class without target skill ("Kubernetes"). Clamped similarity to 0.30.',
      status: 'blocked',
      calibratedScore: 'Absent / Missing Required Skill',
      actionableSuggestion: 'Deploy containerized services onto managed EKS/GKE clusters and author declarative Helm charts for deployment orchestration.',
      explanation: 'Dense vector embeddings mistakenly group related tools (Docker and Kubernetes) into close vector proximity. The Sibling Technology Guard blocked the false-positive match, preventing candidates who only know Docker from scoring on Kubernetes requirements.'
    },
    {
      title: 'Alternative Criteria Grouping ("OR" Conjunction)',
      badge: 'Boolean Aggregation',
      requirement: 'Relational Database Design (PostgreSQL OR MySQL)',
      candidateEvidence: 'Designed optimized relational schemas, wrote analytical window functions, and indexed foreign keys in PostgreSQL.',
      embeddingModel: 'BAAI/bge-small-en-v1.5 + Boundary Regex',
      rawSimilarity: 0.88,
      guardrailApplied: 'Alternative Grouping: Matched PostgreSQL branch 1 of 2. Zero penalty applied.',
      status: 'alternative_grouped',
      calibratedScore: '100% (Requirement Satisfied)',
      explanation: 'Standard ATS tools penalize candidates if they lack one of the mentioned alternatives. Our pipeline scans for logical "OR" conjunctions, grouping alternatives so possessing either tool satisfies the full criteria without compounding penalties.'
    }
  ];

  const current = traces[activeTab];

  return (
    <div className="group relative flex flex-col justify-between rounded-3xl border-2 border-[#f43f8e]/35 bg-white p-6 sm:p-8 shadow-sm hover:border-[#f43f8e] transition-all">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <p className="text-xs font-mono font-medium text-slate-500">
            Featured Experience · May 2026 – Present
          </p>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mt-1">
            AI Developer @ Interloom
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-1.5 max-w-2xl leading-relaxed">
            {INTERLOOM_EXP.coreThesis}
          </p>
        </div>

        <div className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-right font-mono text-xs">
          <div className="text-[#f43f8e] font-bold">Remote</div>
          <div className="text-slate-500 text-[11px]">Semantic ATS & Vector Pipelines</div>
        </div>
      </div>

      {/* 3 Architecture Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        {INTERLOOM_EXP.architectureLayers.map((layer, idx) => (
          <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#f43f8e]/10 border border-[#f43f8e]/20 flex items-center justify-center text-[#f43f8e]">
              {idx === 0 && <Cpu className="w-4 h-4" />}
              {idx === 1 && <ShieldCheck className="w-4 h-4" />}
              {idx === 2 && <Binary className="w-4 h-4" />}
            </div>
            <h4 className="text-sm font-bold text-slate-900 font-mono">{layer.name}</h4>
            <p className="text-xs text-slate-600 leading-relaxed">{layer.description}</p>
          </div>
        ))}
      </div>

      {/* Interactive Match & Guardrail Simulator */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 font-mono text-xs">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3 mb-4">
          <div className="text-slate-900">
            <span className="font-bold uppercase tracking-wider text-[11px]">SEMANTIC EMBEDDING & GUARDRAIL SIMULATION</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {traces.map((trace, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs transition-all cursor-pointer ${
                  activeTab === idx
                    ? 'bg-[#f43f8e] text-white font-semibold shadow-md shadow-[#f43f8e]/20'
                    : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-300'
                }`}
              >
                Case {idx + 1}: {trace.badge}
              </button>
            ))}
          </div>
        </div>

        {/* Trace Flow Display */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[11px]">
          {/* Target Requirement */}
          <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex flex-col justify-between shadow-xs">
            <div>
              <div className="text-slate-500 mb-1 font-semibold uppercase tracking-wider text-[10px]">
                1. Job Description Requirement
              </div>
              <div className="text-slate-900 font-bold text-xs">{current.requirement}</div>
            </div>
            <div className="mt-3 pt-2 border-t border-slate-100 text-[10px] text-slate-500">
              Model: <span className="text-slate-700 font-semibold">{current.embeddingModel}</span>
            </div>
          </div>

          {/* Candidate Evidence */}
          <div className="p-3.5 rounded-xl bg-white border border-slate-200 flex flex-col justify-between shadow-xs">
            <div>
              <div className="text-slate-500 mb-1 font-semibold uppercase tracking-wider text-[10px]">
                2. Resume Evidence Extracted
              </div>
              <div className="text-slate-700 leading-relaxed italic">"{current.candidateEvidence}"</div>
            </div>
            <div className="mt-3 pt-2 border-t border-slate-100 text-[10px] text-slate-500 flex justify-between">
              <span>Raw Cosine:</span>
              <span className="text-slate-900 font-bold">{current.rawSimilarity.toFixed(2)}</span>
            </div>
          </div>

          {/* Pipeline Decision & Guardrail */}
          <div className={`p-3.5 rounded-xl border flex flex-col justify-between shadow-xs ${
            current.status === 'blocked'
              ? 'bg-rose-50 border-rose-200 text-rose-950'
              : 'bg-emerald-50 border-emerald-200 text-emerald-950'
          }`}>
            <div>
              <div className="font-semibold mb-1 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-wider text-slate-500">3. Guardrail Decision</span>
                {current.status === 'blocked' ? (
                  <span className="text-rose-600 font-bold text-[10px]">
                    Blocked False Positive
                  </span>
                ) : (
                  <span className="text-emerald-600 font-bold text-[10px]">
                    Validated
                  </span>
                )}
              </div>
              <div className="font-bold text-xs text-slate-900 mt-1">
                {current.calibratedScore}
              </div>
              <div className="text-[10px] text-slate-700 mt-2 leading-relaxed">
                {current.guardrailApplied}
              </div>
            </div>

            {current.actionableSuggestion && (
              <div className="mt-3 pt-2 border-t border-rose-200 text-[10px] text-rose-800">
                <span className="font-bold">Suggested Action: </span>
                {current.actionableSuggestion}
              </div>
            )}
          </div>
        </div>

        {/* Diagnostic Narrative */}
        <div className="mt-4 p-3.5 rounded-xl bg-white border border-slate-200 text-[11px] text-slate-600 leading-relaxed shadow-xs">
          <span><strong className="text-slate-900">Engineering Rationale: </strong>{current.explanation}</span>
        </div>
      </div>
    </div>
  );
};
