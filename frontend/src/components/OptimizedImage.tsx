import { useState, useRef, useEffect, memo } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: string;
  sizes?: string;
  quality?: number;
}

const OptimizedImage = memo(({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMyAxN0gyN1YxOUgxM1YxN1oiIGZpbGw9IiM5Q0EzQUYiLz4KPHBhdGggZD0iTTEzIDIxSDI3VjIzSDEzVjIxWiIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNMTMgMjVIMjdWMjdIMTNWMjVaIiBmaWxsPSIjOUNBM0FGIi8+Cjwvc3ZnPgo=',
  sizes = '100vw',
  quality = 75
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) {
      setIsLoaded(true);
    }
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setIsError(true);
    setIsLoaded(true);
  };

  const imageClasses = cn(
    'transition-opacity duration-300',
    {
      'opacity-0': !isLoaded,
      'opacity-100': isLoaded,
    },
    className
  );

  const placeholderClasses = cn(
    'absolute inset-0 bg-gray-200 animate-pulse',
    {
      'opacity-0': isLoaded,
      'opacity-100': !isLoaded,
    }
  );

  if (isError) {
    return (
      <div className={cn('flex items-center justify-center bg-gray-100 text-gray-500', className)}>
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
        </svg>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden">
      {/* Placeholder */}
      {!isLoaded && (
        <div className={placeholderClasses}>
          <img
            src={placeholder}
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>
      )}
      
      {/* Main Image */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={imageClasses}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          willChange: 'opacity',
        }}
      />
    </div>
  );
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage; 