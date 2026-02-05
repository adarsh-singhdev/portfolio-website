import React from 'react';
import { useScrollProgress } from '../hooks/useHooks';

const ProgressBar = () => {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 h-1 w-full bg-[#D4845C] z-40 transition-transform duration-100"
      style={{ transform: `scaleX(${progress / 100})`, transformOrigin: 'left' }}
    />
  );
};

export default ProgressBar;
