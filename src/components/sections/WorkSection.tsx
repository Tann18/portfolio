import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { InterloomDeepDive } from '../experiences/InterloomDeepDive';

export const WorkSection: React.FC = () => {
  const [showDeepDive, setShowDeepDive] = useState<boolean>(false);

  const toolkit = [
    'Python Programming',
    'LLM Agents',
    'Multi-agent Workflows',
    'API Integration (REST/JSON)',
    'System Design Fundamentals',
    'Data Handling & Analysis',
    'Technical Communication'
  ];

  return (
    <section id="work" className="relative z-10 min-h-screen px-5 py-28 md:px-10 md:py-36">
      <div className="cinematic-depth ml-auto max-w-3xl md:w-3/5">
        <p className="font-mono text-xs font-semibold uppercase tracking-widest text-[#f43f8e]">
          01 / Experience
        </p>

        <h2 className="mt-3 font-display text-4xl font-black tracking-normal text-foreground md:text-6xl">
          Building AI that works in the real world.
        </h2>

        {/* Featured Experience Card with Primary Accent Bar */}
        <article className="mt-14 border-l-2 border-[#f43f8e] pl-6 md:pl-9">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h3 className="font-display text-2xl font-bold text-foreground md:text-3xl">
              AI Developer · Interloom
            </h3>
            <span className="font-mono text-xs font-semibold text-[#f43f8e]">
              MAY 2026 — PRESENT
            </span>
          </div>

          <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground text-sm md:text-base">
            Contributing to ongoing AI development initiatives, with a focus on semantic search pipelines, dense vector embeddings (bge-small, MiniLM), ATS skill gap intelligence, sibling-technology guardrails against semantic drift, and production-ready LLM workflows.
          </p>

          <button
            onClick={() => setShowDeepDive(!showDeepDive)}
            className="mt-4 inline-flex items-center gap-2 text-xs font-mono font-bold text-[#f43f8e] hover:underline cursor-pointer"
          >
            <span>{showDeepDive ? 'Hide Architecture Deep-Dive' : 'Explore Interloom Semantic Embeddings & Skill Gap Architecture'}</span>
            {showDeepDive ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </article>

        {/* Expanded Deep Dive */}
        {showDeepDive && (
          <div className="mt-8 animate-fade-in">
            <InterloomDeepDive />
          </div>
        )}

        {/* Core Toolkit */}
        <div className="mt-16">
          <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-foreground">
            Core toolkit
          </h3>
          <div className="mt-5 flex flex-wrap gap-2">
            {toolkit.map((skill, idx) => (
              <span 
                key={idx} 
                className="rounded-full border border-foreground/15 bg-background/70 px-4 py-2 text-sm font-semibold text-foreground backdrop-blur-md transition-colors hover:border-[#f43f8e] hover:text-[#f43f8e]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
