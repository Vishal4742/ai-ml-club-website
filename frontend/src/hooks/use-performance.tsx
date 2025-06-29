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

// Performance optimized scroll hook
export const useOptimizedScroll = (callback: (scrollY: number) => void, threshold = 16) => {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  const throttledCallback = useCallback(
    throttle((scrollY: number) => {
      callbackRef.current(scrollY);
    }, threshold),
    [threshold]
  );

  useEffect(() => {
    const handleScroll = () => {
      throttledCallback(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [throttledCallback]);
};

// Performance optimized intersection observer hook
export const useIntersectionObserver = (
  callback: (entry: IntersectionObserverEntry) => void,
  options: IntersectionObserverInit = {}
) => {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  const observerRef = useRef<IntersectionObserver | null>(null);

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

  useEffect(() => {
    const defaultOptions: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
      ...options
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        callbackRef.current(entry);
      });
    }, defaultOptions);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [options]);

  return { observe, unobserve };
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