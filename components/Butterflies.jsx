"use client";

export default function Butterflies() {

  const butterflies = Array.from({ length: 8 });

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {butterflies.map((_, i) => (
        <span
          key={i}
          className="absolute text-xl animate-butterfly"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 2}s`,
            animationDuration: `${10 + Math.random() * 10}s`
          }}
        >
          🦋
        </span>
      ))}

    </div>
  );
}