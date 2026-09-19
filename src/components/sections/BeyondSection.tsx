import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { WhatBrokeArchive } from '../human/WhatBrokeArchive';

export const BeyondSection: React.FC = () => {
  const [showFailures, setShowFailures] = useState<boolean>(false);

  return (
    <section id="beyond" className="relative z-10 min-h-screen px-5 py-28 md:px-10 md:py-36">
      <div className="cinematic-depth ml-auto max-w-3xl md:w-3/5">
        <p className="font-mono text-xs font-semibold uppercase tracking-widest text-[#f43f8e]">
          03 / Beyond the code
        </p>

        <h2 className="mt-3 font-display text-4xl font-black tracking-normal text-foreground md:text-6xl">
          Technical depth, operational calm.
        </h2>

        <div className="mt-12 space-y-12">
          
          {/* Education */}
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground">
              Education
            </h3>
            <div className="mt-4 space-y-2">
              <p className="text-lg font-semibold text-foreground">
                Manipal Institute of Technology, Bengaluru
              </p>
              <p className="text-muted-foreground text-sm">
                B.Tech, Computer Science Engineering · Expected 2029
              </p>
              <p className="pt-2 text-sm text-muted-foreground">
                National Public School · CBSE XII · 94% · 2025 · Interschool Hackathon 2nd Place
              </p>
              <p className="text-sm text-muted-foreground">
                New Horizon Public School · ICSE X · 98% · 2023
              </p>
            </div>
          </div>

          {/* Leadership & Community */}
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground">
              Leadership &amp; community
            </h3>
            <div className="mt-4 space-y-4">
              <div>
                <p className="font-semibold text-foreground">
                  Under Secretary General — Operations · XENORA MUN
                </p>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Led cross-functional planning and execution for a large academic conference, managing communication and logistics under tight deadlines.
                </p>
              </div>

              <div>
                <p className="font-semibold text-foreground">
                  Open Source Contributor · GSSoC 2026
                </p>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Selected for the AI Agents Track, contributing to open-source intelligent systems and workflow automation.
                </p>
              </div>

              <div>
                <p className="font-semibold text-foreground">
                  Organizing Committee — Operations · Tech Solstice
                </p>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  Managed logistics and on-ground operations for university technical festival.
                </p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground">
              Certifications
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground font-mono">
              <li className="flex items-center gap-2.5">
                <span className="text-[#f43f8e] font-bold">↗</span>
                <span>5-Day AI Agents Intensive — Google / Kaggle</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-[#f43f8e] font-bold">↗</span>
                <span>n8n No-Code AI Agent Builder — Simplilearn</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-[#f43f8e] font-bold">↗</span>
                <span>Introduction to Networking and Cloud Computing — Microsoft</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-[#f43f8e] font-bold">↗</span>
                <span>Introduction to Computers and Operating Systems and Security — Microsoft</span>
              </li>
            </ul>
          </div>

          {/* Engineering Post-Mortems Toggle */}
          <div className="pt-4 border-t border-foreground/15">
            <button
              onClick={() => setShowFailures(!showFailures)}
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#f43f8e] hover:underline cursor-pointer"
            >
              <span>{showFailures ? 'Hide Engineering Failures' : 'Read: Things I Broke While Building Systems'}</span>
              {showFailures ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>

            {showFailures && (
              <div className="mt-6 animate-fade-in">
                <WhatBrokeArchive />
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
