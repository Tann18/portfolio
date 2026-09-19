import React from 'react';
import { ArrowRight, Mail, Download } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section id="top" className="relative z-10 flex min-h-screen flex-col justify-end px-5 pb-14 pt-28 md:px-10 md:pb-20">
      
      {/* Main Hero Content */}
      <div className="cinematic-depth max-w-5xl">
        <p className="font-mono text-xs font-semibold uppercase tracking-widest text-[#f43f8e]">
          AI Developer · Computer Science Engineer
        </p>

        <h1 className="mt-4 max-w-4xl font-display text-6xl font-black leading-[0.9] tracking-normal text-foreground sm:text-7xl md:text-8xl lg:text-9xl">
          TANMAY<br />
          DAS<span className="text-[#f43f8e]">.</span>
        </h1>

        <div className="mt-7 flex max-w-xl flex-col gap-6 md:ml-1">
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            I build autonomous AI agents and reliable multi-agent workflows—designed to solve real problems, not just demo well.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a 
              href="#projects" 
              className="inline-flex items-center gap-2 rounded-xl bg-[#f43f8e] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#f43f8e]/20 transition-transform hover:-translate-y-0.5 active:scale-95"
            >
              <span>Explore my work</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 rounded-xl border border-foreground/20 bg-background/70 px-5 py-3 text-sm font-bold backdrop-blur-md transition-colors hover:border-[#f43f8e] hover:text-[#f43f8e]"
            >
              <Mail className="w-4 h-4" />
              <span>Contact info</span>
            </a>

            <a
              href="./Tanmay_Das_Resume.pdf"
              download="Tanmay_Das_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-foreground/20 bg-background/70 px-5 py-3 text-sm font-bold text-foreground backdrop-blur-md transition-colors hover:border-[#f43f8e] hover:text-[#f43f8e]"
            >
              <Download className="w-4 h-4 text-[#f43f8e]" />
              <span>Résumé (PDF)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
