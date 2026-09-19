import React, { useState } from 'react';
import { PortfolioProvider } from './context/PortfolioContext';
import { AtmosphereBackground } from './components/layout/AtmosphereBackground';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { WorkSection } from './components/sections/WorkSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { BeyondSection } from './components/sections/BeyondSection';
import { ContactSection } from './components/sections/ContactSection';
import { VideoModal } from './components/ui/VideoModal';
import { SettingsModal } from './components/modals/SettingsModal';

const PortfolioApp: React.FC = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);

  return (
    <div className="relative min-h-screen selection:bg-[#f43f8e] selection:text-white transition-colors duration-300">
      
      {/* Background Atmosphere: Glowing Pink/Lavender Clouds & Concentric Orbits */}
      <AtmosphereBackground showOrbits={true} />

      {/* Top Fixed Navbar */}
      <Navbar
        onOpenSettings={() => setIsSettingsOpen(true)}
      />

      {/* Main Single Page Experience */}
      <main className="relative z-10 flex flex-col">
        {/* Hero */}
        <HeroSection />

        {/* 01 / Experience */}
        <WorkSection />

        {/* 02 / Selected projects */}
        <ProjectsSection />

        {/* 03 / Beyond the code */}
        <BeyondSection />

        {/* 04 / Contact */}
        <ContactSection />
      </main>

      {/* YouTube Demo Video Modal */}
      <VideoModal />

      {/* Experience Preferences Modal */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />

    </div>
  );
};

export default function App() {
  return (
    <PortfolioProvider>
      <PortfolioApp />
    </PortfolioProvider>
  );
}
