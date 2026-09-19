import React, { createContext, useContext, useState } from 'react';
import type { PortfolioMode } from '../types/portfolio';
import { soundFX } from '../sound/soundFx';


interface PortfolioContextType {
  mode: PortfolioMode;
  setMode: (mode: PortfolioMode) => void;
  soundEnabled: boolean;
  toggleSound: () => void;
  systemStability: number;
  setSystemStability: React.Dispatch<React.SetStateAction<number>>;
  isHumanDetached: boolean;
  setIsHumanDetached: (detached: boolean) => void;
  discoveredSecrets: string[];
  unlockSecret: (secretId: string) => void;
  activeVideoId: string | null;
  setActiveVideoId: (id: string | null) => void;
  activeProjectTab: string;
  setActiveProjectTab: (tab: string) => void;
}

const TOTAL_SECRETS = 5;

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setModeState] = useState<PortfolioMode>('explore');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);
  const [systemStability, setSystemStability] = useState<number>(98);
  const [isHumanDetached, setIsHumanDetachedState] = useState<boolean>(false);
  const [discoveredSecrets, setDiscoveredSecrets] = useState<string[]>([]);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const [activeProjectTab, setActiveProjectTab] = useState<string>('all');

  const setMode = (newMode: PortfolioMode) => {
    soundFX.playClick();
    setModeState(newMode);
  };

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    soundFX.setMuted(!next);
  };

  const setIsHumanDetached = (detached: boolean) => {
    setIsHumanDetachedState(detached);
    if (detached) {
      setSystemStability(28);
      soundFX.playWarning();
      unlockSecret('human_escalator_severed');
    } else {
      setSystemStability(98);
      soundFX.playSuccess();
    }
  };

  const unlockSecret = (secretId: string) => {
    setDiscoveredSecrets(prev => {
      if (!prev.includes(secretId)) {
        soundFX.playSuccess();
        return [...prev, secretId];
      }
      return prev;
    });
  };

  return (
    <PortfolioContext.Provider
      value={{
        mode,
        setMode,
        soundEnabled,
        toggleSound,
        systemStability,
        setSystemStability,
        isHumanDetached,
        setIsHumanDetached,
        discoveredSecrets,
        unlockSecret,
        activeVideoId,
        setActiveVideoId,
        activeProjectTab,
        setActiveProjectTab,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};

export { TOTAL_SECRETS };
