"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import butterfly from "../public/animations/butterfly.json";

export default function PremiumNature() {

  const [butterflies, setButterflies] = useState([]);

  useEffect(() => {

    const spawnButterfly = () => {

      const newButterfly = {
        id: Math.random(),
        top: Math.random() * 90,
        left: -10,                       // start outside screen
        size: 35 + Math.random() * 25,   // size variation
        duration: 12 + Math.random() * 8
      };

      setButterflies(prev => [...prev, newButterfly]);

      // remove after animation
      setTimeout(() => {
        setButterflies(prev => prev.slice(1));
      }, newButterfly.duration * 1000);

    };

    const interval = setInterval(spawnButterfly, 3000);

    return () => clearInterval(interval);

  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">

      {butterflies.map((b) => (

        <motion.div
          key={b.id}
          style={{
            position: "absolute",
            top: `${b.top}%`,
            left: `${b.left}%`,
            width: `${b.size}px`
          }}

          animate={{
            x: [0, 300, 600, 900, 1200],
            y: [0, -80, 40, -60, 20],
            rotate: [0, 15, -10, 20, -15]
          }}

          transition={{
            duration: b.duration,
            ease: "easeInOut"
          }}
        >

          <Lottie
            animationData={butterfly}
            loop={true}
          />

        </motion.div>

      ))}

    </div>
  );
}