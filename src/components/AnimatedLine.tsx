// components/AnimatedLine.tsx
"use client";

import React, { useEffect, useRef } from 'react';
import styles from './styles.module.css';

const AnimatedLine: React.FC = () => {
  const gradientRef = useRef<SVGLinearGradientElement>(null);

  useEffect(() => {
    const stops = gradientRef.current?.children as HTMLCollectionOf<SVGStopElement>;
    
    const animateGradient = () => {
      if (stops) {
        stops[0].setAttribute('stop-color', 'cyan');
        stops[1].setAttribute('stop-color', 'magenta');

        setTimeout(() => {
          stops[0].setAttribute('stop-color', 'magenta');
          stops[1].setAttribute('stop-color', 'cyan');
        }, 5000);
      }
    };

    const interval = setInterval(animateGradient, 2000);
    animateGradient(); // Start the animation immediately

    return () => clearInterval(interval);
  }, []);

  return (
    <svg className={styles.animatedLine} width="100%" height="3px">
      <defs>
        <linearGradient id="gradient" ref={gradientRef} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="cyan" />
          <stop offset="100%" stopColor="magenta" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="100%" height="3px" fill="url(#gradient)" />
    </svg>
  );
};

export default AnimatedLine;
