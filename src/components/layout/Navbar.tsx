import React, { useState, useEffect } from 'react';
import { Settings2, FileText } from 'lucide-react';

interface NavbarProps {
  onOpenSettings: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSettings }) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Scroll Progress Bar */}
      <div 
        className="fixed left-0 top-0 z-50 h-1 bg-[#f43f8e] transition-[width] duration-100 ease-out" 
        style={{ width: `${scrollProgress}%` }} 
      />

      {/* Main Fixed Navbar */}
      <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between px-5 py-5 md:px-10 bg-[#fcfafb]/75 dark:bg-[#0d0e14]/75 backdrop-blur-md transition-colors">
        
        {/* Left: Brand TD. */}
        <a 
          href="#top" 
          className="font-display text-xl font-black uppercase tracking-tight text-foreground transition-transform hover:scale-105" 
          aria-label="Tanmay Das, home"
        >
          TD<span className="text-[#f43f8e]">.</span>
        </a>

        {/* Right: Navigation & Controls */}
        <nav className="flex items-center gap-4 md:gap-7 font-mono text-xs font-semibold uppercase tracking-wider" aria-label="Portfolio navigation">
          <a className="text-foreground/80 hover:text-[#f43f8e] transition-colors" href="#work">Work</a>
          <a className="text-foreground/80 hover:text-[#f43f8e] transition-colors" href="#projects">Projects</a>
          <a className="text-foreground/80 hover:text-[#f43f8e] transition-colors hidden sm:inline-block" href="#beyond">Beyond</a>
          <a className="text-foreground/80 hover:text-[#f43f8e] transition-colors" href="#contact">Contact</a>

          {/* Direct Résumé PDF download button */}
          <a
            href="./Tanmay_Das_Resume.pdf"
            download="Tanmay_Das_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-foreground/15 bg-background/80 text-foreground hover:border-[#f43f8e] hover:text-[#f43f8e] text-[11px] font-bold transition-all shadow-sm"
            title="Download Tanmay Das Résumé (PDF)"
          >
            <FileText className="w-3.5 h-3.5 text-[#f43f8e]" />
            <span>Résumé</span>
          </a>

          {/* Settings Preferences Button */}
          <button 
            onClick={onOpenSettings}
            className="inline-flex items-center justify-center rounded-lg border border-foreground/15 bg-background/80 backdrop-blur-md p-2 text-foreground shadow-sm hover:border-[#f43f8e] hover:text-[#f43f8e] transition-colors cursor-pointer"
            aria-label="Experience settings" 
            type="button"
          >
            <Settings2 className="w-4 h-4" />
          </button>
        </nav>
      </header>
    </>
  );
};
