import React from 'react';

interface AtmosphereProps {
  showOrbits?: boolean;
}

export const AtmosphereBackground: React.FC<AtmosphereProps> = ({ showOrbits = true }) => {
  return (
    <div className="portfolio-atmosphere pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Top Rose/Magenta Glow Cloud */}
      <div className="atmosphere-glow atmosphere-glow-top" />

      {/* Bottom Lavender Soft Glow */}
      <div className="atmosphere-glow atmosphere-glow-bottom" />

      {/* Concentric Celestial Orbit Rings matching Lovable */}
      {showOrbits && (
        <>
          <div className="atmosphere-orbit atmosphere-orbit-one" />
          <div className="atmosphere-orbit atmosphere-orbit-two" />
          <div className="atmosphere-orbit atmosphere-orbit-three" />
        </>
      )}

      {/* Subtle Depth Vignette */}
      <div className="atmosphere-vignette" />
    </div>
  );
};
