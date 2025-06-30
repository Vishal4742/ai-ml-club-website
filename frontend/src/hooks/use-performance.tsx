import { useEffect, useRef, useCallback, useState } from 'react';

// Throttle function for performance
export const throttle = (func: Function, limit: number) => {
  let inThrottle: boolean;
  return function(this: any, ...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Debounce function for performance
export const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout;
  return function(this: any, ...args: any[]) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

// Performance monitoring hook
export const usePerformanceMonitor = () => {
  const observerRef = useRef<PerformanceObserver | null>(null);

  const logPerformanceMetric = useCallback((name: string, value: number) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`🚀 Performance: ${name} = ${value.toFixed(2)}ms`);
    }
    
    // Send to analytics in production
    if (process.env.NODE_ENV === 'production') {
      // You can send to Google Analytics, Sentry, or your analytics service
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'performance', {
          event_category: 'web_vitals',
          event_label: name,
          value: Math.round(value),
        });
      }
    }
  }, []);

  useEffect(() => {
    // Monitor Core Web Vitals
    if ('PerformanceObserver' in window) {
      try {
        observerRef.current = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            const metric = entry as PerformanceEntry;
            
            switch (metric.entryType) {
              case 'largest-contentful-paint':
                logPerformanceMetric('LCP', metric.startTime);
                break;
              case 'first-input':
                logPerformanceMetric('FID', (metric as any).processingStart - metric.startTime);
                break;
              case 'layout-shift':
                logPerformanceMetric('CLS', (metric as any).value);
                break;
              case 'navigation':
                logPerformanceMetric('TTFB', (metric as any).responseStart - metric.startTime);
                break;
            }
          }
        });

        observerRef.current.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'navigation'] });
      } catch (error) {
        console.warn('Performance monitoring not supported:', error);
      }
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [logPerformanceMetric]);

  return { logPerformanceMetric };
};

// Optimized scroll handler
export const useOptimizedScroll = (callback: (scrollY: number) => void, throttleMs: number = 16) => {
  const tickingRef = useRef(false);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      if (!tickingRef.current) {
        requestAnimationFrame(() => {
          if (Math.abs(scrollY - lastScrollYRef.current) > 5) {
            callback(scrollY);
            lastScrollYRef.current = scrollY;
          }
          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [callback, throttleMs]);
};

// Intersection Observer for lazy loading
export const useIntersectionObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = {}
) => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if ('IntersectionObserver' in window) {
      observerRef.current = new IntersectionObserver(callback, {
        rootMargin: '50px',
        threshold: 0.1,
        ...options,
      });
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [callback, options]);

  const observe = useCallback((element: Element) => {
    if (observerRef.current) {
      observerRef.current.observe(element);
    }
  }, []);

  const unobserve = useCallback((element: Element) => {
    if (observerRef.current) {
      observerRef.current.unobserve(element);
    }
  }, []);

  return { observe, unobserve };
};

// Memory usage monitoring
export const useMemoryMonitor = () => {
  useEffect(() => {
    if ('memory' in performance) {
      const checkMemory = () => {
        const memory = (performance as any).memory;
        const usedMB = memory.usedJSHeapSize / 1024 / 1024;
        const totalMB = memory.totalJSHeapSize / 1024 / 1024;
        const limitMB = memory.jsHeapSizeLimit / 1024 / 1024;

        if (process.env.NODE_ENV === 'development') {
          console.log(`🧠 Memory: ${usedMB.toFixed(1)}MB / ${totalMB.toFixed(1)}MB (${limitMB.toFixed(1)}MB limit)`);
        }

        // Warn if memory usage is high
        if (usedMB / limitMB > 0.8) {
          console.warn('⚠️ High memory usage detected');
        }
      };

      const interval = setInterval(checkMemory, 30000); // Check every 30 seconds
      return () => clearInterval(interval);
    }
  }, []);
};

// Error boundary hook
export const useErrorBoundary = (onError?: (error: Error, errorInfo: any) => void) => {
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      const error = new Error(event.message);
      error.stack = event.error?.stack;
      
      if (onError) {
        onError(error, { componentStack: event.error?.stack });
      }
      
      if (process.env.NODE_ENV === 'production') {
        // Send to error tracking service
        if (typeof window !== 'undefined' && (window as any).Sentry) {
          (window as any).Sentry.captureException(error);
        }
      }
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const error = new Error('Unhandled Promise Rejection');
      error.stack = event.reason?.stack;
      
      if (onError) {
        onError(error, { promise: event.promise });
      }
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, [onError]);
};

// Resource loading optimization
export const useResourcePreload = (resources: string[]) => {
  useEffect(() => {
    resources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = resource.endsWith('.css') ? 'style' : 'script';
      link.href = resource;
      document.head.appendChild(link);
    });
  }, [resources]);
};

// Performance optimized resize hook
export const useOptimizedResize = (callback: (dimensions: { width: number; height: number }) => void) => {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  const debouncedCallback = useCallback(
    debounce(() => {
      callbackRef.current({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }, 100),
    []
  );

  useEffect(() => {
    window.addEventListener('resize', debouncedCallback, { passive: true });
    return () => window.removeEventListener('resize', debouncedCallback);
  }, [debouncedCallback]);
};

// Performance optimized click outside hook
export const useClickOutside = (ref: React.RefObject<HTMLElement>, callback: () => void) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [ref, callback]);
};

// Performance optimized key press hook
export const useKeyPress = (key: string, callback: () => void) => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === key) {
        callback();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [key, callback]);
};

// Performance optimized media query hook
export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
};

// Performance optimized lazy loading hook
export const useLazyLoad = (src: string, fallback?: string) => {
  const [imageSrc, setImageSrc] = useState(fallback || src);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
    };
    img.onerror = () => {
      if (fallback) {
        setImageSrc(fallback);
        setIsLoaded(true);
      }
    };
  }, [src, fallback]);

  return { imageSrc, isLoaded };
}; 