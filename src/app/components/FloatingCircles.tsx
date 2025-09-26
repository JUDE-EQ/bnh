'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const FloatingCircles = () => {
  const [circles, setCircles] = useState<Array<{
    id: number;
    size: number;
    x: number;
    y: number;
    opacity: number;
    duration: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    // Generate random circles after component mounts (client-side only)
    const randomCircles = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      size: 20 + Math.random() * 180,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: 0.05 + Math.random() * 0.15,
      duration: 20 + Math.random() * 40,
      delay: Math.random() * -40
    }));
    setCircles(randomCircles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      {circles.map(circle => (
        <motion.div
          key={circle.id}
          className="absolute rounded-full"
          style={{
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            left: `${circle.x}%`,
            top: `${circle.y}%`,
            backgroundColor: '#ff6e6e',
            opacity: circle.opacity,
          }}
          animate={{
            x: ['0%', '5%', '-3%', '0%'],
            y: ['0%', '7%', '-4%', '0%'],
            rotate: [0, 120, 240, 360],
          }}
          transition={{
            duration: circle.duration,
            delay: circle.delay,
            ease: 'easeInOut',
            repeat: Infinity,
            times: [0, 0.33, 0.66, 1],
          }}
        />
      ))}
    </div>
  );
}
