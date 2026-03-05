"use client";

import { Parallax } from "react-scroll-parallax";

export default function PremiumNature() {

  const pollen = Array.from({ length: 25 });
  const butterflies = Array.from({ length: 4 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* PARALLAX LEAVES */}
      <Parallax speed={-10}>
        <div className="absolute top-10 left-10 text-4xl animate-leaf">🍃</div>
      </Parallax>

      <Parallax speed={8}>
        <div className="absolute bottom-10 right-10 text-4xl animate-leaf">🍃</div>
      </Parallax>


      {/* BUTTERFLIES */}
      {butterflies.map((_, i) => (
        <div
          key={i}
          className="butterfly"
          style={{
            left: `${20 + i * 15}%`,
            animationDelay: `${i * 3}s`
          }}
        >
          🦋
        </div>
      ))}


      {/* POLLEN PARTICLES */}
      {pollen.map((_, i) => (
        <span
          key={i}
          className="pollen"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${10 + Math.random() * 10}s`
          }}
        />
      ))}


      {/* WIND SWAY PLANTS */}
      <div className="absolute bottom-0 left-20 text-6xl sway">🌿</div>
      <div className="absolute bottom-0 right-20 text-6xl sway">🌿</div>

    </div>
  );
}