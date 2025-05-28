import React from 'react';

interface PageLoaderProps {
  isLoading: boolean;
}

const PageLoader: React.FC<PageLoaderProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="h-1 w-full">
        <div 
          className="h-full bg-gradient-to-r from-primary via-secondary to-primary-dark animate-gradient-x"
          style={{
            width: '100%',
            animation: 'progress-bar 2s infinite ease-in-out',
          }}
        ></div>
      </div>
    </div>
  );
};

export default PageLoader; 