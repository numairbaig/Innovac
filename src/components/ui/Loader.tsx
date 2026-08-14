import React from 'react';

interface LoaderProps {
  color?: string;
  className?: string;
  fullScreen?: boolean;
}

export const Loader: React.FC<LoaderProps> = ({ 
  color = '#2a9d8f', 
  className = '', 
  fullScreen = false 
}) => {
  const loaderElement = (
    <div 
      className={`innovac-custom-loader ${className}`} 
      style={{ '--loader-ball-color': color } as React.CSSProperties}
    >
      <div className="loader" />
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#080808]/90 backdrop-blur-md">
        {loaderElement}
      </div>
    );
  }

  return loaderElement;
};

export default Loader;
