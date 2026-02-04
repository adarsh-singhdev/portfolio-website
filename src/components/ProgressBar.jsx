import React from 'react';
import { useScrollProgress } from '../hooks/useHooks';

const ProgressBar = () => {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-[#D4845C] z-40 transition-all duration-300"
      style={{ width: `${progress}%` }}
    />
  );
};

export default ProgressBar;
