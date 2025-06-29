import { useState, useEffect, memo } from 'react';
import { useLazyLoad } from '@/hooks/use-performance';

interface OptimizedImageProps {
  src: string;
  alt: string;
  fallback?: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  width?: number;
  height?: number;
}

const OptimizedImage = memo(({
  src,
  alt,
  fallback,
  className = '',
  loading = 'lazy',
  sizes,
  width,
  height
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { imageSrc, isLoaded: lazyLoaded } = useLazyLoad(src, fallback);

  useEffect(() => {
    if (lazyLoaded) {
      setIsLoaded(true);
    }
  }, [lazyLoaded]);

  const handleError = () => {
    setHasError(true);
    if (fallback && imageSrc !== fallback) {
      // Try fallback image
      const img = new Image();
      img.src = fallback;
      img.onload = () => {
        setIsLoaded(true);
      };
      img.onerror = () => {
        // Show placeholder if both images fail
        setIsLoaded(true);
      };
    } else {
      setIsLoaded(true);
    }
  };

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
        </div>
      )}
      
      <img
        src={imageSrc}
        alt={alt}
        loading={loading}
        sizes={sizes}
        width={width}
        height={height}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          willChange: 'opacity',
          transform: 'translateZ(0)'
        }}
      />
      
      {hasError && !isLoaded && (
        <div className="absolute inset-0 bg-gray-700 flex items-center justify-center">
          <div className="text-gray-400 text-sm">Image not available</div>
        </div>
      )}
    </div>
  );
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage; 