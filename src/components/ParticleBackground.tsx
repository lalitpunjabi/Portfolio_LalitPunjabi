import { useEffect, useState } from 'react';

export default function ParticleBackground() {
  const [particles, setParticles] = useState<Array<{ id: number; left: string; delay: string; duration: string; size: string }>>([]);
  const [hexagons, setHexagons] = useState<Array<{ id: number; top: string; left: string; delay: string; scale: string }>>([]);
  const [dataFlows, setDataFlows] = useState<Array<{ id: number; left: string; delay: string }>>([]);

  useEffect(() => {
    // Generate 50 particles with random properties
    const particleArray = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${10 + Math.random() * 20}s`,
      size: `${2 + Math.random() * 4}px`,
    }));
    setParticles(particleArray);

    // Generate 8 hexagons for tech aesthetic
    const hexagonArray = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 10}s`,
      scale: `${0.5 + Math.random() * 0.5}`,
    }));
    setHexagons(hexagonArray);

    // Generate 5 data flow streams
    const dataArray = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 4}s`,
    }));
    setDataFlows(dataArray);
  }, []);

  return (
    <div className="particle-container">
      {/* Corner Decorations */}
      <div className="corner-decoration corner-tl"></div>
      <div className="corner-decoration corner-tr"></div>
      <div className="corner-decoration corner-bl"></div>
      <div className="corner-decoration corner-br"></div>
      
      {/* Circuit Lines */}
      <div className="circuit-line" style={{ top: '20%', left: '0', width: '30%', transformOrigin: 'left' }}></div>
      <div className="circuit-line" style={{ top: '40%', right: '0', left: 'auto', width: '25%', transformOrigin: 'right' }}></div>
      <div className="circuit-line" style={{ bottom: '30%', left: '0', width: '35%', transformOrigin: 'left' }}></div>
      <div className="circuit-line" style={{ bottom: '15%', right: '0', left: 'auto', width: '20%', transformOrigin: 'right' }}></div>
      
      {/* Gradient Orbs */}
      <div className="gradient-orb orb-1"></div>
      <div className="gradient-orb orb-2"></div>
      <div className="gradient-orb orb-3"></div>
      <div className="gradient-orb orb-4"></div>
      <div className="gradient-orb orb-5"></div>
      
      {/* Tech Hexagons */}
      {hexagons.map((hex) => (
        <div
          key={hex.id}
          className="tech-hexagon"
          style={{
            top: hex.top,
            left: hex.left,
            transform: `scale(${hex.scale})`,
            animationDelay: hex.delay,
          }}
        />
      ))}
      
      {/* Data Flow Streams */}
      {dataFlows.map((data) => (
        <div
          key={data.id}
          className="data-flow"
          style={{
            left: data.left,
            animationDelay: data.delay,
          }}
        />
      ))}
      
      {/* Scanning Line */}
      <div className="scan-line"></div>
      
      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: particle.left,
            bottom: '-10px',
            width: particle.size,
            height: particle.size,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}
    </div>
  );
}
