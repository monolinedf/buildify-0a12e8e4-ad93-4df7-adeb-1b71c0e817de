
import React from 'react';

const LogoPlaceholder: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="bg-[#219ebc] text-white font-bold p-2 rounded">
        SINU Logo
      </div>
    </div>
  );
};

export default LogoPlaceholder;