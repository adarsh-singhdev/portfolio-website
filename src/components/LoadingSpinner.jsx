import React from 'react';

const LoadingSpinner = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-[#E8E3D5] flex items-center justify-center z-[9999]">
      <div className="relative w-16 h-16">
        <svg className="animate-spinner w-full h-full" viewBox="0 0 50 50">
          <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke="#D4845C"
            strokeWidth="3"
            strokeDasharray="31.4 78.5"
            opacity="0.7"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-[#F0EBE0] border-t-[#D4845C] rounded-full animate-spinner" />
        </div>
      </div>
      <p className="absolute bottom-20 text-[#2C2416] font-medium">Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
