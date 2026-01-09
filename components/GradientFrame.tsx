
import React from 'react';

interface GradientFrameProps {
  children: React.ReactNode;
  className?: string;
  padding?: string;
  rounded?: string;
}

export const GradientFrame: React.FC<GradientFrameProps> = ({ 
  children, 
  className = "", 
  padding = "p-1", 
  rounded = "rounded-3xl"
}) => {
  return (
    // Darkened Glass Frame
    <div className={`relative bg-white/5 backdrop-blur-xl border border-white/10 ${padding} ${rounded} shadow-2xl transition-all duration-300 ${className}`}>
      {/* Inner container for nested look */}
      <div className={`bg-black/20 h-full w-full ${rounded} overflow-hidden relative z-10 border border-white/5`}>
        {children}
      </div>
    </div>
  );
};
