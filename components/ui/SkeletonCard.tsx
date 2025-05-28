import React from 'react';

interface SkeletonCardProps {
  variant?: 'blog' | 'portfolio';
}

const SkeletonCard: React.FC<SkeletonCardProps> = ({ variant = 'blog' }) => {
  return (
    <div className="bg-white dark:bg-darkbg-card rounded-xl overflow-hidden shadow-md animate-pulse">
      {/* Image placeholder */}
      <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
        {variant === 'blog' && (
          <div className="absolute top-4 left-4 bg-gray-300 dark:bg-gray-600 w-20 h-6 rounded-full"></div>
        )}
        {variant === 'portfolio' && (
          <div className="absolute top-4 right-4 bg-gray-300 dark:bg-gray-600 w-16 h-5 rounded-full"></div>
        )}
      </div>
      
      <div className="p-6">
        {/* Date for blog / Icon with title for portfolio */}
        {variant === 'blog' && (
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-16 mb-3"></div>
        )}
        
        {variant === 'portfolio' && (
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-lg mr-3"></div>
            <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-32"></div>
          </div>
        )}
        
        {/* Title */}
        <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
        
        {/* Content */}
        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-5/6 mb-2"></div>
        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-4/5 mb-4"></div>
        
        {/* Tags/Technologies for portfolio */}
        {variant === 'portfolio' && (
          <div className="flex flex-wrap gap-2 mb-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-14"></div>
            ))}
          </div>
        )}
        
        {/* Action link */}
        <div className="flex justify-end">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard; 