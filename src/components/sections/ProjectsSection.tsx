import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Play, Sliders, ChevronDown, ChevronUp } from 'lucide-react';

import { SupportAgentExperience } from '../experiences/SupportAgentExperience';
import { OrcaMarineExperience } from '../experiences/OrcaMarineExperience';
import { HoneypotExperience } from '../experiences/HoneypotExperience';
import { GradCamXrayExperience } from '../experiences/GradCamXrayExperience';

interface ProjectRow {
  index: string;
  id: string;
  title: string;
  stack: string;
  description: string;
  demoUrl?: string;
  hasInteractive: boolean;
}

export const ProjectsSection: React.FC = () => {
  const { setActiveVideoId } = usePortfolio();
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const projects: ProjectRow[] = [
    {
      index: '01',
      id: 'support-agent',
      title: 'Autonomous AI Support Agent',
      stack: 'Python · LLMs · n8n · REST APIs',
      description: 'An autonomous support system with intelligent routing, structured JSON outputs, multi-scenario workflows, and confidence-based human escalation.',
      demoUrl: 'https://youtu.be/y2YVWYrxIS8',
      hasInteractive: true
    },
    {
      index: '02',
      id: 'sagarmitra',
      title: 'SagarMitra — ORCA',
      stack: 'Python · Multi-agent Systems · Geospatial',
      description: 'Maritime intelligence platform with collaborative agent reasoning, AI-driven vessel route optimization, and live fishing-zone analytics.',
      hasInteractive: true
    },
    {
      index: '03',
      id: 'honeypot',
      title: 'Cybersecurity Honeypot',
      stack: 'Python · Threat Telemetry · Anomaly Detection',
      description: 'Intelligent deception mechanisms designed to detect, lure, and analyze malicious adversary activity in real-time.',
      hasInteractive: true
    },
    {
      index: '04',
      id: 'pneumonia',
      title: 'Pneumonia Detection & Explainability',
      stack: 'Computer Vision · Medical Imaging · Deep Learning',
      description: 'Rapidly prototyped AI model for pneumonia classification from medical radiographs with Grad-CAM feature localization.',
      hasInteractive: true
    }
  ];

  const toggleExpand = (id: string) => {
    setExpandedProject(prev => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="relative z-10 min-h-screen px-5 py-28 md:px-10 md:py-36">
      <div className="cinematic-depth max-w-6xl">
        <p className="font-mono text-xs font-semibold uppercase tracking-widest text-[#f43f8e]">
          02 / Selected projects
        </p>

        <h2 className="mt-3 max-w-3xl font-display text-4xl font-black tracking-normal text-foreground md:text-6xl">
          Systems built to think, route, and respond.
        </h2>

        {/* Tabular Editorial List */}
        <div className="mt-14 divide-y divide-foreground/15 border-y border-foreground/15">
          {projects.map((p) => {
            const isExpanded = expandedProject === p.id;

            return (
              <div key={p.id} className="transition-colors hover:bg-black/[0.015] dark:hover:bg-white/[0.015]">
                <article className="grid gap-4 py-8 md:grid-cols-[4rem_1fr_1.1fr_auto] md:items-center md:gap-8">
                  
                  {/* Numeric Index */}
                  <span className="font-mono text-xs font-bold text-[#f43f8e]">
                    {p.index}
                  </span>

                  {/* Title & Stack */}
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground md:text-2xl">
                      {p.title}
                    </h3>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                      {p.stack}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                    {p.description}
                  </p>

                  {/* Actions: Demo Video / Expand Sandbox */}
                  <div className="flex flex-wrap items-center gap-3">
                    {p.demoUrl && (
                      <button
                        onClick={() => setActiveVideoId('y2YVWYrxIS8')}
                        className="inline-flex items-center gap-1.5 rounded-md border border-[#f43f8e]/40 bg-[#f43f8e]/10 px-3 py-1.5 text-xs font-bold font-mono text-[#f43f8e] hover:bg-[#f43f8e] hover:text-white transition-colors cursor-pointer"
                      >
                        <Play className="w-3 h-3 fill-current" />
                        <span>Demo (42s)</span>
                      </button>
                    )}

                    {p.hasInteractive && (
                      <button
                        onClick={() => toggleExpand(p.id)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold font-mono text-foreground hover:text-[#f43f8e] transition-colors cursor-pointer"
                      >
                        <Sliders className="w-3.5 h-3.5 text-[#f43f8e]" />
                        <span>{isExpanded ? 'Close sandbox' : 'Interact'}</span>
                        {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                      </button>
                    )}
                  </div>
                </article>

                {/* Expandable Project Sandbox Mini-Experience */}
                {isExpanded && (
                  <div className="pb-8 pt-2 animate-fade-in">
                    {p.id === 'support-agent' && <SupportAgentExperience />}
                    {p.id === 'sagarmitra' && <OrcaMarineExperience />}
                    {p.id === 'honeypot' && <HoneypotExperience />}
                    {p.id === 'pneumonia' && <GradCamXrayExperience />}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
