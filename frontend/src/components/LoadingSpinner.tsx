import { memo } from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const LoadingSpinner = memo(({ size = 'md', className = '' }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`flex items-center justify-center min-h-[200px] ${className}`}>
      <div 
        className={`${sizeClasses[size]} border-2 border-white/20 border-t-white rounded-full animate-spin`}
        style={{
          willChange: 'transform',
          transform: 'translateZ(0)'
        }}
      />
    </div>
  );
});

LoadingSpinner.displayName = 'LoadingSpinner';

export default LoadingSpinner;
